---
contact_name: Abhay Kalra
contact_title: CEO
organization: Avent (YC S25)
icp: startups
apollo_contact_id: 6198c283ab68b400018f3645
score_total: 66
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-16T13:34:43Z
pushed_via_mailbox: ethan@growwithpolymer.com
apollo_contact_id_pushed: 6afb0672e7ec1b0018f28755
drafted_at: 2026-11-16
---

## research
- org_data: 5 employees, +100% headcount growth over 12 months (source: Apollo org_data, per score_notes)
- Avent is an "AI workforce platform for distributors," automating quote-to-cash (quoting, order entry, purchasing) via business rules + AI + human judgment; integrates with Epicor, NetSuite, SAP, Infor, Dynamics 365, Salesforce; states it is SOC 2 compliant (source: aventindustrial.com, WebFetch 2026-11-16 - this fetch replaced the YC-jobs-page hiring detail noted during scoring, which could not be re-verified today since aventindustrial.com/careers lists no specific open roles)
- Pre-seed round ($500K) announced September 2025 - about 14 months old as of today, past the 91-180 day decay window, not cited as current/recent in the copy (source: vcbacked.co, per score_notes)
- Site platform: unknown -> new_build_track (source: scripts/platform_detect.py, per score_notes)
- research_arm: light at drafting time per EXP-001 (no new search for the initial draft); one verification fetch was run at fact-check per the gate's standing requirement, which surfaced the integrations/SOC2 fact used above in place of the unverifiable hiring claim

## proof_used
- knowledge/business-overview.md (Sprint tier: $2,500, live in 2 weeks - plain capability statement; no approved case study fits this lead's situation closely enough to use over it)

## email_1
subject: an enterprise-grade product
body: |
  Hey Abhay,

  Avent plugs straight into Epicor, NetSuite, SAP, Infor, Dynamics 365, and Salesforce to automate quote-to-cash for distributors, and you're SOC 2 compliant on top of it. That's an enterprise-grade product.

  We build sites for growth-stage teams, fixed price, live in weeks, built to carry that level of credibility.

  Worth 15 minutes to see if it's a fit for Avent?

  Ethan

## email_2
subject: ready before they start
body: |
  Hey Abhay,

  Following up. Avent's headcount has roughly doubled over the past year. A site built for an earlier, smaller version of the company tends to fall behind that kind of growth fast.

  Our Sprint tier is a focused, single-page build, live in 2 weeks, $2,500 flat, a fast way to get something sharp in place.

  Worth a quick call on it?

  Ethan

## email_3
subject: short one, no pressure
body: |
  Hey Abhay,

  Short one. If the site's not a priority with everything else going on, totally understand.

  If it is, happy to talk through a fast, fixed-price build for Avent.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-16
notes:
- Original drafting-stage claim ("YC jobs page lists a founding growth operator role") could NOT be re-verified via WebFetch https://aventindustrial.com 2026-11-16 (the site's own /careers page lists no specific openings, and the original source was YC's job board, not this domain) - removed from email_1/email_2 rather than left in unverified; replaced with a freshly-confirmed fact from the same fetch
- "Plugs into Epicor, NetSuite, SAP, Infor, Dynamics 365, Salesforce... automates quote-to-cash... SOC 2 compliant" -> confirmed via WebFetch https://aventindustrial.com 2026-11-16, current as of today
- "Headcount has roughly doubled over the past year" -> matches Apollo org_data (organization_headcount_twelve_month_growth: 1.0 = +100%), structured provider data, not independently re-fetchable via WebFetch but not contradicted by anything found today
- No funding claim made (pre-seed is 14 months old, correctly excluded as stale)
- Pricing: "Sprint... $2,500... live in 2 weeks" -> matches knowledge/business-overview.md exactly, current Nov 2026 pricing
- Track/proof consistency: new_build_track lead, plain capability statement, no case study borrowed
- voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- Word counts: email_1 62w, email_2 63w, email_3 31w - within band (e1 50-85, e2 40-80, e3 30-60); e2 is one word longer than e1 but the arc still closes sharply shorter at e3
- Cohesion: checked against this run's other drafts - subjects and proof distinct
