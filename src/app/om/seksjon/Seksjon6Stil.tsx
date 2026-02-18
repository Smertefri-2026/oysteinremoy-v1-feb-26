// src/app/om/seksjon/Seksjon6Stil.tsx
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Seksjon6Stil() {
  return (
    <section className="grid gap-6 md:grid-cols-2 md:items-center">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-4 py-2 text-sm text-muted w-fit">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70 border border-[rgba(2,6,23,0.08)]">
            <Sparkles className="h-4 w-4 text-[#003366]" />
          </span>
          Stil
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Arbeidsstil: tydelig, ryddig og handlingsorientert
        </h2>

        <p className="text-muted max-w-prose">
          Jeg trives best når vi finner kjernen, prioriterer riktig og lager en enkel plan som faktisk blir gjennomført.
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

      <div className="media-frame">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl">
          <Image
            src="/om/stil.jpg"
            alt="Arbeidsstil"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}