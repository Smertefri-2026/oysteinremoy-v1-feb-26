import Image from "next/image";
import Card from "@/components/ui/Card";

export default function Seksjon2Om() {
  return (
    <section className="grid gap-6 md:grid-cols-2 md:items-center">
      <div className="space-y-3">
        <div className="text-sm font-semibold text-[#005F56]">Om meg</div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Fra retning til gjennomføring
        </h2>
        <p className="text-muted">
          Jeg trives best når andre lykkes: når budskapet blir tydelig, når planen blir gjennomført,
          og når du faktisk tar en posisjon i markedet ditt.
        </p>

        <div className="grid gap-3">
          {[
            {
              t: "Motivasjon",
              d: "Jeg motiveres av å gjøre andre bedre – det er der energien min kommer fra.",
            },
            {
              t: "Posisjon",
              d: "Jeg hjelper deg å skille deg ut med tydelig retning og en enkel, profesjonell plan.",
            },
            {
              t: "Gjennomføring",
              d: "Jeg liker struktur og fremdrift – ikke lange runder uten resultater.",
            },
          ].map((x) => (
            <Card key={x.t} className="p-5">
              <div className="font-bold">{x.t}</div>
              <div className="text-muted mt-1">{x.d}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <Card className="p-0 overflow-hidden">
          <div className="relative aspect-4/5">
            <Image
              src="/Øystein-Remøy-eidsvoll.jpeg"
              alt="Øystein Remøy"
              fill
              className="object-cover"
            />
          </div>
        </Card>

            <div className="text-sm text-muted">
          Filminnspilling på Eidsvollsbygningen.
        </div>
      </div>
    </section>
  );
}