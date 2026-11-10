---
contact_name: Byron Williams
contact_title: Executive Pastor
organization: Greenhouse Church
icp: churches
apollo_contact_id: 67829b23a0dd550001a6e747
score_total: 70
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-10
---

## research
- Confirmed real multi-campus org: 4 Gainesville campuses, a South Florida campus, an online
  community, and a 2,000-seat auditorium ("the HUB") (source: cecobuildings.com, found during
  lead-scoring 2026-11-10)
- org_data: 54 employees, $39.6M revenue (source: Apollo org_data, lead-scoring 2026-11-10)
- Confirmed greenhousechurch.churchcenter.com Planning Center subdomain (source:
  church_crawler, lead-scoring 2026-11-10)
- Platform detected as wordpress -> new_build_track (source: scripts/platform_detect.py
  --url https://greenhousechurch.org --icp churches, lead-scoring 2026-11-10)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track; multi-campus church, Planning
  Center integration, organic search growth)

## email_1
subject: greenhouse's four campuses
body: |
  Hey Byron,

  Running four Gainesville campuses, a South Florida location, and an online community is a
  lot for one website to hold together.

  Planning Center already handles the back end. The site should make it just as easy to
  find a campus, service time, and how to give.

  We build sites for growing multi-campus churches around exactly that. For Landmark
  Church, a similar migration grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: who's maintaining greenhousechurch.org
body: |
  Hey Byron,

  A church this size, a 2,000-seat auditorium, multiple campuses, 54 people on staff,
  usually doesn't have anyone whose full-time job is the website.

  We can be that dedicated team, keeping a multi-campus site current without it falling on
  whoever has time between services.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, greenhouse church
body: |
  Hey Byron,

  Last one from me.

  If the site's keeping up with four campuses and growing, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what would help.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-10
notes:
- "four Gainesville campuses, a South Florida location, an online community, 2,000-seat auditorium" -> matches score_notes, sourced from cecobuildings.com during lead-scoring.
- "54 people on staff" -> matches org_data exactly.
- "Planning Center already handles the back end" -> confirmed via church_crawler churchcenter_subdomain signal.
- Landmark Church claim ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Results section; status approved, track new_build matches this lead's track.
- No pricing cited.
- scripts/voice_check.py: clean. word counts: email_1 ~76w, email_2 ~47w, email_3 ~30w - within band.
- sign-off: "God Bless," then "Ethan" (churches). Single CTA per email, no booking link.
- First sentence (four campuses + South FL + online) specific to this church, not sendable elsewhere. Distinct hook/structure from the Eleven22 draft (scale/multi-campus-complexity angle vs. new-construction angle).
