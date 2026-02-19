import type { Metadata } from "next";

import Seksjon1Hero from "@/app/seksjon/Seksjon1Hero";
import Seksjon2Om from "@/app/seksjon/Seksjon2Om";
import Seksjon3Markedsforing from "@/app/seksjon/Seksjon3Markedsforing";
import Seksjon4Foredrag from "@/app/seksjon/Seksjon4Foredrag";
import Seksjon5Kurs from "@/app/seksjon/Seksjon5Kurs";
import Seksjon6Radgivning from "@/app/seksjon/Seksjon6Radgivning";
import Seksjon7Kontakt from "@/app/seksjon/Seksjon7Kontakt";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Øystein Remøy – Foredrag, kurs og markedsføring",
  description: "Foredrag, kurs og markedsføring: ledelse, gjennomføring og vekst.",
};

<Script
  id="person-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Øystein Remøy",
      url: "https://oysteinremoy.no/",
      image: "https://oysteinremoy.no/oystein-remoy-pt.png",
      jobTitle: ["Foredragsholder", "Rådgiver", "Markedsfører"],
      sameAs: [
        "https://pressevern.no/"
        // legg til LinkedIn senere hvis du vil
      ],
    }),
  }}
/>

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