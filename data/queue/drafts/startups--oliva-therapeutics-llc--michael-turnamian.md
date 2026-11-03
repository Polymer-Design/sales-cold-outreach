---
contact_name: Michael Turnamian
contact_title: Co-Founder & Chief Operating Officer
organization: Oliva Therapeutics, LLC
icp: startups
apollo_contact_id: 66f559e54b834e000126a54a
score_total: 57
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-03
---

## research
- Footer credits a third-party template designer, "Designed by Elfatrany"; the "our products" nav item and the footer's Privacy Policy and Terms & Conditions links all point to "#" (source: WebFetch of olivatherapeutics.com, 2026-11-03)
- Hero taglines ("where quality meets innovation," a da Vinci quote) and several stock-looking section photos read as generic filler/template content; some image file paths are dated 2022-2023 (source: same WebFetch)
- A dated news banner: launch of Amerithroid (Thyroid Tablets, USP), URL dated July 2, 2026 (~124 days old as of 2026-11-03) (source: same WebFetch)
- Sells prescription endocrine/cardiovascular products (Amerithroid, Thyquidity, Digoxin Tablets) (source: same WebFetch)
- Site platform WordPress -> new_build_track (source: scripts/platform_detect.py, via lead-scoring)
- org_data: 8 employees, founded 2022, consistently positive/accelerating growth (+11%/+25%/+43%) (source: Apollo org_data, via lead-scoring)

## proof_used
- knowledge/business-overview.md (plain capability statement - platform-matched build, no case study claimed)

## email_1
subject: Designed by Elfatrany
body: |
  Hey Michael,

  Oliva's footer still credits a third-party template designer, "Designed by Elfatrany," and the "our products," Privacy Policy, and Terms & Conditions links all go to "#" instead of a real page.

  For a company selling prescription thyroid and cardiovascular products, that's not the kind of site that reassures a pharmacy or distributor doing due diligence.

  We build custom sites for teams at exactly this stage, real pages, nothing left on a template default.

  Worth 15 minutes?

  Ethan

## email_2
subject: the Amerithroid launch
body: |
  Hey Michael,

  Oliva launched Amerithroid back in July, but the homepage around it still leans on stock photos and filler taglines like "where quality meets innovation."

  A real launch deserves a site that actually backs it up, not generic template copy.

  Want to jump on a call?

  Ethan

## email_3
subject: no pressure, Michael
body: |
  Hey Michael,

  If the current site's working fine for Oliva, no worries at all.

  If not, happy to talk through a real build around what you're actually selling, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- "Designed by Elfatrany" footer credit, dead "#" links (products/Privacy Policy/Terms), stock photos, Amerithroid launch banner dated July 2 2026 -> re-fetched olivatherapeutics.com this pass, confirmed verbatim
- Amerithroid launch date (~124 days old) -> within the 91-180 day decay window, used as a supporting "fresh moment" hook in email_2, not the primary opener (per hook hierarchy, capability-fit/template-defect hook leads in email_1)
- Polymer facts: no case study cited, plain capability statement only; no price/hours cited
- scripts/voice_check.py: clean
- Word counts: 79/48/33 - all within band
- One CTA per email, sign-off "Ethan"
- Cohesion: distinct hooks (template/dead-links / launch-vs-filler-copy / closer), escalating brevity, no repeated proof point
