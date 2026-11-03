---
contact_name: John Ryan
contact_title: COO | Co-founder
organization: TrustPointAI
icp: startups
apollo_contact_id: 66f7586f1c88dc0001d844db
score_total: 59
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-03
---

## research
- Homepage stats "87.7% self-service borrowers" and "84% borrowers who strongly recommend" are both labeled only "since start," with no timeframe or source; testimonials are credited generically ("Borrower user on platform," "Repeat client") rather than by name (source: WebFetch of trustpoint.ai, 2026-11-03)
- Several hero and icon images have empty alt text, invisible to screen readers (source: same WebFetch)
- Platform for construction/rehab lenders: draw operations, fund control, borrower portal, portfolio analytics, AI document review (source: same WebFetch)
- Site served via CloudFront+S3 static hosting (no CMS markers) -> unknown/new_build_track (source: curl headers, via lead-scoring)
- org_data: 38 employees, founded 2020, positive growth (+7.5%/+19.4%) (source: Apollo org_data, via lead-scoring)

## proof_used
- knowledge/business-overview.md (plain capability statement - platform-matched build for a lending-adjacent platform, no case study claimed)

## email_1
subject: the 87.7% with no timeframe
body: |
  Hey John,

  TrustPointAI's homepage cites "87.7% self-service borrowers" and "84% borrowers who strongly recommend," both labeled only "since start," next to testimonials credited only to "Borrower user on platform."

  For a platform construction lenders trust with draw operations and fund control, that's a credibility gap on the one page meant to build trust before the demo call.

  We build sites for lending-adjacent platforms at exactly this stage, where the site itself needs to carry real proof, not just claims.

  Worth 15 minutes?

  Ethan

## email_2
subject: invisible to screen readers
body: |
  Hey John,

  Several of TrustPointAI's hero and icon images have empty alt text, invisible to anyone using a screen reader, not the best look for a platform selling to regulated lenders.

  A rebuild catches details like that as part of the job, not after a client points it out.

  Want to jump on a call?

  Ethan

## email_3
subject: no pressure, John
body: |
  Hey John,

  If the current site's working fine for TrustPointAI, no worries at all.

  If not, happy to talk through a rebuild that backs up the claims with real proof, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Unsourced "since start" stats, generic testimonial attribution, empty alt text on hero/icon images -> re-fetched trustpoint.ai this pass, confirmed verbatim
- CloudFront+S3 static hosting -> curl headers, via lead-scoring, confirmed
- Polymer facts: no case study cited, plain capability statement only; no price/hours cited
- scripts/voice_check.py: clean
- Word counts: 83/56/35 - all within band (trimmed email_1 from an initial 86-word draft)
- One CTA per email, sign-off "Ethan"
- Cohesion: distinct hooks (unsourced stats/generic testimonials / accessibility / closer), escalating brevity, no repeated proof point
