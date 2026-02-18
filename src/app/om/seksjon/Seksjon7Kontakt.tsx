// src/app/om/seksjon/Seksjon7Kontakt.tsx
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export default function Seksjon7Kontakt() {
  return (
    <section className="space-y-6" id="kontakt">
      <div>
        <div className="text-sm font-semibold text-[#005F56]">Kontakt</div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Send en kort forespørsel
        </h2>
        <p className="text-muted mt-2 max-w-2xl">
          Skriv hva du ønsker, mål og tidslinje – så svarer jeg så raskt jeg kan.
        </p>
      </div>

      <Card className="p-6">
        <ContactForm />
      </Card>
    </section>
  );
}