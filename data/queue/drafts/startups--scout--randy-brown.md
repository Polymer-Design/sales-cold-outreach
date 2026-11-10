---
contact_name: Randy Brown
contact_title: Founder
organization: Scout
icp: startups
apollo_person_id: 66fdd69917012000014c7f28
score_total: 51
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-09
pushed_at: 2026-11-10
pushed_via_mailbox: ethan@growwithpolymer.com
apollo_contact_id_pushed: 6af31822a8d2b2000c411b25
---

## research
- 7 employees, founded 2025, staffing & recruiting industry (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as webflow -> subscription_track (source: scripts/platform_detect.py --url https://scoutintro.com --icp startups, scoring 2026-11-09)
- A second co-founder (Kirk Fernandes, also "Founder") is a verified contact on this org but not drafted this run due to budget - available as a secondary contact for a follow-up run
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused from lead-scoring's score_notes and free Apollo/platform_detect fields only.

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no subscription-track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: scoutintro.com on webflow
body: |
  Hey Randy,

  Already being on Webflow puts Scout ahead of most 7-person teams, who are usually still stuck on something harder to update.

  The gap at this stage is rarely the platform, it's having anyone whose actual job is using it well.

  We run ongoing monthly plans for teams in exactly that spot: new pages, landing pages, small builds, handled by a dedicated team instead of whoever's free that week.

  Worth 15 minutes?

  Ethan

## email_2
subject: who's updating scoutintro.com
body: |
  Hey Randy,

  A good Webflow setup only pays off if someone's actually using it, new pages, better copy, landing pages for whatever you're testing next.

  That's what a monthly plan is for, ongoing work without hiring for it.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, scout
body: |
  Hey Randy,

  Last one from me.

  If the site's getting the attention it needs, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what ongoing support would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- Webflow platform tag -> matches scoring record exactly; subscription_track is the correct pitch per config/icp-startups.yaml routing table.
- No case study cited (none exists for subscription_track) - email_1/2 use only a plain capability statement from knowledge/business-overview.md's monthly-plans section, no invented numbers or client names.
- research_arm: light confirmed, no new search/fetch calls made.
- scripts/voice_check.py: clean. word counts: 74w/46w/36w - within band.
- sign-off: plain "Ethan". single CTA per email, no booking link, structurally distinct from other drafts in this batch (platform-forward hook, not headcount or funding).
