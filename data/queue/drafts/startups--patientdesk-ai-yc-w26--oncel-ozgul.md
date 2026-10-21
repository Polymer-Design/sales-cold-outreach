---
contact_name: Oncel Ozgul
contact_title: Co-founder & CEO
organization: Patientdesk.ai (YC W26)
icp: startups
apollo_contact_id: 69881bc5e6e66d0001b4969a
score_total: 60
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-21
---

## research
- Homepage banner reads "We raised $3.8M to modernize dentistry", linking to the YC Winter 2026 batch - confirms the figure that was conflicting across secondary sources during scoring (source: WebFetch https://patientdesk.ai, 2026-10-21)
- Product is an AI platform bundling a practice-management system, AI receptionist, booking portal, and marketing tools (lead gen, review automation, an "AI SEO bot") for dental practices; homepage shows 15 customer logos and integrations with 8 PMS products (source: WebFetch https://patientdesk.ai, 2026-10-21)
- Site asset paths (`/_next/image`) indicate a Next.js build, not a hosted builder - per outreach-email skill Step 0, this overrides the stale `new_build_track` auto-tag (platform_detect.py has no Next.js/Vercel marker yet) to **subscription_track**: knowledge/business-overview.md explicitly extends the monthly-plan offer to "Astro sites, Vercel sites, and other custom-code sites." No designer/agency credit found in the footer. (source: WebFetch https://patientdesk.ai, 2026-10-21)
- org_data: headcount up 100% over the trailing 12 months (source: Apollo org_data, lead-scoring score_notes, scored 2026-10-21)
- Mobile PageSpeed: performance 83/100, LCP 4.4s (source: scripts/pagespeed_check.py --url https://patientdesk.ai --strategy mobile, run 2026-10-21) - cited as a raw fact about their own site only, no comparative claim
- Note: the $3.8M raise is real but ~8 months old as of this scoring date, so NOT presented below as a fresh/recent trigger - used only as present-tense color about what's currently on their homepage, consistent with how lead-scoring scored Step 4 intent as 0 (decayed)

## proof_used
- knowledge/business-overview.md#monthly-plans (subscription_track override per above; no approved case study is subscription-tagged yet, so a plain capability statement only, per the "no proof yet, write without proof" rule - no tier/price named)

## email_1
subject: patientdesk's $3.8m banner
body: |
  Hey Oncel,

  Patientdesk's homepage still leads with the $3.8M raise banner, a strong flex, but everything that's happened since (new PMS integrations, more clinic logos) has to get squeezed in around it.

  That's the kind of thing that piles up fast on a site nobody owns full time.

  We run ongoing support for growing teams' marketing sites: new pages, fresh proof points, integration updates, no new kickoff required.

  Worth 15 minutes?

  Ethan

## email_2
subject: patientdesk's 100%
body: |
  Hey Oncel,

  Patientdesk's headcount is up 100% over the past year, Y Combinator growth pace.

  Worth noting: the homepage takes 4.4 seconds to load on mobile, where most of your dental-clinic buyers will be checking you out between patients.

  We keep growing teams' sites current without a new project every time something changes: new integrations, new logos, updated numbers.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, patientdesk
body: |
  Hey Oncel,

  Last note from me.

  If the site's keeping up with everything Patientdesk's shipping, no worries at all.

  If it'd help to have a dedicated team keeping it current instead, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-21
notes:
- "$3.8M raise banner on the homepage" -> re-fetched https://patientdesk.ai, banner text confirmed verbatim ("We raised $3.8M to modernize dentistry"), linked to the YC W26 batch page - primary source, not a secondary aggregator
- Not framed as a recent/fresh trigger anywhere in the copy (no "congrats", no "just raised" language) - correctly treated as present-tense site content only, consistent with lead-scoring having decayed this to 0 for intent
- "new PMS integrations, more clinic logos" -> re-fetched homepage, confirms 15 customer logos and 8 PMS integrations shown; phrased generally ("has to get squeezed in around it") rather than claiming a specific count changed, so no overclaim
- "headcount up 100% over the past year" -> verified against data/leads/index.jsonl org_data for patientdesk.ai (organization_headcount_twelve_month_growth: 1.0)
- "4.4 seconds to load on mobile" -> verified against scripts/pagespeed_check.py output (largest_contentful_paint display "4.4 s", mobile strategy) - raw fact about the lead's own site, no comparative claim to Polymer's own benchmark
- Track override to subscription_track: re-confirmed `/_next/image` asset paths on the live site (Next.js signature), no hosted-builder markers found - knowledge/business-overview.md "On Astro, Vercel, or another custom-code site: a monthly plan still fits" supports the override; copy pitches ongoing support only, never a rebuild, and names no case study or specific tier/price (none approved for subscription_track yet)
- No pricing number or tier named anywhere in the sequence
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 72w, email_2 67w, email_3 37w - all within band
- sign-off: plain "Ethan" (startups)
- single CTA per email, no booking link, first sentence specific to this lead (their own banner copy) and not sendable to another company
- checked against other recent drafts in data/queue/ for repeated sentence shapes - distinct hook/structure, no reused phrasing; PageSpeed stat used once (email_2 only, as supporting evidence not the opener)
