"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    if (nextIsLight) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute("content", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute("content", "dark");
    }
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
        isLight
          ? "bg-neutral-100 text-neutral-800 border border-neutral-300 hover:bg-neutral-200 shadow-sm"
          : "bg-white/5 text-brand-gold border border-brand-gold/30 hover:bg-brand-gold/15 hover:border-brand-gold shadow-sm"
      }`}
    >
      {isLight ? (
        <Moon className="w-4 h-4 fill-neutral-700 transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 fill-brand-gold/40 transition-transform duration-200 hover:rotate-45 text-brand-gold" />
      )}
    </button>
  );
}
