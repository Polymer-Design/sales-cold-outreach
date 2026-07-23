# Pilot test — 2026-07-13

A dry-run exercise of the whole pipeline against one startup lead and one church lead,
to test copy quality and shake out bugs before launch. No real emails sent. The leads and
case studies below are **fictional stand-ins** used only to test the machinery — they are
not in the real knowledge base and are not citable in live sends.

## What was tested and result

| Step | How | Result |
|---|---|---|
| Apollo connection | live profile call | PASS (auth works; 80 lead credits) |
| Apollo people search | live search call | GATED — free plan blocks it (`API_INACCESSIBLE`). Needs the $49 Basic upgrade. Auth/filter shape verified. |
| Church crawler (scraping) | mocked fetch over 2 seed churches | PASS — found the Church Center church, skipped the one without it, wrote candidates.csv |
| Scoring | rubric applied to both leads | PASS — startup 82 (hot), church 71 (warm) |
| Drafting | outreach-email skill + playbook | PASS — see sequences below |
| Voice gate | `scripts/voice_check.py` on both | PASS — 0 banned words / openers / em dashes |
| Length discipline | word count | PASS — all 6 emails inside their bands |
| Inbox-health failsafe | monitor over a 4-mailbox fixture | PASS — fired alarms for a blacklisted box and a health-74 box, watch for health-87, logged the alert |

## Lead A — startup (fictional): Maya Chen, Head of Marketing, "Tessera" (Series B fintech)

Research fixture (the kind of facts the drafter must gather, each would carry a source URL live):
- Raised $32M Series B, announced ~8 weeks ago
- Maya started as Head of Marketing ~4 weeks ago
- Site is a stock Webflow template, one page
- Hiring a Brand Designer (role posted ~2 weeks ago)

Fictional case study used as proof: "Halcyon — rebuilt their marketing site in 5 weeks post-Series A, demo requests climbed."

**Score: 82 (hot)** — firmo 25 (stage+size fit), techno 15 (weak site = need), intent 30 (fresh raise + brand hire), reach 12.

**Email 1** — subject: *your site vs your raise*
> Maya, congrats on the Head of Marketing seat at Tessera. Your site's still the stock Webflow template though, which is a strange gap for a company that just raised $32M and is already hiring a brand designer. We build marketing sites for funded startups that need to look the part fast. Rebuilt Halcyon's site in 5 weeks right after their Series A and their demo requests climbed. Worth 15 minutes to see if we could do the same before your brand hire starts?
> \- Ethan

**Email 2** (+3d) — subject: *before the brand hire*
> One more thought, Maya. If you're bringing on a brand designer, handing them a modern site to build on beats handing them the template to fight with. We handle the build, your designer drives the direction. Happy to show you a couple we did for Series B teams. You free later this week?

**Email 3** (+7d) — subject: *last note*
> I'll leave it here, Maya. If the site's not this quarter's problem, no worries at all. If it is, we can have you looking like your Series B by the time your designer starts. Want me to send over a couple examples?

## Lead B — church (fictional): Dave Miller, Executive Pastor, "Rivercrest Church" (~2,500 attendance)

Research fixture:
- Runs Church Center (giving, events, groups) — subdomain found
- "Build the Future" capital campaign for a new kids space, announced ~5 weeks ago
- Site visibly unchanged since 2019, not mobile-friendly

Fictional case study used as proof: "Northfield — rebuilt their site around Church Center mid-campaign, online giving signups jumped."

**Score: 71 (warm)** — firmo 25 (attendance mid-band), techno 20 (confirmed Church Center), intent 20 (campaign ~5 wks), reach 6 (church emails verify weaker).

**Email 1** — subject: *your Build the Future page*
> Dave, saw the Build the Future campaign for the new kids space. That page is doing a lot of work on a site that hasn't changed since 2019 and doesn't hold up on a phone, which is where most of your people will open it. We build church sites around the Church Center tools you already run, giving and events included. Did exactly this for Northfield mid-campaign and their online giving signups jumped. Worth 15 minutes before the next push?
> \- Ethan

**Email 2** (+3d) — subject: *mobile giving*
> Quick follow, Dave. Most capital campaign gifts now start on a phone, and right now your giving link takes a few too many taps to find. We can wire Church Center giving right into the homepage so a pledge is one tap from anywhere. Want to see how that looks?

**Email 3** (+7d) — subject: *last one*
> Last note, Dave. If the timing is off with everything else the campaign is taking, I get it. If a site that keeps pace with the campaign would help, we can move fast. Want a couple church examples to look at?

## Bugs found and fixed during the test

1. **Duplicate send-cap config** — the per-mailbox daily cap existed in both `limits` and
   `inbox_health.send_caps`. Removed the duplicate; `inbox_health.send_caps` is now the one
   source (health-aware: warmup vs healthy), and `daily-run.md` points at it.
2. **Voice gate was judgment-only** — added `scripts/voice_check.py` + `config/voice-bans.yaml`
   so banned words / openers / em dashes are caught deterministically before the skill's
   judgment pass. Verified it fails dirty copy and passes clean copy.
3. **No runaway-cost guard on the scheduled Claude runs** — added `--max-turns` to each
   workflow.

## Honest limitations of this test

- Live web research and the live crawler couldn't run in the build sandbox (network is
  locked down); both are verified by logic/fixtures and will do real fetches in CI, which has
  open network. First real crawl run should be eyeballed.
- Apollo people search is upgrade-gated, so end-to-end lead pull wasn't exercised against real
  data. Everything up to the API boundary is verified.
- The Apollo reply-reading endpoint shape (`emailer_messages/search`) is still unconfirmed
  against a live mailbox — flagged in `scripts/apollo_client.py`.
