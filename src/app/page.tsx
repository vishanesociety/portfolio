import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import SpotlightCard from "@/components/SpotlightCard";
import {
  certifications,
  education,
  experience,
  languages,
  profile,
  roles,
  skills,
  stats,
} from "@/lib/data";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex min-h-screen flex-col justify-center pt-24 pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Available for opportunities · {profile.location}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 min-h-[2.6rem] text-2xl font-semibold sm:min-h-[3rem] sm:text-3xl">
              <Typewriter words={roles} />
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
              >
                Get in touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={320}>
            <dl className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
                >
                  <dd className="text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="gradient-text">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </span>
                  </dd>
                  <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Marquee */}
        <Reveal>
          <div className="mb-8 -mx-6">
            <Marquee />
          </div>
        </Reveal>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-20">
          <Reveal>
            <SectionHeading eyebrow="About" title="Who I am" />
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">
              {profile.summary}
            </p>
          </Reveal>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 py-20">
          <Reveal>
            <SectionHeading eyebrow="Skills" title="What I work with" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.label} delay={i * 90}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-fg">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border bg-surface-2 px-3 py-1 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 py-20">
          <Reveal>
            <SectionHeading eyebrow="Experience" title="Where I've worked" />
          </Reveal>
          <div className="relative border-l border-border pl-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 100}>
                <div className="relative mb-12 last:mb-0">
                  <span className="absolute -left-[41px] top-1.5 size-4 rounded-full border-2 border-accent bg-bg" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold text-fg">
                      {job.role}
                    </h3>
                    <span className="rounded-full bg-surface-2 px-3 py-1 text-sm text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-accent">
                    {job.company}
                    <span className="text-muted"> · {job.location}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p, j) => (
                      <li
                        key={j}
                        className="flex gap-3 leading-relaxed text-muted"
                      >
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education + Certifications + Languages */}
        <section id="education" className="scroll-mt-20 py-20">
          <Reveal>
            <SectionHeading eyebrow="Background" title="Education & more" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <SpotlightCard className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="mb-5 text-sm font-semibold tracking-wide text-fg">
                  Education
                </h3>
                <ul className="space-y-5">
                  {education.map((e, i) => (
                    <li
                      key={i}
                      className="border-b border-border pb-5 last:border-0 last:pb-0"
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
              </SpotlightCard>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col gap-6">
                <SpotlightCard className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-fg">
                    Certifications
                  </h3>
                  <ul className="space-y-2.5">
                    {certifications.map((c) => (
                      <li key={c} className="flex gap-2.5 text-sm text-muted">
                        <span className="text-accent">✦</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
                <SpotlightCard className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-fg">
                    Languages
                  </h3>
                  <ul className="space-y-3">
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
                </SpotlightCard>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-10 text-center shadow-sm sm:p-16">
              <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
                Contact
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build something together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Have a project, role, or idea in mind? I&apos;d love to hear
                about it.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
