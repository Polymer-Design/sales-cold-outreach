---
contact_name: Sam Edwards
contact_title: Chief Operating Officer
organization: SendtoWin
icp: startups
apollo_contact_id: 6accf5642b32660001eb0015
score_total: 57
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-21
---

## research
- SendtoWin is an outsourced B2B outbound agency (email + LinkedIn campaigns); launched "SendTech," a self-serve deliverability/inbox-warming product, via a press release dated 2026-09-28 - about 3 weeks before this draft (source: WebFetch https://sendtowin.com, 2026-10-21; press-release URL date)
- Homepage also cites $2.6B in client pipeline generated, $380M in client revenue, #254 on the Inc. 5000 (press release dated 2026-08-11), and Apollo's "Partner of the Year" (source: WebFetch https://sendtowin.com, 2026-10-21)
- No website builder/CMS identifiable from asset paths (relative paths like `./contact-form`); no designer/agency credit in the footer (source: WebFetch https://sendtowin.com, 2026-10-21) - platform stays `unknown` -> new_build_track, no override warranted
- Mobile PageSpeed: performance 77/100, LCP 5.4s (source: scripts/pagespeed_check.py --url https://sendtowin.com --strategy mobile, run 2026-10-21) - raw fact about their own site only
- Note: lead-scoring's own search (2026-10-20) found nothing company-specific due to name collisions with unrelated companies (SendHub, Sendwithus); the SendTech launch date above was found via this draft's own site visit, not a web search, and is a genuinely fresh (within 30 days) trigger not previously credited at scoring

## proof_used
- knowledge/business-overview.md (positioning line: "A fixed price. A live site in weeks. The same team to keep it growing." - plain capability statement; no approved case study fits an outbound-agency client well enough to use Fispoke's fintech story here)

## email_1
subject: the sendtech launch
body: |
  Hey Sam,

  SendTech launched three weeks ago, the first time SendtoWin's agency work turned into a second, self-serve product line.

  Right now it's another section bolted onto the same homepage that's also selling $2.6B in generated pipeline and an Inc. 5000 ranking, three different stories competing for the same scroll.

  We build fast, fixed-price Webflow sites, so a growing company's site can carry more than one product story without getting crowded.

  Worth 15 minutes?

  Ethan

## email_2
subject: 5.4 seconds, ironically
body: |
  Hey Sam,

  SendtoWin's homepage takes 5.4 seconds to load on mobile, a rough look from a team that sells deliverability and response rates.

  Prospects clicking in from a LinkedIn DM or a cold email, exactly the channels you run for clients, are the ones most likely to bounce before it loads.

  We keep growing teams' sites fast and current, same team, ongoing, no new project kickoff for every update.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, sendtowin
body: |
  Hey Sam,

  Last note from me.

  If the site's keeping pace with SendTech and everything else SendtoWin's shipping, no worries at all.

  If it could use a faster, more current home, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-21
notes:
- "SendTech launched three weeks ago" -> re-fetched https://sendtowin.com, press release confirmed dated 2026-09-28, 23 days before this check (2026-10-21) - "three weeks" is an honest rounding, not an overclaim
- "$2.6B in generated pipeline" and "Inc. 5000" ranking -> re-fetched, both confirmed verbatim on the homepage
- "5.4 seconds to load on mobile" -> verified against scripts/pagespeed_check.py output (largest_contentful_paint display "5.4 s", mobile strategy) - raw fact about the lead's own site, no comparative claim
- Polymer positioning line ("fixed price... live site in weeks... keep it growing") -> verbatim-compatible with knowledge/business-overview.md; no specific tier/price named
- No case study claimed or borrowed; no Polymer numbers beyond the general positioning line
- Track: no hosted-builder or known framework signature found on the live site - `new_build_track` (the scored tag) left as-is
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 75w, email_2 77w, email_3 37w - all within band
- sign-off: plain "Ethan" (startups)
- single CTA per email, no booking link, first sentence (the SendTech launch) specific to this company and not sendable elsewhere
- checked against other recent drafts in data/queue/ for repeated sentence shapes - distinct hook/structure; PageSpeed stat used once (email_2 only), not the opener
