"use client";

import { useState, useMemo } from "react";
import { Search, ExternalLink, Download } from "lucide-react";

type OrderStatus = "paid" | "pending" | "refunded" | "failed";

type Order = {
  id: string;
  customer: string;
  email: string;
  amount: number;
  items: number;
  status: OrderStatus;
  date: string;
};

const orders: Order[] = [
  { id: "#10428", customer: "Aisyah Rahman",  email: "aisyah@routemark.io",  amount: 320, items: 2, status: "paid",     date: "2026-05-27" },
  { id: "#10427", customer: "Daniel Chong",    email: "dchong@petalbox.my",   amount: 140, items: 1, status: "paid",     date: "2026-05-27" },
  { id: "#10426", customer: "Priya Sharma",    email: "priya@greylane.co",    amount: 920, items: 4, status: "pending",  date: "2026-05-26" },
  { id: "#10425", customer: "Marcus Lim",       email: "marcus@studio.dev",   amount: 1480, items: 6, status: "paid",     date: "2026-05-26" },
  { id: "#10424", customer: "Sara Wong",        email: "sara.w@cohort.io",    amount: 80,  items: 1, status: "refunded", date: "2026-05-25" },
  { id: "#10423", customer: "Hafiz Idris",      email: "hafiz@parkstreet.app",amount: 280, items: 2, status: "failed",   date: "2026-05-25" },
  { id: "#10422", customer: "Mei Ling Tan",     email: "meiling@tan.co",      amount: 540, items: 3, status: "paid",     date: "2026-05-24" },
  { id: "#10421", customer: "Joseph Otieno",    email: "joe@northbeam.io",    amount: 720, items: 3, status: "paid",     date: "2026-05-24" },
];

export default function OrdersPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | OrderStatus>("all");

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        o.customer.toLowerCase().includes(q) ||
        o.id.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "all" || o.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  const total = filtered
    .filter((o) => o.status === "paid")
    .reduce((s, o) => s + o.amount, 0);

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
              Orders
            </h1>
            <p className="mt-1 text-muted-foreground">
              {filtered.length} orders · RM {total.toLocaleString()} collected
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium hover:bg-muted transition">
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </button>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Order ID, customer, or email"
              className="w-72 rounded-lg border border-border bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
          <div className="inline-flex rounded-lg border border-border bg-card p-1 text-sm">
            {(["all", "paid", "pending", "refunded", "failed"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`rounded-md px-3 py-1 capitalize transition ${
                  statusFilter === s
                    ? "bg-accent text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">Order</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Items</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Amount</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr
                  key={o.id}
                  className="border-b border-border last:border-0 hover:bg-muted/40"
                >
                  <td className="px-5 py-3 font-mono text-xs">{o.id}</td>
                  <td className="px-5 py-3">
                    <p className="font-medium">{o.customer}</p>
                    <p className="text-xs text-muted-foreground">{o.email}</p>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{o.items}</td>
                  <td className="px-5 py-3 text-muted-foreground">{o.date}</td>
                  <td className="px-5 py-3">
                    <OrderStatusBadge status={o.status} />
                  </td>
                  <td className="px-5 py-3 text-right font-medium">
                    RM {o.amount.toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button
                      aria-label="Open order"
                      className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="px-5 py-12 text-center text-sm text-muted-foreground">
              No orders match your filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const map = {
    paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    refunded: "bg-muted text-muted-foreground",
    failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  };
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${map[status]}`}>
      {status}
    </span>
  );
}
