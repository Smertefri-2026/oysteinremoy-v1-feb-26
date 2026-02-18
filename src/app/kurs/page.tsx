// src/app/kurs/page.tsx
import type { Metadata } from "next";
import Page from "@/components/layout/Page";

import KursHero from "./seksjon/KursHero";
import Seksjon1Workshop from "./seksjon/Seksjon1Workshop";
import Seksjon2Ledelse from "./seksjon/Seksjon2Ledelse";
import Seksjon3Kommunikasjon from "./seksjon/Seksjon3Kommunikasjon";
import Seksjon4SalgOgCRM from "./seksjon/Seksjon4SalgOgCRM";
import Seksjon5DigitalStrategi from "./seksjon/Seksjon5DigitalStrategi";
import Seksjon6Nettbutikk from "./seksjon/Seksjon6Nettbutikk";
import Seksjon7Kapitalplan from "./seksjon/Seksjon7Kapitalplan";
import Seksjon8Kontakt from "./seksjon/Seksjon8Kontakt";

export const metadata: Metadata = {
  title: "Kurs og workshops – Øystein Remøy",
  description: "Praktiske kurs og workshops i ledelse, kommunikasjon, salg/CRM, digital strategi og kapitalplan.",
};

export default function KursPage() {
  return (
    <Page
      >
      <div className="space-y-10">
        <KursHero />
        <Seksjon1Workshop />
        <Seksjon2Ledelse />
        <Seksjon3Kommunikasjon />
        <Seksjon4SalgOgCRM />
        <Seksjon5DigitalStrategi />
        <Seksjon6Nettbutikk />
        <Seksjon7Kapitalplan />
        <Seksjon8Kontakt />
      </div>
    </Page>
  );
}