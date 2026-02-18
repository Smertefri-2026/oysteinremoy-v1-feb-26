// src/app/kontakt/page.tsx
import type { Metadata } from "next";
import Page from "@/components/layout/Page";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";
import { Clock, CheckCircle2, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt Øystein Remøy",
  description: "Kontakt for foredrag, kurs og markedsføring.",
};

export default function KontaktPage() {
  const points = [
    { icon: Clock, title: "Svar", desc: "Normalt innen 24–48 timer" },
    { icon: CheckCircle2, title: "Neste steg", desc: "Du får forslag til opplegg + plan" },
    { icon: Phone, title: "Telefon", desc: "Legg inn i skjema hvis du vil" },
    { icon: Mail, title: "E-post", desc: "post@oysteinremoy.no" },
  ];

  return (
    <Page spacing="roomy">
    <div className="flex flex-col gap-16">
        {/* HERO */}
        <section className="overflow-hidden rounded-(--radius) bg-surface shadow-sm">
          <div className="bg-linear-to-br from-[rgba(0,51,102,0.10)] via-[rgba(0,95,86,0.06)] to-transparent">
            <div className="p-4 sm:p-6 md:p-10 lg:p-12">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                {/* Left */}
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted">
                    <span className="h-2 w-2 rounded-full bg-[#005F56]" />
                    Kontakt
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                    Send en kort forespørsel –{" "}
                    <span className="text-[#005F56]">så svarer jeg raskt</span>
                  </h1>

                  <p className="text-muted text-base sm:text-lg max-w-xl">
                    Skriv hva du ønsker, mål og tidslinje. Hvis det gjelder foredrag eller workshop,
                    legg gjerne ved dato og antall deltakere.
                  </p>

                  <div className="text-sm text-muted pt-1">
                    Tips: mål + budsjett + frist (markedsføring) / dato + deltakere (kurs/foredrag)
                  </div>
                </div>

                {/* Right */}
                <Card className="p-4 sm:p-6">
                  <div className="text-base font-bold">Praktisk</div>

                  <div className="mt-4 grid gap-3">
                    {points.map((p) => {
                      const Icon = p.icon;
                      return (
                        <div
                          key={p.title}
                          className="flex items-start gap-3 rounded-(--radius) bg-(--surface-2) border border-[rgba(2,6,23,0.08)] px-4 py-3"
                        >
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/60 border border-[rgba(2,6,23,0.08)]">
                            <Icon className="h-5 w-5 text-[#003366]" />
                          </div>
                          <div className="leading-tight">
                            <div className="text-sm font-extrabold">{p.title}</div>
                            <div className="text-xs text-muted leading-snug">{p.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 rounded-(--radius) border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-3 text-sm text-muted">
                    Jo mer konkret du er, jo raskere kan jeg gi et presist forslag.
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SKJEMA */}
        <section id="skjema" className="space-y-6">
          <div>
            <div className="text-sm font-semibold text-[#005F56]">Kontaktskjema</div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Send en kort melding
            </h2>
            <p className="text-muted mt-2 max-w-2xl">
              Skriv kort hva det gjelder – så tar vi det derfra.
            </p>
          </div>

          <Card className="p-4 sm:p-6">
            <div className="contact-white-fields">
              <ContactForm />
            </div>
          </Card>
        </section>
      </div>
    </Page>
  );
}