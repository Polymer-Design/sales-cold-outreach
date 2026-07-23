#!/usr/bin/env python3
"""Live-mode preflight. Run before flipping config/system.yaml mode to live.

Exits nonzero with every unmet requirement listed. The pipeline also refuses live
actions unless this passes (scripts/apollo_client.py checks mode; this checks readiness).

Usage: python scripts/preflight.py [--skip-apollo]
"""

import argparse
import os
import subprocess
import sys
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--skip-apollo", action="store_true",
                    help="skip the live Apollo mailbox check (no API key available)")
    args = ap.parse_args()

    problems: list[str] = []

    system = yaml.safe_load((REPO_ROOT / "config/system.yaml").read_text())
    domains = yaml.safe_load((REPO_ROOT / "config/domains.yaml").read_text())

    if system.get("booking", {}).get("link") in (None, "", "REPLACE_ME"):
        problems.append("config/system.yaml booking.link is not set (Dubsado scheduler URL)")
    if system.get("can_spam", {}).get("physical_address") in (None, "", "REPLACE_ME"):
        problems.append("config/system.yaml can_spam.physical_address is not set (CAN-SPAM requires it)")

    expected_mailboxes: list[str] = []
    for icp, cfg in domains.items():
        boxes = cfg.get("mailboxes") or []
        real = [b for b in boxes if b and b != "REPLACE_ME"]
        if not real:
            problems.append(f"config/domains.yaml {icp}.mailboxes are still REPLACE_ME")
        for b in real:
            if not b.endswith("@" + cfg["domain"]):
                problems.append(f"{icp} mailbox {b} is not on {cfg['domain']}")
        expected_mailboxes += real

    for icp in ("startups", "churches"):
        icp_cfg = yaml.safe_load((REPO_ROOT / f"config/icp-{icp}.yaml").read_text())
        if icp_cfg.get("status") != "final":
            problems.append(f"config/icp-{icp}.yaml status is '{icp_cfg.get('status')}', needs 'final'")

    approved = [p for p in (REPO_ROOT / "knowledge/case-studies").glob("*.md")
                if not p.name.startswith("_") and p.name != "README.md"
                and "status: approved" in p.read_text()]
    if not approved:
        problems.append("no approved case study in knowledge/case-studies/ "
                        "(launch is possible without, but flagging on purpose)")

    if expected_mailboxes and not args.skip_apollo:
        if not os.environ.get("APOLLO_API_KEY"):
            problems.append("APOLLO_API_KEY not set, cannot verify mailboxes are connected in Apollo")
        else:
            out = subprocess.run(
                [sys.executable, str(REPO_ROOT / "scripts/apollo_client.py"), "email-accounts"],
                capture_output=True, text=True)
            if out.returncode != 0:
                problems.append(f"Apollo email-accounts check failed: {out.stderr.strip()[:200]}")
            else:
                connected = out.stdout
                for b in expected_mailboxes:
                    if b not in connected:
                        problems.append(f"mailbox {b} is not OAuth-connected in Apollo yet")

    if problems:
        print("PREFLIGHT FAILED - not ready for live mode:\n")
        for pr in problems:
            print(f"  - {pr}")
        sys.exit(1)
    print("Preflight passed. Safe to set mode: live in config/system.yaml.")


if __name__ == "__main__":
    main()
