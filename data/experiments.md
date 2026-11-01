# Split test log

Managed by the self-review skill (see `.claude/skills/self-review/SKILL.md` for the rules:
one variable per test, 50/50 arms, min 100 sends per arm before judging, max 2 concurrent
per ICP).

## Running

### EXP-001: Drafting research depth (deep vs. light)

- **Hypothesis:** the full per-lead research pass in outreach-email Step 1 (3-6 fresh facts,
  new searches, PageSpeed) doesn't move reply/interested/booked rate enough to justify its
  cost relative to a cheap variant that reuses only what lead-scoring already found
  (`score_notes`) plus free Apollo/platform-detect fields — no new searches. If true, the
  cheap variant lets significantly more leads get drafted and sent per week within the same
  cost cap, which also fixes the "too few sends to read any signal" problem independent of
  which arm wins.
- **Why this variable, not lead-scoring's research (Step 4):** scoring's cost gate
  (`.claude/skills/lead-scoring/SKILL.md` "Before Step 4") already controls cost there and
  determines tier/triage — changing it would confound "how many leads qualify" with "how
  good is the copy for leads that already qualified." This test only touches drafting, so
  tier assignment and send volume *eligibility* are identical across arms; only the research
  depth behind the copy for an already-qualified lead differs. One variable, per self-review's
  own rule.
- **Variable:** drafting research depth.
- **Arms** (50/50, assigned per lead at draft time — see outreach-email SKILL.md Step 1):
  - **deep (control):** current process unchanged — reuse `score_notes` + up to 3-6 fresh
    facts from new research (site content, PageSpeed, press/hiring searches).
  - **light (treatment):** reuse `score_notes` facts + free Apollo/`org_data`/
    `platform_detect.py` fields only. Zero new WebSearch calls. Still passes the same
    fact-check/voice gate — this is "built only from data already paid for," not "generic."
- **ICP scope:** both startups and churches (same mechanism, mechanism-level not ICP-level),
  results reportable broken out by ICP via `--icp` on `funnel.py stats`.
- **Assignment:** deterministic hash so it's reproducible without shared state —
  `python3 -c "import hashlib,sys; print(int(hashlib.md5(sys.argv[1].encode()).hexdigest(),16)%2)" "{icp}--{org-slug}--{person-slug}"`
  → 0 = deep, 1 = light. Record `research_arm: deep|light` in the draft's frontmatter and
  pass `--arm` on the `funnel.py record --stage emailed` call so results are queryable by arm.
- **Target sample:** 100 sends/arm minimum before judging reply rate (200/arm before judging
  anything subtler), per the self-review skill's own bar — 200 total before any read, 400
  before a confident one.
- **Guardrail:** this is a cost/architecture lever, not a copy variable — per
  `.claude/skills/self-review/SKILL.md`, a verdict here is **propose-only**. Self-review
  reports the comparison once sample size allows; it does not get auto-applied into a
  permanent pipeline change without Ethan's sign-off, unlike a `config/playbook.yaml` copy
  winner.
- **Started:** 2026-10-21. **Status:** running. First drafting run under this experiment
  happened 2026-10-21 (daily pipeline): 6 startups leads drafted and pushed live, 1 on the
  `light` arm (Sunlight YC S22), 5 on `deep` (Patientdesk.ai, Parametric, SendtoWin, Intryc,
  The Travel Foundry) - arm assigned per the deterministic hash, not chosen. Still far below
  the 100/200-per-arm bar needed before reading anything into results.
- **Update 2026-11-01 (biweekly review):** 71 of 113 total sends since launch now carry an
  arm: 33 `deep`, 38 `light` (the other 42 sends predate 2026-10-21 or are hot-tier drafts,
  which don't get an arm). Still under the 100/arm minimum - still collecting, no verdict.

Reviewed 2026-11-01 (biweekly review): first review with real send volume (113 sends,
2026-10-17 through 2026-10-30), delivery clean on 3/4 mailboxes, 0 replies/opens so far (too
early to read). No experiment cleared the sample-size bar so `config/playbook.yaml` stays
unchanged. Trailing 7-day Claude spend is over the weekly cost cap ($70.32 vs. $40), driven
by one 2026-10-30 catch-up run - next scheduled run will auto-skip; see
`data/reports/2026-11-01-review.md` for the full breakdown and recommendations.

Reviewed 2026-08-15 (biweekly review): still pre-launch, zero sends, nothing to start yet.
See `data/reports/2026-08-15-review.md`.

Reviewed 2026-09-01 (biweekly review): no change since last review, still pre-launch, zero
sends, nothing to start yet. See `data/reports/2026-09-01-review.md`.

Reviewed 2026-09-15 (biweekly review): no change since last review, still pre-launch, zero
sends, nothing to start yet. See `data/reports/2026-09-15-review.md`.

Reviewed 2026-10-01 (biweekly review): still pre-launch, zero sends, nothing to start yet.
Root cause now identified: Apollo Free plan has blocked `mixed_people/search` since
2026-08-03 (issue #3), stalling ingestion independent of mailbox/case-study status. See
`data/reports/2026-10-01-review.md`.

Reviewed 2026-10-15 (biweekly review): `mode` flipped to `live` 2026-10-14, issue #3 is
resolved, and ingestion now works end to end (59 leads: 50 startups + 9 churches). Still
nothing to start, but for a new reason: all 25 scored startup leads came back `cold` (top
score 45 vs. `warm_min: 50`) — no drafts exist yet to assign an arm to. Root cause is
`icp-startups.yaml` pulling off-ICP firmographic noise (no vertical filter by design); see
`data/reports/2026-10-15-review.md` recommendation 1. First experiment still opens once a
real batch clears the warm-tier cutoff and drafting starts.

## Backlog (ideas, not started)

- Subject: 2-3 word noun phrase vs. question form
- First line: observation about their site vs. observation about their trigger event
- CTA: "worth 15 minutes?" vs. named-day suggestion ("free Thursday afternoon?")
- Proof: case study sentence vs. plain capability statement (tests whether proof helps
  before the case study library exists)
- Send time: 9am vs. 2pm recipient-local

## Completed

| Closed | ICP | Variable | Arms | Verdict | Change made |
|---|---|---|---|---|---|
