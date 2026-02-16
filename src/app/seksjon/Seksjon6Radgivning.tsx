import Card from "@/components/ui/Card";

export default function Seksjon6Radgivning() {
  const steps = [
    { n: "1", t: "Klarhet", d: "Hva er målet, hvem er kunden, og hvilken posisjon skal du ta?" },
    { n: "2", t: "Plan", d: "En enkel plan som kan gjennomføres, med tydelige prioriteringer." },
    { n: "3", t: "Produksjon", d: "Vi lager/rydder opp i sider, budskap og uttrykk – proft og raskt." },
    { n: "4", t: "Rytme", d: "En rytme for publisering/oppfølging som skaper effekt over tid." },
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
        {steps.map((s) => (
          <Card key={s.n} className="p-6">
            <div className="text-sm font-semibold text-[#003366]">Steg {s.n}</div>
            <div className="mt-1 font-bold">{s.t}</div>
            <div className="text-muted mt-2">{s.d}</div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-(--highlight)">
        <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="font-bold">Resultat = tydelig posisjon</div>
            <div className="text-muted mt-1">
              Ikke “mer innhold”, men mer presisjon: budskap, sider og plan som henger sammen.
            </div>
          </div>
          <div className="text-sm font-semibold text-[#003366]">
            Klar for neste steg? → Kontakt meg
          </div>
        </div>
      </Card>
    </section>
  );
}