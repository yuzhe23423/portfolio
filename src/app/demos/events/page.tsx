"use client";

import { useState, useEffect, useMemo } from "react";
import { CalendarDays, MapPin, Users, Plus, X, Check, Trash2 } from "lucide-react";

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  attendees: number;
  rsvped: boolean;
};

const seedEvents: Event[] = [
  {
    id: "e1",
    title: "Frontend Meetup — React 19 in Production",
    description: "Three speakers sharing real-world experience shipping React 19 apps.",
    date: "2026-06-12T18:30",
    location: "WeWork Damansara, Kuala Lumpur",
    capacity: 80,
    attendees: 64,
    rsvped: true,
  },
  {
    id: "e2",
    title: "Design Systems Workshop",
    description: "Hands-on session covering tokens, components, and rollout strategy.",
    date: "2026-06-20T10:00",
    location: "Sunway Innovation Hub",
    capacity: 30,
    attendees: 22,
    rsvped: false,
  },
  {
    id: "e3",
    title: "Indie Hackers Coffee",
    description: "Casual coffee meetup for founders, freelancers, and side-project builders.",
    date: "2026-07-05T09:00",
    location: "VCR Bangsar",
    capacity: 20,
    attendees: 11,
    rsvped: false,
  },
  {
    id: "e4",
    title: "TypeScript Deep Dive (Past)",
    description: "Recorded session on advanced TS patterns — type-level programming.",
    date: "2026-04-18T19:00",
    location: "Online",
    capacity: 200,
    attendees: 187,
    rsvped: true,
  },
];

const STORAGE_KEY = "demo-events";

export default function EventsDemo() {
  const [events, setEvents] = useState<Event[]>(seedEvents);
  const [filter, setFilter] = useState<"upcoming" | "past" | "mine">("upcoming");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEvents(JSON.parse(stored));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const [now] = useState(() => new Date().getTime());

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const t = new Date(e.date).getTime();
      if (filter === "upcoming") return t >= now;
      if (filter === "past") return t < now;
      return e.rsvped;
    });
  }, [events, filter, now]);

  const toggleRsvp = (id: string) => {
    setEvents((evts) =>
      evts.map((e) => {
        if (e.id !== id) return e;
        const willRsvp = !e.rsvped;
        if (willRsvp && e.attendees >= e.capacity) return e;
        return {
          ...e,
          rsvped: willRsvp,
          attendees: willRsvp ? e.attendees + 1 : Math.max(0, e.attendees - 1),
        };
      })
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((evts) => evts.filter((e) => e.id !== id));
  };

  const addEvent = (e: Omit<Event, "id" | "attendees" | "rsvped">) => {
    setEvents((evts) => [
      {
        ...e,
        id: `e${Date.now()}`,
        attendees: 1,
        rsvped: true,
      },
      ...evts,
    ]);
    setShowForm(false);
  };

  const resetDemo = () => {
    setEvents(seedEvents);
  };

  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium tracking-wider uppercase text-accent">
              Demo · Event Management
            </p>
            <h1 className="font-display text-4xl font-700 tracking-tight md:text-5xl">
              Events
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse upcoming events, RSVP, or create your own.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={resetDemo}
              className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition"
            >
              Reset
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Plus className="h-4 w-4" /> New event
            </button>
          </div>
        </header>

        <div className="mb-6 inline-flex rounded-lg border border-border bg-card p-1">
          {(["upcoming", "past", "mine"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium capitalize transition ${
                filter === f
                  ? "bg-accent text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "mine" ? "My RSVPs" : f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No events here yet.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                now={now}
                onRsvp={() => toggleRsvp(event.id)}
                onDelete={() => deleteEvent(event.id)}
              />
            ))}
          </div>
        )}
      </div>

      {showForm && <EventForm onClose={() => setShowForm(false)} onSubmit={addEvent} />}
    </section>
  );
}

function EventCard({
  event,
  now,
  onRsvp,
  onDelete,
}: {
  event: Event;
  now: number;
  onRsvp: () => void;
  onDelete: () => void;
}) {
  const date = new Date(event.date);
  const isPast = date.getTime() < now;
  const isFull = event.attendees >= event.capacity && !event.rsvped;
  const pct = Math.min(100, (event.attendees / event.capacity) * 100);

  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-accent/40 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-700 leading-tight">{event.title}</h3>
        <button
          onClick={onDelete}
          aria-label="Delete event"
          className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-red-500 transition"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <p className="mb-4 text-sm text-muted-foreground">{event.description}</p>

      <div className="mb-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="h-4 w-4 shrink-0" />
          {date.toLocaleString("en-MY", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          {event.location}
        </div>
      </div>

      <div className="mt-auto">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {event.attendees} / {event.capacity} attending
          </span>
          {isPast && (
            <span className="rounded-full bg-muted px-2 py-0.5 font-medium">Past</span>
          )}
        </div>
        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <button
          onClick={onRsvp}
          disabled={isPast || isFull}
          className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${
            event.rsvped
              ? "border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20"
              : isFull || isPast
              ? "border border-border bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-foreground text-background hover:opacity-90"
          }`}
        >
          {event.rsvped ? (
            <span className="inline-flex items-center justify-center gap-1.5">
              <Check className="h-4 w-4" /> Going
            </span>
          ) : isFull ? (
            "Full"
          ) : isPast ? (
            "Closed"
          ) : (
            "RSVP"
          )}
        </button>
      </div>
    </article>
  );
}

function EventForm({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (e: Omit<Event, "id" | "attendees" | "rsvped">) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState(20);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !location) return;
    onSubmit({ title, description, date, location, capacity });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
        className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-xl font-700">Create event</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <Field label="Title">
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Frontend Meetup"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </Field>
          <Field label="Description">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Date & time">
              <input
                type="datetime-local"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </Field>
            <Field label="Capacity">
              <input
                type="number"
                min={1}
                value={capacity}
                onChange={(e) => setCapacity(parseInt(e.target.value) || 1)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </Field>
          </div>
          <Field label="Location">
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Kuala Lumpur"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </Field>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Create event
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
