import Image from "next/image";
import { Compass } from "lucide-react";

export default function Seksjon5Mennesker() {
  return (
    <section className="space-y-5">
      {/* Badge (beige look) */}
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-[#F3E8DA] px-4 py-2 text-sm text-muted">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70 border border-[rgba(2,6,23,0.08)]">
          <Compass className="h-4 w-4 text-[#003366]" />
        </span>
        Mennesker
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Tekst (mobil først) */}
        <div className="space-y-4 order-1 lg:order-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Reiseleder i Europa – kommunikasjon i virkeligheten
          </h2>

          <p className="text-muted max-w-prose">
            Jeg har vært reiseleder mest i Italia, Spania og Portugal. Det har gjort meg bedre på
            mennesker, forventninger og kommunikasjon – særlig når ting endrer seg underveis.
          </p>

          <ul className="grid gap-2 text-sm">
            {[
              "Trygghet, struktur og god energi i grupper",
              "Rask problemløsning når noe skjer",
              "Tydelig kommunikasjon uten stress",
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
                  src="/om/reise.jpg"
                  alt="Reiseleder i Europa"
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