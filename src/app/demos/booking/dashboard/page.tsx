import Link from "next/link";
import {
  CalendarDays,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const upcoming = [
  { client: "Aisyah Rahman", service: "Consultation", time: "Today, 10:00", price: 80 },
  { client: "Daniel Chong", service: "Review call", time: "Tomorrow, 14:00", price: 140 },
  { client: "Priya Sharma", service: "Deep work session", time: "Wed, 09:00", price: 220 },
  { client: "Marcus Lim", service: "Strategy planning", time: "Thu, 13:00", price: 320 },
];

export default function DashboardPage() {
  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
            Good morning, Yu Zhe
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here&apos;s how the week is shaping up.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={CalendarDays} label="Today" value="3" sub="bookings" />
          <Stat icon={CheckCircle2} label="This week" value="14" sub="bookings" />
          <Stat icon={TrendingUp} label="Bookings rate" value="92%" sub="vs last week" />
          <Stat icon={DollarSign} label="Revenue" value="RM 2,840" sub="this week" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card overflow-hidden lg:col-span-2">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div>
                <h3 className="font-semibold">Upcoming</h3>
                <p className="text-xs text-muted-foreground">Your next four appointments</p>
              </div>
              <Link
                href="/demos/booking/bookings"
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                See all
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
            <ul className="divide-y divide-border">
              {upcoming.map((b, i) => (
                <li key={i} className="flex items-center gap-4 px-5 py-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent/30 to-vermilion-soft/30" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{b.client}</p>
                    <p className="text-xs text-muted-foreground">
                      {b.service} · {b.time}
                    </p>
                  </div>
                  <div className="text-sm font-medium">RM {b.price}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Booking link
              </p>
              <p className="mt-2 font-mono text-sm break-all">
                slottr.app/u/yuzhe
              </p>
              <button className="mt-3 w-full rounded-lg border border-border bg-background py-1.5 text-xs font-medium hover:bg-muted transition">
                Copy
              </button>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="text-sm font-semibold">Quick actions</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/demos/booking/services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    → Manage services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demos/booking/customers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    → View customers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demos/booking/settings"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    → Update availability
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      <p className="font-display text-2xl font-700">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}
