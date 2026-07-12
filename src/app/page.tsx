import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContributionGraph from "@/components/ContributionGraph";
import {
  certifications,
  education,
  experience,
  langColors,
  languages,
  profile,
  repos,
  skills,
} from "@/lib/data";

// Language distribution for the GitHub-style languages bar.
const langBar: { name: string; pct: number }[] = [
  { name: "TypeScript", pct: 34 },
  { name: "JavaScript", pct: 22 },
  { name: "Go", pct: 16 },
  { name: "Python", pct: 14 },
  { name: "HTML", pct: 8 },
  { name: "CSS", pct: 6 },
];

function BoxHeading({ id, title }: { id?: string; title: string }) {
  return (
    <h2
      id={id}
      className="mb-3 scroll-mt-20 border-b border-border pb-2 text-base font-semibold text-fg"
    >
      {title}
    </h2>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
    </svg>
  );
}

function RepoIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-muted" aria-hidden>
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main
        id="top"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-6 sm:px-6 md:grid-cols-[296px_minmax(0,1fr)]"
      >
        {/* Profile sidebar */}
        <aside className="md:sticky md:top-20 md:h-fit">
          <Reveal>
            <Image
              src="/avatar.jpeg"
              alt={profile.name}
              width={296}
              height={296}
              priority
              className="size-40 rounded-full border border-border object-cover sm:size-52"
            />
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-fg">{profile.name}</h1>
              <p className="mono text-xl font-light text-muted">
                {profile.github}
              </p>
            </div>
            <p className="mt-3 text-fg">{profile.tagline}</p>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary rounded-md px-3 py-1.5 text-center text-sm font-semibold"
              >
                Follow
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-center text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Sponsor
              </a>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
              <span className="font-semibold text-fg">1.2k</span> followers ·{" "}
              <span className="font-semibold text-fg">180</span> following
            </p>

            <ul className="mt-4 space-y-2 text-sm text-fg">
              <li className="flex items-center gap-2">
                <span aria-hidden>🏢</span> {profile.company}
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden>📍</span> {profile.location}
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden>✉️</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[var(--color-accent-2)] hover:underline"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden>🔗</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-accent-2)] hover:underline"
                >
                  in/{profile.linkedinHandle}
                </a>
              </li>
            </ul>
          </Reveal>
        </aside>

        {/* Main column */}
        <div className="min-w-0 space-y-8">
          {/* README / Overview */}
          <Reveal>
            <section id="about" className="scroll-mt-20">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <h2 className="mono text-sm font-semibold text-fg">
                  {profile.github} / README.md
                </h2>
                <span className="text-xs text-muted">Public</span>
              </div>
              <div className="rounded-b-md border border-t-0 border-border bg-bg p-6">
                <h3 className="text-xl font-semibold text-fg">
                  Hi, I&apos;m {profile.name.split(" ")[0]} 👋
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {profile.summary}
                </p>
              </div>
            </section>
          </Reveal>

          {/* Pinned repositories */}
          <section id="repositories" className="scroll-mt-20">
            <Reveal>
              <p className="mb-3 text-base font-semibold text-fg">Pinned</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {repos.map((r, i) => (
                <Reveal key={r.name} delay={i * 60}>
                  <div className="h-full rounded-md border border-border bg-bg p-4 transition-colors hover:border-[var(--color-accent-2)]">
                    <div className="flex items-center gap-2">
                      <RepoIcon />
                      <a
                        href={profile.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mono text-sm font-semibold text-[var(--color-accent-2)] hover:underline"
                      >
                        {r.name}
                      </a>
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                        Public
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{r.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="lang-dot"
                          style={{ background: langColors[r.language] }}
                        />
                        {r.language}
                      </span>
                      <span className="flex items-center gap-1">
                        <StarIcon /> {r.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <ForkIcon /> {r.forks}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Contributions */}
          <Reveal>
            <section>
              <BoxHeading title="Contribution activity" />
              <ContributionGraph />
            </section>
          </Reveal>

          {/* Experience */}
          <Reveal>
            <section id="experience" className="scroll-mt-20">
              <BoxHeading title="Experience" />
              <div className="space-y-4">
                {experience.map((job) => (
                  <div
                    key={job.company}
                    className="rounded-md border border-border bg-bg p-5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-semibold text-fg">
                        {job.role}{" "}
                        <span className="font-normal text-muted">
                          @ {job.company}
                        </span>
                      </h3>
                      <span className="mono rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{job.location}</p>
                    <ul className="mt-3 space-y-2">
                      {job.points.map((p, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Skills */}
          <Reveal>
            <section id="skills" className="scroll-mt-20">
              <BoxHeading title="Languages & Skills" />
              <div className="rounded-md border border-border bg-bg p-5">
                {/* Languages bar */}
                <div className="flex h-2.5 w-full overflow-hidden rounded-full">
                  {langBar.map((l) => (
                    <span
                      key={l.name}
                      style={{
                        width: `${l.pct}%`,
                        background: langColors[l.name],
                      }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
                  {langBar.map((l) => (
                    <span key={l.name} className="flex items-center gap-1.5">
                      <span
                        className="lang-dot"
                        style={{ background: langColors[l.name] }}
                      />
                      <span className="text-fg">{l.name}</span>
                      <span className="text-muted">{l.pct}%</span>
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                  {skills.map((group) => (
                    <div key={group.label}>
                      <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted uppercase">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-xs text-fg"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* Education + Certs + Languages */}
          <Reveal>
            <section id="education" className="scroll-mt-20">
              <BoxHeading title="Education & More" />
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-md border border-border bg-bg p-5 md:col-span-2">
                  <h4 className="mb-3 text-sm font-semibold text-fg">
                    Education
                  </h4>
                  <ul className="space-y-4">
                    {education.map((e, i) => (
                      <li
                        key={i}
                        className="border-b border-border pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <p className="font-medium text-fg">{e.detail}</p>
                          <span className="text-sm text-muted">{e.period}</span>
                        </div>
                        <p className="mt-0.5 text-sm text-muted">
                          {e.school} · {e.location}
                          {e.score ? ` · ${e.score}` : ""}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-md border border-border bg-bg p-5">
                    <h4 className="mb-3 text-sm font-semibold text-fg">
                      Certifications
                    </h4>
                    <ul className="space-y-2">
                      {certifications.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-muted">
                          <span className="text-accent">✓</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-border bg-bg p-5">
                    <h4 className="mb-3 text-sm font-semibold text-fg">
                      Languages
                    </h4>
                    <ul className="space-y-2">
                      {languages.map((l) => (
                        <li
                          key={l.name}
                          className="flex items-baseline justify-between gap-3 text-sm"
                        >
                          <span className="font-medium text-fg">{l.name}</span>
                          <span className="text-muted">{l.level}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Contact */}
          <Reveal>
            <section id="contact" className="scroll-mt-20">
              <BoxHeading title="Get in touch" />
              <div className="rounded-md border border-border bg-bg p-6 text-center">
                <p className="text-muted">
                  Open to opportunities and collaboration.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn-primary rounded-md px-4 py-2 text-sm font-semibold"
                  >
                    {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="rounded-md border border-border bg-surface-2 px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6">
          <p className="mono">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-6">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent-2)]">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent-2)]">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-accent-2)]">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
