"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <a href="#top" className="block">
            <Image
              src="/avatar.jpeg"
              alt={profile.name}
              width={32}
              height={32}
              className="size-8 rounded-full border border-border object-cover"
            />
          </a>
          <a href="#top" className="mono text-sm font-semibold text-fg">
            {profile.github}
          </a>
        </div>

        <ul className="hidden items-center gap-1 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-1.5 font-medium text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            Follow
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-md border border-border text-fg md:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-border bg-surface px-4 py-2 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
