#!/usr/bin/env python3
"""Mirror call-prep context into Google Drive, organized by org name.

Creates (or reuses) a "Prospects" subfolder under a configured parent folder, then an
org-named subfolder under that, and uploads/updates files into it as Google Docs - the
call-prep briefing, and (if this lead came through outreach) the sequence file
holding the research + the 3 emails that were sent. A separate automation (not in
this repo) later moves the org folder into the main client folder once they sign -
this script's only job is to make sure the folder exists and is current the moment
someone books, regardless of whether they came through outreach or booked directly.

Auth: same service-account pattern as case_study_sync.py, but needs WRITE access
(full `drive` scope, not `drive.readonly`) since it creates folders/files inside a
folder the service account doesn't own - `drive.file` scope isn't enough for that
without an OAuth picker, which a headless CI job can't do. The parent folder must be
shared with the service account's email as Editor (Viewer, as case studies use,
isn't enough here).

Usage:
  python scripts/drive_intro_folder.py sync --org "Acme Inc" \
      --file data/call-prep/2026-10-15--jane-doe.md \
      [--file data/queue/sent/startups--acme--jane-doe.md ...]
"""

import argparse
import json
import os
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCOPES = ["https://www.googleapis.com/auth/drive"]
PROSPECTS_SUBFOLDER_NAME = "Prospects"
FOLDER_MIME = "application/vnd.google-apps.folder"


def _drive_client():
    raw = os.environ.get("GOOGLE_SERVICE_ACCOUNT_JSON", "").strip()
    if not raw:
        sys.exit("GOOGLE_SERVICE_ACCOUNT_JSON is not set. Add the service-account key JSON "
                 "as a repo secret (same one case_study_sync.py uses).")
    parent_id = os.environ.get("INTRO_SALES_DRIVE_FOLDER_ID", "").strip()
    if not parent_id:
        sys.exit("INTRO_SALES_DRIVE_FOLDER_ID is not set (the Drive folder id from its URL).")
    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
        from googleapiclient.http import MediaInMemoryUpload
    except ImportError:
        sys.exit("Missing deps. Run: pip install google-api-python-client google-auth")
    creds = service_account.Credentials.from_service_account_info(
        json.loads(raw), scopes=SCOPES)
    drive = build("drive", "v3", credentials=creds, cache_discovery=False)
    return drive, parent_id, MediaInMemoryUpload


def _find_child(drive, parent_id: str, name: str, mime: str | None = None) -> str | None:
    # supportsAllDrives/includeItemsFromAllDrives are required once the parent lives in a
    # Shared Drive (confirmed here - the service account holds a Shared-Drive-only
    # "fileOrganizer" role on this folder, not the "writer" a My Drive share would give).
    # Without these, the API silently returns zero results instead of erroring, which is
    # how this stayed broken through a "the folder IS shared" report - the share was real,
    # these two params just weren't being sent.
    # Drive query strings are single-quoted with backslash escapes. json.dumps would turn
    # an em dash into \u2014, which Drive doesn't decode, so the lookup would miss and a
    # duplicate would be created on every update.
    quoted = "'" + name.replace("\\", "\\\\").replace("'", "\\'") + "'"
    q = f"'{parent_id}' in parents and name = {quoted} and trashed = false"
    if mime:
        q += f" and mimeType = '{mime}'"
    resp = drive.files().list(
        q=q, fields="files(id, name)", pageSize=5,
        supportsAllDrives=True, includeItemsFromAllDrives=True,
    ).execute()
    files = resp.get("files", [])
    return files[0]["id"] if files else None


def _ensure_folder(drive, parent_id: str, name: str) -> str:
    existing = _find_child(drive, parent_id, name, FOLDER_MIME)
    if existing:
        return existing
    created = drive.files().create(
        body={"name": name, "mimeType": FOLDER_MIME, "parents": [parent_id]},
        fields="id", supportsAllDrives=True,
    ).execute()
    return created["id"]


DOC_MIME = "application/vnd.google-apps.document"


def _upsert_doc(drive, media_cls, parent_id: str, title: str, content: str) -> str:
    """Upload markdown as a native Google Doc, so Ethan can open, read and edit it on any
    device (asked for 2026-11-09: every brief as a Doc, not a raw .md file). Uses Drive's
    Markdown import, which keeps headings, lists, bold and links. Not HTML import: that one
    turns text between two dollar signs ("from $15,000 ... ($9,500)") into an equation and
    drops it (seen on the FMI Financial brief)."""
    media = media_cls(content.encode("utf-8"), mimetype="text/markdown")
    existing = _find_child(drive, parent_id, title, DOC_MIME)
    if existing:
        drive.files().update(fileId=existing, media_body=media, supportsAllDrives=True).execute()
        return existing
    created = drive.files().create(
        body={"name": title, "parents": [parent_id], "mimeType": DOC_MIME},
        media_body=media, fields="id", supportsAllDrives=True,
    ).execute()
    return created["id"]


def _doc_title(p: Path) -> str:
    """The file's own '# heading' (e.g. 'Call prep: Jane Doe — Acme'), else its name."""
    for line in p.read_text().splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return p.stem


def sync(org: str, file_paths: list[str]) -> dict:
    drive, parent_id, media_cls = _drive_client()
    prospects_folder_id = _ensure_folder(drive, parent_id, PROSPECTS_SUBFOLDER_NAME)
    org_folder_id = _ensure_folder(drive, prospects_folder_id, org)

    uploaded, missing = [], []
    for path_str in file_paths:
        p = Path(path_str)
        if not p.exists():
            missing.append(path_str)
            continue
        title = _doc_title(p)
        file_id = _upsert_doc(drive, media_cls, org_folder_id, title, p.read_text())
        uploaded.append({"name": title, "id": file_id,
                          "url": f"https://docs.google.com/document/d/{file_id}/edit"})

    if missing:
        print(f"WARNING: these files don't exist, skipped: {missing}", file=sys.stderr)

    return {
        "org_folder_id": org_folder_id,
        "org_folder_url": f"https://drive.google.com/drive/folders/{org_folder_id}",
        "uploaded": uploaded,
        "missing": missing,
    }


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("sync")
    s.add_argument("--org", required=True)
    s.add_argument("--file", action="append", required=True, dest="files")
    args = ap.parse_args()

    result = sync(args.org, args.files)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
