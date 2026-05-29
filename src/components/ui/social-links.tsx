import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { SocialLink } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <ul className={`divide-y divide-border border-y border-border ${className}`}>
      {links.map((link, i) => {
        const Icon = iconMap[link.icon];
        return (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
              aria-label={link.name}
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-[11px] text-ink-fade w-6">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span
                  className="font-display text-2xl lg:text-3xl"
                  style={{ fontVariationSettings: '"opsz" 60' }}
                >
                  <span className="draw-line">{link.name}</span>
                </span>
              </span>
              <span className="flex items-center gap-3 text-ink-mute">
                {Icon && <Icon className="h-4 w-4" />}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
