// src/app/kurs/seksjon/Seksjon8Kontakt.tsx
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export default function Seksjon8Kontakt() {
  return (
    <section className="space-y-6" id="kontakt">
      <div>
        <div className="text-sm font-semibold text-[#005F56]">Kontakt</div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Book en workshop
        </h2>
        <p className="text-muted mt-2 max-w-2xl">
          Skriv kort mål, deltakerantall og ønsket format (3t / 1/2 dag / 1 dag) – så foreslår jeg opplegg.
        </p>
      </div>

      <Card className="p-6">
        <ContactForm />
      </Card>
    </section>
  );
}