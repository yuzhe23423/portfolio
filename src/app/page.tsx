import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  LayoutDashboard,
  Sparkles,
  Compass,
  Check,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sundial Studio — Web products that earn their keep.",
  description:
    "Sundial is a Malaysia-based web studio that designs and builds custom web apps, marketing sites, and internal tools for founders and small teams.",
};

const services = [
  {
    icon: Code2,
    title: "Web applications",
    body: "Custom apps with auth, payments, and dashboards. Built on Next.js, TypeScript, Postgres, deployed on Vercel.",
    bullets: ["SaaS MVPs & rebuilds", "Auth + billing", "Realtime + integrations"],
  },
  {
    icon: Sparkles,
    title: "Marketing sites",
    body: "Fast, considered marketing pages that earn the click. SEO-ready, analytics-wired, and easy for your team to update.",
    bullets: ["Landing pages", "Brand & content sites", "CMS + analytics"],
  },
  {
    icon: LayoutDashboard,
    title: "Internal tools",
    body: "Custom admin panels and dashboards to replace the spreadsheet sprawl your ops team is drowning in.",
    bullets: ["Admin panels", "Reporting dashboards", "Workflow automations"],
  },
  {
    icon: Compass,
    title: "Tech advisory",
    body: "Fractional CTO support for early teams. Code review, architecture, hiring help — without the full-time hire.",
    bullets: ["Code & PR reviews", "Architecture audits", "Engineering hiring"],
  },
];

const work = [
  {
    title: "Meetly",
    sector: "Events platform",
    summary: "Event discovery with RSVPs, hosting, and ticket codes.",
    href: "/demos/events",
  },
  {
    title: "Pulse",
    sector: "Survey tool",
    summary: "Multi-step survey flow with progress and analytics.",
    href: "/demos/survey",
  },
  {
    title: "Slottr",
    sector: "Booking SaaS",
    summary: "Calendar booking, services, customers, settings.",
    href: "/demos/booking",
  },
  {
    title: "Northwind",
    sector: "Consulting site",
    summary: "Marketing page with pricing and lead capture.",
    href: "/demos/business",
  },
  {
    title: "Atlas",
    sector: "Admin shell",
    summary: "Internal tool with users, orders, billing, settings.",
    href: "/demos/admin",
  },
];

const process = [
  {
    n: "01",
    title: "Discovery",
    body: "Two weeks, fixed-fee. We learn your product, talk to users, and write a plan you can act on — even if it isn't with us.",
  },
  {
    n: "02",
    title: "Design",
    body: "We sketch, then prototype, then design at high fidelity. The same people who design also build, so nothing gets lost.",
  },
  {
    n: "03",
    title: "Build",
    body: "Weekly working demos in your hands. Real progress you can use, not slides describing progress.",
  },
  {
    n: "04",
    title: "Launch & support",
    body: "We stay for 30 days post-launch — fixing edge cases, training your team, leaving a stable handover behind.",
  },
];

const testimonials = [
  {
    quote:
      "Sundial shipped the first usable build in three weeks. By month two we were taking real money. We've worked with three agencies — they're the first who treated our problem like their own.",
    name: "Aisyah Rahman",
    role: "Founder, Routemark",
  },
  {
    quote:
      "Quietly opinionated in the best way. They pushed back on what mattered and stayed out of the way on what didn't.",
    name: "Daniel Chong",
    role: "CTO, Petalbox",
  },
  {
    quote:
      "Most studios sell hours. Sundial sells a decision. The audit they did saved us a year of building the wrong thing.",
    name: "Priya Sharma",
    role: "Head of Product, Greylane",
  },
];

const faqs = [
  {
    q: "How big is the team?",
    a: "Small on purpose. Two to four people on any one project, including the people who'll write the code from day one.",
  },
  {
    q: "Where are you based?",
    a: "Kuala Lumpur, Malaysia. We work asynchronously across SEA, AU/NZ, and the US — most projects have a weekly sync and Slack between.",
  },
  {
    q: "How do you charge?",
    a: "Fixed-fee for the Discovery sprint. After that, fixed-price milestones or monthly retainers — whichever fits the work.",
  },
  {
    q: "Will you work on my existing codebase?",
    a: "Yes — we do a fair number of audits and rebuilds. We're stack-honest: if the right answer is to keep what you have, we'll say so.",
  },
];

export default function SundialHome() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section id="hero" className="relative px-6 lg:px-8 pt-14 lg:pt-24 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              <span className="relative rounded-full bg-emerald-500 h-1.5 w-1.5" />
            </span>
            Booking new projects · Q3 2026
          </div>

          <h1 className="mt-8 font-display text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.92] tracking-[-0.035em] font-300 max-w-5xl">
            Web products that{" "}
            <span
              className="italic"
              style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
            >
              earn their keep
            </span>
            <span className="text-accent">.</span>
          </h1>

          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-6 items-end">
            <p
              className="col-span-12 lg:col-span-7 font-display text-xl lg:text-2xl leading-snug text-foreground/80"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              Sundial Studio is a small web studio in Kuala Lumpur. We design and
              build custom web apps, marketing sites, and internal tools for
              founders and small teams — quickly, and built to last.
            </p>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 hover:bg-accent transition-colors duration-300"
              >
                <span className="font-mono text-xs tracking-[0.18em] uppercase">
                  Start a project
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#work"
                className="font-mono text-xs tracking-[0.18em] uppercase draw-line"
              >
                See our work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="px-6 lg:px-8 py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-border pt-6 mb-14">
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
              What we do
            </p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300">
              Four things, done{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                well
              </span>
              <span className="text-accent">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="col-span-12 md:col-span-6 border-t border-border pt-6"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <h3
                    className="mt-4 font-display text-2xl lg:text-3xl tracking-[-0.02em] font-300"
                    style={{ fontVariationSettings: '"opsz" 60' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base lg:text-lg leading-relaxed text-foreground/80">
                    {s.body}
                  </p>
                  <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-baseline gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 translate-y-px text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Work ─────────────────────────────────────────────────── */}
      <section id="work" className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-border pt-6 mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
                Selected work
              </p>
              <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300">
                A few things we&apos;ve{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
                >
                  built
                </span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <Link
              href="/demos"
              className="font-mono text-xs tracking-[0.18em] uppercase draw-line inline-flex items-center gap-1.5"
            >
              All case studies
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <ul>
            {work.map((w) => (
              <li key={w.title}>
                <Link
                  href={w.href}
                  className="group grid grid-cols-12 gap-x-6 items-baseline py-7 lg:py-9 border-b border-border"
                >
                  <div className="col-span-12 lg:col-span-4">
                    <p className="text-xs font-mono tracking-[0.12em] uppercase text-muted-foreground mb-1.5">
                      {w.sector}
                    </p>
                    <h3
                      className="font-display text-3xl lg:text-5xl leading-[1.02] tracking-[-0.02em] font-300"
                      style={{ fontVariationSettings: '"opsz" 96' }}
                    >
                      <span className="draw-line">{w.title}</span>
                    </h3>
                  </div>
                  <p className="col-span-12 lg:col-span-6 mt-3 lg:mt-0 text-base lg:text-lg text-foreground/80 leading-relaxed">
                    {w.summary}
                  </p>
                  <div className="col-span-12 lg:col-span-2 mt-3 lg:mt-0 flex items-center lg:justify-end gap-2">
                    <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent transition-all group-hover:tracking-[0.24em]">
                      View
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section id="process" className="px-6 lg:px-8 py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-border pt-6 mb-14">
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
              How we work
            </p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300">
              Four steps, no{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                surprises
              </span>
              <span className="text-accent">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            {process.map((p) => (
              <div
                key={p.n}
                className="col-span-12 md:col-span-6 lg:col-span-3 border-t border-border pt-6"
              >
                <p className="font-mono text-sm text-accent">{p.n}</p>
                <h3
                  className="mt-3 font-display text-2xl tracking-[-0.02em] font-300"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-border pt-6 mb-14">
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Operators we&apos;ve worked with
            </p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300">
              In their own{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                words
              </span>
              <span className="text-accent">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="col-span-12 md:col-span-6 lg:col-span-4 border-t border-border pt-6"
              >
                <blockquote
                  className="font-display text-lg lg:text-xl leading-snug"
                  style={{ fontVariationSettings: '"opsz" 24' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="about" className="px-6 lg:px-8 py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-border pt-6 mb-14">
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
              About the studio
            </p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300">
              Small, deliberate,{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                yours
              </span>
              <span className="text-accent">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <p
                className="font-display text-xl lg:text-2xl leading-snug text-foreground/85"
                style={{ fontVariationSettings: '"opsz" 36' }}
              >
                Sundial is a senior-only studio. The people who pitch you are
                the same people who do the work — no juniors handed your
                problem, no offshore mystery team.
              </p>
              <p className="mt-6 text-base lg:text-lg leading-relaxed text-foreground/75">
                We&apos;re based in Kuala Lumpur and work with founders and small
                teams across Southeast Asia, Australia, and the US. Most
                projects run for 6 to 16 weeks; the longest ones become
                ongoing partnerships.
              </p>
            </div>

            <dl className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-8 self-start">
              <Stat label="Studio HQ" value="Kuala Lumpur" />
              <Stat label="Time zone" value="GMT+8" />
              <Stat label="Projects shipped" value="40+" />
              <Stat label="Team" value="2 – 4 per project" />
            </dl>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-border pt-6 mb-14">
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Frequently asked
            </p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-[-0.025em] font-300">
              Things you might be{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                wondering
              </span>
              <span className="text-accent">.</span>
            </h2>
          </div>

          <ul className="grid grid-cols-12 gap-x-6 gap-y-10">
            {faqs.map((f) => (
              <li
                key={f.q}
                className="col-span-12 md:col-span-6 border-t border-border pt-6"
              >
                <h3 className="font-display text-xl tracking-[-0.01em] font-400">
                  {f.q}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contact / CTA ────────────────────────────────────────── */}
      <section id="contact" className="px-6 lg:px-8 py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-border pt-6">
            <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Start a project
            </p>
            <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.88] tracking-[-0.035em] font-300">
              Let&apos;s make
              <br />
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                something good
              </span>
              <span className="text-accent">.</span>
            </h2>

            <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12 lg:col-span-7">
                <p
                  className="font-display text-xl lg:text-2xl leading-snug"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  Tell us about your product or the idea you&apos;re sitting on.
                  We reply within a day. No pitch deck required.
                </p>

                <a
                  href="mailto:hello@sundialstudio.co"
                  className="group mt-8 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 hover:bg-accent transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-mono text-xs tracking-[0.18em] uppercase">
                    hello@sundialstudio.co
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <dl className="col-span-12 lg:col-span-4 lg:col-start-9 grid grid-cols-1 gap-y-6 self-start">
                <Stat label="Studio HQ" value="Kuala Lumpur, MY" />
                <Stat label="Response time" value="Within 24 hours" />
                <Stat label="First call" value="30 min · free" />
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground">
        {label}
      </dt>
      <dd
        className="mt-1.5 font-display text-xl lg:text-2xl"
        style={{ fontVariationSettings: '"opsz" 36' }}
      >
        {value}
      </dd>
    </div>
  );
}
