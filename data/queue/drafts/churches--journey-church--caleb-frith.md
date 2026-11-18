---
contact_name: Caleb Frith
contact_title: Creative Director
organization: Journey Church
icp: churches
apollo_contact_id: 5d4690abf651252433965d8f
score_total: 66
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-18T13:33:09Z
drafted_at: 2026-11-18
---

## research
- Confirmed gojourneychurch.churchcenter.com subdomain (Planning Center in use) via
  church_crawler (source: church_crawler candidates.csv signal "churchcenter_subdomain",
  found_at 2026-10-29)
- org_data: 58 estimated employees, $25.5M revenue, founded 2003, flat growth (source: Apollo
  org_data, via lead-scoring score_notes, 2026-11-10)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)
- research_arm: light - no new search run; built only from score_notes + free Apollo/
  church_crawler fields per EXP-001

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search
  sessions +29.5% and sermon-notes traffic 59 -> 2,799 sessions, from connecting Planning
  Center/Church Center into one real site

## email_1
subject: gojourneychurch.churchcenter.com
body: |
  Hey Caleb,

  Confirmed Journey Church runs Planning Center at gojourneychurch.churchcenter.com. At 58
  staff and a $25.5M budget, that's real scale, usually more than what the public website is
  actually built to use.

  We build church sites around Church Center directly: events, groups, giving pulled straight
  in, instead of living in a separate app people hunt for. For one church, that move took
  sermon notes traffic from 59 sessions to 2,799.

  Worth 15 minutes to see if that fits Journey?

  God Bless,
  Ethan

## email_2
subject: the separate-app problem
body: |
  Hey Caleb,

  Most churches running Planning Center still send people to a separate app or page for
  events, groups, and giving, because the main site was never built around it.

  A rebuild closes that gap: one site, Church Center wired in directly, nothing to hunt for.

  Up for a quick call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Caleb
body: |
  Hey Caleb,

  If Journey's site already ties into Church Center well, no worries at all.

  If not, happy to talk through what that'd look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- gojourneychurch.churchcenter.com slug, 58 staff, $25.5M revenue -> verified against
  lead-scoring's score_notes/church_crawler signal and Apollo org_data (already-available
  data, no new fetch since research_arm is light)
- Polymer facts: Landmark Church numbers (59 -> 2,799 sermon-notes sessions) match
  knowledge/case-studies/landmark-church.md exactly; not attributed to a named client, kept
  generic ("one church") since the case study doesn't explicitly confirm multi-site status;
  track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 82/54/32 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (Planning Center scale mismatch, the separate-app problem,
  closer), escalating brevity, no repeated proof point (case study number only in email_1)
