---
contact_name: Douglas Solberg
contact_title: CEO
organization: Zaplar (YC S26)
icp: startups
apollo_contact_id: 6495e8ecd4e9f80001a7e8b1
score_total: 64
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-20
---

## research
- research_arm: light per EXP-001 - no new searches run for drafting; facts below are reused
  from lead-scoring's score_notes and free org_data/platform_detect fields only.
- YC S26 batch (the newest batch), company founded 2026 (source: lead-scoring score_notes
  2026-11-11)
- Apollo org_data: estimated_num_employees 9, with 12-month headcount growth of 400% off a
  small base (source: Apollo org_data, lead-scoring 2026-11-11)
- YC's own jobs page shows no open roles, including no design/dev posting - no in-house
  design capability yet (source: lead-scoring score_notes 2026-11-11)
- platform_detect.py returned unknown for zaplar.com -> new_build_track (source:
  scripts/platform_detect.py, lead-scoring 2026-11-11)
- Only contact found is Douglas Solberg, CEO - no marketing hire yet, so CEO is correctly
  the primary contact per the decision-maker rule (source: Apollo contact fields)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: zaplar's s26 batch
body: |
  Hey Douglas,

  Congrats on landing in YC's S26 batch. Most teams at this stage don't have a designer on
  staff yet, and that's usually exactly when the site gets outsourced, right as things start
  moving.

  We build fast, credible sites for teams in that exact spot. Fispoke moved off Wix onto a
  25-page, CMS-driven build so their own team could publish without touching code.

  Worth 15 minutes?

  Ethan

## email_2
subject: no designer yet is the right time
body: |
  Hey Douglas,

  Growing a team fast with no design hire yet is normal post-YC, but it also means the site
  tends to get built once and then ignored.

  We'd build Zaplar a site your team can edit directly, so it keeps pace with you instead of
  needing a developer every time something changes.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, zaplar
body: |
  Hey Douglas,

  Last one from me.

  If the site's not a priority with everything else on your plate post-YC, no worries at
  all.

  If it is, happy to grab 15 minutes whenever works for you.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-20
notes:
- YC S26 batch, founded 2026, org_data 9 employees/400% 12mo growth, no open design roles -> all sourced from lead-scoring score_notes (research_arm: light, no new search run, per EXP-001)
- Fispoke quote verbatim-compatible with knowledge/case-studies/fispoke.md, track new_build matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass
- word counts: email_1 68, email_2 61, email_3 36 (expanded after first pass landed under the 30-word floor) - all within band
- cohesion: three angles (congrats + no-designer-yet timing / build-that-scales-with-you / closer), proof used once, startups sign-off "Ethan"
