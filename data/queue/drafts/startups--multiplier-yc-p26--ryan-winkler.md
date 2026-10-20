---
contact_name: Ryan Winkler
contact_title: Co-Founder, COO
organization: Multiplier (YC P26)
icp: startups
apollo_contact_id: 5ffbe3bac8d0ed000104e256
score_total: 66
tier: warm
status: ready
drafted_at: 2026-10-20
---

## research
- Multiplier (formerly WithAI Research) raised a $6M seed round led by Lux Capital, with Y Combinator, GoAhead Ventures, Rebel Fund, General Advance, Unpopular Ventures and Amino Capital participating - reported by New York Business Journal 2026-08-26 (source: https://aiunderstanding.org/news/new-york-business-journal-reports-multiplier-raises-6-million-for-asset-manager-ai, via WebSearch 2026-10-20)
- Live with six hedge funds, reportedly over $100k ARR within three months of launch (source: YC company profile, via WebSearch 2026-10-20)
- Site is a single custom-platform pitch page: "security, infrastructure, and white-glove service" for asset managers, with two named client testimonials (Michael Siliciano, Co-founder Verso LP; Scott Hobart, CIO Mercator Partners) but no explanation of pricing or how a new client gets started (source: WebFetch https://multiplier.ai, 2026-10-20)
- Mobile PageSpeed: performance 79/100, LCP 4.5s (source: scripts/pagespeed_check.py --url https://multiplier.ai --strategy mobile, run 2026-10-20)
- Site platform: no builder marker detected, confirmed via scripts/platform_detect.py --url https://multiplier.ai --icp startups (2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: multiplier's $6M and one page
body: |
  Hey Ryan,

  Multiplier closed $6M led by Lux Capital in August and you're already live with six hedge funds, the kind of traction that outgrows a single pitch page fast, especially one with no explanation of how a new client actually gets started.

  We rebuilt a fintech company's site into a 25-page CMS-driven build with SEO and structured data from scratch, the same gap between traction and story.

  Want to jump on a call?

  Ethan

## email_2
subject: six funds in, one page
body: |
  Hey Ryan,

  Asset managers doing diligence on Multiplier before a call are working off one page and two quotes right now. A credible site with its own pages for product, security, and process would carry more of that conversation before you're even on the phone.

  We build Webflow sites a founder's own team can update without a developer.

  Make sense to connect this week?

  Ethan

## email_3
subject: closing the loop
body: |
  Hey Ryan,

  Last note from me. If the site isn't a priority while you're closing funds, no worries.

  If it's quietly underselling the traction you already have, worth a quick call?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- "Multiplier closed $6M led by Lux Capital in August" -> verified against New York Business Journal report dated 2026-08-26 (via WebSearch 2026-10-20), naming Lux Capital as lead with YC, GoAhead Ventures, Rebel Fund, General Advance, Unpopular Ventures, Amino Capital participating
- "you're already live with six hedge funds" -> verified against Multiplier's YC company profile (via WebSearch 2026-10-20), which states it is live with six hedge funds
- "a single pitch page... no explanation of how a new client actually gets started" -> verified against WebFetch of https://multiplier.ai, 2026-10-20: one page describing the platform and two named testimonials (Michael Siliciano/Verso LP, Scott Hobart/Mercator Partners), no pricing, onboarding, or next-steps content found
- "a 25-page CMS-driven build with SEO and structured data from scratch" -> matches knowledge/case-studies/fispoke.md (status: approved, track: new_build, matches this lead's new_build_track); framed as "a fintech company," no claim that Multiplier's situation matches Fispoke's Wix migration
- "We build Webflow sites a founder's own team can update without a developer" -> matches knowledge/business-overview.md "What we sell to each ICP" general capability claim, not reusing Fispoke's specific numbers a second time
- did not cite the 4.5s mobile PageSpeed figure in either email - site loads reasonably fast, so it's not a usable hook here; left out rather than forced in
- voice_check.py: clean
- word counts: email_1 75w, email_2 65w, email_3 32w - all within band
- sign-off: plain "Ethan", no "God Bless" (startups)
- CTA phrasing cross-checked against this batch's other drafts ("Worth 15 minutes?" / "Up for a quick call?" used in the Aibrary draft) - revised to "Want to jump on a call?", "Make sense to connect this week?", "worth a quick call?" to avoid repeating the same CTA phrase across leads in the same batch (see knowledge/voice-and-tone.md "Surviving AI inbox triage")
- email_3's subject was also changed from "last one on this" to "closing the loop" after spotting that generic closer subject repeated verbatim in the Aibrary draft in the same batch
