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
`data/leads/churches/candidates.csv`, **oldest `added`/`found_at` first**. Cap this step at
`limits.new_leads_scored_per_day` (currently 50) per run. If the backlog is bigger than
that cap, score the oldest slice and leave the rest for the next run - don't try to clear
the whole backlog in one run just because it's grown large; a predictable daily drain beats
an attempt that blows the turn budget and scores nothing. Write scores to the index (and
Apollo custom fields in live mode).

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
- **Warm tier**: via `scripts/apollo_client.py` — upsert the contact, write the three email
  bodies + subjects to contact custom fields, add to the ICP's Apollo sequence with a
  mailbox from `config/domains.yaml` (alternate between the 2 for load balance). Respect the
  per-mailbox cap from `config/system.yaml` `inbox_health.send_caps`: use `warmup_daily` for
  any mailbox with fewer than `min_sends_to_evaluate` sends in the last 30 days (still
  ramping - see `data/inbox-health/latest.json`, `status: insufficient_data`), `healthy_daily`
  once past that. Count what's already scheduled on each mailbox today so the cap holds
  across the two ICPs.
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
