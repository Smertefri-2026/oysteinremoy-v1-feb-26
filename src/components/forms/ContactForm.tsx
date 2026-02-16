"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const endpoint = useMemo(() => {
    // Hvis du senere lager en Cloudflare Worker/Pages endpoint:
    // sett NEXT_PUBLIC_CONTACT_ENDPOINT i .env.local
    // eksempel: https://your-worker.your-subdomain.workers.dev/contact
    return process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "";
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Hvis du ikke har endpoint enda: fallback til mailto
    if (!endpoint) {
      const navn = String(fd.get("name") || "");
      const email = String(fd.get("email") || "");
      const tema = String(fd.get("topic") || "");
      const melding = String(fd.get("message") || "");

      const subject = encodeURIComponent(`Kontakt: ${tema || "Forespørsel"}`);
      const body = encodeURIComponent(
        `Navn: ${navn}\nE-post: ${email}\nTema: ${tema}\n\nMelding:\n${melding}\n`
      );

      window.location.href = `mailto:post@oystein.no?subject=${subject}&body=${body}`;
      setState("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        throw new Error("Kunne ikke sende. Prøv igjen om litt.");
      }

      setState("sent");
      form.reset();
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Noe gikk galt.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-semibold">Navn</label>
          <input
            name="name"
            required
            className="rounded-(--radius) border border-[rgba(2,6,23,0.12)] bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,95,86,0.25)]"
            placeholder="Ditt navn"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold">E-post</label>
          <input
            name="email"
            type="email"
            required
            className="rounded-(--radius) border border-[rgba(2,6,23,0.12)] bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,95,86,0.25)]"
            placeholder="navn@firma.no"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold">Hva gjelder det?</label>
        <select
          name="topic"
          className="rounded-(--radius) border border-[rgba(2,6,23,0.12)] bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,95,86,0.25)]"
          defaultValue="Markedsføring"
        >
          <option>Markedsføring</option>
          <option>Foredrag</option>
          <option>Kurs</option>
          <option>Annet</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold">Melding</label>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-(--radius) border border-[rgba(2,6,23,0.12)] bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,95,86,0.25)]"
          placeholder="Skriv kort hva du ønsker, mål og tidslinje…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          variant="primary"
          disabled={state === "sending"}
        >
          {state === "sending" ? "Sender…" : "Send"}
        </Button>

        {state === "sent" ? (
          <div className="text-sm font-semibold text-[#005F56]">
            Takk! Meldingen er klargjort/sendt.
          </div>
        ) : null}

        {state === "error" ? (
          <div className="text-sm font-semibold text-red-600">
            {error || "Noe gikk galt."}
          </div>
        ) : null}

        {!endpoint ? (
          <div className="text-sm text-muted">
            (Foreløpig åpner dette e-postklienten din. Når Cloudflare-endpoint er klar, går det automatisk.)
          </div>
        ) : null}
      </div>
    </form>
  );
}