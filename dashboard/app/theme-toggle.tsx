"use client";

import { useEffect, useState } from "react";

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

  return (
    <button
      className="themetoggle"
      onClick={() => setTheme((theme ?? "dark") === "dark" ? "light" : "dark")}
      aria-label="Toggle light/dark theme"
      title="Toggle light/dark theme"
    >
      {theme === "light" ? "☾ Dark" : "☀ Light"}
    </button>
  );
}
