import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Seksjon4SEO() {
  return (
    <section className="space-y-5">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-[#F3E8DA] px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-[#005F56]" />
        Steg 3
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Tekst (mobil først) */}
        <div className="space-y-3 order-1 lg:order-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 border border-[rgba(2,6,23,0.08)]">
              <Sparkles className="h-5 w-5 text-[#003366]" />
            </div>
            <div className="text-sm font-semibold text-[#003366]">SEO</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            SEO som faktisk gir leads
          </h2>

          <p className="text-muted max-w-prose">
            SEO handler ikke om “mye tekst” – men om å svare på det kundene søker etter når de er
            klare til å kjøpe. Vi bygger servicesider og innhold som treffer kjøpsintensjon.
          </p>

          <ul className="mt-3 grid gap-2 text-sm">
            {[
              "Servicesider som rangerer: struktur + intensjon",
              "Lokal SEO: bli valgt i ditt område",
              "Intern lenking og ryddig informasjonsarkitektur",
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
                  src="/markedsforing/oystein-remoy-seo.jpg"
                  alt="SEO som gir leads"
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