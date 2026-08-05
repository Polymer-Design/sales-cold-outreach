import fs from "node:fs";
import path from "node:path";

// Lightweight readers for the specific config/*.yaml shapes this repo uses. Not a
// general YAML parser - these files are hand-authored and stable, so targeted regex
// extraction is simpler and has no new dependency to audit.
const REPO_ROOT = path.join(process.cwd(), "..");

function readConfig(relPath: string): string {
  const full = path.join(REPO_ROOT, relPath);
  return fs.existsSync(full) ? fs.readFileSync(full, "utf-8") : "";
}

// Grabs a top-level (column-0) `key:` block up to the next top-level key or EOF.
function section(text: string, key: string): string {
  const re = new RegExp(`^${key}:\\s*\\n([\\s\\S]*?)(?=\\n[a-zA-Z_]+:|$)`, "m");
  const m = text.match(re);
  return m ? m[1] : "";
}

function field(text: string, key: string): string | null {
  const m = text.match(new RegExp(`^\\s*${key}:\\s*"?([^"#\\n]+?)"?\\s*(?:#.*)?$`, "m"));
  return m ? m[1].trim() : null;
}

export type SystemConfig = {
  mode: string;
  booking: { tool: string | null; links: { startups: string | null; churches: string | null } };
  approval: { interestedReplyEmail: string | null };
  limits: { maxDecisionMakersPerOrg: string | null; newLeadsScoredPerDay: string | null; emailsDraftedPerDay: string | null };
  scoring: { hotMin: string | null; warmMin: string | null; draftColdTier: string | null };
  sequenceCfg: { steps: string | null; waitDays: string | null; recycleAfterDays: string | null };
  canSpam: { physicalAddress: string | null; unsubscribe: string | null };
  notifications: { channel: string | null; to: string | null; from: string | null };
  inboxHealth: {
    provider: string | null;
    watchBelow: string | null;
    alarmBelow: string | null;
    warmupDaily: string | null;
    healthyDaily: string | null;
  };
};

export function getSystemConfig(): SystemConfig {
  const text = readConfig("config/system.yaml");
  const booking = section(text, "booking");
  const approval = section(text, "approval");
  const limits = section(text, "limits");
  const scoring = section(text, "scoring");
  const seq = section(text, "sequence");
  const canSpam = section(text, "can_spam");
  const notifications = section(text, "notifications");
  const inboxHealth = section(text, "inbox_health");

  return {
    mode: field(text, "mode") ?? "unknown",
    booking: {
      tool: field(booking, "tool"),
      links: {
        startups: field(booking, "startups"),
        churches: field(booking, "churches"),
      },
    },
    approval: { interestedReplyEmail: field(approval, "interested_reply_email") },
    limits: {
      maxDecisionMakersPerOrg: field(limits, "max_decision_makers_per_org"),
      newLeadsScoredPerDay: field(limits, "new_leads_scored_per_day"),
      emailsDraftedPerDay: field(limits, "emails_drafted_per_day"),
    },
    scoring: {
      hotMin: field(scoring, "hot_min"),
      warmMin: field(scoring, "warm_min"),
      draftColdTier: field(scoring, "draft_cold_tier"),
    },
    sequenceCfg: {
      steps: field(seq, "steps"),
      waitDays: field(seq, "wait_days"),
      recycleAfterDays: field(seq, "recycle_after_days"),
    },
    canSpam: {
      physicalAddress: field(canSpam, "physical_address"),
      unsubscribe: field(canSpam, "unsubscribe"),
    },
    notifications: {
      channel: field(notifications, "channel"),
      to: field(notifications, "to"),
      from: field(notifications, "from"),
    },
    inboxHealth: {
      provider: field(inboxHealth, "provider"),
      watchBelow: field(inboxHealth, "watch_below"),
      alarmBelow: field(inboxHealth, "alarm_below"),
      warmupDaily: field(inboxHealth, "warmup_daily"),
      healthyDaily: field(inboxHealth, "healthy_daily"),
    },
  };
}

export type DomainRouting = {
  icp: "startups" | "churches";
  domain: string | null;
  mailboxesConnected: number;
  mailboxesTotal: number;
};

export function getDomainsConfig(): DomainRouting[] {
  const text = readConfig("config/domains.yaml");
  return (["startups", "churches"] as const).map((icp) => {
    const block = section(text, icp);
    const mailboxLines = block.match(/^\s*-\s*(.+)$/gm) ?? [];
    const total = mailboxLines.length;
    const connected = mailboxLines.filter((l) => !l.includes("REPLACE_ME")).length;
    return { icp, domain: field(block, "domain"), mailboxesConnected: connected, mailboxesTotal: total };
  });
}

export type IcpConfig = {
  icp: "startups" | "churches";
  status: string | null;
  description: string | null;
  attendanceFloor: string | null;
};

export function getIcpConfigs(): IcpConfig[] {
  return (["startups", "churches"] as const).map((icp) => {
    const text = readConfig(`config/icp-${icp}.yaml`);
    const descMatch = text.match(/^description:\s*>\s*\n\s*(.+)$/m);
    return {
      icp,
      status: field(text, "status"),
      description: descMatch ? descMatch[1].trim() : null,
      attendanceFloor: field(text, "attendance_floor"),
    };
  });
}

export type PlaybookConfig = {
  updated: string | null;
  subjectStyle: string | null;
  firstLineAngle: string | null;
  bodyLengthTargetWords: string | null;
  ctaStyle: string | null;
  proofStyle: string | null;
  sendTimeLocal: string | null;
};

export function getPlaybookConfig(): PlaybookConfig {
  const text = readConfig("config/playbook.yaml");
  const active = section(text, "active");
  return {
    updated: field(text, "updated"),
    subjectStyle: field(active, "subject_style"),
    firstLineAngle: field(active, "first_line_angle"),
    bodyLengthTargetWords: field(active, "body_length_target_words"),
    ctaStyle: field(active, "cta_style"),
    proofStyle: field(active, "proof_style"),
    sendTimeLocal: field(active, "send_time_local"),
  };
}
