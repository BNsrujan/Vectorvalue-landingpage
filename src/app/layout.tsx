import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar.jsx";
import { Footer } from "@/components/navigation/Footer.jsx";
import { cn } from "@/lib/utils";
import { companyConfig, navItems, megaGroups, footerLinks } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "VectorValue",
  description: "Engineering estimation, design and technical expertise for international project teams.",
};

const headerCta = { label: "Book a Call", href: "/book-a-call" };

export default function RootLayout({ children }: { children: ReactNode }) {
  const contact = {
    email: companyConfig.email,
    phone: companyConfig.phone,
    linkedin: companyConfig.linkedin,
    linkedinUrl: companyConfig.linkedinUrl,
  };

  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans")}>
      <body className={cn("min-h-full", "flex", "flex-col", "bg-background", "text-foreground")}>
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
      </body>
    </html>
  );
}
