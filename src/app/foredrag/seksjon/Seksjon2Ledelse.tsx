import FeatureSplit from "../seksjon/FeatureSplit";
import { Users } from "lucide-react";

export default function Seksjon2Ledelse() {
  return (
    <FeatureSplit
      badge="Foredrag 1"
      title="Det fins ikke dårlige ansatte – bare dårlige ledere"
      description="Et foredrag som flytter fokus fra irettesettelse til utvikling: trygghet, tydelighet og ansvar – som gir mer energi, mindre friksjon og bedre resultater."
      bullets={[
        "Hvordan bygge psykologisk trygghet i team",
        "Tydelige forventninger uten å bli hard",
        "Slik får du gjennomføring – uten mas",
      ]}
      Icon={Users}
      imageSrc="/foredrag/ledelse.jpg"
      imageAlt="Foredrag om ledelse"
    />
  );
}