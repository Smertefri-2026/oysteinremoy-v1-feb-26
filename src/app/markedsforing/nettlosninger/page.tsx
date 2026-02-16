import type { Metadata } from "next";
import Page from "@/components/layout/Page";
import {
  marketingCases,
  nettløsningerPackages,
  processSteps,
  nettløsningerFAQ,
} from "@/content/marketing";

export const metadata: Metadata = {
  title: "Nettløsninger – Øystein Remøy",
  description:
    "Nettsider og landingssider som konverterer: struktur, budskap, hastighet og SEO-baseline.",
};

export default function NettlosningerPage() {
  return (
    <Page
      title="Nettløsninger som konverterer"
      subtitle="Ryddig struktur, tydelig budskap og god flyt – slik at trafikk blir til henvendelser og salg."
      spacing="roomy"
      size="lg"
    >
      {/* Intro */}
      <section className="rounded-(--radius) border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold">Hva du får</h2>
        <p className="mt-2 text-muted">
          Jeg bygger nettløsninger som er enkle å forstå, raske å bruke og tydelige på hva kunden skal gjøre.
          Målet er alltid det samme: bedre konvertering og mer kontroll på din egen digitale posisjon.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Struktur (IA)",
            "Budskap",
            "Design",
            "Teknisk SEO",
            "Hastighet",
            "Konvertering",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-brand-soft px-3 py-1 text-sm font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full px-5 py-2 font-semibold bg-brand text-white hover:bg-(--brand-hover) transition"
            href="/kontakt"
          >
            Kontakt meg
          </a>
          <a
            className="rounded-full px-5 py-2 font-semibold border border-border hover:bg-brand-soft transition"
            href="/markedsforing"
          >
            Tilbake til markedsføring
          </a>
        </div>
      </section>

      {/* Pakker */}
      <section className="grid gap-4 md:grid-cols-3">
        {nettløsningerPackages.map((p) => (
          <div
            key={p.title}
            className="rounded-(--radius) border border-border bg-surface p-6"
          >
            <h3 className="text-lg font-bold">{p.title}</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-(--accent)" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Prosess */}
      <section className="rounded-(--radius) border border-border bg-(--highlight) p-6">
        <h2 className="text-xl font-semibold">Slik jobber jeg</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {processSteps.map((s) => (
            <div
              key={s.title}
              className="rounded-(--radius) border border-border bg-surface p-5"
            >
              <div className="font-bold">{s.title}</div>
              <p className="mt-2 text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case */}
      <section className="rounded-(--radius) border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold">Eksempler (bransjer)</h2>
        <p className="mt-2 text-muted">
          Jeg beskriver cases på et generelt nivå her. Mer detaljer kan deles i dialog.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {marketingCases.map((c) => (
            <div
              key={c.title}
              className="rounded-(--radius) border border-border bg-(--surface-2) p-5"
            >
              <div className="font-bold">{c.title}</div>
              <div className="mt-1 text-sm text-muted">{c.industry}</div>

              <div className="mt-4">
                <div className="text-sm font-semibold">Situasjon</div>
                <p className="mt-1 text-muted">{c.situation}</p>
              </div>

              <div className="mt-4">
                <div className="text-sm font-semibold">Tilnærming</div>
                <ul className="mt-2 space-y-1 text-muted">
                  {c.approach.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-(--accent)" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <div className="text-sm font-semibold">Resultat</div>
                <ul className="mt-2 space-y-1 text-muted">
                  {c.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-(--accent)" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {c.note ? (
                <p className="mt-4 text-xs text-muted">{c.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-(--radius) border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold">Spørsmål og svar</h2>
        <div className="mt-4 space-y-3">
          {nettløsningerFAQ.map((f) => (
            <details
              key={f.q}
              className="rounded-(--radius) border border-border bg-(--surface-2) p-4"
            >
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-(--radius) border border-border bg-(--highlight) p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-extrabold">Klar for en bedre nettløsning?</div>
            <div className="text-muted">
              Send meg dagens URL + målgruppe + hva du vil oppnå, så svarer jeg med et forslag til neste steg.
            </div>
          </div>
          <a
            className="rounded-full px-5 py-2 font-semibold bg-brand text-white hover:bg-(--brand-hover) transition"
            href="/kontakt"
          >
            Send forespørsel
          </a>
        </div>
      </section>
    </Page>
  );
}