import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Seksjon1Hero() {
  return (
    <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
      <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
        <div className="p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(44,44,44,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                Foredrag
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Tema som gir energi,{" "}
                <span className="text-[#005F56]">motivasjon</span> og retning
              </h1>

              <p className="text-muted text-base md:text-lg max-w-xl">
                Konkrete foredrag om ledelse, kommunikasjon, salg og posisjon – med humor og varme,
                og alltid med tiltak du kan bruke dagen etter.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="primary">
                  <a href="#kontakt">Book forespørsel</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#tema">Se tema</a>
                </Button>
              </div>

              <div className="text-sm text-muted pt-2">
                Praktisk • engasjerende • gjennomførbart
              </div>
            </div>

            <Card className="p-6">
              <div className="text-base font-bold">Praktisk info</div>
              <div className="mt-4 grid gap-2 text-sm text-muted">
                <div>⏱️ 45–60 min (kan tilpasses)</div>
                <div>👥 5–500 deltakere</div>
                <div>📍 Onsite / digitalt</div>
                <div>🧩 Inkluderer valgfri Q&A + oppsummering</div>
              </div>

              <div className="mt-4 rounded-(--radius) border border-[rgba(44,44,44,0.08)] bg-(--surface-2) px-4 py-3 text-sm text-muted">
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