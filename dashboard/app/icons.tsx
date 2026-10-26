// Inline stroke icons for the rail - no icon library.
type P = { size?: number };
const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const OutreachIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M21 3 10.5 13.5" />
    <path d="M21 3 14.5 21l-4-7.5L3 9.5 21 3Z" />
  </svg>
);
export const PlannerIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
    <path d="M8 3v4M16 3v4M3.5 10h17M8 14h3M8 17h6" />
  </svg>
);
export const MoneyIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="2.5" y="6" width="19" height="13" rx="3" />
    <circle cx="12" cy="12.5" r="2.6" />
    <path d="M6 9.5v.01M18 15.5v.01" />
  </svg>
);
export const SunIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
  </svg>
);
export const MoonIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
  </svg>
);
export const SignOutIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
    <path d="M10 16.5 14.5 12 10 7.5M14.5 12H4" />
  </svg>
);
export const MenuIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const SECTION_ICON = { outreach: OutreachIcon, planner: PlannerIcon, money: MoneyIcon } as const;
