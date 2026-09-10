"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot() {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  function toggle() {
    const next = isDark ? "light" : "dark";
    setTheme(next);
  }

  function setTheme(next: "light" | "dark") {
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-2 active:scale-95"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
