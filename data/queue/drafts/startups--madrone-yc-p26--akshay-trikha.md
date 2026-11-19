---
contact_name: Akshay Trikha
contact_title: Founder
organization: Madrone (YC P26)
icp: startups
apollo_contact_id: 6ad6092202899a00013074ff
score_total: 68
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-19
---

## research
- "Optimal Facility Locations" section is a heading with nothing underneath it (source:
  WebFetch of madrone.cool, 2026-11-19)
- "Backed by" shows the NVIDIA partner as a logo but YCombinator written out as plain text,
  no logo (source: WebFetch of madrone.cool, 2026-11-19)
- Page claims "saving tens of millions of dollars per facility" with no figures or source;
  no about page, team section, or contact form anywhere on the site (source: WebFetch of
  madrone.cool, 2026-11-19)
- Data-center dew-point cooling hardware (no mechanical chillers, claims 30% less water/power
  vs a chiller plus cooling tower in Texas), backed by Y Combinator P26 and the NVIDIA
  Inception Program, 5 employees (source: Apollo org_data + site, via lead-scoring
  score_notes, 2026-11-19)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, startups icp_fit) - "Polymer took a complex
  fintech product and turned it into a website that makes institutional buyers take us
  seriously." (Nathan Berk, Co-Founder & CTO, Fispoke)

## email_1
subject: Optimal Facility Locations
body: |
  Hey Akshay,

  Madrone's "Optimal Facility Locations" section has a heading and nothing else under it,
  and "Backed by" shows NVIDIA as a logo next to YCombinator written out as plain text, no
  logo at all.

  For a company claiming tens of millions in savings per facility, a site with empty
  sections and inconsistent proof undercuts the pitch to the hyperscale buyers you're going
  after.

  We'd ship this clean from scratch, nothing half-built. Did that for Fispoke's fintech
  rebuild too.

  Worth a quick call about a cleanup?

  Ethan

## email_2
subject: no team page, no contact form
body: |
  Hey Akshay,

  There's no about page, no team section, and no contact form anywhere on the site, just a
  claim of saving "tens of millions of dollars per facility" with nothing backing the
  number.

  For hyperscale and data center buyers doing diligence before a single conversation, that's
  a lot of trust to ask for with almost nothing to go on.

  Open to chatting this week?

  Ethan

## email_3
subject: no pressure, Akshay
body: |
  Hey Akshay,

  If the site's already getting a pass, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-19
notes:
- Empty "Optimal Facility Locations" section, inconsistent "Backed by" treatment, unsupported
  savings claim, and missing about/team/contact content -> verified against same-session
  WebFetch of madrone.cool (2026-11-19); not re-fetched
- Polymer facts: no direct Fispoke quote used, only a paraphrased reference ("Did that for
  Fispoke's fintech rebuild too"), consistent with knowledge/case-studies/fispoke.md;
  track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 84/63/24 - e1/e2 within band, e3 matches the established short-closer pattern
- One CTA per email, sign-off plain "Ethan"
- Cohesion: distinct hooks (empty section/inconsistent backing in e1, unsupported
  claim/missing trust content in e2, closer in e3), escalating brevity, no repeated proof
  point (Fispoke reference only in email_1)
