// src/app/markedsforing/seksjon/Seksjon1Hero.tsx
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { BarChart3, Search, Rocket, ShoppingCart } from "lucide-react";

export default function Seksjon1Hero() {
  const points = [
    { icon: BarChart3, title: "Konvertering", desc: "Landingssider som gjør jobben" },
    { icon: Search, title: "SEO", desc: "Synlighet som gir leads over tid" },
    { icon: Rocket, title: "Automatisering", desc: "Lead → booking → oppfølging" },
    { icon: ShoppingCart, title: "Nettbutikk", desc: "Bedre flyt og mer salg" },
  ];

  return (
    <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
      <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
        <div className="p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(44,44,44,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                Markedsføring
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Markedsføring som gir{" "}
                <span className="text-[#005F56]">flere henvendelser</span> – uten mer støy
              </h1>

              <p className="text-muted text-base md:text-lg max-w-xl">
                Vi bygger praktisk: budskap → side → måling → oppfølging. Resultatet er bedre flyt,
                bedre konvertering og tydelige neste steg.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="primary">
                  <a href="#kontakt">Kontakt meg</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#steg">Se stegene</a>
                </Button>
              </div>

              <div className="text-sm text-muted pt-2">
                Tydelig budskap • målbar effekt • ryddig prosess
              </div>
            </div>

            <Card className="p-6">
              <div className="text-base font-bold">Dette får du</div>
              <div className="mt-4 grid gap-3">
                {points.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="flex items-start gap-3 rounded-(--radius) border border-[rgba(44,44,44,0.08)] bg-(--surface-2) px-4 py-3"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/70 border border-[rgba(44,44,44,0.08)]">
                        <Icon className="h-5 w-5 text-[#003366]" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-extrabold">{p.title}</div>
                        <div className="text-xs text-muted leading-snug">{p.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-(--radius) border border-[rgba(44,44,44,0.08)] bg-surface px-4 py-3 text-sm text-muted">
                Vil du ha en konkret plan? Send mål + målgruppe + dagens løsning – så foreslår jeg neste steg.
              </div>
            </Card>
          </div>

          <div id="steg" className="mt-2" />
        </div>
      </div>
    </section>
  );
}