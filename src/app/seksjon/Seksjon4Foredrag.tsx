import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Seksjon4Foredrag() {
  const talks = [
    { t: "Ledelse som skaper handling", d: "Tydelighet, prioritering og beslutninger som faktisk blir gjort." },
    { t: "Gjennomføring uten stress", d: "Enkle systemer for fremdrift – uten å drukne i møter." },
    { t: "Markedsføring som posisjon", d: "Hvordan du vinner plass i hodet på kunden, ikke bare i feed’en." },
    { t: "Team og kultur", d: "Hvordan du bygger eierskap og driv – uten micromanagement." },
    { t: "Synlighet med kvalitet", d: "Proft uttrykk, tydelige budskap og en plan du kan følge." },
    { t: "Fra idé til leveranse", d: "Praktiske grep for å få ting ut i markedet – raskere." },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[#005F56]">Foredrag</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Tema som gir energi og retning
          </h2>
        </div>
        <Button asChild variant="secondary">
          <a href="/foredrag">Se foredrag</a>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {talks.map((x) => (
          <Card key={x.t} className="p-6">
            <div className="font-bold">{x.t}</div>
            <div className="text-muted mt-2">{x.d}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}