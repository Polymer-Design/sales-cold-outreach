---
contact_name: Alex Frommeyer
contact_title: Founder and CEO
organization: Stack Health Inc.
icp: startups
apollo_contact_id: 6464669f92dab10001d5337c
score_total: 85
tier: hot
research_arm: light
status: ready
drafted_at: 2026-10-26
---

## research
- $21M seed round announced ~Sept 1 2026, led by 8VC, joined by A*, Heartland Ventures, and The O.H.I.O. Fund (source: https://thesaasnews.com/news/stack-health-raises-21m-seed, https://coverager.com/stack-health-raises-21-million - surfaced during lead-scoring's Step 4 research, reused per research_arm: light)
- Business: a Columbus, Ohio platform helping small employers transition from group health insurance to individual employee-owned health plans via ICHRAs (source: same thesaasnews/coverager coverage)
- Founder Alex Frommeyer previously founded insurtech firm Beam Benefits (2012), which Principal announced a deal to acquire (source: same coverage)
- Platform: unrecognized by scripts/platform_detect.py -> new_build_track (source: scripts/platform_detect.py --url https://stackhealthcare.com --icp startups, run 2026-10-26)
- 15 employees, founded 2025, health/wellness & fitness industry (source: Apollo enrichment, org_data, ingested 2026-10-19)

research_arm: light - no new search run this step; every fact above was already sourced during lead-scoring's Step 4, reused per the outreach-email skill's Step 1.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track's one approved case study; used only as a plain scope/capability description, no vertical-fit claim - insurtech is not fintech)

## email_1
subject: stack health's $21M seed
body: |
  Hey Alex,

  $21M from 8VC is real validation, especially since ICHRA adoption is still early for most small employers.

  A raise like that usually means hiring and new product pages faster than a small team can design them.

  We build fixed-price sites for funded teams, usually live in 30-60 days, with a CMS your team runs without a developer.

  Make sense to connect?

  Ethan

## email_2
subject: beam benefits to stack health
body: |
  Hey Alex,

  Investors like 8VC and Heartland Ventures aren't betting on a first-time founder, they're betting on someone who already built and sold Beam Benefits once.

  That kind of track record deserves a site that tells the same story the cap table does.

  We do fixed-price builds for funded teams in exactly this spot, on the platform that fits how your team works, usually live in 30-60 days.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, stack health
body: |
  Hey Alex,

  Last one from me. If the site's not a priority right after closing the round, no worries at all.

  If it would help to have it match the pace you're building at, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-26
notes:
- "$21M seed... led by 8VC... A*, Heartland Ventures, The O.H.I.O. Fund" -> matches thesaasnews.com and coverager.com coverage gathered during lead-scoring's Step 4 research (~Sept 1 2026, corroborated by multiple outlets)
- "Columbus, Ohio... ICHRA... small employers" / "previously founded Beam Benefits... Principal announced a deal to acquire" -> matches same coverage
- Platform/track: unrecognized -> new_build_track confirmed via scripts/platform_detect.py, matches research block
- Proof point: Fispoke used only as a plain capability statement, no numbers/results borrowed, no vertical-fit claim made (insurtech != fintech)
- No pricing/tier named, CTA is the intro call only, no booking link
- voice_check.py: clean on all three emails
- word counts: email_1 65w, email_2 68w, email_3 40w - all within band
- sign-off: plain "Ethan" (startups)
- Sentence-skeleton check: email_1 rewritten during this check because its first draft ("Congrats on the $21M seed from 8VC. Going from running Beam Benefits...") too closely mirrored Aventra's email_1 opening skeleton ("Congrats on the $[X] round. [observation]...") drafted in the same run - replaced with a differently-shaped opener ("$21M from 8VC is real validation, especially since...") to avoid the cross-lead fingerprint voice-and-tone.md warns about
- hot tier: per pipeline/daily-run.md step 4, goes into the "Hot tier drafts" PR for human review before any push, not auto-pushed
