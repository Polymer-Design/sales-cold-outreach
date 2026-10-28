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
          denominational church finders (SBC, UMC, AG...), Google Places exports, or
          Apollo's own organization search (apollo_mixed_companies_search,
          q_organization_keyword_tags: ["church", "christian church"], US, small
          employee-count bands - 1 credit per search, returns real orgs with real
          website_url/primary_domain - this is how the first real seed batch was built,
          2026-10-14). Filter out denominational HQs, parachurch/networking orgs, and
          vendors before writing to seeds.csv - a keyword search surfaces all of these
          alongside real local congregations, and only the latter fit this ICP.

  probe   Read data/leads/churches/probe-slugs.csv (slug,name) and check whether
          {slug}.churchcenter.com resolves to a real Church Center instance.

  replenish
          Top up seeds.csv from Apollo organization search (apollo_client.py org-search,
          config/icp-churches.yaml apollo_org_filters; 1 credit per page of up to 100 orgs).
          Keeps names that read like a local congregation, drops HQs/parachurch/vendors,
          dedupes by domain against seeds, candidates and the crawled log, and remembers
          which Apollo page it reached in seed-cursor.json. Run before crawl.

Every seed crawl checks is logged to crawled.csv (hit or miss), so a church is only ever
checked once - before 2026-10-28 misses weren't recorded and the same seeds got
re-crawled every week while no new ones were added.

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
import json
import time
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

import requests

REPO_ROOT = Path(__file__).resolve().parent.parent
LEADS_DIR = REPO_ROOT / "data/leads/churches"
CANDIDATES = LEADS_DIR / "candidates.csv"
SEEDS = LEADS_DIR / "seeds.csv"
CRAWLED = LEADS_DIR / "crawled.csv"
CURSOR = LEADS_DIR / "seed-cursor.json"
FIELDS = ["name", "website", "city", "state", "churchcenter_slug", "signal",
          "status", "found_at"]

UA = {"User-Agent": "PolymerResearchBot/1.0 (+https://hellopolymer.com)"}
CHURCHCENTER_RE = re.compile(r"https?://([a-z0-9][a-z0-9-]*)\.churchcenter\.com", re.I)
# Planning Center's own hosts, not a church's slug. js.churchcenter.com serves the Church
# Center embed script, so a site loading it does use Planning Center - it just doesn't
# name its slug there (2026-10-28: 8 real PC churches were flagged as false positives).
CHURCHCENTER_HOSTS = {"js", "www", "api", "assets", "cdn", "static"}
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
    subs = [m.lower() for m in CHURCHCENTER_RE.findall(html)]
    slugs = [x for x in subs if x not in CHURCHCENTER_HOSTS]
    if slugs:
        return slugs[0], "churchcenter_subdomain"
    if subs:
        return "", "churchcenter_embed"
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


# Replenish name screen: keep what reads like a local congregation, drop the HQs,
# parachurch orgs, schools and vendors an Apollo "church" keyword search also returns.
KEEP_RE = re.compile(r"\b(church|chapel|fellowship|tabernacle|cathedral|parish|congregation|"
                     r"assembly|temple|kirk)\b", re.I)
DROP_RE = re.compile(r"\b(ministries|ministry|network|association|conference|convention|"
                     r"foundation|seminary|school|academy|university|college|institute|camp|"
                     r"publishing|publications|missions?|denomination|diocese|synod|"
                     r"presbytery|council|alliance|federation|headquarters|supply|furniture|"
                     r"software|insurance|consulting|media|radio|television|bookstore|"
                     r"store|childcare|preschool|daycare|credit union|loans?|capital)\b", re.I)


def domain_of(url: str) -> str:
    url = (url or "").strip().lower()
    if not url:
        return ""
    host = urlparse(url if "://" in url else "https://" + url).netloc
    return host[4:] if host.startswith("www.") else host


def _read_csv(path: Path) -> list[dict]:
    if not path.exists():
        return []
    with open(path) as f:
        return list(csv.DictReader(f))


def _append_csv(path: Path, fields: list[str], rows: list[dict]) -> None:
    new_file = not path.exists()
    with open(path, "a", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        if new_file:
            w.writeheader()
        w.writerows(rows)


def known_domains() -> set[str]:
    out = set()
    for path, col in ((SEEDS, "website"), (CANDIDATES, "website"), (CRAWLED, "website")):
        out |= {domain_of(r.get(col, "")) for r in _read_csv(path)}
    out.discard("")
    return out


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
    done = {domain_of(r["website"]) for r in _read_csv(CRAWLED)} | {domain_of(w) for w in existing}
    found, checked, log = [], 0, []
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
        if website.lower() in existing or domain_of(website) in done:
            continue
        done.add(domain_of(website))
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
        log.append({"website": website, "result": signal or "miss",
                    "checked_at": date.today().isoformat()})
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

    # A genuine churchcenter_slug is per-church, so the exact same non-empty slug
    # showing up for 2+ different seeds in one run means the regex almost certainly
    # matched a shared/generic asset host (confirmed live 2026-10-14: "js" hit on 3
    # unrelated churches - a direct page-content check couldn't settle it either way,
    # since Church Center doesn't 404 on a bad slug the way probe_slug()'s check
    # assumes, so this count-based signal is the reliable one). Flag instead of
    # silently trusting - needs a human look, not an auto-exclude, in case a slug
    # genuinely is shared (e.g. a multi-campus church using one instance).
    slug_counts: dict[str, int] = {}
    for row in found:
        if row["churchcenter_slug"]:
            slug_counts[row["churchcenter_slug"]] = slug_counts.get(row["churchcenter_slug"], 0) + 1
    flagged = 0
    for row in found:
        if slug_counts.get(row["churchcenter_slug"], 0) > 1:
            row["status"] = "needs_review"
            row["signal"] = "shared_slug_suspected_false_positive"
            flagged += 1

    append_candidates(found)
    _append_csv(CRAWLED, ["website", "result", "checked_at"], log)
    remaining = sum(1 for sd in seeds if sd.get("website") and domain_of(sd["website"]) not in done)
    print(f"{remaining} seeds left uncrawled.")
    print(f"\nChecked {checked} seeds, found {len(found)} with Planning Center signal "
          f"({flagged} flagged needs_review - shared slug, likely false positive). "
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


def replenish(args) -> None:
    sys.path.insert(0, str(REPO_ROOT / "scripts"))
    import apollo_client  # noqa: E402 - same scripts/ dir, needs APOLLO_API_KEY
    from types import SimpleNamespace

    crawled = {domain_of(r["website"]) for r in _read_csv(CRAWLED)} | \
              {domain_of(r["website"]) for r in _read_csv(CANDIDATES)}
    backlog = sum(1 for r in _read_csv(SEEDS)
                  if domain_of(r.get("website", "")) and domain_of(r["website"]) not in crawled)
    if backlog >= args.want:
        print(f"{backlog} seeds still uncrawled (>= {args.want}); no refill needed.")
        return

    cursor = json.loads(CURSOR.read_text()) if CURSOR.exists() else {"page": 1}
    seen = known_domains()
    added: list[dict] = []
    pages = 0
    while len(added) + backlog < args.want and pages < args.max_pages:
        page = cursor["page"]
        res = apollo_client.org_search(SimpleNamespace(icp="churches", page=page, per_page=100))
        orgs = (res.get("organizations") or []) + (res.get("accounts") or [])
        pages += 1
        if not orgs:
            print(f"Apollo page {page} empty - wrapping back to page 1 next time.")
            cursor["page"] = 1
            break
        cursor["page"] = page + 1
        kept = 0
        for o in orgs:
            name = (o.get("name") or "").strip()
            dom = domain_of(o.get("website_url") or o.get("primary_domain") or o.get("domain") or "")
            if not name or not dom or dom in seen:
                continue
            if not KEEP_RE.search(name) or DROP_RE.search(name):
                continue
            seen.add(dom)
            kept += 1
            added.append({"name": name, "website": dom, "city": o.get("city") or "",
                          "state": o.get("state") or ""})
        print(f"Apollo page {page}: {len(orgs)} orgs, kept {kept} as new seeds.")
    if added:
        _append_csv(SEEDS, ["name", "website", "city", "state"], added)
    CURSOR.write_text(json.dumps(cursor) + "\n")
    print(f"Added {len(added)} seeds ({pages} Apollo credit(s) at most); "
          f"{backlog + len(added)} now waiting to be crawled.")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("crawl")
    c.add_argument("--limit", type=int, default=50, help="max seeds to check this run")
    sub.add_parser("probe")
    r = sub.add_parser("replenish")
    r.add_argument("--want", type=int, default=150,
                   help="top up until this many seeds are waiting to be crawled")
    r.add_argument("--max-pages", type=int, default=5,
                   help="most Apollo pages (credits) to spend in one run")
    args = p.parse_args()
    {"crawl": crawl, "probe": probe, "replenish": replenish}[args.cmd](args)


if __name__ == "__main__":
    main()
