import Card from "@/components/ui/Card";
import { TrendingUp } from "lucide-react";

export default function Seksjon4SalgOgCRM() {
  return (
    <section className="space-y-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Kurs 3
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Bilde */}
        <Card className="p-3 md:p-4 bg-(--surface-2) border border-[rgba(2,6,23,0.08)] shadow-sm">
          <img
            src="/kurs/salg-crm.jpg"
            alt="Salg og CRM"
            className="w-full h-auto rounded-xl"
          />
        </Card>

        {/* Tekst */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <TrendingUp className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">Salg + CRM</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Salg + CRM som gir mersalg
          </h2>

          <p className="text-muted max-w-prose">
            Færre leads som forsvinner. Mer oppfølging som føles profesjonell. En enkel pipeline som
            hvem som helst kan bruke.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Hva du sier i første kontakt (og hva du aldri må si)",
              "Pipeline: lead → møte → tilbud → ja/nei",
              "Oppfølging som øker closing uten å være “pushy”",
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