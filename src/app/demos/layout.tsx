import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}

      <Link
        href="/#projects"
        className="group fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-card/85 backdrop-blur-md px-3.5 py-2 shadow-sm hover:bg-accent hover:text-primary-foreground hover:border-accent transition-colors"
        aria-label="Back to portfolio"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
          Back to portfolio
        </span>
      </Link>
    </div>
  );
}
