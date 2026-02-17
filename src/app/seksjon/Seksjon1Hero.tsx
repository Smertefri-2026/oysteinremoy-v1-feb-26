// /src/app/seksjon/Seksjon1Hero.tsx
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Megaphone, Briefcase, Plane, Users, Mic } from "lucide-react";

export default function Seksjon1Hero() {
  const proof = [
{ icon: Megaphone, title: "20+ år", desc: "Markedsføring + nettsider/apper" },
    { icon: Briefcase, title: "Ledererfaring", desc: "Daglig leder + næringsliv" },
    { icon: Users, title: "Frivillighetsleder", desc: "Både små og store arrangementer" },
    { icon: Plane, title: "Reiseleder", desc: "Trygg, rolig og gjennomførende" },
    { icon: Mic, title: "Kurs & foredrag", desc: "Praktisk og engasjerende" },
  ];

  return (
    <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
      <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
        <div className="p-8 md:p-12">
          {/* TOP: Hero content */}
<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                Foredrag · kurs · markedsføring
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <span className="text-[#003366]">Øystein</span>{" "}
                <span className="text-[#005F56]">Remøy</span>
              </h1>

            <p className="text-muted text-base md:text-lg max-w-xl">
  Som leder motiveres jeg av å gjøre andre bedre – og innen markedsføring trives jeg
  best med de som vil ta en tydelig posisjon i markedet sitt. Ofte ender det med:{" "}
  <span className="font-semibold text-[#003366]">
    «Ja... det måtte en Sunnmøring til.»
  </span>
</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="primary">
                  <a href="/kontakt">Kontakt meg</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="/markedsforing">Se markedsføring</a>
                </Button>
              </div>

              <div className="text-sm text-muted pt-2">
                Tydelig • inkluderende • handlekraftig
              </div>
            </div>

            {/* Right */}
            <Card className="p-6">
              <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-start">
<div className="relative overflow-hidden rounded-(--radius) bg-[rgba(0,51,102,0.06)] border border-[rgba(2,6,23,0.06)] shadow-sm">                  <Image
                    src="/Øystein-Remøy-pt.png"
                    alt="Øystein Remøy"
                    width={800}
                    height={800}
                    className="h-60 w-full object-cover md:h-72"
                    priority
                  />
                </div>

                <div className="space-y-3">
                  <div className="text-base font-bold">Kort oversikt</div>

                  <div className="space-y-2">
                    {[
                      { k: "Foredrag", v: "45–60 min • energi + konkrete budskap" },
                      { k: "Kurs", v: "Workshops • ledelse • kommunikasjon • gjennomføring" },
                      { k: "Markedsføring", v: "Strategi • nett • løsninger • vekst" },
                    ].map((row) => (
                      <div
                        key={row.k}
                        className="rounded-(--radius) border border-[rgba(2,6,23,0.08)] bg-(--surface-2) px-4 py-3"
                      >
                        <div className="text-sm font-semibold">{row.k}</div>
                        <div className="text-sm text-muted">{row.v}</div>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </Card>
          </div>

          {/* BOTTOM: Proof row (flyttet hit for bedre desktop-layout) */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {proof.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
className="flex h-full items-center gap-3 rounded-(--radius) bg-(--surface-2) border border-[rgba(2,6,23,0.08)] px-4 py-4"                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/60 border border-[rgba(2,6,23,0.08)]">
                    <Icon className="h-5 w-5 text-[#003366]" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-extrabold">{item.title}</div>
<div className="text-xs text-muted leading-snug">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 text-sm text-muted">
            Målet: tydelig retning, bedre gjennomføring og en posisjon som varer.
          </div>
        </div>
      </div>
    </section>
  );
}