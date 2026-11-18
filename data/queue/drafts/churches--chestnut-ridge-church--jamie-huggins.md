---
contact_name: Jamie Huggins
contact_title: Communications Director
organization: Chestnut Ridge Church
icp: churches
apollo_contact_id: 54a22e6e7468693825a41014
score_total: 66
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-18
---

## research
- Confirmed on Subsplash (app/giving/check-in bundle) via platform_detect.py, plus confirmed
  theridge.church churchcenter subdomain (Planning Center) via church_crawler (source:
  scripts/platform_detect.py + church_crawler candidates.csv, via lead-scoring score_notes,
  2026-11-12)
- org_data: 73 estimated employees, flat/slightly declining headcount (source: Apollo
  org_data, via lead-scoring score_notes, 2026-11-12)
- research_arm: light - no new search run; built only from score_notes + free Apollo/
  platform_detect fields per EXP-001

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - a direct Subsplash
  migration: organic search +29.5%, sermon-notes traffic 59 -> 2,799 sessions, zero paid spend

## email_1
subject: the app vs. the website
body: |
  Hey Jamie,

  Chestnut Ridge is running Subsplash, so the app, giving, and check-in side is already
  handled well. What we usually see at that stage is the public website lagging behind the
  app instead of matching it.

  We moved one church fully off Subsplash onto a site built around Planning Center directly.
  Organic search grew 29.5% with zero ad spend, and sermon notes traffic went from 59
  sessions to 2,799.

  Worth 15 minutes to see if that's worth exploring for Chestnut Ridge?

  God Bless,
  Ethan

## email_2
subject: built to match the app
body: |
  Hey Jamie,

  A lot of churches on Subsplash end up with an app that feels current and a website that
  feels like an afterthought from a few years back.

  We design the public site to actually match what Subsplash already does well, not compete
  with it or ignore it.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Jamie
body: |
  Hey Jamie,

  If the website's already keeping pace with the app, no worries at all.

  If not, happy to talk through what that'd look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- Confirmed Subsplash + Planning Center signals -> verified against lead-scoring's
  score_notes/platform_detect.py output (already-available data, no new fetch since
  research_arm is light)
- Polymer facts: Landmark Church numbers (59 -> 2,799 sermon-notes sessions, +29.5% organic,
  zero paid spend) match knowledge/case-studies/landmark-church.md exactly, and this is a
  direct Subsplash-migration match (Landmark also moved off Subsplash) - strongest-fit case
  study used honestly, not borrowed from an unrelated track; track=new_build matches this
  lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 85/57/32 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (app-vs-website gap with case study proof, plain capability
  restating the Subsplash angle, closer), escalating brevity, no repeated proof point
  (case study numbers only in email_1)
