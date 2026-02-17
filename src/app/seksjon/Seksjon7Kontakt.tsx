import ContactForm from "@/components/forms/ContactForm";
import Card from "@/components/ui/Card";

export default function Seksjon7Kontakt() {
  return (
    <section className="space-y-6" id="kontakt">
      <div>
        <div className="text-sm font-semibold text-[#005F56]">Kontakt</div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Send en kort forespørsel
        </h2>
        <p className="text-muted mt-2 max-w-2xl">
          Fortell hva du ønsker (markedsføring, foredrag eller kurs),
          så svarer jeg så raskt jeg kan.
        </p>
      </div>

      <Card className="p-6">
        <ContactForm />
      </Card>

      <div className="text-sm text-muted">
        Tips: Skriv gjerne “mål + tidslinje + budsjett” hvis det gjelder markedsføring.
      </div>
    </section>
  );
}