import ContactForm from "@/components/forms/ContactForm";
import Card from "@/components/ui/Card";

export default function Seksjon8Kontakt() {
  return (
    <section className="space-y-6" id="kontakt">
      <div>
        <div className="text-sm font-semibold text-[#005F56]">Kontakt</div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Book en forespørsel
        </h2>
        <p className="text-muted mt-2 max-w-2xl">
          Fortell litt om mål, antall deltakere og ønsket dato – så svarer jeg raskt.
        </p>
      </div>

      <Card className="p-6">
        <ContactForm />
      </Card>
    </section>
  );
}