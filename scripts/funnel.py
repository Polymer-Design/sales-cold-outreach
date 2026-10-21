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
  - booked                         : the call-prep job, fired by a Cal.com booking webhook or
                                      the dashboard's manual "Log a booked call" button
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


def record(email: str, stage: str, icp: str = "", org: str = "", note: str = "",
           source: str = "", arm: str = "") -> dict:
    if stage not in STAGES:
        sys.exit(f"Unknown stage '{stage}'. One of: {', '.join(STAGES)}")
    LOG.parent.mkdir(parents=True, exist_ok=True)
    # source is only meaningful on a "booked" event: did this call come from our own
    # outreach (call-prep matched them in data/leads/index.jsonl etc, per Step 1 of the
    # call-prep skill) or direct/organic (booked with no outreach history on file)?
    # "emailed"/"replied"/"interested" are by definition outreach-sourced, so source is
    # left blank there rather than redundantly set.
    # arm: which split-test arm this lead drew, if any experiment is running
    # (data/experiments.md) - e.g. EXP-001's research_arm (deep|light). Blank when no
    # experiment applies. Set once at "emailed" time; later stages for the same email
    # don't need to repeat it since stats() carries meta forward per email.
    event = {"at": _now(), "email": email.strip().lower(), "stage": stage,
             "icp": icp, "org": org, "note": note, "source": source, "arm": arm}
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


def stats(since: str | None, icp: str | None, arm: str | None = None) -> dict:
    events = _load(since, icp)

    # Fold each lead down to the furthest stage it reached.
    reached: dict[str, set] = {}
    meta: dict[str, dict] = {}
    for e in events:
        email = e["email"]
        reached.setdefault(email, set()).update(REACHES.get(e["stage"], {e["stage"]}))
        meta.setdefault(email, {}).update(
            {k: e[k] for k in ("icp", "org", "source", "arm") if e.get(k)})

    if arm:
        keep = {em for em, m in meta.items() if m.get("arm") == arm}
        reached = {em: s for em, s in reached.items() if em in keep}

    def count(stage: str) -> int:
        return sum(1 for s in reached.values() if stage in s)

    counts = {s: count(s) for s in STAGES}
    emailed, booked, won = counts["emailed"], counts["booked"], counts["won"]

    def rate(num: int, den: int) -> float | None:
        return round(100 * num / den, 1) if den else None

    # Split-test breakdown: if any lead in scope carries an arm, report emailed/replied/
    # interested/booked per arm so an experiment (e.g. EXP-001) can be judged without a
    # separate CLI call. Leads with no arm (no experiment applied) are left out of this
    # breakdown entirely rather than counted as a third bucket.
    by_arm: dict[str, dict] = {}
    if not arm:  # only build this when not already filtered to one arm
        arms_present = {m.get("arm") for m in meta.values() if m.get("arm")}
        for a in sorted(arms_present):
            arm_emails = {em for em, m in meta.items() if m.get("arm") == a}
            arm_reached = {em: s for em, s in reached.items() if em in arm_emails}
            arm_counts = {s: sum(1 for st in arm_reached.values() if s in st) for s in STAGES}
            by_arm[a] = {
                "sends": arm_counts["emailed"],
                "counts": arm_counts,
                "reply_rate_pct": rate(arm_counts["replied"], arm_counts["emailed"]),
                "interested_rate_pct": rate(arm_counts["interested"], arm_counts["emailed"]),
                "booked_call_rate_pct": rate(arm_counts["booked"], arm_counts["emailed"]),
            }

    # Two-layer booked breakdown: total intros booked, and the slice that came through
    # our own outreach (call-prep matched them, per the skill's Step 1) vs. direct/
    # organic (booked with nothing on file - referral, website, etc). Pre-source events
    # (recorded before this field existed) fall under "unknown" rather than being
    # silently dropped or miscounted either way.
    booked_emails = [em for em, s in reached.items() if "booked" in s]
    booked_by_source: dict[str, int] = {}
    for em in booked_emails:
        src = meta.get(em, {}).get("source") or "unknown"
        booked_by_source[src] = booked_by_source.get(src, 0) + 1
    booked_from_outreach = booked_by_source.get("outreach", 0)

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
        "booked_by_source": booked_by_source,
        "booked_from_outreach_pct": rate(booked_from_outreach, booked),
        "awaiting_outcome": awaiting,
        "by_arm": by_arm,
        "filters": {"since": since, "icp": icp, "arm": arm},
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
    if c["booked"]:
        op = s["booked_from_outreach_pct"]
        print(f"\n  booked by source (of {c['booked']} total):")
        for src, n in sorted(s["booked_by_source"].items(), key=lambda kv: -kv[1]):
            print(f"    {src:10} {n}")
        print(f"  -> {op if op is not None else 'n/a'}% of booked calls came from our outreach")
    if s["awaiting_outcome"]:
        print(f"\n  {len(s['awaiting_outcome'])} booked call(s) awaiting a won/lost mark:")
        for a in s["awaiting_outcome"]:
            print(f"    - {a['email']} {('(' + a.get('org', '') + ')') if a.get('org') else ''}")
        print("    mark with: python scripts/funnel.py mark --email <email> --outcome won|lost")
    if s.get("by_arm"):
        print("\n  split-test arms (see data/experiments.md):")
        for a, ad in s["by_arm"].items():
            rr = ad["reply_rate_pct"]
            br = ad["booked_call_rate_pct"]
            print(f"    {a:6} sends={ad['sends']:<4} "
                  f"reply={rr if rr is not None else 'n/a'}% "
                  f"booked={br if br is not None else 'n/a'}%")


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
    r.add_argument("--source", default="", choices=["", "outreach", "direct"],
                   help="Only meaningful on --stage booked: did this come from our own "
                        "outreach (matched in Step 1 of call-prep) or direct/organic?")
    r.add_argument("--arm", default="",
                   help="Split-test arm this lead drew, if any experiment in "
                        "data/experiments.md applies (e.g. deep|light for EXP-001). "
                        "Blank when no experiment applies.")

    m = sub.add_parser("mark", help="record a call's outcome (won/lost)")
    m.add_argument("--email", required=True)
    m.add_argument("--outcome", required=True, choices=["won", "lost"])
    m.add_argument("--note", default="")

    st = sub.add_parser("stats", help="print the funnel and conversion rates")
    st.add_argument("--since", help="ISO timestamp/date lower bound (e.g. 2026-08-01)")
    st.add_argument("--icp", choices=["startups", "churches"])
    st.add_argument("--arm", help="Filter to one split-test arm instead of the by-arm "
                                  "breakdown (e.g. deep or light for EXP-001)")
    st.add_argument("--json", action="store_true")

    args = p.parse_args()

    if args.cmd == "record":
        print(json.dumps(record(args.email, args.stage, args.icp, args.org, args.note,
                                 args.source, args.arm)))
    elif args.cmd == "mark":
        print(json.dumps(record(args.email, args.outcome, note=args.note)))
    elif args.cmd == "stats":
        s = stats(args.since, args.icp, args.arm)
        if args.json:
            print(json.dumps(s, indent=2))
        else:
            _print_stats(s)


if __name__ == "__main__":
    main()
