# Reply check run

Executed by `.github/workflows/reply-check.yml` (every 2h, business hours ET) or manually.

## 1. Pull new replies

Via `scripts/apollo_client.py replies --since <last-run>` (last run timestamp lives in
`data/replies/.last-check`). In dry_run mode with no mailboxes connected this returns
nothing; that's a healthy no-op, exit quietly.

## 2. Classify

Run the **classify-reply** skill on each new reply. Every action the skill specifies
(do-not-contact marks, nurture tags, OOO reschedules) happens now, this run. Append every
classification to `data/replies/log.jsonl`.

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
