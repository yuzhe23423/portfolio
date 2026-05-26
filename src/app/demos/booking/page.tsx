"use client";

import { useState, useMemo } from "react";
import {
  Calendar,
  Clock,
  User,
  Plus,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Service = {
  id: string;
  name: string;
  duration: number; // minutes
  price: number;
  color: string;
};

type Booking = {
  id: string;
  serviceId: string;
  client: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  status: "confirmed" | "pending" | "cancelled";
};

const services: Service[] = [
  { id: "s1", name: "Consultation", duration: 30, price: 80, color: "bg-sky-500" },
  { id: "s2", name: "Deep work session", duration: 90, price: 220, color: "bg-violet-500" },
  { id: "s3", name: "Review call", duration: 60, price: 140, color: "bg-emerald-500" },
  { id: "s4", name: "Strategy planning", duration: 120, price: 320, color: "bg-rose-500" },
];

function weekStart(d: Date) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  date.setDate(diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

function fmtDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, n: number) {
  const r = new Date(d);
  r.setDate(d.getDate() + n);
  return r;
}

const today = new Date();
const monday = weekStart(today);
const seedBookings: Booking[] = [
  {
    id: "b1",
    serviceId: "s1",
    client: "Aisyah Rahman",
    date: fmtDate(addDays(monday, 0)),
    time: "10:00",
    status: "confirmed",
  },
  {
    id: "b2",
    serviceId: "s3",
    client: "Daniel Chong",
    date: fmtDate(addDays(monday, 1)),
    time: "14:00",
    status: "confirmed",
  },
  {
    id: "b3",
    serviceId: "s2",
    client: "Priya Sharma",
    date: fmtDate(addDays(monday, 2)),
    time: "09:00",
    status: "pending",
  },
  {
    id: "b4",
    serviceId: "s4",
    client: "Marcus Lim",
    date: fmtDate(addDays(monday, 3)),
    time: "13:00",
    status: "confirmed",
  },
  {
    id: "b5",
    serviceId: "s1",
    client: "Sara Wong",
    date: fmtDate(addDays(monday, 4)),
    time: "11:00",
    status: "confirmed",
  },
];

const hours = Array.from({ length: 10 }, (_, i) => 9 + i); // 9am — 6pm
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function BookingDemo() {
  const [bookings, setBookings] = useState<Booking[]>(seedBookings);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedService, setSelectedService] = useState<string>(services[0].id);
  const [showForm, setShowForm] = useState(false);

  const currentMonday = useMemo(() => addDays(monday, weekOffset * 7), [weekOffset]);
  const weekDays = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(currentMonday, i)),
    [currentMonday]
  );

  const weekBookings = useMemo(() => {
    const start = fmtDate(currentMonday);
    const end = fmtDate(addDays(currentMonday, 6));
    return bookings.filter((b) => b.date >= start && b.date <= end);
  }, [bookings, currentMonday]);

  const stats = useMemo(() => {
    const todayStr = fmtDate(today);
    return {
      today: bookings.filter((b) => b.date === todayStr).length,
      week: weekBookings.length,
      confirmed: weekBookings.filter((b) => b.status === "confirmed").length,
      revenue: weekBookings.reduce((sum, b) => {
        const svc = services.find((s) => s.id === b.serviceId);
        return sum + (svc && b.status === "confirmed" ? svc.price : 0);
      }, 0),
    };
  }, [bookings, weekBookings]);

  const addBooking = (b: Omit<Booking, "id">) => {
    setBookings((prev) => [...prev, { ...b, id: `b${Date.now()}` }]);
    setShowForm(false);
  };

  const toggleStatus = (id: string) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              status:
                b.status === "confirmed"
                  ? "pending"
                  : b.status === "pending"
                  ? "cancelled"
                  : "confirmed",
            }
          : b
      )
    );
  };

  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium tracking-wider uppercase text-accent">
              Demo · Booking Dashboard
            </p>
            <h1 className="font-display text-4xl font-700 tracking-tight md:text-5xl">
              Scheduling
            </h1>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            <Plus className="h-4 w-4" /> New booking
          </button>
        </header>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Today" value={stats.today} sub="bookings" />
          <StatCard label="This week" value={stats.week} sub="bookings" />
          <StatCard label="Confirmed" value={stats.confirmed} sub="this week" />
          <StatCard label="Revenue" value={`RM ${stats.revenue}`} sub="this week" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </h3>
              <div className="space-y-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left transition ${
                      selectedService === s.id
                        ? "border-accent bg-accent/5"
                        : "border-transparent hover:bg-muted"
                    }`}
                  >
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.color}`} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">{s.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {s.duration} min · RM {s.price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {currentMonday.toLocaleDateString("en-MY", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  —{" "}
                  {addDays(currentMonday, 6).toLocaleDateString("en-MY", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setWeekOffset((w) => w - 1)}
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label="Previous week"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setWeekOffset(0)}
                  className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Today
                </button>
                <button
                  onClick={() => setWeekOffset((w) => w + 1)}
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label="Next week"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="grid min-w-[800px] grid-cols-[60px_repeat(7,1fr)]">
                <div />
                {weekDays.map((d, i) => {
                  const isToday = fmtDate(d) === fmtDate(today);
                  return (
                    <div
                      key={i}
                      className={`border-b border-l border-border p-3 text-center ${
                        isToday ? "bg-accent/5" : ""
                      }`}
                    >
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {dayLabels[i]}
                      </div>
                      <div
                        className={`mt-0.5 text-lg font-700 ${
                          isToday ? "text-accent" : ""
                        }`}
                      >
                        {d.getDate()}
                      </div>
                    </div>
                  );
                })}

                {hours.map((h) => (
                  <Row
                    key={h}
                    hour={h}
                    days={weekDays}
                    bookings={weekBookings}
                    onClickBooking={toggleStatus}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 text-sm font-semibold">Upcoming this week</h3>
          {weekBookings.length === 0 ? (
            <p className="text-sm text-muted-foreground">No bookings this week.</p>
          ) : (
            <ul className="divide-y divide-border">
              {[...weekBookings]
                .sort((a, b) =>
                  a.date === b.date ? a.time.localeCompare(b.time) : a.date.localeCompare(b.date)
                )
                .map((b) => {
                  const svc = services.find((s) => s.id === b.serviceId)!;
                  return (
                    <li key={b.id} className="flex items-center gap-4 py-3">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${svc.color}`} />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{b.client}</div>
                        <div className="text-xs text-muted-foreground">
                          {svc.name} · {b.date} at {b.time}
                        </div>
                      </div>
                      <StatusBadge status={b.status} />
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>

      {showForm && (
        <BookingForm
          services={services}
          defaultService={selectedService}
          onClose={() => setShowForm(false)}
          onSubmit={addBooking}
        />
      )}
    </section>
  );
}

function Row({
  hour,
  days,
  bookings,
  onClickBooking,
}: {
  hour: number;
  days: Date[];
  bookings: Booking[];
  onClickBooking: (id: string) => void;
}) {
  return (
    <>
      <div className="border-b border-border px-2 py-3 text-right text-xs font-medium text-muted-foreground">
        {hour}:00
      </div>
      {days.map((d, i) => {
        const dateStr = fmtDate(d);
        const cell = bookings.find(
          (b) => b.date === dateStr && parseInt(b.time.split(":")[0]) === hour
        );
        return (
          <div key={i} className="relative h-16 border-b border-l border-border">
            {cell && <SlotBlock booking={cell} onClick={() => onClickBooking(cell.id)} />}
          </div>
        );
      })}
    </>
  );
}

function SlotBlock({ booking, onClick }: { booking: Booking; onClick: () => void }) {
  const svc = services.find((s) => s.id === booking.serviceId)!;
  const opacity = booking.status === "cancelled" ? "opacity-50 line-through" : "";
  return (
    <button
      onClick={onClick}
      className={`absolute inset-0.5 flex flex-col items-start justify-center rounded-md ${svc.color} p-1.5 text-left text-white shadow-sm transition hover:scale-[1.02] ${opacity}`}
    >
      <span className="truncate text-[11px] font-semibold leading-tight">{booking.client}</span>
      <span className="truncate text-[10px] opacity-90">
        {booking.time} · {svc.name}
      </span>
    </button>
  );
}

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: number | string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-display text-3xl font-700">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: Booking["status"] }) {
  const map = {
    confirmed: {
      label: "Confirmed",
      cls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      icon: CheckCircle2,
    },
    pending: {
      label: "Pending",
      cls: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      icon: Clock,
    },
    cancelled: {
      label: "Cancelled",
      cls: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      icon: XCircle,
    },
  };
  const { label, cls, icon: Icon } = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}`}
    >
      <Icon className="h-3 w-3" /> {label}
    </span>
  );
}

function BookingForm({
  services,
  defaultService,
  onClose,
  onSubmit,
}: {
  services: Service[];
  defaultService: string;
  onClose: () => void;
  onSubmit: (b: Omit<Booking, "id">) => void;
}) {
  const [client, setClient] = useState("");
  const [date, setDate] = useState(fmtDate(today));
  const [time, setTime] = useState("10:00");
  const [serviceId, setServiceId] = useState(defaultService);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!client || !date || !time) return;
    onSubmit({ client, date, time, serviceId, status: "pending" });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
        className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl"
      >
        <h2 className="mb-5 font-display text-xl font-700">New booking</h2>

        <div className="space-y-4">
          <Field label="Client name" icon={<User className="h-4 w-4" />}>
            <input
              type="text"
              required
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </Field>
          <Field label="Service">
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — RM {s.price}
                </option>
              ))}
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </Field>
            <Field label="Time">
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              >
                {hours.map((h) => (
                  <option key={h} value={`${h.toString().padStart(2, "0")}:00`}>
                    {h}:00
                  </option>
                ))}
              </select>
            </Field>
          </div>
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
            Book it
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
