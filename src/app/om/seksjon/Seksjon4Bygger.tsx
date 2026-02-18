// src/app/om/seksjon/Seksjon4Bygger.tsx
import OmSplit from "./FeatureSplit";
import { Hammer } from "lucide-react";

export default function Seksjon4Bygger() {
  return (
    <OmSplit
      badge="Bygger"
      title="Jeg liker å bygge løsninger som sparer tid og gir resultater"
      description="De siste årene har jeg jobbet mer praktisk og produktorientert: bygge portaler, systemer og nettsider som gjør jobben enklere – og som gir konvertering."
      bullets={[
        "Tenk: mindre friksjon, mer flyt",
        "Portaler: onboarding, oppfølging, booking, betaling",
        "Måling og forbedring over tid (ikke “lanser og håp”)",
      ]}
      Icon={Hammer}
      imageSrc="/om/bygger.jpg"
      imageAlt="Bygge digitale løsninger"
    />
  );
}