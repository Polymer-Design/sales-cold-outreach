---
contact_name: Russell Jander
contact_title: Director of Communications
organization: Northshore Community Church
icp: churches
apollo_contact_id: 610458e231fcdf00016ee629
score_total: 62
tier: warm
status: ready
drafted_at: 2026-10-17
---

## research
- 2 Sunday services (9/10:30am), ~25 upcoming ministry events including kids, youth, MomCo, Prime Time 60+, and men's/women's gatherings (source: https://northshore.church)
- Confirmed Planning Center / Church Center: northshore.churchcenter.com used for a "Get Help" form and newsletter signup (source: https://northshore.church)
- Site platform: Webflow, confirmed via scripts/platform_detect.py --url https://northshore.church --icp churches (2026-10-17) -> subscription_track per icp-churches.yaml routing
- Mobile PageSpeed: performance 36/100, LCP 11.5s (source: scripts/pagespeed_check.py --url https://northshore.church --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no subscription-track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: northshore's 11-second load
body: |
  Hey Russell,

  Northshore's already built on Webflow, which is the right foundation, but the homepage takes 11.5 seconds to show its main content on mobile, right where your ~25 weekly ministry pages are competing for attention.

  We run a monthly plan built for sites already on Webflow: ongoing fixes, new pages, and small builds handled by the same team, no rebuild needed.

  Open to chatting about it this week?

  God Bless,
  Ethan

## email_2
subject: 25 ministries, one plan
body: |
  Hey Russell,

  Between kids, youth, MomCo, Prime Time, and men's and women's ministries, Northshore's site has a lot to keep current, and an 11.5-second mobile load means people are leaving before they find any of it.

  A Grow plan gets ongoing page updates and small builds handled without you waiting on a one-off project every time something changes.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: leaving this with you
body: |
  Hey Russell,

  I'll keep this short and let it go after this. If the site's holding up fine for now, no worries. If an 11-second mobile load is costing you ministry sign-ups, worth 15 minutes to talk it through?

  Happy to work around your schedule.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "takes 11.5 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://northshore.church --strategy mobile, LCP display "11.5 s"
- "~25 upcoming ministry events" and ministry list (kids/youth/MomCo/Prime Time/men's/women's) -> verified against https://northshore.church
- "already built on Webflow" -> verified via scripts/platform_detect.py --url https://northshore.church --icp churches -> subscription_track
- Track/proof consistency: subscription_track lead, no new-build case study cited; "Grow plan" scope ("ongoing page updates and small builds") matches knowledge/business-overview.md Grow row ("new pages, landing pages, CMS work, small automations") - no numbers invented, no pricing cited
- voice_check.py: clean
- word counts: email_1 72w, email_2 67w, email_3 48w - all within band
- CTA/subject lines checked against the other 8 drafts - unique
