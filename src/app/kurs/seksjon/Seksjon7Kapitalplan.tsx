// src/app/kurs/seksjon/Seksjon7Kapitalplan.tsx
import FeatureSplit from "./FeatureSplit";
import { Handshake } from "lucide-react";

export default function Seksjon7Kapitalplan() {
  return (
    <FeatureSplit
      badge="Kurs 6"
      title="Kapitalplan på 30 dager"
      description="Du trenger ikke “perfekt pitch” først. Du trenger en plan: traction, tall, og en prosess som gir ja/nei."
      bullets={[
        "Hva investorer faktisk ser etter (og hva de ignorerer)",
        "Hvordan bygge traction mens du henter kapital",
        "En enkel kapital-pipeline med oppfølging",
      ]}
      Icon={Handshake}
      imageSrc="/kurs/kapitalplan.jpg"
      imageAlt="Kapitalplan"
      flip
    />
  );
}