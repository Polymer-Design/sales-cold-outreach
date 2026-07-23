# Draft queue state machine

Every outreach draft is a markdown file with YAML frontmatter. `status` drives everything:

```
drafts/           status: drafted        just written, awaiting fact-check
                  status: needs_rewrite  failed fact-check, back to the drafter (max 2 cycles)
                  status: ready          passed fact-check; in live mode gets pushed to Apollo
                  status: pushed         live in an Apollo sequence
                  status: skipped        dropped, reason in fact_check notes

pending-approval/ status: pending_approval   booking replies awaiting Ethan (PR merge = approval)
approved-to-send/ approved, Apollo task created, awaiting actual send confirmation
sent/             confirmed sent
```

Naming: `{icp}--{org-slug}--{person-slug}.md` (booking replies add `--booking`).
Files are committed on purpose: the queue doubles as the audit trail of every email
this system ever proposed.
