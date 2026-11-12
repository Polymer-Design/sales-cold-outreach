---
contact_name: Loc Tran
contact_title: Chief Operating Officer
organization: Conifer (YC S26)
icp: startups
apollo_contact_id: 66417f91390ed100015edcc7
score_total: 69
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-11
pushed_at: 2026-11-12T13:10:34Z
---

## research
- Team of 5 out of Princeton building an open-source local AI inference runtime for Apple
  Silicon, opened a beta waitlist (sources: https://reddit.sentinel-team.org/posts/1tnnc4i/snapshots/2026-05-29T19%3A16%3A10.134322Z
  and https://reddit.sentinel-team.org/posts/1ttjdaq/snapshots/2026-06-05T22%3A33%3A38.958122Z,
  found during lead-scoring 2026-11-11)
- org_data: 5 employees, 6x headcount growth over both 6 and 12mo - a just-founded team
  scaling fast (source: Apollo org_data, lead-scoring 2026-11-11)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://conifer.build --icp startups, lead-scoring 2026-11-11)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free Apollo/platform_detect fields only.

## proof_used
- knowledge/business-overview.md (plain capability statement - Fispoke's case study is
  fintech/RIA at a very different company scale and stage, not a close enough fit for a
  5-person pre-launch infra team; per outreach-email skill Step 2, use plain capability
  rather than force a mismatched proof point)

## email_1
subject: conifer's waitlist moment
body: |
  Hey Loc,

  Five people out of Princeton shipping a local AI inference engine for Apple Silicon, and
  you just opened the beta waitlist. That is usually the exact moment the site falls
  behind the product.

  We build marketing sites for small technical teams: fast, on a platform that matches how
  you work, so it is not another thing pulling you away from the engine.

  Worth 15 minutes?

  Ethan

## email_2
subject: the site nobody owns
body: |
  Hey Loc,

  Most 5-person teams at your stage do not have anyone dedicated to the site, it just gets
  whatever time is left after the product.

  We take that off your plate entirely: design, build, and a platform your team can
  actually update without pulling an engineer off the real work.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, conifer
body: |
  Hey Loc,

  Last one from me.

  If the site is keeping pace with what you are shipping, no worries at all.

  If it is still the waitlist page from launch, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-11
notes:
- "Five people out of Princeton... local AI inference engine for Apple Silicon... beta waitlist" -> matches score_notes/research block, sourced to founder Reddit posts from lead-scoring; no new fetch needed (light arm), no numbers invented.
- No case study numbers cited. Plain capability statement used per Step 2 (Fispoke is a mismatched vertical/scale for this lead) - consistent with knowledge/business-overview.md.
- No pricing cited.
- scripts/voice_check.py: clean. Word counts: email_1 ~65w, email_2 ~50w, email_3 ~34w - within band, escalating brevity.
- Sign-off: plain "Ethan" (startups, no "God Bless"). One CTA per email, rotated phrasing.
- First sentence specific to this company (Princeton + local inference engine + Apple Silicon + beta waitlist), not sendable to any other org. No repeated proof point.
