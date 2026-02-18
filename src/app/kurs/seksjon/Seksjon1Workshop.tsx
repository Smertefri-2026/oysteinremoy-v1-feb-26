import Image from "next/image";
import { ClipboardList } from "lucide-react";

export default function Seksjon1Workshop() {
  return (
    <section className="space-y-5">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-[#F3E8DA] px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Opplegg
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* Tekst (mobil først) */}
        <div className="space-y-3 order-1 lg:order-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <ClipboardList className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">Workshop</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Workshop-format: beslutninger, maler og neste steg
          </h2>

          <p className="text-muted max-w-prose">
            Vi jobber praktisk. Du får konkrete oppgaver og en enkel struktur som gjør at tiltak blir
            gjort – ikke bare diskutert.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Felles problemforståelse (hva stopper vekst/gjennomføring)",
              "Prioritering: 3 tiltak som gir mest effekt først",
              "Plan + ansvar + tidsfrist (og hva som kan droppes)",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#005F56]" />
                <span className="text-muted">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bilde (mobil nederst) */}
        <div className="flex justify-center order-2 lg:order-1">
          <div className="w-full max-w-100">
            <div className="rounded-2xl border border-[rgba(2,6,23,0.10)] bg-[#F3E8DA] p-3 shadow-sm">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src="/kurs/workshop.jpg"
                  alt="Workshop og planarbeid"
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