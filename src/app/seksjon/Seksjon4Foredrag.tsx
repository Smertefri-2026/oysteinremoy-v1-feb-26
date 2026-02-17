// /src/app/seksjon/Seksjon4Foredrag.tsx
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Sparkles,
  Target,
  Rocket,
  Users,
  BadgeCheck,
  ClipboardList,
  Handshake,
  TrendingUp,
} from "lucide-react";

export default function Seksjon4Foredrag() {
  const talks = [
    {
      t: "Det fins ikke dårlige ansatte – bare dårlige ledere",
      d: "Lederforedraget som flytter fokus fra irettesettelse til utvikling: se muligheter, bygg trygghet, få folk til å blomstre. Resultatet vises i arbeidsmiljø, lavere friksjon, lavere sykefravær og bedre bunnlinje.",
      icon: Users,
    },
    {
      t: "Spekteret (med humor og varme)",
      d: "En ufarlig og nyttig prat om forskjeller: hvem er vi på jobb og hjemme – og hvorfor trigges vi ulikt? Mer trygghet, bedre kommunikasjon og mindre misforståelser. Poenget er ikke diagnose – men forståelse.",
      icon: Sparkles,
    },
    {
      t: "Salgskurs som faktisk gir mersalg",
      d: "Praktisk salg: vinn kunden, skap gjentagende salg og bygg portefølje. Enkle rutiner for oppfølging og CRM – logg kun det som er nødvendig, og bruk det til å styre neste steg.",
      icon: TrendingUp,
    },
    {
      t: "Investor vs kunder",
      d: "Hva om kundene dine er de beste investorene? Slik bruker du kundene til markedsanalyse, validering og forretningsplan – og bygger samarbeid/finansiering med de du faktisk skal levere til.",
      icon: Handshake,
    },
    {
      t: "Endring er en prosess",
      d: "Endring må ledes – i ansatte, rutiner, kultur og kommersiell vekst. Du får en enkel metode: tydelig retning, små steg, målbar fremdrift og en rytme som gjør at det faktisk blir gjort.",
      icon: ClipboardList,
    },
    {
      t: "Ta en posisjon i markedet",
      d: "Bli valgt for noe. Budskap, prioriteringer og synlighet som henger sammen – så du tar plass i hodet på kunden med kvalitet, ikke støy.",
      icon: Target,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[#005F56]">Foredrag</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Tema som gir energi, trygghet og retning
          </h2>
          <p className="text-muted mt-2 max-w-2xl">
            Foredrag og kurs som er konkrete, inkluderende og handlekraftige – med mål om bedre
            arbeidsmiljø, tydeligere posisjon og mer gjennomføring.
          </p>
        </div>
        <Button asChild variant="secondary">
          <a href="/foredrag">Se foredrag</a>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {talks.map((x) => {
          const Icon = x.icon;
          return (
            <Card key={x.t} className="p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-(--surface-2) border border-[rgba(2,6,23,0.08)]">
                  <Icon className="h-5 w-5 text-[#003366]" />
                </div>
                <div>
                  <div className="font-bold">{x.t}</div>
                  <div className="text-muted mt-2">{x.d}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}