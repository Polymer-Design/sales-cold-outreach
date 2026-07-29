#!/usr/bin/env python3
"""Pull case study Google Docs into the repo for distillation.

Reads every Google Doc in the "Polymer Case Studies" Drive folder via a service
account, and for each Doc whose header says `Status: Approved`, writes its raw
text to data/case-study-staging/{slug}.md. The Claude step in the workflow then
runs the case-study-sync skill to distill each staged file into a clean, citable
knowledge/case-studies/{slug}.md and open a PR.

Why a service account: GitHub Actions has no access to your Google Drive. The
service account is a Google identity you SHARE the folder with (Viewer), so CI
can read it unattended. Auth JSON comes from the GOOGLE_SERVICE_ACCOUNT_JSON
secret; the folder id from CASE_STUDY_FOLDER_ID.

Read-only. Never writes to Drive.

Usage:
  python scripts/case_study_sync.py pull
"""

import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
STAGING = REPO_ROOT / "data/case-study-staging"
SCOPES = [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/documents.readonly",
]


def _services():
    """Build Drive + Docs API clients from the service-account JSON secret."""
    raw = os.environ.get("GOOGLE_SERVICE_ACCOUNT_JSON", "").strip()
    if not raw:
        sys.exit("GOOGLE_SERVICE_ACCOUNT_JSON is not set. Add the service-account "
                 "key JSON as a repo secret.")
    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except ImportError:
        sys.exit("Missing deps. Run: pip install google-api-python-client google-auth")
    creds = service_account.Credentials.from_service_account_info(
        json.loads(raw), scopes=SCOPES)
    return (build("drive", "v3", credentials=creds, cache_discovery=False),
            build("docs", "v1", credentials=creds, cache_discovery=False))


def _list_docs(drive, folder_id: str) -> list[dict]:
    docs, page = [], None
    q = (f"'{folder_id}' in parents and "
         "mimeType = 'application/vnd.google-apps.document' and trashed = false")
    while True:
        resp = drive.files().list(
            q=q, fields="nextPageToken, files(id, name, modifiedTime)",
            pageToken=page, pageSize=100).execute()
        docs.extend(resp.get("files", []))
        page = resp.get("nextPageToken")
        if not page:
            return docs


def _doc_text(docs, doc_id: str) -> str:
    """Flatten a Google Doc's body to plain text."""
    doc = docs.documents().get(documentId=doc_id).execute()
    out = []
    for el in doc.get("body", {}).get("content", []):
        para = el.get("paragraph")
        if not para:
            continue
        for run in para.get("elements", []):
            txt = run.get("textRun", {}).get("content")
            if txt:
                out.append(txt)
    return "".join(out)


def _slug(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or "untitled"


def _is_approved(text: str) -> bool:
    # Header convention: a line like "Status: Approved" (case-insensitive) near the top.
    head = "\n".join(text.splitlines()[:15]).lower()
    return re.search(r"status\s*:\s*approved", head) is not None


def pull() -> None:
    folder_id = os.environ.get("CASE_STUDY_FOLDER_ID", "").strip()
    if not folder_id:
        sys.exit("CASE_STUDY_FOLDER_ID is not set (the Drive folder id from its URL).")
    drive, docs = _services()
    found = _list_docs(drive, folder_id)
    STAGING.mkdir(parents=True, exist_ok=True)

    staged, skipped = [], []
    for f in found:
        text = _doc_text(docs, f["id"])
        if not _is_approved(text):
            skipped.append(f["name"])
            continue
        slug = _slug(f["name"])
        (STAGING / f"{slug}.md").write_text(
            f"<!-- source: Google Doc '{f['name']}' ({f['id']}), "
            f"modified {f.get('modifiedTime','?')} -->\n\n{text}")
        staged.append(f["name"])

    print(json.dumps({
        "docs_in_folder": len(found),
        "staged_approved": staged,
        "skipped_not_approved": skipped,
    }, indent=2))
    if not staged:
        print("\nNothing approved to sync. (Docs need 'Status: Approved' in the header.)")


def main() -> None:
    if len(sys.argv) != 2 or sys.argv[1] != "pull":
        print(__doc__)
        sys.exit(2)
    pull()


if __name__ == "__main__":
    main()
