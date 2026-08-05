import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSystemMode } from "@/lib/data";
import PolymerMark from "./polymer-mark";
import SignOutButton from "./sign-out-button";
import ThemeToggle from "./theme-toggle";

const TABS = [
  { key: "overview", href: "/", label: "Overview" },
  { key: "leads", href: "/leads", label: "Leads" },
  { key: "booked-calls", href: "/booked-calls", label: "Booked Calls" },
  { key: "insights", href: "/insights", label: "Insights" },
  { key: "system", href: "/system", label: "System" },
  { key: "settings", href: "/settings", label: "Settings" },
] as const;

export default async function Topbar({ active }: { active: (typeof TABS)[number]["key"] }) {
  const session = await getServerSession(authOptions);
  const mode = getSystemMode();

  return (
    <div className="topbar">
      <div className="topbarrow">
        <Link href="/" className="brand">
          <PolymerMark />
          <div className="name">Polymer</div>
        </Link>
        <div className="topright">
          <span className={`modebadge ${mode}`}>{mode.replace("_", " ")}</span>
          <ThemeToggle />
          {session?.user?.email && <span className="who">{session.user.email}</span>}
          <SignOutButton />
        </div>
      </div>
      <nav className="tabs">
        {TABS.map((t) => (
          <Link key={t.key} href={t.href} className={`tab${active === t.key ? " active" : ""}`}>
            {t.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
