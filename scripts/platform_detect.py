#!/usr/bin/env python3
"""Detect a lead's website platform and route them to a pitch track.

Both ICPs (config/icp-startups.yaml, config/icp-churches.yaml) now hinge on this: a lead
already on Webflow gets the subscription_track pitch ($3k/mo retainer), everyone else gets
new_build_track. Church leads on Subsplash get a distinct angle within new_build_track (see
the outreach-email skill) since Subsplash already implies budget + sophistication.

Detection is regex/marker based on the page's HTML, same lightweight approach as
scripts/church_crawler.py (checks generator meta tag + known asset-host fingerprints).
Politeness/network behavior matches the crawler: one fetch, no auth walls.

Usage:
  python scripts/platform_detect.py --url https://example.com
  python scripts/platform_detect.py --url https://example.com --icp churches
"""

import argparse
import json
import re
import sys
from pathlib import Path

import requests
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
UA = {"User-Agent": "PolymerResearchBot/1.0 (+https://hellopolymer.com)"}

# Ordered: checked top to bottom, first match wins. Keep Subsplash before generic checks
# since church sites on Subsplash sometimes also embed other widgets.
PLATFORM_MARKERS: list[tuple[str, list[str]]] = [
    ("webflow", [r"webflow\.io", r"data-wf-site", r"data-wf-page",
                r'content="Webflow"', r"assets-global\.website-files\.com"]),
    ("subsplash", [r"subsplash\.com", r"subspla\.sh"]),
    ("squarespace", [r"squarespace\.com", r"static1\.squarespacecdn\.com",
                     r'content="Squarespace"']),
    ("wix", [r"static\.wixstatic\.com", r'content="Wix\.com', r"wix\.com/website-builder"]),
    ("wordpress", [r"wp-content/", r"wp-includes/", r'content="WordPress']),
]


def fetch(url: str) -> str:
    try:
        resp = requests.get(url, headers=UA, timeout=15, allow_redirects=True)
        if resp.status_code == 200 and "text/html" in resp.headers.get("content-type", "html"):
            return resp.text
    except requests.RequestException:
        pass
    return ""


def detect_platform(html: str) -> str:
    """Return one of the PLATFORM_MARKERS keys, or 'unknown' if no marker matches."""
    for platform, patterns in PLATFORM_MARKERS:
        for pat in patterns:
            if re.search(pat, html, re.I):
                return platform
    return "unknown" if html else "unreachable"


def track_for(platform: str, icp: str | None) -> str:
    """Look up the routing table in the ICP config. Falls back to the simple default
    (webflow -> subscription, everything else -> new_build) if no ICP given."""
    if icp:
        cfg = yaml.safe_load((REPO_ROOT / f"config/icp-{icp}.yaml").read_text())
        routing = cfg.get("website_platform_routing", {})
        if platform in routing:
            return routing[platform]
    return "subscription_track" if platform == "webflow" else "new_build_track"


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--url", required=True)
    ap.add_argument("--icp", choices=["startups", "churches"])
    args = ap.parse_args()

    html = fetch(args.url)
    platform = detect_platform(html)
    track = track_for(platform, args.icp)
    print(json.dumps({"url": args.url, "platform": platform, "track": track}, indent=2))


if __name__ == "__main__":
    main()
