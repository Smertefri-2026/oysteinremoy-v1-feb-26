// src/app/om/seksjon/Seksjon3Erfaring.tsx
import OmSplit from "./FeatureSplit";
import { Briefcase } from "lucide-react";

export default function Seksjon3Erfaring() {
  return (
    <OmSplit
      badge="Erfaring"
      title="Markedsføring og ledelse – i praksis, ikke teori"
      description="Jeg har jobbet i mange år med markedsføring og ledelse, og har holdt kurs og foredrag med fokus på det som faktisk skaper effekt: budskap, struktur og oppfølging."
      bullets={[
        "Kurs/foredrag som gir konkrete grep og retning",
        "Salg og markedsføring som henger sammen med leveranse",
        "Tydelig ledelse: trygghet + forventninger + gjennomføring",
      ]}
      Icon={Briefcase}
      imageSrc="/om/erfaring.jpg"
      imageAlt="Markedsføring og ledelse"
      flip
    />
  );
}