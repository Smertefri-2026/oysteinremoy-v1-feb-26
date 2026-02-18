// src/app/om/seksjon/Seksjon6Stil.tsx
import OmSplit from "./FeatureSplit";
import { Sparkles } from "lucide-react";

export default function Seksjon6Stil() {
  return (
    <OmSplit
      badge="Stil"
      title="Arbeidsstil: tydelig, ryddig og handlingsorientert"
      description="Jeg trives best når vi finner kjernen, prioriterer riktig og lager en enkel plan som faktisk blir gjennomført."
      bullets={[
        "Tydelig budskap og prioriteringer",
        "Små leveranser som gir fremdrift",
        "Lite støy – mer kvalitet",
      ]}
      Icon={Sparkles}
      imageSrc="/om/stil.jpg"
      imageAlt="Arbeidsstil"
    />
  );
}