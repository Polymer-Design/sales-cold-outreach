---
contact_name: Guy Ziv
contact_title: Co-founder & CEO
organization: Sunlight (YC S22)
icp: startups
apollo_contact_id: 6ad589889de1cd00017ef9fa
score_total: 57
tier: warm
research_arm: light
status: ready
drafted_at: 2026-10-21
---

## research
- 15 employees, founded 2021, information services industry; headcount growth +21% (12mo) and +55% (24mo), flat (0%) 6mo (source: Apollo org_data, recorded on the lead during lead-scoring, scored_at 2026-10-21)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url https://sunlightapi.com --icp startups, run during scoring 2026-10-21)
- No marketing/growth hire found in Apollo's contact data for this org; Guy Ziv (Co-founder & CEO) is the only verified decision-maker contact found (source: Apollo people-search enrichment)
- research_arm: light per EXP-001 (data/experiments.md) - no new searches run. All facts above are reused from lead-scoring's score_notes and free Apollo/platform_detect fields only, per outreach-email skill Step 1.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track; Sunlight is tagged new_build_track, no subscription proof needed)

## email_1
subject: sunlight's 55%
body: |
  Hey Guy,

  Sunlight's headcount is up 55% over the last two years, real growth for a YC S22 company still compounding years later.

  Teams growing that fast need a website keeping pace, not revisited once a year.

  We build Webflow sites for growing teams in weeks, then keep building with them after launch. For Fispoke, a fintech client, we moved their site off Wix onto a 25-page, CMS-driven Webflow build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who owns sunlight.com
body: |
  Hey Guy,

  At 15 people, there's usually no one at Sunlight whose job is the website, it just sits on whoever's list has the most room.

  That's exactly the gap we fill. A dedicated team building and maintaining a Webflow site so it's never anyone's spare-time project.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, sunlight
body: |
  Hey Guy,

  Last one from me.

  If Sunlight's site is keeping pace with the growth, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what a rebuild would actually look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-21
notes:
- "15 employees, founded 2021, +21% 12mo / +55% 24mo headcount growth" -> verified against data/leads/index.jsonl org_data for sunlightapi.com (24mo growth 0.5454... rounds to 55%, matches)
- "YC S22" -> matches org label and score_notes
- "no marketing/growth hire found" -> verified: only Apollo contact on this lead is Guy Ziv, Co-founder & CEO; no Head of Marketing/Growth contact exists on the record
- Fispoke claims ("moved off Wix", "25-page, CMS-driven Webflow build", "SEO built in") -> verbatim-compatible with knowledge/case-studies/fispoke.md ("Full rebuild off Wix onto Webflow: up to 25 pages... Built in AEO/SEO/technical SEO and structured data from scratch"); status: approved, track: new_build matches this lead's new_build_track tag. No numbers invented, no quote misattributed.
- No PageSpeed claim made (light arm skipped it per Step 1 - scoring didn't run it either, nothing to cite)
- Track/proof consistency: new_build_track lead, pitched a rebuild (not a monthly plan), case study is new_build-tagged - consistent
- research_arm: light recorded in frontmatter; confirmed no new WebSearch/WebFetch calls were made for this draft, only org_data/platform_detect/Apollo contact fields already on the lead record
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 78w, email_2 55w, email_3 38w - all within band
- sign-off: plain "Ethan" (startups)
- single CTA per email, no booking link, first sentence (the 55% headcount stat) is specific to this company and not sendable elsewhere
- checked against other recent drafts in data/queue/ for repeated sentence shapes - distinct hook and structure, no reused phrasing
