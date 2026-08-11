import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VectorValue",
  description: "Engineering estimation, design and technical expertise for international project teams.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans")}>
      <body className={cn("min-h-full", "flex", "flex-col", "bg-background", "text-foreground")}>
        {children}
      </body>
    </html>
  );
}
