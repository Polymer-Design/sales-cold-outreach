---
name: lead-scoring
description: Score a lead 0-100 against Polymer's rubric and assign a tier. Use whenever new leads enter the pipeline or when re-scoring on new signals.
---

# Lead scoring

Score 0-100 across four categories. Starter weights from the reference doc — Ethan will
recalibrate against closed-won data, so record the per-category breakdown, not just the total.

## 1. Firmographic fit (30 pts)

**Churches:** attendance band. Peak points (30) for ~1,500-5,000; taper to 15 at the
500 and 10,000 edges; 0 outside the band. Multi-site +3 (capped at 30). If attendance is
unknown, estimate from proxies (staff count on site, service count, seating) and note the proxy.

**Startups:** funding stage (Series A-C typical, but well-funded seed / profitable bootstrapped
fit), team size 5-50, hiring velocity. Full 30 for stage + size match; deduct for edges.

## 2. Technographic fit (20 pts)

A base platform signal plus a site-health need signal from Google PageSpeed. A slow or
non-mobile site means they need us more, so PageSpeed only ever *adds* points, up to the
20-pt cap — it never lowers a lead's existing score.

**Run PageSpeed first:** `python scripts/pagespeed.py check --url <their-site>` (mobile is the
default). It returns `performance_score` (0-100), `lcp_seconds`, `mobile_friendly`, and a
coarse `signal` (poor | moderate | good). If it returns `ok: false` (no key, site unreachable,
timeout), score the base signal only and note "pagespeed unavailable" — never invent a number.

**Churches (base):** confirmed churchcenter.com subdomain = 20. Planning Center mentioned on
site but no subdomain found = 12. No signal = 0.

**Startups (base):** Webflow/Wix/Squarespace/WordPress currently detectable on their site =
signal they buy websites rather than build in-house. 0 if their site is clearly agency-fresh
(<6 months old).

**Site-health need (both ICPs), added on top of the base, category still caps at 20:**
- `signal: poor` (perf <50, or LCP >4s, or no mobile viewport): **+8**
- `signal: moderate`: **+4**
- `signal: good` (fast and mobile-friendly): **+0** — a modern fast site needs us less

PageSpeed is the objective read on the old "marketing site visibly weak vs. their funding"
hunch — use the number, not a vibe. Record the exact number in `score_notes` and in the
`pagespeed` output field even when it adds 0, because the drafter reuses it as the email's
first-line hook.

## 3. Intent / trigger signal (30 pts) — drives personalization believability

Signals per `config/icp-*.yaml` `trigger_signals`. Score the strongest single signal:
- 0-30 days old: up to 30
- 31-90 days: up to 20
- 91-180 days: up to 10
- older: 0. A 6-month-old signal does not score like a 2-week-old one.

## 4. Reachability / seniority (20 pts)

- Verified email: 10 (unverified: 4, none: 0)
- Title exactly matches `decision_maker_titles` priority list: 10 (adjacent title: 5)

## Tiers

- **75+ Hot** — drafted first, human review before email 1 sends
- **50-74 Warm** — standard automated 3-email sequence
- **<50 Cold** — tagged, skipped (see `config/system.yaml` scoring.draft_cold_tier)

## Negative overrides (score 0, tag do-not-contact where applicable)

Prior "not interested", opted out, wrong vertical despite passing filters, no verifiable
contact info, org in visible financial distress, church that isn't actually a church
(denomination HQ, parachurch org) unless Ethan says otherwise.

## Output format

Write scores back where the lead lives (Apollo custom fields in live mode; the lead JSON in
`data/leads/` in dry_run), as:

```json
{
  "score_total": 78,
  "score_firmographic": 25,
  "score_technographic": 20,
  "score_intent": 20,
  "score_reachability": 13,
  "tier": "hot",
  "scored_at": "2026-07-01",
  "pagespeed": {
    "signal": "poor",
    "performance_score": 38,
    "lcp_seconds": 4.8,
    "mobile_friendly": false,
    "report_url": "https://pagespeed.web.dev/analysis?url=...&form_factor=mobile"
  },
  "score_notes": "one line per category: the evidence, with source"
}
```

Always order the day's drafting queue by score descending. Never draft a cold-tier lead
while hot/warm leads are waiting.
