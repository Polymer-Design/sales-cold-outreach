// Shape of docs/money-module/pricing-config.json. The config itself is never committed
// (this repo is public); it's imported into the database from Money > Settings and read
// back from there. Nothing in the Money module hard-codes a price.

export type SplitGroup = "build" | "plan";
export type ItemGroup = SplitGroup | "hosting";

export type Split = {
  owner: number;
  ethanTax: number;
  blairTax: number;
  cardOrRunway: number;
  operating: number;
};
export const SPLIT_KEYS: { key: keyof Split; label: string }[] = [
  { key: "owner", label: "Owner pay" },
  { key: "ethanTax", label: "Ethan taxes" },
  { key: "blairTax", label: "Blair taxes" },
  { key: "cardOrRunway", label: "Card / runway" },
  { key: "operating", label: "Operating" },
];

export type FullTimeSplit = {
  ownerPay: number;
  taxes: number;
  operating: number;
  reserve: number;
  growth: number;
};

export type Addon = { name: string; price: number; editablePrice: boolean; note?: string };

export type ScheduleEntry = [label: string, fraction: number];

export type Item = {
  key: string;
  group: ItemGroup;
  category: string;
  name: string;
  icp?: string;
  price: number | null;
  // Absent = extra pages not offered for this item; null = offered with no cap.
  maxExtraPages?: number | null;
  addons?: string[];
  included?: string[];
  customTotal?: boolean;
  minimum?: number;
  schedule?: ScheduleEntry[];
  scheduleRule?: string;
  hoursCap?: number;
};

export type PricingConfig = {
  version: string;
  extraPagePrice: number;
  friendsDiscountPct: number;
  splits: { build: Split; plan: Split; hosting?: string };
  fullTimeSplit: FullTimeSplit;
  addons: Record<string, Addon>;
  items: Item[];
  runwayGoalDefault?: number;
};

// Throws a readable error if an uploaded file isn't a usable pricing config, so a bad
// import fails loudly in Settings instead of half-working in the splitter.
export function parsePricingConfig(raw: unknown): PricingConfig {
  const c = raw as Partial<PricingConfig> | null;
  const fail = (why: string): never => {
    throw new Error(`Not a valid pricing config: ${why}.`);
  };
  if (!c || typeof c !== "object") fail("expected a JSON object");
  if (typeof c!.extraPagePrice !== "number") fail("missing extraPagePrice");
  if (typeof c!.friendsDiscountPct !== "number") fail("missing friendsDiscountPct");
  for (const g of ["build", "plan"] as const) {
    const s = c!.splits?.[g];
    if (!s || SPLIT_KEYS.some(({ key }) => typeof s[key] !== "number")) fail(`splits.${g} incomplete`);
  }
  if (!c!.fullTimeSplit) fail("missing fullTimeSplit");
  if (!c!.addons || typeof c!.addons !== "object") fail("missing addons");
  if (!Array.isArray(c!.items) || !c!.items.length) fail("missing items");
  for (const it of c!.items!) {
    if (!it.key || !it.name || !["build", "plan", "hosting"].includes(it.group)) fail(`bad item ${JSON.stringify(it.key)}`);
    for (const a of [...(it.addons ?? []), ...(it.included ?? [])]) {
      if (!c!.addons![a]) fail(`item ${it.key} references unknown add-on ${a}`);
    }
  }
  return c as PricingConfig;
}

export const itemByKey = (cfg: PricingConfig, key: string) => cfg.items.find((i) => i.key === key);
