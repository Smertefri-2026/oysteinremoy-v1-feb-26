import FeatureSplit from "../seksjon/FeatureSplit";
import { Rocket } from "lucide-react";

export default function Seksjon5Automatisering() {
  return (
    <FeatureSplit
      badge="Steg 4"
      title="Automatisering: fra lead til kunde"
      description="Når noen tar kontakt må det skje noe. Vi setter opp enkel flyt: bekreftelse, oppfølging og booking – så du ikke mister varme leads."
      bullets={[
        "Skjema → e-post → booking → oppfølging",
        "Enkle e-postsekvenser som gjør jobben",
        "Måling på hva som faktisk skaper salg",
      ]}
      Icon={Rocket}
      imageSrc="/markedsforing/automatisering.jpg"
      imageAlt="Automatisering og CRM"
      flip
    />
  );
}