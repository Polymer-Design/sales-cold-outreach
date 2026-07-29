---
name: lead-scoring
description: Score a lead 0-100 against Polymer's rubric, assign a tier, and determine their pitch track (new-build vs subscription). Use whenever new leads enter the pipeline or when re-scoring on new signals.
---

# Lead scoring

Score 0-100 across four categories. The SIGNALS below are locked (per Ethan's finalized
`config/icp-startups.yaml` / `config/icp-churches.yaml`, 2026-07-13). The exact POINT
ALLOCATIONS are still starter weights - left open on purpose, pending real closed-won data.
Record the per-category breakdown, not just the total, so self-review can recalibrate later.

## Step 0 — Hard exclusions (score 0, don't proceed)

- **Startups:** e-commerce / DTC company. Not a capability fit, considered and cut deliberately.
- **Churches:** nonprofit or parachurch org that isn't a local congregation.
- Either ICP: prior "not interested," opted out, or already do-not-contact.

## Step 1 — Detect platform + track (before scoring technographic fit)

Run `scripts/platform_detect.py --url <their site> --icp <startups|churches>`. This returns
`platform` and `track` (`new_build_track` or `subscription_track`). This determines which
pitch and which case studies the drafter reaches for later - **not just a score input**.
Record it on the lead.

Church-specific nuance: Subsplash lands in `new_build_track` per the routing table, but it
gets a DIFFERENT angle than Squarespace/Wix ("your app's great, the website doesn't match
it" vs. "outgrown the DIY builder") - a church running Subsplash already has budget and
digital sophistication. Note this on the lead so the drafter picks the right angle.

## Step 2 — Firmographic fit (30 pts)

**Churches:** attendance vs. the 250 floor. Full points near the productive middle of the
range (churches well past 250 with clear staff capacity); taper near the floor itself since
250 is a hard qualifying line, not a sweet spot. Estimate attendance from proxies (staff
count on site, service count, seating, campus count) when not stated, and note the proxy.
Multi-site: +3 (capped at 30).

**Startups:** funding stage (Series A-C typical; well-funded seed and profitable
bootstrapped both fit; Series D+ can fit via embedded-team framing), team size 5-50.
Full 30 for stage+size match; deduct for edges.

## Step 3 — Technographic fit (20 pts)

**Churches**, in priority order:
- Confirmed Planning Center (churchcenter.com subdomain found by the crawler) = 20.
  This is the flagship signal and strongest personalization angle - always lead with it
  when present.
- Breeze/Tithely or Rock RMS signals: **not yet built** (roadmap item, build after the
  Planning Center pipeline is proven - see `config/icp-churches.yaml`
  `secondary_technographic_signals_roadmap`). Score 0 on this sub-signal until then; don't
  guess at it.
- No ChMS signal found = 0 on this sub-signal.
- Website platform (from Step 1) is a technographic input too: being on Webflow already
  (subscription_track) is a distinct positive signal from being technographically absent
  (new_build_track) - both are real fit, just for different offers. Don't score
  subscription_track as "worse fit," it's a different fit.

**Startups:**
- In-house capability signal (static, not a decaying trigger): absence of an in-house
  design/dev function = positive for the build service. An active job posting for an
  in-house designer or frontend/web developer = negative for the build service
  specifically (they're building the capability internally) - doesn't necessarily hurt
  subscription-track fit, score that sub-case separately if it comes up.
- **No proven vertical-fit signal exists** (confirmed 2026-07-13). Do not invent one to
  manufacture a differentiator - score 0/neutral on vertical, not a guess. Revisit only if
  Ethan confirms a real shipped-work cluster (e.g. a fintech pattern beyond Fispoke).

## Step 4 — Intent / trigger signal (30 pts) — drives personalization believability

**Startups** — watch for a **marketing/growth hire** specifically (Head of Growth, Head of
Marketing, VP Marketing, Growth Marketer, Marketing Manager, Demand Gen Manager): this hire
is rarely also a web developer, so the site build tends to get outsourced right around when
the hire happens. Bonus: this person is frequently also the decision-maker contact.
Also: recent funding round, product launch/rebrand, press/conference presence.

**Churches** — building/capital campaign announcement, new executive pastor or
communications hire, recent move to Planning Center, visibly outdated/broken-mobile site,
Easter/Christmas seasonal angle.

Both ICPs: decay by recency -
- 0-30 days old: up to 30
- 31-90 days: up to 20
- 91-180 days: up to 10
- older: 0

## Step 5 — Reachability / seniority (20 pts)

- Verified email: 10 (unverified: 4, none: 0)
- Title exactly matches this ICP's `decision_maker_titles` priority list (see below): 10
  (adjacent title: 5)

## Decision-maker selection (max 2 per org, both ICPs)

**Startups** - conditional on company stage:
- If a marketing hire exists (Head of Marketing/Head of Growth found): contact them
  first (day-to-day driver, owns vendor selection) + Founder/CEO second (retains budget
  sign-off at this company size - a CMO-level hierarchy doesn't appear until 8-12+ person
  marketing teams, past this ICP's band, so don't target "CMO").
- If no marketing hire yet: Founder/CEO directly as primary, COO/Head of Ops as secondary
  if one exists.

**Churches** - priority order, adjusted by attendance:
1. Communications Director / Director of Communications / Marketing Director / Creative
   Director (day-to-day owner, most common contact - top priority always)
2. Executive Pastor / Executive Director (budget authority, especially prominent 1,000+)
3. IT Director / Digital Ministry Director (technical co-owner, ONLY relevant 1,500+ - skip
   below that size even if found)
4. Web/Digital Manager (500+ attendance, usually under Communications)
Default to #1 + #2 unless attendance and the specific contacts found suggest otherwise.

## Tiers

- **75+ Hot** — drafted first, human review before email 1 sends
- **50-74 Warm** — standard automated 3-email sequence
- **<50 Cold** — tagged, skipped (see `config/system.yaml` scoring.draft_cold_tier)

## Output format

```json
{
  "score_total": 78,
  "score_firmographic": 25,
  "score_technographic": 20,
  "score_intent": 20,
  "score_reachability": 13,
  "tier": "hot",
  "platform": "wordpress",
  "track": "new_build_track",
  "scored_at": "2026-07-29",
  "score_notes": "one line per category: the evidence, with source"
}
```

Always order the day's drafting queue by score descending. Never draft a cold-tier lead
while hot/warm leads are waiting.
