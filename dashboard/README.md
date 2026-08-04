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

## Local development

```
cd dashboard
npm install
cp .env.example .env.local   # fill in the same values as above
npm run dev
```
