---
contact_name: Jay Ram
contact_title: Founder, CEO
organization: hud (YC W25)
icp: startups
apollo_contact_id: 68725785dbc55b000183ffd0
score_total: 55
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- Reused from score_notes (lead-scoring, not re-researched): ~10 employees (Apollo org_data; one directory lists 15), founded 2025, YC W25, agentic-eval platform for computer-use agents, works with frontier AI labs; Reach 20/20 (verified email, Founder/CEO title match)
- hud.so returns an HTTP 301 redirect to https://www.hud.ai (observed via WebFetch https://hud.so, 2026-10-30); the org's domain on file is the company's retired former domain, now rebranded to hud.ai
- Re-checked platform at draft time per the lead's "unreachable, re-check next pass" flag: `python scripts/platform_detect.py --url https://hud.so --icp startups` still returns `platform: unreachable` (same as at scoring). Direct `curl -I` against both hud.so and www.hud.ai returns HTTP 429 with `x-vercel-mitigated: challenge` - a Vercel bot-challenge blocking simple HTTP clients, not a dead site. WebFetch's own fetch path got through: the live page shows `/_next/image` asset paths and Vercel-hosted response headers, i.e. a custom Next.js build, not a hosted page builder. Per outreach-email Step 0's custom-code carve-out ("Astro/Vercel/other custom-code sites... pitch the monthly plan anyway"), this draft overrides the stale `new_build_track` default to `subscription_track` (source: `curl -I https://hud.so` and `curl -I https://www.hud.ai`, 2026-10-30; WebFetch https://www.hud.ai/, 2026-10-30)
- Homepage headline "The platform for building RL environments," tagline "Infrastructure for aligning AI to the real world," stats shown: "4,831,034" task runs, "13,764" environments built, "22,297,355" inference calls (source: WebFetch https://www.hud.ai/, 2026-10-30)
- Two partner mentions on the homepage ("Sharpe designs RL environments for coding, AI training, and ML project management using HUD"; "UiPath brought its UI-CUBE enterprise computer-use benchmark onto HUD") are both still marked "Coming soon" (source: WebFetch https://www.hud.ai/, 2026-10-30)
- Careers page lists 37 open roles, including Chief Marketing Officer, Growth Lead, and Marketing & Events Lead among its Operations openings, for a company org_data puts at ~10 people (source: WebFetch https://www.hud.ai/careers, 2026-10-30)
- Mobile PageSpeed on www.hud.ai: performance 42/100, LCP 11.0s, accessibility/best practices/SEO all 100 (source: `scripts/pagespeed_check.py --url https://www.hud.ai --strategy mobile`, run 2026-10-30) - raw fact about their own site, used as supporting evidence only
- Funding checked and NOT cited: a startup.jobs listing claims "$16M raised from top VCs"; vcbacked.co lists a conflicting $500K total with an undated "Series A." No press corroborates either figure, so left out per the no-invented-numbers rule (source: WebSearch "HUD reinforcement learning environments funding raise 2025 2026", 2026-10-30; https://www.vcbacked.co/company/hud-san-francisco)

## proof_used
- knowledge/business-overview.md (Monthly plans / "On Astro, Vercel, or another custom-code site" - plain capability statement; subscription_track has no approved case study yet per knowledge/case-studies/README.md)

## email_1
subject: 37 open roles, one site
body: |
  Hey Jay,

  HUD's careers page lists 37 open roles, including a CMO, a Growth Lead, and a Marketing & Events Lead, for a company still around 10 people.

  Whoever fills those seats inherits a hand-coded Vercel site that takes 11 seconds to paint on mobile, with no one owning it full-time.

  We run ongoing site work for teams on custom-code stacks like yours: new pages and updates without pulling an engineer off the model.

  Open to chatting this week?

  Ethan

## email_2
subject: the coming soon pages
body: |
  Hey Jay,

  HUD rebranded from hud.so to hud.ai, and the Sharpe and UiPath case studies on the new site are both still marked "coming soon."

  That's the kind of page a research-first team doesn't get to first, not for lack of a good story to tell.

  A monthly plan keeps pages like that moving: we write and ship the update, your team just reviews it.

  Worth 15 minutes?

  Ethan

## email_3
subject: last one from me, Jay
body: |
  Hey Jay,

  If hiring a CMO and a Growth Lead is enough to get hud.ai moving once they land, no issue from me.

  If you'd rather they build pipeline than fight with a slow site first, want to grab a call this week?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "HUD's careers page lists 37 open roles, including a CMO, a Growth Lead, and a Marketing & Events Lead" -> re-fetched https://www.hud.ai/careers independently of the drafting fetch: confirmed 37 total open roles, and Operations group contains exactly Chief Marketing Officer (CMO), Growth Lead, and Marketing & Events Lead, verbatim titles
- "~10 employees" -> reused as-is from lead-scoring's score_notes per the standing rule (already-sourced firmographic, not re-researched); draft hedges with "still around 10 people" rather than a bare precise count, consistent with score_notes' own caveat that one directory lists 15
- "a site that's hand-coded... on Vercel" / "custom-code stack" -> re-fetched https://www.hud.ai/ independently: confirmed Next.js markers (`/_next/image`, `dpl_` deployment param, `/_next/` asset paths), no Webflow/WordPress/Wix markers; re-ran `curl -I` against both hud.so and www.hud.ai, both return HTTP 429 with `x-vercel-mitigated: challenge` (Vercel bot-challenge, not a dead site), and `python scripts/platform_detect.py --url https://hud.so --icp startups` still returns `platform: unreachable` - consistent with the research block's explanation
- Track override: per outreach-email Step 0's custom-code carve-out (site is custom Next.js on Vercel, not a hosted builder), this draft correctly overrides the stale `new_build_track` default to `subscription_track` and pitches only a monthly plan / ongoing work in all three emails - no rebuild language anywhere, matching the TenYour precedent for the same carve-out
- "11 seconds to paint on mobile" -> re-ran `scripts/pagespeed_check.py --url https://www.hud.ai --strategy mobile` independently: LCP displayed "11.0 s" on both the drafting run and this verification run (performance score itself varied 42 -> 45 between runs, as PageSpeed runs normally do, but LCP display matched both times and is the only PageSpeed number used in copy) - raw fact about the lead's own site, no comparison to Polymer's benchmark made, compliant regardless of pagespeed-benchmark.md's approved status
- "hud.so" rebrand to "hud.ai" -> re-fetched https://hud.so independently: confirmed HTTP 301 Moved Permanently to https://www.hud.ai/, matches research block
- "the Sharpe and UiPath case studies on the new site are both still marked 'coming soon'" -> re-fetched https://www.hud.ai/ independently: confirmed both partner mentions ("Sharpe designs RL environments for coding, AI training, and ML project management using HUD"; "UiPath brought its UI-CUBE enterprise computer-use benchmark onto HUD") are each marked "Coming soon," verbatim claim, current as of this check
- Funding figures ($16M per a job posting vs. $500K per vcbacked.co) correctly NOT cited anywhere in copy - conflicting and uncorroborated by press, excluded per the no-invented-numbers rule
- Polymer claims ("we run ongoing site work," "a monthly plan keeps pages like that moving: we write and ship the update, your team just reviews it") -> verbatim-compatible with knowledge/business-overview.md's Monthly plans scope ("Grow: Care + new pages, landing pages, CMS work") and the custom-code carve-out language ("frame it around ongoing updates and support from a dedicated team, not a rebuild"); no specific tier name or price cited, so nothing to mismatch; no case study borrowed - knowledge/case-studies/README.md confirms no subscription_track case study exists yet, and fispoke.md (track: new_build) is correctly NOT used here
- `python scripts/voice_check.py`: clean, zero banned words/clichés/openers/em dashes
- Word counts (script-verified): email_1 80, email_2 69, email_3 44 - all within band (50-85/40-80/30-60), aim-under-80 honored on email_1, brevity escalates 80 -> 69 -> 44
- Sign-off: plain "Ethan" all three (startups, cold 1-3), no "God Bless" leakage; single CTA per email; no booking link anywhere
- CTA phrasing rotated: "Open to chatting this week?" (e1), "Worth 15 minutes?" (e2), "want to grab a call this week?" (e3) - three distinct phrasings, none repeated within the sequence
- First sentences (e1: 37 open roles incl. CMO/Growth Lead/Marketing & Events Lead against a ~10-person team; e2: hud.so -> hud.ai rebrand with coming-soon case studies) are both specific combinations impossible to send to any other company
- Checked against recently-committed sibling startup drafts (peakflo, tenyour, visual-feeder, smith-saint) for repeated sentence skeletons/proof-point phrasing/CTA default: no shared proof-point sentence (this lead's proof is a plain monthly-plan capability statement, phrased differently from TenYour's and Visual Feeder's subscription-track copy); email_3 deliberately skips the "I'll leave this/last note" opener used in multiple siblings' closers, opening instead on the easy-out line directly; "Open to chatting this week?" also appears in smith-saint's email_2, but that is one of the skill's five explicitly-sanctioned rotating phrases reused across different leads, not a repeated skeleton within this lead's own sequence
- Cohesion: three different research facts used (hiring/site-ownership gap, rebrand + stalled case-study pages, closer tying back to the hiring angle), no contradiction between emails, proof point (monthly plan) restated with different wording each time it appears, consistent with the established pattern for subscription_track leads with no case study available yet
