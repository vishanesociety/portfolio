import { marquee } from "@/lib/data";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee-wrap relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className="marquee gap-3">
        {items.map((t, i) => (
          <span
            key={i}
            className="shrink-0 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
