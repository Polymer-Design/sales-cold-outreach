# Daily pipeline run

Executed by `.github/workflows/daily-pipeline.yml` (weekdays 9am ET) or manually.
Read `CLAUDE.md` hard rules first. Check `config/system.yaml` `mode` before every Apollo write.

## 1. Ingest new leads

**Churches:** if `data/leads/churches/candidates.csv` has rows with `status: new`
(produced by the church-crawler workflow), for each org find decision makers via Apollo
people search (`q_organization_domains_list` on the church's domain, titles from
`config/icp-churches.yaml`). Max 2 people per org, priority-ordered by title list.

**Startups:** Apollo people search with `config/icp-startups.yaml` `apollo_filters`.
Skip orgs already in `data/leads/index.jsonl` (dedupe by domain). Take up to the daily cap
(`limits.new_leads_scored_per_day`, split roughly evenly between ICPs).

Append every new lead to `data/leads/index.jsonl`:
`{"org", "domain", "icp", "contacts": [{"name","title","email_status","apollo_id"}], "source", "added"}`

## 2. Score

Run the **lead-scoring** skill on every unscored lead. It runs `scripts/pagespeed.py` on each
lead's site for the technographic site-health signal; the measured number is stored on the lead
so the drafter reuses it (no second fetch). Write scores to the index (and Apollo custom fields
in live mode).

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
  any mailbox TrulyInbox still reports as warming, `healthy_daily` once healthy. Count what's
  already scheduled on each mailbox today so the cap holds across the two ICPs.
- Set `status: pushed` + timestamp. In dry_run, leave `status: ready` and just report.

## 5. Recycle check

Leads tagged no-reply whose sequence ended more than `sequence.recycle_after_days` ago:
mark `status: recyclable` in the index. (Recycled leads get a fresh angle: re-run research
and drafting from scratch, never resend old copy.)

## 6. Commit and summarize

Commit changes in `data/` with message "daily run YYYY-MM-DD". Print a run summary:
leads ingested/scored/drafted/pushed, fact-check failures, anything needing Ethan.
If any step failed hard (Apollo auth, quota), say so first.
