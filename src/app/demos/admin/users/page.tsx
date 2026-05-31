"use client";

import { useState, useMemo } from "react";
import { Search, MoreHorizontal, Plus, Filter } from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "invited" | "suspended";
  lastSeen: string;
  spend: number;
};

const users: User[] = [
  { id: "u1", name: "Aisyah Rahman", email: "aisyah@routemark.io", role: "Admin", status: "active", lastSeen: "2 min ago", spend: 4820 },
  { id: "u2", name: "Daniel Chong", email: "dchong@petalbox.my", role: "Editor", status: "active", lastSeen: "1 hr ago", spend: 1240 },
  { id: "u3", name: "Priya Sharma", email: "priya@greylane.co", role: "Editor", status: "active", lastSeen: "Today", spend: 3540 },
  { id: "u4", name: "Marcus Lim", email: "marcus@studio.dev", role: "Admin", status: "active", lastSeen: "Yesterday", spend: 6120 },
  { id: "u5", name: "Sara Wong", email: "sara.w@cohort.io", role: "Viewer", status: "invited", lastSeen: "—", spend: 0 },
  { id: "u6", name: "Hafiz Idris", email: "hafiz@parkstreet.app", role: "Editor", status: "suspended", lastSeen: "3 days ago", spend: 280 },
  { id: "u7", name: "Mei Ling Tan", email: "meiling@tan.co", role: "Viewer", status: "active", lastSeen: "5 min ago", spend: 920 },
  { id: "u8", name: "Joseph Otieno", email: "joe@northbeam.io", role: "Editor", status: "active", lastSeen: "30 min ago", spend: 2110 },
  { id: "u9", name: "Lina Park", email: "lina@parklab.io", role: "Admin", status: "active", lastSeen: "Today", spend: 5430 },
  { id: "u10", name: "Tomás Vega", email: "tomas@vega.app", role: "Viewer", status: "invited", lastSeen: "—", spend: 0 },
];

export default function UsersPage() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | User["role"]>("all");

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const q = query.toLowerCase();
      const match = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      const role = roleFilter === "all" || u.role === roleFilter;
      return match && role;
    });
  }, [query, roleFilter]);

  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
              Users
            </h1>
            <p className="mt-1 text-muted-foreground">
              {filtered.length} of {users.length} users · manage roles and access.
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
            <Plus className="h-3.5 w-3.5" /> Invite user
          </button>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or email"
              className="w-64 rounded-lg border border-border bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value as typeof roleFilter)}
            className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-accent"
          >
            <option value="all">All roles</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted">
            <Filter className="h-3.5 w-3.5" />
            More filters
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">User</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Last seen</th>
                <th className="px-5 py-3 text-right">Spend</th>
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
                        <p className="font-medium">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
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

function StatusBadge({ status }: { status: User["status"] }) {
  const map = {
    active: { label: "Active", cls: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
    invited: { label: "Invited", cls: "bg-sky-500/10 text-sky-600 dark:text-sky-400" },
    suspended: { label: "Suspended", cls: "bg-rose-500/10 text-rose-600 dark:text-rose-400" },
  };
  const { label, cls } = map[status];
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${cls}`}>
      {label}
    </span>
  );
}
