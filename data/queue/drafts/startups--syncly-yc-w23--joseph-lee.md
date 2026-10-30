---
contact_name: Joseph Lee
contact_title: Co-Founder & CEO
organization: Syncly (YC W23)
icp: startups
apollo_contact_id: 66f67d084ae4fa00015cbee7
score_total: 55
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- Firmographic/technographic/intent, reused verbatim from score_notes (lead-scoring, not re-researched): 16 employees, founded 2022, headcount growth plateaued (+5% 6mo, 0% 12mo, +18% 24mo); platform=unknown -> new_build_track; no in-house dev signal, co-founder Alex Hong "leading GTM" is an existing founder role, not an external marketing hire; seed round ($2.6-3.3M, sources conflict) is from the 2023 YC W23 era, correctly scored 0/30 intent for being stale - not cited as current anywhere below.
- `scripts/platform_detect.py --url https://syncly.app --icp startups` re-run 2026-10-30: still returns `platform: unknown` / `new_build_track`, confirming the tag is unchanged.
- Raw page source of https://syncly.app (curl, 2026-10-30) shows `<!-- Made in Framer · framer.com -->` and `<meta name="generator" content="Framer e163439">` - the site is built on Framer, a hosted template builder. Per `icp-startups.yaml`'s `website_platform_routing` (`other`/`unknown` -> `new_build_track`) and `knowledge/business-overview.md`'s "hosted builder -> lead with a new build" rule, this confirms new_build_track is the right pitch (same category as WordPress/Squarespace/Wix), not just a default from an undetected platform.
- The live homepage (https://syncly.app, fetched 2026-10-30) currently positions Syncly as "AI social intelligence for the video era" across three named products: Syncly Social (cross-platform social listening), Syncly Creator (creator discovery/campaign tracking), and Syncly VOC (customer feedback consolidation) - a broader surface than a single product.
- Same homepage prominently features "Syncly MCP is Live" (top banner and header link), describing a remote MCP connector that brings "Syncly's social intelligence into Claude, ChatGPT, and your AI workflows" (source: WebFetch https://syncly.app, 2026-10-30).
- A linked LG Electronics case study on the homepage states: "Syncly streamlined social listening for LG with a 90% faster setup, analyzing 970K+ mentions from 10+ social platforms within days, not months." (source: WebFetch https://syncly.app, 2026-10-30).
- Mobile PageSpeed: performance 77, accessibility 90, best practices 96, SEO 92, LCP 1.1s (source: `scripts/pagespeed_check.py --url https://syncly.app --strategy mobile`, 2026-10-30) - nothing weak enough to use as a hook; logged per Step 1, not used in copy.
- Targeted search for anything newer than the 2023 seed ("Syncly YC W23 Joseph Lee 2025 2026 funding OR launch OR hiring") found no dated 2025/2026 funding or hiring announcement - only secondary profiles describing a January 2025 product pivot (not a primary company announcement, and already 10+ months stale), consistent with score_notes' 0/30 intent score. Not cited as a trigger below (source: WebSearch, 2026-10-30).
- Joseph Lee previously co-founded SUALAB, a Korean machine-vision company Cognex acquired in October 2019; Cognex's own FY2019 10-K puts total consideration at $195M ($171M at closing, $24M deferred) (source: WebFetch https://www.sec.gov/Archives/edgar/data/851205/000085120520000002/cgnx-20191231x10xk.htm, 2026-10-30). Not used in this draft - TenYour's sequence (drafted same batch) already leads with a founder's-prior-exit angle, and a second case study/case-study-style fact about the product itself was stronger and more specific to Syncly.

## proof_used
- knowledge/case-studies/fispoke.md (track: new_build, icp_fit: startups, status: approved) - direct quote from the "Quotable lines" section

## email_1
subject: three products, one template
body: |
  Hey Joseph,

  Syncly now runs three products, Social, Creator, and VOC, plus case studies like LG Electronics, all on a single Framer template site.

  That's a lot of surface for a 16-person team, especially with no one whose job is specifically the website.

  We did something close for Fispoke, another company whose product had outgrown its site: "Polymer took a complex fintech product and turned it into a website that makes institutional buyers take us seriously."

  Worth 15 minutes?

  Ethan

## email_2
subject: syncly mcp is live
body: |
  Hey Joseph,

  Syncly's homepage leads with "Syncly MCP is Live": social intelligence piped straight into Claude and ChatGPT, across three product lines instead of one.

  The site saying all that still runs on a Framer template, the kind anyone uses for a landing page, not something built for a growing product line and case studies like LG Electronics.

  A fixed-price build gets your team a site they can update themselves, live in weeks.

  Up for a quick call?

  Ethan

## email_3
subject: no pressure, joseph
body: |
  Hey Joseph,

  If the current site is keeping pace with three products and a new MCP launch, no worries at all.

  If it's starting to feel like the smallest part of Syncly, worth a quick call before the next product ships?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "Syncly now runs three products, Social, Creator, and VOC" -> re-fetched https://syncly.app independently of the drafting fetch; FAQ confirms exact names "Syncly Social tracks brand conversations across video platforms," "Syncly Creator helps you discover and track creators," "Syncly VOC unifies customer feedback" - three distinct named products, confirmed
- "case studies like LG Electronics" / "Syncly streamlined social listening for LG with a 90% faster setup, analyzing 970K+ mentions from 10+ social platforms within days, not months" -> re-fetched independently, quote confirmed verbatim; draft does not misstate or round the figures, and doesn't attach the LG numbers to Polymer's work (they're cited only as a fact about Syncly's own site/customers)
- "Syncly's homepage leads with 'Syncly MCP is Live'" and "bringing your social intelligence into Claude and ChatGPT" -> re-fetched independently; nav link "Syncly MCP is Live" and product copy "Bring Syncly's social intelligence into Claude, ChatGPT, and your AI workflows through remote MCP" both confirmed verbatim/paraphrase-accurate; draft avoids claiming an unconfirmed launch date ("just shipped") in favor of "leads with... right now," which only asserts the page's current state, not a timing fact
- "all on a single Framer template site" / "still runs on a Framer template" -> verified via raw `curl` of https://syncly.app (not WebFetch, which strips HTML comments) showing `<!-- Made in Framer · framer.com -->` and `<meta name="generator" content="Framer e163439">`; re-ran curl during this check, same result
- Track/proof consistency: platform is Framer, which `icp-startups.yaml`'s `website_platform_routing` buckets under `other`/`unknown` -> `new_build_track` (not one of the three subscription-eligible platforms - only `webflow` maps to subscription_track in that file), consistent with lead-scoring's existing new_build_track tag and with `knowledge/business-overview.md`'s "hosted builder -> lead with a new build" rule. All three emails pitch a build ("fixed-price build," never a monthly plan/retainer), consistent
- Fispoke quote ("Polymer took a complex fintech product and turned it into a website that makes institutional buyers take us seriously") -> checked word-for-word against knowledge/case-studies/fispoke.md's "Quotable lines for emails" section - exact match. File status: approved, track: new_build, icp_fit: startups - matches this lead's track and ICP. No numbers/timeline/price borrowed from the case study beyond the quote itself
- "A fixed-price build gets your team a site they can update themselves, live in weeks" -> consistent with knowledge/business-overview.md's positioning line ("A fixed price. A live site in weeks.") and Sprint/Core/Custom structure; no specific tier, price, or timeline number is cited, so nothing to mismatch
- 16-person team, founded 2022, plateaued growth figures, stale 2023 seed, platform/track, no marketing hire -> all reused verbatim from lead-scoring's score_notes per task instructions, not re-researched; confirmed the stale seed round and the plateaued-growth figures are NOT referenced anywhere in the copy (growth figures are an internal scoring signal, not framed as a selling point or told to the lead; referencing a plateau to the lead directly would read as an odd or backhanded observation, not an on-voice hook)
- Searched for anything newer than the 2023 seed ("Syncly YC W23 Joseph Lee 2025 2026 funding OR launch OR hiring") - found no dated 2025/2026 announcement, only a stale secondary-source mention of a January 2025 pivot; correctly not cited as a trigger, consistent with score_notes' 0/30 intent
- Found and verified (SEC 10-K, $195M Cognex/SUALAB acquisition) but deliberately did not use Joseph Lee's prior-exit history in this draft - TenYour's sequence in the same batch already centers a founder's-prior-company angle, and the Syncly product/platform facts were more specific to this lead; recorded in research for completeness, not claimed in any email
- PageSpeed (77/90/96/92, LCP 1.1s) logged per Step 1, not used as a hook - nothing weak enough to cite, and no comparative Polymer-benchmark claim made
- `python scripts/voice_check.py`: clean, no banned words/phrases/openers/em dashes
- Word counts (re-verified by script): email_1 80 words, email_2 79 words, email_3 42 words - within band (50-85 aim <80, 40-80, 30-60); e1 and e2 sit at the upper edge of their aim/band but not over it
- One CTA per email, no booking link anywhere; sign-off plain "Ethan" x3 (correct, startups/no "God Bless"); greeting on its own line, blank-line paragraph breaks throughout
- First sentences (e1: three named products + case study + platform in one observation; e2: current homepage banner + product-line count) are each impossible to send to another company
- Cohesion: Fispoke quote used once (email_1 only), no repeated proof point; three distinct angles (product/platform surface in e1, the MCP launch specifically in e2, closer in e3); brevity escalates 80 -> 79 -> 42
- Checked against today's other committed startup drafts for skeleton/CTA collision (startups--visual-feeder--yaxi-yang.md, startups--tenyour--joah-spearman.md, startups--smith-saint--madison-smith.md, startups--peakflo-yc-w22--saurabh-chauhan.md): all four lead with some variant of "capability/platform mismatch," but each uses a different sentence shape - this draft's e1 opener is an additive list (three products + case study + platform) rather than SMITH&SAINT's/TenYour's contrastive "does X, but site is Y" construction. CTA phrasing ("Worth 15 minutes?" / "Up for a quick call?") avoids repeating any single sibling's exact three-CTA combination, though individual phrases are reused from the approved rotation list by design

