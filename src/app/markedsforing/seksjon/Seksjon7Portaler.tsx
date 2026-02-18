import Image from "next/image";
import { LayoutGrid } from "lucide-react";

export default function Seksjon7Portaler() {
  return (
    <section className="space-y-5">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-[#F3E8DA] px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Steg 6
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Tekst (venstre) */}
        <div className="space-y-3 lg:order-1">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <LayoutGrid className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">Portaler</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Bygg din egen plattform – ikke bare en landingsside
          </h2>

          <p className="text-muted max-w-prose">
            Hvis du selger tjenester over tid, kan en portal/app gi deg et enormt fortrinn:
            onboarding, oppfølging, abonnement og gjenkjøp i samme system.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Portaler: kundeområde, booking, betaling, innhold",
              "Abonnement og oppfølging – skalerbart og ryddig",
              "Du eier flyten og dataene – ikke en plattform",
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
                  src="/markedsforing/portal.jpg"
                  alt="Apper og portaler"
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