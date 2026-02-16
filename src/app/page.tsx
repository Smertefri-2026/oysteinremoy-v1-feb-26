import type { Metadata } from "next";

import Seksjon1Hero from "@/app/seksjon/Seksjon1Hero";
import Seksjon2Om from "@/app/seksjon/Seksjon2Om";
import Seksjon3Markedsforing from "@/app/seksjon/Seksjon3Markedsforing";
import Seksjon4Foredrag from "@/app/seksjon/Seksjon4Foredrag";
import Seksjon5Kurs from "@/app/seksjon/Seksjon5Kurs";
import Seksjon6Radgivning from "@/app/seksjon/Seksjon6Radgivning";
import Seksjon7Kontakt from "@/app/seksjon/Seksjon7Kontakt";

export const metadata: Metadata = {
  title: "Øystein Remøy – Foredrag, kurs og markedsføring",
  description: "Foredrag, kurs og markedsføring: ledelse, gjennomføring og vekst.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <Seksjon1Hero />
      <Seksjon2Om />
      <Seksjon3Markedsforing />
      <Seksjon4Foredrag />
      <Seksjon5Kurs />
      <Seksjon6Radgivning />
      <Seksjon7Kontakt />
    </div>
  );
}