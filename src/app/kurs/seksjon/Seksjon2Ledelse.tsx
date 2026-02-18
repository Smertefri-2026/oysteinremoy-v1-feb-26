// src/app/kurs/seksjon/Seksjon2Ledelse.tsx
import FeatureSplit from "./FeatureSplit";
import { Users } from "lucide-react";

export default function Seksjon2Ledelse() {
  return (
    <FeatureSplit
      badge="Kurs 1"
      title="Bedre ledelse i praksis"
      description="Tydelige forventninger, trygghet og gjennomføring – uten å bli hard. Passer for ledere, mellomledere og gründere."
      bullets={[
        "Forventningsavklaring: roller, ansvar, standard",
        "Psykologisk trygghet som gir fart (ikke “koseprat”)",
        "Møtestruktur og beslutninger som faktisk blir gjort",
      ]}
      Icon={Users}
      imageSrc="/kurs/ledelse.jpg"
      imageAlt="Kurs i ledelse"
    />
  );
}