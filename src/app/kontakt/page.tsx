import type { Metadata } from "next";
import Page from "@/components/layout/Page";

export const metadata: Metadata = {
  title: "Kontakt Øystein Remøy",
  description: "Kontakt for foredrag, kurs og markedsføring.",
};

export default function KontaktPage() {
  return (
    <Page
      title="Kontakt"
      subtitle="Send en kort forespørsel – så svarer jeg så raskt jeg kan."
      spacing="roomy"
      size="lg"
    >
      <section className="rounded-(--radius) border border-border bg-surface p-6">
        <p className="text-muted">
          (Vi kobler på samme kontaktskjema som du bruker på de andre sidene når du vil.)
        </p>

        <div className="mt-6 grid gap-3">
          <a className="rounded-full px-5 py-2 font-semibold bg-brand text-white hover:bg-(--brand-hover) transition w-fit" href="mailto:post@oysteinremoy.no">
            Send e-post
          </a>
        </div>
      </section>
    </Page>
  );
}