import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "plain" | "soft";
};

export default function Section({ children, className = "", tone = "plain" }: Props) {
  const base = "py-14 sm:py-20";
  const bg = tone === "soft" ? "bg-brand-soft/40" : "bg-transparent";
  return (
    <section className={`${base} ${bg} ${className}`}>
      {children}
    </section>
  );
}