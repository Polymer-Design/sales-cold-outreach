#!/usr/bin/env python3
"""Free pre-screen for unscored startup leads, run before the lead-scoring skill.

Scoring is the expensive step (Claude turns + web research per lead), and 81 of the first
221 startups scored came out cold - most for reasons visible without any research:
  - an excluded industry (config/icp-startups.yaml `excluded`: e-commerce / DTC), read from
    the org_data Apollo already returned at ingestion
  - a dead or stale site: the domain no longer resolves in DNS, or redirects to a different
    company's domain (acquired / rebranded)
Leads that fail are marked cold here with a note and never reach Claude. Everything else is
left `status: ingested` for normal scoring. Deliberately narrow: anything ambiguous goes to
the scorer, since a false "out" loses a lead for good.

Usage:
  python scripts/prescreen.py            # screen every unscored startup lead, rewrite index
  python scripts/prescreen.py --dry-run  # print what would be screened out
"""

import argparse
import json
import socket
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests

REPO_ROOT = Path(__file__).resolve().parent.parent
INDEX = REPO_ROOT / "data/leads/index.jsonl"
UA = {"User-Agent": "Mozilla/5.0 (compatible; PolymerLeadCheck/1.0)"}

# Apollo industry labels that mean e-commerce / DTC consumer goods. Taken from leads the
# scorer actually excluded (Gratsi: "wine & spirits", etc.) - not a guess at Apollo's taxonomy.
DTC_INDUSTRIES = {
    "wine & spirits", "apparel & fashion", "food & beverages", "food production",
    "consumer goods", "cosmetics", "retail", "luxury goods & jewelry", "sporting goods",
    "wholesale", "furniture", "textiles",
}


def registered_domain(host: str) -> str:
    host = (host or "").lower().split(":")[0]
    if host.startswith("www."):
        host = host[4:]
    parts = host.split(".")
    return ".".join(parts[-2:]) if len(parts) >= 2 else host


def same_brand(a: str, b: str) -> bool:
    """foo.ai -> getfoo.com is the same company on a new domain, not a stale lead."""
    la, lb = a.split(".")[0], b.split(".")[0]
    return la == lb or (min(len(la), len(lb)) >= 3 and (la in lb or lb in la))


def network_ok() -> bool:
    """Canary: if a known-good site can't be fetched, the runner's network is the problem,
    and every lead would look dead. Site checks are skipped entirely in that case."""
    try:
        return requests.get("https://www.google.com", headers=UA, timeout=10).ok
    except requests.RequestException:
        return False


def site_problem(domain: str) -> str:
    """'' if the site looks alive and still theirs (or we can't tell), else a short reason.
    Only two outcomes count against a lead: the domain is gone from DNS, or it lands on a
    different domain. Timeouts, TLS errors and HTTP errors (bot blocking is common) go to
    the scorer, which can look properly."""
    try:
        socket.getaddrinfo(domain, 443)
    except socket.gaierror:
        try:
            socket.getaddrinfo("www." + domain, 443)
        except socket.gaierror:
            return "domain no longer resolves (DNS)"
    for scheme in ("https", "http"):
        try:
            r = requests.get(f"{scheme}://{domain}", headers=UA, timeout=12, allow_redirects=True)
        except requests.RequestException:
            continue
        final = registered_domain(urlparse(r.url).netloc)
        if final and not same_brand(final, registered_domain(domain)):
            return f"site redirects to {final} (acquired/rebranded/stale)"
        return ""
    return ""


def screen(lead: dict, check_sites: bool) -> str:
    industry = ((lead.get("org_data") or {}).get("industry") or "").lower()
    if industry in DTC_INDUSTRIES:
        return f"Step 0 hard exclusion: e-commerce/DTC (Apollo industry: {industry})"
    if check_sites and lead.get("domain"):
        problem = site_problem(lead["domain"])
        if problem:
            return f"Unreachable lead: {problem}"
    return ""


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    check_sites = network_ok()
    if not check_sites:
        print("Network canary failed - skipping site checks, industry screen only.")
    rows = [json.loads(l) for l in INDEX.read_text().splitlines() if l.strip()]
    now = datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")
    checked = out = 0
    for lead in rows:
        if lead.get("icp") != "startups" or lead.get("status") != "ingested" or lead.get("prescreened_at"):
            continue
        checked += 1
        reason = screen(lead, check_sites)
        if reason:
            out += 1
            print(f"OUT  {lead.get('org')}: {reason}")
            if not args.dry_run:
                lead.update(status="scored", tier="cold", score_total=0, scored_at=now,
                            score_notes=f"prescreen (no Claude research): {reason}")
        if not args.dry_run and check_sites:
            lead["prescreened_at"] = now  # only once the full screen ran

    if not args.dry_run:
        INDEX.write_text("".join(json.dumps(r) + "\n" for r in rows))
    print(f"Pre-screened {checked} unscored startup leads, {out} screened out"
          f"{' (dry run, nothing written)' if args.dry_run else ''}.")


if __name__ == "__main__":
    main()
