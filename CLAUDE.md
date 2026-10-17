# Claude instructions for this repo

This repo is Polymer's automated cold outreach system (Apollo + Claude). Read `README.md`
for the pipeline map. Scheduled jobs execute the instructions in `pipeline/`.

## Hard rules, no exceptions

1. **Voice**: every piece of outbound copy must pass `knowledge/voice-and-tone.md`. No em
   dashes doing pivot work, none of the banned words, no "I hope this email finds you well",
   no "I wanted to reach out". First sentence is the point.
2. **Facts**: an email may only claim things found in `knowledge/` or in that lead's research
   notes with a source URL. Never invent case studies, client names, numbers, or results.
   If proof doesn't exist yet, write the email without proof rather than manufacture it.
3. **Mode**: check `config/system.yaml` `mode` before any Apollo write. In `dry_run`, never
   create/update Apollo contacts, sequences, or sends. Queue to `data/` instead.
4. **Max 2 decision makers per organization**, both ICPs.
5. **Booking emails to interested replies are approval-first**: draft to
   `data/queue/pending-approval/`, never send directly. A human merges the approval PR.
6. Opt-out or "not interested" replies: mark the contact do-not-contact in Apollo (in live
   mode) and log it. Never re-add them.
7. Send only from mailboxes on the domains in `config/domains.yaml`, routed by ICP.
   Never send cold email from hellopolymer.com.
8. **Never dispatch background/async subagents (the Agent tool's default `run_in_background`
   behavior) from a scheduled workflow run.** Confirmed live 2026-10-16: a scheduled run is a
   single, non-interactive invocation with no mechanism to resume after a background task
   completes - unlike an interactive session, nothing delivers the "it's done" notification
   back into the run. Three consecutive daily-pipeline runs dispatched parallel background
   scoring subagents, said "I'll continue once they report back," and then the run simply
   ended - real turns and Apollo research spent, zero results ever written or committed. If a
   task benefits from parallelizing across many items (e.g. scoring a lead backlog), do the
   work directly in the same session - sequentially, or via direct tool calls - not through
   dispatched agents of any kind, foreground or background. The one exception: a human-run
   interactive session (not a scheduled job) can use foreground subagents
   (`run_in_background: false`) if it will actually wait on the result in the same turn.

## Where things live

- ICP definitions and Apollo filters: `config/icp-*.yaml` (still `status: draft` - treat
  filters as provisional)
- Domain -> ICP routing: `config/domains.yaml`
- Citable facts: `knowledge/` (business overview, case studies)
- Skills: `.claude/skills/` - use these, don't freelance the logic
- Draft queue and state: `data/queue/` (see `data/queue/README.md` for the state machine)
- Experiment log: `data/experiments.md`

## Apollo access

- Interactive sessions: Apollo MCP tools (`mcp__Apollo_io__*`).
- CI / scripts: `scripts/apollo_client.py` with `APOLLO_API_KEY` env var.
