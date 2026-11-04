---
contact_name: Bobby Sasser
contact_title: Executive Pastor
organization: Radiant Church
icp: churches
apollo_contact_id: 6167feff60da320001e47aab
score_total: 81
tier: hot
research_arm: deep
status: ready
drafted_at: 2026-11-04
---

## research
- "Learn More" link under the pastor section points to a non-public weareradiant.local address, unreachable by any outside visitor (source: lead-scoring score_notes, WebFetch of weareradiant.com, 2026-11-04)
- Two empty homepage sections, "WHAT'S COMING!" and "WHAT'S HAPPENING!", with no content beneath either heading (source: same WebFetch)
- A Hurricane Milton service-closure banner from 2024 is still displayed on the homepage (source: same WebFetch)
- 13 physical campuses (Brandon, Clearwater, Heights, Hillsborough, New Tampa, Odessa, Southshore, South Tampa, Spring Hill, East St. Pete, West St. Pete, Trinity, Westchase) plus an online option (source: same WebFetch)
- Confirmed on WordPress -> new_build_track (source: scripts/platform_detect.py via lead-scoring)
- research_arm: deep, but score_notes already had sufficient current facts; no new search run this pass (nothing in score_notes required re-verification beyond what scoring already confirmed same-session).

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search sessions +29.5% with zero paid spend)

## email_1
subject: the .local link
body: |
  Hey Bobby,

  Radiant's "Learn More" link under the pastor section points to weareradiant.local, an address nobody outside your network can reach.

  Easy to miss internally, but across 13 campuses pointing back to one site, small breaks like that add up.

  We moved Landmark Church off Subsplash onto a connected Webflow CMS and grew their organic search sessions 29.5%, zero paid spend.

  Worth 15 minutes to talk through what that could look like for Radiant?

  God Bless,
  Ethan

## email_2
subject: still up from 2024
body: |
  Hey Bobby,

  Radiant's homepage still shows a Hurricane Milton service-closure banner from 2024, and the "What's Coming" and "What's Happening" sections below it sit empty.

  For a church running 13 locations off one site, that's a lot of real estate doing nothing.

  A dedicated team keeps those sections current and catches an old banner like that before a visitor does.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Bobby
body: |
  Hey Bobby,

  If the broken link and the old banner are already on someone's list, no worries at all.

  If not, happy to talk through what a dedicated team on Radiant's site would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-04
notes:
- weareradiant.local broken "Learn More" link, two empty sections ("WHAT'S COMING!"/"WHAT'S HAPPENING!"), and the stale 2024 Hurricane Milton banner -> verified against the same-session WebFetch of weareradiant.com (2026-11-04, lead-scoring pass), not re-fetched a second time since the fetch is minutes old in this same run
- 13 named campuses plus online -> same WebFetch, confirmed
- WordPress -> new_build_track -> scripts/platform_detect.py output via lead-scoring, confirmed
- Landmark Church proof: "moved off Subsplash onto a connected Webflow CMS and grew organic search sessions 29.5%, zero paid spend" -> matches knowledge/case-studies/landmark-church.md's quotable line and Results section verbatim; case study status: approved, track: new_build matches this lead's track, icp_fit: churches matches
- scripts/voice_check.py: clean
- Word counts: email_1 77, email_2 69, email_3 42 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (broken .local link / stale banner+empty sections / closer), escalating brevity (77/69/42), proof point used once only (email_1)
