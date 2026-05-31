"use client";

import Link from "next/link";
import {
  CalendarDays,
  Users,
  Eye,
  Pencil,
  BarChart3,
  Plus,
} from "lucide-react";

const hosted = [
  {
    id: "h1",
    title: "Indie Hackers KL — Monthly Coffee",
    date: "2026-06-22T09:00",
    status: "Published",
    attendees: 14,
    capacity: 20,
    views: 412,
  },
  {
    id: "h2",
    title: "Workshop: Building with Next.js 16",
    date: "2026-07-10T10:00",
    status: "Draft",
    attendees: 0,
    capacity: 40,
    views: 0,
  },
  {
    id: "h3",
    title: "End-of-year Founders Mixer",
    date: "2026-12-05T19:00",
    status: "Published",
    attendees: 56,
    capacity: 80,
    views: 1842,
  },
];

export default function HostingPage() {
  const stats = {
    hosting: hosted.length,
    attendees: hosted.reduce((s, e) => s + e.attendees, 0),
    views: hosted.reduce((s, e) => s + e.views, 0),
  };

  return (
    <section className="px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
              Events you&apos;re hosting
            </h1>
            <p className="mt-1 text-muted-foreground">
              Manage your own events, drafts, and attendees.
            </p>
          </div>
          <Link
            href="/demos/events"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            <Plus className="h-3.5 w-3.5" />
            New event
          </Link>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Hosting" value={stats.hosting} />
          <Stat label="Total attendees" value={stats.attendees} />
          <Stat label="Page views" value={stats.views.toLocaleString()} />
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border px-5 py-3">
            <h3 className="font-semibold">Your events</h3>
          </div>
          <ul className="divide-y divide-border">
            {hosted.map((e) => {
              const pct = Math.min(100, (e.attendees / e.capacity) * 100);
              return (
                <li key={e.id} className="px-5 py-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium truncate">{e.title}</h4>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                            e.status === "Published"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {e.status}
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {new Date(e.date).toLocaleString("en-MY", {
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5" />
                          {e.attendees} / {e.capacity}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Eye className="h-3.5 w-3.5" />
                          {e.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        aria-label="View analytics"
                        className="rounded-md border border-border bg-background p-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <BarChart3 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        aria-label="Edit"
                        className="rounded-md border border-border bg-background p-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {e.status === "Published" && (
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-700">{value}</p>
    </div>
  );
}
