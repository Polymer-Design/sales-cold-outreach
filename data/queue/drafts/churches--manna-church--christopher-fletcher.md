---
contact_name: Christopher Fletcher
contact_title: Executive Pastor
organization: Manna Church
icp: churches
apollo_contact_id: 5ab8a498a6da98146d1cbdf3
score_total: 95
tier: hot
research_arm: light
status: pushed
drafted_at: 2026-11-24
pushed_at: 2026-11-25T13:10:53Z
pushed_via_mailbox: ethan@integratedchurchwebsites.com
apollo_contact_id_resolved: 6b06de4d7665b90014853007
---

## research
- research_arm: light per EXP-001 - no new searches run for drafting; facts below are reused
  from lead-scoring's score_notes only.
- Direct fetch of manna.church (curl, 2026-11-24, per lead-scoring score_notes) confirms the
  live WordPress site is compromised and serving dozens of indexed spam pages, e.g.
  /winshark-casino-a-digital-world-of-fun-and-adventure/ and
  /woraus-besteht-das-bonusprogramm-von-goldbet-casino/ (source: lead-scoring score_notes
  2026-11-24, curl manna.church)
- 120 staff (org_data), $7.5M revenue, founded 1972, 22 campuses/sites across three regions;
  site text: "strategically planting expressions of Manna Church along the Military Highway"
  (source: lead-scoring score_notes 2026-11-24)
- Confirmed churchcenter.com subdomain (mannachurchnewportnews, church_crawler signal) -
  Planning Center is the system of record (source: lead-scoring score_notes 2026-11-24)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: your site's casino pages
body: |
  Hey Christopher,

  manna.church is currently serving dozens of indexed spam pages (casino and gambling
  content under paths like /winshark-casino-a-digital-world-of-fun-and-adventure/) - the
  WordPress site's been compromised.

  With Manna actively planting new expressions along the Military Highway, that's exactly
  what people searching for your new locations run into first.

  We rebuild church sites clean, no legacy vulnerabilities. One similar rebuild grew organic
  search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: planning center vs. the spam
body: |
  Hey Christopher,

  Manna already runs on Planning Center across your campuses, but a hacked WordPress front
  door undercuts that. Visitors hit spam before they ever reach check-in or giving.

  As you keep planting along the Military Highway, we'd build one clean site tied directly
  to Planning Center, not patched WordPress.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, manna church
body: |
  Hey Christopher,

  Last one from me.

  If the spam pages aren't a priority with everything else going on, no worries at all.

  If they are, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-24
notes:
- Spam/casino pages on manna.church -> re-verified via direct curl fetch 2026-11-24 (same
  pipeline run), both cited URL paths confirmed present in the live page source
- 22 campuses/Military Highway expansion language -> matches lead-scoring score_notes
  verbatim, sourced from the site itself the same scoring session
- Landmark Church proof point ("grew organic search sessions 29.5% with zero paid spend")
  verbatim-compatible with knowledge/case-studies/landmark-church.md, track new_build
  matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass
- word counts: email_1 73, email_2 60, email_3 35 - all within band
- cohesion: three angles (spam/compromise hook / Planning Center contrast / closer), proof
  used once, sign-off "God Bless," + "Ethan" correct, research_arm: light correctly reused
  only score_notes facts (no new searches run during drafting)
