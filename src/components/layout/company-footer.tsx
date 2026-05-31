import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    heading: "Studio",
    items: [
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/#work" },
      { label: "Process", href: "/#process" },
      { label: "About", href: "/#about" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "hello@sundialstudio.co", href: "mailto:hello@sundialstudio.co" },
      { label: "Start a project", href: "/#contact" },
    ],
  },
];

export function CompanyFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <Link
              href="/"
              className="font-display text-3xl tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 60' }}
            >
              Sundial<span className="italic text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
              A web studio in Kuala Lumpur, Malaysia. We design and build
              custom web apps, marketing sites, and internal tools for
              founders and small teams.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 font-display text-lg draw-line"
              style={{ fontVariationSettings: '"opsz" 24' }}
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading} className="col-span-6 lg:col-span-3">
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {group.heading}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className="text-sm text-foreground hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:text-accent transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {year} Sundial Studio · All rights reserved</p>
          <p>Kuala Lumpur, Malaysia · GMT+8</p>
        </div>
      </div>
    </footer>
  );
}
