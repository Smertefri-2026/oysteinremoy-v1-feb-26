import Card from "@/components/ui/Card";
import { Megaphone, Globe, Smartphone } from "lucide-react";

export default function Seksjon3Markedsforing() {
  const items = [
    {
      title: "Markedsføring",
      href: "/markedsforing",
      desc: "Strategi, budskap og kanalvalg som bygger en posisjon – ikke bare klikk.",
      icon: Megaphone,
    },
    {
      title: "Nettløsninger",
      href: "/markedsforing/nettlosninger",
      desc: "Hjemmeside/landingpage som konverterer, og som er enkel å holde oppdatert.",
      icon: Globe,
    },
    {
      title: "Apper og portaler",
      href: "/markedsforing/apper",
      desc: "Digitale løsninger som skaper flyt i kundereise, salg og oppfølging.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[#005F56]">Markedsføring</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Ta posisjon –  se det på bunnlinjen
          </h2>
        </div>
        <a className="text-sm font-semibold text-[#003366] hover:underline" href="/markedsforing">
          Se alt →
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((c) => {
          const Icon = c.icon;
          return (
            <a key={c.title} href={c.href}>
              <Card className="hover:shadow-(--shadow) transition">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-(--surface-2) border border-[rgba(2,6,23,0.08)]">
                    <Icon className="h-5 w-5 text-[#003366]" />
                  </div>
                  <div className="text-lg font-bold">{c.title}</div>
                </div>
                <p className="text-muted mt-3">{c.desc}</p>
                <div className="mt-4 text-sm font-semibold text-[#003366]">
                  Les mer →
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
}