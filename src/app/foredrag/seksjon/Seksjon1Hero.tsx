// src/app/foredrag/seksjon/Seksjon1Hero.tsx
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Clock, Users, MapPin, MessageSquare } from "lucide-react";

export default function Seksjon1Hero() {
  const points = [
    { icon: Clock, title: "Varighet", desc: "45–60 min (kan tilpasses)" },
    { icon: Users, title: "Deltakere", desc: "5–500" },
    { icon: MapPin, title: "Format", desc: "Onsite / digitalt" },
    { icon: MessageSquare, title: "Inkludert", desc: "Valgfri Q&A + oppsummering" },
  ];

  return (
    <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
      <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
        <div className="p-4 sm:p-6 md:p-10 lg:p-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                Foredrag
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Tema som gir energi,{" "}
                <span className="text-[#005F56]">motivasjon</span> og retning
              </h1>

              <p className="text-muted text-base sm:text-lg max-w-xl">
                Konkrete foredrag om ledelse, kommunikasjon, salg og posisjon – med humor og varme,
                og alltid med tiltak du kan bruke dagen etter.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild variant="primary">
                  <a href="#kontakt">Book forespørsel</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#tema">Se tema</a>
                </Button>
              </div>

              <div className="text-sm text-muted pt-1">
                Praktisk • engasjerende • gjennomførbart
              </div>
            </div>

            {/* Right */}
            <Card className="p-4 sm:p-6">
              <div className="text-base font-bold">Praktisk info</div>

              <div className="mt-4 grid gap-3">
                {points.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="flex items-start gap-3 rounded-(--radius) bg-(--surface-2) border border-[rgba(2,6,23,0.08)] px-4 py-3"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/60 border border-[rgba(2,6,23,0.08)]">
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

              <div className="mt-4 rounded-(--radius) border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-3 text-sm text-muted">
                Tips: Send dato + antall deltakere + ønsket tema – så svarer jeg med forslag.
              </div>
            </Card>
          </div>

          <div id="tema" className="mt-2" />
        </div>
      </div>
    </section>
  );
}