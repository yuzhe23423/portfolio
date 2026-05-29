import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos — Ong Yu Zhe",
  description: "Interactive demo projects — a folio of live works.",
};

const demos = [
  {
    n: "I",
    href: "/demos/events",
    title: "Event Management",
    body: "Create events, manage RSVPs, and track attendance with live capacity limits and persistence.",
    tag: "Full CRUD",
    discipline: "Application",
  },
  {
    n: "II",
    href: "/demos/survey",
    title: "Survey Form",
    body: "Multi-step survey with progress tracking, mixed input types, validation, and a summary view.",
    tag: "Multi-step form",
    discipline: "Form system",
  },
  {
    n: "III",
    href: "/demos/booking",
    title: "Booking Dashboard",
    body: "Weekly calendar with services, time-slot management, status cycling, and live revenue KPIs.",
    tag: "Dashboard",
    discipline: "Calendar tool",
  },
  {
    n: "IV",
    href: "/demos/business",
    title: "Business Landing Page",
    body: "Marketing landing for a fictional consulting firm — hero, features, social proof, pricing.",
    tag: "Marketing",
    discipline: "Landing page",
  },
  {
    n: "V",
    href: "/demos/admin",
    title: "Admin Panel",
    body: "Internal admin UI with KPI cards, a hand-rolled SVG line chart, activity feed, and users table.",
    tag: "Internal tool",
    discipline: "Admin shell",
  },
];

export default function DemosIndex() {
  return (
    <section className="px-6 lg:px-8 pt-12 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Masthead */}
        <header className="grid grid-cols-12 gap-x-6 border-b border-border pb-10">
          <div className="col-span-12 lg:col-span-2 lg:col-start-1">
            <span className="numeral text-7xl lg:text-8xl block leading-none">02</span>
            <p className="section-mark mt-4">The Appendix</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 mt-8 lg:mt-0">
            <p className="section-mark mb-4">A folio of {demos.length} live demos</p>
            <h1
              className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] tracking-[-0.03em] font-300"
            >
              Things, built —{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                play with them
              </span>
              <span className="text-accent">.</span>
            </h1>
            <p
              className="mt-8 font-display text-xl lg:text-2xl leading-snug max-w-2xl text-foreground/80"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              Each piece runs entirely in your browser. Click, type, refuse, re-do — the
              state lives only as long as the window does.
            </p>
          </div>
        </header>

        {/* Demos list — editorial rows */}
        <ul className="mt-8">
          {demos.map((demo, i) => (
            <li key={demo.href}>
              <Link
                href={demo.href}
                className="group grid grid-cols-12 gap-x-6 items-baseline py-8 lg:py-10 border-b border-border transition-colors"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="numeral text-3xl lg:text-5xl">{demo.n}</span>
                </div>

                <div className="col-span-10 lg:col-span-5">
                  <p className="section-mark mb-2">{demo.discipline}</p>
                  <h2
                    className="font-display text-3xl lg:text-5xl leading-[1.02] tracking-[-0.02em] font-300"
                    style={{ fontVariationSettings: '"opsz" 96' }}
                  >
                    <span className="draw-line">
                      {demo.title}
                    </span>
                  </h2>
                </div>

                <div className="col-span-10 lg:col-span-4 col-start-3 lg:col-start-auto mt-4 lg:mt-0">
                  <p
                    className="text-base lg:text-lg leading-relaxed text-foreground/80"
                    style={{ fontFeatureSettings: '"ss01"' }}
                  >
                    {demo.body}
                  </p>
                  <p className="mt-3 font-mono text-[11px] tracking-[0.1em] text-ink-mute">
                    {demo.tag}
                  </p>
                </div>

                <div className="col-span-2 lg:col-span-2 flex items-center justify-end gap-2 mt-4 lg:mt-0">
                  <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent transition-all group-hover:tracking-[0.24em]">
                    Open
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                {/* Index sub-row */}
                <div className="col-span-12 mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-ink-fade">
                    No. {(i + 1).toString().padStart(2, "0")} of {demos.length.toString().padStart(2, "0")} · {demo.href}
                  </span>
                  <span className="section-mark">— Interactive</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Closing colophon */}
        <div className="mt-16 grid grid-cols-12 gap-x-6 border-t border-border pt-6">
          <p className="col-span-12 lg:col-span-6 section-mark">
            End of folio
          </p>
          <p className="col-span-12 lg:col-span-6 lg:text-right section-mark">
            ✦ ✦ ✦
          </p>
        </div>
      </div>
    </section>
  );
}
