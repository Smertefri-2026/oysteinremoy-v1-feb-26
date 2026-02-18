import FeatureSplit from "../seksjon/FeatureSplit";
import { Target } from "lucide-react";

export default function Seksjon7Posisjon() {
  return (
    <FeatureSplit
      badge="Foredrag 6"
      title="Ta en posisjon i markedet"
      description="Bli valgt for noe. Du lærer hvordan du lager et budskap som henger sammen med prioriteringer og synlighet — så du tar plass i hodet på kunden med kvalitet, ikke støy."
      bullets={[
        "En posisjon = én tydelig grunn til å velge deg",
        "Budskap som er lett å huske (og lett å gjenta)",
        "Synlighet som bygger tillit over tid",
      ]}
      Icon={Target}
      imageSrc="/foredrag/posisjon.jpg"
      imageAlt="Posisjon og tydelig budskap"
            flip

    />
  );
}