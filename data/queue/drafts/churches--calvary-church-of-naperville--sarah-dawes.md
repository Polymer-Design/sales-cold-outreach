---
contact_name: Sarah Dawes
contact_title: Communications Director
organization: Calvary Church of Naperville
icp: churches
apollo_contact_id: 54a4a91674686932090ad958
score_total: 68
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-17
---

## research
- Seven Sunday services across 5 ministries: English x2, Calvary Español x2, Calvary Indian, Calvary Deaf (ASL), Liturgical (source: calvarynaperville.org homepage, WebFetch 2026-11-17, per score_notes)
- Confirmed churchcenter.com subdomain, flagship Planning Center signal (source: church_crawler, per score_notes)
- org_data: 350 employees, founded 1967 (source: Apollo org_data, per score_notes)
- Site platform: unknown -> new_build_track (source: scripts/platform_detect.py, per score_notes)

## proof_used
- knowledge/case-studies/landmark-church.md (church new_build, Planning Center-connected Webflow migration, organic growth numbers)

## email_1
subject: seven services, one page
body: |
  Hey Sarah,

  Seven services across English, Spanish, Indian, Deaf, and Liturgical ministries is a lot for a first-time visitor to sort out from a service-times page.

  We moved a church off a template site onto a connected Webflow CMS pulling straight from Planning Center: services, groups, campus info, all of it. Organic search grew 29.5% with zero paid spend.

  Worth 15 minutes to see what that'd look like for Calvary?

  God Bless,
  Ethan

## email_2
subject: five ministries, one site
body: |
  Hey Sarah,

  Following up. A church running five distinct ministries under one roof needs a site that makes each one easy to find, not just the main service.

  We build sites like that fixed price, starting at $6,500, live in about 4 weeks.

  Worth a quick call on it?

  God Bless,
  Ethan

## email_3
subject: short note from me
body: |
  Hey Sarah,

  Short note. If the site's handling all five ministries fine as is, no worries at all.

  If people are getting lost finding the right service, happy to show you the Planning Center-connected build we did for another church.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-17
notes:
- "seven services across English, Spanish, Indian, Deaf, Liturgical" -> matches research block (WebFetch 2026-11-17 during scoring), light arm reuses this, no new search
- "29.5%... zero paid spend" -> matches knowledge/case-studies/landmark-church.md exactly
- Pricing "$6,500... live in about 4 weeks" -> matches knowledge/business-overview.md Core tier exactly; single campus (not multi-campus) so Core, not Custom, is the right tier here
- Track: new_build_track, proof tagged track: new_build - consistent
- voice_check.py: clean
- Word counts: email_1 73w, email_2 52w, email_3 43w - within band
- Sign-off "God Bless," + "Ethan" - correct for churches
- Cohesion: first sentence (named services/ministries) sendable to no other org; different angle per email; escalating brevity (73->52->43); checked against Silverdale draft in this same batch - different case-study framing (campus/multi-site vs. multi-ministry), no shared sentence
