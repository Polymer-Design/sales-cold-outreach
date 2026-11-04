---
contact_name: Kelsey Glein
contact_title: Director of Communications
organization: Timberlake Church
icp: churches
apollo_contact_id: 5c5d3345a3ae61923634cef8
score_total: 61
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-04
pushed_at: 2026-11-04T13:30:00Z
mailbox: ehoover@integratedchurchwebsites.com
apollo_contact_id_resolved: 6aeb34285723d700182bb2a0
---

## research
- Several links, including social icons and the "Get Involved" section, carry stray zero-width characters that leave them with no visible text (source: lead-scoring score_notes, WebFetch of timberlakechurch.com, 2026-11-04)
- Section headings are followed by leftover template-label fragments like "connect" and "locations" (source: same score_notes)
- 3 physical campuses (Redmond, Duvall, Castle Rock) plus online streaming (source: same score_notes)
- Confirmed on Webflow -> subscription_track (source: scripts/platform_detect.py via lead-scoring)
- research_arm: deep, score_notes already had sufficient current facts; no new search run this pass.

## proof_used
- knowledge/business-overview.md (Webflow -> monthly plan; churches lead with Care or Grow; plain capability statement, no approved subscription_track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: links with no words on them
body: |
  Hey Kelsey,

  A few links on Timberlake's site, including the social icons and "Get Involved," show up with no visible text at all.

  Across three campuses pointing people to one site, that's an easy miss that still costs you clicks.

  You're already on Webflow, so this isn't a rebuild, it's a dedicated team catching things like that as they show up.

  Worth 15 minutes to talk through how we could help?

  God Bless,
  Ethan

## email_2
subject: leftover labels in the headings
body: |
  Hey Kelsey,

  A few of Timberlake's section headings are followed by leftover labels like "connect" and "locations" that were never cleaned up.

  A monthly plan keeps one team watching the whole site instead of whoever's free that week.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Kelsey
body: |
  Hey Kelsey,

  If the blank links and stray labels are already on someone's list, no worries at all.

  If not, happy to talk through what a dedicated team on Webflow would look like for Timberlake, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-04
notes:
- Zero-width-character blank links (social icons, "Get Involved"), leftover template-label fragments ("connect", "locations") -> verified against score_notes, sourced to the same-session WebFetch of timberlakechurch.com (2026-11-04, lead-scoring pass), not re-fetched this pass
- 3 campuses plus online -> same score_notes
- Webflow -> subscription_track per lead-scoring; proof is a plain capability statement from knowledge/business-overview.md (no subscription case study exists yet, per knowledge/case-studies/README.md); no rebuild pitched, monthly-plan framing only
- scripts/voice_check.py: clean
- Word counts: email_1 74, email_2 47, email_3 42 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (blank links / leftover labels / closer), escalating brevity, no repeated proof point
