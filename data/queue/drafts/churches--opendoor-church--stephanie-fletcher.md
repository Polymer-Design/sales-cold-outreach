---
contact_name: Stephanie Fletcher
contact_title: Creative Services Director
organization: Opendoor Church
icp: churches
apollo_contact_id: 63dd2f00070fed0001000fa9
score_total: 59
tier: warm
status: ready
drafted_at: 2026-10-17
---

## research
- Two locations, Greenville and Winterville, with three weekly gatherings (Sun 9/11am, Thu 7pm) (source: https://opendoorchurch.com)
- Site platform: Subsplash, confirmed via scripts/platform_detect.py --url https://opendoorchurch.com --icp churches (2026-10-17) - church-specific nuance per lead-scoring SKILL.md: Subsplash church already has budget/sophistication, "app's great, website doesn't match it" angle
- Giving routes through SnapPages, not Church Center; contact forms route through opendoorchurch.churchcenter.com/people/forms/427 - three separate systems (source: https://opendoorchurch.com)
- Mobile PageSpeed: performance 27/100, LCP 9.1s (source: scripts/pagespeed_check.py --url https://opendoorchurch.com --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/case-studies/landmark-church.md (direct fit: Landmark also migrated off Subsplash - organic search sessions +29.5%, platform costs cut ~70%)

## email_1
subject: opendoor's app vs. website
body: |
  Hey Stephanie,

  Opendoor's Subsplash app covers two locations well, but the website is split across SnapPages for giving and a separate Church Center form for contact, and on mobile it takes 9.1 seconds to show its main content.

  We moved Landmark Church off Subsplash onto one connected Webflow site with Planning Center pulled in directly, and organic search sessions grew 29.5% with zero paid spend.

  Want to jump on a call to walk through it?

  God Bless,
  Ethan

## email_2
subject: opendoor's three systems
body: |
  Hey Stephanie,

  Right now Opendoor's web presence runs across three places: the Subsplash app, SnapPages for giving, and a Church Center form for contact, and the site itself still takes over 9 seconds to show anything on mobile.

  We'd bring all of it onto one Webflow build with Church Center wired in directly, the same move that cut Landmark Church's platform costs by about 70%.

  Make sense to connect this week?

  God Bless,
  Ethan

## email_3
subject: wrapping up here
body: |
  Hey Stephanie,

  Short note to close this out. If the current setup is working fine, no worries. If juggling three systems for one church is wearing thin, open to a quick call?

  No worries either way.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "Subsplash app covers two locations" and "split across SnapPages for giving and a separate Church Center form" -> verified against https://opendoorchurch.com and scripts/platform_detect.py --url https://opendoorchurch.com --icp churches -> subsplash
- "takes 9.1 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://opendoorchurch.com --strategy mobile, LCP display "9.1 s"
- Subsplash church-specific angle applied correctly per lead-scoring SKILL.md (app's-great-site-doesn't-match framing, not the "outgrown DIY builder" angle)
- "organic search sessions grew 29.5% with zero paid spend" and "cut Landmark Church's platform costs by about 70%" -> both match knowledge/case-studies/landmark-church.md (29.5% stat verbatim; "roughly 70%" is a fair midpoint of the case study's stated 65-75% range), status: approved, track: new_build (matches this lead) - Landmark also migrated off Subsplash, so this is a direct-fit proof point, not borrowed from an unrelated platform story
- voice_check.py: clean
- word counts: email_1 78w, email_2 74w, email_3 39w - all within band
- CTA/subject lines checked against the other 8 drafts - unique
