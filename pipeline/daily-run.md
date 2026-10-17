# Daily pipeline run

Executed by `.github/workflows/daily-pipeline.yml` (weekdays 9am ET) or manually.
Read `CLAUDE.md` hard rules first. Check `config/system.yaml` `mode` before every Apollo write.

## 1. Score the backlog first

Scoring is the turn-expensive step (platform detection + real research per lead), not
ingestion - ingestion is cheap API calls, scoring is the part that actually takes agent
budget. Score BEFORE ingesting anything new, or ingestion starves scoring of the same
run's turn budget and the backlog only grows (confirmed live 2026-10-15/16: ingestion ran
3 days straight, scoring ran 0 of those days, 59 leads piled up unscored while 0 new ones
got the chance to clear warm tier).

Run the **lead-scoring** skill on every unscored lead already sitting in
`data/leads/index.jsonl` (`status: ingested`) and every `status: ingested` row in
`data/leads/churches/candidates.csv`. Cap this step at **15 leads per run** (well under
`limits.new_leads_scored_per_day`'s 50 - that's the DAILY cap across however many runs
happen that day, not a single run's budget). Confirmed live 2026-10-17: a run attempting
the full 50 in one go hit `error_max_turns` after 151 turns / $9.33 and crashed before
writing anything - real per-lead research costs more turns than a flat per-lead estimate
suggests. If the backlog is bigger than 15, score a slice and leave the rest for the next
run - a predictable, affordable daily drain beats a single expensive run that blows its
budget and produces nothing. Write scores to the index (and Apollo custom fields in live
mode).

**Within the startups backlog specifically, score `source` containing `:yc:` or dated
2026-10-16 or later FIRST, the pre-growth-filter backlog (dated 2026-10-15 or earlier,
`config/icp-startups.yaml` `apollo_filters` before the growth-trajectory filter was added)
LAST.** Churches: oldest `found_at` first as before, no similar filter-change exists there.
Reasoning (2026-10-17): the pre-filter startup backlog is already well-represented in
scoring data (30+ leads scored, 1 warm) and strict oldest-first would keep burying the
newer, better-sourced YC and growth-filtered channels behind it for days - spending scoring
budget re-confirming what's already known instead of answering whether the fixes actually
worked. Nothing in the old backlog is discarded, it's just deprioritized, not skipped.

**Commit and push after EVERY lead is scored, not once at the end.** `git add
data/leads/index.jsonl data/leads/churches/candidates.csv && git commit -m "score: {org}"`
(then push - fetch/rebase/retry on rejection, same as the workflow's own push step). This
run can still end early for reasons outside your control (turn cap, timeout); a crash
after lead 12 of 15 should keep those 12 scores, not lose them. Don't batch all the commits
for the end of the step.

**Score every lead directly in this same session - do not dispatch background subagents to
parallelize this.** See `CLAUDE.md` hard rule 8: this run has no way to resume after a
background task completes. Confirmed live 2026-10-16 - three straight runs dispatched
parallel scoring subagents, said "I'll continue once they report back," and the run just
ended there with nothing written, real cost spent for zero result. One lead at a time,
looping through the batch, is slower but is the only thing that actually produces output
here.

## 2. Ingest new leads (only with cap room left over from step 1)

If step 1 already used the full `limits.new_leads_scored_per_day` cap scoring backlog,
**skip ingestion entirely this run** - let the backlog drain before adding to it. Otherwise
ingest up to whatever remains of the cap:

**Churches:** if `data/leads/churches/candidates.csv` has rows with `status: new`
(produced by the church-crawler workflow), for each org find decision makers via Apollo
people search (`q_organization_domains_list` on the church's domain, titles from
`config/icp-churches.yaml`). Max 2 people per org, priority-ordered by title list.

**Startups:** Apollo people search with `config/icp-startups.yaml` `apollo_filters`, PLUS a
second channel on the same ICP using `apollo_filters_yc` (`scripts/apollo_client.py
people-search --icp startups --filter-set apollo_filters_yc`) - Y Combinator companies,
sourced via Apollo's own "Y Combinator"/"YC" org keyword tags. Run both channels; dedupe
against each other and against `data/leads/index.jsonl` (by domain) before scoring either.
Skip orgs already in `data/leads/index.jsonl` (dedupe by domain). Split whatever room is
left in the cap roughly evenly between ICPs, broad + YC channels sharing the startups-ICP
half rather than each getting a full half.

Both paths go through `scripts/apollo_client.py people-search`, which enriches every match
by default (1 Apollo credit per person actually matched, 0 for a miss) - that's what fills
in the real name/email/domain the rest of this pipeline needs. Don't pass `--no-enrich` here.

Append every new lead to `data/leads/index.jsonl`:
`{"org", "domain", "icp", "contacts": [{"name","title","email_status","apollo_id"}], "source", "added"}`

## 3. Draft

Take the highest-scored undrafted leads, hot tier first then warm, up to
`limits.emails_drafted_per_day`. Cold tier: skip (tag only). For each, run the
**outreach-email** skill, then the **fact-check-email** skill. Respect the max-2-rewrite rule.

## 4. Push ready drafts (live mode only)

For each draft with `status: ready`:
- **Hot tier**: requires human review of email 1 — open/append to a PR titled
  "Hot tier drafts YYYY-MM-DD" instead of pushing; merging pushes them next run.
- **Warm tier**: via `scripts/apollo_client.py` / direct Apollo calls —
  1. Upsert the contact (`apollo_client.py upsert-contact`), writing each drafted email's
     subject/body into the matching `config/system.yaml` `apollo_custom_fields` id
     (`cold_email_1_subject`/`_body`, `_2_`, `_3_`) via `typed_custom_fields`.
  2. Add the contact to `config/domains.yaml` `sequence_id` for that ICP (`add-to-sequence`),
     with a mailbox from that ICP's `mailboxes` list (alternate between the 2 for load
     balance). Both sequences already carry `sequence.emailer_schedule_id` ("Normal Business
     Hours": Mon-Fri 8am-5pm recipient-local, no weekends, holidays skipped) - built in at
     creation 2026-10-16, no need to re-set it per contact.
  3. Both sequences are ACTIVE (Ethan approved 2026-10-16) - adding a warm-tier contact is
     enough on its own, no per-run or per-contact approval needed. That's the design: only
     hot tier (above) and interested-reply booking emails need human review.

  Respect the per-mailbox cap from `config/system.yaml` `inbox_health.send_caps`: use
  `warmup_daily` for any mailbox with fewer than `min_sends_to_evaluate` sends in the last 30
  days (still ramping - see `data/inbox-health/latest.json`, `status: insufficient_data`),
  `healthy_daily` once past that. Count what's already scheduled on each mailbox today so the
  cap holds across the two ICPs.
- Set `status: pushed` + timestamp. In dry_run, leave `status: ready` and just report.
- **Funnel:** for each contact actually added to a sequence (live mode), record it:
  `python scripts/funnel.py record --email <email> --stage emailed --icp <icp> --org <org>`.
  This is the denominator for the booked-call conversion rate.

## 5. Recycle check

Leads tagged no-reply whose sequence ended more than `sequence.recycle_after_days` ago:
mark `status: recyclable` in the index. (Recycled leads get a fresh angle: re-run research
and drafting from scratch, never resend old copy.)

## 6. Commit and summarize

Commit changes in `data/` with message "daily run YYYY-MM-DD". Print a run summary:
leads ingested/scored/drafted/pushed, fact-check failures, anything needing Ethan.
If any step failed hard (Apollo auth, quota), say so first.
