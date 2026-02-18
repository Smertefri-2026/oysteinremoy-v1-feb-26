// src/app/kurs/seksjon/Seksjon1Workshop.tsx
import FeatureSplit from "./FeatureSplit";
import { ClipboardList } from "lucide-react";

export default function Seksjon1Workshop() {
  return (
    <FeatureSplit
      badge="Opplegg"
      title="Workshop-format: beslutninger, maler og neste steg"
      description="Vi jobber praktisk. Du får konkrete oppgaver og en enkel struktur som gjør at tiltak blir gjort – ikke bare diskutert."
      bullets={[
        "Felles problemforståelse (hva stopper vekst/gjennomføring)",
        "Prioritering: 3 tiltak som gir mest effekt først",
        "Plan + ansvar + tidsfrist (og hva som kan droppes)",
      ]}
      Icon={ClipboardList}
      imageSrc="/kurs/workshop.jpg"
      imageAlt="Workshop og planarbeid"
            flip

    />
  );
}