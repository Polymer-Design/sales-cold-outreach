---
contact_name: Ryan Rottman
contact_title: COO & Co-Founder
organization: Athlete Agent Inc.
icp: startups
apollo_contact_id: 5ddd41c3d60ae500014881ce
score_total: 55
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-03
---

## research
- Real subscription SaaS platform: a searchable database of athletes/agents/teams, paywalled behind a subscription to unlock contact info (source: lead-scoring score_notes, WebFetch of athleteagent.com, 2026-10-30)
- org_data: 9 employees, founded 2024, modest growth (0%/+12.5%/+50% across 6/12/24mo) (source: Apollo org_data, via lead-scoring)
- Site returns no CMS/builder markers (nginx, no fingerprint) -> unknown/new_build_track (source: scripts/platform_detect.py + curl headers, via lead-scoring)
- research_arm: light (EXP-001) - no new research run this pass; all facts reused from lead-scoring's score_notes.

## proof_used
- knowledge/business-overview.md (plain capability statement - platform-matched build for an early-stage team, no case study claimed)

## email_1
subject: the paywall before the pitch
body: |
  Hey Ryan,

  AthleteAgent's whole model runs through site visitors: browse, hit the subscription wall, then decide to pay for contact access.

  That's a lot riding on the page before the paywall, actually doing the job of making the subscription worth it.

  We build sites for teams at this stage where the page itself needs to close the sale, not just describe the product.

  Worth 15 minutes?

  Ethan

## email_2
subject: nine people, one site
body: |
  Hey Ryan,

  At 9 people with no dedicated marketing hire yet, the site's probably whoever has time that week, not someone focused on conversion.

  A build matched to AthleteAgent's subscription model means the page itself does real selling, built once by a team that does this for a living.

  Want to jump on a call?

  Ethan

## email_3
subject: no pressure, Ryan
body: |
  Hey Ryan,

  If the current site's converting fine, no worries at all.

  If not, happy to talk through a build focused on getting more people past the paywall, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Subscription/paywall business model, org_data growth figures -> sourced from lead-scoring's score_notes (light arm, no new research per EXP-001)
- Polymer facts: no case study cited, plain capability statement only; no price/hours cited
- scripts/voice_check.py: clean
- Word counts: 67/56/33 - all within band
- One CTA per email, sign-off "Ethan"
- Cohesion: distinct hooks (paywall-conversion / no marketing hire / closer), escalating brevity, no repeated proof point
