#!/usr/bin/env python3
"""Pull a mobile PageSpeed/Lighthouse read on a lead's site. One call per lead, free tier
(25,000 queries/day - no cost concern at this system's volume).

IMPORTANT constraint from the ICP docs (config/icp-*.yaml `pagespeed_signal`): the score
returned here may be cited in an email as a RAW FACT about the lead's own site (e.g. "your
homepage takes 6.2s to load on mobile") because that needs no external comparison. It may
NOT be used as a comparative proof point ("you score X, our client sites average Y") until
knowledge/pagespeed-benchmark.md moves past PENDING - that benchmark doesn't exist yet
(it's being built from Polymer's own shipped client sites). The fact-check-email skill
checks for and blocks comparative PageSpeed claims until that file says otherwise.

Requires GOOGLEPAGESPEEDINSIGHTS_API_KEY (the exact repo secret name already configured).

Usage:
  python scripts/pagespeed_check.py --url https://example.com [--strategy mobile|desktop]
"""

import argparse
import json
import os
import sys

import requests

API = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"


def check(url: str, strategy: str = "mobile") -> dict:
    key = os.environ.get("GOOGLEPAGESPEEDINSIGHTS_API_KEY", "").strip()
    if not key:
        sys.exit("GOOGLEPAGESPEEDINSIGHTS_API_KEY is not set.")
    resp = requests.get(API, params={"url": url, "strategy": strategy, "key": key,
                                     "category": "performance"}, timeout=45)
    if resp.status_code >= 400:
        # A single lead's site failing Lighthouse (blocked, times out, robots) shouldn't
        # crash a batch run - report it as a soft failure the caller can skip on.
        return {"url": url, "ok": False, "error": f"{resp.status_code}: {resp.text[:300]}"}

    data = resp.json()
    lh = data.get("lighthouseResult", {})
    perf = lh.get("categories", {}).get("performance", {}).get("score")
    audits = lh.get("audits", {})

    def audit(key_name: str) -> dict:
        a = audits.get(key_name, {})
        return {"display": a.get("displayValue"), "numeric_ms": a.get("numericValue")}

    return {
        "url": url,
        "ok": True,
        "strategy": strategy,
        "performance_score_0_100": round(perf * 100) if isinstance(perf, (int, float)) else None,
        "largest_contentful_paint": audit("largest-contentful-paint"),
        "speed_index": audit("speed-index"),
        # Field data (real-user CrUX), when Google has enough traffic on this URL to report it.
        "field_experience_category": data.get("loadingExperience", {}).get("overall_category"),
        "citable_as_raw_fact": True,
        "citable_as_comparative_claim": False,  # see module docstring - blocked until benchmark exists
    }


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--url", required=True)
    ap.add_argument("--strategy", default="mobile", choices=["mobile", "desktop"])
    args = ap.parse_args()
    print(json.dumps(check(args.url, args.strategy), indent=2))


if __name__ == "__main__":
    main()
