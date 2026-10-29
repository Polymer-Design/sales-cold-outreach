---
contact_name: Nick Shelly
contact_title: Co-founder & CEO
organization: Apero Health (Y Combinator)
icp: startups
apollo_person_id: 66f3f0eca768a50001d638ad
score_total: 56
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-10-29
pushed_at: 2026-10-29T13:40:44Z
mailbox: ehoover@growwithpolymer.com
apollo_contact_id: 6ae34cdb766b61001c05555c
---

## research
- Apero bundles scheduling, visit notes, revenue cycle management, patient billing, and reporting for medical practices; homepage claims implementation in under a day and up to an 80% reduction in billing time (source: WebFetch https://aperohealth.com, 2026-10-29)
- Homepage also cites a 12-day average ERA enrollment and SOC 1 / SOC 2 Type 2 / HIPAA compliance (source: WebFetch https://aperohealth.com, 2026-10-29)
- Mobile PageSpeed: performance 88/100, accessibility 87/100, LCP 3.2s (source: scripts/pagespeed_check.py --url https://aperohealth.com --strategy mobile, 2026-10-29)
- Platform: webflow (scripts/platform_detect.py) -> subscription_track

## proof_used
- knowledge/business-overview.md (plain capability statement - no approved subscription_track case study exists yet)

## email_1
subject: apero's billing claims
body: |
  Hey Nick,

  Up to an 80% reduction in billing time and under a day to implement are strong numbers to put in front of practice administrators, and you're already on Webflow, so the fix isn't a rebuild.

  A flat monthly plan keeps the site moving at the same pace those claims need to stay credible, without pulling anyone off the product.

  Worth connecting on this?

  Ethan

## email_2
subject: who owns the site day to day
body: |
  Hey Nick,

  Healthcare software teams rarely have someone dedicated to the marketing site, it's usually whoever has an hour between sprints.

  A monthly plan puts a real team on it instead, so new claims and pages ship as fast as the product does.

  Want to grab 15 minutes?

  Ethan

## email_3
subject: last one, apero
body: |
  Hey Nick,

  Last note from me on this one.

  If the site's already keeping pace with those claims, no need to reply.

  If it's falling behind, happy to talk whenever works this week.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-29
notes:
- "up to an 80% reduction in billing time" / "under a day to implement" -> re-fetched https://aperohealth.com 2026-10-29, homepage states "Reduced billing time of up to 80%" and "Implementation in under one day"; fixed an earlier draft's wording that dropped the "up to" qualifier
- These are Apero's own self-reported claims about their product, cited as such, not asserted as independently verified
- subscription_track pitch (monthly plan, not rebuild) -> matches recorded webflow platform; no case study borrowed (none approved for subscription yet)
- scripts/voice_check.py: clean
- word counts: 66 / 49 / 34 - all within band
- sign-off: plain "Ethan", one CTA per email, no booking link
- CTA phrasing checked against rest of batch for repetition
