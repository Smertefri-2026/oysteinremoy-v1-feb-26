import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const name = String(data?.name || "").trim();
    const email = String(data?.email || "").trim();
    const topic = String(data?.topic || "").trim();
    const message = String(data?.message || "").trim();
    const turnstileToken = data?.turnstileToken ? String(data.turnstileToken) : null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Mangler navn, e-post eller melding." },
        { status: 400 }
      );
    }

    // 1) Turnstile server-side verify (hvis du har aktivert widget)
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    if (siteKey) {
      if (!secretKey) {
        return NextResponse.json(
          { ok: false, error: "TURNSTILE_SECRET_KEY mangler i miljøvariabler." },
          { status: 500 }
        );
      }
      if (!turnstileToken) {
        return NextResponse.json(
          { ok: false, error: "Bekreft at du ikke er en robot." },
          { status: 400 }
        );
      }

      const ip =
        req.headers.get("cf-connecting-ip") ||
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        undefined;

      const form = new URLSearchParams();
      form.append("secret", secretKey);
      form.append("response", turnstileToken);
      if (ip) form.append("remoteip", ip);

      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form.toString(),
      });

      const verify = await verifyRes.json();

      if (!verify?.success) {
        return NextResponse.json(
          { ok: false, error: "Turnstile feilet. Prøv igjen.", details: verify },
          { status: 400 }
        );
      }
    }

    // 2) Send e-post via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY mangler i miljøvariabler." },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "post@oystein.no";
    const from = process.env.CONTACT_FROM_EMAIL || "Kontakt <onboarding@resend.dev>";

    const resend = new Resend(resendKey);

    const subject = `Kontakt (${topic || "Forespørsel"}): ${name}`;
    const text = [
      `Navn: ${name}`,
      `E-post: ${email}`,
      `Tema: ${topic || "-"}`,
      ``,
      `Melding:`,
      message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email, // så du kan svare rett til avsender
      subject,
      text,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: `Resend-feil: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Ukjent feil." },
      { status: 500 }
    );
  }
}