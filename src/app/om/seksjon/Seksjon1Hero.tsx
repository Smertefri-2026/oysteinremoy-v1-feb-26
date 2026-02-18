import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Compass, Hammer, Target, Users, Sparkles } from "lucide-react";

export default function Seksjon1Hero() {
  const points = [
    { icon: Target, title: "Fokus", desc: "Budskap, struktur, konvertering" },
    { icon: Hammer, title: "Bygger", desc: "Nettsider, portaler, systemer" },
    { icon: Users, title: "Kurs/foredrag", desc: "Ledelse, salg, posisjon" },
    { icon: Compass, title: "Reise", desc: "Italia, Spania, Portugal" },
  ];

  return (
    <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
      <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
        <div className="p-5 sm:p-8 md:p-12">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                Om meg
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Jeg hjelper folk og bedrifter med å bli valgt –{" "}
                <span className="text-[#005F56]">med mindre støy</span>
              </h1>

              <p className="text-muted text-base md:text-lg max-w-xl">
                Jeg kombinerer markedsføring, ledelse og praktisk bygging av digitale løsninger.
                Målet er alltid det samme: tydeligere posisjon, bedre flyt og mer gjennomføring.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="primary">
                  <a href="#kontakt">Ta kontakt</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="/markedsforing">Se markedsføring</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="/foredrag">Se foredrag</a>
                </Button>
              </div>

              <div className="text-sm text-muted pt-2">
                Tydelig • ryddig • handlingsorientert
              </div>
            </div>

            {/* Right */}
            <Card className="p-6">
              <div className="text-base font-bold">Kort fortalt</div>

              <div className="mt-4 grid gap-3">
                {points.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="flex items-start gap-3 rounded-(--radius) border border-[rgba(2,6,23,0.08)] bg-(--surface-2) px-4 py-3"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
                        <Icon className="h-5 w-5 text-[#003366]" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-extrabold">{p.title}</div>
                        <div className="text-xs text-muted leading-snug">{p.desc}</div>
                      </div>
                    </div>
                  );
                })}

                <div className="flex items-center gap-2 text-sm text-muted pt-1">
                  <Sparkles className="h-4 w-4 text-[#003366]" />
                  “Mindre friksjon, mer flyt.”
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-4 text-sm text-muted">
            Målet: tydelig retning, bedre gjennomføring og en posisjon som varer.
          </div>
        </div>
      </div>
    </section>
  );
}