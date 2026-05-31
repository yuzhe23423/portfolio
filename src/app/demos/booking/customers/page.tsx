"use client";

import { useState, useMemo } from "react";
import { Search, Mail } from "lucide-react";

const customers = [
  { id: "c1", name: "Aisyah Rahman", email: "aisyah@routemark.io", bookings: 5, lastSeen: "Today",     spend: 720, status: "Active" },
  { id: "c2", name: "Daniel Chong",   email: "dchong@petalbox.my", bookings: 2, lastSeen: "Yesterday", spend: 280, status: "Active" },
  { id: "c3", name: "Priya Sharma",   email: "priya@greylane.co",   bookings: 8, lastSeen: "2d ago",    spend: 1840, status: "Active" },
  { id: "c4", name: "Marcus Lim",     email: "marcus@studio.dev",   bookings: 4, lastSeen: "1w ago",    spend: 1280, status: "Active" },
  { id: "c5", name: "Sara Wong",      email: "sara.w@cohort.io",    bookings: 1, lastSeen: "Today",     spend: 80,  status: "New"    },
  { id: "c6", name: "Hafiz Idris",    email: "hafiz@parkstreet.app",bookings: 3, lastSeen: "3w ago",    spend: 340, status: "Lapsed" },
  { id: "c7", name: "Mei Ling Tan",   email: "meiling@tan.co",      bookings: 6, lastSeen: "Today",     spend: 920, status: "Active" },
  { id: "c8", name: "Joseph Otieno",  email: "joe@northbeam.io",    bookings: 9, lastSeen: "Today",     spend: 2110, status: "VIP"   },
];

export default function CustomersPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return customers.filter(
      (c) => !q || c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
              Customers
            </h1>
            <p className="mt-1 text-muted-foreground">
              {customers.length} people have booked with you.
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search customers"
              className="rounded-lg border border-border bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Bookings</th>
                <th className="px-5 py-3">Last seen</th>
                <th className="px-5 py-3 text-right">Total spend</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-border last:border-0 hover:bg-muted/40"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={c.name} />
                      <div>
                        <p className="font-medium">{c.name}</p>
                        <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {c.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{c.bookings}</td>
                  <td className="px-5 py-3 text-muted-foreground">{c.lastSeen}</td>
                  <td className="px-5 py-3 text-right font-medium">
                    RM {c.spend.toLocaleString()}
                  </td>
                  <td className="px-5 py-3">
                    <StatusPill status={c.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="px-5 py-12 text-center text-sm text-muted-foreground">
              No customers found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
  const hue = (name.charCodeAt(0) * 47) % 360;
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 60% 55%), hsl(${(hue + 40) % 360} 60% 45%))`,
      }}
    >
      {initials}
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    New: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    Lapsed: "bg-muted text-muted-foreground",
    VIP: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  };
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${map[status]}`}>
      {status}
    </span>
  );
}
