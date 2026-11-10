---
contact_name: Johnny Chen
contact_title: Co-Founder & CEO
organization: Toothy AI (YC W25)
icp: startups
apollo_person_id: 6787786ba7f0550001f29285
score_total: 63
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-10
---

## research
- Confirmed real YC W25 company: AI agents for dental insurance verification, billing, and
  voice-AI calls to insurers; San Francisco; founded 2024 (source: lead-scoring 2026-11-04/05
  research)
- Company's own YC jobs page states it "just closed our seed round" - a real, self-reported,
  recent-sounding signal (no specific amount/date given; third-party estimates conflicted and
  were not used) (source: YC jobs page, lead-scoring research)
- org_data: 12 employees (source: Apollo org_data, lead-scoring)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://toothy.ai --icp startups, re-checked 2026-11-10)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes only.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: toothy ai's seed round
body: |
  Hey Johnny,

  Closing a seed round right as Toothy AI scales its dental insurance verification agents
  is exactly when buyers start checking the site more closely.

  Dental practices evaluating a new vendor for billing and insurance calls want a site that
  reads as trustworthy as the product.

  We build sites for growing teams in weeks, then keep building after launch. For Fispoke,
  a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: explaining toothy.ai simply
body: |
  Hey Johnny,

  Voice AI that calls insurers on a dental practice's behalf is not a simple product to
  explain in one scroll.

  We build sites that make technical products like this land clearly with buyers who've
  never heard of agentic AI, then keep refining the message as the product moves.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, toothy ai
body: |
  Hey Johnny,

  Last one from me.

  If the site's explaining the product as well as it deserves post-raise, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what would help.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-10
notes:
- "seed round" claim -> matches score_notes exactly ("just closed our seed round" per the company's own YC jobs page); no specific amount/date invented, consistent with scoring's caution about conflicting third-party estimates.
- "dental insurance verification, billing, voice-AI calls to insurers" -> matches score_notes description.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; status approved, track new_build matches this lead's track. No pricing cited.
- Deliberately did not cite the -33.3% 6mo headcount decline from org_data - a negative internal data point, not a pitch hook.
- scripts/voice_check.py: clean. word counts: email_1 ~80w, email_2 ~53w, email_3 ~30w - within band.
- sign-off: plain "Ethan" (startups). Single CTA per email, no booking link.
- First sentence (seed round + dental insurance agents) specific to this company, not sendable elsewhere. Distinct hook/structure from Punchcard (rebrand angle) and other recent drafts.
