import Card from "@/components/ui/Card";
import { Target } from "lucide-react";

export default function Seksjon3Konvertering() {
  return (
    <section className="space-y-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Steg 2
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Tekst */}
        <div className="space-y-3 lg:order-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <Target className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">Konvertering</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Landingssider som konverterer
          </h2>

          <p className="text-muted max-w-prose">
            En god side er ikke pen – den er tydelig. Vi bygger en side som gjør det lett å forstå,
            lett å stole på, og lett å ta neste steg.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Struktur: problem → løsning → bevis → CTA",
              "Trust: case, referanser, tall og garanti",
              "Fart og mobil: raskt, enkelt, klikkbart",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#005F56]" />
                <span className="text-muted">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bilde */}
        <Card className="p-3 md:p-4 bg-(--surface-2) border border-[rgba(2,6,23,0.08)] shadow-sm lg:order-1">
          <img
            src="/markedsforing/konvertering.jpg"
            alt="Konvertering og landingssider"
            className="w-full h-auto rounded-xl"
          />
        </Card>
      </div>
    </section>
  );
}