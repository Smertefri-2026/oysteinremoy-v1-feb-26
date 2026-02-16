import type { Metadata } from "next";
import Page from "@/components/layout/Page";

export const metadata: Metadata = {
  title: "Markedsføring med Øystein Remøy",
  description: "Nettløsninger, nettbutikk og apper som skaper vekst.",
};

export default function MarkedsforingPage() {
  return (
    <Page
      title="Markedsføring"
      subtitle="Nettløsninger, nettbutikk og apper – med fokus på vekst og konvertering."
      spacing="roomy"
      size="lg"
    >
      <section className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Nettløsninger", href: "/markedsforing/nettlosninger", desc: "Nettsider som konverterer – struktur, budskap og SEO." },
          { title: "Nettbutikk", href: "/markedsforing/nettbutikk", desc: "Shopify eller custom – mer salg, bedre flyt." },
          { title: "Apper og portaler", href: "/markedsforing/apper", desc: "Bygg din egen plattform/portal – ikke bare en landingsside." },
          { title: "Vekst og strategi", href: "/markedsforing/vekst", desc: "Plan, prioriteringer og tiltak som gir målbar effekt." },
        ].map((c) => (
          <a key={c.href} href={c.href} className="rounded-(--radius) border border-border bg-surface p-6 hover:shadow-(--shadow) transition">
            <div className="text-lg font-bold">{c.title}</div>
            <p className="mt-2 text-muted">{c.desc}</p>
            <div className="mt-4 font-semibold" style={{ color: "var(--link)" }}>Les mer →</div>
          </a>
        ))}
      </section>

      <section className="rounded-(--radius) border border-border bg-(--highlight) p-6">
        <h2 className="text-xl font-semibold">Vil du ha en konkret plan?</h2>
        <p className="mt-2 text-muted">
          Send en kort beskrivelse av hva du selger, målgruppe og dagens løsning – så foreslår jeg neste steg.
        </p>
        <div className="mt-4">
          <a className="rounded-full px-5 py-2 font-semibold bg-brand text-white hover:bg-(--brand-hover) transition" href="/kontakt">
            Kontakt meg
          </a>
        </div>
      </section>
    </Page>
  );
}