---
contact_name: Alexis Aftalion
contact_title: Co-Founder & CEO
organization: Standout (YC P26)
icp: startups
apollo_contact_id: 6acd4d1cb86c2700019008a1
score_total: 61
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-29
---

## research
- Standout is an AI talent agent that matches engineers/designers/PMs/GTM builders to startup roles and introduces them directly to founders, with a "trusted by builders from" section naming companies including Anthropic, Stripe, and Meta as where represented builders have worked (source: WebFetch https://standout.work, 2026-10-29)
- Homepage states only the top 5% of applicants get represented (source: WebFetch https://standout.work, 2026-10-29)
- Pre-seed ~$500K reported May 2026 (source: lead's score_notes)
- PageSpeed check timed out twice (2026-10-29) - not available for this draft
- Platform: unknown (scripts/platform_detect.py) -> new_build_track

## proof_used
- knowledge/business-overview.md (plain capability statement - no case study fits a talent marketplace)

## email_1
subject: standout's trust pitch
body: |
  Hey Alexis,

  Standout's pitch leans entirely on trust, intros to founders at companies like Anthropic and Stripe, which means the site carrying that message has to read as credible as the claim itself.

  A fixed-price build gets you something built to match that bar, without pulling you off the actual matching problem.

  Open to a quick call this week?

  Ethan

## email_2
subject: selective product, generic site
body: |
  Hey Alexis,

  Standout only reps the top 5% of applicants, that's a real selectivity claim, and the site is the first proof point a builder sees before they trust you with their job search.

  A fixed-price build is scoped once and ships without slowing down the matching product.

  Worth a quick 15 minutes this week?

  Ethan

## email_3
subject: last one, standout
body: |
  Hey Alexis,

  Last note from me on this one.

  If the site's already carrying that trust pitch well, no need to reply.

  If it's not quite there yet, happy to talk whenever works this week.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-29
notes:
- "trusted by builders from companies like Anthropic and Stripe" -> re-fetched https://standout.work 2026-10-29, confirmed "Trusted by builders from" section names Anthropic, Stripe, Meta as where represented builders have worked; email cites 2 of the 3, no fabrication
- "only reps the top 5% of applicants" -> re-fetched https://standout.work 2026-10-29, homepage states "The top 5% get represented" verbatim-compatible
- Deliberately did NOT cite the homepage's live stat counters ("0+ Builders Represented" etc) - those read as unpopulated placeholder/animation artifacts in a static fetch, not a confirmed real defect, so not safe to assert as fact
- PageSpeed unavailable (two timeouts 2026-10-29) - no speed claim made
- new_build_track (platform unknown) -> plain capability statement, no case study borrowed
- scripts/voice_check.py: clean
- word counts: 60 / 56 / 36 - all within band
- sign-off: plain "Ethan", one CTA per email, no booking link
- CTA phrasing checked against rest of batch for repetition
