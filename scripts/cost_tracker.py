#!/usr/bin/env python3
"""Tracks real Claude API spend for daily-pipeline runs and enforces a soft weekly cap.

Soft, not a real-time circuit breaker: it can't stop a run already in progress from
overspending, but it stops the NEXT run from starting once the rolling 7-day total is at
or over the configured cap (config/system.yaml cost_caps.weekly_usd). Logs every run's
real reported cost to data/costs.jsonl regardless of outcome, so the running total is
accurate even after a crash (see daily-pipeline.yml's `if: always()` record step).

Usage:
  python scripts/cost_tracker.py record --workflow daily-pipeline --log <claude-execution-output.json>
  python scripts/cost_tracker.py check --window week   # prints total, exits 1 if >= cap
"""

import argparse
import json
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
LEDGER = REPO_ROOT / "data/costs.jsonl"


def _load_cap() -> float:
    cfg = yaml.safe_load((REPO_ROOT / "config/system.yaml").read_text())
    return float((cfg.get("cost_caps") or {}).get("weekly_usd", 9999))


def _extract_cost(log_path: str) -> float | None:
    """The claude-code-action's SDK log holds a stream of JSON objects (the exact
    formatting - one per line vs pretty-printed - isn't guaranteed, so parse with
    raw_decode instead of assuming line boundaries). The final type:"result" object
    carries total_cost_usd for the whole run; take the LAST one found, in case the
    stream somehow contains more than one."""
    try:
        text = Path(log_path).read_text(errors="replace")
    except OSError:
        return None
    decoder = json.JSONDecoder()
    i, n = 0, len(text)
    found = None
    while i < n:
        while i < n and text[i] in " \t\r\n":
            i += 1
        if i >= n:
            break
        try:
            obj, end = decoder.raw_decode(text, i)
            i = end
        except json.JSONDecodeError:
            i += 1  # skip a stray byte (e.g. ANSI color codes some wrappers leave in) and resync
            continue
        if isinstance(obj, dict) and "total_cost_usd" in obj:
            found = obj["total_cost_usd"]
    return float(found) if found is not None else None


def record(args) -> None:
    cost = _extract_cost(args.log)
    if cost is None:
        print(f"[cost_tracker] no total_cost_usd found in {args.log} - nothing recorded "
              f"(this happens if the run failed before Claude produced any result at all; "
              f"not an error).", file=sys.stderr)
        return
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    entry = {
        "at": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
        "workflow": args.workflow,
        "cost_usd": round(cost, 4),
    }
    with open(LEDGER, "a") as f:
        f.write(json.dumps(entry) + "\n")
    print(f"[cost_tracker] recorded ${cost:.2f} for {args.workflow}")


def _window_total(days: int) -> float:
    if not LEDGER.exists():
        return 0.0
    cutoff = datetime.now(timezone.utc) - timedelta(days=days)
    total = 0.0
    for line in LEDGER.read_text().splitlines():
        line = line.strip()
        if not line:
            continue
        entry = json.loads(line)
        at = datetime.fromisoformat(entry["at"].replace("Z", "+00:00"))
        if at >= cutoff:
            total += entry["cost_usd"]
    return total


def check(args) -> None:
    days = {"day": 1, "week": 7, "month": 30}[args.window]
    total = _window_total(days)
    cap = _load_cap() if args.cap is None else args.cap
    print(f"[cost_tracker] trailing {days}d spend: ${total:.2f} / ${cap:.2f} cap")
    if total >= cap:
        print(f"[cost_tracker] AT OR OVER CAP - skip the expensive step.", file=sys.stderr)
        sys.exit(1)
    sys.exit(0)


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest="cmd", required=True)

    rec = sub.add_parser("record")
    rec.add_argument("--workflow", required=True)
    rec.add_argument("--log", required=True)
    rec.set_defaults(func=record)

    chk = sub.add_parser("check")
    chk.add_argument("--window", choices=["day", "week", "month"], default="week")
    chk.add_argument("--cap", type=float, default=None,
                      help="Override config/system.yaml cost_caps.weekly_usd for testing.")
    chk.set_defaults(func=check)

    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
