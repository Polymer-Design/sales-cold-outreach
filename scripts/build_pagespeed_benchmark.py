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
    # thelandmark.church intentionally excluded: a large, content/visual-heavy build where
    # the client prioritized content interconnectivity over raw Lighthouse metrics, so it
    # isn't representative of the speed/quality benchmark.
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
    ap.add_argument("--strategy", default="desktop", choices=["mobile", "desktop"],
                    help="which Lighthouse run to average (default desktop for our own sites)")
    args = ap.parse_args()
    sites = args.urls or POLYMER_SITES
    strategy = args.strategy

    cats = ("performance", "accessibility", "best_practices", "seo")
    rows, agg, lcps, skipped = [], {c: [] for c in cats}, [], []
    for u in sites:
        r = check(u, strategy)
        if not r.get("ok"):
            skipped.append((u, r.get("error", "unknown error")))
            rows.append((u, None, None))
            time.sleep(1)
            continue
        s = r.get("scores", {})
        lcp = _lcp_seconds(r)
        rows.append((u, s, lcp))
        for c in cats:
            if isinstance(s.get(c), int):
                agg[c].append(s[c])
        if isinstance(lcp, float):
            lcps.append(lcp)
        time.sleep(1)

    if not agg["performance"]:
        print("No sites measured successfully (all skipped/rate-limited). "
              "Not writing the benchmark - leaving it as-is.", file=sys.stderr)
        for u, e in skipped:
            print(f"  skip {u}: {e}", file=sys.stderr)
        sys.exit(1)

    today = date.today().isoformat()
    n = len(agg["performance"])
    avg = {c: (round(statistics.mean(agg[c])) if agg[c] else None) for c in cats}
    avg_lcp = round(statistics.mean(lcps), 1) if lcps else None

    lines = [
        "---",
        "status: approved",
        f"refreshed: {today}",
        f"strategy: {strategy}",
        "---",
        "",
        "# Polymer client PageSpeed benchmark",
        "",
        f"Real {strategy} Lighthouse scores from {n} shipped Polymer client sites, across all "
        "four categories (performance, accessibility, best practices, SEO). Citable in outreach "
        "as a comparative claim (\"our client sites average X\"). "
        f"Refreshed {today} by `scripts/build_pagespeed_benchmark.py`.",
        "",
        f"- **Sample size:** {n} shipped sites ({strategy})",
        f"- **Average performance:** {avg['performance']} / 100",
        f"- **Average accessibility:** {avg['accessibility']} / 100",
        f"- **Average best practices:** {avg['best_practices']} / 100",
        f"- **Average SEO:** {avg['seo']} / 100",
        (f"- **Average load (LCP):** {avg_lcp}s" if avg_lcp is not None
         else "- **Average load (LCP):** not available"),
        f"- **Date last refreshed:** {today}",
        "",
        f"## Per-site ({strategy})",
        "",
        "| site | perf | a11y | best practices | SEO | LCP (s) |",
        "|---|---|---|---|---|---|",
    ]
    cell = lambda v: v if v is not None else "n/a"
    for u, s, l in rows:
        if isinstance(s, dict):
            lines.append(f"| {u} | {cell(s.get('performance'))} | {cell(s.get('accessibility'))} "
                         f"| {cell(s.get('best_practices'))} | {cell(s.get('seo'))} | {cell(l)} |")
        else:
            lines.append(f"| {u} | n/a | n/a | n/a | n/a | n/a |")
    if skipped:
        lines += ["", "## Skipped this run (not counted in the average)", ""]
        lines += [f"- {u}: {e}" for u, e in skipped]
    lines.append("")

    BENCHMARK.write_text("\n".join(lines))
    print(f"Wrote {BENCHMARK.relative_to(REPO_ROOT)}: {n} sites ({strategy}) - "
          f"avg perf {avg['performance']}, a11y {avg['accessibility']}, "
          f"best-practices {avg['best_practices']}, seo {avg['seo']}, LCP {avg_lcp}s. Status: approved.")
    if skipped:
        print(f"({len(skipped)} site(s) skipped - see the file's 'Skipped this run' section.)")


if __name__ == "__main__":
    main()
