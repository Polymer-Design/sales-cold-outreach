#!/usr/bin/env python3
"""Deterministic voice gate. Flags em dashes and banned words/phrases/openers in a
draft. The fact-check-email skill runs this before its judgment checks; a nonzero
exit means the draft cannot pass.

Only lints the actual email bodies/subjects in a draft file (the sections under
`email_1/2/3` and `subject:`), not the research notes or frontmatter, so a banned
word appearing in a source quote doesn't cause a false fail.

Usage:
  python scripts/voice_check.py path/to/draft.md
  echo "some text" | python scripts/voice_check.py -
Exit 0 = clean, 1 = violations found (printed), 2 = usage error.
"""

import re
import sys
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent


def load_bans() -> dict:
    return yaml.safe_load((REPO_ROOT / "config/voice-bans.yaml").read_text())


def extract_email_text(raw: str) -> str:
    """Pull just the subjects and bodies out of a draft file. If the input isn't a
    structured draft (e.g. piped plain text), lint the whole thing."""
    if "## email_1" not in raw and "email_1" not in raw:
        return raw
    chunks = []
    # subject: lines and body: blocks under each email_N section
    for m in re.finditer(r"^\s*subject:\s*(.+)$", raw, re.M):
        chunks.append(m.group(1))
    for m in re.finditer(r"body:\s*\|?\n(.*?)(?=\n##|\n\w+:|\Z)", raw, re.S):
        chunks.append(m.group(1))
    return "\n".join(chunks) if chunks else raw


def check(text: str, bans: dict) -> list[str]:
    hits = []
    low = text.lower()

    if "—" in text:
        hits.append("em dash (—) present - not allowed in cold email")
    for m in re.finditer(r"\S+\s--\s\S+|\S+--\S+", text):
        hits.append(f"double-hyphen dash doing pivot work: '{m.group(0).strip()}'")

    for w in bans.get("banned_words", []):
        if re.search(rf"\b{re.escape(w.lower())}\b", low):
            hits.append(f"banned word: '{w}'")
    for p in bans.get("banned_phrases", []):
        if p.lower() in low:
            hits.append(f"banned phrase: '{p}'")
    for o in bans.get("banned_openers", []):
        if o.lower() in low:
            hits.append(f"banned opener: '{o}'")
    return hits


def main() -> None:
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(2)
    src = sys.argv[1]
    raw = sys.stdin.read() if src == "-" else Path(src).read_text()
    hits = check(extract_email_text(raw), load_bans())
    if hits:
        print(f"VOICE CHECK FAILED ({len(hits)} issue(s)):")
        for h in hits:
            print(f"  - {h}")
        sys.exit(1)
    print("Voice check passed (no banned words, phrases, openers, or em dashes).")


if __name__ == "__main__":
    main()
