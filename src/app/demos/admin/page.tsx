"use client";

import { useState, useMemo } from "react";
import {
  Users,
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  LayoutDashboard,
  CreditCard,
  Settings,
  Bell,
  CircleUser,
  Activity,
} from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "invited" | "suspended";
  lastSeen: string;
  spend: number;
};

const seedUsers: User[] = [
  { id: "u1", name: "Aisyah Rahman", email: "aisyah@routemark.io", role: "Admin", status: "active", lastSeen: "2 min ago", spend: 4820 },
  { id: "u2", name: "Daniel Chong", email: "dchong@petalbox.my", role: "Editor", status: "active", lastSeen: "1 hr ago", spend: 1240 },
  { id: "u3", name: "Priya Sharma", email: "priya@greylane.co", role: "Editor", status: "active", lastSeen: "Today", spend: 3540 },
  { id: "u4", name: "Marcus Lim", email: "marcus@studio.dev", role: "Admin", status: "active", lastSeen: "Yesterday", spend: 6120 },
  { id: "u5", name: "Sara Wong", email: "sara.w@cohort.io", role: "Viewer", status: "invited", lastSeen: "—", spend: 0 },
  { id: "u6", name: "Hafiz Idris", email: "hafiz@parkstreet.app", role: "Editor", status: "suspended", lastSeen: "3 days ago", spend: 280 },
  { id: "u7", name: "Mei Ling Tan", email: "meiling@tan.co", role: "Viewer", status: "active", lastSeen: "5 min ago", spend: 920 },
  { id: "u8", name: "Joseph Otieno", email: "joe@northbeam.io", role: "Editor", status: "active", lastSeen: "30 min ago", spend: 2110 },
];

const activity = [
  { who: "Aisyah", what: "upgraded to Pro plan", when: "2m" },
  { who: "Marcus", what: "exported quarterly report", when: "18m" },
  { who: "Daniel", what: "invited 3 new team members", when: "1h" },
  { who: "Sara", what: "accepted workspace invite", when: "2h" },
  { who: "Priya", what: "deleted 12 archived projects", when: "4h" },
  { who: "Joseph", what: "rotated API credentials", when: "6h" },
];

const chartData = [12, 18, 14, 22, 28, 24, 32, 38, 30, 42, 48, 55];
const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function AdminDemo() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | User["role"]>("all");

  const filtered = useMemo(() => {
    return seedUsers.filter((u) => {
      const q = query.toLowerCase();
      const match = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      const role = roleFilter === "all" || u.role === roleFilter;
      return match && role;
    });
  }, [query, roleFilter]);

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[220px_1fr]">
        <Sidebar />

        <div className="min-w-0">
          <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="mb-1 text-sm font-medium tracking-wider uppercase text-accent">
                Demo · Admin Panel
              </p>
              <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
                Dashboard overview
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Notifications"
                className="rounded-lg border border-border bg-card p-2 text-muted-foreground hover:bg-muted"
              >
                <Bell className="h-4 w-4" />
              </button>
              <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-amber-500" />
                <div className="text-sm">
                  <div className="font-medium leading-tight">Ong Yu Zhe</div>
                  <div className="text-[11px] text-muted-foreground leading-tight">Owner</div>
                </div>
              </div>
            </div>
          </header>

          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KPI icon={Users} label="Total users" value="2,847" delta="+12.4%" trend="up" />
            <KPI icon={DollarSign} label="Revenue" value="RM 48,210" delta="+8.1%" trend="up" />
            <KPI icon={ShoppingBag} label="Orders" value="1,294" delta="-2.3%" trend="down" />
            <KPI icon={TrendingUp} label="Growth" value="18.4%" delta="+3.2%" trend="up" />
          </div>

          <div className="mb-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Revenue · last 12 months</h3>
                  <p className="text-xs text-muted-foreground">RM, in thousands</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <ArrowUpRight className="h-3 w-3" /> +24% YoY
                </span>
              </div>
              <Chart data={chartData} labels={monthLabels} />
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">Activity</h3>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </div>
              <ul className="space-y-3">
                {activity.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div className="flex-1 leading-snug">
                      <span className="font-medium">{a.who}</span>{" "}
                      <span className="text-muted-foreground">{a.what}</span>
                      <div className="text-[11px] text-muted-foreground">{a.when} ago</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
              <div>
                <h3 className="font-semibold">Users</h3>
                <p className="text-xs text-muted-foreground">
                  {filtered.length} of {seedUsers.length} shown
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search users..."
                    className="w-56 rounded-lg border border-border bg-background pl-9 pr-3 py-1.5 text-sm outline-none focus:border-accent"
                  />
                </div>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value as typeof roleFilter)}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-accent"
                >
                  <option value="all">All roles</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <th className="px-5 py-3 font-medium">User</th>
                    <th className="px-5 py-3 font-medium">Role</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium">Last seen</th>
                    <th className="px-5 py-3 text-right font-medium">Spend</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((u) => (
                    <tr
                      key={u.id}
                      className="border-b border-border last:border-0 hover:bg-muted/40"
                    >
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar name={u.name} />
                          <div>
                            <div className="font-medium">{u.name}</div>
                            <div className="text-xs text-muted-foreground">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">{u.role}</td>
                      <td className="px-5 py-3">
                        <StatusBadge status={u.status} />
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">{u.lastSeen}</td>
                      <td className="px-5 py-3 text-right font-medium">
                        RM {u.spend.toLocaleString()}
                      </td>
                      <td className="px-5 py-3 text-right">
                        <button
                          className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                          aria-label="Row actions"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="px-5 py-12 text-center text-sm text-muted-foreground">
                  No users match your filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  const items = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Users, label: "Users" },
    { icon: ShoppingBag, label: "Orders" },
    { icon: CreditCard, label: "Billing" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-20 rounded-xl border border-border bg-card p-4">
        <div className="mb-5 flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary-foreground font-display font-700">
            A
          </div>
          <div className="font-display text-base font-700">Atlas</div>
        </div>
        <nav className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  item.active
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="mt-5 border-t border-border pt-4">
          <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition">
            <CircleUser className="h-4 w-4" />
            Profile
          </button>
        </div>
      </div>
    </aside>
  );
}

function KPI({
  icon: Icon,
  label,
  value,
  delta,
  trend,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}) {
  const Arrow = trend === "up" ? ArrowUpRight : ArrowDownRight;
  const tone =
    trend === "up"
      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
      : "text-rose-600 dark:text-rose-400 bg-rose-500/10";
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <Icon className="h-4 w-4" />
        </div>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${tone}`}
        >
          <Arrow className="h-3 w-3" />
          {delta}
        </span>
      </div>
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-display text-2xl font-700">{value}</div>
    </div>
  );
}

function Chart({ data, labels }: { data: number[]; labels: string[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 600;
  const h = 180;
  const padX = 24;
  const padY = 20;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;
  const pts = data.map((v, i) => {
    const x = padX + (i * innerW) / (data.length - 1);
    const y = padY + innerH - ((v - min) / (max - min)) * innerH;
    return [x, y] as const;
  });
  const path = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
  const areaPath = `${path} L ${pts[pts.length - 1][0]} ${padY + innerH} L ${pts[0][0]} ${
    padY + innerH
  } Z`;

  return (
    <div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="h-44 w-full"
      >
        <defs>
          <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" className="text-accent" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-accent" />
          </linearGradient>
        </defs>
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line
            key={t}
            x1={padX}
            x2={w - padX}
            y1={padY + innerH * t}
            y2={padY + innerH * t}
            className="stroke-border"
            strokeDasharray="3 3"
            strokeWidth={1}
          />
        ))}
        <path d={areaPath} fill="url(#chart-grad)" />
        <path
          d={path}
          fill="none"
          strokeWidth={2}
          className="stroke-accent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r={2.5}
            className="fill-accent"
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between text-[11px] font-medium text-muted-foreground">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const hue = (name.charCodeAt(0) * 47) % 360;
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 60% 55%), hsl(${
          (hue + 40) % 360
        } 60% 45%))`,
      }}
    >
      {initials}
    </div>
  );
}

function StatusBadge({ status }: { status: User["status"] }) {
  const map = {
    active: {
      label: "Active",
      cls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    invited: {
      label: "Invited",
      cls: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    },
    suspended: {
      label: "Suspended",
      cls: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    },
  };
  const { label, cls } = map[status];
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${cls}`}>
      {label}
    </span>
  );
}
