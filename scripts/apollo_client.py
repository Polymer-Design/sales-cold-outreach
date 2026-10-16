#!/usr/bin/env python3
"""Thin Apollo REST client + CLI for the outreach pipeline.

Used by CI jobs (interactive Claude sessions use the Apollo MCP connector instead).
Requires APOLLO_API_KEY (Apollo Settings -> Integrations -> API; paid plan needed).

Usage:
  python scripts/apollo_client.py email-accounts
  python scripts/apollo_client.py people-search --icp startups [--page 1]
  python scripts/apollo_client.py people-search --icp churches --domain firstchurch.org
  python scripts/apollo_client.py people-search --icp startups --no-enrich  # free, masked results
  python scripts/apollo_client.py people-search --icp startups --filter-set apollo_filters_yc  # YC channel
  python scripts/apollo_client.py sequences
  python scripts/apollo_client.py add-to-sequence --sequence-id X --contact-ids a,b --mailbox you@domain.com
  python scripts/apollo_client.py upsert-contact --json '{"first_name": ...}'
  python scripts/apollo_client.py replies --since 2026-07-01T00:00:00Z
  python scripts/apollo_client.py stats
"""

import argparse
import json
import os
import sys
import time
from pathlib import Path

import requests
import yaml

BASE = "https://api.apollo.io/api/v1"
REPO_ROOT = Path(__file__).resolve().parent.parent


def _key() -> str:
    key = os.environ.get("APOLLO_API_KEY", "").strip()
    if not key:
        sys.exit("APOLLO_API_KEY is not set. Add it as a repo secret / export it locally.")
    return key


def _req(method: str, path: str, payload: dict | None = None, retries: int = 3) -> dict:
    url = f"{BASE}/{path.lstrip('/')}"
    headers = {"X-Api-Key": _key(), "Content-Type": "application/json"}
    for attempt in range(retries):
        resp = requests.request(method, url, json=payload, headers=headers, timeout=30)
        if resp.status_code == 429 and attempt < retries - 1:
            time.sleep(2 ** (attempt + 1))
            continue
        if resp.status_code >= 400:
            sys.exit(f"Apollo API {resp.status_code} on {method} {path}: {resp.text[:500]}")
        return resp.json()
    sys.exit(f"Apollo API rate-limited after {retries} attempts on {path}")


def load_yaml(rel: str) -> dict:
    with open(REPO_ROOT / rel) as f:
        return yaml.safe_load(f)


def assert_live_or_exit(action: str) -> None:
    """Write actions against sequences/contacts refuse to run outside live mode."""
    mode = load_yaml("config/system.yaml").get("mode")
    if mode != "live":
        sys.exit(f"REFUSED: '{action}' is a live-mode action but config/system.yaml mode={mode}.")


# ---- commands -------------------------------------------------------------

def email_accounts(_args) -> dict:
    return _req("GET", "email_accounts")


def people_search(args) -> dict:
    """mixed_people/search is deprecated (422 SEARCH.ROUTING.LEGACY_PEOPLE_SEARCH_DEPRECATED).
    Its replacement, mixed_people/api_search, has the same filter shape but withholds last
    names (obfuscated, e.g. "Gi***i"), org domain/website, and email - those need a separate,
    credit-costing People Enrichment call per match (people/bulk_match, max 10 ids per call,
    1 credit per person actually matched - 0 for a miss). Enrichment runs by default since a
    lead with a masked name and no email isn't usable downstream (scoring/drafting/Apollo
    upsert all need the real values); pass --no-enrich for a cheap exploratory search."""
    icp = load_yaml(f"config/icp-{args.icp}.yaml")
    filter_key = args.filter_set
    if filter_key not in icp:
        sys.exit(f"No '{filter_key}' block in config/icp-{args.icp}.yaml.")
    filters = {k: v for k, v in (icp.get(filter_key) or {}).items() if v}
    if args.domain:
        filters["q_organization_domains_list"] = [args.domain]
    filters["page"] = args.page
    filters["per_page"] = args.per_page
    result = _req("POST", "mixed_people/api_search", filters)

    people = result.get("people", [])
    if args.no_enrich or not people:
        return result

    enriched = []
    for i in range(0, len(people), 10):
        batch = [p for p in people[i:i + 10] if p.get("id")]
        if not batch:
            continue
        match = _req("POST", "people/bulk_match",
                     {"details": [{"id": p["id"]} for p in batch]})
        enriched.extend(match.get("matches") or match.get("people") or [])

    if enriched:
        print(f"Enriched {len(enriched)}/{len(people)} people "
              f"(up to {len(enriched)} Apollo credits spent).", file=sys.stderr)
        result["people"] = enriched
    else:
        print("WARNING: enrichment returned no matches - falling back to unenriched "
              "(masked) search results.", file=sys.stderr)
    return result


def sequences(_args) -> dict:
    return _req("POST", "emailer_campaigns/search", {"page": 1, "per_page": 50})


def add_to_sequence(args) -> dict:
    assert_live_or_exit("add-to-sequence")
    accounts = _req("GET", "email_accounts").get("email_accounts", [])
    match = [a for a in accounts if a.get("email", "").lower() == args.mailbox.lower()]
    if not match:
        sys.exit(f"Mailbox {args.mailbox} is not connected in Apollo. Connected: "
                 f"{[a.get('email') for a in accounts]}")
    return _req("POST", f"emailer_campaigns/{args.sequence_id}/add_contact_ids", {
        "contact_ids": args.contact_ids.split(","),
        "send_email_from_email_account_id": match[0]["id"],
        "emailer_campaign_id": args.sequence_id,
    })


def upsert_contact(args) -> dict:
    assert_live_or_exit("upsert-contact")
    body = json.loads(args.json)
    existing = _req("POST", "contacts/search",
                    {"q_keywords": body.get("email", ""), "per_page": 1})
    contacts = existing.get("contacts") or []
    if contacts and body.get("email") and contacts[0].get("email") == body["email"]:
        return _req("PUT", f"contacts/{contacts[0]['id']}", body)
    return _req("POST", "contacts", body)


def replies(args) -> dict:
    # Emailer messages of type reply since a timestamp. NOTE: verify the exact filter
    # names against a real response once mailboxes are connected; Apollo's emailer
    # endpoints are the least-documented part of their public API.
    payload = {"page": 1, "per_page": 100, "email_message_types": ["reply"]}
    if args.since:
        payload["created_at_after"] = args.since
    return _req("POST", "emailer_messages/search", payload)


def stats(_args) -> dict:
    out = _req("POST", "emailer_campaigns/search", {"page": 1, "per_page": 50})
    keep = ("id", "name", "active", "num_contacts", "unique_scheduled", "unique_delivered",
            "unique_bounced", "unique_opened", "unique_replied", "unique_unsubscribed",
            "bounce_rate", "open_rate", "reply_rate")
    return {"sequences": [{k: c.get(k) for k in keep}
                          for c in out.get("emailer_campaigns", [])]}


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser("email-accounts")
    ps = sub.add_parser("people-search")
    ps.add_argument("--icp", required=True, choices=["startups", "churches"])
    ps.add_argument("--filter-set", default="apollo_filters",
                     help="Which named filter block in config/icp-{icp}.yaml to use - "
                          "e.g. apollo_filters_yc for the Y Combinator sourcing channel.")
    ps.add_argument("--domain")
    ps.add_argument("--page", type=int, default=1)
    ps.add_argument("--per-page", type=int, default=25)
    ps.add_argument("--no-enrich", action="store_true",
                     help="Skip the credit-costing enrichment call; results keep masked "
                          "names and no email/domain.")
    sub.add_parser("sequences")
    ats = sub.add_parser("add-to-sequence")
    ats.add_argument("--sequence-id", required=True)
    ats.add_argument("--contact-ids", required=True)
    ats.add_argument("--mailbox", required=True)
    uc = sub.add_parser("upsert-contact")
    uc.add_argument("--json", required=True)
    rp = sub.add_parser("replies")
    rp.add_argument("--since")
    sub.add_parser("stats")

    args = p.parse_args()
    fn = {"email-accounts": email_accounts, "people-search": people_search,
          "sequences": sequences, "add-to-sequence": add_to_sequence,
          "upsert-contact": upsert_contact, "replies": replies, "stats": stats}[args.cmd]
    print(json.dumps(fn(args), indent=2))


if __name__ == "__main__":
    main()
