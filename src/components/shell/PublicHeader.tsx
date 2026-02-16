"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };

export default function PublicHeader({
  brandHref = "/",
  links = [
    { href: "/om", label: "Om" },
    { href: "/markedsforing", label: "Markedsføring" },
    { href: "/foredrag", label: "Foredrag" },
    { href: "/kurs", label: "Kurs" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  ctaLabel,
  ctaHref,
}: {
  brandHref?: string;
  links?: Item[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Fargerik header (DigiMat-ish / premium) */}
      <div className="bg-linear-to-r from-[#003366] to-[#005F56]">
        <Container className="py-4">
          <div className="flex items-center justify-between gap-3">
            {/* Logo / Brand */}
            <Link href={brandHref} aria-label="Øystein Remøy" className="flex items-center">
              <span className="font-logo text-4xl leading-none tracking-tight drop-shadow-sm">
                <span style={{ color: "#FFFFFF" }}>Øystein</span>{" "}
                <span style={{ color: "#D9FFF7" }}>Remøy</span>
              </span>
            </Link>

            {/* Desktop nav (hvit) */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={[
                      "px-3 py-2 text-sm font-semibold rounded-full transition",
                      "text-white/90 hover:text-white hover:bg-white/10",
                      active ? "bg-white/15 text-white" : "",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              {ctaLabel && ctaHref ? (
                <Link href={ctaHref} className="hidden md:block">
                  <Button
                    variant="ghost"
                    className="rounded-full bg-white text-[#003366] hover:bg-white/95 border border-white/30"
                  >
                    {ctaLabel}
                  </Button>
                </Link>
              ) : null}

              {/* Mobile menu toggle */}
              <button
                className="md:hidden rounded-full px-4 py-2 text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Lukk meny" : "Åpne meny"}
              >
                {open ? "Lukk" : "Meny"}
              </button>
            </div>
          </div>

          {/* Mobile panel */}
          {open ? (
            <div className="md:hidden mt-4 rounded-(--radius) bg-white/10 p-3">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 font-semibold text-white/90 hover:text-white hover:bg-white/10 transition"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}

                {ctaLabel && ctaHref ? (
                  <Link href={ctaHref} onClick={() => setOpen(false)} className="mt-2">
                    <Button
                      fullWidth
                      variant="ghost"
                      className="rounded-full bg-white text-[#003366] hover:bg-white/95 border border-white/30"
                    >
                      {ctaLabel}
                    </Button>
                  </Link>
                ) : null}
              </div>
            </div>
          ) : null}
        </Container>
      </div>
    </header>
  );
}