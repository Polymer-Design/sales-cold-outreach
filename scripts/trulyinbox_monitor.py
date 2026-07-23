#!/usr/bin/env python3
"""Inbox-health failsafe. Reads TrulyInbox health scores, alerts when a mailbox
is degrading, and tells Ethan to spin up + warm a replacement before it takes
sending down with it.

TrulyInbox exposes an Open API (developer.trulyinbox.com) with per-mailbox health
scores (0-100), per-ESP breakdown, and SPF/DKIM/DMARC + blacklist status.

IMPORTANT - one thing to confirm once the API key is in hand: the exact base URL,
auth header, and JSON field names below are the documented shape as best determined
without the key. They are ISOLATED in `fetch_health()` and `_normalize()` so
confirming them against the live docs is a one-function edit, nothing else changes.
Until then, run with --fixture to exercise the whole alert path against local JSON.

Thresholds live in config/system.yaml `inbox_health` so Ethan can tune without code.

Usage:
  python scripts/trulyinbox_monitor.py                 # live (needs TRULYINBOX_API_KEY)
  python scripts/trulyinbox_monitor.py --fixture data/fixtures/trulyinbox-sample.json
"""

import argparse
import json
import os
import sys
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))
from notify import send as notify_send  # noqa: E402

API_BASE = os.environ.get("TRULYINBOX_API_BASE", "https://api.trulyinbox.com/v1")


def load_thresholds() -> dict:
    sysc = yaml.safe_load((REPO_ROOT / "config/system.yaml").read_text())
    return sysc.get("inbox_health", {}) or {}


def fetch_health(fixture: str | None) -> list[dict]:
    """Return raw TrulyInbox mailbox records. --fixture reads local JSON instead of the API."""
    if fixture:
        return json.loads(Path(fixture).read_text())
    key = os.environ.get("TRULYINBOX_API_KEY", "").strip()
    if not key:
        print("TRULYINBOX_API_KEY not set - skipping live health check (healthy no-op).")
        return []
    import requests
    resp = requests.get(f"{API_BASE}/mailboxes",
                        headers={"Authorization": f"Bearer {key}"}, timeout=30)
    if resp.status_code >= 400:
        # Do not crash the daily job over a monitoring hiccup; alert and move on.
        notify_send("Inbox monitor could not reach TrulyInbox",
                    f"GET {API_BASE}/mailboxes returned {resp.status_code}: {resp.text[:300]}\n"
                    "Confirm the API base/auth/field names in scripts/trulyinbox_monitor.py "
                    "against developer.trulyinbox.com.", urgency="watch")
        return []
    data = resp.json()
    return data.get("mailboxes", data if isinstance(data, list) else [])


def _normalize(rec: dict) -> dict:
    """Map TrulyInbox's record onto the fields we alert on. Adjust keys here if the
    live API differs; everything downstream uses this normalized shape."""
    return {
        "email": rec.get("email") or rec.get("address") or "unknown",
        "score": rec.get("health_score", rec.get("score", rec.get("deliverability_score"))),
        "blacklisted": bool(rec.get("blacklisted") or rec.get("is_blacklisted")),
        "auth_ok": rec.get("auth_ok", not rec.get("auth_issues", False)),
        "warming": bool(rec.get("warming") or rec.get("in_warmup")),
        "esp": rec.get("esp") or rec.get("provider", ""),
    }


def evaluate(mailboxes: list[dict], th: dict) -> tuple[list[str], list[str]]:
    watch_below = th.get("thresholds", {}).get("watch_below", 90)
    alarm_below = th.get("thresholds", {}).get("alarm_below", 80)
    alarms, watches = [], []
    for raw in mailboxes:
        m = _normalize(raw)
        score = m["score"]
        reasons = []
        if m["blacklisted"]:
            reasons.append("BLACKLISTED")
        if not m["auth_ok"]:
            reasons.append("SPF/DKIM/DMARC failing")
        if isinstance(score, (int, float)) and score < alarm_below:
            reasons.append(f"health {score} < alarm {alarm_below}")
        if reasons:
            alarms.append(f"{m['email']} ({m['esp']}): " + ", ".join(reasons))
        elif isinstance(score, (int, float)) and score < watch_below:
            watches.append(f"{m['email']} ({m['esp']}): health {score} "
                           f"(< watch {watch_below}, ok but trending down)")
    return alarms, watches


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--fixture")
    args = ap.parse_args()

    th = load_thresholds()
    mailboxes = fetch_health(args.fixture)
    if not mailboxes:
        print("No mailbox data to evaluate.")
        return

    alarms, watches = evaluate(mailboxes, th)

    if alarms:
        body = ("These mailboxes need action NOW. For each: pause/reduce its sends, and "
                "spin up + start warming a replacement inbox so capacity holds.\n\n"
                + "\n".join(f"  - {a}" for a in alarms))
        if watches:
            body += "\n\nAlso worth watching:\n" + "\n".join(f"  - {w}" for w in watches)
        notify_send(f"{len(alarms)} inbox(es) flagged - warm a replacement", body, urgency="alarm")
    elif watches:
        body = ("No emergencies, but these are trending down. Consider easing their daily "
                "send volume:\n\n" + "\n".join(f"  - {w}" for w in watches))
        notify_send(f"{len(watches)} inbox(es) trending down", body, urgency="watch")

    print(json.dumps({"checked": len(mailboxes), "alarms": alarms, "watches": watches}, indent=2))


if __name__ == "__main__":
    main()
