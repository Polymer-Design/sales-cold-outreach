---
contact_name: Kristopher Sullivan
contact_title: Executive Pastor
organization: First Baptist Church Tuscaloosa
icp: churches
apollo_contact_id: 54a3920a74686936761e1a03
score_total: 62
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-26
---

## research
- Founded 1818, historic downtown congregation (source: score_notes, scored 2026-11-10)
- Confirmed firsttuscaloosa.churchcenter.com Planning Center subdomain via church_crawler
- Own marketing site on Subsplash -> per icp-churches.yaml nuance, use the 'app's great, site doesn't match' angle, not the DIY-builder angle
- NOTE: score_notes flags the Apollo contact's 'Executive Pastor' title may be stale (a dated April 2026 bulletin names a different person in that role) - not used as an email claim either way, kept out of copy per fact-check caution

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches, used once in email_1)

## email_1
subject: your app vs. your website
body: |
  Hey Kristopher,

  First Baptist's been downtown since 1818 and runs on Subsplash, so the app side is already in good shape. The website doesn't carry that same weight yet.

  We build sites that match what the app already does: Church Center pulled in directly, built to feel like the same church, not two different experiences.

  Landmark Church ran the same play and grew organic search 29.5%, with no paid spend at all.

  Open to chatting this week?

  God Bless,
  Ethan

## email_2
subject: Core, four weeks, live
body: |
  Hey Kristopher,

  A rebuild like this fits Core: $6,500, live in 4 weeks.

  We'd connect Church Center too, so the site finally matches what the app already does.

  Up for a quick call on scope for First Baptist?

  God Bless,
  Ethan

## email_3
subject: no pressure, Kristopher
body: |
  Hey Kristopher,

  If the current site is doing its job fine, no worries at all.

  If it's still lagging behind the app, happy to talk through Core, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-26
notes:
- Founded 1818 -> matches score_notes (scored 2026-11-10)
- Subsplash angle -> matches icp-churches.yaml routing nuance for subsplash
- Planning Center confirmed via church_crawler
- Deliberately did NOT cite the April 2026 new-Executive-Pastor fact or assert the contact's current title as a personalization hook - score_notes itself flags the title may be stale; nothing in the draft asserts or depends on who currently holds the role
- Core '$6,500, live in 4 weeks' -> matches business-overview.md exactly
- Landmark Church proof variant J, numbers match exactly, used once
- scripts/voice_check.py: clean
- Word counts: email_1 80, email_2 41, email_3 34
