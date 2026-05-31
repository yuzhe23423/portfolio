"use client";

import {
  ArrowRight,
  TrendingUp,
  Layers,
  ShieldCheck,
  Sparkles,
  Quote,
  Check,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Growth strategy",
    body: "We map your category, isolate the bottleneck, and pick the one play that moves the number.",
  },
  {
    icon: Layers,
    title: "Operations design",
    body: "Cut your process surface area by half. Fewer steps, faster cycles, cleaner handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Risk reduction",
    body: "Compliance, continuity, and security baked in — before you hire your first General Counsel.",
  },
  {
    icon: Sparkles,
    title: "Brand & narrative",
    body: "A story your customers retell. Clear positioning that outlasts your latest marketing fad.",
  },
];

const stats = [
  { label: "Clients served", value: "240+" },
  { label: "Avg. revenue lift", value: "37%" },
  { label: "Avg. engagement", value: "9 wks" },
  { label: "Industries", value: "12" },
];

const testimonials = [
  {
    quote:
      "Northwind didn't sell us a deck. They sold us a decision. Six weeks later our LTV/CAC was a different conversation.",
    name: "Ng Wei Ming",
    role: "COO, Routemark Logistics",
  },
  {
    quote:
      "The best part was what they didn't do — they refused to expand scope when it would've helped them and hurt us.",
    name: "Aisha Tan",
    role: "Founder, Petalbox",
  },
  {
    quote:
      "They've become an extension of our leadership team. Quiet, sharp, and allergic to nonsense.",
    name: "Daniel Yusoff",
    role: "CEO, Greylane Capital",
  },
];

const pricing = [
  {
    name: "Sprint",
    price: "RM 18k",
    sub: "fixed scope · 4 weeks",
    features: [
      "Discovery & diagnosis",
      "One strategic decision",
      "Implementation playbook",
      "Weekly check-ins",
    ],
  },
  {
    name: "Engagement",
    price: "RM 14k",
    sub: "per month · 3 mo min",
    featured: true,
    features: [
      "Full strategy partnership",
      "Embedded weekly cadence",
      "Cross-functional support",
      "Quarterly board read-out",
      "Slack-level access",
    ],
  },
  {
    name: "Retainer",
    price: "Custom",
    sub: "long-term · ongoing",
    features: [
      "Bespoke scope",
      "Multi-team coverage",
      "On-call strategic advice",
      "Annual planning lead",
    ],
  },
];

export default function BusinessLanding() {
  return (
    <div className="overflow-hidden">
      {/* Northwind top nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3 lg:px-8">
          <a href="#hero" className="flex items-center gap-2 select-none">
            <span className="inline-block h-2.5 w-2.5 rotate-45 bg-accent" />
            <span className="font-display text-lg font-700 tracking-tight">
              Northwind
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
              Approach
            </a>
            <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>
          <a
            href="#contact"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-semibold hover:opacity-90 transition"
          >
            Book a call
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-20 pb-28 lg:px-8 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent" />
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Booking Q3 engagements
          </div>
          <h1 className="font-display text-5xl font-700 leading-[1.05] tracking-tight md:text-7xl">
            Strategy that <span className="text-accent">survives</span>
            <br />
            contact with Monday.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Northwind Consulting helps Southeast Asian operators make the one
            decision that compounds — and skip the twenty that don&apos;t.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#approach"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition"
            >
              How we work
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-6 py-7 text-center">
                <div className="font-display text-3xl font-700 text-accent md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="approach" className="bg-surface px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
              What we do
            </p>
            <h2 className="font-display text-4xl font-700 tracking-tight md:text-5xl">
              Four capabilities. Zero filler.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don&apos;t sell hours. We sell the part of the job that&apos;s actually load-bearing.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-7 transition hover:border-accent/40 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-700">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
                What clients say
              </p>
              <h2 className="font-display text-4xl font-700 tracking-tight md:text-5xl">
                Operators talk to operators.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              We&apos;ve worked with founders, COOs, and family offices across logistics,
              consumer, and financial services.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <Quote className="mb-4 h-6 w-6 text-accent/40" />
                <blockquote className="flex-1 text-[15px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
              Engagement models
            </p>
            <h2 className="font-display text-4xl font-700 tracking-tight md:text-5xl">
              Three ways to work together.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  p.featured
                    ? "border-accent bg-card shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Most picked
                  </div>
                )}
                <div className="text-sm font-medium text-muted-foreground">{p.name}</div>
                <div className="mt-2 font-display text-4xl font-700">{p.price}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.sub}</div>
                <ul className="my-6 flex-1 space-y-2.5 border-t border-border pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
                    p.featured
                      ? "bg-accent text-primary-foreground hover:opacity-90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  Start a conversation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-12 text-center shadow-sm md:p-16">
          <h2 className="font-display text-4xl font-700 tracking-tight md:text-5xl">
            One call.<br />Then you decide.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Thirty minutes. No deck. We listen, ask three sharp questions, and
            tell you whether we&apos;re the right people for the job.
          </p>
          <a
            href="mailto:hello@northwind.example"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            hello@northwind.example
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-display text-base font-700 text-foreground">
            Northwind<span className="text-accent">.</span>
          </div>
          <div>© 2026 Northwind Consulting · A fictional demo</div>
        </div>
      </footer>
    </div>
  );
}
