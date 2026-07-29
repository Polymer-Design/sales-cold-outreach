---
name: case-study-sync
description: Turn approved case study Google Docs into clean, citable knowledge/case-studies markdown. Run when new/updated case studies exist in Drive (monthly/quarterly), or interactively on demand.
---

# Case study sync

Case studies are written as rich Google Docs (background, problem, solution, metrics, quote)
in the "Polymer Case Studies" Drive folder. This skill distills the **approved** ones into the
lean, citable markdown the outreach + fact-check skills rely on. The Doc is the human's rich
working space; the repo markdown is the pinned, approved, citable version.

## Inputs

- `data/case-study-staging/*.md` — raw Doc text pulled by `scripts/case_study_sync.py pull`
  (CI path, service account). Interactively you can instead read the Drive folder directly
  via the Google Drive tools if this session has them.
- `knowledge/case-studies/_template.md` — the target format.
- Existing `knowledge/case-studies/*.md` — update in place, don't duplicate.

## For each staged (approved) case study

1. **Distill, don't transcribe.** Pull out the citable facts, verified metrics, scope, and
   timeline. The full narrative stays in the Doc; the markdown carries what an email can cite.
2. **Verified numbers only.** If the Doc marks a metric "To confirm" (or doesn't mark it
   verified), leave it out. Only numbers explicitly marked verified/approved go in. This is the
   `knowledge/voice-and-tone.md` + CLAUDE.md Facts rule, enforced here.
3. Write/update `knowledge/case-studies/{client-slug}.md` in the template's shape, with:
   - frontmatter: client, vertical, icp_fit, year, public_url (if live), `status: approved`
   - the situation / what we built / results sections, tightened
   - 2-3 **pre-approved quotable lines** an email can drop in verbatim, ranked strongest first
4. If a Doc is missing something needed to be citable (e.g. no verified metric and no clear
   scope), still write it with `status: approved` but note in the file which proof is thin, so
   the drafter knows to lean on scope/speed rather than a number.

## Output

- One PR titled "Case study sync: {date}" containing the added/updated markdown files, with a
  short summary of what changed per case study (new, updated metric, etc.).
- Do NOT touch Docs. Do NOT invent or upgrade any number beyond what the Doc verifies.
- Delete the consumed files from `data/case-study-staging/` in the same PR.

## Header convention the Docs must follow

Near the top of each Doc:
```
Status: Approved        (or Draft - drafts are skipped)
ICP: startups | churches | both
```
Everything else is free-form narrative.
