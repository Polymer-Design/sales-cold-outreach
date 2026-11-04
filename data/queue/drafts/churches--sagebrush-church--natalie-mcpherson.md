---
contact_name: Natalie McPherson
contact_title: Creative Team Director
organization: Sagebrush Church
icp: churches
apollo_contact_id: 57d90f34a6da98724a55bd00
score_total: 75
tier: hot
research_arm: deep
status: hot_approved
drafted_at: 2026-11-04
---

## research
- The "Next Live Service" countdown timer shows only empty day/hr/min/sec labels, no actual values (source: lead-scoring score_notes, WebFetch of sagebrush.church, 2026-11-04)
- "Watch Live Now" heading has no video player or content beneath it (source: same WebFetch)
- No service times are listed anywhere on the homepage (source: same WebFetch)
- Single campus (Albuquerque, NM) (source: same WebFetch)
- Confirmed churchcenter_subdomain, Planning Center signal (source: scripts/church_crawler.py via lead-scoring)
- Platform returned unknown -> new_build_track (source: scripts/platform_detect.py via lead-scoring)
- research_arm: deep, score_notes already had sufficient current facts; no new search run this pass.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search sessions +29.5% with zero paid spend)

## email_1
subject: a countdown with no numbers
body: |
  Hey Natalie,

  Sagebrush's "Next Live Service" countdown shows the labels for days, hours, minutes, seconds, but never any actual numbers.

  "Watch Live Now" sits right below it with no player either, and there's no service time listed anywhere on the page.

  We moved Landmark Church onto a connected Webflow CMS and grew their organic search sessions 29.5%, zero paid spend, so content like that actually shows up.

  Worth 15 minutes to talk through what that could look like for Sagebrush?

  God Bless,
  Ethan

## email_2
subject: first-time visitors and service times
body: |
  Hey Natalie,

  If someone searches Sagebrush looking for when to show up Sunday, the homepage doesn't actually tell them.

  You're already on Planning Center, so this isn't starting from scratch, it's building the site around what you're already running.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Natalie
body: |
  Hey Natalie,

  If the countdown and missing service times are already on someone's list, no worries at all.

  If not, happy to talk through what a dedicated team on Sagebrush's site would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-04
notes:
- Empty countdown timer, content-less "Watch Live Now" section, no service times listed -> verified against the same-session WebFetch of sagebrush.church (2026-11-04, lead-scoring pass), not re-fetched a second time since minutes old in this same run
- Single campus (Albuquerque) -> same WebFetch, confirmed
- Planning Center confirmed via church crawler; platform unknown -> new_build_track per lead-scoring
- Landmark Church proof matches knowledge/case-studies/landmark-church.md quotable line verbatim; status approved, track new_build matches, icp_fit churches matches
- scripts/voice_check.py: clean
- Word counts: email_1 83, email_2 48, email_3 41 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (empty countdown+no times / Planning Center integration angle / closer), escalating brevity, proof used once only (email_1)
