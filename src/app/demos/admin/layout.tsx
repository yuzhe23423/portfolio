"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  CreditCard,
  Settings,
  Search,
  Bell,
  CircleUser,
} from "lucide-react";

const navItems = [
  { href: "/demos/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/demos/admin/users", label: "Users", icon: Users },
  { href: "/demos/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/demos/admin/billing", label: "Billing", icon: CreditCard },
  { href: "/demos/admin/settings", label: "Settings", icon: Settings },
];

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-border bg-surface">
        <Link
          href="/demos/admin"
          className="flex items-center gap-2 px-5 py-4 border-b border-border"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background font-display font-700 text-sm">
            A
          </div>
          <span className="font-display text-lg font-700 tracking-tight">Atlas</span>
        </Link>

        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="m-3 mt-auto rounded-lg border border-border bg-card p-3 flex items-center gap-2.5">
          <CircleUser className="h-5 w-5 text-muted-foreground" />
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">Yu Zhe</p>
            <p className="text-xs text-muted-foreground truncate">Owner</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-md">
          <div className="flex items-center gap-3 px-6 py-3">
            <div className="ml-auto flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5">
                <Search className="h-3.5 w-3.5 text-muted-foreground" />
                <input
                  placeholder="Search..."
                  className="w-44 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button
                aria-label="Notifications"
                className="rounded-lg border border-border bg-card p-2 text-muted-foreground hover:bg-muted"
              >
                <Bell className="h-3.5 w-3.5" />
              </button>
              <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-2 py-1">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent to-vermilion-soft" />
                <span className="text-sm font-medium">Yu Zhe</span>
              </div>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
