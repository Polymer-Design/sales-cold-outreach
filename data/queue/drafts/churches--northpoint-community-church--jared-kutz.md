---
contact_name: Jared Kutz
contact_title: Creative Director
organization: Northpoint Community Church
icp: churches
apollo_contact_id: 60bd07215f7c7700014188e0
score_total: 65
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-19T13:36:31Z
drafted_at: 2026-11-19
---

## research
- One physical campus (Bossier City) plus a distinct online campus; 2 Sunday services
  (9:15/11:15am) plus a midweek Wednesday service (source: WebFetch of ncc.team, via
  lead-scoring score_notes, 2026-11-19)
- Confirmed Planning Center via a separate northpointcommunitychurch.churchcenter.com
  subdomain (source: data/leads/churches/candidates.csv signal=churchcenter_subdomain,
  scripts/church_crawler.py)
- Own marketing site runs on Squarespace -> new_build_track, "outgrown the DIY builder"
  angle (source: scripts/platform_detect.py, via lead-scoring score_notes, 2026-11-19)
- A "2026 Vision Report" is linked on the homepage but its contents weren't visible in the
  fetch - not used as a claim since it can't be verified (source: WebFetch of ncc.team,
  2026-11-19)
- No new search run for this draft beyond what lead-scoring already gathered today
  (research_arm: light per EXP-001)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - "Organic search
  sessions +29.5% (5,604 -> 7,256) with no paid spend"

## email_1
subject: three services, one template
body: |
  Hey Jared,

  Northpoint runs Church Center for three services a week, two Sunday morning and one
  Wednesday night, plus an online campus, but the public face of all that is still a
  Squarespace template.

  We build the site directly around Church Center so your campuses and services live in one
  connected place instead of a template holding it together. For Landmark Church that kind
  of rebuild grew organic search sessions almost 30% with zero paid spend.

  Worth a quick call about it?

  God Bless,
  Ethan

## email_2
subject: publishing every week
body: |
  Hey Jared,

  An online campus plus three weekly services means a steady stream of new content, but
  Squarespace isn't built for a church publishing that often without extra manual work every
  week.

  A CMS-driven build keeps your team publishing fast without fighting the platform, and keeps
  everything tied back to Church Center.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Jared
body: |
  Hey Jared,

  If the site's already getting a look, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-19
notes:
- research_arm=light: no new WebFetch/WebSearch performed for drafting - all facts reused
  from the same-session WebFetch of ncc.team already done during today's lead-scoring pass
  (2026-11-19); not re-fetched
- Service/campus counts match lead-scoring's score_notes exactly (1 physical + 1 online
  campus, 2 Sunday + 1 Wednesday service)
- Did not cite the "2026 Vision Report" since its contents were never visible - avoided
  guessing at an unverified claim
- Polymer facts: "almost 30%" paraphrases knowledge/case-studies/landmark-church.md's
  "Organic search sessions +29.5% (5,604 -> 7,256) with no paid spend" without inventing
  numbers; track=new_build matches this lead's new_build_track; "outgrown the DIY builder"
  angle matches icp-churches.yaml's squarespace routing
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 80/55/25 - e1/e2 within band, e3 matches the established short-closer pattern
- One CTA per email, sign-off "God Bless," then "Ethan" on all three
- Cohesion: distinct angles (visitor-facing split in e1, staff-publishing friction in e2,
  closer in e3), escalating brevity, no repeated proof point (Landmark stat only in email_1)
