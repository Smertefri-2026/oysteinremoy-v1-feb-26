import type { Metadata } from "next";
import Page from "@/components/layout/Page";

export const metadata: Metadata = {
  title: "Kurs og workshops – Øystein Remøy",
  description: "Kurs i ledelse, kapitalplan, kommunikasjon og digital strategi.",
};

export default function KursPage() {
  return (
    <Page
      title="Kurs og workshops"
      subtitle="3 timer – 1 dag. Praktisk og tilpasset."
      spacing="roomy"
      size="lg"
    >
      <section className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Bedre ledelse i praksis", href: "/kurs/ledelse-workshop", desc: "Verktøy, samtaler, forventninger og kultur." },
          { title: "Kapitalplan på 30 dager", href: "/kurs/kapitalplan", desc: "Finansiering uten å stoppe salget." },
          { title: "Kommunikasjon i team", href: "/kurs/kommunikasjon-team", desc: "Tydelighet, roller og samarbeid." },
          { title: "Digital strategi", href: "/kurs/digital-strategi", desc: "Nettside, nettbutikk eller portal – hva lønner seg?" },
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