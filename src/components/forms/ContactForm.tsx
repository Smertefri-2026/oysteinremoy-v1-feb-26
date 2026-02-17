"use client";

import { useState } from "react";
import Turnstile from "react-turnstile";
import Button from "@/components/ui/Button";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // Hvis du vil kreve Turnstile før sending:
    if (siteKey && !turnstileToken) {
      setState("error");
      setError("Bekreft at du ikke er en robot (Turnstile).");
      return;
    }

    setState("sending");

    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      topic: (form.elements.namedItem("topic") as HTMLSelectElement)?.value || "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      turnstileToken, // kan være null hvis siteKey ikke er satt
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Kunne ikke sende. Prøv igjen om litt.");
      }

      setState("sent");
      form.reset();
      setTurnstileToken(null);
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

      {/* Turnstile (vises bare hvis siteKey finnes) */}
      {siteKey ? (
        <div className="pt-2">
          <Turnstile
            sitekey={siteKey}
            onVerify={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken(null)}
          />
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="primary" disabled={state === "sending"}>
          {state === "sending" ? "Sender…" : "Send"}
        </Button>

        {state === "sent" ? (
          <div className="text-sm font-semibold text-[#005F56]">
            Takk! Meldingen er sendt.
          </div>
        ) : null}

        {state === "error" ? (
          <div className="text-sm font-semibold text-red-600">
            {error || "Noe gikk galt."}
          </div>
        ) : null}
      </div>
    </form>
  );
}