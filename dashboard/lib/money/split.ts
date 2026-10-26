// Payment splitter + ledger math (docs/money-module/SPEC.md §2-4). Pure: no UI, no DB.
import type { Item, PricingConfig, ScheduleEntry, Split, SplitGroup } from "./config.ts";

export const r2 = (n: number) => Math.round(n * 100) / 100;

// ---------- project total ----------

export type AddonState = Record<string, { on: boolean; price: number }>;

export type BuildInputs = {
  extraPages: number;
  customAmount: number; // used only when item.customTotal
  addons: AddonState;
  friends: boolean;
};

export function defaultAddonState(item: Item, cfg: PricingConfig): AddonState {
  const out: AddonState = {};
  for (const k of item.addons ?? []) out[k] = { on: false, price: cfg.addons[k].price };
  return out;
}

export function pagesAllowed(item: Item): boolean {
  return "maxExtraPages" in item;
}

// The + button on the pages stepper: disabled at the item's cap; null = uncapped.
export function canAddPage(item: Item, pages: number): boolean {
  if (!pagesAllowed(item)) return false;
  return item.maxExtraPages == null || pages < item.maxExtraPages;
}

export type ProjectTotals = {
  base: number;
  pages: number;
  addons: number;
  subtotal: number;
  discount: number;
  total: number;
};

export function projectTotals(item: Item, input: BuildInputs, cfg: PricingConfig): ProjectTotals {
  const base = item.customTotal ? input.customAmount : item.price ?? 0;
  const pages = pagesAllowed(item) ? input.extraPages * cfg.extraPagePrice : 0;
  const included = item.included ?? [];
  const addons = Object.entries(input.addons).reduce(
    (s, [k, a]) => s + (a.on && !included.includes(k) ? +a.price || 0 : 0),
    0,
  );
  const subtotal = base + pages + addons;
  // Friends discount applies to the whole subtotal (confirmed by Ethan 2026-10-26).
  const discount =
    input.friends && item.group === "build" ? Math.round((subtotal * cfg.friendsDiscountPct) / 100) : 0;
  return { base, pages, addons, subtotal, discount, total: subtotal - discount };
}

// Scoped projects carry a rule instead of a fixed schedule: "total < 3000 -> 100%, else
// 50/50". The threshold is read from the rule text so it changes with the config.
export function scheduleOf(item: Item, total: number): ScheduleEntry[] {
  if (item.scheduleRule) {
    const m = item.scheduleRule.match(/total\s*<\s*(\d+)/);
    const threshold = m ? +m[1] : 3000;
    return total < threshold
      ? [["100% at signing", 1]]
      : [
          ["50% at signing", 0.5],
          ["50% at delivery", 0.5],
        ];
  }
  return item.schedule ?? [];
}

// Chips are tracked by index, not amount: two 50% chips have the same value, and only
// the clicked one should read as selected.
export function paymentChips(item: Item, total: number, selected: number | null) {
  return scheduleOf(item, total).map(([label, fraction], i) => ({
    label,
    value: Math.round(total * fraction),
    selected: selected === i,
  }));
}

// ---------- split ----------

export type SplitInput = {
  group: SplitGroup | "hosting";
  amount: number;
  contractor: number;
  topUp: number;
  cardBalance: number;
  splits: { build: Split; plan: Split };
};

export type SplitResult = {
  amount: number;
  contractor: number;
  net: number;
  ethan: number;
  blair: number;
  ethanTax: number;
  blairTax: number;
  toCard: number;
  toRunway: number;
  operating: number;
  topUp: number;
  cardBefore: number;
};

export function computeSplit(i: SplitInput): SplitResult {
  const card = Math.max(0, i.cardBalance);
  const out: SplitResult = {
    amount: i.amount,
    contractor: 0,
    net: i.amount,
    ethan: 0,
    blair: 0,
    ethanTax: 0,
    blairTax: 0,
    toCard: 0,
    toRunway: 0,
    operating: 0,
    topUp: 0,
    cardBefore: card,
  };
  if (i.group === "hosting") {
    // 100% to the card, capped at its balance; the rest covers operating. No owner pay or taxes.
    out.toCard = Math.min(i.amount, card);
    out.operating = i.amount - out.toCard;
    return out;
  }
  out.contractor = Math.min(i.amount, Math.max(0, i.contractor));
  out.net = i.amount - out.contractor;
  const s = i.splits[i.group];
  const sum = s.owner + s.ethanTax + s.blairTax + s.cardOrRunway + s.operating || 100;
  const part = (pct: number) => (out.net * pct) / sum;
  out.ethan = part(s.owner) / 2;
  out.blair = part(s.owner) / 2;
  out.ethanTax = part(s.ethanTax);
  out.blairTax = part(s.blairTax);
  out.operating = part(s.operating);
  let cr = part(s.cardOrRunway);
  out.topUp = Math.min(cr, Math.max(0, i.topUp));
  cr -= out.topUp;
  out.operating += out.topUp;
  out.toCard = Math.min(cr, card);
  out.toRunway = cr - out.toCard;
  return out;
}

export function splitSentence(o: SplitResult, group: SplitInput["group"]): string {
  let msg = "";
  if (o.toCard > 0) {
    msg = `Card goes from ${usd2(o.cardBefore)} to ${usd2(r2(o.cardBefore - o.toCard))}.`;
    if (o.toRunway > 0) msg += " The card is paid off with this one, so the rest goes to runway.";
  } else if (o.cardBefore <= 0 && group !== "hosting") {
    msg = "The card's paid off, so the card share goes straight to runway.";
  } else if (group === "hosting") {
    msg = "Card's at $0, so this covers the hosting bill from operating.";
  }
  if (o.topUp > 0) msg += ` ${usd(o.topUp)} of the card/runway share tops up operating first.`;
  return msg.trim() || "Nothing goes to the card or runway on this one.";
}

// ---------- ledger ----------

export type Acct = "card" | "runway";
export type Kind = "charge" | "payment" | "deposit" | "withdrawal";
export type Source = "hosting" | "project" | "plan" | "other";
export const SOURCE_LABEL: Record<Source, string> = {
  hosting: "Hosting passthrough",
  project: "Project",
  plan: "Monthly plan",
  other: "Other",
};

export type LedgerEntry = {
  id: string;
  acct: Acct;
  kind: Kind;
  amount: number;
  date: string;
  note: string;
  source?: Source | null;
  item?: string | null;
  received?: number | null;
  projectTotal?: number | null;
  extraPages?: number | null;
  addons?: { key: string; price: number }[] | null;
  friendsDiscount?: number | null;
  payment?: string | null;
  createdAt?: string;
  createdBy?: string | null;
};

export function balances(entries: LedgerEntry[]) {
  let card = 0;
  let cardStart = 0;
  let runway = 0;
  let cardHas = false;
  for (const e of entries) {
    const a = +e.amount || 0;
    if (e.acct === "card") {
      cardHas = true;
      if (e.kind === "charge") {
        card += a;
        cardStart += a;
      } else card -= a;
    } else if (e.acct === "runway") {
      runway += e.kind === "deposit" ? a : -a;
    }
  }
  return { card: Math.max(0, r2(card)), cardRaw: r2(card), cardStart: r2(cardStart), cardHas, runway: r2(runway) };
}

export function paidDownBySource(entries: LedgerEntry[]): { bySource: Partial<Record<Source, number>>; total: number } {
  const bySource: Partial<Record<Source, number>> = {};
  let total = 0;
  for (const e of entries) {
    if (e.acct !== "card" || e.kind !== "payment") continue;
    const s: Source = e.source && e.source in SOURCE_LABEL ? e.source : "other";
    bySource[s] = r2((bySource[s] ?? 0) + (+e.amount || 0));
    total = r2(total + (+e.amount || 0));
  }
  return { bySource, total };
}

// Newest first: date desc, then created desc.
export function sortEntries(entries: LedgerEntry[]): LedgerEntry[] {
  return [...entries].sort(
    (a, b) => (b.date || "").localeCompare(a.date || "") || (b.createdAt || "").localeCompare(a.createdAt || ""),
  );
}

export type LogMeta = Omit<LedgerEntry, "id" | "acct" | "kind" | "amount" | "date" | "createdAt" | "createdBy">;

// The splitter's Log button: a card payment and/or a runway deposit, nothing else. Owner
// pay, taxes and operating are moved by hand in the bank and aren't logged (SPEC §3).
export function entriesToLog(o: SplitResult, date: string, meta: LogMeta): Omit<LedgerEntry, "id">[] {
  const out: Omit<LedgerEntry, "id">[] = [];
  if (o.toCard > 0) out.push({ ...meta, acct: "card", kind: "payment", amount: r2(o.toCard), date });
  if (o.toRunway > 0) out.push({ ...meta, acct: "runway", kind: "deposit", amount: r2(o.toRunway), date });
  return out;
}

export const SOURCE_FOR_GROUP: Record<SplitInput["group"], Source> = {
  build: "project",
  plan: "plan",
  hosting: "hosting",
};

// ---------- formatting ----------

export const usd = (n: number) => (n < 0 ? "-" : "") + "$" + Math.abs(Math.round(n)).toLocaleString("en-US");
// Whole dollars stay whole ("$7,000"); anything with cents shows both digits ("$1,017.50").
export const usd2 = (n: number) => {
  const cents = Math.round(Math.abs(n) * 100) % 100 !== 0;
  return (
    (n < 0 ? "-" : "") +
    "$" +
    Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: 2 })
  );
};
export const usdK = (n: number) => (n >= 1000 ? "$" + (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : usd(n));
