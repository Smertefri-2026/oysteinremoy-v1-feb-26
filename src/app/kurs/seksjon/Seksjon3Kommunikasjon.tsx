// src/app/kurs/seksjon/Seksjon3Kommunikasjon.tsx
import FeatureSplit from "./FeatureSplit";
import { MessageSquare } from "lucide-react";

export default function Seksjon3Kommunikasjon() {
  return (
    <FeatureSplit
      badge="Kurs 2"
      title="Kommunikasjon i team"
      description="Mind­re misforståelser, mindre friksjon, mer samarbeid. En praktisk workshop med språk, verktøy og avtaler."
      bullets={[
        "Slik tar dere vanskelige samtaler (uten drama)",
        "Hvordan gi tilbakemelding som blir tatt imot",
        "Teamavtaler: “slik gjør vi det her hos oss”",
      ]}
      Icon={MessageSquare}
      imageSrc="/kurs/kommunikasjon.jpg"
      imageAlt="Kommunikasjon i team"
      flip
    />
  );
}