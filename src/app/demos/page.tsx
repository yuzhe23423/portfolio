import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos — Ong Yu Zhe",
  description: "Interactive demo projects.",
};

const demos = [
  {
    href: "/demos/events",
    title: "Event Management",
    body: "Create events, manage RSVPs, and track attendance with live capacity limits and persistence.",
    tag: "Full CRUD",
  },
  {
    href: "/demos/survey",
    title: "Survey Form",
    body: "Multi-step survey with progress tracking, mixed input types, validation, and a summary view.",
    tag: "Multi-step form",
  },
  {
    href: "/demos/booking",
    title: "Booking Dashboard",
    body: "Weekly calendar with services, time-slot management, status cycling, and live revenue stats.",
    tag: "Dashboard",
  },
  {
    href: "/demos/business",
    title: "Business Landing Page",
    body: "Marketing landing for a fictional consulting firm — hero, features, social proof, pricing.",
    tag: "Marketing",
  },
  {
    href: "/demos/admin",
    title: "Admin Panel",
    body: "Internal admin UI with stat cards, a custom SVG chart, activity feed, and a users table.",
    tag: "Internal tool",
  },
];

export default function DemosIndex() {
  return (
    <section className="px-6 lg:px-8 pt-16 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="border-b border-border pb-10">
          <p className="section-mark mb-4">Live demos</p>
          <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.9] tracking-[-0.03em] font-300">
            Things I&apos;ve built —{" "}
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
            Each demo runs entirely in your browser with mock data. Click around,
            try them out.
          </p>
        </header>

        {/* Demos list */}
        <ul>
          {demos.map((demo) => (
            <li key={demo.href}>
              <Link
                href={demo.href}
                className="group grid grid-cols-12 gap-x-6 gap-y-3 items-baseline py-8 lg:py-10 border-b border-border"
              >
                <div className="col-span-12 lg:col-span-5">
                  <p className="section-mark mb-2">{demo.tag}</p>
                  <h2
                    className="font-display text-3xl lg:text-5xl leading-[1.02] tracking-[-0.02em] font-300"
                    style={{ fontVariationSettings: '"opsz" 96' }}
                  >
                    <span className="draw-line">{demo.title}</span>
                  </h2>
                </div>

                <div className="col-span-12 lg:col-span-5">
                  <p
                    className="text-base lg:text-lg leading-relaxed text-foreground/80"
                    style={{ fontFeatureSettings: '"ss01"' }}
                  >
                    {demo.body}
                  </p>
                </div>

                <div className="col-span-12 lg:col-span-2 flex items-center lg:justify-end gap-2">
                  <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent transition-all group-hover:tracking-[0.24em]">
                    Open
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
