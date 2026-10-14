#!/usr/bin/env python3
"""Mailbox health check via Apollo's own send/bounce data - replaces TrulyInbox.

Apollo now does both jobs: warming (ramped sending volume on a newly connected
mailbox - built into Apollo itself, nothing to call here) and the health signal
(per-mailbox bounce rate, computed from Apollo's own analytics). TrulyInbox is
retired - it exposed a 0-100 composite score plus blacklist/SPF/DKIM checks that
Apollo's API has no equivalent for, so this is a deliberately narrower signal
(bounce rate only), not a like-for-like replacement.

Data source: POST /v1/reports/sync_report, grouped by email_account_id. Confirmed real,
public, and free (0 credit cost) against Apollo's own API reference
(docs.apollo.io/reference/sync-report). The first real run (2026-10-14) 400'd - the
live endpoint needs a few fields beyond what the public doc and the MCP connector's
equivalent tool both show, added below with the exact error text explaining why. If it
400s again, the error notification now includes the full response body (was truncated
to 300 chars before - long enough to miss the actual reason), so the next fix won't be
another guess. Either way, the bug is isolated to fetch_bounce_report()/_extract_groups()
below - nothing else needs touching. Same isolation pattern the old TrulyInbox script
used for its own unconfirmed parts.

Thresholds (bounce rate %, not a 0-100 score) live in config/system.yaml
`inbox_health.thresholds` - starting lines per that file's own comment, tune with
real send data once live mode is on.

Writes data/inbox-health/latest.json every run (even when nothing is alarming) so
the dashboard always has a current per-mailbox status - the dashboard reads
committed data/config only, it never calls Apollo directly.

Usage:
  python scripts/apollo_inbox_health.py                      # live (needs APOLLO_API_KEY)
  python scripts/apollo_inbox_health.py --fixture data/fixtures/apollo-sync-report-sample.json
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

import requests
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))
from notify import send as notify_send  # noqa: E402

BASE = "https://api.apollo.io/api/v1"
OUT_PATH = REPO_ROOT / "data/inbox-health/latest.json"


def _key() -> str | None:
    key = os.environ.get("APOLLO_API_KEY", "").strip()
    if not key:
        print("APOLLO_API_KEY not set - skipping live health check (healthy no-op).")
        return None
    return key


def load_thresholds() -> dict:
    sysc = yaml.safe_load((REPO_ROOT / "config/system.yaml").read_text())
    return (sysc.get("inbox_health", {}) or {}).get("thresholds", {}) or {}


def get_email_accounts(key: str) -> list[dict]:
    resp = requests.get(f"{BASE}/email_accounts", headers={"X-Api-Key": key}, timeout=30)
    resp.raise_for_status()
    return resp.json().get("email_accounts", [])


def fetch_bounce_report(key: str, fixture: str | None) -> dict:
    if fixture:
        return json.loads(Path(fixture).read_text())
    resp = requests.post(
        f"{BASE}/reports/sync_report",
        headers={"X-Api-Key": key, "Content-Type": "application/json"},
        json={
            # The real endpoint uses PLURAL field names that differ from both Apollo's
            # own public reference doc and the MCP connector's equivalent tool (both show
            # singular date_range/group_by/sort) - confirmed from two real 400s today
            # (2026-10-14), the second with the full, untruncated error body:
            # "...group_bys is required, pivot_group_by is required, metrics is required,
            # sorts is required, filters is required, group_by_totals_selected is
            # required, pivot_group_by_totals_selected is required, date_ranges is
            # required, Skip group by values must be an array". The MCP tool evidently
            # renames these server-side for its own auth path; a plain API key needs the
            # real names explicit. This is the second, evidence-based attempt - if it's
            # still wrong, the notify body below has the full response, not a guess.
            "date_ranges": [{"modality": "last_30_days"}],
            "group_bys": ["email_account_id"],
            "metrics": ["num_emails_sent", "num_emails_delivered", "num_emails_bounced"],
            "pivot_group_by": [],
            "sorts": [],
            "filters": {},
            "group_by_totals_selected": [],
            "pivot_group_by_totals_selected": [],
            "skip_group_by_values": [],
            "is_super_analytics": False,
            "send_granular_current_and_past_data": False,
            "past_data_granularity_level": None,
        },
        timeout=30,
    )
    if resp.status_code >= 400:
        notify_send(
            "Inbox monitor could not reach Apollo's analytics API",
            f"POST {BASE}/reports/sync_report returned {resp.status_code}: {resp.text[:1500]}\n"
            "Confirm the request shape in scripts/apollo_inbox_health.py against "
            "docs.apollo.io/reference/sync-report.",
            urgency="watch",
        )
        return {}
    return resp.json()


def _extract_groups(report: dict) -> list[dict]:
    """Isolated on purpose - this is the one part of the response shape that hasn't
    been confirmed live (see module docstring). Tries the plausible shapes; raises
    clearly if none match, so the alert names this function instead of every
    mailbox silently reading as healthy."""
    candidates = [
        lambda r: r["groups"],
        lambda r: r["data"]["groups"],
        lambda r: r["data"] if isinstance(r.get("data"), list) else None,
    ]
    for get in candidates:
        try:
            got = get(report)
            if isinstance(got, list):
                return got
        except (KeyError, TypeError):
            continue
    raise ValueError(f"Unrecognized sync_report response shape: {json.dumps(report)[:300]}")


def _group_metrics(g: dict) -> tuple[str | None, dict]:
    key = g.get("group") if isinstance(g.get("group"), dict) else g.get("key")
    account_id = key.get("email_account_id") if isinstance(key, dict) else key
    metrics = g.get("metrics") if isinstance(g.get("metrics"), dict) else g
    return account_id, metrics


def build_status(accounts: list[dict], groups: list[dict], th: dict) -> list[dict]:
    watch_above = th.get("bounce_watch_above_pct", 3)
    alarm_above = th.get("bounce_alarm_above_pct", 5)
    min_sends = th.get("min_sends_to_evaluate", 20)

    by_id: dict[str, dict] = {}
    for g in groups:
        account_id, m = _group_metrics(g)
        if account_id:
            by_id[account_id] = m

    out = []
    for acct in accounts:
        m = by_id.get(acct["id"], {})
        sent = m.get("num_emails_sent") or 0
        bounced = m.get("num_emails_bounced") or 0
        if sent < min_sends:
            status, rate = "insufficient_data", None
        else:
            rate = round(bounced / sent * 100, 1)
            status = "alarm" if rate >= alarm_above else "watch" if rate >= watch_above else "healthy"
        out.append({
            "email": acct.get("email"),
            "sent_last_30d": sent,
            "bounced_last_30d": bounced,
            "bounce_rate_pct": rate,
            "status": status,
        })
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--fixture")
    args = ap.parse_args()

    key = _key()
    if not key and not args.fixture:
        return

    th = load_thresholds()
    accounts = get_email_accounts(key) if key else json.loads(
        (REPO_ROOT / "data/fixtures/apollo-email-accounts-sample.json").read_text()
    ).get("email_accounts", [])
    report = fetch_bounce_report(key, args.fixture)

    try:
        groups = _extract_groups(report) if report else []
    except ValueError as e:
        notify_send("Inbox monitor couldn't parse Apollo's analytics response", str(e), urgency="watch")
        groups = []

    statuses = build_status(accounts, groups, th)

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps({
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "window_days": 30,
        "thresholds": {
            "bounce_watch_above_pct": th.get("bounce_watch_above_pct", 3),
            "bounce_alarm_above_pct": th.get("bounce_alarm_above_pct", 5),
        },
        "mailboxes": statuses,
    }, indent=2) + "\n")

    alarms = [m for m in statuses if m["status"] == "alarm"]
    watches = [m for m in statuses if m["status"] == "watch"]

    if alarms:
        body = ("These mailboxes need action NOW: pause/reduce sends, and connect + start "
                 "warming a replacement (Apollo ramps new mailboxes automatically).\n\n"
                 + "\n".join(f"  - {m['email']}: {m['bounce_rate_pct']}% bounce rate "
                              f"({m['bounced_last_30d']}/{m['sent_last_30d']})" for m in alarms))
        if watches:
            body += "\n\nAlso worth watching:\n" + "\n".join(
                f"  - {m['email']}: {m['bounce_rate_pct']}% bounce rate" for m in watches)
        notify_send(f"{len(alarms)} inbox(es) flagged - warm a replacement", body, urgency="alarm")
    elif watches:
        body = "No emergencies, but bounce rate is creeping up:\n\n" + "\n".join(
            f"  - {m['email']}: {m['bounce_rate_pct']}% bounce rate" for m in watches)
        notify_send(f"{len(watches)} inbox(es) trending risky", body, urgency="watch")

    print(json.dumps({"evaluated": len(statuses), "alarms": len(alarms), "watches": len(watches)}, indent=2))


if __name__ == "__main__":
    main()
