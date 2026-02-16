import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Seksjon1Hero() {
  return (
    <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
      <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
        <div className="p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            {/* Left */}
            <div className="space-y-5">
              {/* Tag pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                Foredrag · kurs · markedsføring
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Øystein{" "}
                <span className="text-[#005F56]">Remøy</span>
              </h1>

              <p className="text-muted text-base md:text-lg max-w-xl">
                Som leder motiveres jeg av å gjøre andre bedre – Innen Markedsføring trives jeg best med de som vil ta en tydelig
                posisjon i markedet ditt.
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
                Strukturert • praktisk • uten fluff
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-4">
              <Card className="p-6">
                <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-center">
                  <div className="relative overflow-hidden rounded-(--radius) bg-[rgba(0,51,102,0.06)] border border-[rgba(2,6,23,0.06)]">
                    <Image
                      src="/Øystein-Remøy-pt.png"
                      alt="Øystein Remøy"
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="text-base font-bold">Kort oversikt</div>

                    <div className="space-y-2">
                      {[
                        { k: "Foredrag", v: "45–60 min • energi + konkrete grep" },
                        { k: "Kurs", v: "Workshops • ledelse, kommunikasjon, gjennomføring" },
                        { k: "Markedsføring", v: "Strategi • nett • apper • vekst" },
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

              <div className="text-sm text-muted">
                Målet: tydelig retning, bedre gjennomføring og en posisjon som varer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}