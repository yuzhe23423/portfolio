import { personalInfo } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span
              className="font-display text-3xl tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 60' }}
            >
              Ong Yu Zhe<span className="italic text-accent">.</span>
            </span>
            <p className="mt-3 text-base text-ink-mute max-w-sm leading-relaxed">
              {personalInfo.title} based in {personalInfo.location}. Building
              thoughtful web experiences.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-display text-lg draw-line"
              style={{ fontVariationSettings: '"opsz" 24' }}
            >
              {personalInfo.email}
            </a>
            <p className="mt-3 text-sm text-ink-mute">
              © {year} {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
