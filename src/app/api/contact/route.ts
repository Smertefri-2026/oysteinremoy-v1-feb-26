// /src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // viktig på Vercel for Resend

type Payload = {
  name: string;
  email: string;
  topic: string;
  message: string;
  turnstileToken?: string | null;
};

async function verifyTurnstile(token: string, secret: string) {
  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = (await res.json()) as {
    success?: boolean;
    "error-codes"?: string[];
  };
  return data;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;
  if (!body)
    return NextResponse.json(
      { ok: false, error: "Ugyldig payload" },
      { status: 400 }
    );

  const { name, email, topic, message, turnstileToken } = body;

  // 1) Turnstile (valgfritt, men anbefalt i prod)
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (secret) {
    if (!turnstileToken) {
      return NextResponse.json(
        { ok: false, error: "Mangler Turnstile-token." },
        { status: 400 }
      );
    }

    const result = await verifyTurnstile(turnstileToken, secret);
    if (!result?.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Turnstile-feil. Prøv igjen.",
          details: result?.["error-codes"] || [],
        },
        { status: 400 }
      );
    }
  }

  // 2) Resend
  const apiKey = process.env.RESEND_API_KEY;

  // ✅ Støtt både LEADS_* og CONTACT_* (fallback)
  const to = process.env.LEADS_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;

  if (!apiKey)
    return NextResponse.json(
      { ok: false, error: "Mangler RESEND_API_KEY" },
      { status: 500 }
    );

  if (!to)
    return NextResponse.json(
      { ok: false, error: "Mangler LEADS_TO_EMAIL / CONTACT_TO_EMAIL" },
      { status: 500 }
    );

  if (!from)
    return NextResponse.json(
      { ok: false, error: "Mangler LEADS_FROM_EMAIL / CONTACT_FROM_EMAIL" },
      { status: 500 }
    );

  const resend = new Resend(apiKey);

  const subject = `Kontakt (${topic || "Forespørsel"}) – ${name || "Ukjent"}`;
  const text = `Navn: ${name}
E-post: ${email}
Tema: ${topic}

Melding:
${message}
`;

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email || undefined, // gjør at du kan svare direkte
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Kunne ikke sende e-post." },
      { status: 500 }
    );
  }
}