---
contact_name: Mitchell Fogelson
contact_title: CEO | Co-Founder
organization: Beyond Reach Labs (YC W26)
icp: startups
apollo_person_id: 58c1c140f6512541dabc1b51
score_total: 82
tier: hot
research_arm: light
status: pushed
drafted_at: 2026-11-09
pushed_at: 2026-11-13T13:11:34Z
pushed_via_mailbox: ethan@growwithpolymer.com
---

## research
- Beyond Reach Labs was one of 8 startups YC spotlighted at its Winter 2026 demo day, described as solving a "500x power shortage in orbit" via space-based solar power (source: https://www.startuphub.ai/news/claudes-corner-beyond-reach-labs-yc-w2026, and corroborated by https://www.producthunt.com/p/yc/ycombinator-highlighted-8-standout-startups-they-chase-list-winter-2026-demo-day, both found during lead-scoring 2026-11-09)
- Founded 2023, 12 employees, very strong recent headcount growth (24mo +1500% per org_data) - a team scaling fast off real investor attention (source: Apollo org_data, recorded during lead-scoring 2026-11-09)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url https://beyondreachlabs.com --icp startups, run during scoring 2026-11-09)
- research_arm: light per EXP-001 (data/experiments.md) - no new searches run for drafting; all facts above are reused from lead-scoring's score_notes and free Apollo/platform_detect fields, per outreach-email skill Step 1.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track; Beyond Reach Labs is tagged new_build_track, no subscription proof needed)

## email_1
subject: beyond reach labs at yc demo day
body: |
  Hey Mitchell,

  Congrats on the W26 demo day spotlight, solving a 500x power shortage in orbit is the kind of story investors lean into.

  That kind of attention means more eyes on your site than ever, worth having one that matches it.

  We build sites for growing teams in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who's building beyondreachlabs.com
body: |
  Hey Mitchell,

  At 12 people and growing fast, there's usually no one at Beyond Reach Labs whose actual job is the website, it rides on whoever has spare time.

  That's the exact gap we fill: a dedicated team that builds it right the first time and keeps maintaining it, so it's never a side project for your engineers.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, beyond reach labs
body: |
  Hey Mitchell,

  Last one from me.

  If the site's keeping up with the attention you're getting post-demo day, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what fixing that would actually look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "YC W26, one of 8 startups spotlighted at Winter 2026 demo day, 500x power shortage in orbit" -> re-fetched both sources (startuphub.ai, producthunt.com YC thread); both confirm Beyond Reach Labs as YC W26, deployable/expanding solar arrays in orbit, "500x power shortage" framing matches startuphub.ai verbatim. Draft deliberately omits the unconfirmed $ LOI/seed figures (sources disagreed, $175M vs $325M vs $10M seed) - no dollar amount is cited in the email copy.
- Fispoke claims ("moved off Wix", "25-page, CMS-driven build", "SEO built in") -> verbatim-compatible with knowledge/case-studies/fispoke.md; status: approved, track: new_build matches this lead's new_build_track tag. No numbers invented.
- No PageSpeed claim made (light arm, not run during scoring either).
- Track/proof consistency: new_build_track lead, pitched a rebuild, case study new_build-tagged - consistent.
- research_arm: light, confirmed no new WebSearch calls made for drafting (the two WebFetch calls above were fact-check re-verification of score_notes sources, not new research).
- scripts/voice_check.py: clean.
- word counts: email_1 78w, email_2 66w, email_3 41w - all within band.
- sign-off: plain "Ethan" (startups).
- single CTA per email, no booking link, first sentence (demo day spotlight + specific tech description) not sendable to another company.
- checked against other recent drafts in data/queue/ - distinct hook/structure, no reused phrasing.
- HOT TIER: email 1 requires Ethan's review via PR before anything touches Apollo (CLAUDE.md hard rule 5 does not apply - this is cold outreach, not a booking reply - but lead-scoring skill's hot-tier rule does: human review before send).
