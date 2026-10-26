# Outreach Command Center (dashboard)

A small Next.js app with three sections in a collapsible left rail:

- **Outreach** reads the same `data/` and `config/` files the Python pipeline writes, at build
  time; it rebuilds on every push to `main`.
- **Planner** (Build Planner: kickoff capacity, schedule, proposal dates) and **Money**
  (payment splitter, card/runway ledgers, full-time goals) store shared data in Postgres
  (see step 5 below).

Gated to `@hellopolymer.com` Google accounts only (see `lib/auth.ts`).

## Setup (Ethan's manual steps - everything else is already built)

### 1. Google OAuth client

1. Go to [Google Cloud Console](https://console.cloud.google.com/) -> **APIs & Services ->
   Credentials** -> **Create Credentials -> OAuth client ID**.
2. Application type: **Web application**.
3. **Authorized redirect URI**: `https://<your-vercel-domain>/api/auth/callback/google`
   (use the real domain once step 2 below is set - e.g.
   `https://outreach.hellopolymer.com/api/auth/callback/google`).
4. Save. Copy the **Client ID** and **Client secret**.

### 2. Vercel project settings

The Vercel project (`sales-cold-outreach`, team `polymer-design`) is already linked to this
repo and auto-deploys on every push to `main`. Two things to set in its dashboard:

- **Settings -> General -> Root Directory**: set to `dashboard`.
- **Settings -> Environment Variables**, add:
  - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` - from step 1.
  - `NEXTAUTH_SECRET` - generate with `openssl rand -base64 32`.
  - `NEXTAUTH_URL` - the final domain, e.g. `https://outreach.hellopolymer.com`.
- **Settings -> Domains**: add your subdomain (e.g. `outreach.hellopolymer.com`) and add the
  CNAME record Vercel gives you to hellopolymer.com's DNS.

Once those are set, redeploy (or just push any commit) and it's live.

### 3. GitHub token (booking capture + the dashboard's own PR approvals)

Both the Cal.com webhook (step 4) and the manual "Log a booked call" fallback fire a
`repository_dispatch` event; the Approvals tab also reads/edits/merges PRs with this same
token. All of it needs one token with `repo` scope:

1. GitHub -> your avatar -> **Settings -> Developer settings -> Personal access tokens ->
   Tokens (classic) -> Generate new token**. Scope: **`repo`**. Note the expiration.
2. Vercel -> **Settings -> Environment Variables**, add `GITHUB_DISPATCH_TOKEN` with that
   token. Redeploy.

Without this set, the form/webhook/approvals return a clear error instead of silently failing.

### 4. Cal.com webhook (automatic booking capture - no manual click needed)

Cal.com has a native webhook, no Zapier/Make relay required:

1. Generate a random secret: `openssl rand -base64 32`.
2. Vercel -> **Settings -> Environment Variables**, add `CAL_WEBHOOK_SECRET` with that value.
   Redeploy.
3. Cal.com -> **Settings -> Developer -> Webhooks -> New Webhook**:
   - **Subscriber URL**: `https://<your-domain>/api/webhooks/cal`
   - **Secret**: the same value from step 2.
   - **Event trigger**: only **Booking Created**.
   - Apply it to the *Website Intro Call* and *Church Website Intro Call* event types
     (or all of them - unrecognized event-type slugs are safely ignored, see
     `app/api/webhooks/cal/route.ts`).

The "Log a booked call" button on the Booked Calls tab stays as a manual fallback - use it if
a booking happened somewhere the webhook doesn't cover, or the webhook is misconfigured.

Note: I built the payload parsing against Cal.com's documented webhook shape but haven't seen
a real delivery yet - if the first real booking doesn't show up as a call-prep briefing, check
the Vercel function logs for `app/api/webhooks/cal` first; the error will say exactly which
field didn't parse.

### 5. Database for Planner + Money (Neon, free)

Outreach still reads repo files at build time. The **Planner** and **Money** sections need live
shared writes (Ethan and Blair see the same bookings and ledger), so they use Postgres:

1. Vercel -> the `sales-cold-outreach` project -> **Storage -> Create Database -> Neon** (free
   plan) -> connect it to this project for Production (and Preview if you want). This sets
   `DATABASE_URL`.
2. Redeploy. Tables are created automatically on first request (`lib/db.ts`); there's no
   separate migrate step.
3. Money -> **Settings -> Import**: upload `pricing-config.json` and `ledger-seed.json` from the
   Money handoff. They live only in the database, never in git: this repo is public and they
   contain internal pricing and owner-pay splits. Re-importing the seed skips rows already there.
   When pricing changes, import the new config the same way.

Until `DATABASE_URL` is set, Planner and Money show a setup notice instead of erroring.

## Tests

```
cd dashboard
npm test
```

Runs the pure scheduling and money math (`lib/planner/schedule.test.ts`,
`lib/money/money.test.ts`) with Node's built-in test runner, against every acceptance test in the
two handoff specs. The Money tests read the real config from `docs/money-module/` (gitignored); if
it's missing they're skipped with a message saying so.

## Local development

```
cd dashboard
npm install
cp .env.example .env.local   # fill in the same values as above
npm run dev
```
