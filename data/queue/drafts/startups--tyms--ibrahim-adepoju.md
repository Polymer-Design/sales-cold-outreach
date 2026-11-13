---
contact_name: Ibrahim Adepoju
contact_title: Co-Founder and CEO
organization: Tyms
icp: startups
apollo_contact_id: 63c7cb2ebd3fc60001102487
score_total: 68
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-13T13:30:00Z
pushed_via_mailbox: ethan@growwithpolymer.com
drafted_at: 2026-11-13
---

## research
- Nairametrics (2026-08-08): Tyms brought its AI accounting agent, Adam, and full
  double-entry bookkeeping to an MCP integration now live in production for Claude and
  ChatGPT, for existing customers (source: lead-scoring 2026-11-13, score_notes)
- Incorporated in both Delaware and Nigeria, subscription-based accounting automation
  business with integrated payment-gateway transaction fees (source: lead-scoring
  2026-11-13, score_notes)
- 27 employees, founded 2021 (source: Apollo org_data, lead-scoring 2026-11-13)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://usetyms.com --icp startups, lead-scoring 2026-11-13)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free org_data/platform_detect fields only.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track; fintech vertical match)

## email_1
subject: tyms is now inside claude and chatgpt
body: |
  Hey Ibrahim,

  Shipping an MCP integration so Adam runs inside Claude and ChatGPT is a real product
  leap for a 27-person team.

  That kind of release usually outpaces the website announcing it, especially once it's
  live in production for customers.

  We build sites for growing fintechs fast. For Fispoke, we moved them off Wix onto a
  25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who's updating usetyms.com
body: |
  Hey Ibrahim,

  Shipping agent integrations this fast usually means the site update queue is longer than
  anyone on the product team has time for.

  That's the exact gap we fill: a dedicated team that builds it right once and keeps it
  current, so new launches don't wait on an engineer's spare hour.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, tyms
body: |
  Hey Ibrahim,

  Last one from me.

  If usetyms.com is already keeping pace with what Adam can do now, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what fixing that would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-13
notes:
- "Shipping an MCP integration so Adam runs inside Claude and ChatGPT" -> matches
  score_notes citing Nairametrics 2026-08-08 (MCP integration live in production for
  existing customers).
- "27-person team" -> matches org_data exactly.
- Fispoke claims ("moved them off Wix onto a 25-page, CMS-driven build with SEO built in")
  -> verbatim match to knowledge/case-studies/fispoke.md Quotable lines; status approved,
  track new_build matches this lead's track, and the fintech vertical is a direct match
  (Tyms is itself an accounting/fintech product).
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case
  study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~70w, email_2 ~48w, email_3 ~33w -
  within band, escalating brevity.
- Sign-off: plain "Ethan" (startups). One CTA per email, rotated phrasing, no booking link.
- First sentence specific to this company (MCP/Claude-ChatGPT integration, team size), not
  sendable elsewhere. No repeated proof point across the sequence.
