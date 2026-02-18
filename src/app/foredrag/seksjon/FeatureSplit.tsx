// src/app/foredrag/seksjon/FeatureSplit.tsx
import type { LucideIcon } from "lucide-react";

type Props = {
  badge?: string;
  title: string;
  description?: string;
  bullets?: string[];
  Icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  flip?: boolean;
};

export default function FeatureSplit({
  badge,
  title,
  description,
  bullets = [],
  Icon,
  imageSrc,
  imageAlt,
  flip = false,
}: Props) {
  return (
    <section
      className={[
        // “Forside-følelse”: enkel, flat, lite støy
        "rounded-(--radius) bg-surface border border-[rgba(2,6,23,0.08)] shadow-sm",
        // Mobil først: mindre padding
        "p-4 sm:p-6 md:p-8",
        // Layout
        "grid gap-5 md:gap-6 md:grid-cols-2 md:items-center",
      ].join(" ")}
    >
      {/* TEXT */}
      <div className={flip ? "md:order-2" : ""}>
        {badge ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-surface px-3 py-1 text-xs font-semibold">
            {Icon ? (
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/60 border border-[rgba(2,6,23,0.08)]">
                <Icon className="h-4 w-4 text-[#003366]" />
              </span>
            ) : null}
            {badge}
          </div>
        ) : null}

        <h2 className="mt-3 text-xl sm:text-2xl font-extrabold tracking-tight">
          {title}
        </h2>

        {description ? (
          <p className="mt-2 text-muted max-w-prose text-sm sm:text-base">
            {description}
          </p>
        ) : null}

        {bullets.length ? (
          <ul className="mt-4 grid gap-2 text-sm">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#005F56]" />
                <span className="text-muted">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* IMAGE (uten “boks i boks”) */}
      <div className={flip ? "md:order-1" : ""}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="w-full h-auto rounded-2xl border border-[rgba(2,6,23,0.08)]"
          />
        ) : (
          <div className="aspect-video rounded-2xl border border-[rgba(2,6,23,0.08)] bg-[linear-gradient(135deg,rgba(0,95,86,0.08),rgba(0,51,102,0.08))]" />
        )}
      </div>
    </section>
  );
}