import type { Metadata } from "next";
import Page from "@/components/layout/Page";

export const metadata: Metadata = {
  title: "Om Øystein Remøy",
  description: "Lederprofil og bakgrunn: markedsføring, gjennomføring, foredrag og kurs.",
};

export default function OmPage() {
  return (
    <Page
      title="Om Øystein Remøy"
      subtitle="Lederprofil, bakgrunn og hva jeg tilbyr."
      spacing="roomy"
      size="lg"
    >
      <section className="rounded-(--radius) border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold">Kort oppsummert</h2>
        <p className="mt-2 text-muted">
          Skriv 5–8 linjer om markedsføring, ledelse og gjennomføring (vi fyller inn etterpå).
        </p>
      </section>
    </Page>
  );
}