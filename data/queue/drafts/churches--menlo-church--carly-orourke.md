---
contact_name: Carly O'Rourke
contact_title: Creative Director
organization: Menlo Church
icp: churches
apollo_contact_id: 6167a5a2f08dee00017b2d58
score_total: 68
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-13T13:30:00Z
pushed_via_mailbox: ehoover@integratedchurchwebsites.com
drafted_at: 2026-11-13
---

## research
- Platform detected as webflow -> subscription_track (source: scripts/platform_detect.py
  --url https://menlo.church --icp churches, lead-scoring 2026-11-13); no subscription-track
  case study exists yet, so drafted with a plain capability statement per outreach-email
  skill Step 0/knowledge/case-studies/README.md
- Confirmed menlo.church churchcenter subdomain via church_crawler (Planning Center),
  source: lead-scoring 2026-11-13
- org_data: 110 employees, $4M revenue, founded 1873 - large, long-established
  congregation (source: Apollo org_data, lead-scoring 2026-11-13)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free org_data/platform_detect fields only.
  (lead-scoring did find a dated 2026-10/11 capital-campaign update, but flagged it too
  stale to cite as a current trigger - not reused here for the same reason.)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no
  subscription-track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: menlo.church, week to week
body: |
  Hey Carly,

  Running Webflow already puts Menlo ahead of most churches your size, but a site that
  size usually needs more weekly attention than any one person has time for.

  We run ongoing monthly plans built around Planning Center: new pages, event updates, and
  small builds handled without pulling your team off everything else they own.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: who keeps menlo.church current
body: |
  Hey Carly,

  At Menlo's size, the website queue is usually longer than any one creative team can get
  to in a given week.

  That's the gap a monthly plan closes: new landing pages, event updates, small builds,
  handled without waiting on your own next open hour.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, menlo
body: |
  Hey Carly,

  Last one from me.

  If menlo.church is already getting the weekly attention it needs, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what ongoing support would look
  like.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-13
notes:
- "Running Webflow" -> matches scripts/platform_detect.py output (platform: webflow).
- "Planning Center" -> matches confirmed church_crawler churchcenter_subdomain signal.
- No case study cited - plain capability statement per outreach-email Step 0 (subscription
  track has no approved case study yet, per knowledge/case-studies/README.md). No pricing
  cited; "monthly plans" referenced only generically, no tier name or dollar figure.
- Capital-campaign signal found during scoring deliberately NOT used - lead-scoring's own
  score_notes flagged it as past the decay window, so not current enough to reference per
  fact-check Check 1.
- Track/proof consistency: subscription_track lead, no new-build case study borrowed -
  consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~58w, email_2 ~43w, email_3 ~33w -
  within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (Webflow + size), not sendable elsewhere.
