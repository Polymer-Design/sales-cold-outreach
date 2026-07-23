#!/usr/bin/env python3
"""Church lead finder built on the Planning Center signal.

Churches running Planning Center almost always expose a {slug}.churchcenter.com
subdomain (check-in, giving, events). That's a reliable, scrapeable technographic
signal, and Polymer's church offer is built around Planning Center integration,
so a hit here is both "findable" and "qualified" at once.

Two modes:

  crawl   Read data/leads/churches/seeds.csv (name,website,city,state), fetch each
          church's site (homepage + common paths), and look for churchcenter.com /
          Planning Center references. Seeds come from directories: Outreach 100,
          denominational church finders (SBC, UMC, AG...), Google Places exports.

  probe   Read data/leads/churches/probe-slugs.csv (slug,name) and check whether
          {slug}.churchcenter.com resolves to a real Church Center instance.

Output: appends new finds to data/leads/churches/candidates.csv with status=new.
The daily pipeline picks candidates up from there (Apollo finds the people).

Be polite: ~1 req/sec, honest UA, no auth walls, public pages only.

Usage:
  python scripts/church_crawler.py crawl [--limit 50]
  python scripts/church_crawler.py probe
"""

import argparse
import csv
import re
import sys
import time
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

import requests

REPO_ROOT = Path(__file__).resolve().parent.parent
LEADS_DIR = REPO_ROOT / "data/leads/churches"
CANDIDATES = LEADS_DIR / "candidates.csv"
FIELDS = ["name", "website", "city", "state", "churchcenter_slug", "signal",
          "status", "found_at"]

UA = {"User-Agent": "PolymerResearchBot/1.0 (+https://hellopolymer.com)"}
CHURCHCENTER_RE = re.compile(r"https?://([a-z0-9][a-z0-9-]*)\.churchcenter\.com", re.I)
PLANNING_CENTER_RE = re.compile(
    r"planningcenteronline\.com|planning\s*center|pco\.bz|churchcenter\s+app", re.I)
# Pages most likely to link out to Church Center.
COMMON_PATHS = ["", "/give", "/giving", "/events", "/visit", "/connect", "/groups",
                "/im-new", "/new", "/calendar"]


def fetch(url: str) -> str:
    try:
        resp = requests.get(url, headers=UA, timeout=15, allow_redirects=True)
        if resp.status_code == 200 and "text/html" in resp.headers.get("content-type", "html"):
            return resp.text
    except requests.RequestException:
        pass
    return ""


def extract_signal(html: str) -> tuple[str, str]:
    """Return (churchcenter_slug, signal_strength) from page HTML."""
    m = CHURCHCENTER_RE.search(html)
    if m:
        return m.group(1).lower(), "churchcenter_subdomain"
    if PLANNING_CENTER_RE.search(html):
        return "", "planning_center_mention"
    return "", ""


def probe_slug(slug: str) -> bool:
    """True if {slug}.churchcenter.com looks like a real Church Center instance.

    Calibration note: verified real instances return 200 with the church's name in
    the page; unknown slugs get Planning Center's not-found page. If PC changes
    behavior, recalibrate with one known-good and one garbage slug.
    """
    try:
        resp = requests.get(f"https://{slug}.churchcenter.com", headers=UA,
                            timeout=15, allow_redirects=True)
    except requests.RequestException:
        return False
    if resp.status_code != 200:
        return False
    lowered = resp.text.lower()
    return not any(marker in lowered for marker in
                   ("page not found", "couldn't find", "doesn't exist", "no longer available"))


def load_existing() -> set[str]:
    if not CANDIDATES.exists():
        return set()
    with open(CANDIDATES) as f:
        return {row["website"].strip().lower() for row in csv.DictReader(f)}


def append_candidates(rows: list[dict]) -> None:
    new_file = not CANDIDATES.exists()
    CANDIDATES.parent.mkdir(parents=True, exist_ok=True)
    with open(CANDIDATES, "a", newline="") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS)
        if new_file:
            w.writeheader()
        w.writerows(rows)


def crawl(args) -> None:
    seeds_path = LEADS_DIR / "seeds.csv"
    if not seeds_path.exists():
        sys.exit(f"No seed list at {seeds_path}. Copy seeds.example.csv and fill it "
                 "from church directories (see this file's docstring).")
    existing = load_existing()
    found, checked = [], 0
    with open(seeds_path) as f:
        seeds = list(csv.DictReader(f))
    for seed in seeds:
        if checked >= args.limit:
            break
        website = (seed.get("website") or "").strip()
        if not website:
            continue
        if not website.startswith("http"):
            website = "https://" + website
        if website.lower() in existing:
            continue
        checked += 1
        base = website.rstrip("/")
        slug, signal = "", ""
        for path in COMMON_PATHS:
            html = fetch(base + path)
            time.sleep(1)
            if not html:
                continue
            slug, signal = extract_signal(html)
            if signal == "churchcenter_subdomain":
                break
        if signal:
            found.append({
                "name": seed.get("name", urlparse(website).netloc),
                "website": website, "city": seed.get("city", ""),
                "state": seed.get("state", ""), "churchcenter_slug": slug,
                "signal": signal, "status": "new", "found_at": date.today().isoformat(),
            })
            print(f"HIT  {seed.get('name')}: {signal} {slug}")
        else:
            print(f"miss {seed.get('name')}")
    append_candidates(found)
    print(f"\nChecked {checked} seeds, found {len(found)} with Planning Center signal. "
          f"Appended to {CANDIDATES.relative_to(REPO_ROOT)}")


def probe(_args) -> None:
    probe_path = LEADS_DIR / "probe-slugs.csv"
    if not probe_path.exists():
        sys.exit(f"No slug list at {probe_path} (columns: slug,name).")
    existing = load_existing()
    found = []
    with open(probe_path) as f:
        for row in csv.DictReader(f):
            slug = row["slug"].strip().lower()
            time.sleep(1)
            if probe_slug(slug):
                url = f"https://{slug}.churchcenter.com"
                if url in existing:
                    continue
                found.append({"name": row.get("name", slug), "website": url,
                              "city": "", "state": "", "churchcenter_slug": slug,
                              "signal": "churchcenter_probe", "status": "new",
                              "found_at": date.today().isoformat()})
                print(f"HIT  {slug}")
            else:
                print(f"miss {slug}")
    append_candidates(found)
    print(f"\nFound {len(found)} live Church Center instances.")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("crawl")
    c.add_argument("--limit", type=int, default=50, help="max seeds to check this run")
    sub.add_parser("probe")
    args = p.parse_args()
    (crawl if args.cmd == "crawl" else probe)(args)


if __name__ == "__main__":
    main()
