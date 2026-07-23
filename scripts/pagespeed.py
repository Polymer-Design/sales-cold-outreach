#!/usr/bin/env python3
"""Google PageSpeed Insights client for the outreach pipeline.

A slow or non-mobile-friendly website is the objective version of "your site is
holding you back" - both a lead-scoring signal (they need us more) and a first-line
email hook (a real load-time number lands harder than a vague "your site could be
better"). This wraps the PageSpeed Insights v5 API and normalizes the response into
the few numbers the lead-scoring and outreach-email skills actually use.

Requires GOOGLEPAGESPEEDINSIGHTS_API_KEY (Google Cloud -> PageSpeed Insights API).
The key is optional at call time: with no key (or an unreachable site) the tool
returns {"ok": false, ...} and exits 0 so drafting degrades gracefully instead of
crashing - PageSpeed is an extra signal, never a gate. Pass --strict to exit
nonzero on failure instead (used by CI health checks).

Usage:
  python scripts/pagespeed.py check --url https://example.com
  python scripts/pagespeed.py check --url example.com --strategy desktop
  python scripts/pagespeed.py check --url https://example.com --strict
"""

import argparse
import json
import os
import sys
import time
from urllib.parse import quote

import requests

ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

# Lighthouse performance-score bands (0-100) and Core Web Vitals LCP thresholds (s).
# These are Google's own cut lines; the scoring skill maps signal -> points.
GOOD_SCORE, POOR_SCORE = 90, 50
GOOD_LCP_S, POOR_LCP_S = 2.5, 4.0


def _key() -> str:
    return os.environ.get("GOOGLEPAGESPEEDINSIGHTS_API_KEY", "").strip()


def _normalize_url(url: str) -> str:
    url = url.strip()
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    return url


def _fetch(url: str, strategy: str, retries: int = 2) -> dict:
    params = {"url": url, "strategy": strategy, "category": "performance"}
    key = _key()
    if key:
        params["key"] = key
    for attempt in range(retries + 1):
        try:
            resp = requests.get(ENDPOINT, params=params, timeout=60)
        except requests.RequestException as exc:
            if attempt < retries:
                time.sleep(2 ** attempt)
                continue
            raise RuntimeError(f"request failed: {exc}") from exc
        if resp.status_code == 429 and attempt < retries:
            time.sleep(2 ** (attempt + 1))
            continue
        if resp.status_code >= 400:
            # Google returns a JSON error body; surface its message.
            try:
                msg = resp.json().get("error", {}).get("message", resp.text[:300])
            except ValueError:
                msg = resp.text[:300]
            raise RuntimeError(f"PageSpeed API {resp.status_code}: {msg}")
        return resp.json()
    raise RuntimeError("PageSpeed API rate-limited after retries")


def _lab_seconds(audits: dict, audit_id: str) -> float | None:
    val = audits.get(audit_id, {}).get("numericValue")
    return round(val / 1000, 1) if isinstance(val, (int, float)) else None


def _field_lcp_seconds(data: dict) -> float | None:
    metric = (data.get("loadingExperience", {})
              .get("metrics", {})
              .get("LARGEST_CONTENTFUL_PAINT_MS", {}))
    pct = metric.get("percentile")
    return round(pct / 1000, 1) if isinstance(pct, (int, float)) else None


def _classify(perf_score: int | None, lcp_s: float | None, mobile_friendly: bool) -> str:
    """Coarse need bucket the scoring skill reads: poor site = higher need."""
    poor = (
        (perf_score is not None and perf_score < POOR_SCORE)
        or (lcp_s is not None and lcp_s > POOR_LCP_S)
        or not mobile_friendly
    )
    if poor:
        return "poor"
    good = (
        (perf_score is None or perf_score >= GOOD_SCORE)
        and (lcp_s is None or lcp_s <= GOOD_LCP_S)
        and mobile_friendly
    )
    return "good" if good else "moderate"


def check(url: str, strategy: str) -> dict:
    url = _normalize_url(url)
    report_url = (f"https://pagespeed.web.dev/analysis?url={quote(url, safe='')}"
                  f"&form_factor={strategy}")

    data = _fetch(url, strategy)
    lh = data.get("lighthouseResult", {})
    audits = lh.get("audits", {})

    raw_score = lh.get("categories", {}).get("performance", {}).get("score")
    perf_score = round(raw_score * 100) if isinstance(raw_score, (int, float)) else None

    lab_lcp = _lab_seconds(audits, "largest-contentful-paint")
    field_lcp = _field_lcp_seconds(data)
    # Field (real-user) LCP is the more honest number for the email hook; fall back to lab.
    lcp_s = field_lcp if field_lcp is not None else lab_lcp
    speed_index_s = _lab_seconds(audits, "speed-index")

    # The `viewport` audit fails when the page has no mobile viewport meta tag -
    # the clearest machine-readable "this site isn't built for phones" signal.
    mobile_friendly = audits.get("viewport", {}).get("score", 1) == 1

    signal = _classify(perf_score, lcp_s, mobile_friendly)

    return {
        "ok": True,
        "url": lh.get("finalUrl") or lh.get("requestedUrl") or url,
        "strategy": strategy,
        "fetched_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "performance_score": perf_score,   # 0-100, mobile Lighthouse
        "lcp_seconds": lcp_s,              # field if available, else lab
        "lcp_source": "field" if field_lcp is not None else "lab",
        "speed_index_seconds": speed_index_s,
        "mobile_friendly": mobile_friendly,
        "field_data_available": field_lcp is not None,
        "signal": signal,                  # poor | moderate | good  (poor = higher need)
        "report_url": report_url,          # citable source for the fact-check gate
    }


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("check")
    c.add_argument("--url", required=True, help="lead's website (scheme optional)")
    c.add_argument("--strategy", default="mobile", choices=["mobile", "desktop"],
                   help="mobile is the default; a lead's site is judged on phones")
    c.add_argument("--strict", action="store_true",
                   help="exit nonzero on failure instead of returning ok:false")
    args = p.parse_args()

    if not _key():
        result = {"ok": False, "error": "GOOGLEPAGESPEEDINSIGHTS_API_KEY not set",
                  "url": args.url}
        print(json.dumps(result, indent=2))
        sys.exit(1 if args.strict else 0)

    try:
        result = check(args.url, args.strategy)
    except RuntimeError as exc:
        result = {"ok": False, "error": str(exc), "url": args.url}
        print(json.dumps(result, indent=2))
        sys.exit(1 if args.strict else 0)

    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
