---
contact_name: Dave Van Camp
contact_title: Executive Pastor
organization: Heritage Baptist Church
icp: churches
apollo_contact_id: 54a4e29374686938ac06536b
score_total: 75
tier: hot
research_arm: deep
status: ready
drafted_at: 2026-11-04
---

## research
- "Sermon Outlines" links off-site to a third-party gamma.site page instead of a page on hbclynchburg.com (source: lead-scoring score_notes, WebFetch of hbclynchburg.com, 2026-11-04)
- A stray "9" link, likely a broken icon, appears on each of three Adult Ministries cards (source: same WebFetch)
- "Connect" in the nav dead-ends back to the homepage instead of a Connect page (source: same WebFetch)
- Single campus (Lynchburg, VA), 2 Sun services (9am/10:30am) plus Wed 6:45pm (source: same WebFetch)
- Confirmed on WordPress -> new_build_track (source: scripts/platform_detect.py via lead-scoring)
- research_arm: deep, score_notes already had sufficient current facts; no new search run this pass.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search sessions +29.5% with zero paid spend)

## email_1
subject: sermon outlines, off-site
body: |
  Hey Dave,

  Heritage's "Sermon Outlines" link sends people off your own site to a third-party gamma.site page instead of a page on hbclynchburg.com.

  Same story with the "Connect" nav item, which just loops back to the homepage.

  We moved Landmark Church onto a connected Webflow CMS and grew their organic search sessions 29.5%, zero paid spend, so everything lives in one place their own team controls.

  Worth 15 minutes to talk through what that could look like for Heritage?

  God Bless,
  Ethan

## email_2
subject: the stray "9"
body: |
  Hey Dave,

  Each of Heritage's three Adult Ministries cards shows a stray "9" where an icon should be, the same broken element repeated three times.

  A dedicated team catches small breaks like that as they show up, not whenever someone happens to notice.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Dave
body: |
  Hey Dave,

  If the off-site link and the broken icons are already on someone's list, no worries at all.

  If not, happy to talk through what a dedicated team on Heritage's site would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-04
notes:
- Off-site gamma.site Sermon Outlines link, "Connect" nav looping to homepage, stray "9" icon on 3 Adult Ministries cards -> verified against the same-session WebFetch of hbclynchburg.com (2026-11-04, lead-scoring pass), not re-fetched a second time since minutes old in this same run
- Single campus, 2 Sun + Wed services -> same WebFetch, confirmed
- WordPress -> new_build_track -> scripts/platform_detect.py output via lead-scoring, confirmed
- Landmark Church proof matches knowledge/case-studies/landmark-church.md quotable line verbatim; status approved, track new_build matches, icp_fit churches matches
- scripts/voice_check.py: clean
- Word counts: email_1 82, email_2 52, email_3 42 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (off-site link+dead nav / broken icon / closer), escalating brevity, proof used once only (email_1)
