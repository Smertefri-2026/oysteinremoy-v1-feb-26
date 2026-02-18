import FeatureSplit from "../seksjon/FeatureSplit";
import { ClipboardList } from "lucide-react";

export default function Seksjon6Endring() {
  return (
    <FeatureSplit
      badge="Foredrag 5"
      title="Endring er en prosess"
      description="Endring må ledes — i rutiner, kultur, forventninger og gjennomføring. Du får en enkel metode som gjør at endring faktisk skjer, uten at det dør i ‘gode intensjoner’."
      bullets={[
        "Tydelig retning + små steg som kan måles",
        "Rytme og ansvar: hvem gjør hva, når, og hvorfor",
        "Hvordan håndtere motstand uten konflikt",
      ]}
      Icon={ClipboardList}
      imageSrc="/foredrag/endring.jpg"
      imageAlt="Endringsledelse og gjennomføring"
    />
  );
}