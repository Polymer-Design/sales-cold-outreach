# Reply check run

Executed by `.github/workflows/reply-check.yml` (3x per weekday, only when `scripts/reply_gate.py` finds an unhandled reply) or manually.

## 1. Pull new replies

Via `scripts/apollo_client.py replies` (no `--since`), then drop any message whose `id` is
already in `data/replies/seen.json` - those were handled by an earlier run. What's left is
this run's work. (Changed 2026-11-03: the workflow now only calls this run when
`scripts/reply_gate.py` finds an unhandled replied message by that same rule, and records
the ids as handled after this run succeeds. `--since` filters on when the OUTBOUND email was
created, so it can miss a reply to an older email.) In dry_run mode with no mailboxes
connected this returns nothing; that's a healthy no-op, exit quietly.

## 2. Classify

Run the **classify-reply** skill on each new reply. Every action the skill specifies
(do-not-contact marks, nurture tags, OOO reschedules) happens now, this run. Append every
classification to `data/replies/log.jsonl`.

**Funnel:** for each reply, record `replied`, and additionally `interested` when the reply
is classified interested:
`python scripts/funnel.py record --email <email> --stage replied --icp <icp> --org <org>`
(and `--stage interested` for interested replies). Feeds the conversion dashboard.

## 3. Interested -> booking reply

For each `interested`: run the **booking-reply** skill. It drafts, queues to
`data/queue/pending-approval/`, and opens the approval PR. One PR per reply so approvals
are independent.

## 4. Flags for Ethan

`referral`, `question_objection`, and `ambiguous` replies: collect into a single GitHub
issue "Replies needing you - YYYY-MM-DD" (append to today's if it exists), each with the
reply text, your read, and a suggested response Ethan can edit rather than write from scratch.

## 5. Commit

Commit `data/replies/` changes, update `.last-check`. Summary: replies by category,
PRs opened, issues filed.
