---
contact_name: Shawn Smith
contact_title: Head of Growth
organization: Sidekick (YC S26)
icp: startups
apollo_contact_id: 6258a213ea3d1600018d4475
score_total: 71
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-06
pushed_at: 2026-11-06
pushed_via_mailbox: ehoover@growwithpolymer.com
apollo_contact_id_pushed: 6aedd67899c9be00188a0357
---

## research
- Confirmed Pre-Seed round dated June 2026 (source: VCBacked, cited in lead-scoring score_notes, reused - not re-fetched this pass)
- Self-reported $38K MRR across 4 countries as of August 2026 (source: company's own reporting, cited in lead-scoring score_notes)
- org_data: 6 employees, founded 2025, +250% six-month headcount growth (Apollo org_data)
- Contact Shawn Smith holds the title Head of Growth - a marketing/growth hire trigger signal in itself (icp-startups.yaml trigger_signal_titles)
- platform_detect.py -> unknown -> new_build_track (run during lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, icp_fit startups - scope/before-state proof, no outcome numbers cited per that case study's "Results" section)

## email_1
subject: the site you just inherited
body: |
  Hey Shawn,

  Scaling to $38K MRR across 4 countries with 6 people usually means the website's still whatever got thrown up pre-seed, and now it's landed on your desk to fix.

  We build fast, credible sites for teams right at this stage: fixed price, live in weeks, built so your team can publish without a developer.

  We did exactly that for Fispoke, moving them off Wix onto a 25-page, CMS-driven Webflow build.

  Worth 15 minutes to talk through what that'd look like for Sidekick?

  Ethan

## email_2
subject: fixed price, 30 days
body: |
  Hey Shawn,

  Sprint is $3,000 for a single page, live in 30 days, 100% due at signing.

  Most teams at your stage start there, then move to a bigger Core build once the product side settles down.

  Want to jump on a call?

  Ethan

## email_3
subject: no pressure, Shawn
body: |
  Hey Shawn,

  If the site's not a priority this quarter, no worries.

  If it is, happy to show you what a fast, fixed-price build would look like for Sidekick, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-06
notes:
- Pre-Seed round + $38K MRR across 4 countries -> matches lead-scoring score_notes verbatim (VCBacked/self-reported, both already sourced at scoring time)
- org_data 6 employees, +250% six-month growth -> matches data/leads/index.jsonl org_data verbatim
- Shawn Smith = Head of Growth -> matches Apollo contact title and icp-startups.yaml trigger_signal_titles
- Fispoke proof: "25-page, CMS-driven Webflow build so their own team can publish without touching code" -> matches knowledge/case-studies/fispoke.md quotable line verbatim; status approved, track new_build, icp_fit startups match; no outcome numbers borrowed
- Pricing: "$3,000 for a single page, live in 30 days, 100% due at signing" -> matches knowledge/business-overview.md Sprint tier exactly
- scripts/voice_check.py: clean
- Word counts: email_1 85, email_2 44, email_3 34 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "Ethan" throughout (startups, no "God Bless")
- Cohesion: three distinct angles (growth-hire-inherits-the-site / Sprint pricing / closer), escalating brevity, Fispoke proof used once only
