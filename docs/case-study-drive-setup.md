# Case study Drive sync: setup (Ethan's manual steps)

This is already built and already scheduled - `scripts/case_study_sync.py` pulls every
Google Doc in a Drive folder whose header says `Status: Approved`, stages it, and the
`case-study-sync` skill distills it into `knowledge/case-studies/*.md` via a PR. That's
exactly the "only use stats if verified" behavior: unapproved docs are skipped entirely,
and the distilled file only ever contains facts/numbers from the approved Doc itself.

**It runs automatically on the 1st of every month** (`.github/workflows/case-study-sync.yml`,
cron `0 14 1 * *` - 10am ET), plus on demand any time via that workflow's "Run workflow"
button if you want to push an update without waiting for the schedule.

Two things were never actually finished, though - the folder was never shared and its id
was never set as a secret, so every run so far has just exited with nothing to do.

## 1. Share the case study folder with the service account (read-only)

Same service account as the call-prep Drive sync (`GOOGLE_SERVICE_ACCOUNT_JSON`'s
`client_email`), but this one only ever reads, so **Viewer** is enough here.

1. Go to: https://drive.google.com/drive/u/0/folders/1Uxekg7Au7XT5UaGHD-y3quHKqTeq805F
2. Share it with the service account's email, permission **Viewer**.

## 2. Add the folder id as a GitHub secret

1. GitHub → repo → **Settings → Secrets and variables → Actions → New repository secret**.
2. Name: `CASE_STUDY_FOLDER_ID`
3. Value: `1Uxekg7Au7XT5UaGHD-y3quHKqTeq805F`

## How "approved" + "verified" works

- Put each case study in that Drive folder as a Google Doc.
- The first line of the Doc must read `Status: Approved` (anything else - draft, blank,
  a different word - and `case_study_sync.py` skips it, leaving it untouched in Drive).
- Once pulled, the `case-study-sync` skill distills the Doc's own text into a
  `knowledge/case-studies/{slug}.md` file and opens a PR - it doesn't add or infer any
  number that isn't in the Doc. Merge the PR once you've checked the distillation.
- From then on, `fact-check-email` checks every outreach email's claims against these
  files word-for-word before it can send - that's the "only use stats if verified" gate.
