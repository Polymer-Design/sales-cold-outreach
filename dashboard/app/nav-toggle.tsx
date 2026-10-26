"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon } from "./icons";

// Phones have no hover, so the rail opens as a drawer from this button instead.
export default function NavToggle() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.removeAttribute("data-nav");
  }, [pathname]);

  useEffect(() => {
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent && e.key !== "Escape") return;
      if (e.type === "click" && !(e.target as Element).closest?.(".navscrim")) return;
      document.documentElement.removeAttribute("data-nav");
    };
    document.addEventListener("keydown", close);
    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", close);
    };
  }, []);

  return (
    <button
      type="button"
      className="navtoggle"
      aria-label="Open navigation"
      onClick={() => document.documentElement.setAttribute("data-nav", "open")}
    >
      <MenuIcon />
    </button>
  );
}
