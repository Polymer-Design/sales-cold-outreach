---
contact_name: Nerses Ohanyan
contact_title: Co-Founder & CEO
organization: DeepSat
icp: startups
apollo_contact_id: 66f23ad9ab3e780001d2e47d
score_total: 70
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-18
---

## research
- Nav has a "Newsroom" link with no posts, dates, or articles behind it (source: WebFetch of
  deepsat.com, 2026-11-18)
- The Early Access Program page invites applications to "Cluster-1" but gives no pricing,
  eligibility, or timeline (source: WebFetch of deepsat.com, 2026-11-18)
- Stats row cites "over 1.2 million debris pieces" and "1,100 collision-avoidance maneuvers a
  day by one constellation" with no source or attribution for either number (source: WebFetch
  of deepsat.com, 2026-11-18)
- LEO satellite space-intelligence company, NVIDIA/Redwire-backed per site branding; org_data
  12 employees, founded 2024, strong growth (83%/12mo, 267%/24mo headcount) (source: Apollo
  org_data + site branding, via lead-scoring score_notes, 2026-11-17)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, startups icp_fit) - "Polymer took a complex
  fintech product and turned it into a website that makes institutional buyers take us
  seriously." (Nathan Berk, Co-Founder & CTO, Fispoke)

## email_1
subject: the empty newsroom
body: |
  Hey Nerses,

  DeepSat's nav has a Newsroom link with nothing behind it, and the Early Access page
  inviting people into Cluster-1 doesn't say what they're signing up for, no pricing, no
  timeline, no eligibility.

  For a site explaining space intelligence to maritime and defense buyers, that gap matters
  more than most. We built Fispoke's fintech site with the technical depth and structured
  content their institutional buyers needed to take them seriously.

  Want to jump on a call about what that'd look like for DeepSat?

  Ethan

## email_2
subject: the uncited 1,100
body: |
  Hey Nerses,

  Your stats row throws out real numbers, 1.2 million debris pieces, 1,100 maneuvers a day,
  with no source attached to either one. For a technical buyer, an unsourced stat reads like
  marketing copy, which undercuts a genuinely technical product.

  We build sourcing and citations into a site like that from the start, not bolted on after.

  Open to chatting this week?

  Ethan

## email_3
subject: no pressure, Nerses
body: |
  Hey Nerses,

  If the site's already on your radar for a rework, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- Empty Newsroom nav link, Early Access/Cluster-1 page with no pricing/eligibility/timeline,
  and the two uncited stats (1.2M debris pieces, 1,100 maneuvers/day) -> verified against
  same-session WebFetch of deepsat.com (2026-11-18); not re-fetched again
- Polymer facts: Fispoke quote matches knowledge/case-studies/fispoke.md verbatim (Nathan
  Berk, Co-Founder & CTO); track=new_build matches this lead's new_build_track; no numbers
  borrowed from the quote, it's used as-is
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 85/64/28 - all within band
- One CTA per email, sign-off plain "Ethan" (startups, no "God Bless")
- Cohesion: distinct hooks (empty Newsroom/vague Early Access page, uncited stats row,
  closer), escalating brevity, no repeated proof point (Fispoke quote only in email_1)
