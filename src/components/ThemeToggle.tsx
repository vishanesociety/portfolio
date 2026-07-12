"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(!dark);
  };

  return (
    <button
      aria-label="Toggle color theme"
      onClick={toggle}
      className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-fg transition-colors hover:border-accent hover:text-accent"
    >
      <span className="text-sm">{dark ? "☀" : "☾"}</span>
    </button>
  );
}
