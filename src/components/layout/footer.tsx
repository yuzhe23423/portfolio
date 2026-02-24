import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-display text-2xl font-800 tracking-tight">
              YZ<span className="text-accent">.</span>
            </span>
            <p className="mt-2 text-muted-foreground max-w-xs">
              Building thoughtful digital experiences with modern web
              technologies.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <SocialLinks links={personalInfo.socialLinks} />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
