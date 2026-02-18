// src/app/om/seksjon/Seksjon4Bygger.tsx
import Image from "next/image";
import { Hammer } from "lucide-react";

export default function Seksjon4Bygger() {
  return (
    <section className="space-y-5">
      {/* Badge (beige look) */}
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-[#F3E8DA] px-4 py-2 text-sm text-muted">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70 border border-[rgba(2,6,23,0.08)]">
          <Hammer className="h-4 w-4 text-[#003366]" />
        </span>
        Bygger
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Tekst (venstre) */}
        <div className="space-y-4 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Jeg liker å bygge løsninger som sparer tid og gir resultater
          </h2>

          <p className="text-muted max-w-prose">
            De siste årene har jeg jobbet mer praktisk og produktorientert: bygge portaler,
            systemer og nettsider som gjør jobben enklere – og som gir konvertering.
          </p>

          <ul className="grid gap-2 text-sm">
            {[
              "Tenk: mindre friksjon, mer flyt",
              "Portaler: onboarding, oppfølging, booking, betaling",
              "Måling og forbedring over tid (ikke “lanser og håp”)",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#005F56]" />
                <span className="text-muted">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bilde (høyre) */}
        <div className="lg:order-2 flex justify-center">
          <div className="w-full max-w-100">
            <div className="rounded-2xl border border-[rgba(2,6,23,0.10)] bg-[#F3E8DA] p-3 shadow-sm">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src="/om/bygger.jpg"
                  alt="Bygge digitale løsninger"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}