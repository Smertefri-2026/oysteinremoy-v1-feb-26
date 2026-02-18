// src/app/om/seksjon/Seksjon6Stil.tsx
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Seksjon6Stil() {
  return (
    <section className="space-y-5">
      {/* Badge (beige look) */}
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-[#F3E8DA] px-4 py-2 text-sm text-muted">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70 border border-[rgba(2,6,23,0.08)]">
          <Sparkles className="h-4 w-4 text-[#003366]" />
        </span>
        Stil
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Tekst (venstre) */}
        <div className="space-y-4 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Arbeidsstil: tydelig, ryddig og handlingsorientert
          </h2>

          <p className="text-muted max-w-prose">
            Jeg trives best når vi finner kjernen, prioriterer riktig og lager en enkel plan som
            faktisk blir gjennomført.
          </p>

          <ul className="grid gap-2 text-sm">
            {[
              "Tydelig budskap og prioriteringer",
              "Små leveranser som gir fremdrift",
              "Lite støy – mer kvalitet",
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
                  src="/om/stil.jpg"
                  alt="Arbeidsstil"
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