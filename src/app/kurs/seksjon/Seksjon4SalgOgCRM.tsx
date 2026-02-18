// src/app/kurs/seksjon/Seksjon4SalgOgCRM.tsx
import FeatureSplit from "./FeatureSplit";
import { TrendingUp } from "lucide-react";

export default function Seksjon4SalgOgCRM() {
  return (
    <FeatureSplit
      badge="Kurs 3"
      title="Salg + CRM som gir mersalg"
      description="Færre leads som forsvinner. Mer oppfølging som føles profesjonell. En enkel pipeline som hvem som helst kan bruke."
      bullets={[
        "Hva du sier i første kontakt (og hva du aldri må si)",
        "Pipeline: lead → møte → tilbud → ja/nei",
        "Oppfølging som øker closing uten å være “pushy”",
      ]}
      Icon={TrendingUp}
      imageSrc="/kurs/salg-crm.jpg"
      imageAlt="Salg og CRM"
    />
  );
}