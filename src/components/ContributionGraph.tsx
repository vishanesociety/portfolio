import { profile } from "@/lib/data";

const WEEKS = 53;
const DAYS = 7;
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ContributionGraph() {
  // Deterministic values so server and client render identically.
  const rand = mulberry32(20220401);
  const cells: number[][] = [];
  let total = 0;

  for (let w = 0; w < WEEKS; w++) {
    const col: number[] = [];
    for (let d = 0; d < DAYS; d++) {
      const r = rand();
      // Weekends slightly quieter, mid-week busier — feels organic.
      const bias = d === 0 || d === 6 ? 0.35 : 0.7;
      const v = r * bias;
      let level = 0;
      if (v > 0.55) level = 4;
      else if (v > 0.4) level = 3;
      else if (v > 0.25) level = 2;
      else if (v > 0.12) level = 1;
      col.push(level);
      total += level * 3;
    }
    cells.push(col);
  }

  return (
    <div className="rounded-md border border-border bg-bg p-4">
      <p className="mb-3 text-sm text-fg">
        <span className="font-semibold">{total.toLocaleString()}</span>{" "}
        <span className="text-muted">contributions in the last year</span>
      </p>

      <div className="overflow-x-auto">
        <div className="inline-flex min-w-max flex-col gap-2">
          {/* Month labels */}
          <div className="flex gap-[3px] pl-8 text-xs text-muted">
            {cells.map((_, w) => {
              // Label roughly every ~4.4 weeks.
              const monthIdx = Math.floor((w / WEEKS) * 12);
              const prevIdx = Math.floor(((w - 1) / WEEKS) * 12);
              const show = w === 0 || monthIdx !== prevIdx;
              return (
                <span key={w} className="w-[11px] shrink-0">
                  {show ? MONTHS[monthIdx % 12] : ""}
                </span>
              );
            })}
          </div>

          <div className="flex gap-2">
            {/* Weekday labels */}
            <div className="flex flex-col justify-between py-[1px] pr-1 text-[10px] text-muted">
              <span className="h-[11px]">Mon</span>
              <span className="h-[11px]">Wed</span>
              <span className="h-[11px]">Fri</span>
            </div>

            {/* Grid */}
            <div className="flex gap-[3px]">
              {cells.map((col, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                  {col.map((level, d) => (
                    <span
                      key={d}
                      className={`cg-cell cg-${level}`}
                      title={`${level * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1.5 pt-1 text-xs text-muted">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <span key={l} className={`cg-cell cg-${l}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      <a
        href={profile.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-xs font-medium text-[var(--color-accent-2)] hover:underline"
      >
        View full profile on GitHub →
      </a>
    </div>
  );
}
