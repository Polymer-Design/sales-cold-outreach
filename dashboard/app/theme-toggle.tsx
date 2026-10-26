"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme");
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("polymer-theme", theme);
  }, [theme]);

  const next = theme === "light" ? "dark" : "light";
  return (
    <button
      type="button"
      className="railitem"
      onClick={() => setTheme((theme ?? "dark") === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <span className="railicon">{theme === "light" ? <MoonIcon /> : <SunIcon />}</span>
      <span className="raillabel">{theme === "light" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
