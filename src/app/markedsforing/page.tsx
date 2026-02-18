// /src/app/markedsforing/page.tsx
import type { Metadata } from "next";
import Page from "@/components/layout/Page";

import Seksjon1Hero from "./seksjon/Seksjon1Hero";
import Seksjon2Diagnose from "./seksjon/Seksjon2Diagnose";
import Seksjon3Konvertering from "./seksjon/Seksjon3Konvertering";
import Seksjon4SEO from "./seksjon/Seksjon4SEO";
import Seksjon5Automatisering from "./seksjon/Seksjon5Automatisering";
import Seksjon6Nettbutikk from "./seksjon/Seksjon6Nettbutikk";
import Seksjon7Portaler from "./seksjon/Seksjon7Portaler";
import Seksjon8Kontakt from "./seksjon/Seksjon8Kontakt";

export const metadata: Metadata = {
  title: "Markedsføring – Øystein Remøy",
  description: "Nettsider, SEO og automatisering som gir flere henvendelser og salg.",
};

export default function MarkedsforingPage() {
  return (
    <Page
         >
      <div className="grid gap-14">
        <Seksjon1Hero />
        <Seksjon2Diagnose />
        <Seksjon3Konvertering />
        <Seksjon4SEO />
        <Seksjon5Automatisering />
        <Seksjon6Nettbutikk />
        <Seksjon7Portaler />
        <Seksjon8Kontakt />
      </div>
    </Page>
  );
}