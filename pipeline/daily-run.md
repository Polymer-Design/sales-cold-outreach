# Daily pipeline run

Executed by `.github/workflows/daily-pipeline.yml` (weekdays 9am ET) or manually.
Read `CLAUDE.md` hard rules first. Check `config/system.yaml` `mode` before every Apollo write.

## 1. Score the backlog first

Scoring is the turn-expensive step (platform detection + real research per lead), not
ingestion - ingestion is cheap API calls, scoring is the part that actually takes agent
budget. Score BEFORE ingesting anything new, or ingestion starves scoring of the same
run's turn budget and the backlog only grows (confirmed live 2026-10-15/16: ingestion ran
3 days straight, scoring ran 0 of those days, 59 leads piled up unscored while 0 new ones
got the chance to clear warm tier).

Run the **lead-scoring** skill on every unscored lead already sitting in
`data/leads/index.jsonl` (`status: ingested`) and every `status: ingested` row in
`data/leads/churches/candidates.csv`. Cap this step at **15 leads per run**, well under
`limits.new_leads_scored_per_day`'s 50 (the DAILY cap across however many runs happen that
day, not a single run's budget). If the backlog is bigger than 15, score that slice and
leave the rest for the next run - a predictable, affordable daily drain beats a single
expensive run that blows its budget.  Write scores to the index (and Apollo custom fields
in live mode).

**Reserve up to 5 of those 15 for church leads** whenever any are waiting (unscored church
rows in either file); hand any unused church slots to startups. Added 2026-10-28: the
startup backlog (160+ unscored) otherwise wins every slot and the two church inboxes sit
idle.

**History on this number, so it isn't re-litigated from scratch:** tried raising this to 30
on 2026-10-17 on the theory that Steps 2/3/5 are now near-free lookups against data
captured at ingestion (`org_data`, the church crawler's output, Apollo contact fields - see
the lead-scoring skill's "Before Step 4" gate), so a firmographically-hopeless lead should
cost ~nothing to screen out. Real result: $10.46 for one 30-lead run, well above the old
15-lead baseline (~$2-7), because that batch (prioritized toward YC/growth-filtered leads
per the rule below) was mostly leads that genuinely earned real research - the gate had
little to skip, which is CORRECT behavior, not a bug, just not the cost savings hoped for
on that particular batch. Pulled back to 15 the same day rather than let that ride.
**Revisit raising this again once `data/costs.jsonl` (`scripts/cost_tracker.py check`)
shows several consecutive 15-lead runs landing comfortably under the old baseline** - that
would mean the gate is earning real savings on the backlog mix at the time, and headroom
exists to raise the per-run cap again. Don't raise it on theory alone a second time.

**Within the startups backlog specifically, score `source` containing `:yc:` or dated
2026-10-16 or later FIRST, the pre-growth-filter backlog (dated 2026-10-15 or earlier,
`config/icp-startups.yaml` `apollo_filters` before the growth-trajectory filter was added)
LAST.** Churches: oldest `found_at` first as before, no similar filter-change exists there.
Reasoning (2026-10-17): the pre-filter startup backlog is already well-represented in
scoring data (30+ leads scored, 1 warm) and strict oldest-first would keep burying the
newer, better-sourced YC and growth-filtered channels behind it for days - spending scoring
budget re-confirming what's already known instead of answering whether the fixes actually
worked. Nothing in the old backlog is discarded, it's just deprioritized, not skipped.

**Commit and push after EVERY lead is scored, not once at the end.** `git add
data/leads/index.jsonl data/leads/churches/candidates.csv && git commit -m "score: {org}"`
(then push - fetch/rebase/retry on rejection, same as the workflow's own push step). This
run can still end early for reasons outside your control (turn cap, timeout); a crash
partway through the batch should keep whatever scores already happened, not lose them.
Don't batch all the commits for the end of the step.

**Score every lead directly in this same session - do not dispatch background subagents to
parallelize this.** See `CLAUDE.md` hard rule 8: this run has no way to resume after a
background task completes. Confirmed live 2026-10-16 - three straight runs dispatched
parallel scoring subagents, said "I'll continue once they report back," and the run just
ended there with nothing written, real cost spent for zero result. One lead at a time,
looping through the batch, is slower but is the only thing that actually produces output
here.

## 2. Ingest new leads (only with cap room left over from step 1)

If step 1 already used the full `limits.new_leads_scored_per_day` cap scoring backlog,
**skip ingestion entirely this run** - let the backlog drain before adding to it. Otherwise
ingest up to whatever remains of the cap:

**Churches:** if `data/leads/churches/candidates.csv` has rows with `status: new`
(produced by the church-crawler workflow), for each org find decision makers via Apollo
people search (`q_organization_domains_list` on the church's domain, titles from
`config/icp-churches.yaml`). Max 2 people per org, priority-ordered by title list.

**Startups:** Apollo people search with `config/icp-startups.yaml` `apollo_filters`, PLUS a
second channel on the same ICP using `apollo_filters_yc` (`scripts/apollo_client.py
people-search --icp startups --filter-set apollo_filters_yc`) - Y Combinator companies,
sourced via Apollo's own "Y Combinator"/"YC" org keyword tags. Run both channels; dedupe
against each other and against `data/leads/index.jsonl` (by domain) before scoring either.
Skip orgs already in `data/leads/index.jsonl` (dedupe by domain). Split whatever room is
left in the cap roughly evenly between ICPs, broad + YC channels sharing the startups-ICP
half rather than each getting a full half.

Both paths go through `scripts/apollo_client.py people-search`, which enriches every match
by default (1 Apollo credit per person actually matched, 0 for a miss) - that's what fills
in the real name/email/domain the rest of this pipeline needs. Don't pass `--no-enrich` here.

**Keep the organization fields Apollo's enrichment response already includes - don't just
extract contacts and throw the rest away.** Added 2026-10-17 per Ethan (cost-reduction
request): the SAME enrichment call already returns `organization.estimated_num_employees`,
`organization.founded_year`, and sometimes headcount growth / industry fields - this is data
scoring's firmographic step would otherwise have to re-research later, for free, since it's
already sitting in a response you already paid the Apollo credit for. Store whatever the
response actually has (some orgs have sparse data, that's fine - not every field will be
present) under `org_data` on the lead record:

Append every new lead to `data/leads/index.jsonl`:
`{"org", "domain", "icp", "contacts": [{"name","title","email_status","apollo_id"}], "source", "added", "org_data": {"estimated_num_employees", "founded_year", "industry", "...whatever else the response has"}}`

## 3. Draft

Take the highest-scored undrafted leads, hot tier first then warm, up to
`limits.emails_drafted_per_day`. Cold tier: skip (tag only). For each, run the
**outreach-email** skill, then the **fact-check-email** skill. Respect the max-2-rewrite rule.

**Draft per ICP, and only what can be sent today.** For each ICP, today's sending room is
(that ICP's mailboxes in `config/domains.yaml`) × `inbox_health.send_caps.new_contacts_per_mailbox_daily`,
minus contacts already added today and minus drafts already sitting at `status: ready` for
that ICP. Draft at most that many per ICP - a draft that can't be pushed today just ages its
research and costs money (2026-10-28: 26 drafted, 20 could go out). Split
`limits.emails_drafted_per_day` between the ICPs that have warm/hot leads waiting, up to
half each; give a share one ICP can't use to the other. Within an ICP, hot first, then
highest score.

## 4. Push ready drafts (live mode only)

**First, check for already-approved hot-tier leads from a PREVIOUS run:** any draft under
`data/queue/drafts/` with `status: hot_approved` sitting on `main` (meaning its PR already
merged - see below) gets pushed to Apollo right now via the same mechanism as warm tier,
then set to `status: pushed`.

For each draft with `status: ready`:
- **Hot tier**: requires human review of email 1 before anything touches Apollo.
  - A hot-tier draft at `status: ready` ALWAYS goes to a review PR, even if an earlier PR
    for the same lead was merged. Never infer approval from PR or git history - only
    `status: hot_approved` on main means approved. A hot draft gets set back to `ready`
    precisely when its copy changed after approval (confirmed 2026-10-27: three hot drafts
    re-opened for review after a pitch correction were pushed anyway because the run decided
    the earlier merge still counted).
  - Set that draft's own frontmatter `status: hot_approved` (not `ready`) when writing the
    file - merging the PR is the entire approval step, nothing else needs to change on
    merge.
  - Open a new PR titled "Hot tier drafts YYYY-MM-DD" (or append another file to today's
    existing one if it's still open) containing the file(s), body listing each lead's name/
    org/score and a reminder to review each one's `email_1`.
  - **Notify Ethan the PR is waiting** - right after opening/updating it, call
    `scripts/notify.py` (`urgency: info`), subject `Hot lead(s) waiting for review:
    {org1, org2, ...}`, body a one-line summary per lead (name, org, score) plus a link to
    `https://outreach.hellopolymer.com/hot-leads#pr-{pr_number}` (the dashboard's Hot Leads
    tab, not the raw GitHub PR URL - he reviews/edits/removes/approves from there, same
    pattern as booking-reply's approval notification). Don't notify again for leads already
    included in an earlier notification for the same still-open PR.
  - Never call any send API directly from this step - the PUSH check above is what actually
    reaches Apollo, and only after a human merge.
- **Warm tier**: via `scripts/apollo_client.py` / direct Apollo calls —
  1. Upsert the contact (`apollo_client.py upsert-contact`), writing each drafted email's
     subject/body into the matching `config/system.yaml` `apollo_custom_fields` id
     (`cold_email_1_subject`/`_body`, `_2_`, `_3_`) via `typed_custom_fields`.
  2. Add the contact to `config/domains.yaml` `sequence_id` for that ICP (`add-to-sequence`),
     with a mailbox from that ICP's `mailboxes` list (alternate between the 2 for load
     balance). Both sequences already carry `sequence.emailer_schedule_id` ("Normal Business
     Hours": Mon-Fri 8am-5pm recipient-local, no weekends, holidays skipped) - built in at
     creation 2026-10-16, no need to re-set it per contact.
  3. Both sequences are ACTIVE (Ethan approved 2026-10-16) - adding a warm-tier contact is
     enough on its own, no per-run or per-contact approval needed. That's the design: only
     hot tier (above) and interested-reply booking emails need human review.

  Respect the per-mailbox cap from `config/system.yaml`
  `inbox_health.send_caps.new_contacts_per_mailbox_daily`: at most that many NEW contacts
  added to sequences from each mailbox per day (follow-ups to earlier contacts don't count -
  the number is already sized for them). Count contacts already added today (the `emailed`
  funnel events dated today, per mailbox) so the cap holds across runs and both ICPs. Ready
  drafts past the cap stay `status: ready` for the next run. All four inboxes are warmed;
  don't apply a separate warmup cap even if `data/inbox-health/latest.json` says
  `insufficient_data`.
- Set `status: pushed` + timestamp. In dry_run, leave `status: ready` and just report.
- **Funnel:** for each contact actually added to a sequence (live mode), record it:
  `python scripts/funnel.py record --email <email> --stage emailed --icp <icp> --org <org>`.
  This is the denominator for the booked-call conversion rate. **If the draft carries a
  `research_arm` (EXP-001 running, see `data/experiments.md`), pass it along:** `--arm deep`
  or `--arm light` - this is the only place that arm gets attached to the funnel record, and
  without it self-review can't break results out by arm later.

## 5. Recycle check

Leads tagged no-reply whose sequence ended more than `sequence.recycle_after_days` ago:
mark `status: recyclable` in the index. (Recycled leads get a fresh angle: re-run research
and drafting from scratch, never resend old copy.)

## 6. Commit and summarize

Commit changes in `data/` with message "daily run YYYY-MM-DD". Print a run summary:
leads ingested/scored/drafted/pushed, fact-check failures, anything needing Ethan.
If any step failed hard (Apollo auth, quota), say so first.
