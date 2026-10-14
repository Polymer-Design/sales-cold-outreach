#!/usr/bin/env python3
"""Estimate a site's page count and static-vs-CMS-collection split from its sitemap.

Used by call-prep (and available to lead-scoring/outreach-email) to size which
package fits: Sprint/Campaign (1 page), Core (up to 5 startups / 10 churches), or
Custom (more than that, or real CMS-driven scope). Pure page count from a sitemap
is a reasonable proxy for this - it's what the pricing tiers are themselves scoped on.

Heuristic, not a certainty: a path-prefix shared by 3+ URLs (e.g. /blog/*, /sermons/*,
/case-studies/*) is treated as a CMS collection; everything else counts as a static,
one-off page. Report it as an estimate in the briefing, not a confirmed fact - same
citable-fact discipline as every other research signal in this repo.

Usage:
  python scripts/sitemap_scope.py --url https://example.com
"""

import argparse
import json
import sys
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse
import xml.etree.ElementTree as ET

import requests

REPO_ROOT = Path(__file__).resolve().parent.parent
UA = {"User-Agent": "PolymerResearchBot/1.0 (+https://hellopolymer.com)"}
SITEMAP_PATHS = ["/sitemap.xml", "/sitemap_index.xml"]
SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
MAX_SUB_SITEMAPS = 20  # cap fan-out from a sitemap index - avoid pathological sites


def fetch(url: str) -> str | None:
    try:
        resp = requests.get(url, headers=UA, timeout=15)
        if resp.status_code == 200:
            return resp.text
    except requests.RequestException:
        pass
    return None


def _urls_from_sitemap_xml(xml_text: str, _depth: int = 0) -> list[str]:
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return []
    locs = [el.text.strip() for el in root.findall(".//sm:loc", SITEMAP_NS) if el.text]
    # A sitemap INDEX points at other sitemaps rather than pages - follow one level deep.
    if root.tag.endswith("sitemapindex") and _depth == 0:
        urls: list[str] = []
        for sub_url in locs[:MAX_SUB_SITEMAPS]:
            sub_xml = fetch(sub_url)
            if sub_xml:
                urls += _urls_from_sitemap_xml(sub_xml, _depth=1)
        return urls
    return locs


def discover_urls(site_url: str) -> list[str]:
    base = site_url.rstrip("/")
    for path in SITEMAP_PATHS:
        xml_text = fetch(base + path)
        if xml_text:
            urls = _urls_from_sitemap_xml(xml_text)
            if urls:
                return urls
    return []


def bucket(urls: list[str]) -> dict:
    by_prefix: dict[str, list[str]] = defaultdict(list)
    for u in urls:
        path = urlparse(u).path.strip("/")
        segment = path.split("/")[0] if path else "(home)"
        by_prefix[segment].append(u)

    collections = {p: len(members) for p, members in by_prefix.items() if len(members) >= 3}
    static_count = sum(len(members) for p, members in by_prefix.items() if p not in collections)
    return {
        "total_urls": len(urls),
        "estimated_static_pages": static_count,
        "estimated_cms_collections": collections,
    }


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--url", required=True)
    args = ap.parse_args()

    urls = discover_urls(args.url)
    if not urls:
        print(json.dumps({
            "url": args.url,
            "found_sitemap": False,
            "note": "No sitemap found at common paths - page count not available this way; "
                    "estimate from visible nav/footer links instead and say so.",
        }, indent=2))
        return

    print(json.dumps({"url": args.url, "found_sitemap": True, **bucket(urls)}, indent=2))


if __name__ == "__main__":
    main()
