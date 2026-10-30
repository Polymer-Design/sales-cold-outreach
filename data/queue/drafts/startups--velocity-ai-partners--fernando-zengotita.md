---
contact_name: Fernando Zengotita
contact_title: Chief Operating Officer & Co-Founder
organization: Velocity AI Partners
icp: startups
apollo_contact_id: 60912af0cbc12800013448a6
score_total: 55
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T14:00:39Z
mailbox: ehoover@growwithpolymer.com
apollo_contact_id_resolved: 6ae4a3062028720014b4af28
---

## research
- 5 employees, founded 2025, industry "management consulting" per org_data (source: data/leads/index.jsonl org_data, recorded during lead-scoring, scored_at 2026-10-27; reused from score_notes per outreach-email skill Step 1, not re-researched)
- Headcount growth: 0% over the trailing 6 months, +20% over the trailing 12 months (source: data/leads/index.jsonl org_data `organization_headcount_six_month_growth` / `twelve_month_growth` fields - a free Apollo/org_data field already on the lead record, not a new search, per the light-arm rule)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py output recorded on the lead during lead-scoring, scored_at 2026-10-27)
- Only one verified contact on file for this org: Fernando Zengotita, Chief Operating Officer & Co-Founder, verified email (source: data/leads/index.jsonl contacts list / Apollo enrichment) - no separate marketing/growth or web-owner contact exists on the record
- "AI-focused consulting" framing is read directly off the org's own name ("Velocity AI Partners") plus org_data's "management consulting" industry classification - both already on the lead record, not inferred from any new search
- research_arm: light per EXP-001 (data/experiments.md) - no new WebSearch/WebFetch run for this draft, per outreach-email skill Step 1's light-arm instruction. Did NOT cite the $27M seed round mentioned in score_notes' intent research; score_notes explicitly flags that as a different, unrelated Israeli AI-monetization company (ex-ironSource/Unity founders), not this lead, so it is excluded entirely from this draft

## proof_used
- knowledge/case-studies/fispoke.md (status: approved, icp_fit: startups, track: new_build - matches this lead's new_build_track; plain scope/before-after facts used, no numbers invented, no quote borrowed verbatim from other recent drafts citing the same case study)

## email_1
subject: five-person ai shop
body: |
  Hey Fernando,

  Velocity AI Partners is five people, founded in 2025, doing AI-focused consulting work.

  A team that size rarely has anyone whose full-time job is the firm's own website, so it's usually the thing touched least.

  We build fixed-price sites in weeks, then keep building with the same team. For Fispoke, a fintech client, that meant a CMS-driven Webflow build replacing a bare Wix site their own team could finally update.

  Up for a quick call?

  Ethan

## email_2
subject: flat six months
body: |
  Hey Fernando,

  Velocity's headcount grew about 20% in its first year, then went flat the last six months, usually a sign of a team buried in client work.

  As COO and co-founder, you're probably the closest thing Velocity has to someone who owns the website too.

  That's the part we take over: the build, then the maintenance after, so it's never squeezed in between client calls.

  Worth connecting this week?

  Ethan

## email_3
subject: no pressure either way
body: |
  Hey Fernando,

  I'll keep this one short.

  If Velocity's site already does its job bringing in client trust, there's nothing to fix here.

  If a five-person team hasn't had the room for it yet, I can show you what a fixed-price build looks like without pulling anyone off client work.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "5 employees, founded 2025, industry management consulting" -> verified against data/leads/index.jsonl org_data for velocityaipartners.ai (estimated_num_employees: 5, founded_year: 2025, industry: "management consulting"); matches score_notes verbatim, not re-researched
- "AI-focused consulting work" -> not a separate sourced fact, it is a plain reading of the org's own name on record ("Velocity AI Partners") plus the "management consulting" industry field - both already on the lead record, no new search used to derive it. Judged citable: describing a company's own stated focus off its own name is not an invented claim.
- "grew about 20% in its first year, then went flat the last six months" -> re-derived from data/leads/index.jsonl org_data (organization_headcount_six_month_growth: 0.0, organization_headcount_twelve_month_growth: 0.2). Since trailing-6mo growth is 0% and trailing-12mo growth is 20%, all of the 12-month growth necessarily occurred in months 7-12, which is what "grew in its first year, then flat the last six months" describes - checked the arithmetic, not just the labels.
- "Only one verified contact on file... no separate marketing/growth or web-owner contact" -> verified: data/leads/index.jsonl lists exactly one contact (Fernando Zengotita) for this org
- Platform unknown -> new_build_track -> verified against data/leads/index.jsonl ("platform": "unknown", "track": "new_build_track") and cross-checked against config/icp-startups.yaml's website_platform_routing table (unknown -> new_build_track) - correct track, no override needed
- Confirmed the $27M seed round and the unrelated Israeli AI-monetization company from score_notes' intent research do NOT appear anywhere in research, proof_used, or any of the three email bodies - score_notes is explicit that signal belongs to a different, unrelated company, and it was excluded entirely per the task brief
- research_arm: light recorded in frontmatter; confirmed no WebSearch/WebFetch calls were made for this draft - every fact traces to data/leads/index.jsonl (org_data, contacts, platform/track fields already computed at scoring), consistent with the light-arm no-new-search rule
- Fispoke claims ("CMS-driven Webflow build replacing a bare Wix site their own team could finally update") -> checked against knowledge/case-studies/fispoke.md (status: approved, track: new_build, icp_fit: startups): "Their site ran on Wix... all stuck inside Wix's builder with no CMS and no way for Fispoke's own team to publish" / "Full rebuild off Wix onto Webflow... CMS-driven... so Fispoke's team can publish without touching code" - matches; no page count, dollar figure, or post-launch metric borrowed (case study itself flags those as "to confirm"/not citable yet), so no numeric mismatch risk
- Positioning line ("fixed-price sites in weeks, then keep building with the same team") -> verbatim-compatible with knowledge/business-overview.md's positioning line, "A fixed price. A live site in weeks. The same team to keep it growing." No dollar amount or page count stated anywhere in the draft, so nothing to mismatch against the pricing table
- Track/proof consistency: new_build_track lead, all three emails pitch a build (never a monthly plan, never "Grow"/"Partner"/subscription language), case study used is track: new_build - consistent
- scripts/voice_check.py: clean, no banned words/clichés/openers/em dashes
- word counts (script-verified): email_1 78, email_2 71, email_3 51 - all within band (50-85/40-80/30-60), aim-under-80 held for email_1, brevity decreases 78 -> 71 -> 51
- One CTA per email, no booking link anywhere; sign-off plain "Ethan" all three (startups, no "God Bless" leakage); greeting on its own line with blank-line paragraph breaks throughout
- First sentence (org name + exact headcount/founding-year combination) is specific to this record; no PageSpeed claim made (none run, light arm skips it per Step 1) and no comparative Polymer-benchmark claim either
- Cohesion: three distinct hooks (team size/identity -> growth trajectory+founder bandwidth -> closing offer), proof point (Fispoke) used only once in email_1, not repeated in email_2/3
- Checked against the most recently committed startup drafts for skeleton collisions (data/queue/drafts/startups--sunlight-yc-s22--guy-ziv.md, the other existing light-arm draft, plus startups--tenyour--joah-spearman.md and startups--visual-feeder--yaxi-yang.md from this same batch): rewrote email_3 to avoid the "Last one/last note... no worries if..." opener all three of those recent drafts share - this draft opens its closer with "I'll keep this one short" instead and ends on a stated offer rather than a question, structurally distinct. CTA phrasing rotated to "Up for a quick call?" / "Worth connecting this week?", neither of which duplicates "Make sense to connect?", "Want to jump on a call?", "Worth 15 minutes?", or "Open to a quick call this week?" already used across those drafts. Subjects ("five-person ai shop", "flat six months", "no pressure either way") checked against the same files, no repeats or near-duplicates (e.g. avoided Sunlight's "who owns sunlight.com" shape despite a similar underlying idea in email_2)
