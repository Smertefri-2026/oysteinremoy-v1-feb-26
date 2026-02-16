import Card from "@/components/ui/Card";

export default function Seksjon3Markedsforing() {
  const items = [
    {
      title: "Markedsføring",
      href: "/markedsforing",
      desc: "Strategi, budskap og kanalvalg som bygger en posisjon – ikke bare klikk.",
    },
    {
      title: "Nettløsninger",
      href: "/markedsforing/nettlosninger",
      desc: "Hjemmeside/landingpage som konverterer, og som er enkel å holde oppdatert.",
    },
    {
      title: "Apper og portaler",
      href: "/markedsforing/apper",
      desc: "Digitale løsninger som skaper flyt i kundereise, salg og oppfølging.",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[#005F56]">Markedsføring</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Ta en posisjon – og få det til å vises
          </h2>
        </div>
        <a className="text-sm font-semibold text-[#003366] hover:underline" href="/markedsforing">
          Se alt →
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((c) => (
          <a key={c.title} href={c.href}>
            <Card className="hover:shadow-(--shadow) transition">
              <div className="text-lg font-bold">{c.title}</div>
              <p className="text-muted mt-2">{c.desc}</p>
              <div className="mt-4 text-sm font-semibold text-[#003366]">
                Les mer →
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}