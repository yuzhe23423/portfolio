import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-[10rem] font-800 leading-none text-border">
        404
      </span>
      <p className="mt-4 text-xl text-muted-foreground">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex bg-foreground text-background px-7 py-4 text-base font-600 hover:bg-accent hover:text-primary-foreground transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
