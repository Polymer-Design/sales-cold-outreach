---
contact_name: Matthew Flagg
contact_title: Executive Pastor
organization: The Refinery Christian Church
icp: churches
apollo_contact_id: 54a63eeb7468692fa24b98ce
score_total: 68
tier: warm
status: ready
drafted_at: 2026-10-17
---

## research
- 4 Sunday services (8/9:30/11/12:30) plus a new weekly Thursday 7pm service (source: https://therefinerycc.com)
- Confirmed Planning Center / Church Center: registration links point to therefinerycc.churchcenter.com (source: https://therefinerycc.com)
- Site platform: unknown/no builder marker detected, confirmed via scripts/platform_detect.py --url https://therefinerycc.com --icp churches (2026-10-17)
- Mobile PageSpeed: performance 68/100, LCP 6.1s (source: scripts/pagespeed_check.py --url https://therefinerycc.com --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/case-studies/landmark-church.md (Sermon Notes sessions 59 -> 2,799)

## email_1
subject: four services, one site
body: |
  Hey Matthew,

  Refinery runs five services a week through Church Center registrations, but your homepage takes 6.1 seconds to show its main content on mobile, which is where most visitors open it before a service time.

  We build church sites around Church Center directly, not bolted on. For Landmark Church, that rebuild took sermon notes traffic from 59 sessions to 2,799 after launch.

  Want to jump on a call to walk through what that'd look like for Refinery?

  God Bless,
  Ethan

## email_2
subject: refinery's growing fast
body: |
  Hey Matthew,

  Four Sunday services plus a new Thursday night service is a lot of people moving through Church Center registrations every week, and right now they're landing on a site that's still catching up on mobile speed.

  We'd rebuild it on Webflow with Church Center pulled in directly: one connected site instead of a registration page bolted onto a template.

  Open to chatting about it this week?

  God Bless,
  Ethan

## email_3
subject: closing the loop
body: |
  Hey Matthew,

  Quick last note so this doesn't sit in your inbox forever. If the site's not a priority right now, no worries at all. If five services a week deserve a site that keeps up, I'm happy to talk.

  No pressure either way.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "five services a week" (4 Sunday + 1 new Thursday), Church Center registrations via therefinerycc.churchcenter.com -> verified against https://therefinerycc.com
- "takes 6.1 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://therefinerycc.com --strategy mobile, LCP display "6.1 s"
- "sermon notes traffic from 59 sessions to 2,799 after launch" -> matches knowledge/case-studies/landmark-church.md verbatim ("Sermon Notes sessions 59 -> 2,799"), status: approved, track: new_build (matches this lead)
- Did NOT claim the on-site "NEXT initiative" ($6.49M) or "The Capital C" nav item as a capital campaign - site describes it as giving, not construction, so it's excluded per CLAUDE.md fact rules, consistent with the scoring notes on this lead
- voice_check.py: clean
- word counts: email_1 81w, email_2 71w, email_3 47w - all within band
- CTA/subject lines checked against the other 8 drafts - unique
