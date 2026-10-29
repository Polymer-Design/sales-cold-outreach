---
contact_name: Pierre-Alexandre Kamienny
contact_title: Co-founder & CEO
organization: Kinro (YC P26)
icp: startups
apollo_person_id: 5e6b31ed8cab710001ce3c1f
score_total: 62
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-10-29
pushed_at: 2026-10-29T13:41:06Z
mailbox: ethan@growwithpolymer.com
apollo_contact_id: 6ae34cf064eed3001447be38
---

## research
- Kinro is an online business insurance marketplace for US small businesses (HVAC, lawn care, trucking, restaurants, security guards) comparing 50+ carriers via licensed agents and an AI assistant called InsuranceGPT (source: WebFetch https://kinro.com, 2026-10-29)
- Homepage leans on trust badges: a 5.0 Google rating, SOC 2 Type II, BBB Accreditation, and a "~2 min" typical agent response time (source: WebFetch https://kinro.com, 2026-10-29)
- Mobile PageSpeed: performance 76/100, LCP 4.9s (source: scripts/pagespeed_check.py --url https://kinro.com --strategy mobile, 2026-10-29)
- org_data (Apollo enrichment): 6 employees, founded 2026, +900% 12mo headcount growth
- Platform: unknown (scripts/platform_detect.py) -> new_build_track

## proof_used
- knowledge/business-overview.md (plain capability statement - no case study fits an SMB insurance marketplace)

## email_1
subject: kinro's mobile load time
body: |
  Hey Pierre-Alexandre,

  Kinro leans hard on trust signals, SOC 2, BBB, a 5.0 rating, because small business owners want proof before they hand over company details. Your homepage still takes almost 5 seconds to load on mobile, which is where a lot of contractors and truckers are checking quotes between jobs.

  A fixed-price build fixes that without slowing down the actual product.

  Want to grab 15 minutes?

  Ethan

## email_2
subject: selling trust to non-saas buyers
body: |
  Hey Pierre-Alexandre,

  HVAC techs, truckers, and restaurant owners aren't the typical YC buyer, so the site has to earn trust faster than a usual SaaS landing page would.

  A fixed-price build is scoped once and ships without touching the product roadmap.

  Make sense to connect?

  Ethan

## email_3
subject: last one, kinro
body: |
  Hey Pierre-Alexandre,

  Last note from me on this one.

  If the site's already converting that contractor and small-business audience well, no need to reply.

  If it's not quite there, happy to talk whenever works this week.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-29
notes:
- "trust signals, SOC 2, BBB, a 5.0 rating" -> re-fetched https://kinro.com 2026-10-29, homepage confirms 5.0 Google rating, SOC 2 Type II badge, BBB Accreditation
- "almost 5 seconds to load on mobile" -> re-ran scripts/pagespeed_check.py --url https://kinro.com --strategy mobile 2026-10-29, LCP 4.9s; cited as a raw fact about their own site, no comparison to Polymer's benchmark
- new_build_track (platform unknown) -> plain capability statement, no case study borrowed
- scripts/voice_check.py: clean
- word counts: 68 / 46 / 37 - all within band
- sign-off: plain "Ethan", one CTA per email, no booking link
- CTA phrasing checked against rest of batch for repetition
