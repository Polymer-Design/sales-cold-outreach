#!/usr/bin/env python3
"""Measure Polymer's own shipped client sites and write the citable PageSpeed benchmark.

This is what "approves" knowledge/pagespeed-benchmark.md: it fills the file with REAL
averaged numbers from our live client sites and flips status to `approved`, which unlocks
comparative PageSpeed claims in outreach ("our client sites average X"). The numbers are
measurements of our own work, so no human fact-invention risk - a human still runs it.

Uses scripts/pagespeed_check.py (needs GOOGLEPAGESPEEDINSIGHTS_API_KEY). Sites that error
or rate-limit are skipped and noted; the average is taken over the ones that succeed.

Usage:
  python scripts/build_pagespeed_benchmark.py                 # measure the default site list
  python scripts/build_pagespeed_benchmark.py --url a.com --url b.com   # override the list
"""

import argparse
import statistics
import sys
import time
from datetime import date
from pathlib import Path

from pagespeed_check import check

REPO_ROOT = Path(__file__).resolve().parent.parent
BENCHMARK = REPO_ROOT / "knowledge/pagespeed-benchmark.md"

# Polymer's shipped client sites. Edit this list to refresh what the benchmark averages over.
POLYMER_SITES = [
    "https://www.fispoke.com/",
    "https://socialscience.nyc/",
    "http://thelandmark.church/",
    "https://www.coastalcc.org/",
    "https://www.sounderbenefits.com/",
    "https://allinpoolcare.com/",
    "https://barberioschool.com/",
    "https://www.creativewx.com/",
    "https://coastalshoreservices.com/",
    "https://jeremysissongolf.com/",
]


def _lcp_seconds(result: dict) -> float | None:
    ms = (result.get("largest_contentful_paint") or {}).get("numeric_ms")
    return round(ms / 1000, 1) if isinstance(ms, (int, float)) else None


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--url", action="append", dest="urls",
                    help="override the default site list (repeatable)")
    args = ap.parse_args()
    sites = args.urls or POLYMER_SITES

    rows, scores, lcps, skipped = [], [], [], []
    for u in sites:
        r = check(u, "mobile")
        if not r.get("ok"):
            skipped.append((u, r.get("error", "unknown error")))
            rows.append((u, None, None))
            time.sleep(1)
            continue
        score = r.get("performance_score_0_100")
        lcp = _lcp_seconds(r)
        rows.append((u, score, lcp))
        if isinstance(score, int):
            scores.append(score)
        if isinstance(lcp, float):
            lcps.append(lcp)
        time.sleep(1)

    if not scores:
        print("No sites measured successfully (all skipped/rate-limited). "
              "Not writing the benchmark - leaving it PENDING.", file=sys.stderr)
        for u, e in skipped:
            print(f"  skip {u}: {e}", file=sys.stderr)
        sys.exit(1)

    today = date.today().isoformat()
    avg_score = round(statistics.mean(scores))
    avg_lcp = round(statistics.mean(lcps), 1) if lcps else None

    lines = [
        "---",
        "status: approved",
        f"refreshed: {today}",
        "---",
        "",
        "# Polymer client PageSpeed benchmark",
        "",
        f"Real mobile PageSpeed/Lighthouse scores from {len(scores)} shipped Polymer client "
        "sites. Citable in outreach as a comparative claim (\"our client sites average X\"). "
        f"Refreshed {today} by `scripts/build_pagespeed_benchmark.py`.",
        "",
        f"- **Sample size:** {len(scores)} shipped sites",
        f"- **Average mobile performance score:** {avg_score} / 100",
        f"- **Average mobile load (LCP):** {avg_lcp}s" if avg_lcp is not None
        else "- **Average mobile load (LCP):** not available",
        f"- **Date last refreshed:** {today}",
        "",
        "## Per-site (mobile)",
        "",
        "| site | performance score | LCP (s) |",
        "|---|---|---|",
    ]
    for u, s, l in rows:
        lines.append(f"| {u} | {s if s is not None else 'n/a'} | {l if l is not None else 'n/a'} |")
    if skipped:
        lines += ["", "## Skipped this run (not counted in the average)", ""]
        lines += [f"- {u}: {e}" for u, e in skipped]
    lines.append("")

    BENCHMARK.write_text("\n".join(lines))
    print(f"Wrote {BENCHMARK.relative_to(REPO_ROOT)}: {len(scores)} sites, "
          f"avg score {avg_score}, avg LCP {avg_lcp}s. Status: approved.")
    if skipped:
        print(f"({len(skipped)} site(s) skipped - see the file's 'Skipped this run' section.)")


if __name__ == "__main__":
    main()
