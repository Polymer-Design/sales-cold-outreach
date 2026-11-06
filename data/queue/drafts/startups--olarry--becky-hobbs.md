---
contact_name: Becky Hobbs
contact_title: COO & CoFounder
organization: OLarry
icp: startups
apollo_contact_id: 610a8894ba82da0001562de5
score_total: 64
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-06
---

## research
- org_data: 40 employees, founded 2024, +127.8% twelve-month headcount growth, $5.9M revenue printed (Apollo org_data, data/leads/index.jsonl)
- WebSearch for Becky Hobbs/OLarry during lead-scoring returned no relevant company-specific results - no additional press/funding fact available beyond org_data, no new search run this pass
- platform_detect.py -> unknown -> new_build_track (run during lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, icp_fit startups - scope/before-state proof, no outcome numbers cited per that case study's "Results" section)

## email_1
subject: 128% growth story
body: |
  Hey Becky,

  Headcount up 128% in a year on $5.9M in revenue is the kind of growth that outpaces whatever site OLarry launched with, fast.

  We build fast, credible sites for teams scaling exactly like this: fixed price, live in weeks, built so your team can publish without a developer.

  We did that for Fispoke, moving them off Wix onto a 25-page, CMS-driven Webflow build.

  Worth 15 minutes to talk through what that'd look like for OLarry?

  Ethan

## email_2
subject: fixed price, fast build
body: |
  Hey Becky,

  Sprint is $3,000 for a single page, live in 30 days, 100% due at signing, up to a full custom build for a team OLarry's size.

  Design happens in Figma, with your own team able to publish changes once it's live.

  Want to jump on a call?

  Ethan

## email_3
subject: no pressure, Becky
body: |
  Hey Becky,

  If the site's keeping pace with the growth, no worries at all.

  If not, happy to talk through what it'd take to get it there, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-06
notes:
- org_data 40 employees, +127.8% twelve-month growth, $5.9M revenue -> matches data/leads/index.jsonl org_data verbatim
- No additional company-specific press/funding found during lead-scoring WebSearch - copy relies only on the verified org_data triple, no invented facts
- Fispoke proof: "25-page, CMS-driven Webflow build so their own team can publish without touching code" -> matches knowledge/case-studies/fispoke.md quotable line verbatim; status approved, track new_build, icp_fit startups match; no outcome numbers borrowed
- Pricing: "$3,000 for a single page, live in 30 days, 100% due at signing, up to a full custom build" -> matches knowledge/business-overview.md Sprint/Custom tiers exactly; "design happens in Figma, your own team able to publish changes" -> matches business-overview's "Design in Figma" / positioning line
- scripts/voice_check.py: clean
- Word counts: email_1 78, email_2 50, email_3 32 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "Ethan" throughout (startups, no "God Bless")
- Cohesion: three distinct angles (growth-outpacing-the-site / pricing+process / closer), escalating brevity, Fispoke proof used once only
