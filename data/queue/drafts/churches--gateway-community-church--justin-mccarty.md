---
contact_name: Justin McCarty
contact_title: Executive Pastor of Ministries
organization: Gateway Community Church
icp: churches
apollo_contact_id: 57da224ba6da985b07355033
score_total: 80
tier: hot
research_arm: deep
status: pushed
drafted_at: 2026-11-04
pushed_at: 2026-11-05T13:11:33Z
mailbox: ethan@integratedchurchwebsites.com
apollo_contact_id_resolved: 6aec8067ebed3d00184cb99e
---

## research
- Two nav links, "Kids & Students" and "Watch," both point to "#" and go nowhere (source: lead-scoring score_notes, WebFetch of gatewaychurch.com, 2026-11-04)
- The "Join a Group / Browse Groups" call-to-action block appears twice in a row, and the "Recent Comments" sidebar heading has no content beneath it (source: same WebFetch)
- 3 physical campuses (North Austin, South Austin, Buda) plus Online (source: same WebFetch)
- Confirmed on WordPress -> new_build_track (source: scripts/platform_detect.py via lead-scoring)
- research_arm: deep, score_notes already had sufficient current facts; no new search run this pass.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search sessions +29.5% with zero paid spend)

## email_1
subject: two dead links on gateway
body: |
  Hey Justin,

  Gateway's "Kids & Students" and "Watch" nav links both point to "#" and go nowhere.

  Those are two of the first things a visitor clicks, and across three campuses sending people to one site, that's a rough first impression.

  We moved Landmark Church onto a connected Webflow CMS and grew their organic search sessions 29.5%, zero paid spend.

  Worth 15 minutes to talk through what that could look like for Gateway?

  God Bless,
  Ethan

## email_2
subject: the group block, twice
body: |
  Hey Justin,

  Gateway's "Join a Group / Browse Groups" block shows up twice in a row on the homepage, and the "Recent Comments" section below it is empty.

  Small things, but across three campuses, a dedicated team catches them before a visitor does instead of after.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Justin
body: |
  Hey Justin,

  If the dead links and duplicate block are already on someone's radar, no worries at all.

  If not, happy to talk through what a dedicated team on Gateway's site would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-04
notes:
- Two "#" dead links (Kids & Students, Watch), duplicated group CTA block, empty Recent Comments section -> verified against the same-session WebFetch of gatewaychurch.com (2026-11-04, lead-scoring pass), not re-fetched a second time since minutes old in this same run
- 3 campuses (North Austin, South Austin, Buda) plus Online -> same WebFetch, confirmed
- WordPress -> new_build_track -> scripts/platform_detect.py output via lead-scoring, confirmed
- Landmark Church proof matches knowledge/case-studies/landmark-church.md quotable line verbatim; status approved, track new_build matches, icp_fit churches matches
- scripts/voice_check.py: clean
- Word counts: email_1 76, email_2 55, email_3 41 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (dead nav links / duplicate block+empty section / closer), escalating brevity, proof used once only (email_1)
