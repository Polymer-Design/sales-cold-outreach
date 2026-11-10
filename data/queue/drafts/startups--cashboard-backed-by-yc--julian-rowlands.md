---
contact_name: Julian Rowlands
contact_title: Founder & CEO @ Cashboard
organization: Cashboard (backed by YC)
icp: startups
apollo_person_id: 66f0955476c76500010859ee
score_total: 66
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-09
pushed_at: 2026-11-10
pushed_via_mailbox: ehoover@growwithpolymer.com
apollo_contact_id_pushed: 6af3181c1b60e3001478c949
---

## research
- Homepage banner (fetched 2026-11-09, https://cashboard.co): "$5M seed round led by FINTOP" - this is the homepage's own stated figure; it does NOT mention Y Combinator anywhere, so the org label's "backed by YC" and a third-party aggregator's claim of YC involvement are not used as facts in this draft
- Homepage product description: AI-native budgeting/FP&A tool for finance teams, connects to Claude/ChatGPT/Gemini/Copilot, builds a budget from company data via MCP-based import, Excel-style formulas with traceable "receipts" per number, SOC 2 Type II (source: https://cashboard.co, fetched 2026-11-09)
- 14 employees, founded 2022, strong headcount growth (22%/83%/450% 6/12/24mo) (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as unknown -> new_build_track; homepage markup gave no clear hosted-builder or custom-framework signal either way, so the original tag stands (source: scripts/platform_detect.py --url https://cashboard.co --icp startups, run during scoring 2026-11-09, plus homepage fetch 2026-11-09)
- PageSpeed mobile checked (scripts/pagespeed_check.py, run 2026-11-09): performance 88/100, LCP 1.0s - site is already fast, not used as a hook or complaint since there's nothing weak to point to

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track; also a genuine fintech-to-fintech vertical match, not just the only option)

## email_1
subject: cashboard's $5m
body: |
  Hey Julian,

  Congrats on the $5M seed from FINTOP, a fintech-focused investor backing an AI-native budgeting tool is a strong signal for what you're building.

  Finance teams evaluating a new vendor size up the site before the product, especially for something touching their numbers.

  We've built for that exact audience before. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven site that makes institutional buyers take them seriously.

  Worth 15 minutes?

  Ethan

## email_2
subject: who owns cashboard.co
body: |
  Hey Julian,

  Finance teams will look harder at Cashboard's site now that there's a real seed round behind the name, and most 14-person teams haven't had anyone dedicated to that page since launch.

  We can be the team that is, building it right once and keeping it current as the product changes.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, cashboard
body: |
  Hey Julian,

  Last one from me.

  If the site's already doing its job convincing finance teams to trust a new vendor, no worries at all.

  If it's not quite there yet, happy to grab 15 minutes and talk through what would help.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "$5M seed led by FINTOP" -> re-fetched https://cashboard.co directly; homepage banner confirms this verbatim. Correctly dropped the "backed by YC" framing from the email since the primary source (the company's own site) makes no YC claim at all - only a third-party aggregator did, and it's not used.
- Homepage product claims (AI-native budgeting, MCP import, Excel formulas, SOC 2 Type II) -> re-fetched, all confirmed on-page.
- Fispoke claims ("moved off Wix", "25-page, CMS-driven", "institutional buyers take us seriously") -> verbatim-compatible with knowledge/case-studies/fispoke.md (the "institutional buyers" line is the client quote, attributed correctly - not claimed as a Polymer stat); status: approved, track: new_build matches lead's new_build_track tag; genuine fintech-to-fintech vertical match, not forced.
- PageSpeed (88/100, LCP 1.0s) -> checked but deliberately not used in the copy since the site is already fast, nothing to cite as a problem; no comparative claim made either way.
- Track: kept new_build_track - homepage gave no clear custom-code or hosted-builder signal, so no override made (unlike Didit); honest "no signal either way" rather than a guess.
- scripts/voice_check.py: clean.
- word counts: email_1 77w, email_2 51w, email_3 43w - all within band.
- sign-off: plain "Ethan" (startups).
- single CTA per email, no booking link, first sentence ($5M FINTOP seed) specific to this company, not sendable elsewhere.
- checked against other recent drafts in data/queue/ (Beyond Reach Labs, Didit) - distinct hook (funding + vertical-trust angle), no reused phrasing.
- CORRECTION (2026-11-09, cross-batch cohesion re-check): email_2's original draft reused an "at N people, nobody owns the site, we're a dedicated team" skeleton that turned out to repeat across most of today's startups drafts - a real template fingerprint per knowledge/voice-and-tone.md's "Surviving AI inbox triage" section. Rewrote with a distinct structure/angle for this lead. Re-ran scripts/voice_check.py (clean) and word counts (all still within band) after the edit.
