import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Seksjon5Kurs() {
  const kurs = [
    { t: "Workshop: Posisjon og budskap", d: "Få klarhet i hvem du er for, og hva du skal være kjent for." },
    { t: "Workshop: Gjennomføring", d: "Fra plan til leveranse – med få, smarte rutiner." },
    { t: "Workshop: Markedsplan", d: "Kanal, innhold, rytme og prioritering – helt konkret." },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[#005F56]">Kurs</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Praktiske workshops som får folk i gang
          </h2>
        </div>
        <Button asChild variant="secondary">
          <a href="/kurs">Se kurs</a>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {kurs.map((x) => (
          <Card key={x.t} className="p-6">
            <div className="font-bold">{x.t}</div>
            <div className="text-muted mt-2">{x.d}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}