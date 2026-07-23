# New session handoff

Paste the block below as your first message in the fresh Claude Code session (with this repo
attached), so it starts caught up instead of cold.

---

This repo is a complete, already-built cold-outreach system (Apollo + Claude) for my company
Polymer, built in a prior session that couldn't push due to GitHub permissions. If the code
isn't on the branch yet, unpack any zip I attach into the repo root and push to
`polymer-design/sales-cold-outreach` on the default branch (main). Do a tiny test commit FIRST
to confirm you actually have write access; if it's read-only, stop and tell me.

Context on what's built and decided:
- Two ICPs, max 2 decision makers each: **startups** (Series A–C, vertical still TBD) and
  **churches** (500–10k attendance, found via the Planning Center / churchcenter.com signal).
  Definitions in `config/icp-*.yaml`, still `status: draft`.
- Sends from `launchwithpolymer.com` (startups) and `integratedchurchwebsites.com` (churches).
  **Never** from hellopolymer.com.
- Runs on **GitHub Actions cron**. Repository secrets: `ANTHROPIC_API_KEY`, `APOLLO_API_KEY`,
  `TRULYINBOX_API_KEY`, `GOOGLEPAGESPEEDINSIGHTS_API_KEY`, `RESEND_API_KEY`.
- Sending path: Apollo sequencer sending through TrulyInbox-warmed mailboxes (OAuth-connected),
  not Apollo's shared servers. Resend is ONLY internal alert emails to me, never sales email.
- Pipeline: source → score → draft (my voice, zero AI tells) → **fact-check gate** → 3-email
  sequence → reply classification → interested replies get a Dubsado booking link,
  **approval-first** (merging a PR = sending).
- **Hybrid split-test loop**: auto-applies copy winners to `config/playbook.yaml`, holds
  structural changes (scoring, ICP, sequence) for my approval.
- **TrulyInbox** inbox-health failsafe emails me when a mailbox degrades (watch <90,
  alarm <80 or blacklist/auth fail).
- Everything is `mode: dry_run`; nothing sends until `scripts/preflight.py` passes.
- **Next task:** wire Google PageSpeed (secret `GOOGLEPAGESPEEDINSIGHTS_API_KEY`) into
  lead scoring and the email's first line — a slow/non-mobile site becomes a scored signal
  and a specific opening hook.
- Read `README.md`, `CLAUDE.md`, and `docs/` (especially `docs/architecture.md`) for the
  full picture.

Still open, on me (Ethan): finalize the two ICPs, add the Dubsado booking link + physical
mailing address to `config/system.yaml`, build the case study library per
`docs/case-study-brief.md`, and upgrade Apollo to a paid plan at launch.
