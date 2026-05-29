import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-6 px-6 py-3.5 lg:px-8">
          <Link
            href="/#projects"
            className="col-span-6 lg:col-span-4 group inline-flex items-center gap-2.5"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
              Back to folio
            </span>
          </Link>

          <div className="hidden lg:flex col-span-4 justify-center">
            <span className="section-mark">Appendix — Live demos</span>
          </div>

          <div className="col-span-6 lg:col-span-4 flex items-center justify-end gap-3">
            <Link
              href="/demos"
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute hover:text-foreground transition-colors"
            >
              Index ↗
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
