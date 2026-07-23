#!/usr/bin/env python3
"""Process approved booking replies after their PR merges to the default branch.

Approval model: the booking-reply skill opens a PR containing the draft in
data/queue/pending-approval/. A human merging that PR IS the approval. This script
runs on push to the default branch and handles every file in pending-approval/.

Sending: Apollo's public API does not have a clean documented "send one-off reply
in an existing thread" endpoint. Until that's proven against a live mailbox, this
script does the reliable thing instead of the clever thing:

  1. Creates an Apollo task on the contact ("Send approved booking reply") with the
     full email body, so it's one paste-and-send in Apollo's inbox view, AND
  2. Moves the file to data/queue/approved-to-send/ where it stays visible until
     a human (or a later Gmail-API integration) confirms the send, then moves it
     to data/queue/sent/.

TODO(upgrade): swap step 1/2 for a real automated send once one of these is proven:
  - Apollo emailer_messages create+send_now against a connected mailbox
  - Gmail API send from the Workspace tenant that owns the cold inboxes
"""

import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

import requests
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
PENDING = REPO_ROOT / "data/queue/pending-approval"
TO_SEND = REPO_ROOT / "data/queue/approved-to-send"


def parse_frontmatter(text: str) -> dict:
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    return yaml.safe_load(m.group(1)) if m else {}


def create_apollo_task(contact_id: str, title: str, note: str) -> bool:
    key = os.environ.get("APOLLO_API_KEY", "").strip()
    if not key or not contact_id:
        return False
    resp = requests.post(
        "https://api.apollo.io/api/v1/tasks/bulk_create",
        json={"contact_ids": [contact_id], "type": "action_item", "priority": "high",
              "status": "scheduled", "note": note, "title": title,
              "due_at": datetime.now(timezone.utc).isoformat()},
        headers={"X-Api-Key": key, "Content-Type": "application/json"}, timeout=30)
    return resp.status_code < 400


def main() -> None:
    mode = yaml.safe_load((REPO_ROOT / "config/system.yaml").read_text()).get("mode")
    files = sorted(PENDING.glob("*.md")) if PENDING.exists() else []
    if not files:
        print("No approved booking replies to process.")
        return

    TO_SEND.mkdir(parents=True, exist_ok=True)
    problems = []
    for f in files:
        text = f.read_text()
        meta = parse_frontmatter(text)
        name, org = meta.get("contact_name", "?"), meta.get("organization", "?")
        if mode != "live":
            print(f"HOLD {f.name}: approved, but system mode={mode}. Leaving in queue.")
            continue
        tasked = create_apollo_task(
            str(meta.get("apollo_contact_id") or ""),
            f"Send approved booking reply to {name} ({org})",
            text)
        stamp = f"\n\n## processed\napproved_and_queued_at: {datetime.now(timezone.utc).isoformat()}\n" \
                f"apollo_task_created: {str(tasked).lower()}\n"
        (TO_SEND / f.name).write_text(text + stamp)
        f.unlink()
        print(f"APPROVED {f.name} -> approved-to-send/ (Apollo task: {tasked})")
        if not tasked:
            problems.append(f.name)

    if problems:
        print(f"\nWARNING: Apollo task creation failed for: {problems}. "
              "The drafts are in data/queue/approved-to-send/ - send them manually.")
        sys.exit(1)


if __name__ == "__main__":
    main()
