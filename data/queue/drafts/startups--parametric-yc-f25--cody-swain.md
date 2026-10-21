---
contact_name: Cody Swain
contact_title: Co-Founder & CEO
organization: Parametric (YC F25)
icp: startups
apollo_contact_id: 699d49f246cb6b0001f8d3b7
score_total: 58
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-21
---

## research
- Parametric builds "Bit," a two-armed mobile robot for warehouse work (box assembly, pack-out, taping, folding), plus "Bastion," a fleet-management app; a homepage chart shows autonomous operation time went from 0% in February 2026 to 75% in July 2026 (source: WebFetch https://parametric.company, 2026-10-21)
- Homepage also cites 130,000 episodes of manipulation data and 3,500+ hours of real-world robot operation; public benefit corp, San Francisco, backed by Y Combinator (source: WebFetch https://parametric.company, 2026-10-21)
- No website builder/framework identifiable from asset paths; no designer/agency credit in the footer (source: WebFetch https://parametric.company, 2026-10-21) - platform stays `unknown` -> new_build_track, no override warranted
- org_data: headcount up ~10x over the trailing 12 months, +83% over 6 months (source: Apollo org_data, lead-scoring score_notes, scored 2026-10-21 - score_notes flagged this may be measured off a very small base, so used here as a real but hedged ("roughly") figure, not an exact multiple)
- Mobile PageSpeed: performance 77/100, LCP 4.1s (source: scripts/pagespeed_check.py --url https://parametric.company --strategy mobile, run 2026-10-21) - not used in copy (autonomy/dataset numbers were the stronger, more specific hooks)

## proof_used
- knowledge/business-overview.md (positioning line: "A fixed price. A live site in weeks. The same team to keep it growing." - plain capability statement; no case study fits a robotics company's situation well enough to use Fispoke's fintech-specific story here)

## email_1
subject: 0% to 75% autonomous
body: |
  Hey Cody,

  Bit went from 0% autonomous in February to 75% in July, a curve most robotics companies would kill to show investors.

  Right now that story lives in a chart on your homepage, not in a build that keeps pace with how fast the product's moving.

  We build fast, fixed-price Webflow sites for growing teams, then keep building after launch: new pages, new proof points, no new project kickoff each time something ships.

  Worth 15 minutes?

  Ethan

## email_2
subject: 130,000 episodes
body: |
  Hey Cody,

  130,000 episodes of manipulation data, 3,500+ hours of real robot time: Parametric's numbers are moving fast, and so is the team, headcount roughly 10x in the past year.

  A site built once falls behind fast at that pace: new deployment numbers, new logos, new milestones all need a home.

  We keep growing teams' marketing sites current, same team, ongoing, no new kickoff required for every update.

  Open to a quick call this week?

  Ethan

## email_3
subject: last one, parametric
body: |
  Hey Cody,

  Last note from me.

  If Bit's story is getting told as fast as it's happening, no worries at all.

  If the site needs a hand keeping up, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-21
notes:
- "Bit went from 0% autonomous in February to 75% in July" -> re-fetched https://parametric.company, homepage chart confirmed verbatim (0% Feb 2026, 75% July 2026)
- "130,000 episodes of manipulation data, 3,500+ hours of real robot time" -> re-fetched, both figures shown on homepage exactly as stated
- "headcount roughly 10x in the past year" -> verified against data/leads/index.jsonl org_data (organization_headcount_twelve_month_growth: 10.0); hedged with "roughly" per score_notes' caution about small-base measurement, not stated as a precise/confirmed multiple
- Polymer positioning line ("fixed price... live site in weeks... keep it growing") -> verbatim-compatible with knowledge/business-overview.md positioning line; no specific tier/price/timeline number named, so no exact-number mismatch risk
- No case study claimed or borrowed; no numbers attributed to Polymer beyond the general positioning line
- Track: platform not identifiable as any hosted builder or known framework from site inspection - `new_build_track` (the scored tag) left as-is, no override warranted here (unlike the Patientdesk.ai lead)
- PageSpeed data gathered but deliberately not used in copy (autonomy/dataset numbers were stronger, more specific hooks) - no stale or unused-claim risk
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 78w, email_2 76w, email_3 35w - all within band
- sign-off: plain "Ethan" (startups)
- single CTA per email, no booking link, first sentence (the autonomy curve) specific to this company and not sendable elsewhere
- checked against other recent drafts in data/queue/ for repeated sentence shapes - distinct hook/structure, no reused phrasing or proof point
