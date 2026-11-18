---
contact_name: Steve Rahimi
contact_title: CEO
organization: Pango (YC S26)
icp: startups
apollo_contact_id: 63f6af6f3eef0900012493f6
score_total: 66
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-18
---

## research
- Product demo shows a loading state, "Reading Olivia's email...", frozen on the page as
  static text instead of resolving (source: WebFetch of pango.ai, 2026-11-18)
- Certification badge row renders as one run-together string, "ISO27001AICPASOC 2" (source:
  WebFetch of pango.ai, 2026-11-18)
- "100+ carriers booked per parcel", the "Your stack" block, and the "See all integrations"
  link each appear twice within the same section; the "Delivery management" link points to
  /products/delivery-promise in one spot and /products/delivery-management in the footer
  (source: WebFetch of pango.ai, 2026-11-18)
- AI agents for e-commerce shipping/tracking/returns, backed by Y Combinator (S26); org_data
  19 employees, founded 2025, strong growth (100%/12mo, 167%/24mo headcount) (source: Apollo
  org_data + site, via lead-scoring score_notes, 2026-11-11)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, startups icp_fit) - "Polymer took a complex
  fintech product and turned it into a website that makes institutional buyers take us
  seriously." (Nathan Berk, Co-Founder & CTO, Fispoke)

## email_1
subject: Reading Olivia's email...
body: |
  Hey Steve,

  Pango's product demo has a loading state, "Reading Olivia's email...", frozen on the page
  as static text, and the certification row renders as one run-together string,
  "ISO27001AICPASOC 2." For a product selling trust around shipping and returns, a demo that
  looks half-loaded works against the pitch.

  We catch exactly this in a build, nothing ships half-rendered. Did that for Fispoke too,
  the kind of site that makes institutional buyers take a product seriously.

  Worth a quick call about a cleanup?

  Ethan

## email_2
subject: the duplicate stat block
body: |
  Hey Steve,

  "100+ carriers booked per parcel" and your integrations block each show up twice in the
  same section, and the delivery-management link points to two different URLs depending on
  where you click it.

  Small stuff individually, but it's the kind of thing that erodes trust fast on a page
  selling automation and precision.

  Open to chatting this week?

  Ethan

## email_3
subject: no pressure, Steve
body: |
  Hey Steve,

  If the site's already getting a pass, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- Frozen "Reading Olivia's email..." loading state, concatenated "ISO27001AICPASOC 2"
  badge text, duplicated stat/integration blocks, and the two different
  delivery-management URLs -> verified against same-session WebFetch of pango.ai
  (2026-11-18); not re-fetched
- Polymer facts: Fispoke quote paraphrased faithfully (meaning preserved: "makes
  institutional buyers take us/a product seriously") against
  knowledge/case-studies/fispoke.md; track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 83/60/25 - all within band
- One CTA per email, sign-off plain "Ethan"
- Cohesion: distinct hooks (frozen demo state/badge text, duplicate content blocks/broken
  links, closer), escalating brevity, no repeated proof point (Fispoke line only in email_1)
