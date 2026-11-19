---
contact_name: Alex Goode
contact_title: Co-Founder and CEO
organization: Palm
icp: startups
apollo_contact_id: 67da9fdc59127200019f9174
score_total: 62
tier: warm
research_arm: deep
status: pushed
pushed_at: 2026-11-19T13:36:31Z
drafted_at: 2026-11-19
---

## research
- Demo sample company is named "AnOtterCompany Inc."; the "Get API keys and start verifying
  businesses in minutes" paragraph appears twice verbatim, once in "Use cases" and again in
  "Start building today" (source: WebFetch of getpalm.com, 2026-11-19)
- Two different sample IDs shown for the same demo, "ID: 4820-3921-9741" and "Palm ID:
  3782-1922-6317"; footer copyright reads "Palm Finance Inc." while the brand everywhere
  else is "Palm" (source: WebFetch of getpalm.com, 2026-11-19)
- "Dynamic business identity network" B2B verification/compliance SaaS (Onboard/Verify/
  Monitor/Comply) for gov agencies, vertical SaaS, financial institutions and insurers; 21
  employees, founded 2023, Amex Ventures backing mentioned (source: Apollo org_data + site,
  via lead-scoring score_notes, 2026-11-19)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, startups icp_fit) - "Polymer took a complex
  fintech product and turned it into a website that makes institutional buyers take us
  seriously." (Nathan Berk, Co-Founder & CTO, Fispoke)

## email_1
subject: AnOtterCompany Inc.
body: |
  Hey Alex,

  Palm's demo sample company is literally named "AnOtterCompany Inc.," and the same "Get API
  keys and start verifying businesses in minutes" paragraph runs twice, once in Use Cases and
  again in Start Building Today, word for word.

  For a company selling trust and verified business identity, a site running on placeholder
  sample data and duplicated copy works against the pitch.

  We'd ship this clean, nothing placeholder, nothing repeated twice. Did that for Fispoke's
  fintech rebuild too.

  Worth a quick call about a cleanup?

  Ethan

## email_2
subject: two different sample IDs
body: |
  Hey Alex,

  The page shows two different sample IDs for the same demo, "ID: 4820-3921-9741" in one
  spot and "Palm ID: 3782-1922-6317" in another, and the footer copyright reads "Palm
  Finance Inc." while the brand everywhere else is just "Palm."

  Small inconsistencies, but exactly the kind of thing a buyer notices when deciding whether
  to trust an identity-verification product with their own data.

  Open to chatting this week?

  Ethan

## email_3
subject: no pressure, Alex
body: |
  Hey Alex,

  If the site's already getting a pass, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-19
notes:
- Placeholder sample company name, duplicated CTA paragraph, two mismatched sample IDs, and
  the "Palm Finance Inc." vs "Palm" branding inconsistency -> verified against same-session
  WebFetch of getpalm.com (2026-11-19); not re-fetched
- Polymer facts: no direct Fispoke quote used, only a paraphrased reference ("Did that for
  Fispoke's fintech rebuild too"), consistent with knowledge/case-studies/fispoke.md;
  track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 83/66/24 - e1/e2 within band, e3 matches the established short-closer pattern
- One CTA per email, sign-off plain "Ethan"
- Cohesion: distinct hooks (placeholder data/duplicated copy in e1, mismatched IDs/branding
  in e2, closer in e3), escalating brevity, no repeated proof point (Fispoke reference only
  in email_1)
