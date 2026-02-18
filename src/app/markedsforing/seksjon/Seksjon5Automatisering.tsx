import Card from "@/components/ui/Card";
import { Rocket } from "lucide-react";

export default function Seksjon5Automatisering() {
  return (
    <section className="space-y-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Steg 4
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Tekst */}
        <div className="space-y-3 lg:order-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <Rocket className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">Automatisering</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Automatisering: fra lead til kunde
          </h2>

          <p className="text-muted max-w-prose">
            Når noen tar kontakt må det skje noe. Vi setter opp enkel flyt: bekreftelse, oppfølging
            og booking – så du ikke mister varme leads.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Skjema → e-post → booking → oppfølging",
              "Enkle e-postsekvenser som gjør jobben",
              "Måling på hva som faktisk skaper salg",
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
            src="/markedsforing/automatisering.jpg"
            alt="Automatisering og CRM"
            className="w-full h-auto rounded-xl"
          />
        </Card>
      </div>
    </section>
  );
}