---
contact_name: Kailin Spencer
contact_title: COO & Co-Founder
organization: Brand Heist
icp: startups
apollo_contact_id: 60f49bd7f0e03f00018cbf6c
score_total: 60
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T13:59:34Z
mailbox: ehoover@growwithpolymer.com
apollo_contact_id_resolved: 6ae4a2c4900eda001ca9f785
---

## research
- org_data (Apollo enrichment): 10 employees (lower-mid band), marketing/advertising agency vertical (source: lead's score_notes)
- Headcount growth 6mo=0%/12mo=71.4%/24mo=200% - strong growth despite a small team (source: lead's score_notes)
- Platform: confirmed Wix (scripts/platform_detect.py) -> new_build_track (source: lead's score_notes)
- No in-house design/dev signal found (source: lead's score_notes)

## proof_used
- knowledge/case-studies/fispoke.md (new_build track fit - Wix migration precedent; the SEO/structured-data-from-scratch detail lands harder on a marketing/advertising agency whose own site should be the proof of what it sells clients)

## email_1
subject: brand heist's wix problem
body: |
  Hey Kailin,

  Brand Heist builds brand and marketing campaigns for clients, and the site making that pitch runs on Wix.

  Headcount grew 71% over the past year on a 10-person team, fast growth for a team that size.

  We moved Fispoke off Wix onto a CMS-driven Webflow build with real SEO and structured data built in from scratch, the kind of foundation an agency selling marketing results needs under its own pitch.

  Open to chatting this week?

  Ethan

## email_2
subject: no bandwidth for a rebuild
body: |
  Hey Kailin,

  Agencies this size usually have someone in-house for design or dev. Brand Heist doesn't, at least not on the public record, which means the site improvements probably keep losing out to client deadlines.

  A fixed-price build, live in weeks, fixes that without adding headcount or pulling anyone off paying work.

  Up for a quick call?

  Ethan

## email_3
subject: no pressure either way
body: |
  Hey Kailin,

  Last try on this, then I'll leave it alone.

  If the Wix site isn't a priority with headcount growing like this, no worries at all.

  If it is, I'm around this week to talk through what a rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "marketing/advertising agency", "10-person team" -> matches lead's score_notes (org_data vertical + employee band), no numbers added beyond what's there
- "Headcount grew 71% over the past year" -> matches score_notes 12mo=71.4%; rounded, not inflated; 6mo=0%/24mo=200% not cited (not needed, avoids overclaiming a steady trend from a single noisy window)
- "the site making that pitch runs on Wix" -> matches score_notes confirmed via scripts/platform_detect.py -> new_build_track; track consistency OK, no monthly-plan pitch made
- Fispoke proof ("moved Fispoke off Wix onto a CMS-driven Webflow build with real SEO and structured data built in from scratch") -> re-checked against knowledge/case-studies/fispoke.md (status: approved): matches "Full rebuild off Wix onto Webflow... Built in AEO/SEO/technical SEO and structured data from scratch (the old site had none)" verbatim-compatible; no page count or client-quote numbers borrowed; case study tagged track: new_build, matches this lead's new_build_track
- "no in-house design/dev signal" claim in email_2 hedged as "at least not on the public record" rather than stated as settled fact -> matches score_notes' own hedge ("no in-house design/dev signal found", not "confirmed absence")
- "fixed-price build, live in weeks" -> matches knowledge/business-overview.md positioning line, no dollar figure or timeline number invented
- scripts/voice_check.py: clean (no banned words/clichés/openers, no em dashes)
- word counts: 78 / 58 / 44 - all within band (e1 50-85, e2 40-80, e3 30-60)
- sign-off: plain "Ethan" all three (startups, correct), one CTA per email, no booking link anywhere
- Cohesion: Fispoke proof appears once (email_1) only; email_2 pivots to a plain capability statement, no repeated proof or contradiction; brevity escalates 78 -> 58 -> 44
- Checked against recently-committed light-arm/Wix new_build_track sibling drafts in data/queue/drafts/ (cleva, soarce, leo-ai) to avoid duplicate fingerprints: CTA phrasing ("Open to chatting this week?" / "Up for a quick call?") doesn't reuse their "Worth 15 minutes..." / "Make sense to connect?" / "Want to jump on a call?"; email_3 opener revised from an initial draft ("Quick last note on this.") to "Last try on this, then I'll leave it alone." after flagging it as too close to Cleva's "Last note from me on this one."; subjects ("brand heist's wix problem", "no bandwidth for a rebuild", "no pressure either way") don't reuse the "last one, {org}" pattern seen twice already in the batch; email_1's opening sentence construction (naming the org directly) differs structurally from the abstract-noun-phrase openers used in the Cleva/Soarce/Leo drafts
