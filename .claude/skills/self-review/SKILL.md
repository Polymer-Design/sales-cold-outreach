---
name: self-review
description: Biweekly system review - read performance data, evaluate running split tests, start new ones, propose scoring/copy adjustments. Run by the biweekly workflow.
---

# Biweekly self-review

Every two weeks, look at what the system actually did and make it better. Evidence in,
one report out, experiments managed with discipline.

## Inputs

1. Sequence performance from Apollo (per sequence, per step): sent, delivered, bounced,
   opened, replied, opted out. Via `scripts/apollo_client.py stats` or MCP in interactive runs.
2. `data/replies/log.jsonl` — reply categories and objection themes.
3. `data/experiments.md` — running and completed split tests.
4. `data/reports/` — prior reviews (don't re-propose what already failed).
5. Deliverability: bounce rate per mailbox/domain. **Bounce >3% or opt-out >1% on any
   mailbox = deliverability alarm, leads the report, pause recommendation for that mailbox.**

## Split test rules

- One variable per test (subject style, first-line angle, CTA phrasing, proof type, send time).
- 50/50 assignment, recorded per contact in the experiment log at draft time.
- **Minimum 100 sends per arm before judging reply rate; 200 before judging anything subtle.**
  At current volume that may mean most reviews say "still collecting" — say that rather than
  calling winners on noise.
- Max 2 concurrent experiments per ICP so results stay attributable.
- Every experiment entry in `data/experiments.md` records: hypothesis, variable, arms,
  start date, target sample, and (when closed) verdict + what changed because of it.

## The loop (this is the whole point)

review -> test -> pick winner -> apply winner -> immediately start the next test -> repeat.
The loop only closes if winners actually get applied, so applying is mechanical, not a
suggestion: a COPY winner is written into `config/playbook.yaml`, which the outreach-email
skill reads on every draft. Change the value, bump `version`, append to `history` with the
experiment id and date, and open the next experiment from the backlog in the same run.

## Auto-apply vs. propose (hybrid, set by config/system.yaml approval)

**Auto-apply** (do it, write it to `config/playbook.yaml`, log in the report) — copy-level,
low-risk, easily reverted:
- subject_style, first_line_angle, body_length_target, cta_style, proof_style, send_time
- starting/stopping experiments per the rules above
- reordering which trigger signals the drafting queue prioritizes

Only auto-apply a winner that cleared the sample-size bar AND beat the control by a margin
bigger than the noise (rule of thumb: >25% relative lift on reply rate at >=100 sends/arm,
or statistical significance if you can compute it). Otherwise keep the test running and say so.

**Propose only** (needs Ethan's sign-off — put in the report + open an issue, never auto-apply)
— structural, higher-blast-radius:
- scoring weight changes
- ICP filter changes
- sequence structure (step count, wait days)
- any volume/cap increase
- positioning shifts (new offer framing, new proof claims)

Every auto-applied change names the experiment that justified it, so any single winner is one
`git revert` of `config/playbook.yaml` away from undone.

## Output

Write `data/reports/YYYY-MM-DD-review.md`:

1. **TLDR** — 3 sentences max: what's working, what's not, the one thing Ethan should do.
2. Numbers table vs. last review (sends, delivery, open, reply, positive-reply, booked).
3. Deliverability status per mailbox.
4. Objection themes from replies, with counts.
5. Experiments: status of each, verdicts where sample size allows.
6. Changes made autonomously.
7. Recommendations needing sign-off.

Then open a GitHub issue titled "Outreach review YYYY-MM-DD" with the TLDR and a link to
the report, labeled `biweekly-review`.

Success metrics (starter targets, recalibrate with real data): delivery >97%,
reply rate >2%, positive reply rate >0.5%, booked calls the north star.
