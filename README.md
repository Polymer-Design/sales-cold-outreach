# Polymer Cold Outreach System

Automated cold email outreach for Polymer's two ICPs (startups, churches), built on Apollo + Claude.
Email is the only channel right now. Max 2 decision makers per organization.

## How the pipeline works

```
LIST BUILD      Startups: Apollo search (config/icp-startups.yaml filters)
                Churches: scripts/church_crawler.py finds churchcenter.com signal,
                          then Apollo enriches decision makers
SCORE           Claude scores 0-100 via .claude/skills/lead-scoring
                Hot 75+ / Warm 50-74 / Cold <50. Higher scores get emailed first.
DRAFT           Claude researches the company/church and drafts the 3-email
                sequence via .claude/skills/outreach-email
FACT-CHECK      Every draft passes .claude/skills/fact-check-email before it can
                move forward. Fails go back for rewrite.
SEND            Contacts added to the ICP's Apollo sequence, sent from the
                matching domain (config/domains.yaml). Startups send from
                launchwithpolymer.com, churches from integratedchurchwebsites.com.
REPLY           Apollo auto-pauses the sequence. .claude/skills/classify-reply
                buckets the reply. Interested -> booking email drafted via
                .claude/skills/booking-reply and held for approval (PR merge = send).
SELF-REVIEW     Every 2 weeks .claude/skills/self-review reads performance,
                runs/starts split tests, writes a report, opens a GitHub issue.
```

## Repo map

| Path | What it is |
|---|---|
| `config/` | System settings, ICP definitions, domain routing. Placeholders marked `REPLACE_ME`. |
| `knowledge/` | Facts agents may cite: business overview, voice rules, case studies. **If it isn't in here, it can't go in an email.** |
| `.claude/skills/` | The Claude-executable skills (scoring, drafting, fact-check, reply classification, booking reply, self-review). |
| `pipeline/` | Step-by-step run instructions each scheduled job executes. |
| `scripts/` | Apollo REST client, church crawler, send-approved script. |
| `data/` | Lead lists, draft queue, reports, experiment log. Committed = auditable. |
| `.github/workflows/` | The cron jobs (daily pipeline, reply check, biweekly review, send-approved). |

## Run modes

`config/system.yaml` -> `mode`:

- **`dry_run`** (current): everything runs end to end, drafts are produced and queued, but nothing is
  written to Apollo sequences and no email is ever sent. Safe while inboxes warm.
- **`live`**: contacts get added to Apollo sequences. Scripts refuse to go live until the
  preflight in `scripts/preflight.py` passes (booking link set, physical address set, mailboxes
  connected in Apollo, ICP configs no longer marked `draft`).

## Setup checklist (in order)

1. **Repo secrets** (Settings -> Secrets and variables -> Actions):
   - `ANTHROPIC_API_KEY` - powers the scheduled Claude runs
   - `APOLLO_API_KEY` - Apollo Settings -> Integrations -> API. Requires a paid Apollo plan
     (the $49 Basic plan from the reference doc). Verified 2026-07-01: the free tier blocks
     people search through both the REST API and the MCP connector
     (`API_INACCESSIBLE`), so the upgrade is a hard prerequisite for list building.
2. **Merge to the default branch.** GitHub cron schedules only fire from the default branch.
3. **Connect the 4 warmed mailboxes** to Apollo via OAuth once warming completes
   (2 per domain, per `config/domains.yaml`).
4. **Fill placeholders**: Dubsado booking link + physical mailing address in `config/system.yaml`.
5. **Finalize ICPs** in `config/icp-startups.yaml` / `config/icp-churches.yaml` and flip
   `status: draft` -> `status: final`.
6. **Add case studies** to `knowledge/case-studies/` (template provided). Until at least one
   exists per ICP, drafts lean on the business overview only and say nothing unverifiable.
7. Run the daily pipeline once manually (Actions -> Daily outreach pipeline -> Run workflow)
   and review the drafts it queues in `data/queue/`.
8. Flip `mode: live` when you're happy with draft quality and inboxes are connected.

## Compliance guardrails baked in

- CAN-SPAM: Apollo's opt-out link on every sequence email, physical address in footer
  (from `config/system.yaml`), opt-outs marked do-not-contact in Apollo immediately.
- No cold SMS anywhere in this system. LinkedIn is out of scope for now.
- Never send from hellopolymer.com. Only the two cold domains in `config/domains.yaml`.
