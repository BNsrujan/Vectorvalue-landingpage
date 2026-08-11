import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "VectorValue",
  description: "Engineering estimation, design and technical expertise for international project teams.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans", manrope.variable, ibmPlexMono.variable)}>
      <body className={cn("min-h-full", "flex", "flex-col", "bg-background", "text-foreground")}>
        {children}
      </body>
    </html>
  );
}
