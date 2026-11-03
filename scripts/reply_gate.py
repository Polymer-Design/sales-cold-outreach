#!/usr/bin/env python3
"""Free check before reply-check calls Claude: is there any reply nobody has handled yet?

Every reply-check so far (3 a day since mid-October) found 0 new replies and still paid for
a Claude run to say so. This asks Apollo directly (the same `apollo_client.py replies` scan
the Claude run uses) and compares the replied message ids against data/replies/seen.json.

  check   prints `new=true|false` for $GITHUB_OUTPUT. Fails open: if Apollo can't be read,
          it says new=true so Claude runs and nothing is missed.
  mark    after a successful Claude run, records the replied ids it was shown, so they
          don't trigger another run. A failed run doesn't mark them, so the next check
          tries again.

Usage:
  python scripts/reply_gate.py check
  python scripts/reply_gate.py mark
"""

import json
import os
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SEEN = REPO_ROOT / "data/replies/seen.json"
PENDING = Path(os.environ.get("RUNNER_TEMP", "/tmp")) / "reply-gate-ids.json"


def replied_ids() -> list[str] | None:
    out = subprocess.run([sys.executable, str(REPO_ROOT / "scripts/apollo_client.py"), "replies"],
                         capture_output=True, text=True)
    if out.returncode != 0:
        print(out.stderr.strip()[:500], file=sys.stderr)
        return None
    try:
        msgs = json.loads(out.stdout).get("emailer_messages", [])
    except json.JSONDecodeError:
        return None
    return sorted({m["id"] for m in msgs if m.get("id")})


def seen() -> set[str]:
    try:
        return set(json.loads(SEEN.read_text()))
    except (OSError, json.JSONDecodeError):
        return set()


def check() -> None:
    ids = replied_ids()
    if ids is None:
        print("Couldn't read replies from Apollo - running Claude to be safe.", file=sys.stderr)
        print("new=true")
        return
    new = [i for i in ids if i not in seen()]
    PENDING.write_text(json.dumps(ids))
    print(f"{len(ids)} replied message(s) in Apollo, {len(new)} not handled yet.", file=sys.stderr)
    print(f"new={'true' if new else 'false'}")


def mark() -> None:
    try:
        ids = set(json.loads(PENDING.read_text()))
    except (OSError, json.JSONDecodeError):
        return
    SEEN.write_text(json.dumps(sorted(seen() | ids), indent=0) + "\n")
    PENDING.unlink(missing_ok=True)


if __name__ == "__main__":
    {"check": check, "mark": mark}[sys.argv[1] if len(sys.argv) > 1 else "check"]()
