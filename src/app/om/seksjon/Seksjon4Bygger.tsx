// src/app/om/seksjon/Seksjon4Bygger.tsx
import Image from "next/image";
import { Hammer } from "lucide-react";

export default function Seksjon4Bygger() {
  return (
    <section className="grid gap-6 md:grid-cols-2 md:items-center">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted w-fit">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70 border border-[rgba(2,6,23,0.08)]">
            <Hammer className="h-4 w-4 text-[#003366]" />
          </span>
          Bygger
        </div>

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

      <div className="media-frame">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl">
          <Image
            src="/om/bygger.jpg"
            alt="Bygge digitale løsninger"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}