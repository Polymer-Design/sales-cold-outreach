# Post-launch playbook — what stays manual, and where to look

The system runs itself day to day. These are the things that still need a human (you), and
exactly where each one lives.

## Your recurring manual touchpoints

| Cadence | What you do | Where |
|---|---|---|
| Whenever a lead replies "interested" | Approve (or edit) the booking email by **merging its PR**. Merging = sending. | GitHub PRs titled "Booking reply: …" |
| ~Daily (2 min) | Skim the "Replies needing you" issue — referrals, objections, ambiguous replies. Each has a suggested response you can edit and send yourself. | GitHub issue, tagged `reply-flag` |
| When an inbox alarm email arrives | Spin up + start warming a replacement inbox, and pause/slow the flagged one. | Email to ethan@hellopolymer.com; the mailbox lives in TrulyInbox + Apollo |
| Every 2 weeks (10 min) | Read the self-review report. Approve or reject the **structural** recommendations (scoring weights, ICP filter changes, volume increases). Copy tweaks already auto-applied. | GitHub issue "Outreach review …" + `data/reports/` |
| Hot-tier leads (75+) | Review email #1 before it sends (higher-value leads get a human glance). | PR "Hot tier drafts …" |

Everything else — sourcing, scoring, drafting, fact-checking, sending the 3-step sequence,
pausing on reply, recycling non-responders at 90 days, running split tests — happens without you.

## Where to change things (no code)

| Want to change… | Edit this file |
|---|---|
| Dry-run vs live, send caps, wait days, recycle window, booking link, mailing address | `config/system.yaml` |
| Which mailbox/domain each ICP sends from | `config/domains.yaml` |
| ICP filters + decision-maker titles | `config/icp-startups.yaml`, `config/icp-churches.yaml` |
| The scoring rubric | `.claude/skills/lead-scoring/SKILL.md` |
| The current "winning" copy strategy (or revert a bad auto-applied test winner) | `config/playbook.yaml` |
| Banned words / AI-tell list | `config/voice-bans.yaml` |
| What we're allowed to claim about Polymer | `knowledge/business-overview.md` |
| Case studies the emails pull from | `knowledge/case-studies/*.md` |
| Inbox-health alarm thresholds | `config/system.yaml` `inbox_health` |

## Going live (the one deliberate switch)

1. Run `python scripts/preflight.py` — it lists everything still blocking live mode.
2. When it passes, change `mode: dry_run` to `mode: live` in `config/system.yaml` and commit.
   Nothing sends until you do this.

## What to watch in the first 2 weeks of live sending

- **Bounce rate per mailbox** (self-review flags >3%). High bounces = pause, the list or
  warmup needs work.
- **First real replies** — read how the classifier bucketed them vs. how you'd bucket them.
  This is the data that tells you when to flip the booking email from approval-first to
  automatic (`config/system.yaml` `approval.interested_reply_email`).
- **Draft quality on real leads** vs. the pilot — especially first lines. If any read generic,
  the research step needs tightening.
