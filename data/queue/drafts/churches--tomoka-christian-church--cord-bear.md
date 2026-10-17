---
contact_name: Cord Bear
contact_title: Executive Pastor
organization: Tomoka Christian Church
icp: churches
apollo_contact_id: 54a60cef7468692fa23cb8be
score_total: 69
tier: warm
status: pushed
pushed_at: 2026-10-17T14:50:00Z
drafted_at: 2026-10-17
---

## research
- 3 physical campuses (Ormond Beach, DeLand, New Smyrna Beach) plus 2 language congregations (source: https://tomoka.cc)
- Confirmed Planning Center / Church Center: tomoka.churchcenter.com used for Events, Sermons On-Demand, the email newsletter form, and the Connection Card (source: https://tomoka.cc)
- Giving does NOT route through Church Center - the GIVE button goes to tomoka.cc/give instead (source: https://tomoka.cc)
- Site platform: WordPress, confirmed via scripts/platform_detect.py --url https://tomoka.cc --icp churches (2026-10-17)
- Mobile PageSpeed: performance 41/100, LCP 9.1s (source: scripts/pagespeed_check.py --url https://tomoka.cc --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/case-studies/landmark-church.md (organic search sessions +29.5%)

## email_1
subject: the church center split
body: |
  Hey Cord,

  Tomoka runs events, sermons, and your newsletter through Church Center, but giving sits on a separate WordPress page outside it, splitting your three campuses across two systems instead of one.

  We build church sites around Church Center itself. For Landmark Church, pulling Planning Center events, groups, and the sermon library into the site grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes to see what that looks like for Tomoka?

  God Bless,
  Ethan

## email_2
subject: multi-campus, one wordpress site
body: |
  Hey Cord,

  Running three campuses plus two language congregations through one WordPress site is a lot to ask of a template builder, and on mobile your homepage takes 9.1 seconds to show its main content.

  We'd rebuild it on Webflow with Church Center wired in directly: one CMS across campuses and languages, no plugin stack to maintain.

  Up for a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note on tomoka.cc
body: |
  Hey Cord,

  Last note on this since I don't want to clutter your inbox. If a rebuild isn't a priority this year, totally fine. If three campuses and two languages outgrowing one WordPress site is something you want to fix, I'm around.

  Just say the word.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "3 campuses plus 2 language congregations", Church Center via tomoka.churchcenter.com (events/sermons/newsletter/Connection Card) -> verified against https://tomoka.cc
- "giving sits on a separate WordPress page outside it" -> verified (GIVE button goes to tomoka.cc/give, not Church Center)
- "built on WordPress" -> verified via scripts/platform_detect.py --url https://tomoka.cc --icp churches -> wordpress, new_build_track
- "takes 9.1 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://tomoka.cc --strategy mobile, LCP display "9.1 s"
- "organic search sessions grew 29.5% with zero paid spend" -> matches knowledge/case-studies/landmark-church.md, status: approved, track: new_build (matches this lead)
- voice_check.py: clean
- word counts: email_1 78w, email_2 67w, email_3 49w - all within band
- CTA/subject lines checked against the other 8 drafts - unique
