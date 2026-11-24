---
contact_name: Nicole Hill
contact_title: Marketing Director
organization: One Church
icp: churches
apollo_contact_id: 54a7109d746869705aac2a12
score_total: 77
tier: hot
status: pushed
drafted_at: 2026-11-20
pushed_at: 2026-11-24T13:10:59Z
mailbox: ehoover@integratedchurchwebsites.com
---

## research
- Confirmed active capital campaign, "Finish Strong: A Next Is Now Continuation Campaign":
  "Next Is Now is our three-year campaign to expand our campus and make room for more life
  change," extended "Fall 2026 to Fall 2027" (source: WebFetch one.church 2026-11-20)
- Campaign funds a new auditorium: "Expanding our capacity with a new auditorium that will
  hold almost 1,400+ guests per service" (source: WebFetch one.church 2026-11-20)
- 3 Sunday services at the Gahanna, OH campus; site also calls out "750+ parking spaces"
  being added for the expansion (source: WebFetch one.church 2026-11-20)
- Site runs on Webflow (platform_detect.py, 2026-11-20) -> subscription_track
- PageSpeed (mobile): performance 51/100, LCP 4.2s (source: scripts/pagespeed_check.py
  one.church 2026-11-20) - raw fact about their own site only, not a comparative claim
- Site has a dedicated "Construction updates" page (/updates) for the campaign, confirming
  this is an active, ongoing content need, not a one-time post (source: WebFetch
  one.church 2026-11-20)

## proof_used
- knowledge/business-overview.md Monthly plans section (Grow/Partner) - no subscription_track
  case study exists yet, so this is a plain capability statement, no borrowed new_build numbers

## email_1
subject: your next is now campaign
body: |
  Hey Nicole,

  Next Is Now has One Church's attention on a new 1,400-seat auditorium through Fall 2027,
  which is exactly when a church's website quietly stops getting updated.

  We run ongoing site work for churches already on Webflow: content, event pages, and
  construction updates, kept current without pulling your team off the campaign.

  Worth 15 minutes to see if that's useful right now?

  God Bless,
  Ethan

## email_2
subject: who updates the site during this
body: |
  Hey Nicole,

  During a multi-year campaign like Next Is Now, the site usually needs MORE attention, not
  less: new renderings, giving pages, updates for the 1,400-seat auditorium.

  We take that on as an ongoing plan, so it's one dedicated team keeping pace with the
  campaign instead of it landing on your team between everything else.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, one church
body: |
  Hey Nicole,

  Last one from me.

  If the site's keeping up fine through the campaign, no worries at all.

  If it'd help to have a dedicated team on it while Next Is Now is live, happy to grab 15
  minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-20
notes:
- "Next Is Now" campaign, 1,400-seat auditorium, Fall 2026-2027 timeline -> verified against WebFetch of one.church (same session), text matches the research block exactly
- 3 services / Gahanna OH campus / 750+ parking spaces -> verified against same WebFetch
- Webflow platform -> verified against platform_detect.py output, subscription_track correctly pitched as a retainer, no new_build case study numbers borrowed
- No specific price/tier named in the draft, so no pricing-table cross-check needed; "ongoing plan" is a plain capability statement per the no-subscription-case-study-yet rule
- PageSpeed 51/100 mobile cited as a raw fact about their own site only, not used comparatively - no benchmark-file check needed
- voice_check.py: pass (0 banned words/clichés/openers/em dashes)
- word counts: email_1 66, email_2 65, email_3 45 - all within band
- cohesion: three distinct angles (campaign timing / ongoing site needs during the campaign / low-pressure closer), no repeated proof point, escalating brevity, sign-off "God Bless," + "Ethan" correct for churches
