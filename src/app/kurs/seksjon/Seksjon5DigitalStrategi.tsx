// src/app/kurs/seksjon/Seksjon5DigitalStrategi.tsx
import FeatureSplit from "./FeatureSplit";
import { Target } from "lucide-react";

export default function Seksjon5DigitalStrategi() {
  return (
    <FeatureSplit
      badge="Kurs 4"
      title="Digital strategi: hva lønner seg – og i hvilken rekkefølge?"
      description="Nettside, nettbutikk eller portal? Vi lager en enkel beslutningsmodell og en plan som passer budsjett og kapasitet."
      bullets={[
        "Budskap + målgruppe + offer (før design)",
        "Struktur som skaper tillit og konvertering",
        "Måling: hva som faktisk gir leads/salg",
      ]}
      Icon={Target}
      imageSrc="/kurs/digital-strategi.jpg"
      imageAlt="Digital strategi"
      flip
    />
  );
}