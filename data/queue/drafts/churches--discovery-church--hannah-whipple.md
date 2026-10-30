---
contact_name: Hannah Whipple
contact_title: Communications Director
organization: Discovery Church
icp: churches
apollo_contact_id: 57d8ccc5a6da9872729776fc
score_total: 82
tier: hot
research_arm: light
status: hot_approved
drafted_at: 2026-10-30
---

## research
- 3 campuses (Sand Lake, Alafaya, Winter Garden), 9 total weekly services (8:30/10/11:45), with Spanish translation at 11:45 at two of the three campuses (source: discoverychurch.org homepage/campus pages, per score_notes)
- Alafaya campus page explicitly states "Campus Under Construction," with the congregation meeting at an alternate venue in the meantime, part of a named 2-year "LET'S GO"/"INCREASE" growth initiative (source: discoverychurch.org homepage/campus pages, per score_notes; not precisely dated)
- org_data estimated_num_employees: 160 (source: Apollo org_data, per score_notes)
- Confirmed churchcenter_embed technographic signal (source: platform_detect.py / lead-scoring check, per score_notes)
- Site platform: WordPress -> new_build_track (source: scripts/platform_detect.py, per lead brief)

## proof_used
- knowledge/case-studies/landmark-church.md (mobile sessions +67.0%, active users +31.3%, total sessions +39.6% - multi-campus church, status: approved, track: new_build matches this lead's new_build_track)

## email_1
subject: campus under construction
body: |
  Hey Hannah,

  Alafaya's campus page says it's under construction, with your team meeting at an alternate venue, as part of your two-year LET'S GO growth initiative.

  Three campuses and nine services a week is already a lot for one site to represent clearly, especially mid-build.

  We rebuilt Landmark Church's site around a connected CMS during a similar multi-campus stretch, growing mobile sessions 67%, from 60.7% to 73.5% of their traffic.

  Up for a quick call about Discovery?

  God Bless,
  Ethan

## email_2
subject: building while you build
body: |
  Hey Hannah,

  Nine services across Sand Lake, Alafaya, and Winter Garden, with Spanish translation at two campuses, is a lot for one website to carry clearly.

  During a growth push, the site should make it easy to find the right service and campus, not blend in.

  For Landmark Church, we built one connected site around their Planning Center data and grew active users 31.3% and total sessions 39.6% in 90 days.

  Worth 15 minutes for Discovery?

  God Bless,
  Ethan

## email_3
subject: no pressure from here
body: |
  Hey Hannah,

  I'll leave this one short. A campus rebuild plus a two-year growth push is plenty without an email thread on top of it.

  If the website's not a priority right now, no worries at all. If it is, happy to show you what we did for Landmark Church on a quick call.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "3 campuses (Sand Lake, Alafaya, Winter Garden), 9 total weekly services (8:30/10/11:45)" -> re-verified via WebFetch https://discoverychurch.org 2026-10-30: all 3 campuses confirmed, each lists Sunday services at 8:30/10/11:45 = 9 total/week
- "Alafaya campus page explicitly states 'Campus Under Construction'... meeting at an alternate venue" -> re-verified via WebFetch https://discoverychurch.org 2026-10-30: page reads "Campus Under Construction... We're creating room for increase as we gather in community," with services held at the Sand Lake Event Center and community gatherings around Alafaya in the meantime. Current as of today's fetch, not a stale/dated claim.
- "two-year LET'S GO growth initiative" / "INCREASE" -> re-verified via WebFetch: page reads "WE are on a two-year journey of faith-filled obedience in response to God's call for INCREASE at Discovery Church" - matches score_notes, not overstated (draft does not claim a specific elapsed duration, only that it's a two-year initiative, since exact timing isn't dated)
- "Spanish translation at two campuses" -> re-verified via WebFetch: confirmed Sand Lake and Winter Garden offer 11:45 Spanish translation, Alafaya listing does not - draft deliberately doesn't name which two campuses (not sourced to a specific pair in score_notes), so no overclaim
- "mobile sessions 67%, from 60.7% to 73.5% of their traffic" -> matches knowledge/case-studies/landmark-church.md verbatim ("Mobile sessions +67.0%, growing from 60.7% to 73.5% of all traffic")
- "active users 31.3% and total sessions 39.6% in 90 days" -> matches knowledge/case-studies/landmark-church.md verbatim ("Active users +31.3%... sessions +39.6%... 90 days post-launch vs. 90 days pre-launch"), status: approved, icp_fit: churches, track: new_build (matches this lead's new_build_track) - no numbers invented or rounded beyond the source
- no PageSpeed or comparative-benchmark claims made (research_arm: light, Step 2 of PageSpeed correctly skipped - none of the three emails cite a load time or score)
- Employee count (160) cited only in the research block, not used as an email claim
- voice_check.py scripts/voice_check.py data/queue/drafts/churches--discovery-church--hannah-whipple.md -> clean (no banned words/phrases/openers, no em dashes)
- word counts: email_1 80w, email_2 79w, email_3 57w - all within band (e1 50-85, e2 40-80, e3 30-60)
- track/proof consistency: new_build_track lead, proof pulled from a track: new_build case study - consistent, no subscription-track borrowing
- cohesion: checked subjects/CTAs/proof stats against the other church drafts in data/queue/drafts/ (cornerstone, countryside, covenant, northshore, opendoor, southeast, southside, ten-mile, refinery, tomoka, world-harvest) - this draft's two stats (mobile sessions +67%, active users +31.3%/sessions +39.6%) are not reused by any other draft in the batch (most others lean on the +29.5% organic-search line or the ~70% platform-cost line), and all three subjects ("campus under construction", "building while you build", "no pressure from here") are unique against that list
- first line of email_1 references the Alafaya construction notice specifically - not sendable to any other org
- no repeated proof point across this lead's own 3 emails; escalating brevity (80w -> 79w -> 57w) holds
