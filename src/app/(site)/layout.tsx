import type { ReactNode } from "react";
import { Navbar } from "@/components/navigation/Navbar.jsx";
import { Footer } from "@/components/navigation/Footer.jsx";
import { companyConfig, navItems, megaGroups, footerLinks } from "@/lib/siteData";

const headerCta = { label: "Book a Call", href: "/book-a-call" };

export default function SiteLayout({ children }: { children: ReactNode }) {
  const contact = {
    email: companyConfig.email,
    phone: companyConfig.phone,
    linkedin: companyConfig.linkedin,
    linkedinUrl: companyConfig.linkedinUrl,
  };

  return (
    <>
      <Navbar
        items={navItems}
        megaGroups={megaGroups}
        logoSrc="/assets/logo/vectorvalue-mark.png"
        cta={headerCta}
      />
      <main className="flex-1">{children}</main>
      <Footer
        logoSrc="/assets/logo/vectorvalue-mark.png"
        columns={footerLinks}
        contact={contact}
        legal={[{ label: "Privacy Notice", href: "/contact" }, { label: "Terms", href: "/contact" }]}
      />
    </>
  );
}
