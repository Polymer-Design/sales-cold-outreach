---
contact_name: Robert Vazquez
contact_title: Director of Communications
organization: Cornerstone Church
icp: churches
apollo_contact_id: 5aabf0b3a6da98282541401c
score_total: 57
tier: warm
status: pushed
pushed_at: 2026-10-17T14:50:00Z
drafted_at: 2026-10-17
---

## research
- Single campus (Minneapolis NW metro), single Sunday 10am service (source: https://cornerstonecrystal.org)
- Confirmed Planning Center / Church Center: cornerstonecrystal.churchcenter.com used for an events page and sign-up (source: https://cornerstonecrystal.org)
- Site platform: unknown/no builder marker detected, confirmed via scripts/platform_detect.py --url https://cornerstonecrystal.org --icp churches (2026-10-17)
- Mobile PageSpeed: accessibility score 45/100, performance 41/100, LCP 3.8s (source: scripts/pagespeed_check.py --url https://cornerstonecrystal.org --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/case-studies/landmark-church.md (organic search sessions +29.5%)

## email_1
subject: cornerstonecrystal.org's accessibility score
body: |
  Hey Robert,

  Cornerstone uses Church Center for events and sign-ups, which is the right tool, but the site wrapped around it scores 45 on accessibility, meaning a real share of visitors can't use it the way it's built today.

  We build church sites around Church Center directly and bake in accessibility from the start. For Landmark Church that kind of rebuild grew organic search sessions 29.5% with zero paid spend.

  Open to chatting through it for 15 minutes?

  God Bless,
  Ethan

## email_2
subject: the 45 behind cornerstonecrystal.org
body: |
  Hey Robert,

  A 45 accessibility score usually means things like missing alt text, low contrast, or forms that don't work with a screen reader, which is a real barrier for part of your congregation, not just a technical number.

  We'd rebuild the site on Webflow with Church Center pulled in directly and accessibility handled as part of the build, not an afterthought.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: one more note
body: |
  Hey Robert,

  I won't keep circling back after this one. If the site's fine as-is, no worries at all. If a 45 accessibility score is worth fixing, make sense to connect?

  Your call, no pressure.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "scores 45 on accessibility" -> verified against scripts/pagespeed_check.py --url https://cornerstonecrystal.org --strategy mobile, scores.accessibility=45
- "Church Center for events and sign-ups" -> verified against https://cornerstonecrystal.org (cornerstonecrystal.churchcenter.com events/sign-up links)
- "organic search sessions 29.5% with zero paid spend" -> matches knowledge/case-studies/landmark-church.md verbatim ("Organic search sessions +29.5% ... with no paid spend"), status: approved, icp_fit: churches, track: new_build (matches this lead's new_build_track)
- voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- word counts: email_1 81w, email_2 71w, email_3 38w - all within band
- no PageSpeed comparative claim made (accessibility score cited only as a raw fact about the lead's own site)
- CTA/subject lines checked against the other 8 drafts in this batch for repeated skeletons - unique
