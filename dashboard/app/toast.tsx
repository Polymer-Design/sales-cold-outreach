"use client";

import { useCallback } from "react";

// Tiny shared toast: one polite live region appended to <body> on first use.
let hideTimer: ReturnType<typeof setTimeout> | undefined;

export function useToast() {
  return useCallback((message: string) => {
    let el = document.getElementById("app-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "app-toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.hidden = false;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (el) el.hidden = true;
    }, 2800);
  }, []);
}
