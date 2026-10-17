---
contact_name: Jeff Spille
contact_title: Executive Operations Director
organization: Southeast Christian Church in Denver
icp: churches
apollo_contact_id: 54c24b8774686916390ee98a
score_total: 59
tier: warm
status: pushed
pushed_at: 2026-10-17T14:50:00Z
drafted_at: 2026-10-17
---

## research
- 2 Sunday services (9/11am) plus a 7pm rebroadcast; many ministries (Kids, Youth, Young Adults, Men, Women, 55+, Single Parents, Missions) and a linked Christian school, sechristianschool.org (source: https://southeastcc.org)
- Confirmed Church Center form: southeastcc.churchcenter.com/people/forms/1306544 (source: https://southeastcc.org)
- Site platform: Webflow, confirmed via scripts/platform_detect.py --url https://southeastcc.org --icp churches (2026-10-17) -> subscription_track per icp-churches.yaml routing
- Mobile PageSpeed: performance 58/100, LCP 5.0s (source: scripts/pagespeed_check.py --url https://southeastcc.org --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no subscription-track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: southeastcc.org's performance score
body: |
  Hey Jeff,

  Southeast's already on Webflow, which is the right call, but the homepage scores 58 on mobile performance and takes 5 seconds to show its main content, with Kids, Youth, Young Adults, Missions, and the school all competing for that first impression.

  We run a monthly plan built for sites already on Webflow: ongoing page work and small builds handled by the same team, no rebuild required.

  Make sense to connect for 15 minutes?

  God Bless,
  Ethan

## email_2
subject: kids, youth, school, one site
body: |
  Hey Jeff,

  Between Kids, Youth, Young Adults, Missions, and the Christian school, Southeast's site is doing a lot of work, and a 58 mobile performance score means some of your people are waiting on it longer than they should.

  A Grow plan gets ongoing updates across all of that handled without a one-off project every time a ministry needs a page changed.

  Want to jump on a call this week?

  God Bless,
  Ethan

## email_3
subject: last word on this
body: |
  Hey Jeff,

  One more note, then I'll leave it alone. If the site's working fine as-is, no worries. If Kids, Youth, and the school deserve faster page updates, open to chatting, even briefly?

  I'll leave it there.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "scores 58 on mobile performance and takes 5 seconds to show its main content" -> verified against scripts/pagespeed_check.py --url https://southeastcc.org --strategy mobile, scores.performance=58, LCP display "5.0 s"
- ministry list (Kids/Youth/Young Adults/Missions) and linked Christian school sechristianschool.org -> verified against https://southeastcc.org
- "already on Webflow" -> verified via scripts/platform_detect.py --url https://southeastcc.org --icp churches -> subscription_track
- Track/proof consistency: subscription_track lead, no new-build case study cited; "Grow plan" scope matches knowledge/business-overview.md Grow row, no pricing or invented numbers
- voice_check.py: clean
- word counts: email_1 78w, email_2 73w, email_3 40w - all within band
- CTA/subject lines checked against the other 8 drafts - unique
