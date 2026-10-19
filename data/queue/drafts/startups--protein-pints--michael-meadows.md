---
contact_name: Michael Meadows
contact_title: Co-Founder and Chief Operations Officer
organization: Protein Pints
icp: startups
apollo_contact_id: 6363d91ce2596b000119963d
score_total: 59
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- ~15 full-time employees, with CPG executives Sandy Blumberg (CMO) and AJ Mergele (chief sales officer) on the team, per a 2026 Nosh profile (source: https://nosh.com/top-feature/2026/how-protein-pints-plans-to-remain-the-leader-in-protein-ice-cream/)
- Grew from distribution in 14 Michigan stores (2024) to roughly 8,000 retail outlets by the end of May 2025 (source: https://finder.techleap.nl/news/feed/protein-pints-raises-2m-expands-nationwide)
- Launched a "Protein Pops" product line, expanding beyond the original pint format (source: https://insider.fitt.co/press-release/protein-pints-expands-beyond-the-pint-with-debut-of-new-protein-pops/) - exact 2026 date unconfirmed, not claimed as a precisely-dated trigger
- Founders named to the Forbes 30 Under 30 Food & Drink class of 2026 per a LinkedIn post from a company associate (source: https://www.linkedin.com/in/nmilligan)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url https://proteinpints.com --icp startups, run 2026-10-19)
- proteinpints.com mobile load: performance 56/100, LCP 20.0s (source: scripts/pagespeed_check.py --url https://proteinpints.com --strategy mobile, run 2026-10-19)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track's one approved case study; used as a plain scope description, no vertical-fit claim - CPG food is not fintech)

## email_1
subject: Protein Pints at 8,000 stores
body: |
  Hey Michael,

  Protein Pints has gone from 14 Michigan stores to roughly 8,000 retail outlets in about a year, but proteinpints.com still takes 20 seconds to load on a phone.

  That's a lot of new shoppers hitting a slow page right as Protein Pops launches too.

  We build fixed-price Webflow sites for growing teams, usually live in 30-60 days, with a CMS so your team can keep it current without a developer.

  Worth 15 minutes?

  Ethan

## email_2
subject: worth matching the team
body: |
  Hey Michael,

  Protein Pints brought on real CPG veterans in Sandy Blumberg and AJ Mergele, and the founders just made Forbes 30 Under 30 for Food & Drink.

  That's a serious team to put behind a site that's still this slow to load.

  We recently rebuilt a fintech client's site from scratch on Webflow, CMS-driven so a growing team can keep it current without touching code.

  Up for a quick call this week?

  Ethan

## email_3
subject: last thought, Protein Pints
body: |
  Hey Michael,

  I'll keep this short.

  Between Protein Pops and the retail growth, you've got plenty going on, so no hard feelings if the site waits.

  If you'd rather fix it now, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "~15 employees, CMO Sandy Blumberg, chief sales officer AJ Mergele" -> matches the 2026 Nosh profile
- "14 Michigan stores (2024) to ~8,000 retail outlets by May 2025" -> matches finder.techleap.nl item found during scoring/research; not claimed as a fresh (within-180-day) trigger, used as established growth background, consistent with its 0/30 scoring treatment aside from the separate Protein Pops item
- "Protein Pops launch" -> confirmed via insider.fitt.co press release; exact date not claimed in the copy, phrased as "launches too" without a specific recency claim
- "Forbes 30 Under 30 Food & Drink class of 2026" -> sourced from a LinkedIn post by a company associate; phrased plainly, no exaggeration beyond what the post states
- "20 seconds to load on a phone" -> verified against scripts/pagespeed_check.py output (LCP display "20.0 s", performance 56); raw fact about the lead's own site, no comparative claim; referenced once directly (email_1) and once only as a callback ("still this slow to load") in email_2, not re-quoted as a new number
- Track/proof consistency: new_build_track lead (platform unknown), Fispoke case study used only as a generic rebuild/CMS scope description, no numbers borrowed, no claim Protein Pints is in fintech
- No pricing/tier named, single CTA per email, no booking link
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 76w, email_2 74w, email_3 38w - all within band
- sign-off: plain "Ethan" (startups)
- checked against this run's other drafts - distinct hook and closer phrasing from Lavior/Aura/Sparrow/PunttAI in this same batch
