import Card from "@/components/ui/Card";
import { Search, Map, Wrench, CalendarClock } from "lucide-react";

export default function Seksjon6Radgivning() {
  const steps = [
    { n: "1", t: "Klarhet", d: "Hva er målet, hvem er kunden, og hvilken posisjon skal du ta?", icon: Search },
    { n: "2", t: "Plan", d: "En enkel plan som kan gjennomføres, med tydelige prioriteringer.", icon: Map },
    { n: "3", t: "Produksjon", d: "Vi lager/rydder opp i sider, budskap og uttrykk – proft og raskt.", icon: Wrench },
    { n: "4", t: "Rytme", d: "En rytme for publisering/oppfølging som skaper effekt over tid.", icon: CalendarClock },
  ];

  return (
    <section className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-[#005F56]">Slik jobber jeg</div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Mindre prat. Mer fremdrift.
        </h2>
        <p className="text-muted mt-2 max-w-2xl">
          Jeg motiveres av å gjøre andre bedre – og jeg liker å gjøre ting enkelt nok til at det faktisk blir gjort.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.n} className="p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-(--surface-2) border border-[rgba(2,6,23,0.08)]">
                  <Icon className="h-5 w-5 text-[#003366]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#003366]">Steg {s.n}</div>
                  <div className="mt-0.5 font-bold">{s.t}</div>
                </div>
              </div>
              <div className="text-muted mt-3">{s.d}</div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-(--highlight)">
        <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="font-bold">Resultat = tydelig posisjon</div>
            <div className="text-muted mt-1">
              Ikke “mer innhold”, men mer presisjon: budskap, sider og plan som henger sammen.
            </div>
          </div>
          <a className="text-sm font-semibold text-[#003366] hover:underline" href="/kontakt">
            Klar for neste steg? → Kontakt meg
          </a>
        </div>
      </Card>
    </section>
  );
}