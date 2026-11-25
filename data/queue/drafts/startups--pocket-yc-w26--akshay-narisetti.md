---
contact_name: Akshay Narisetti
contact_title: Co-Founder & CEO
organization: Pocket (YC W26)
icp: startups
apollo_contact_id: 60edb5264ca9cf0001ffcada
score_total: 80
tier: hot
research_arm: light
status: pushed
drafted_at: 2026-11-24
pushed_at: 2026-11-25T13:10:56Z
pushed_via_mailbox: ehoover@growwithpolymer.com
apollo_contact_id_resolved: 6b06de4fea3e9e0014fb41a6
---

## research
- research_arm: light per EXP-001 - no new searches run for drafting; facts below are reused
  from lead-scoring's score_notes only.
- org_data: 22 employees, founded 2024, headcount growth 78%/6mo, 300%/12mo, 1500%/24mo
  (source: Apollo org_data, lead-scoring score_notes 2026-11-24)
- WebFetch of heypocket.com (re-verified 2026-11-24 during fact-check) confirms an active
  product launch: product listings read "Pocket - Personal AI Assistant (Launch Special)"
  with a "Get your Launch Special Pocket deal today" heading, and a "Trusted by
  professionals at" logo wall whose image filenames identify ElevenLabs, Uber, DoorDash,
  Vercel, and Amazon (source: WebFetch heypocket.com 2026-11-24). Note: "Founding Member" is
  a customer review's self-description, not a named company program - not used as a claim in
  the draft.
- platform_detect.py returned unknown for heypocket.com -> new_build_track (source:
  scripts/platform_detect.py, 2026-11-24)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: pocket's launch pricing
body: |
  Hey Akshay,

  Pocket already counts ElevenLabs, Uber, DoorDash, Vercel, and Amazon teams as customers,
  and you're mid-launch with Launch Special pricing. That's exactly the moment a site needs
  to read as credible as the device already is.

  We build fast, credible sites for teams right after a moment like this. Fispoke moved off
  Wix onto a 25-page, CMS-driven Webflow build so their own team could publish without
  touching code.

  Worth 15 minutes?

  Ethan

## email_2
subject: the team outpacing the site
body: |
  Hey Akshay,

  Pocket's headcount is up 300% in the past year. Teams that grow that fast usually outpace
  their own site within months, long before anyone circles back to fix it.

  We'd build Pocket a site your team can edit directly, matched to how fast you're actually
  scaling, not a template that needs a developer every time something changes.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, pocket
body: |
  Hey Akshay,

  Last one from me.

  If the site's keeping up with the growth and the launch, no worries at all.

  If it's not, happy to grab 15 minutes whenever works.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-24
notes:
- Launch Special pricing and customer-logo wall (ElevenLabs/Uber/DoorDash/Vercel/Amazon) ->
  re-verified via WebFetch of heypocket.com 2026-11-24; corrected the draft's initial claim
  of a "Founding Member" program since that term only appears as a customer review's
  self-description, not an official program - removed from email_1 before shipping
- 300% 12-month headcount growth -> matches Apollo org_data in lead-scoring score_notes
- Fispoke quote verbatim-compatible with knowledge/case-studies/fispoke.md, track new_build
  matches this lead's new_build_track
- No pricing cited for Polymer itself
- voice_check.py: pass
- word counts: email_1 73, email_2 67, email_3 32 - all within band
- cohesion: three angles (launch+customers hook / headcount-outpacing-site / closer), proof
  used once, startups sign-off "Ethan", no "God Bless"
