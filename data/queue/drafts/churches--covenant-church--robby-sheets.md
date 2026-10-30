---
contact_name: Robby Sheets
contact_title: Creative Director
organization: Covenant Church
icp: churches
apollo_contact_id: 54ec1a1674686943115c3750
score_total: 83
tier: hot
research_arm: light
status: ready
drafted_at: 2026-10-30
---

## research
- Two campuses (McKinney TX North, Carrollton TX South), 6 weekly services (4 Sunday + 2 Wednesday) plus livestream (source: lead-scoring score_notes, covenantchurch.org)
- Homepage currently shows live lorem-ipsum placeholder text under the "Est. 1976" heading (sits directly below the second "Meet the Team" block); the "Meet the Team" block itself is duplicated with slightly different copy between the two versions ("engaging, discipling" vs. "engaging, disciplining"); the "Next Steps" block is duplicated outright (identical copy both times) - directly observed and re-verified by fetching https://covenantchurch.org during fact-check (2026-10-30)
- Confirmed churchcenter_embed signal per lead-scoring/church_crawler.py; re-verified by fetch: the site links out to Church Center for Events (covlive.churchcenter.com) rather than embedding it natively on the page - livestream instead routes through a separate qrcodes.pro link, not Church Center (source: lead-scoring score_notes; re-fetch of https://covenantchurch.org, 2026-10-30)
- Site platform: WordPress -> new_build_track (source: lead-scoring score_notes / platform_detect.py output)
- org_data (Apollo enrichment): estimated_num_employees 350, top of the size band - a large, established congregation consistent with the 50-year milestone

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center/Church Center into one real CMS. Cited as Polymer's own outcome, not framed as "migrating Covenant off Subsplash" since Covenant's platform is WordPress, not Subsplash.

## email_1
subject: the Est. 1976 section
body: |
  Hey Robby,

  Covenant's homepage still runs placeholder lorem ipsum text under the Est. 1976 heading, and the Meet the Team and Next Steps sections both show up twice.

  That's a rough front door for two campuses heading into a 50-year milestone, with Events still routing off-site to Church Center instead of living on the page.

  We rebuilt a multi-campus church's site into one connected CMS around Church Center and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: two campuses, one site
body: |
  Hey Robby,

  Six services a week across McKinney and Carrollton is a lot of people getting routed off the Covenant site to a separate Church Center link just to see Events, on a WordPress page that's currently showing duplicated, unfinished sections.

  We'd build the site around Church Center directly instead of linking out to it, so both campuses point to one clean hub.

  Make sense to connect this week?

  God Bless,
  Ethan

## email_3
subject: one last note
body: |
  Hey Robby,

  I'll keep this short, no hard feelings if the site's not on your plate right now.

  Still, a 50th anniversary year is an odd time for the homepage to have lorem ipsum running live and two sections duplicated. If that's worth ten minutes before the anniversary push, I'm around this week.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "lorem ipsum under Est. 1976 heading" -> re-verified live via WebFetch of https://covenantchurch.org (2026-10-30): confirmed, filler text present directly below the second "Meet the Team" block
- original score_notes/first draft said Meet the Team AND Next Steps both had "differing copy" - re-fetch found Meet the Team differs by one word ("discipling" vs "disciplining") but Next Steps is an exact duplicate (identical copy) - draft corrected to say both sections "show up twice" without asserting differing copy for Next Steps specifically, so no claim outruns the evidence
- "churchcenter_embed" signal -> re-fetch found the site links out to covlive.churchcenter.com for Events rather than an embedded widget; draft corrected from "embedded"/"wired in" language (first draft) to "routes off-site to Church Center" / "linking out to it", which matches what was actually observed and is consistent with church_crawler.py's own embed-vs-subdomain distinction (scripts/church_crawler.py lines 93-101)
- "two campuses, McKinney TX North / Carrollton TX South" and "6 weekly services (4 Sun + 2 Wed)" -> re-verified: North Campus McKinney TX, South Campus Carrollton TX, Sunday 9:00/11:30 AM both campuses (4 total), Wednesday 7:00 PM both campuses (2 total) = 6, matches score_notes exactly
- "organic search sessions +29.5% with zero paid spend" -> matches knowledge/case-studies/landmark-church.md exactly (status: approved); track check: landmark-church.md track: new_build matches this lead's new_build_track, no subscription/new-build mismatch; no numbers altered
- no PageSpeed, pricing, or other knowledge/ claims made; nothing PENDING cited
- scripts/voice_check.py: clean (no banned words/clichés/openers, no em dashes)
- word counts: email_1 84w, email_2 72w, email_3 56w - all within band (50-85 / 40-80 / 30-60)
- one CTA per email, rotated phrasing ("Worth 15 minutes?" / "Make sense to connect this week?" / soft close), correct churches sign-off ("God Bless," then "Ethan") on all three
- cohesion: proof point used once (email_1 only), escalating brevity (84/72/56), no contradictions
- template-fingerprint check against other committed drafts in data/queue/drafts/: first-pass email_3 reused "If the site's not a priority this year, no worries" near-verbatim, which already appears in churches--ten-mile-christian-church--stephen-durr.md and churches--crossroads-christian-church--darla-turpin.md - rewrote email_3 with new phrasing ("no hard feelings if the site's not on your plate right now... if that's worth ten minutes before the anniversary push"); subject lines checked against all committed churches--*.md drafts, no duplicates
- net: one rewrite cycle during this fact-check pass (research-claim precision + de-templating email_3), both issues fixed in place, re-verified clean on this pass
