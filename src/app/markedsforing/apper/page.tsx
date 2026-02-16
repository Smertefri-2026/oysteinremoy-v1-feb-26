import type { Metadata } from "next";
import Page from "@/components/layout/Page";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Apper og portaler – Øystein Remøy",
  description:
    "Bygg apper, portaler og medlemsløsninger (Next.js) med booking, CRM, betaling og innlogging.",
};

const packages = [
  {
    title: "MVP (pilot)",
    bullets: [
      "1 hovedflyt (f.eks. booking eller medlemskap)",
      "Login + roller (admin/kunde/trener)",
      "Enkel dashboard + grunnleggende data",
      "Klar plan for V2",
    ],
  },
  {
    title: "Portal (pro)",
    bullets: [
      "CRM/kunderegister + profiler",
      "Bookingkalender og tilgjengelighet",
      "Betaling/abonnement (f.eks. Stripe)",
      "Ressursbank / innhold (video, PDF, artikler)",
    ],
  },
  {
    title: "Plattform (skalering)",
    bullets: [
      "Flere roller + admin-verktøy",
      "Rapporter/innsikt + eksport",
      "Automatiseringer (e-post/SMS/varsler)",
      "Integrasjoner (HubSpot, Zapier, etc.)",
    ],
  },
];

const useCases = [
  {
    title: "Booking + tilgjengelighet",
    desc: "Kunder booker kun ledige slots. Buffer og varigheter kan styres. Perfekt for tjenester.",
    bullets: ["Kalender", "Slots", "Konflikthåndtering", "Varsler"],
  },
  {
    title: "CRM / kunderegister",
    desc: "Oversikt over kunder, historikk, notater, mål og aktiviteter – alt på ett sted.",
    bullets: ["Søk og filtrering", "Kundeprofil", "Tilknytninger", "Aktivitetslogg"],
  },
  {
    title: "Medlemskap og betaling",
    desc: "Abonnement, engangskjøp og tilgangskontroll. Kunden ser status, admin ser oversikt.",
    bullets: ["Stripe", "Tilgangskontroll", "Kvitteringer", "Planer/tiers"],
  },
  {
    title: "Kursportal / innhold",
    desc: "Video, oppgaver, PDF-er og progresjon. Kan kombineres med booking og medlemskap.",
    bullets: ["Ressursbank", "Progress", "Rollestyring", "Enkel publisering"],
  },
];

const process = [
  {
    title: "1) Mål og flyt",
    text: "Vi velger én kjerneflyt som skaper verdi: booking, portal eller salg. Så tegner vi brukerreisen.",
  },
  {
    title: "2) MVP og data",
    text: "Vi bygger minste versjon som kan testes med ekte brukere, med riktig datagrunnlag for videre vekst.",
  },
  {
    title: "3) Leveranse i sprint",
    text: "Rask fremdrift med tydelige leveranser. Du ser resultat tidlig og kan styre retning underveis.",
  },
  {
    title: "4) Skalering",
    text: "Når MVP fungerer, bygger vi ut: flere roller, rapporter, automatisering og integrasjoner.",
  },
];

const faq = [
  {
    q: "Er dette for stort for små bedrifter?",
    a: "Nei. Jeg starter ofte med en MVP som løser én ting veldig bra, og bygger videre når det gir mening.",
  },
  {
    q: "Hvilken tech bruker du?",
    a: "Typisk Next.js (TypeScript) for moderne web-app, med innlogging/roller og database (f.eks. Firebase/Supabase).",
  },
  {
    q: "Kan vi starte med nettside og gå til portal senere?",
    a: "Ja – det er ofte smart. Vi lager struktur og innhold først, og bygger portal når behovet er tydelig.",
  },
  {
    q: "Kan du koble dette til betaling/abonnement?",
    a: "Ja. Stripe er vanligst. Vi kan sette opp abonnement, tilgang per plan og admin-oversikt.",
  },
];

export default function ApperPage() {
  return (
    <Page
      title="Apper og portaler"
      subtitle="Når du vil eie plattformen din – ikke bare leie trafikk."
      spacing="roomy"
      size="lg"
    >
      {/* Intro */}
      <Section>
        <Card>
          <h2 className="text-xl font-semibold">Hva passer dette for?</h2>
          <p className="mt-2 text-muted">
            Hvis du selger tjenester, oppfølging, medlemskap eller kurs, kan en portal gjøre deg mindre
            avhengig av tredjepartsplattformer – og gi bedre kontroll på kundeopplevelse og vekst.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Booking", "CRM", "Medlemskap", "Betaling", "Kursportal", "Rapporter"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-brand-soft px-3 py-1 text-sm font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <a href="/kontakt">Kontakt meg</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/markedsforing">Tilbake til markedsføring</a>
            </Button>
          </div>
        </Card>
      </Section>

      {/* Pakker */}
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-muted">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-(--accent)" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use cases */}
      <Section tone="soft">
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold">Typiske løsninger</h2>
            <p className="mt-2 text-muted">
              Du kan starte med én modul og bygge ut. Her er de vanligste “byggesteinene”.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((u) => (
              <Card key={u.title}>
                <h3 className="text-lg font-bold">{u.title}</h3>
                <p className="mt-2 text-muted">{u.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {u.bullets.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-border bg-brand-soft px-3 py-1 text-sm font-semibold"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Prosess */}
      <Section>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Slik jobber jeg</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {process.map((s) => (
              <Card key={s.title}>
                <div className="font-bold">{s.title}</div>
                <p className="mt-2 text-muted">{s.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Card>
          <h2 className="text-xl font-semibold">Spørsmål og svar</h2>
          <div className="mt-4 space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="rounded-(--radius) border border-border bg-surface p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section tone="soft">
        <Card>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-extrabold">Vil du bygge en portal eller app?</div>
              <div className="text-muted">
                Send meg kort: hva du selger, målgruppe og ønsket flyt (booking/medlemskap/CRM),
                så svarer jeg med forslag til MVP.
              </div>
            </div>
            <Button asChild variant="primary">
              <a href="/kontakt">Send forespørsel</a>
            </Button>
          </div>
        </Card>
      </Section>
    </Page>
  );
}