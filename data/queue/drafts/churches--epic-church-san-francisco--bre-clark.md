---
contact_name: Bre Clark
contact_title: Director of Communications
organization: Epic Church San Francisco
icp: churches
apollo_contact_id: 6937d0ddeba2eb0001694d1c
score_total: 68
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-11
pushed_at: 2026-11-12T13:10:34Z
---

## research
- Confirmed as Epic Church, SoMa San Francisco, led by Ben Pilgreen, over 1,000 in recent
  attendance (sources: sfstandard.com 2023, cdfcapital.org Feb 2025, found during
  lead-scoring 2026-11-11)
- Confirmed epicsf.churchcenter.com Planning Center subdomain, a separate address from
  epicsf.com itself (source: church_crawler, lead-scoring 2026-11-11)
- Platform detected as webflow -> subscription_track (source: scripts/platform_detect.py
  --url https://epicsf.com --icp churches, lead-scoring 2026-11-11)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free platform_detect fields only. (The 2023
  building-renovation story found during scoring is 2+ years stale and not used here.)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no
  subscription-track case study exists yet per knowledge/case-studies/README.md, so no
  case study cited; Grow plan price cited from the approved November 2026 pricing section)

## email_1
subject: epic and planning center
body: |
  Hey Bre,

  Epic already built the right foundation on Webflow, but Planning Center still lives at
  a separate churchcenter.com address instead of inside the main site.

  For a church running over 1,000 people through it, that is a lot of giving, groups, and
  events traffic routed around the site instead of through it.

  We run an ongoing plan for churches already on Webflow: new pages, CMS work, and
  Planning Center and YouTube monitoring built in, no rebuild needed.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: a plan, not a one-off
body: |
  Hey Bre,

  Most churches on Webflow still handle Planning Center updates and site edits ad hoc,
  pulled together whenever someone has time.

  Our Grow plan is $1,000/mo: ongoing design and CMS work, plus Planning Center and
  YouTube monitoring, so nothing waits on whoever is free that week.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, epic
body: |
  Hey Bre,

  Last one from me.

  If Planning Center feels fully part of epicsf.com already, no worries at all.

  If it still lives somewhere separate, happy to grab 15 minutes and show you the Grow
  plan.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-11
notes:
- "running over 1,000 people" -> matches cdfcapital.org Feb 2025 source from lead-scoring.
- "Planning Center still lives at a separate churchcenter.com address" -> structurally true from the church_crawler's confirmed epicsf.churchcenter.com subdomain signal (a subdomain is a separate address from the main domain by definition); no unverified claim about site content made.
- "$1,000/mo" Grow plan -> matches knowledge/business-overview.md Monthly plans table exactly (Grow, $1,000/mo, most popular), approved November 2026 pricing. No internal figures (hour caps, add-on prices) cited.
- Track/proof consistency: subscription_track lead, plain capability statement used (no case study exists for subscription track per knowledge/case-studies/README.md) - consistent, no new_build case study numbers borrowed.
- The 2023 building-renovation story was deliberately NOT used - too stale (2+ years) to read as current.
- scripts/voice_check.py: clean. Word counts: email_1 ~79w, email_2 ~55w, email_3 ~35w - within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (Webflow + Planning Center address), not sendable elsewhere. No repeated proof point across the sequence.
