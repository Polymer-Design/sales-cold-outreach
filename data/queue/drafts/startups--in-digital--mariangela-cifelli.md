---
contact_name: Mariangela Cifelli
contact_title: Founder and CEO
organization: IN Digital
icp: startups
apollo_person_id: 606e0e10fbf951000159665e
score_total: 52
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-09
---

## research
- https://indigital.store throws a TLS/SSL handshake error on fetch (tried 2026-11-09, both during scoring via scripts/platform_detect.py and again directly during drafting) - the site is currently unreachable over HTTPS, a concrete and verifiable fact about their own site today
- 10 employees, founded 2024, strong headcount growth (36%/67%/400% 6/12/24mo), HR industry (source: Apollo org_data, lead-scoring 2026-11-09)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track - a broken/unreachable site is the clearest possible new-build signal)

## email_1
subject: indigital.store isn't loading
body: |
  Hey Mariangela,

  Tried to pull up indigital.store this morning and got a straight SSL error, the site isn't loading securely right now.

  For a company growing headcount 400% over two years, that's the kind of thing prospects notice before they ever talk to you.

  We build sites for growing teams in weeks, then keep building after launch so this doesn't happen again. For Fispoke, a fintech client, we moved them onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who owns indigital.store
body: |
  Hey Mariangela,

  An outage like this is what happens when nobody's actually watching the site full time, which is normal at 10 people moving fast.

  We monitor and maintain what we build, so something like this gets caught before a prospect ever sees it.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, in digital
body: |
  Hey Mariangela,

  Last one from me.

  If the site's back up and it's not a priority, no worries at all.

  If it's not, happy to grab 15 minutes and talk through getting it fixed properly.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "SSL error, site not loading" -> re-verified independently during this fact-check pass (attempted fetch again 2026-11-09), still fails the same way; corroborated by platform_detect.py's independent "unreachable" result from scoring. Two different fetch mechanisms failing the same way is solid grounds for the claim.
- "400% 24mo headcount growth" -> matches org_data exactly.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; track: new_build is clearly correct here.
- scripts/voice_check.py: clean. word counts: 83w/54w/36w - within band.
- sign-off: plain "Ethan". single CTA per email, no booking link, first sentence maximally specific (an observation no other company could share).
- checked against other drafts in data/queue/ - distinct hook, no reused phrasing.
- CORRECTION (2026-11-09, cross-batch cohesion re-check): email_2's original draft reused an "at N people, nobody owns the site, we're a dedicated team" skeleton that turned out to repeat across most of today's startups drafts - a real template fingerprint per knowledge/voice-and-tone.md's "Surviving AI inbox triage" section. Rewrote with a distinct structure/angle for this lead. Re-ran scripts/voice_check.py (clean) and word counts (all still within band) after the edit.
