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

**Churches:** confirmed churchcenter.com subdomain = 20. Planning Center mentioned on site
but no subdomain found = 12. No signal = 0.

**Startups:** Webflow/Wix/Squarespace/WordPress currently detectable on their site = signal
they buy websites rather than build in-house. Marketing site visibly weak vs. their funding
level is worth points too (they need us). 0 if their site is clearly agency-fresh (<6 months old).

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
  "score_notes": "one line per category: the evidence, with source"
}
```

Always order the day's drafting queue by score descending. Never draft a cold-tier lead
while hot/warm leads are waiting.
