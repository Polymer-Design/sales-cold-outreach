#!/usr/bin/env python3
"""Send an operator notification (default channel: email to Ethan).

Every alert in the system routes through here so the channel is swappable in one place.
Order of preference, first available wins:
  1. RESEND_API_KEY  -> Resend HTTP API (simplest to set up: one key)
  2. SMTP_HOST/USER/PASS -> plain SMTP
  3. neither -> write the alert to data/notifications/ and print it, so it's never lost
     (this is the expected path in dry_run / CI without secrets)

Recipient and from-address come from config/system.yaml `notifications`.
Sending internal alerts from hellopolymer.com is fine - the "never send from hellopolymer"
rule is about COLD OUTREACH, not internal ops mail.

Usage (CLI or import):
  python scripts/notify.py --subject "..." --body "..." [--urgency alarm|info]
  from notify import send; send(subject, body, urgency="alarm")
"""

import argparse
import json
import os
import smtplib
import sys
from datetime import datetime, timezone
from email.mime.text import MIMEText
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent


def _cfg() -> dict:
    data = yaml.safe_load((REPO_ROOT / "config/system.yaml").read_text())
    return data.get("notifications", {}) or {}


def _log_locally(subject: str, body: str, urgency: str) -> None:
    outdir = REPO_ROOT / "data/notifications"
    outdir.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    (outdir / f"{stamp}-{urgency}.md").write_text(
        f"# [{urgency.upper()}] {subject}\n\n{body}\n")
    print(f"[notify:local] ({urgency}) {subject}\n{body}")


def _send_resend(to: str, sender: str, subject: str, body: str) -> bool:
    import requests
    resp = requests.post(
        "https://api.resend.com/emails",
        headers={"Authorization": f"Bearer {os.environ['RESEND_API_KEY']}",
                 "Content-Type": "application/json"},
        json={"from": sender, "to": [to], "subject": subject, "text": body},
        timeout=30)
    if resp.status_code >= 400:
        print(f"[notify:resend] failed {resp.status_code}: {resp.text[:200]}", file=sys.stderr)
        return False
    return True


def _send_smtp(to: str, sender: str, subject: str, body: str) -> bool:
    msg = MIMEText(body)
    msg["Subject"], msg["From"], msg["To"] = subject, sender, to
    try:
        with smtplib.SMTP(os.environ["SMTP_HOST"], int(os.environ.get("SMTP_PORT", "587"))) as s:
            s.starttls()
            s.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
            s.send_message(msg)
        return True
    except Exception as e:  # noqa: BLE001 - alerting must never crash the caller
        print(f"[notify:smtp] failed: {e}", file=sys.stderr)
        return False


def send(subject: str, body: str, urgency: str = "info") -> bool:
    """Return True if delivered over a real channel, False if only logged locally."""
    cfg = _cfg()
    to = cfg.get("to", "ethan@hellopolymer.com")
    sender = cfg.get("from", "alerts@hellopolymer.com")
    tagged = f"[Polymer outreach] {subject}"

    delivered = False
    if os.environ.get("RESEND_API_KEY"):
        delivered = _send_resend(to, sender, tagged, body)
    elif os.environ.get("SMTP_HOST"):
        delivered = _send_smtp(to, sender, tagged, body)

    # Always keep a local copy too, so alerts are auditable in the repo.
    _log_locally(subject, body, urgency)
    return delivered


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--subject", required=True)
    p.add_argument("--body", required=True)
    p.add_argument("--urgency", default="info", choices=["info", "watch", "alarm"])
    a = p.parse_args()
    ok = send(a.subject, a.body, a.urgency)
    print(json.dumps({"delivered_over_channel": ok}))


if __name__ == "__main__":
    main()
