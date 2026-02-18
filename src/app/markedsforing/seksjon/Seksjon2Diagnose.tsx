import FeatureSplit from "../seksjon/FeatureSplit";
import { ClipboardList } from "lucide-react";

export default function Seksjon2Diagnose() {
  return (
    <FeatureSplit
      badge="Steg 1"
      title="Først finner vi hva som stopper salget"
      description="De fleste trenger ikke mer trafikk – de trenger mindre friksjon. Vi starter med en kort diagnose: budskap, struktur, målgruppe, og hva som skjer etter at noen klikker."
      bullets={[
        "Hva er det tydelige løftet ditt – på 5 sekunder?",
        "Hvor faller folk av (form, pris, tekst, trust)?",
        "Hvilke 1–2 tiltak gir mest effekt først?",
      ]}
      Icon={ClipboardList}
      imageSrc="/markedsforing/diagnose.jpg"
      imageAlt="Markedsføring diagnose"
    />
  );
}