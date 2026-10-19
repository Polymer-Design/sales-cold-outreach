import { load } from "js-yaml";

// Hot-tier drafts (.claude/skills/outreach-email/SKILL.md's "Queue for fact-check" format)
// are richer than a booking-reply file: frontmatter, then ## research, ## proof_used,
// ## email_1, ## email_2, ## email_3, ## fact_check. Only email_1 is what a human needs
// to review before approval (daily-run.md step 4: "requires human review of email 1").
// This parser extracts just that section and can splice an edited version back in,
// leaving every other section - and the frontmatter, which already carries
// `status: hot_approved` baked in by the pipeline - completely untouched. Approving is
// just merging the PR as-is; editing only ever touches the email_1 span.
export type ParsedHotDraft = {
  frontmatter: {
    contact_name?: string;
    contact_title?: string;
    organization?: string;
    icp?: string;
    score_total?: string;
    tier?: string;
    status?: string;
  };
  subject: string;
  body: string;
};

function str(v: unknown): string | undefined {
  if (v == null) return undefined;
  return typeof v === "string" ? v : String(v);
}

// Mirrors parse-draft.ts's parseSubjectBody - a `subject: ...` line then a `body: |`
// block, not parsed as YAML (subjects like "the NYT write-up, then what" are fine, but a
// bare colon inside a plain scalar elsewhere in this format is not worth risking).
function parseSubjectBody(rest: string): { subject: string; body: string; consumedLines: number } {
  const lines = rest.split(/\r?\n/);
  let i = 0;
  while (i < lines.length && lines[i].trim() === "") i++;

  const subjectMatch = (lines[i] ?? "").match(/^subject:\s?(.*)$/);
  if (!subjectMatch) throw new Error("email_1 section is missing a `subject:` line.");
  let subject = subjectMatch[1].trim();
  if (subject.startsWith('"') && subject.endsWith('"')) {
    try {
      subject = JSON.parse(subject);
    } catch {
      /* not actually JSON - keep the literal text */
    }
  }
  i++;

  while (i < lines.length && lines[i].trim() === "") i++;
  if (!/^body:\s*\|/.test(lines[i] ?? "")) {
    throw new Error("email_1 section is missing a `body: |` block.");
  }
  i++;

  const bodyLines: string[] = [];
  for (; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith("  ")) bodyLines.push(l.slice(2));
    else if (l.trim() === "") bodyLines.push("");
    else break; // dedent ends the block
  }
  while (bodyLines.length && bodyLines[bodyLines.length - 1] === "") bodyLines.pop();

  return { subject, body: bodyLines.join("\n"), consumedLines: i };
}

function findEmail1Span(content: string): { start: number; end: number; inner: string } {
  const headingRe = /^##\s+email_1\s*$/m;
  const headingMatch = headingRe.exec(content);
  if (!headingMatch) throw new Error("Draft file has no `## email_1` section.");
  const innerStart = headingMatch.index + headingMatch[0].length;

  // Next "## " heading (any section) marks the end of this one; else end of file.
  const nextHeadingRe = /\r?\n##\s+\S/;
  nextHeadingRe.lastIndex = innerStart;
  const rest = content.slice(innerStart);
  const nextMatch = rest.match(/\r?\n##\s+\S/);
  const innerEnd = nextMatch ? innerStart + (nextMatch.index ?? rest.length) : content.length;

  return { start: innerStart, end: innerEnd, inner: content.slice(innerStart, innerEnd) };
}

export function parseHotDraft(content: string): ParsedHotDraft {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error("Draft file doesn't have the expected frontmatter block.");
  const [, fmText] = m;
  const fm = (load(fmText) ?? {}) as Record<string, unknown>;

  const { inner } = findEmail1Span(content);
  const { subject, body } = parseSubjectBody(inner);

  return {
    frontmatter: {
      contact_name: str(fm.contact_name),
      contact_title: str(fm.contact_title),
      organization: str(fm.organization),
      icp: str(fm.icp),
      score_total: str(fm.score_total),
      tier: str(fm.tier),
      status: str(fm.status),
    },
    subject,
    body,
  };
}

// Splices a new subject/body into the email_1 span only - every byte before and after
// (frontmatter, research, proof_used, email_2, email_3, fact_check) is preserved exactly.
export function buildHotDraftContent(content: string, subject: string, body: string): string {
  const { start, end } = findEmail1Span(content);
  const indentedBody = body
    .split("\n")
    .map((l) => (l ? `  ${l}` : ""))
    .join("\n");
  const replacement = `\nsubject: ${subject}\nbody: |\n${indentedBody}\n`;
  return content.slice(0, start) + replacement + content.slice(end);
}
