import FeatureSplit from "../seksjon/FeatureSplit";
import { Target } from "lucide-react";

export default function Seksjon3Konvertering() {
  return (
    <FeatureSplit
      badge="Steg 2"
      title="Landingssider som konverterer"
      description="En god side er ikke pen – den er tydelig. Vi bygger en side som gjør det lett å forstå, lett å stole på, og lett å ta neste steg."
      bullets={[
        "Struktur: problem → løsning → bevis → CTA",
        "Trust: case, referanser, tall og garanti",
        "Fart og mobil: raskt, enkelt, klikkbart",
      ]}
      Icon={Target}
      imageSrc="/markedsforing/konvertering.jpg"
      imageAlt="Konvertering og landingssider"
      flip
    />
  );
}