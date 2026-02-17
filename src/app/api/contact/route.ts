// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // viktig: Resend SDK kjører på Node, ikke Edge

type Payload = {
  name: string;
  email: string;
  topic: string;
  message: string;
  turnstileToken?: string | null;
};

function isEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) throw new Error("TURNSTILE_SECRET_KEY mangler på server.");

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);

  const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });

  const data = (await r.json()) as { success: boolean; "error-codes"?: string[] };
  if (!data?.success) {
    const codes = data?.["error-codes"]?.join(", ") || "unknown";
    throw new Error(`Turnstile-feil: ${codes}`);
  }
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    const name = String(data?.name || "").trim();
    const email = String(data?.email || "").trim();
    const topic = String(data?.topic || "").trim();
    const message = String(data?.message || "").trim();
    const token = data?.turnstileToken || null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Navn, e-post og melding må fylles ut." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Ugyldig e-postadresse." },
        { status: 400 }
      );
    }

    // ✅ Turnstile: hvis du vil KREVE den i prod:
    // - enklest: krev hvis token finnes eller hvis du ønsker alltid
    // Her: Krev hvis TURNSTILE_SECRET_KEY er satt (prod), ellers hopp over.
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!token) {
        return NextResponse.json(
          { ok: false, error: "Bekreft at du ikke er en robot (Turnstile)." },
          { status: 400 }
        );
      }
      await verifyTurnstile(token);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY mangler." },
        { status: 500 }
      );
    }
    if (!to || !from) {
      return NextResponse.json(
        { ok: false, error: "CONTACT_TO_EMAIL eller CONTACT_FROM_EMAIL mangler." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `Kontakt (${topic || "Forespørsel"}): ${name}`;
    const text = [
      `Navn: ${name}`,
      `E-post: ${email}`,
      `Tema: ${topic || "-"}`,
      ``,
      `Melding:`,
      message,
    ].join("\n");

    const result = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email, // superviktig: svar går til kunden
    });

    // Resend kan returnere { data, error }
    // @ts-ignore
    if (result?.error) {
      // @ts-ignore
      const msg = result.error?.message || "Resend-feil";
      return NextResponse.json({ ok: false, error: msg }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Noe gikk galt." },
      { status: 500 }
    );
  }
}