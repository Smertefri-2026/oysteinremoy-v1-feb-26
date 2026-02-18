import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { BadgeCheck, Clock, MapPin, Users } from "lucide-react";

export default function KursHero() {
  return (
    <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
      <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
        <div className="p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(44,44,44,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                Kurs & workshops
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Workshops som gir fart –{" "}
                <span className="text-[#005F56]">og som blir gjennomført</span>
              </h1>

              <p className="text-muted text-base md:text-lg max-w-xl">
                Konkrete oppgaver, maler og beslutninger der og da. Du går ut med en plan,
                en struktur og neste steg som faktisk er lett å gjøre.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="primary">
                  <a href="#kontakt">Book workshop</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#pakker">Se opplegg</a>
                </Button>
              </div>

              <div className="text-sm text-muted pt-2">
                Struktur • tempo • eierskap
              </div>
            </div>

            <Card className="p-6">
              <div className="text-base font-bold">Praktisk info</div>

              <div className="mt-4 grid gap-2 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#003366]" />
                  3 timer, 1/2 dag eller 1 dag (tilpasses)
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#003366]" />
                  5–50 deltakere (kan tilpasses)
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#003366]" />
                  Onsite / digital
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#003366]" />
                  Inkluderer maler, oppgaver og oppsummering
                </div>
              </div>

              <div className="mt-4 rounded-(--radius) border border-[rgba(44,44,44,0.08)] bg-(--surface-2) px-4 py-3 text-sm text-muted">
                Tips: Send mål + deltakerantall + format – så foreslår jeg opplegg.
              </div>
            </Card>
          </div>

          <div id="pakker" className="mt-2" />
        </div>
      </div>
    </section>
  );
}