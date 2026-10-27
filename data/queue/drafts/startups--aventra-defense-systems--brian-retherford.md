---
contact_name: Brian Retherford
contact_title: COO & Co-Founder
organization: Aventra Defense Systems
icp: startups
apollo_contact_id: 6864b55be72a260001551a98
score_total: 97
tier: hot
research_arm: light
status: pushed
drafted_at: 2026-10-26
pushed_at: 2026-10-27T13:30:07Z
---

## research
- $17.5M round closed ~Oct 6 2026, led by Konvoy, joined by Lavrock Ventures, Booz Allen Ventures, Sands Capital, and Langford Industries plus a facility from Western Alliance Bank, earmarked to scale Piranha into low-rate initial production and expand manufacturing at the Herndon, VA facility (source: https://pulse2.com/aventra-raises-17-5-million-to-scale-piranha-autonomous-precision-payload-system, https://www.washingtontechnology.com/companies/2026/10/autonomy-space-and-logistics-startups-detail-their-newest-capital-raises/416501/, https://www.citybiz.co/?p=914967 - all surfaced during lead-scoring's Step 4 research, reused per research_arm: light)
- Emerged from stealth Oct 2025 with a $3M seed led by Lavrock Ventures; founders Michael Weigand, Brian Retherford, and Jessup Meng are former Army officers and defense tech entrepreneurs (source: https://pulse2.com/aventra-3-million-seed-funding-raised-for-defense-technology)
- Piranha (balloon-deployed precision payload system) has completed approximately 400 flights per company statements (source: washingtontechnology.com article above)
- Platform: squarespace -> new_build_track (source: scripts/platform_detect.py --url https://aventra.io --icp startups, run 2026-10-26)
- 19 employees, founded 2025, defense & space industry (source: Apollo enrichment, org_data, ingested 2026-10-19)

research_arm: light - no new search run this step; every fact above was already sourced during lead-scoring's Step 4, reused per the outreach-email skill's Step 1.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track's one approved case study; used only as a plain scope/capability description, no vertical-fit claim - defense tech is not fintech)

## email_1
subject: aventra's new raise
body: |
  Hey Brian,

  Congrats on the $17.5M round. Scaling Piranha into production while your site still looks like a pre-seed landing page is a strange mismatch for backers like Konvoy and Booz Allen Ventures.

  We build fixed-price sites for teams right after a raise, usually live in 30-60 days, with a CMS your own team can update without a developer.

  Want to jump on a call this week?

  Ethan

## email_2
subject: piranha's 400 flights
body: |
  Hey Brian,

  From $3M in stealth funding to a $17.5M raise in about a year, with Piranha already up to roughly 400 flights. That pace doesn't leave much time for the site to catch up.

  We build fixed-price sites specifically for funded teams moving this fast, on a stack matched to where you're headed, live in 30-60 days, so the story matches the traction.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, aventra
body: |
  Hey Brian,

  Last one from me. If the site's not a priority while you're heads down on production, totally fine.

  If it is, happy to grab 15 minutes, no pressure either way.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-26
notes:
- "$17.5M round... Konvoy... Booz Allen Ventures" -> matches pulse2.com and washingtontechnology.com coverage gathered during lead-scoring's Step 4 research (~Oct 6 2026, ~20 days old at scoring time, now ~20 days old at draft time too - still fresh); multiple independent outlets corroborate
- "$3M in stealth funding" / founders as former Army officers -> matches pulse2.com's separate seed-round article
- "roughly 400 flights" -> attributed to company statements per washingtontechnology.com, phrased as "already up to roughly" (not asserted as independently verified), consistent with the source's own hedging
- Platform/track: squarespace -> new_build_track confirmed via scripts/platform_detect.py, matches research block
- Proof point: Fispoke used only as a plain capability statement (fixed-price build, team-run CMS), no numbers/results borrowed, no vertical-fit claim made (defense tech != fintech)
- No pricing/tier named, CTA is the intro call only, no booking link
- voice_check.py: clean on all three emails
- word counts: email_1 69w, email_2 65w, email_3 33w - all within band (50-85 / 40-80 / 30-60)
- sign-off: plain "Ethan" (startups)
- Sentence-skeleton check against same-run drafts: distinct opening structure from Stack Health's and TurboHome's email_1 (checked after an initial draft of Stack Health's opener too closely mirrored this one's "Congrats on the $X round" skeleton - Stack Health's was rewritten to fix it)
- hot tier: per pipeline/daily-run.md step 4, goes into the "Hot tier drafts" PR for human review before any push, not auto-pushed
