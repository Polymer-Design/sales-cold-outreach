---
contact_name: Mariano Sorgente
contact_title: Founder and CEO
organization: ISSEN (YC F24)
icp: startups
apollo_person_id: 68182d52bdec050001f0187a
score_total: 56
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-10-29
pushed_at: 2026-10-29T13:41:04Z
mailbox: ehoover@growwithpolymer.com
apollo_contact_id: 6ae34cec7a27e0000cb60829
---

## research
- Homepage currently shows only the name "ISSEN" and the tagline "Your personal AI language tutor," with no other product description or features (source: WebFetch https://issen.com, 2026-10-29)
- Mobile PageSpeed: performance 79/100, LCP 4.7s (source: scripts/pagespeed_check.py --url https://issen.com --strategy mobile, 2026-10-29)
- org_data (Apollo enrichment): 5 employees, +200% 12mo headcount growth
- Platform: unknown (scripts/platform_detect.py) -> new_build_track

## proof_used
- knowledge/business-overview.md (plain capability statement)

## email_1
subject: issen's one-line homepage
body: |
  Hey Mariano,

  Right now Issen's homepage is a single tagline, your personal AI language tutor, with nothing else to show a new visitor what that actually looks like day to day.

  A fixed-price build gets you a site that actually shows the product, scoped once and shipped without touching your roadmap.

  Want to hop on a call?

  Ethan

## email_2
subject: growth outpacing the site
body: |
  Hey Mariano,

  A team growing the way Issen has over the past year usually outpaces whatever got shipped in the first few months, the site included.

  A fixed-price build is scoped once and ships without pulling anyone off the product.

  Open to a quick call this week?

  Ethan

## email_3
subject: last one, issen
body: |
  Hey Mariano,

  Last note from me on this one.

  If the site's already showing the product the way you want, no need to reply.

  If it's not there yet, happy to talk whenever works this week.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-29
notes:
- "homepage is a single tagline, your personal AI language tutor" -> re-fetched https://issen.com 2026-10-29, confirmed the page shows only the name and that exact tagline, no other content
- +200% 12mo headcount growth, 5 employees -> matches org_data
- PageSpeed (79/100, LCP 4.7s) gathered but not cited in copy - the sparse-homepage observation was the stronger, more specific hook
- new_build_track (platform unknown) -> plain capability statement, no case study borrowed
- scripts/voice_check.py: clean
- word counts: 58 / 48 / 37 - all within band
- sign-off: plain "Ethan", one CTA per email, no booking link
- CTA phrasing checked against rest of batch for repetition
