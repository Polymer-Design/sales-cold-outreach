---
contact_name: Diego Avellaneda
contact_title: CEO
organization: Callbook AI (YC S26)
icp: startups
apollo_contact_id: 6781a1e4ced9de0001b535b3
score_total: 71
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-13
---

## research
- Current YC S26 (Summer 2026) batch - a real, recent accelerator signal (source:
  lead-scoring 2026-11-13, score_notes)
- Product: AI voice agents that place calls in Spanish, English, and Portuguese for
  payment reminders, appointment confirmation, and lead qualification, currently focused on
  automated debt collection across Latin America, with native Zoho/Clientify/Kommo/
  Salesforce/Pipedrive integrations and SOC2/GDPR compliance (source: lead-scoring
  2026-11-13, score_notes, citing a Spanish-language company profile)
- 9 employees, founded 2025 (source: Apollo org_data, lead-scoring 2026-11-13)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://callbook.ai --icp startups, lead-scoring 2026-11-13)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free org_data/platform_detect fields only.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track; Callbook sells into financial
  services/collections workflows, a reasonable vertical-adjacent fit to Fispoke's fintech
  work even though Callbook isn't itself a fintech company)

## email_1
subject: callbook's yc s26 moment
body: |
  Hey Diego,

  Nine people shipping voice agents in three languages, fresh out of YC's S26 batch, is a
  lot of momentum for a site to keep up with.

  Collections and lending teams across Latin America are going to be checking out
  callbook.ai once that batch attention lands, so it's worth having a site that matches
  the product.

  We build sites for growing teams in weeks. For Fispoke, a fintech client, we moved them
  off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who owns callbook.ai
body: |
  Hey Diego,

  At 9 people building fast, there's usually no one at Callbook whose actual job is the
  website, it rides on whoever has spare time between shipping product.

  That's the gap we fill: a dedicated team that builds it right once and keeps it current,
  so it's never a side project for your engineers.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, callbook
body: |
  Hey Diego,

  Last one from me.

  If callbook.ai is already keeping pace with the attention a YC batch brings, no worries
  at all.

  If it's not, happy to grab 15 minutes and talk through what fixing that would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-13
notes:
- "Nine people shipping voice agents in three languages, fresh out of YC's S26 batch" ->
  matches lead-scoring score_notes (9 employees, current YC S26 batch, Spanish/English/
  Portuguese voice agents).
- "Collections and lending teams across Latin America" -> matches score_notes' confirmed
  product focus (automated debt collection across Latin America).
- Fispoke claims ("moved them off Wix onto a 25-page, CMS-driven build with SEO built in")
  -> verbatim match to knowledge/case-studies/fispoke.md Quotable lines; status approved,
  track new_build matches this lead's track. Vertical is adjacent (financial
  services/collections workflows), not an exact match - noted as a reasonable fit, not
  oversold as a direct comparable.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case
  study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~75w, email_2 ~50w, email_3 ~35w -
  within band, escalating brevity.
- Sign-off: plain "Ethan" (startups). One CTA per email, rotated phrasing, no booking link.
- First sentence specific to this company (team size + YC S26 + 3-language voice product),
  not sendable elsewhere. No repeated proof point across the sequence.
