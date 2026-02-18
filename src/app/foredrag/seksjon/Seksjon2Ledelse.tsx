import Card from "@/components/ui/Card";
import { Users } from "lucide-react";

export default function Seksjon2Ledelse() {
  return (
    <section className="space-y-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Foredrag 1
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Bilde (øverst på mobil) */}
        <Card className="p-3 md:p-4 bg-(--surface-2) border border-[rgba(2,6,23,0.08)] shadow-sm">
          <img
            src="/foredrag/ledelse.jpg"
            alt="Foredrag om ledelse"
            className="w-full h-auto rounded-xl"
          />
        </Card>

        {/* Tekst */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <Users className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">Ledelse</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Det fins ikke dårlige ansatte – bare dårlige ledere
          </h2>

          <p className="text-muted max-w-prose">
            Et foredrag som flytter fokus fra irettesettelse til utvikling: trygghet, tydelighet og
            ansvar – som gir mer energi, mindre friksjon og bedre resultater.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Hvordan bygge psykologisk trygghet i team",
              "Tydelige forventninger uten å bli hard",
              "Slik får du gjennomføring – uten mas",
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