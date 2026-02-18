import FeatureSplit from "../seksjon/FeatureSplit";
import { Sparkles } from "lucide-react";

export default function Seksjon3Spekteret() {
  return (
    <FeatureSplit
      badge="Foredrag 2"
      title="Spekteret (med humor og varme)"
      description="En ufarlig og nyttig prat om forskjeller: hvorfor vi trigges ulikt, og hvordan vi kan kommunisere bedre – uten å diagnostisere."
      bullets={[
        "Mer forståelse = færre misforståelser",
        "Konkrete språkgrep som virker",
        "Bedre samspill på jobb og hjemme",
      ]}
      Icon={Sparkles}
      imageSrc="/foredrag/spekteret.jpg"
      imageAlt="Foredrag om spekter og samspill"
            flip

    />
  );
}