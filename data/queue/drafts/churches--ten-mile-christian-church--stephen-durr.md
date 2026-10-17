---
contact_name: Stephen Durr
contact_title: Director of Communications
organization: Ten Mile Christian Church
icp: churches
apollo_contact_id: 57dfb32ea6da980b0b575492
score_total: 66
tier: warm
status: pushed
pushed_at: 2026-10-17T14:50:00Z
drafted_at: 2026-10-17
---

## research
- 4 Sunday services (8/9:30/11/12:30) plus multiple Sunday small groups (source: https://tenmilecc.com)
- Confirmed Planning Center / Church Center: tmc.churchcenter.com login and churchcenter.com/setup app links (source: https://tenmilecc.com)
- Site platform: Wix, confirmed via scripts/platform_detect.py --url https://tenmilecc.com --icp churches (2026-10-17)
- Mobile PageSpeed: performance 48/100, LCP 9.4s (source: scripts/pagespeed_check.py --url https://tenmilecc.com --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/case-studies/landmark-church.md (organic search sessions +29.5%)

## email_1
subject: tenmilecc.com on wix
body: |
  Hey Stephen,

  Ten Mile runs four services a weekend through Church Center, but the site is still built on Wix and takes 9.4 seconds to show its main content on mobile, well past the point most visitors wait around.

  We build church sites that run on Church Center directly, not linked out from a DIY builder. For Landmark Church, that move grew organic search sessions 29.5% with zero paid spend.

  Want to jump on a call about it?

  God Bless,
  Ethan

## email_2
subject: four services, one wix page
body: |
  Hey Stephen,

  Four services every weekend plus Sunday small groups is a lot of people relying on a Wix site for schedules, sign-ups, and Church Center access, and on mobile that site takes over 9 seconds just to show anything.

  We'd move Ten Mile onto a site built around Church Center from the ground up, so people get to what they need faster.

  Make sense to connect this week?

  God Bless,
  Ethan

## email_3
subject: one last thing
body: |
  Hey Stephen,

  Last note so I'm not filling up your inbox. If the site's not a priority this year, no worries. If four services a week deserve something faster than Wix, I'm around.

  No rush on this.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "four services a weekend", Church Center via tmc.churchcenter.com -> verified against https://tenmilecc.com
- "built on Wix" -> verified via scripts/platform_detect.py --url https://tenmilecc.com --icp churches -> wix, new_build_track
- "takes 9.4 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://tenmilecc.com --strategy mobile, LCP display "9.4 s"
- "organic search sessions grew 29.5% with zero paid spend" -> matches knowledge/case-studies/landmark-church.md, status: approved, track: new_build (matches this lead)
- voice_check.py: clean
- word counts: email_1 81w, email_2 72w, email_3 40w - all within band
- CTA/subject lines checked against the other 8 drafts - unique
