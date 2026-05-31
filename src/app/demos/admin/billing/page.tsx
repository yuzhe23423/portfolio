import { CreditCard, Download, Check, ArrowUpRight } from "lucide-react";

const invoices = [
  { id: "INV-2026-042", date: "May 1, 2026", amount: 89, status: "Paid" },
  { id: "INV-2026-035", date: "Apr 1, 2026", amount: 89, status: "Paid" },
  { id: "INV-2026-028", date: "Mar 1, 2026", amount: 89, status: "Paid" },
  { id: "INV-2026-021", date: "Feb 1, 2026", amount: 89, status: "Paid" },
  { id: "INV-2026-014", date: "Jan 1, 2026", amount: 89, status: "Paid" },
];

const plans = [
  {
    name: "Hobby",
    price: 0,
    perks: ["100 users", "Basic analytics", "Community support"],
    current: false,
  },
  {
    name: "Growth",
    price: 89,
    perks: [
      "Unlimited users",
      "Advanced analytics",
      "Email support · 24h",
      "Custom domain",
    ],
    current: true,
  },
  {
    name: "Scale",
    price: 249,
    perks: [
      "Everything in Growth",
      "Dedicated CSM",
      "SSO + audit log",
      "Priority support",
    ],
    current: false,
  },
];

export default function BillingPage() {
  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
            Billing
          </h1>
          <p className="mt-1 text-muted-foreground">
            Your plan, payment method, and invoice history.
          </p>
        </div>

        {/* Current plan */}
        <div className="mb-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Current plan
                </p>
                <h2 className="mt-1 font-display text-2xl font-700">Growth</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Renews on June 1, 2026 · RM 89/month
                </p>
              </div>
              <button className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium hover:bg-muted transition">
                Manage plan
              </button>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 border-t border-border pt-5 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Users</p>
                <p className="mt-1 font-medium">2,847 / unlimited</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Storage</p>
                <p className="mt-1 font-medium">18.2 GB / 100 GB</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">API calls</p>
                <p className="mt-1 font-medium">1.4M / month</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Payment method
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-14 items-center justify-center rounded border border-border bg-background">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Visa · 4242</p>
                <p className="text-xs text-muted-foreground">Expires 09 / 28</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg border border-border bg-background py-1.5 text-sm font-medium hover:bg-muted transition">
              Update card
            </button>
          </div>
        </div>

        {/* Plans */}
        <h2 className="mb-3 font-display text-xl font-700">Switch plan</h2>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl border p-5 ${
                p.current ? "border-accent bg-card" : "border-border bg-card"
              }`}
            >
              {p.current && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Current
                </span>
              )}
              <p className="text-sm font-medium text-muted-foreground">{p.name}</p>
              <p className="mt-1 font-display text-3xl font-700">
                RM {p.price}
                <span className="ml-1 text-base font-normal text-muted-foreground">
                  /mo
                </span>
              </p>
              <ul className="my-5 space-y-2 border-y border-border py-5 text-sm">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-lg py-2 text-sm font-semibold transition ${
                  p.current
                    ? "border border-border bg-background text-muted-foreground cursor-default"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
                disabled={p.current}
              >
                {p.current ? "Current plan" : p.price > 89 ? "Upgrade" : "Downgrade"}
              </button>
            </div>
          ))}
        </div>

        {/* Invoices */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border px-5 py-3">
            <h3 className="font-semibold">Invoices</h3>
          </div>
          <ul className="divide-y divide-border">
            {invoices.map((inv) => (
              <li key={inv.id} className="flex items-center gap-4 px-5 py-3">
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-sm">{inv.id}</p>
                  <p className="text-xs text-muted-foreground">{inv.date}</p>
                </div>
                <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {inv.status}
                </span>
                <span className="font-medium">RM {inv.amount}</span>
                <button
                  aria-label="Download invoice"
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
                <button
                  aria-label="Open invoice"
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
