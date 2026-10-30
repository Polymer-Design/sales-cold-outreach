---
contact_name: Priyam Saraswat
contact_title: Co Founder & CEO
organization: Voosh
icp: startups
apollo_contact_id: 60d9f74355410d0001507f71
score_total: 55
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- `scripts/platform_detect.py --url https://voosh.ai --icp startups` (run 2026-10-30) still returns `platform: unknown` / `track: new_build_track`, but the live site is clearly custom-coded, not a hosted builder: the fetched HTML contains Next.js `_next/` asset paths and the HTTP response headers return `server: Vercel` (source: `curl -sL https://voosh.ai`, `curl -sIL https://voosh.ai`, both run 2026-10-30). Per outreach-email Step 0's custom-code exception, this draft overrides the stale `new_build_track` auto-tag and pitches the monthly plan (subscription_track), not a rebuild.
- Homepage positions Voosh as the "#1 AI Restaurant Operations Automation Platform," automating dispute recovery, finance/reconciliation, reviews, promotions, and store-downtime monitoring across DoorDash, Uber Eats, Grubhub and others; "Dispute Manager" specifically "auto-identif[ies] and appeal[s] disputed orders" (source: WebFetch https://voosh.ai, 2026-10-30).
- Press coverage cited on the homepage for the Dispute Manager launch dates to August 2023 (plus a Nation's Restaurant News piece from September 19, 2023) - over three years old as of today, so this is confirmed stale and NOT used as a current trigger, only as "the homepage still leads with an old feature" (resolves score_notes' "undated...weak credit" flag with an actual date; source: WebFetch https://voosh.ai, 2026-10-30).
- Voosh's own FS/TEC 2026 conference sponsor profile states the company is "Supporting more than 500 restaurant brands and over $1 billion in delivery sales" - a self-reported scale claim on a vendor/sponsor listing, not independently verified, cited as such (source: https://informaconnect.com/fstec/sponsors/voosh/, accessed 2026-10-30). This is the "Sep 2026 event listing" referenced in lead-scoring's score_notes, now pinned to a specific URL and quote.
- Founded 2020 (source: score_notes / lead-scoring Firmo research, reused per outreach-email Step 1).
- Not used: the YC-backing signal. score_notes flags disagreement across sources (one profile says W21, another search found none) and this draft's own check didn't resolve it either way, so no YC claim appears in any email.

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement: custom-coded/Vercel sites fit the monthly plan, framed as ongoing updates not a rebuild). No approved subscription-track case study exists yet (knowledge/case-studies/README.md - library only has Fispoke and Landmark Church, both `track: new_build`), so no case study numbers are borrowed or implied.

## email_1
subject: voosh's vercel build
body: |
  Hey Priyam,

  Voosh pulls restaurant brands out of manual delivery-app busywork, but voosh.ai itself runs on a custom Next.js build on Vercel: any page change still needs an engineer, not a drag-and-drop edit.

  That's the same friction your product removes for clients, now sitting on your own front door.

  The fix isn't a rebuild, it's a monthly plan: a standing team on the site for new pages and edits, billed flat, no project kickoff every time something changes.

  Worth a quick call?

  Ethan

## email_2
subject: 500 brands, one site
body: |
  Hey Priyam,

  Voosh's own FS/TEC sponsor listing puts the company at 500+ restaurant brands and over a billion dollars in delivery sales.

  The homepage still leads with Dispute Manager, a feature that had its press cycle back in 2023. Updating that story shouldn't wait on an engineer's spare hour.

  That's what the monthly plan covers: new sections and proof points added as the story grows, no new project opened each time.

  Does a quick call make sense?

  Ethan

## email_3
subject: the offer still stands
body: |
  Hey Priyam,

  If a site refresh isn't a priority with everything else Voosh has going, no worries, I'll leave it here.

  If it is, a team can be live on your Next.js build within a couple weeks, no rebuild required.

  Still worth a look?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "voosh.ai itself runs on a custom Next.js build on Vercel" (email_1) -> re-fetched independently of the research block's own citation: `curl -sL https://voosh.ai` HTML contains `_next/` asset paths, `curl -sIL https://voosh.ai` returns `server: Vercel`. `scripts/platform_detect.py --url https://voosh.ai --icp startups` still returns `platform: unknown`/`track: new_build_track` (no Next.js/Vercel marker in that script) - correctly treated as a stale auto-tag per outreach-email Step 0's custom-code exception, not blindly followed. Track overridden to subscription_track; all three emails pitch the monthly plan only, no rebuild/Sprint/Core/Custom language anywhere.
- "500+ restaurant brands and over a billion dollars in delivery sales" (email_2) -> re-fetched https://informaconnect.com/fstec/sponsors/voosh/ directly; page states verbatim "Supporting more than 500 restaurant brands and over $1 billion in delivery sales." This pins down score_notes' vague "Sep 2026 event listing" to an exact URL/quote. Flagged in the draft as a self-reported sponsor-listing claim, not independently verified - correctly hedged, not stated as audited fact.
- "Dispute Manager, a feature that had its press cycle back in 2023" (email_2) -> re-fetched https://voosh.ai; homepage's own press references date the Dispute Manager launch coverage to August 2023 and a Nation's Restaurant News piece to September 19, 2023. Correctly used only as "this is old news still leading the homepage," never presented as a current/fresh trigger - matches score_notes' caution that the undated mention in scoring research was "plausible but unconfirmed-date," now resolved with an actual date.
- YC-backing signal (score_notes flags disagreement across sources) -> not cited in any email; correct, since this draft's own research didn't resolve the conflict either (voosh.ai's own footer/badges show a YC logo, but that doesn't settle the W21-vs-no-YC-link discrepancy score_notes raised, so it stays out per the "if proof doesn't exist yet, don't manufacture it" standard).
- Proof point: no case study named anywhere. knowledge/case-studies/ has only Fispoke and Landmark Church, both `status: approved` but `track: new_build` - neither is a subscription-track story, so no case-study numbers are borrowed for this subscription-track pitch (would have failed Check 2's track/proof consistency rule). Instead each email paraphrases knowledge/business-overview.md's monthly-plan section ("fits... other custom-code sites... frame it around ongoing updates and support from a dedicated team, not a rebuild") - no dollar figures, tier names, or hour counts invented or implied.
- scripts/voice_check.py: clean, no banned words/phrases/openers/em dashes (re-ran after the rewrite below).
- word counts: email_1 83w, email_2 78w, email_3 45w - all within band (50-85/40-80/30-60).
- sign-off: plain "Ethan" all three (startups register, correct per voice-and-tone.md); greeting on its own line, blank-line paragraph breaks between beats on all three.
- single CTA per email, rotated phrasing ("Worth a quick call?" / "Does a quick call make sense?" / "Still worth a look?" in email_3's easy-out close) - none of these three exact phrases match any of the five most-recently-committed sibling startup drafts' CTAs (Peakflo: "Sharp pitch.../Make sense to connect?", Visual Feeder: "Make sense to connect?"/"Want to jump on a call?", TenYour: "Want to jump on a call?" x2, Revella Health: "Open to chatting this week?"/"Want to jump on a call?", SMITH&SAINT: "Make sense to connect for 15 minutes?"/"Open to chatting this week?").
- FAIL CAUGHT AND FIXED PRE-SHIP (counts as this draft's one rewrite cycle, not a second pass): first draft of email_1's closing line ("We run ongoing work for custom-coded sites like this: a dedicated team shipping pages and updates on a flat monthly plan...") was nearly the same sentence skeleton as startups--tenyour--joah-spearman.md's email_1 closer ("We run ongoing work for custom-coded sites like yours: a dedicated team handling updates and new pages...") - both lead the same custom-code-site hook into an identical "We run ongoing work for custom-coded sites like X: a dedicated team..." construction, exactly the cross-lead fingerprint voice-and-tone.md's "Surviving AI inbox triage" section warns against. Rewrote to "The fix isn't a rebuild, it's a monthly plan: a standing team on the site for new pages and edits, billed flat, no project kickoff every time something changes." Also caught and fixed in the same pass: email_2's original closer ("A flat monthly plan keeps a dedicated team on your custom-coded site: new sections added...") was a near-duplicate of email_1's own proof-point sentence within this same draft (repeated proof point, fails Check 4 cohesion) - rewrote to "That's what the monthly plan covers: new sections and proof points added as the story grows, no new project opened each time." Email_3 also had "a dedicated team can be live on your Next.js build..." trimmed to "a team can be live..." to avoid a third repetition of "dedicated team" within one thread.
- checked subjects ("voosh's vercel build" / "500 brands, one site" / "the offer still stands") against data/queue/drafts/*.md - no exact duplicates found.
- cohesion: three emails escalate in brevity (83 -> 78 -> 45 words), each leads with a different research fact (own tech stack / self-reported scale stat + stale flagship feature / direct ask with easy out), no repeated proof-point sentence after the rewrite above, no contradictions.
