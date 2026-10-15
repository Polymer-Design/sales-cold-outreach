# Split test log

Managed by the self-review skill (see `.claude/skills/self-review/SKILL.md` for the rules:
one variable per test, 50/50 arms, min 100 sends per arm before judging, max 2 concurrent
per ICP).

## Running

*(none yet — first experiments start once sending begins)*

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
