"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Search, Bell, Plus } from "lucide-react";

const navItems = [
  { href: "/demos/events", label: "Browse" },
  { href: "/demos/events/rsvps", label: "My RSVPs" },
  { href: "/demos/events/hosting", label: "Hosting" },
];

export default function MeetlyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3 lg:px-8">
          <Link href="/demos/events" className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background">
              <Compass className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-700 tracking-tight">Meetly</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((item) => {
              const active = item.href === "/demos/events"
                ? pathname === item.href
                : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-1.5 font-medium transition ${
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <input
                placeholder="Search events"
                className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              aria-label="Notifications"
              className="rounded-lg border border-border bg-card p-2 text-muted-foreground hover:bg-muted"
            >
              <Bell className="h-3.5 w-3.5" />
            </button>
            <Link
              href="/demos/events/hosting"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Plus className="h-3.5 w-3.5" /> New
            </Link>
            <div
              className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-vermilion-soft"
              aria-hidden
            />
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
