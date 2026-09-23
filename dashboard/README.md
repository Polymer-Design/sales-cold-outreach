# Outreach Command Center (dashboard)

A small Next.js app that reads the same `data/` and `config/` files the Python pipeline
already writes to, and shows them as a real dashboard. No database, no separate API - it
rebuilds automatically every time Vercel picks up a push to `main`, so it's always as fresh
as the last commit.

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

## Local development

```
cd dashboard
npm install
cp .env.example .env.local   # fill in the same values as above
npm run dev
```
