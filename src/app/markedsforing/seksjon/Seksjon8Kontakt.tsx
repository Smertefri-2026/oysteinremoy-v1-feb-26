import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export default function Seksjon8Kontakt() {
  return (
    <section className="space-y-6" id="kontakt">
      <div>
        <div className="text-sm font-semibold text-[#005F56]">Kontakt</div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Få et konkret forslag til neste steg
        </h2>
        <p className="text-muted mt-2 max-w-2xl">
          Skriv kort hva du selger, hvem du selger til, og hva du ønsker å oppnå – så svarer jeg med et
          forslag til plan og prioritering.
        </p>
      </div>

      <Card className="p-6">
        <ContactForm />
      </Card>

      <div className="text-sm text-muted">
        Tips: Legg gjerne ved “mål + tidslinje + budsjett” hvis du ønsker at jeg foreslår en konkret pakke.
      </div>
    </section>
  );
}