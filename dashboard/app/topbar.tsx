import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSystemMode } from "@/lib/data";
import { SECTIONS, sectionOf, type TabKey } from "@/lib/nav";
import { SECTION_ICON } from "./icons";
import NavToggle from "./nav-toggle";
import PolymerMark from "./polymer-mark";
import SignOutButton from "./sign-out-button";
import ThemeToggle from "./theme-toggle";

// App shell: the collapsed left rail (main nav; widens on hover and pushes the page) plus
// this section's pill sub-nav across the top. Every page renders it as <Topbar active=… />.
export default async function Topbar({ active }: { active: TabKey }) {
  const session = await getServerSession(authOptions);
  const section = sectionOf(active);
  const mode = section.key === "outreach" ? getSystemMode() : null;
  const email = session?.user?.email ?? "";

  return (
    <>
      <aside className="rail" aria-label="Main navigation">
        <Link href="/" className="railbrand" aria-label="Polymer home">
          <span className="railicon">
            <PolymerMark size={22} />
          </span>
          <span className="raillabel brandname">Polymer</span>
        </Link>
        <nav className="railnav">
          {SECTIONS.map((s) => {
            const Icon = SECTION_ICON[s.key];
            const on = s.key === section.key;
            return (
              <Link key={s.key} href={s.href} className={`railitem${on ? " active" : ""}`} aria-current={on ? "page" : undefined}>
                <span className="railicon">
                  <Icon />
                </span>
                <span className="raillabel">{s.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="railfoot">
          <ThemeToggle />
          <SignOutButton />
          {email && (
            <div className="railitem railwho" title={email}>
              <span className="railicon avatar">{email[0].toUpperCase()}</span>
              <span className="raillabel who">{email}</span>
            </div>
          )}
        </div>
      </aside>
      <div className="navscrim" aria-hidden="true" />

      <header className="sectionhead">
        <div className="sectionrow">
          <NavToggle />
          <span className="eyebrow">Polymer · {section.label}</span>
          {mode && <span className={`modebadge ${mode}`}>{mode.replace("_", " ")}</span>}
        </div>
        <nav className="subnav" aria-label={`${section.label} sections`}>
          {section.tabs.map((t) => (
            <Link key={t.key} href={t.href} className={`subtab${active === t.key ? " active" : ""}`} aria-current={active === t.key ? "page" : undefined}>
              {t.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
