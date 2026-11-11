---
contact_name: Kari Wilson
contact_title: Director of Communications
organization: Two Cities Church
icp: churches
apollo_contact_id: 648a37c19f7e1600012ca225
score_total: 70
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-11
pushed_at: 2026-11-11
pushed_via_mailbox: ehoover@integratedchurchwebsites.com
apollo_contact_id_pushed: 6af46e77edab73000e4ccbc6
---

## research
- Two Cities Church planted 2016 out of The Summit Church, founding pastor Kyle Mercer,
  attendance around 3,500 (source: https://reachrightstudios.com/church-influence-100/two-cities-church/,
  Church Influence 100 2026 profile, found during lead-scoring 2026-11-11)
- Confirmed twocitieschurch.net churchcenter.com subdomain = Planning Center (source:
  church_crawler, lead-scoring 2026-11-11)
- Homepage check (WebFetch https://twocitieschurch.net, 2026-11-11): the public site runs
  its own /give, /events, /groups and /dna-groups pages; no link anywhere to a
  churchcenter.com or planningcenter.com page was found, so the Planning Center setup the
  crawler found is not surfaced on the public site at all
- PageSpeed mobile (scripts/pagespeed_check.py --url https://twocitieschurch.net --strategy
  mobile, run 2026-11-11): performance 17/100, largest contentful paint 30.5s - cited as a
  raw fact about their own site only, no comparative claim made
- Platform detected as wordpress -> new_build_track (source: scripts/platform_detect.py
  --url https://twocitieschurch.net --icp churches, lead-scoring 2026-11-11)
- research_arm: deep per EXP-001 - fresh PageSpeed check run for drafting (2026-11-11);
  trigger-signal search already done during scoring found nothing current, not re-run.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track; Planning Center integration,
  organic search growth)

## email_1
subject: two cities, planning center
body: |
  Hey Kari,

  Two Cities has grown from a church plant into around 3,500 people on Sundays. The public
  site runs its own give, events, and groups pages instead of pulling from the Planning
  Center setup you already have live.

  It also loads in about 30 seconds on mobile, which is where most of your people open it.

  We build church sites that connect straight to Planning Center. For Landmark Church, a
  similar migration grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: growing past the diy stack
body: |
  Hey Kari,

  Growing from a plant to about 3,500 people in less than a decade is rare. Most churches
  that size still make people juggle separate apps for giving, groups, and service times.

  We build sites that bring all of that under Planning Center into one place, mobile-first,
  fast.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, two cities
body: |
  Hey Kari,

  Last one from me.

  If the mobile experience is keeping up with 3,500 people on Sundays, no worries at all.

  If it is not, happy to grab 15 minutes and show you what we would change.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-11
notes:
- "church plant into around 3,500 people" -> matches reachrightstudios.com Church Influence 100 2026 profile, found during lead-scoring.
- "runs its own give, events, and groups pages instead of pulling from Planning Center" -> verified via WebFetch of twocitieschurch.net homepage 2026-11-11: no churchcenter.com/planningcenter.com link found, own /give /events /groups pages confirmed. Planning Center itself confirmed separately via church_crawler's churchcenter subdomain hit.
- "loads in about 30 seconds on mobile" -> matches scripts/pagespeed_check.py run 2026-11-11 (LCP 30.5s, performance 17/100), cited as a raw fact about their own site only.
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Results section; status approved, track new_build matches this lead's track.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~78w, email_2 ~54w, email_3 ~36w - within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing (worth 15 minutes? / open to a quick call? / happy to grab 15 minutes).
- First sentence specific to this church (growth + Planning Center/site gap), not sendable elsewhere. No repeated proof point across the sequence.
