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
(docs.apollo.io/reference/sync-report).

STATUS (2026-10-14): six live round-trips today got the request almost entirely right -
date_range, group_bys, pivot_group_by, sorts, filters, both totals-selected booleans, and
skip_group_by_value are all confirmed correct (stopped erroring once set as they are
below), and within each metrics entry the smart_datetime_reference/smart_user_id_reference
fields are confirmed correct too (verified against a real working example in Apollo's own
CLI docs). The ONE thing still unresolved: whatever field identifies which metric a
metrics entry is for still 400s as blank ("Metrics must have key value") - tried both
"key" and "metric" as the field name with the same value (the public/MCP-facing metric
name, e.g. "num_emails_sent") and got the identical error either way, so the real blocker
is most likely the VALUE this API wants there, not the field name - probably a different
internal metric identifier than what Apollo's own docs/MCP tool expose publicly. Paused
here rather than keep guessing blind; see fetch_bounce_report()'s comment for the exact
next step (copy the real request from Apollo Analytics' own UI network tab) if revisited.
Until then this fails safe: every mailbox reports insufficient_data and a watch alert
fires with the full error text - nothing silently reports healthy. Also worth noting: as
of today there's 0 real send volume in the lookback window anyway (confirmed via a
successful equivalent call through the Apollo MCP connector), so fixing this won't change
today's numbers either way - it matters once real sending starts.

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
            # Third evidence-based attempt (2026-10-14). The real endpoint's field names
            # don't follow one consistent rule vs. Apollo's public doc / the MCP tool's
            # schema - some are pluralized (group_by -> group_bys), some aren't
            # (pivot_group_by stays singular) - confirmed because those two stopped
            # erroring once set this way. What's still failing, and why, per the third
            # 400's full body:
            #   - STOPPED HERE (2026-10-14) after 6 live round-trips - see the module
            #     docstring "STATUS" note for why and what's confirmed vs. still unknown.
            #     Everything below except the metric-identifying field inside `metrics`
            #     is confirmed correct (date_range, group_bys, pivot_group_by, sorts,
            #     filters, both totals-selected booleans, skip_group_by_value, and the
            #     two smart_*_reference fields all stopped erroring). Only the value under
            #     whatever that identifying field is called still 400s as blank - tried
            #     both "key" and "metric" as the field name with the same literal value
            #     ("num_emails_sent" etc, the public/MCP-facing name) and got the identical
            #     error either way, so the real blocker is probably the VALUE, not the
            #     field name - this API likely wants a different internal metric
            #     identifier than the one its own docs and MCP tool expose. Left as "key"
            #     since that's what the error text's humanized attribute name actually
            #     says. Next step if revisited: Apollo Analytics -> build the same report
            #     from scratch in the UI -> copy the network request it sends (the docs'
            #     own suggested method) rather than guessing further blind.
            "date_range": {"modality": "last_30_days"},
            "group_bys": ["email_account_id"],
            "pivot_group_by": [],
            "metrics": [
                {"key": "num_emails_sent",
                 "smart_datetime_reference": "emailer_message__sent_at",
                 "smart_user_id_reference": "emailer_message__user_id"},
                {"key": "num_emails_delivered",
                 "smart_datetime_reference": "emailer_message__delivered_at",
                 "smart_user_id_reference": "emailer_message__user_id"},
                {"key": "num_emails_bounced",
                 "smart_datetime_reference": "emailer_message__bounced_at",
                 "smart_user_id_reference": "emailer_message__user_id"},
            ],
            "sorts": [{"metric": "num_emails_sent", "asc": False}],
            "filters": {"user_ids": ["current"]},
            "group_by_totals_selected": False,
            "pivot_group_by_totals_selected": False,
            "skip_group_by_value": [],
        },
        timeout=30,
    )
    if resp.status_code >= 400:
        # Full error goes to the job log for whoever's debugging this later - the email
        # itself stays a short, plain reminder (Ethan's own request: he's fine not having
        # this automated as long as he gets pinged to go check it himself).
        print(f"sync_report {resp.status_code}: {resp.text[:1500]}", file=sys.stderr)
        notify_send(
            "Couldn't pull mailbox bounce rates automatically",
            "No numbers this run - check mailbox health yourself in Apollo "
            "(Settings -> Email Accounts, or the Analytics tab) to see if anything needs "
            "attention. (Full error is in this job's log if anyone wants to dig in.)",
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
        print(str(e), file=sys.stderr)
        notify_send(
            "Couldn't pull mailbox bounce rates automatically",
            "No numbers this run - check mailbox health yourself in Apollo "
            "(Settings -> Email Accounts, or the Analytics tab) to see if anything needs "
            "attention. (Full details are in this job's log if anyone wants to dig in.)",
            urgency="watch",
        )
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
