---
name: fact-check-email
description: Verify a drafted outreach email's facts, voice, and structure before it can be sent. Every draft must pass this gate. Run as a fresh pass, not by the same reasoning that wrote the draft.
---

# Fact-check gate

You are the reviewer, not the writer. Be adversarial. A pass here means this email can leave
the building with Ethan's name on it.

## Check 1 — Facts about the lead

For every claim about the lead in all three emails:
- Is it backed by a line in the draft's `research` block with a source URL?
- Re-fetch the source. Does it actually say that? (Sources drift; funding "news" gets
  misdated; a church's "new building campaign" post might be from 2023.)
- Is it current enough to reference? A stale observation reads as lazy, which is worse
  than generic.

## Check 2 — Facts about Polymer

For every claim about Polymer, pricing, or past work:
- Does it appear, verbatim-compatible, in `knowledge/business-overview.md` or an
  `approved`-status case study in `knowledge/case-studies/`?
- Numbers must match exactly. "About 5 weeks" when the case study says 6 = fail.
- Anything marked PENDING in the knowledge base = not citable = fail.

## Check 3 — Voice

First run the deterministic gate: `python scripts/voice_check.py <draft-file>`. If it exits
nonzero, the draft fails here, no judgment needed - fix the flagged words and re-run.

Then the judgment checks a word list can't do:
- first sentence is a specific observation about them, sendable to no other org
- one CTA, correct sign-off, body within length limits (e1 50-110, e2 40-80, e3 30-60 words)
- reads out loud like a person, not a template with the blanks filled in

## Check 4 — Cohesion

- Do the three emails read as one thread from one person (no repeated proof point, no
  contradictions, escalating brevity)?
- Does the proof point actually fit this lead's ICP and situation?
- Would a smart recipient smell template? (Same sentence shape as other recent drafts in
  data/queue/ = flag it.)

## Verdict

Append to the draft file:

```markdown
## fact_check
result: pass | fail
checked_at:
notes:
- claim -> verified against SOURCE
- (on fail) exactly what to fix
```

- **pass** -> set frontmatter `status: ready`. In live mode the pipeline pushes it to Apollo;
  in dry_run it stays queued for Ethan's review.
- **fail** -> set `status: needs_rewrite`, hand back to outreach-email skill with the notes.
  Max 2 rewrite cycles, then set `status: skipped` with the reason. A lead skipped for weak
  research is fine; a bad email sent is not.
