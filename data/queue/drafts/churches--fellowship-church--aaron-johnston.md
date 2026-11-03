---
contact_name: Aaron Johnston
contact_title: Creative Director
organization: Fellowship Church
icp: churches
apollo_contact_id: 5b3090fea6da98eb5d45d46c
score_total: 84
tier: hot
research_arm: light
status: hot_approved
drafted_at: 2026-11-03
---

## research
- Homepage footer reads the unfilled template text "© XXXX Fellowship Church" (source: lead-scoring score_notes, WebFetch of fellowshipchurch.com, 2026-11-03)
- At least two placeholder links ([](#)) on the homepage, one in the "Latest Message" area and one in the Locations section; nav labeling is inconsistent between the desktop top bar ("Community") and the mobile menu ("Grow") (source: same score_notes WebFetch)
- 5 physical campuses (Grapevine, Frisco, Dallas, Fort Worth, Hawkins) plus an online location; site self-describes Fellowship as "one of the largest churches in America" (source: same score_notes WebFetch)
- Confirmed on Webflow -> subscription_track; confirmed churchcenter_embed (Planning Center) signal (source: scripts/platform_detect.py + church_crawler.py, via lead-scoring)
- research_arm: light (EXP-001) - no new research run this pass; all facts reused from lead-scoring's score_notes, per outreach-email Step 1.

## proof_used
- knowledge/business-overview.md (Webflow -> monthly plan; churches lead with Care or Grow; plain capability statement, no approved subscription_track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: the © XXXX footer
body: |
  Hey Aaron,

  Fellowship's homepage footer still reads "© XXXX Fellowship Church," next to a couple of placeholder links that go nowhere.

  For one of the largest churches in the country, across five campuses plus online, that's a rough front door for anyone checking service times before Sunday.

  You're already on Webflow, so this isn't a rebuild. It's a dedicated team catching things like this as they show up, plus building new pages as the campuses grow.

  Worth 15 minutes to talk through?

  God Bless,
  Ethan

## email_2
subject: five campuses, one nav
body: |
  Hey Aaron,

  Fellowship's desktop nav calls a section "Community," the mobile menu calls the same thing "Grow," a small inconsistency, but the kind that creeps in across five campuses and an online option.

  A monthly plan keeps one team watching the whole site instead of whoever's free that week.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Aaron
body: |
  Hey Aaron,

  If the footer and nav items are already on someone's list, no worries at all.

  If they're not, happy to talk through what a dedicated team on Webflow would look like for Fellowship, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- "© XXXX Fellowship Church" footer text and two empty placeholder links -> verified against the same-session WebFetch of fellowshipchurch.com (2026-11-03, lead-scoring pass); not re-fetched a second time since the fetch is minutes old in this same run, not a stale/drifted source
- "one of the largest churches in America" and 5 campuses (Grapevine, Frisco, Dallas, Fort Worth, Hawkins) + online -> same WebFetch, verbatim/paraphrase accurate
- Nav label inconsistency (desktop "Community" vs mobile "Grow") -> same WebFetch, confirmed
- Webflow + subscription_track -> scripts/platform_detect.py output via lead-scoring, confirmed
- Polymer facts: no case study cited (none approved yet for subscription_track per knowledge/case-studies/README.md); "dedicated team" / monthly-plan framing matches knowledge/business-overview.md's "Already on Webflow... best fit for a monthly plan" guidance; no price or hours number cited, nothing to mismatch
- scripts/voice_check.py: clean
- Word counts: email_1 85, email_2 58, email_3 42 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout (churches)
- Cohesion: three distinct hooks (footer/placeholder links / nav inconsistency / closer), escalating brevity (85/58/42), no repeated proof point
