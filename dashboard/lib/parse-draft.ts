import { load } from "js-yaml";

// The booking-reply skill's file shape (see .claude/skills/booking-reply/SKILL.md):
// a real YAML frontmatter block, then `subject: ...` / `body: |` below it.
//
// The subject/body section is deliberately NOT parsed as YAML: the skill's own template
// says subjects are "Re: ..." prefixed, and a bare colon-space inside a plain YAML
// scalar is invalid syntax ("Re: your site" fails to parse). send_approved.py already
// sidesteps this by never parsing that section at all; this does the same thing with
// plain structural line-reading instead of a YAML scalar parser.
export type ParsedDraft = {
  frontmatter: {
    contact_name?: string;
    organization?: string;
    icp?: string;
    their_reply?: string;
    reply_category?: string;
  };
  fmText: string; // raw inner frontmatter text, unchanged, for reconstruction
  subject: string;
  body: string;
};

function str(v: unknown): string | undefined {
  if (v == null) return undefined;
  return typeof v === "string" ? v : String(v);
}

function parseSubjectBody(rest: string): { subject: string; body: string } {
  const lines = rest.split(/\r?\n/);
  let i = 0;
  while (i < lines.length && lines[i].trim() === "") i++;

  const subjectMatch = (lines[i] ?? "").match(/^subject:\s?(.*)$/);
  if (!subjectMatch) throw new Error("Draft file is missing a `subject:` line.");
  let subject = subjectMatch[1].trim();
  // Unquote if a prior save wrote it as a JSON/YAML double-quoted string.
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
    throw new Error("Draft file is missing a `body: |` block.");
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

  return { subject, body: bodyLines.join("\n") };
}

export function parseDraft(content: string): ParsedDraft {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error("Draft file doesn't have the expected frontmatter block.");
  const [, fmText, rest] = m;

  const fm = (load(fmText) ?? {}) as Record<string, unknown>;
  const { subject, body } = parseSubjectBody(rest);

  return {
    frontmatter: {
      contact_name: str(fm.contact_name),
      organization: str(fm.organization),
      icp: str(fm.icp),
      their_reply: str(fm.their_reply),
      reply_category: str(fm.reply_category),
    },
    fmText,
    subject,
    body,
  };
}

// Rebuilds the file with the original frontmatter untouched and a fresh subject/body
// block - so an edit here only ever touches what the dashboard actually exposed for
// editing, never their_reply, contact_name, etc. Subject is written as a plain line
// (matching the skill's own template, "Re:" and all) rather than YAML-quoted, since
// this section is read back with parseSubjectBody, not a YAML parser.
export function buildDraftContent(fmText: string, subject: string, body: string): string {
  const indentedBody = body
    .split("\n")
    .map((l) => (l ? `  ${l}` : ""))
    .join("\n");
  return `---\n${fmText}\n---\n\nsubject: ${subject}\nbody: |\n${indentedBody}\n`;
}
