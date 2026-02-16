// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";

import { Inter, Alex_Brush } from "next/font/google";

import PublicHeader from "@/components/shell/PublicHeader";
import PublicFooter from "@/components/shell/PublicFooter";
import Container from "@/components/ui/Container";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" className={`${inter.variable} ${alexBrush.variable}`}>
      <body className="min-h-screen bg-bg text-text font-sans">
        <PublicHeader
          brandHref="/"
          links={[
            { href: "/om", label: "Om" },
            { href: "/markedsforing", label: "Markedsføring" },
            { href: "/foredrag", label: "Foredrag" },
            { href: "/kurs", label: "Kurs" },
            { href: "/kontakt", label: "Kontakt" },
          ]}
          ctaLabel="Kontakt"
          ctaHref="/kontakt"
        />

        <main className="py-10 md:py-14">
          <Container>{children}</Container>
        </main>

        <PublicFooter name="Øystein Remøy" />
      </body>
    </html>
  );
}