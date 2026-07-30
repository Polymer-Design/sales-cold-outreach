#!/usr/bin/env python3
"""Conversion funnel: record stage transitions and compute Polymer's outreach rates.

The two numbers Ethan cares about:
  - booked-call rate = booked / emailed   (are the emails working?)
  - close rate       = won / booked        (are the calls working?)

Single source of truth: an append-only event log at data/funnel/events.jsonl. Each pipeline
step records the stage a lead reached; nothing is ever overwritten, so the history is auditable
(same pattern as the rest of data/). Stages, in order:

  emailed -> replied -> interested -> booked -> won | lost

Who records what:
  - emailed / replied / interested : the daily pipeline + reply-check jobs (automatic)
  - booked                         : the call-prep job, fired by the Dubsado booking (automatic)
  - won / lost                     : Ethan, after the call (manual) - see `mark` below

Usage:
  # record a transition (used by the automated jobs)
  python scripts/funnel.py record --email jane@acme.com --stage emailed --icp startups --org Acme

  # Ethan marks the outcome of a call
  python scripts/funnel.py mark --email jane@acme.com --outcome won
  python scripts/funnel.py mark --email jane@acme.com --outcome lost --note "went with in-house"

  # see the funnel and the two rates (optionally filtered)
  python scripts/funnel.py stats
  python scripts/funnel.py stats --icp churches --since 2026-08-01
  python scripts/funnel.py stats --json
"""

import argparse
import json
import sys
import time
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
LOG = REPO_ROOT / "data/funnel/events.jsonl"

# Ordered funnel. `won` and `lost` are terminal outcomes that both imply `booked`.
STAGES = ["emailed", "replied", "interested", "booked", "won", "lost"]
REACHES = {  # a lead at stage X has implicitly reached everything it passed through
    "emailed": {"emailed"},
    "replied": {"emailed", "replied"},
    "interested": {"emailed", "replied", "interested"},
    "booked": {"emailed", "replied", "interested", "booked"},
    "won": {"emailed", "replied", "interested", "booked", "won"},
    "lost": {"emailed", "replied", "interested", "booked", "lost"},
}


def _now() -> str:
    return time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())


def record(email: str, stage: str, icp: str = "", org: str = "", note: str = "") -> dict:
    if stage not in STAGES:
        sys.exit(f"Unknown stage '{stage}'. One of: {', '.join(STAGES)}")
    LOG.parent.mkdir(parents=True, exist_ok=True)
    event = {"at": _now(), "email": email.strip().lower(), "stage": stage,
             "icp": icp, "org": org, "note": note}
    with open(LOG, "a") as f:
        f.write(json.dumps(event) + "\n")
    return event


def _load(since: str | None, icp: str | None) -> list[dict]:
    if not LOG.exists():
        return []
    out = []
    with open(LOG) as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            e = json.loads(line)
            if since and e.get("at", "") < since:
                continue
            if icp and e.get("icp") != icp:
                continue
            out.append(e)
    return out


def stats(since: str | None, icp: str | None) -> dict:
    events = _load(since, icp)

    # Fold each lead down to the furthest stage it reached.
    reached: dict[str, set] = {}
    meta: dict[str, dict] = {}
    for e in events:
        email = e["email"]
        reached.setdefault(email, set()).update(REACHES.get(e["stage"], {e["stage"]}))
        meta.setdefault(email, {}).update({k: e[k] for k in ("icp", "org") if e.get(k)})

    def count(stage: str) -> int:
        return sum(1 for s in reached.values() if stage in s)

    counts = {s: count(s) for s in STAGES}
    emailed, booked, won = counts["emailed"], counts["booked"], counts["won"]

    def rate(num: int, den: int) -> float | None:
        return round(100 * num / den, 1) if den else None

    # Booked calls still awaiting a won/lost mark - the "needs you" list.
    awaiting = [
        {"email": em, **meta.get(em, {})}
        for em, s in reached.items()
        if "booked" in s and "won" not in s and "lost" not in s
    ]

    return {
        "leads_total": len(reached),
        "counts": counts,
        "booked_call_rate_pct": rate(booked, emailed),   # booked / emailed
        "close_rate_pct": rate(won, booked),             # won / booked
        "awaiting_outcome": awaiting,
        "filters": {"since": since, "icp": icp},
    }


def _print_stats(s: dict) -> None:
    c = s["counts"]
    print("Outreach funnel" + (f"  (icp={s['filters']['icp']})" if s["filters"]["icp"] else ""))
    print("-" * 40)
    for stage in STAGES:
        print(f"  {stage:11} {c[stage]:>5}")
    print("-" * 40)
    br = s["booked_call_rate_pct"]
    cr = s["close_rate_pct"]
    print(f"  booked-call rate (booked/emailed): {br if br is not None else 'n/a'}%")
    print(f"  close rate (won/booked):           {cr if cr is not None else 'n/a'}%")
    if s["awaiting_outcome"]:
        print(f"\n  {len(s['awaiting_outcome'])} booked call(s) awaiting a won/lost mark:")
        for a in s["awaiting_outcome"]:
            print(f"    - {a['email']} {('(' + a.get('org', '') + ')') if a.get('org') else ''}")
        print("    mark with: python scripts/funnel.py mark --email <email> --outcome won|lost")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    r = sub.add_parser("record", help="append a stage transition")
    r.add_argument("--email", required=True)
    r.add_argument("--stage", required=True, choices=STAGES)
    r.add_argument("--icp", default="")
    r.add_argument("--org", default="")
    r.add_argument("--note", default="")

    m = sub.add_parser("mark", help="record a call's outcome (won/lost)")
    m.add_argument("--email", required=True)
    m.add_argument("--outcome", required=True, choices=["won", "lost"])
    m.add_argument("--note", default="")

    st = sub.add_parser("stats", help="print the funnel and conversion rates")
    st.add_argument("--since", help="ISO timestamp/date lower bound (e.g. 2026-08-01)")
    st.add_argument("--icp", choices=["startups", "churches"])
    st.add_argument("--json", action="store_true")

    args = p.parse_args()

    if args.cmd == "record":
        print(json.dumps(record(args.email, args.stage, args.icp, args.org, args.note)))
    elif args.cmd == "mark":
        print(json.dumps(record(args.email, args.outcome, note=args.note)))
    elif args.cmd == "stats":
        s = stats(args.since, args.icp)
        if args.json:
            print(json.dumps(s, indent=2))
        else:
            _print_stats(s)


if __name__ == "__main__":
    main()
