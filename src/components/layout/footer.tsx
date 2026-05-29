import { personalInfo } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Big colophon line */}
        <div className="grid grid-cols-12 gap-x-6 items-end pb-10 border-b border-border">
          <div className="col-span-12 lg:col-span-9">
            <p className="section-mark mb-3">Colophon — set in Fraunces &amp; Geist</p>
            <p
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.025em] font-300"
            >
              Hand-set, hand-built, in{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                {personalInfo.location}
              </span>
              <span className="text-accent">.</span>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 mt-6 lg:mt-0 lg:text-right">
            <p className="section-mark">№ 01 · MMXXVI</p>
            <p className="font-mono text-sm mt-2">v 0.1.0</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 grid grid-cols-12 gap-x-6 items-center text-sm">
          <p className="col-span-6 section-mark">
            © {year} {personalInfo.name}
          </p>
          <p className="col-span-6 text-right section-mark">
            Made on Earth — bytes, ink, coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
