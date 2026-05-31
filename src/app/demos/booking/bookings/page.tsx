"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle2, Clock, XCircle } from "lucide-react";

type Status = "confirmed" | "pending" | "cancelled";

const allBookings = [
  { id: "b1", client: "Aisyah Rahman", service: "Consultation", date: "2026-05-27", time: "10:00", price: 80, status: "confirmed" as Status },
  { id: "b2", client: "Daniel Chong", service: "Review call", date: "2026-05-28", time: "14:00", price: 140, status: "confirmed" as Status },
  { id: "b3", client: "Priya Sharma", service: "Deep work session", date: "2026-05-29", time: "09:00", price: 220, status: "pending" as Status },
  { id: "b4", client: "Marcus Lim", service: "Strategy planning", date: "2026-05-30", time: "13:00", price: 320, status: "confirmed" as Status },
  { id: "b5", client: "Sara Wong", service: "Consultation", date: "2026-05-31", time: "11:00", price: 80, status: "confirmed" as Status },
  { id: "b6", client: "Hafiz Idris", service: "Review call", date: "2026-05-22", time: "16:00", price: 140, status: "cancelled" as Status },
  { id: "b7", client: "Mei Ling Tan", service: "Consultation", date: "2026-05-20", time: "10:30", price: 80, status: "confirmed" as Status },
  { id: "b8", client: "Joseph Otieno", service: "Deep work session", date: "2026-05-19", time: "14:00", price: 220, status: "confirmed" as Status },
];

export default function BookingsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | Status>("all");

  const filtered = useMemo(() => {
    return allBookings.filter((b) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        b.client.toLowerCase().includes(q) ||
        b.service.toLowerCase().includes(q);
      const matchesFilter = filter === "all" || b.status === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
            All bookings
          </h1>
          <p className="mt-1 text-muted-foreground">
            Every booking in your account, filterable by status.
          </p>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search client or service"
              className="w-full rounded-lg border border-border bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
          <div className="inline-flex rounded-lg border border-border bg-card p-1 text-sm">
            {(["all", "confirmed", "pending", "cancelled"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-md px-3 py-1 capitalize transition ${
                  filter === f
                    ? "bg-accent text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">Client</th>
                <th className="px-5 py-3">Service</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-border last:border-0 hover:bg-muted/40"
                >
                  <td className="px-5 py-3 font-medium">{b.client}</td>
                  <td className="px-5 py-3 text-muted-foreground">{b.service}</td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {b.date} · {b.time}
                  </td>
                  <td className="px-5 py-3">
                    <StatusBadge status={b.status} />
                  </td>
                  <td className="px-5 py-3 text-right font-medium">RM {b.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="px-5 py-12 text-center text-sm text-muted-foreground">
              No bookings match your filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map = {
    confirmed: {
      label: "Confirmed",
      cls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      Icon: CheckCircle2,
    },
    pending: {
      label: "Pending",
      cls: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      Icon: Clock,
    },
    cancelled: {
      label: "Cancelled",
      cls: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      Icon: XCircle,
    },
  };
  const { label, cls, Icon } = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${cls}`}
    >
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}
