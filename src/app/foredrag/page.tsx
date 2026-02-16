import type { Metadata } from "next";
import Page from "@/components/layout/Page";

export const metadata: Metadata = {
  title: "Foredrag – Øystein Remøy",
  description: "Foredrag om ledelse, kapital, kommunikasjon og digital posisjon.",
};

export default function ForedragPage() {
  return (
    <Page
      title="Foredrag"
      subtitle="45–60 minutter. Humor, energi og konkrete grep."
      spacing="roomy"
      size="lg"
    >
      <section className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Ingen dårlige ansatte – bare dårlig ledelse", href: "/foredrag/ledelse", desc: "Tydelighet, kultur og praktiske grep som virker." },
          { title: "Investor vs annen kapital", href: "/foredrag/kapital", desc: "Hvordan skaffe kapital mens du bygger plan og kunder." },
          { title: "Nevrodiversitet: humor og samspill", href: "/foredrag/nevrodiversitet", desc: "Kommunikasjon, misforståelser og styrker i team." },
          { title: "Ta en digital posisjon", href: "/foredrag/digital-posisjon", desc: "Bygg din egen plattform/portal i stedet for å leie oppmerksomhet." },
        ].map((c) => (
          <a key={c.href} href={c.href} className="rounded-(--radius) border border-border bg-surface p-6 hover:shadow-(--shadow) transition">
            <div className="text-lg font-bold">{c.title}</div>
            <p className="mt-2 text-muted">{c.desc}</p>
            <div className="mt-4 font-semibold" style={{ color: "var(--link)" }}>Les mer →</div>
          </a>
        ))}
      </section>
    </Page>
  );
}