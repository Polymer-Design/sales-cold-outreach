---
contact_name: Jeff Eberhardt
contact_title: Director of Creative Arts
organization: Bridgeway Christian Church
icp: churches
apollo_contact_id: 66b6df41e53c670001843147
score_total: 68
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-03
---

## research
- Service times read "8:00 aM, 9:30 aM" on the homepage (capitalization error); the "Upcoming Events" section shows a "SEE ALL" link with no events listed; "Latest Sermon" shows a teaser with no title or date (source: lead-scoring score_notes, WebFetch of bridgeway.church, 2026-11-03)
- Mobile PageSpeed: performance 62/100, accessibility 84/100, best practices 100/100, SEO 85/100, LCP 17.0s (source: scripts/pagespeed_check.py --url https://bridgeway.church --strategy mobile, 2026-11-03; raw fact about Bridgeway's own site only, not a comparative claim)
- Single campus (Roseville, CA); org_data 69 employees, founded 1996 (source: Apollo org_data, via lead-scoring)
- Confirmed churchcenter_embed (Planning Center) signal; site platform unknown -> new_build_track (source: scripts/platform_detect.py + church_crawler.py, via lead-scoring)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center/Church Center into one real CMS

## email_1
subject: 8:00 aM, 9:30 aM
body: |
  Hey Jeff,

  Bridgeway's service times read "8:00 aM, 9:30 aM" on the homepage, and the Upcoming Events section right below has a "SEE ALL" link with nothing actually listed.

  Those are exactly the kind of details a first-time visitor notices before they ever walk through the door.

  We rebuild church sites so details like that get caught and fixed as part of the job, not after someone points them out.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: the sermon with no name
body: |
  Hey Jeff,

  Bridgeway's "Latest Sermon" section shows a teaser blurb with no title and no date, so a visitor can't tell if it's from this week or three months ago.

  A rebuild keeps that current automatically instead of depending on someone remembering to update it.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Jeff
body: |
  Hey Jeff,

  If the site details are already on someone's radar, no worries at all.

  If not, happy to talk through a rebuild, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Service-time capitalization error, empty Upcoming Events section, undated Latest Sermon teaser -> verified against same-session WebFetch of bridgeway.church (2026-11-03); not re-fetched again
- Mobile PageSpeed 62/84/100/85, LCP 17.0s -> re-run scripts/pagespeed_check.py this pass, confirmed; logged in research but not cited in any email body (kept emails focused on the two clearest directly-observed defects to stay within word limits)
- Polymer facts: Landmark Church case study numbers match knowledge/case-studies/landmark-church.md exactly, track=new_build matches
- scripts/voice_check.py: clean
- Word counts: 76/54/30 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (service-time typo + empty events block / undated sermon teaser / closer), escalating brevity, no repeated proof point
