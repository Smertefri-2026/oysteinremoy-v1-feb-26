// src/app/om/seksjon/OmSplit.tsx
import React from "react";

type Props = {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  Icon: React.ComponentType<{ className?: string }>;
  imageSrc: string;
  imageAlt: string;
  flip?: boolean;
};

export default function OmSplit({
  badge,
  title,
  description,
  bullets,
  Icon,
  imageSrc,
  imageAlt,
  flip,
}: Props) {
  return (
  <section
  className={[
    "rounded-(--radius)",
    "border border-[rgba(2,6,23,0.08)]", // samme som foredrag/markedsføring
    "bg-surface",
    "p-6 md:p-8",
    "grid gap-6 md:grid-cols-2 md:items-center",
  ].join(" ")}
>
      <div className={flip ? "md:order-2" : ""}>
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.12)] bg-(--surface-2) px-3 py-1 text-xs font-semibold">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white border border-[rgba(2,6,23,0.10)]">
            <Icon className="h-4 w-4 text-[#003366]" />
          </span>
          {badge}
        </div>

        <h2 className="mt-3 text-xl md:text-2xl font-extrabold tracking-tight">
          {title}
        </h2>
        <p className="mt-2 text-muted max-w-prose">{description}</p>

        <ul className="mt-4 grid gap-2 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#005F56]" />
              <span className="text-muted">{b}</span>
            </li>
          ))}
        </ul>
      </div>

<div className={flip ? "md:order-1" : ""}>
  <div className="grid place-items-center">
    <div
      className={[
        "w-full max-w-115",
        "rounded-2xl",
        "bg-(--surface-2)",
        "border border-[rgba(2,6,23,0.06)]",
        "shadow-[0_10px_25px_rgba(2,6,23,0.08)]",
        "p-3 md:p-4",
      ].join(" ")}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto rounded-xl"
      />
    </div>
  </div>
</div>
    </section>
  );
}