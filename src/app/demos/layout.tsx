import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/demos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              All demos
            </Link>
            <span className="h-4 w-px bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
