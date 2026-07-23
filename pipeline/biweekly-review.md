# Biweekly review run

Executed by `.github/workflows/biweekly-review.yml` (1st and 15th) or manually.

Run the **self-review** skill end to end. That skill owns the logic; this file just
sequences it:

1. Pull sequence + mailbox stats (`scripts/apollo_client.py stats`, or note their absence
   in dry_run / pre-launch and review what exists: draft quality drift, fact-check failure
   rate, queue health).
2. Read `data/replies/log.jsonl`, `data/experiments.md`, prior `data/reports/`.
3. Write the report to `data/reports/`, update `data/experiments.md`, make autonomous
   changes within the skill's allowed list.
4. Open the "Outreach review YYYY-MM-DD" GitHub issue with the TLDR.
5. Commit everything: "biweekly review YYYY-MM-DD".

Pre-launch (no sends yet), still run it: review the drafts queued so far for template smell
and voice drift, and report on system readiness instead of send metrics.
