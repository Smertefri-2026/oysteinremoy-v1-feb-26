import FeatureSplit from "../seksjon/FeatureSplit";
import { LayoutGrid } from "lucide-react";

export default function Seksjon7Portaler() {
  return (
    <FeatureSplit
      badge="Steg 6"
      title="Bygg din egen plattform – ikke bare en landingsside"
      description="Hvis du selger tjenester over tid, kan en portal/app gi deg et enormt fortrinn: onboarding, oppfølging, abonnement og gjenkjøp i samme system."
      bullets={[
        "Portaler: kundeområde, booking, betaling, innhold",
        "Abonnement og oppfølging – skalerbart og ryddig",
        "Du eier flyten og dataene – ikke en plattform",
      ]}
      Icon={LayoutGrid}
      imageSrc="/markedsforing/portal.jpg"
      imageAlt="Apper og portaler"
      flip
    />
  );
}