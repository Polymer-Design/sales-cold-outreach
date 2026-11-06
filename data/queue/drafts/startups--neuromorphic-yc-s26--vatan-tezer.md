---
contact_name: Vatan Tezer
contact_title: Co-Founder & CEO
organization: Neuromorphic (YC S26)
icp: startups
apollo_contact_id: 562df255a6da9872ab004277
score_total: 63
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-06
pushed_at: 2026-11-06
pushed_via_mailbox: ehoover@growwithpolymer.com
apollo_contact_id_pushed: 6aedd675c947e8000ccf7d7f
---

## research
- YC S26, robot "brains" for physical-sector tasks (source: gazetesu.sabanciuniv.edu, webrazzi.com 2026-07-24) - reused from lead-scoring, no new search this pass (research_arm: light)
- Company claims (self-reported, LinkedIn, not independently verified per lead-scoring notes) an already-deployed robot with a biotechnology customer - framed below as their own claim, not an independently confirmed fact
- org_data: 5 employees (Apollo org_data)
- platform_detect.py -> unknown (site returned HTTP 403 on fetch during lead-scoring) -> new_build_track default

## proof_used
- knowledge/case-studies/fispoke.md (new_build, icp_fit startups - scope/before-state proof, no outcome numbers cited per that case study's "Results" section)

## email_1
subject: already running in the field
body: |
  Hey Vatan,

  Neuromorphic says it already has a robot deployed with a biotech customer, which is further along than most YC S26 companies get this fast.

  We build fast, credible sites for teams right at this stage: fixed price, live in weeks, built so your team can publish without a developer.

  We did that for Fispoke, moving them off Wix onto a 25-page, CMS-driven Webflow build.

  Worth 15 minutes to talk through what that'd look like for Neuromorphic?

  Ethan

## email_2
subject: fixed price, fast build
body: |
  Hey Vatan,

  Sprint is $3,000 for a single page, live in 30 days, 100% due at signing, up to a full custom build as the robot fleet grows.

  Design happens in Figma, with your own team able to publish changes once it's live.

  Want to jump on a call?

  Ethan

## email_3
subject: no pressure, Vatan
body: |
  Hey Vatan,

  If the site's already where you want it, no worries at all.

  If not, happy to talk through what it'd take to get it matching where Neuromorphic's headed, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-06
notes:
- YC S26 + robot "brains" -> matches lead-scoring score_notes (gazetesu.sabanciuniv.edu, webrazzi.com)
- Biotech deployment claim framed as "Neuromorphic says" (company's own unverified claim, not asserted as independently confirmed fact) -> matches the unverified-claim caveat in lead-scoring score_notes
- org_data 5 employees -> matches data/leads/index.jsonl org_data verbatim
- Fispoke proof: "25-page, CMS-driven Webflow build so their own team can publish without touching code" -> matches knowledge/case-studies/fispoke.md quotable line verbatim; status approved, track new_build, icp_fit startups match; no outcome numbers borrowed
- Pricing: "$3,000 for a single page, live in 30 days, 100% due at signing, up to a full custom build" -> matches knowledge/business-overview.md Sprint/Custom tiers exactly
- scripts/voice_check.py: clean
- Word counts: email_1 79, email_2 50, email_3 35 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "Ethan" throughout (startups, no "God Bless")
- Cohesion: three distinct angles (deployment-claim capability hook / pricing+process / closer), escalating brevity, Fispoke proof used once only
