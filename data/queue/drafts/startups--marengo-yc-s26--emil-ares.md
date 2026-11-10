---
contact_name: Emil Ares
contact_title: CEO
organization: Marengo (YC S26)
icp: startups
apollo_person_id: 65efd192dc3db80007510afd
score_total: 59
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-09
pushed_at: 2026-11-10
pushed_via_mailbox: ethan@growwithpolymer.com
apollo_contact_id_pushed: 6af318203981a100103513e6
---

## research
- Homepage (fetched 2026-11-09, https://marengox.com): positions Marengo as "the engineering firm reimagined for speed" for data-center development, claiming pre-construction design drops from 10-12 months to 5-6 months, and exploring 1,000+ design concepts in parallel versus 3-4 the traditional way
- Same page confirms backers: Y Combinator, a16z Scout Fund, and Index Ventures Scout Fund (corroborates the YC S26 batch tag and the scout-fund detail found in secondary sources during lead-scoring)
- 5 employees, founded 2026 (the company itself is only months old) (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as unknown -> new_build_track; homepage gave no clear hosted-builder or custom-framework signal, so the original tag stands (source: scripts/platform_detect.py --url https://marengox.com --icp startups, scoring 2026-11-09; homepage fetch 2026-11-09)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: marengo's 5-6 months
body: |
  Hey Emil,

  Cutting data center pre-construction design from 10-12 months down to 5-6 is the kind of speed claim that makes a YC batch take notice.

  A company built around speed shouldn't be stuck waiting months on its own website.

  We build sites for growing teams in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who's building marengox.com
body: |
  Hey Emil,

  Five people building an engineering firm this ambitious means the website waits for whatever time's left, which in practice is none.

  We can build it fast enough to actually match the pace of everything else happening at Marengo.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, marengo
body: |
  Hey Emil,

  Last one from me.

  If the site's not a priority this early, no worries at all.

  If it is, happy to grab 15 minutes and talk through what a quick build would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "10-12 months to 5-6 months" / "1,000+ concepts vs 3-4" -> both confirmed verbatim on https://marengox.com (fetched 2026-11-09 for drafting, re-examined against the draft copy here); these are facts about Marengo's own claims about their own product, not about Polymer, so no knowledge/ cross-check needed.
- "Y Combinator, a16z Scout Fund, Index Ventures Scout Fund" backers -> confirmed on the same homepage, corroborates (rather than contradicts) the secondary-source detail from lead-scoring; no specific dollar amount cited in the email since that remained unconfirmed/conflicting across sources.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; track: new_build matches lead's new_build_track tag.
- scripts/voice_check.py: clean.
- word counts: email_1 76w, email_2 54w, email_3 37w - all within band.
- sign-off: plain "Ethan" (startups).
- single CTA per email, no booking link, first sentence (the 10-12 to 5-6 month claim) specific to this company.
- checked against other recent drafts in data/queue/ - distinct hook (their own speed-claim turned back on them), no reused phrasing.
- CORRECTION (2026-11-09, cross-batch cohesion re-check): email_2's original draft reused an "at N people, nobody owns the site, we're a dedicated team" skeleton that turned out to repeat across most of today's startups drafts - a real template fingerprint per knowledge/voice-and-tone.md's "Surviving AI inbox triage" section. Rewrote with a distinct structure/angle for this lead. Re-ran scripts/voice_check.py (clean) and word counts (all still within band) after the edit.
