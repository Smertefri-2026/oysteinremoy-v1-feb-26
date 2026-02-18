import FeatureSplit from "../seksjon/FeatureSplit";
import { Sparkles } from "lucide-react";

export default function Seksjon4SEO() {
  return (
    <FeatureSplit
      badge="Steg 3"
      title="SEO som faktisk gir leads"
      description="SEO handler ikke om “mye tekst” – men om å svare på det kundene søker etter når de er klare til å kjøpe. Vi bygger servicesider og innhold som treffer kjøpsintensjon."
      bullets={[
        "Servicesider som rangerer: struktur + intensjon",
        "Lokal SEO: bli valgt i ditt område",
        "Intern lenking og ryddig informasjonsarkitektur",
      ]}
      Icon={Sparkles}
      imageSrc="/markedsforing/seo.jpg"
      imageAlt="SEO som gir leads"
    />
  );
}