// Main nav (left rail) = sections; each section's tabs render as the pill sub-nav on top.
// Outreach keeps its original URLs so existing links (e.g. the Hot Leads notification
// deep link /hot-leads#pr-N) keep working.
export const SECTIONS = [
  {
    key: "outreach",
    label: "Outreach",
    href: "/",
    tabs: [
      { key: "overview", href: "/", label: "Overview" },
      { key: "leads", href: "/leads", label: "Leads" },
      { key: "approvals", href: "/approvals", label: "Approvals" },
      { key: "hot-leads", href: "/hot-leads", label: "Hot Leads" },
      { key: "booked-calls", href: "/booked-calls", label: "Booked Calls" },
      { key: "insights", href: "/insights", label: "Insights" },
      { key: "system", href: "/system", label: "System" },
      { key: "settings", href: "/settings", label: "Settings" },
    ],
  },
  {
    key: "planner",
    label: "Planner",
    href: "/planner",
    tabs: [
      { key: "planner-schedule", href: "/planner", label: "Schedule" },
      { key: "planner-settings", href: "/planner/settings", label: "Capacity & templates" },
    ],
  },
  {
    key: "money",
    label: "Money",
    href: "/money",
    tabs: [
      { key: "money-overview", href: "/money", label: "Overview" },
      { key: "money-split", href: "/money/split", label: "Split a payment" },
      { key: "money-card", href: "/money/card", label: "Card" },
      { key: "money-runway", href: "/money/runway", label: "Runway" },
      { key: "money-goals", href: "/money/goals", label: "Full-time goals" },
      { key: "money-settings", href: "/money/settings", label: "Settings" },
    ],
  },
] as const;

export type SectionKey = (typeof SECTIONS)[number]["key"];
export type TabKey = (typeof SECTIONS)[number]["tabs"][number]["key"];

export function sectionOf(tab: TabKey) {
  return SECTIONS.find((s) => s.tabs.some((t) => t.key === tab)) ?? SECTIONS[0];
}
