// /src/app/seksjon/Seksjon4Foredrag.tsx
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { TALKS } from "@/content/talks";

export default function Seksjon4Foredrag() {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[#005F56]">Foredrag</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Tema som gir energi, trygghet og retning
          </h2>
          <p className="text-muted mt-2 max-w-2xl">
            Foredrag og kurs som er konkrete, inkluderende og handlekraftige – med mål om bedre
            arbeidsmiljø, tydeligere posisjon og mer gjennomføring.
          </p>
        </div>

        <Button asChild variant="secondary">
          <a href="/foredrag">Se foredrag</a>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {TALKS.map((t) => {
          const Icon = t.icon;
          return (
            <a key={t.slug} href={`/foredrag/${t.slug}`} className="block">
              <Card className="p-6 hover:shadow-(--shadow) transition">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-(--surface-2) border border-[rgba(2,6,23,0.08)]">
                    <Icon className="h-5 w-5 text-[#003366]" />
                  </div>

                  <div>
                    <div className="font-bold">{t.title}</div>
                    <div className="text-muted mt-2">{t.subtitle}</div>
                    <div className="mt-4 font-semibold" style={{ color: "var(--link)" }}>
                      Les mer →
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
}