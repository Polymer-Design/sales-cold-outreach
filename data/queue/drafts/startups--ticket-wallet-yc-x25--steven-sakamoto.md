---
contact_name: Steven Sakamoto
contact_title: Head of Growth
organization: Ticket Wallet (YC X25)
icp: startups
apollo_person_id: 66c6f1c7377c3900012af9c5
score_total: 56
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-09
---

## research
- Ticket Wallet (YC X25/P25), an AI-powered ticket resale platform, raised a $6M seed in July 2025 with Y Combinator, Seven Seven Six, Palm Drive Capital and Symphony Ventures - the figure is consistent across seedtable.com, trysignalbase.com and a LinkedIn post from the company (one outlier source listed $500K, not used here) (source: all found during lead-scoring 2026-11-09)
- 15 employees per org_data, ~20-person team per YC's own company listing, founded 2023, strong headcount growth (650% 24mo) (source: Apollo org_data + lead-scoring 2026-11-09)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url https://ticketwallet.com --icp startups, scoring 2026-11-09)
- Contact Steven Sakamoto holds the title "Head of Growth" - the exact trigger-signal title from config/icp-startups.yaml (source: Apollo contact record)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused from lead-scoring's score_notes and free Apollo/platform_detect fields only.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: ticket wallet's $6m
body: |
  Hey Steven,

  A $6M seed from Y Combinator and Seven Seven Six is real validation for an AI ticket resale platform, that's the kind of raise that puts more eyes on your site.

  As the one actually running growth, that site is squarely your problem to solve.

  We build sites for growing teams in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who owns ticketwallet.com
body: |
  Hey Steven,

  Running growth after a raise usually means more channels and more campaigns, and less bandwidth left for the one page everything else points back to.

  We can own that piece outright, build it right, and keep it current.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, ticket wallet
body: |
  Hey Steven,

  Last one from me.

  If the site's keeping pace with the raise and the growth, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what a rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "$6M seed, YC + Seven Seven Six, July 2025" -> consistent with score_notes, multiple corroborating sources recorded during lead-scoring; one outlier ($500K) explicitly not used.
- "Head of Growth" title -> matches Apollo contact record exactly.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; track: new_build matches lead's tag.
- research_arm: light confirmed, no new search/fetch calls made for drafting.
- scripts/voice_check.py: clean.
- word counts: email_1 83w, email_2 46w, email_3 39w - all within band.
- sign-off: plain "Ethan" (startups).
- single CTA per email, no booking link, first sentence specific to this company.
- checked against other recent drafts in data/queue/ - distinct hook, no reused phrasing.
- CORRECTION (2026-11-09, cross-batch cohesion re-check): email_2's original draft reused an "at N people, nobody owns the site, we're a dedicated team" skeleton that turned out to repeat across most of today's startups drafts - a real template fingerprint per knowledge/voice-and-tone.md's "Surviving AI inbox triage" section. Rewrote with a distinct structure/angle for this lead. Re-ran scripts/voice_check.py (clean) and word counts (all still within band) after the edit.
