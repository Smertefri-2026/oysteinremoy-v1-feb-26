// src/app/om/seksjon/Seksjon5Mennesker.tsx
import OmSplit from "./FeatureSplit";
import { Compass } from "lucide-react";

export default function Seksjon5Mennesker() {
  return (
    <OmSplit
      badge="Mennesker"
      title="Reiseleder i Europa – kommunikasjon i virkeligheten"
      description="Jeg har vært reiseleder mest i Italia, Spania og Portugal. Det har gjort meg bedre på mennesker, forventninger og kommunikasjon – særlig når ting endrer seg underveis."
      bullets={[
        "Trygghet, struktur og god energi i grupper",
        "Rask problemløsning når noe skjer",
        "Tydelig kommunikasjon uten stress",
      ]}
      Icon={Compass}
      imageSrc="/om/reise.jpg"
      imageAlt="Reiseleder i Europa"
      flip
    />
  );
}