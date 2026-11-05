---
contact_name: Matthew Giacomini
contact_title: Co-Founder & Chief Operating Officer
organization: Cari Network
icp: startups
apollo_contact_id: 54a5d5137468692abfe359ac
score_total: 72
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-05
---

## research
- Permissioned blockchain platform for digital money movement, FDIC-eligible tokenized bank deposits, site states product "hasn't launched yet" (source: lead-scoring score_notes, cari.com, 2026-11-04)
- WebFetch of cari.com (2026-11-05): "Get in Touch" section has a "Contact Us" label but no form fields or contact details appear underneath it - an incomplete/empty contact section on a pre-launch fintech site
- org_data: 23 employees, +38% headcount growth (6mo), +314% (12mo, off a small base) - reused from org_data
- platform_detect.py: unknown (bespoke site) -> new_build_track - reused from lead-scoring

## proof_used
- knowledge/case-studies/fispoke.md (new_build, icp_fit startups - scope/before-state proof, no outcome numbers cited)

## email_1
subject: the empty contact form
body: |
  Hey Matthew,

  Cari's "Get in Touch" section on cari.com has a "Contact Us" label, but no actual form or contact details sit underneath it.

  For a pre-launch fintech asking banks and digital asset partners to trust it with deposits, that's the first impression, and it's currently blank.

  We moved Fispoke off Wix onto a 25-page, CMS-driven Webflow build so their own team can publish without touching code.

  Worth 15 minutes to talk through getting the site launch-ready alongside the product?

  Ethan

## email_2
subject: growing faster than the site
body: |
  Hey Matthew,

  Headcount up 314% in a year is the kind of growth that usually outruns whatever's running the website.

  We do fixed-price builds, starting at $3,000 for a single page in 30 days, up to a full custom build for something this regulated.

  Want to jump on a call?

  Ethan

## email_3
subject: no pressure, Matthew
body: |
  Hey Matthew,

  If the contact section and the rest of the site are already being rebuilt, no worries at all.

  If not, happy to talk through what a dedicated team would look like for Cari before launch, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-05
notes:
- "Get in Touch"/"Contact Us" section with no form fields -> re-verified against a fresh WebFetch of cari.com (2026-11-05, same run)
- Pre-launch status, FDIC-eligible tokenized deposits -> matches lead-scoring score_notes, sourced to cari.com 2026-11-04, not re-fetched a second time for this specific claim
- org_data (23 employees, +38%/6mo, +314%/12mo growth) -> matches index.jsonl org_data verbatim
- platform_detect.py unknown -> new_build_track -> matches lead-scoring output
- Fispoke proof: "25-page, CMS-driven Webflow build so their own team can publish without touching code" -> matches knowledge/case-studies/fispoke.md quotable line verbatim; status approved, track new_build matches, icp_fit startups matches; no outcome numbers borrowed
- Pricing: "$3,000 for a single page in 30 days" -> matches knowledge/business-overview.md Sprint tier exactly; "full custom build" references Custom tier by name only, no dollar figure stated
- scripts/voice_check.py: clean
- Word counts: email_1 81, email_2 51, email_3 42 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "Ethan" throughout (startups, no "God Bless")
- Cohesion: three distinct angles (empty contact section+rebuild proof / growth+pricing / closer), escalating brevity (81/51/42), Fispoke proof used once only (email_1)
