"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CompanyHeader } from "@/components/layout/company-header";
import { CompanyFooter } from "@/components/layout/company-footer";
import { BackToTop } from "@/components/ui/back-to-top";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";

  // Demos: no portfolio/company chrome — demos have their own.
  if (pathname.startsWith("/demos")) {
    return <main id="main">{children}</main>;
  }

  // Personal portfolio (unlisted, for interviews) gets the personal chrome.
  if (pathname.startsWith("/portfolio")) {
    return (
      <>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </>
    );
  }

  // Everything else: Sundial Studio company chrome.
  return (
    <>
      <CompanyHeader />
      <main id="main">{children}</main>
      <CompanyFooter />
      <BackToTop />
    </>
  );
}
