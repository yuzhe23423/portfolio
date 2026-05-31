"use client";

import Link from "next/link";
import { CalendarDays, MapPin, Ticket, ArrowRight } from "lucide-react";

const rsvped = [
  {
    id: "r1",
    title: "Frontend Meetup — React 19 in Production",
    date: "2026-06-12T18:30",
    location: "WeWork Damansara, Kuala Lumpur",
    status: "Confirmed",
    code: "MEET-A4F2",
  },
  {
    id: "r2",
    title: "TypeScript Deep Dive",
    date: "2026-07-02T19:00",
    location: "Online",
    status: "Confirmed",
    code: "MEET-C90E",
  },
  {
    id: "r3",
    title: "Designer x Dev Mixer",
    date: "2026-07-18T18:00",
    location: "Hyde KL",
    status: "Waitlist",
    code: "MEET-2117",
  },
];

export default function RsvpsPage() {
  return (
    <section className="px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
            My RSVPs
          </h1>
          <p className="mt-1 text-muted-foreground">
            Events you said yes to. Show your ticket code at the door.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {rsvped.map((e) => {
            const date = new Date(e.date);
            return (
              <article
                key={e.id}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-700 leading-tight">
                    {e.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                      e.status === "Confirmed"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>

                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    {date.toLocaleString("en-MY", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {e.location}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-lg border border-dashed border-border bg-background p-3">
                  <div className="flex items-center gap-2">
                    <Ticket className="h-4 w-4 text-accent" />
                    <span className="font-mono text-sm tracking-wider">
                      {e.code}
                    </span>
                  </div>
                  <button className="text-xs font-medium text-muted-foreground hover:text-foreground">
                    Show pass
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for more?
          </p>
          <Link
            href="/demos/events"
            className="mt-2 inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
          >
            Browse upcoming events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
