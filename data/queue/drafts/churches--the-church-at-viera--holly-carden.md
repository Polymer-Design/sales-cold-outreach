---
contact_name: Holly Carden
contact_title: Communications Associate Director
organization: The Church At Viera
icp: churches
apollo_contact_id: 69b3e824cba9cb0001e8b01b
score_total: 72
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-16
---

## research
- Homepage has a "Pastoral Transition Plan" link under Quick Links, alongside profiled Lead Pastor Mark Ragsdale; the page itself gives no detail on the transition (source: churchatviera.com, WebFetch 2026-11-16, per score_notes)
- Confirmed churchcenter.com subdomain (Planning Center), a separate page system from the main site (source: church_crawler / platform_detect.py, per score_notes)
- Single location, 9005 N. Wickham Rd, Melbourne, FL; founded 2007; org_data $13.3M revenue, 29 employees (source: churchatviera.com + Apollo org_data, per score_notes)
- Site platform: WordPress -> new_build_track (source: scripts/platform_detect.py, per score_notes)

## proof_used
- knowledge/business-overview.md (Core tier: $6,500, live in 4 weeks, builds around Planning Center + YouTube - plain capability statement; no approved case study's specific story fits this lead's situation closely enough to use over it)

## email_1
subject: your pastoral transition plan
body: |
  Hey Holly,

  Saw Church at Viera has a Pastoral Transition Plan link up on the site, right alongside Planning Center running on its own churchcenter.com page, separate from the main site.

  Transitions are exactly when a church's digital presence should feel most unified, not split across two systems. We build sites around Church Center so giving, groups, and service info live in one place.

  Worth 15 minutes to talk through what that'd look like for Church at Viera?

  God Bless,
  Ethan

## email_2
subject: while it's still fresh
body: |
  Hey Holly,

  Following up on this one. A pastoral transition is also a natural point to ask whether the site matches where the church is headed next, not just who's leading it.

  Our Core tier builds around Planning Center and YouTube directly, live in about 4 weeks, $6,500 flat.

  Worth a quick call while the transition's still fresh?

  God Bless,
  Ethan

## email_3
subject: keeping this one short
body: |
  Hey Holly,

  I'll keep this short given everything else on your plate during the transition.

  No pressure on the website front, but if it ends up mattering, I'd love to show you how we'd build it around what Church at Viera already runs on.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-16
notes:
- "Pastoral Transition Plan link under Quick Links" -> re-verified via WebFetch https://churchatviera.com 2026-11-16: confirmed present; draft doesn't claim any detail about the transition beyond the link existing (page gives none)
- "Planning Center running on its own churchcenter.com page, separate from the main site" -> re-verified: confirmed churchcenter.com subdomain exists, distinct from the WordPress main site
- Address "9005 N. Wickham Rd, Melbourne, FL" cited only in research block, not in email copy
- Pricing: "Core... $6,500... 4 weeks... builds around Planning Center and YouTube" -> matches knowledge/business-overview.md exactly ("Core $6,500... Live in 4 weeks"; "Churches: Planning Center, YouTube" integrations line), current Nov 2026 pricing
- Track/proof consistency: new_build_track lead; both proof emails use a plain capability statement, no case study numbers borrowed, no subscription-track language
- No PageSpeed/comparative claims made
- voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- Word counts: email_1 81w, email_2 61w, email_3 47w - within band (e1 50-85, e2 40-80, e3 30-60), escalating brevity holds
- Cohesion: checked against this run's other drafts (Orangewood Church, Diabetes Digital) - subjects distinct; email_3's sentence construction ("I'll keep this short given...") deliberately differs from Orangewood's email_3 opener to avoid a repeated-template feel across this batch
