"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  CheckCircle2,
  CreditCard,
  Users as UsersIcon,
  Settings as SettingsIcon,
  CalendarDays,
  Search,
  Bell,
} from "lucide-react";

const navItems = [
  { href: "/demos/booking/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/demos/booking", label: "Calendar", icon: Calendar, exact: true },
  { href: "/demos/booking/bookings", label: "Bookings", icon: CheckCircle2 },
  { href: "/demos/booking/services", label: "Services", icon: CreditCard },
  { href: "/demos/booking/customers", label: "Customers", icon: UsersIcon },
  { href: "/demos/booking/settings", label: "Settings", icon: SettingsIcon },
];

export default function SlottrLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-border bg-surface">
        <Link
          href="/demos/booking"
          className="flex items-center gap-2 px-5 py-4 border-b border-border"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background">
            <CalendarDays className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-700 tracking-tight">Slottr</span>
        </Link>

        <nav className="flex-1 p-3 space-y-0.5 text-sm">
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 font-medium transition ${
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
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-vermilion-soft" />
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">Yu Zhe</p>
            <p className="text-xs text-muted-foreground truncate">Owner</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Top app bar */}
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
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
