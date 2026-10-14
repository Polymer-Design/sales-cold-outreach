# Call-prep Drive sync: setup (Ethan's manual steps)

Everything on the code side is built (`scripts/drive_intro_folder.py`,
`.claude/skills/call-prep/SKILL.md` Step 7, wired into `.github/workflows/call-prep.yml`).
Two manual steps left: share the folder, add one secret.

## 1. Share the parent folder with the service account

This repo already has a Google service account for `scripts/case_study_sync.py` (the
secret `GOOGLE_SERVICE_ACCOUNT_JSON`). The call-prep Drive sync reuses the same account,
but needs **Editor** access this time (case studies only ever needed Viewer, since that
script only reads).

1. Find the service account's email address: open the JSON you already have saved for
   `GOOGLE_SERVICE_ACCOUNT_JSON` and look for the `client_email` field
   (looks like `something@your-project.iam.gserviceaccount.com`).
2. Go to your parent folder:
   https://drive.google.com/drive/u/0/folders/1VqzFB3WBnQm7VYQLWbi2qhfJEsBmHiTM
3. Share it with that service-account email, permission **Editor** (not Viewer - it needs
   to create folders and files here).

The script creates a "Prospects" subfolder under this parent the first time it runs, then
one subfolder per org under that, with the briefing file sitting directly inside the org
folder (no extra nesting) - matching what you described: this parent folder is also where
your other automation will later move a signed client's folder up a level once they
convert.

## 2. Add the Drive folder id as a GitHub secret

1. GitHub → repo → **Settings → Secrets and variables → Actions → New repository secret**.
2. Name: `INTRO_SALES_DRIVE_FOLDER_ID`
3. Value: `1VqzFB3WBnQm7VYQLWbi2qhfJEsBmHiTM` (the id from the folder URL above - already
   extracted for you).

`GOOGLE_SERVICE_ACCOUNT_JSON` should already exist as a secret from the case-study setup -
nothing to do there except step 1 above (it's the same secret, just needs broader folder
access now).

## Test without waiting on a real booking

Fire the workflow manually: repo → **Actions → Call prep briefing → Run workflow**, fill in
the test fields, run it, then check:
- The parent folder for a new "Prospects" subfolder, and inside it a folder named
  after the test org.
- That folder should have the call-prep briefing as a `.md` file.

If the Drive step fails, the run still completes (briefing email + commit are primary,
Drive is a secondary step) - the failure reason will be in the notify email and the
workflow log.
