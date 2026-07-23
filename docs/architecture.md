# Polymer Outreach — Tech Stack & How It Works

A plain-language map of the system for sanity-checking and for handing to a designer to
visualize. The Mermaid diagrams below render on GitHub automatically.

## The tech stack (who does what)

| Layer | Tool | Job |
|---|---|---|
| Brain | **Claude** (via GitHub Actions + the Claude Code Action) | Scores leads, researches companies, writes emails, fact-checks them, classifies replies, runs the biweekly review |
| Lead data + sending + CRM | **Apollo** | Finds startup leads, holds all contacts, sends every cold email through connected mailboxes, detects replies |
| Church lead sourcing | **Custom crawler** (`scripts/church_crawler.py`) | Finds churches via the Planning Center / churchcenter.com signal (Apollo's church data is thin) |
| Mailbox warmup + deliverability | **TrulyInbox** | Warms the sending inboxes; the health API feeds the failsafe monitor |
| Site-quality signal | **Google PageSpeed** | Scores each lead's website speed/mobile health (`scripts/pagespeed.py`) → feeds the technographic score and gives the email its first-line load-time hook |
| Internal alerts to Ethan | **Resend** | Emails Ethan inbox-health alarms and reply flags. Never sends sales email |
| Scheduler + system of record | **GitHub Actions + this repo** | Runs the jobs on cron; the repo is the audit trail (leads, drafts, reports, logs) |

**Sending, said once clearly:** every cold email (both ICPs) goes out through **Apollo's
sequencer**, sending through your **TrulyInbox-warmed mailboxes** connected to Apollo by OAuth
(not Apollo's shared servers). Startups send from `launchwithpolymer.com`, churches from
`integratedchurchwebsites.com`. Resend is only for alerts to you.

## The main pipeline

```mermaid
flowchart TD
    A1[Startups: Apollo people search] --> B[New leads]
    A2[Churches: crawler finds churchcenter.com signal] --> A3[Apollo finds up to 2 decision makers] --> B
    B --> C[Score 0-100<br/>lead-scoring skill<br/>+ PageSpeed signal]
    C --> D{Tier}
    D -->|Hot 75+| E[Draft, human reviews email 1]
    D -->|Warm 50-74| F[Draft automatically]
    D -->|Cold under 50| Z[Tag, skip for now]
    E --> G[outreach-email skill<br/>research + write 3-email sequence in Ethan's voice]
    F --> G
    G --> H[fact-check-email skill<br/>voice gate + facts verified vs knowledge base]
    H -->|fail| G
    H -->|pass| I[Apollo sequence<br/>send via ICP's warmed mailboxes]
    I --> J[3 emails: day 0, +3, +7]
    J --> K{Reply?}
    K -->|no reply after 3| L[Tag, recycle after 90 days with a fresh angle]
    K -->|reply| M[Apollo auto-pauses sequence]
    M --> N[classify-reply skill]
```

## What happens when someone replies

```mermaid
flowchart TD
    N[Reply classified] --> O{Category}
    O -->|Interested| P[booking-reply skill drafts friendly email + Dubsado link]
    P --> Q[Opens approval PR - held, never auto-sent]
    Q --> R[Ethan merges PR = send]
    O -->|Not interested / unsubscribe| S[Mark do-not-contact in Apollo, log, never re-add]
    O -->|Referral / objection / ambiguous| T[Flag in a GitHub issue with a suggested reply for Ethan]
    O -->|Soft: later| U[Tag nurture with a follow-up date]
```

## The self-improvement loop (every 2 weeks)

```mermaid
flowchart LR
    V[Read performance:<br/>Apollo stats + reply log + experiments] --> W[Pick split-test winners]
    W --> X{Change type}
    X -->|Copy: subject, first line,<br/>length, CTA, proof| Y[Auto-apply to config/playbook.yaml<br/>+ start next test]
    X -->|Structural: scoring, ICP,<br/>sequence length| AA[Propose to Ethan for approval]
    Y --> V
    AA --> V
```

## The safety rails (always on)

```mermaid
flowchart TD
    M1[Every Apollo write checks config/system.yaml mode] --> M2{Mode}
    M2 -->|dry_run| M3[Draft + queue only, nothing sends]
    M2 -->|live| M4[preflight.py must pass first:<br/>booking link, address, mailboxes connected, ICPs final]
    N1[Inbox health check daily] --> N2{TrulyInbox score}
    N2 -->|under 80 or blacklisted| N3[Email Ethan: pause + warm a replacement]
    N2 -->|under 90| N4[Watch: ease that inbox's volume]
```

## One-line summary

Apollo and a church crawler find the right 2 people per org, Claude scores and writes a
researched 3-email sequence in Ethan's voice, a fact-check gate blocks anything off-voice or
unverified, Apollo sends it through warmed inboxes, replies route to a booking link (you
approve by merging a PR), and every two weeks the system A/B-tests itself and keeps what wins.
