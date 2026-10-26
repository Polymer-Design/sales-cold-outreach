# Handoff: add the Build Planner to the Polymer dashboard

## What this is

The Build Planner is a capacity tool for Polymer's initial builds (Sprint/Campaign, Startup Core, Church Core). It answers two questions:

1. **When is the next open kickoff for each tier**, given who is booked and how many hours Blair and Ethan have each week?
2. **What are the phase dates for a booked build**, so they can go straight into a proposal or kickoff email?

A working prototype is attached as `build-planner.html`: one self-contained page with all the logic in the inline `<script>`. Treat it as the **reference implementation for behavior**, not for code or styling. Rebuild it as a native part of the dashboard.

## Before you write code

1. **Inspect the dashboard first.** Work out its framework, routing, data layer, auth and component library. Then build the planner the same way the rest of the dashboard is built.
2. **Use the dashboard's existing components, tokens and styles everywhere.** That includes buttons, inputs, tables, colors, type sizes and spacing. Don't copy the prototype's CSS, fonts or colors, and don't modify existing components. If nothing existing fits (for example the week grid), build a new component from the same tokens.
3. **Store data in the dashboard's existing data store**, so Ethan and Blair see the same schedule. The prototype stored data in an artifact database, which doesn't carry over. There is no live data to migrate: the prototype has no bookings and no saved settings.
4. If anything here conflicts with how the dashboard works, follow the dashboard and note the deviation in your summary.

## Data model

**Build**

| Field | Type | Notes |
|---|---|---|
| `id` | string | |
| `name` | string | Client name |
| `tier` | `sprint` \| `core` \| `church` | Add `custom` later (see "Later") |
| `kickoff` | date (YYYY-MM-DD) | Always stored as a **Monday**. Snap any picked date to the Monday of its week. |
| `createdAt` | timestamp | |

**Settings** (one shared record)

| Field | Default | Notes |
|---|---|---|
| `hours.blair` | 17 | Production hrs/week for Polymer |
| `hours.ethan` | 15 | |
| `monthly.blair` | 0 | Monthly-plan hrs **per month** sold, assigned to Blair |
| `monthly.ethan` | 0 | |
| `anchor` | `2026-10-05` | A Monday; kickoff windows count from here |
| `cadence` | 2 | Kickoff window every N weeks (1–4) |
| `tiers` | see below | Hours per phase per person, editable |

**Tier templates.** Each row is one week, in order. `kind` is one of `concept`, `design`, `review` (waiting on client), `dev`, `launch`.

Sprint / Campaign: one page, 4 weeks

| Wk | Phase | Kind | Blair | Ethan |
|---|---|---|---|---|
| 1 | Concept | concept | 8 | 1 |
| 2 | Review + revisions | review | 3 | 1 |
| 3 | Development | dev | 4 | 4 |
| 4 | QA + launch | launch | 1 | 3 |

Startup Core: up to 5 pages, 8 weeks

| Wk | Phase | Kind | Blair | Ethan |
|---|---|---|---|---|
| 1 | Homepage concept | concept | 9 | 1 |
| 2 | Review + revisions | review | 3 | 1 |
| 3 | Interior pages | design | 7 | 2 |
| 4 | Interior pages | design | 6 | 3 |
| 5 | Client feedback | review | 3 | 1 |
| 6 | Development | dev | 4 | 4 |
| 7 | Development | dev | 3 | 4 |
| 8 | QA + launch | launch | 1 | 3 |

Church Core: up to 10 pages plus Planning Center/YouTube integrations, 8 weeks

| Wk | Phase | Kind | Blair | Ethan |
|---|---|---|---|---|
| 1 | Homepage concept | concept | 10 | 1 |
| 2 | Review + revisions | review | 4 | 1 |
| 3 | Interior pages | design | 8 | 3 |
| 4 | Interior pages | design | 8 | 4 |
| 5 | Client feedback | review | 4 | 2 |
| 6 | Dev + integrations | dev | 7 | 7 |
| 7 | Dev + integrations | dev | 6 | 7 |
| 8 | QA + launch | launch | 2 | 4 |

## Scheduling logic (port exactly)

Put this in one pure, unit-tested module with no UI dependencies.

- **Week index.** `week(date) = (Monday of date − Monday of anchor) / 7 days`. Do date math in UTC (or at noon) to avoid DST off-by-ones.
- **Build load.** Each build adds phase `i`'s hours to week `week(kickoff) + i`, per person. A `concept` phase also adds 1 to that week's concept count.
- **Monthly-plan load per week.** `monthly[person] × 12 / 52`, added to every week.
- **Fit check.** A tier fits at kickoff week `k` if, for every phase `i`, with `w = k + i`:
  - `existing[w][person] + phase[person] + monthlyPerWeek(person) ≤ hours[person]` for both people, **and**
  - if the phase is a `concept`, `existing[w].concepts == 0` (**never two concept phases in the same week**).
- **Kickoff windows.** The candidate weeks are `w = ceil(currentWeek / cadence) × cadence`, then every `cadence` weeks after that.
- **Next open kickoff** for a tier is the first window, within 52 windows, that fits. If none fits, show "No opening".
- **Launch date** = Friday of the tier's last phase week: `Monday(kickoff + (phases − 1) weeks) + 4 days`.
- **Conflicts.** For any chosen week, return human-readable reasons, e.g. "Blair at 18/17h week of Nov 2" or "second concept week of Nov 2". The booking form shows these, but booking an over-capacity week is still **allowed**.
- **Build status.** "Upcoming" before kickoff week, the current phase name during the build, "Launched" after the last week.

### Acceptance tests

These use default settings, with no monthly hours and windows at weeks 0, 2, 4…:

1. With no builds, every tier's next open kickoff is the first window.
2. With one Church Core at week 0, the next open weeks are: Sprint = 2, Startup Core = 2, Church Core = 4.
3. With Startup Core at 0, Sprint at 2 and Sprint at 4, the next open week for every tier is 6.
4. Adding monthly hours makes slots move later. For example, Blair monthly = 40 hrs/month (about 9.2 hrs/week) leaves 7.8 hrs/week, so an 8-hr concept no longer fits anywhere and that tier shows "No opening".
5. A kickoff date picked mid-week is stored as that week's Monday.

## UI (keep the order; style with the dashboard's components)

1. **Capacity line.** Each person's hrs/week and monthly-plan hrs/week, plus the rule "one concept phase per week".
2. **Next open kickoff.** One card per tier showing the date, how many weeks out it is (a green/amber/red chip for ≤2, ≤5, >5 weeks), the launch-by date and total hours per person. A "Book this slot" button pre-fills the booking form.
3. **Schedule.** A 12-week grid starting this week, with Earlier / This week / Later controls that move 4 weeks at a time:
   - one row per build, with a phase label in each week, colored by kind, and review weeks visually distinct as "waiting on client"
   - two load rows (Blair, Ethan) showing `used/capacity`: green under 85%, amber from 85% up to 100%, red over capacity
   - horizontal scroll on narrow screens
4. **Book a signed build.** Client name, tier, and a kickoff list of the next 10 windows, each labeled "open" or "full (reason)", plus "Another date…" with a date picker. A live fit note shows "Fits. Launch by …" or the conflicts.
5. **Proposal dates.** For the selected build: every phase with "week of" dates (review phases suffixed "(your team)"), the launch date, and a **Copy dates** button that copies plain text in this format:
   ```
   Grace Hill Church · Church Core
   Kickoff: Mon, Nov 2
   Week of Mon, Nov 2: Homepage concept
   Week of Mon, Nov 9: Review + revisions (your team)
   …
   Launch: Fri, Dec 25
   ```
6. **Booked builds.** A list sorted by kickoff showing name, tier, kickoff → launch, a status pill, an editable kickoff date (snapped to Monday, so you can reschedule a client who slips), "Dates" (which selects the build for the proposal panel), and Remove with an inline confirm step.
7. **Settings** (collapsed): the hours, monthly hours, anchor, cadence, and editable per-phase hours for each tier with totals. Saving them updates everything immediately for both users.

## Business rules to show in the UI

- **Kickoff = the discovery meeting.** Proposal, contract, first payment and onboarding all happen before it.
- **Deposit flag.** If a booked kickoff is **more than 30 days after the booking date**, show a "Slot deposit (25%)" badge on the build. Packages that can't start within 30 days pay a 25% deposit to hold the slot.

## Later (don't build now unless it's trivial)

- A `custom` tier with a variable number of weeks built from phase blocks.
- Pulling monthly-plan hours automatically from the existing monthly-plan tracking, instead of entering them in Settings.
- Writing phase dates to the build's Trello card as a dated checklist.

## Done means

- The scheduling module passes the acceptance tests above.
- The planner page lives in the dashboard's nav and uses only existing components and tokens.
- Bookings and settings are shared between Ethan and Blair.
- Your summary lists any deviations from this spec and why.
