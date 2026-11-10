---
contact_name: Daniel Alberson
contact_title: CEO & Co-founder
organization: Punchcard (YC S23)
icp: startups
apollo_person_id: 66f2e52fd1e2490001de9a3a
score_total: 63
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-10
---

## research
- Confirmed rebrand: a dedicated on-site post explains "NewAgentive is now Punchcard"
  (source: punchcard.com, found during lead-scoring 2026-11-04)
- Named customers RSM, Richey May, JLK Rosenberger; CoAudit agent currently in beta
  (source: punchcard.com, lead-scoring 2026-11-04)
- org_data: 8 employees, founded 2023, mixed growth (+16.7% 6mo, -22.2% 12mo) (source:
  Apollo org_data, lead-scoring 2026-11-04)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://punchcard.com --icp startups, re-checked 2026-11-10)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes only.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: punchcard's rebrand
body: |
  Hey Daniel,

  Rebranding from NewAgentive to Punchcard is the kind of moment where the old site stops
  matching the new name.

  Audit firms like RSM and Richey May are serious buyers, they'll judge Punchcard's
  credibility the moment they land on the site.

  We build sites for growing teams in weeks, then keep building after launch. For Fispoke,
  a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who's building punchcard.com
body: |
  Hey Daniel,

  An 8-person team shipping a new audit agent in beta doesn't have spare hours left for the
  website, especially right after a rebrand.

  We can take the whole thing over, build it right once, and keep it current as Punchcard
  and CoAudit both keep moving.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, punchcard
body: |
  Hey Daniel,

  Last one from me.

  If the site's caught up with the new name and the CoAudit launch, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what a rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-10
notes:
- "Rebranding from NewAgentive to Punchcard" -> matches score_notes, sourced from punchcard.com's own rebrand post.
- "RSM and Richey May" -> two of the three named customers in score_notes, sourced from punchcard.com.
- "8-person team" -> matches org_data exactly.
- "CoAudit agent...in beta" -> matches score_notes exactly.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; status approved, track new_build matches this lead's track. No pricing cited.
- scripts/voice_check.py: clean. word counts: email_1 ~77w, email_2 ~50w, email_3 ~33w - within band.
- sign-off: plain "Ethan" (startups). Single CTA per email, no booking link.
- First sentence (rebrand) specific to this company, not sendable elsewhere. Distinct hook/structure from today's other drafts (rebrand angle, not headcount/funding).
