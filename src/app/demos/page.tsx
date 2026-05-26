import Link from "next/link";
import {
  CalendarDays,
  ClipboardList,
  CalendarCheck,
  Building2,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos — Ong Yu Zhe",
  description: "Interactive demo projects.",
};

const demos = [
  {
    href: "/demos/events",
    title: "Event Management",
    description: "Create events, manage RSVPs, and track attendance with capacity limits.",
    icon: CalendarDays,
    color: "from-orange-500/20 to-amber-500/10",
    tag: "Full CRUD",
  },
  {
    href: "/demos/survey",
    title: "Survey Form System",
    description: "Multi-step survey with progress tracking, validation, and aggregated results.",
    icon: ClipboardList,
    color: "from-emerald-500/20 to-teal-500/10",
    tag: "Multi-step",
  },
  {
    href: "/demos/booking",
    title: "Booking Dashboard",
    description: "Weekly calendar booking dashboard with services and time-slot management.",
    icon: CalendarCheck,
    color: "from-sky-500/20 to-indigo-500/10",
    tag: "Dashboard",
  },
  {
    href: "/demos/business",
    title: "Business Landing Page",
    description: "Marketing landing page for a consulting firm — hero, features, social proof.",
    icon: Building2,
    color: "from-rose-500/20 to-pink-500/10",
    tag: "Marketing",
  },
  {
    href: "/demos/admin",
    title: "Admin Panel",
    description: "Internal admin UI with stats, users table, charts, and activity feed.",
    icon: LayoutDashboard,
    color: "from-violet-500/20 to-purple-500/10",
    tag: "Internal tool",
  },
];

export default function DemosIndex() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-wider uppercase text-accent">
            Live demos
          </p>
          <h1 className="font-display text-4xl font-700 tracking-tight md:text-5xl">
            Things I&apos;ve built —{" "}
            <span className="text-muted-foreground">play with them.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Each demo runs entirely in your browser with mock data. Click around, try them out.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => {
            const Icon = demo.icon;
            return (
              <Link
                key={demo.href}
                href={demo.href}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <div className="mb-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {demo.tag}
                  </div>
                  <h2 className="font-display text-xl font-700 tracking-tight">
                    {demo.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {demo.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
