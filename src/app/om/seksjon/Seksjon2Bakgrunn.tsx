// src/app/om/seksjon/Seksjon2Bakgrunn.tsx
import OmSplit from "./FeatureSplit";
import { Waves } from "lucide-react";

export default function Seksjon2Bakgrunn() {
  return (
    <OmSplit
      badge="Bakgrunn"
      title="Sunnmøringen – oppvokst med arbeidsmoral og ansvar"
      description="Jeg er født i Ørsta på Sunnmøre, i en stor fiskerfamilie der verdien av ansvar, drift og gjennomføring har vært tydelig i generasjoner."
      bullets={[
        "Familiebedrift og tradisjon med skikkelig arbeid",
        "Respekt for håndverk, folk og langsiktighet",
        "Liker tydelige avtaler og ryddige prosesser",
      ]}
      Icon={Waves}
      imageSrc="/om/sunnmore.jpg"
      imageAlt="Sunnmøre og røtter"
    />
  );
}