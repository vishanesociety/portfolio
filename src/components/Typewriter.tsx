"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let delay = deleting ? 45 : 85;

    if (!deleting && text === current) {
      delay = 1600; // pause at full word
    } else if (deleting && text === "") {
      delay = 350;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setI((v) => v + 1);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span aria-live="polite">
      <span className="gradient-text">{text}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] animate-pulse rounded-full bg-accent" />
    </span>
  );
}
