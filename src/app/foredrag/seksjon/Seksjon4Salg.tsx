import FeatureSplit from "../seksjon/FeatureSplit";
import { TrendingUp } from "lucide-react";

export default function Seksjon4Salg() {
  return (
    <FeatureSplit
      badge="Foredrag 3"
      title="Salgsforedrag som faktisk gir mersalg"
      description="Praktisk salg uten buzzwords: hvordan du skaper trygghet, vinner kunden, og bygger et system for oppfølging som gjør at salget skjer oftere — med mindre stress."
      bullets={[
        "Slik får du kunden til å velge deg (uten å mase)",
        "Enkel oppfølgingsrytme (CRM light) som funker i hverdagen",
        "Skap gjentagende salg og merverdi — uten å bli “pushy”",
      ]}
      Icon={TrendingUp}
      imageSrc="/foredrag/salg.jpg"
      imageAlt="Salgskurs og mersalg"
    />
  );
}