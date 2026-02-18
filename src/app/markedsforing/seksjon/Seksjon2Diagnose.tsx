import Card from "@/components/ui/Card";
import { ClipboardList } from "lucide-react";

export default function Seksjon2Diagnose() {
  return (
    <section className="space-y-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Steg 1
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Bilde */}
        <Card className="p-3 md:p-4 bg-(--surface-2) border border-[rgba(2,6,23,0.08)] shadow-sm">
          <img
            src="/markedsforing/diagnose.jpg"
            alt="Markedsføring diagnose"
            className="w-full h-auto rounded-xl"
          />
        </Card>

        {/* Tekst */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <ClipboardList className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">Diagnose</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Først finner vi hva som stopper salget
          </h2>

          <p className="text-muted max-w-prose">
            De fleste trenger ikke mer trafikk – de trenger mindre friksjon. Vi starter med en kort
            diagnose: budskap, struktur, målgruppe, og hva som skjer etter at noen klikker.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Hva er det tydelige løftet ditt – på 5 sekunder?",
              "Hvor faller folk av (form, pris, tekst, trust)?",
              "Hvilke 1–2 tiltak gir mest effekt først?",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#005F56]" />
                <span className="text-muted">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}