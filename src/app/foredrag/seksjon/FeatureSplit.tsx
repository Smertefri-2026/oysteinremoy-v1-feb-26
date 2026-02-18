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
        "rounded-(--radius)",
        "border border-[rgba(2,6,23,0.08)]", // mykere ramme
        "bg-surface",
        "p-6 md:p-8",
        "grid gap-6 md:grid-cols-2 md:items-center",
      ].join(" ")}
    >
      {/* TEXT */}
      <div className={flip ? "md:order-2" : ""}>
        {badge ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.10)] bg-(--surface-2) px-3 py-1 text-xs font-semibold">
            {Icon ? (
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white border border-[rgba(2,6,23,0.08)]">
                <Icon className="h-4 w-4 text-[#003366]" />
              </span>
            ) : null}
            {badge}
          </div>
        ) : null}

        <h2 className="mt-3 text-xl md:text-2xl font-extrabold tracking-tight">
          {title}
        </h2>

        {description ? (
          <p className="mt-2 text-muted max-w-prose">{description}</p>
        ) : null}

        {bullets?.length ? (
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

      {/* IMAGE */}
      <div className={flip ? "md:order-1" : ""}>
        <div className="grid place-items-center">
          <div
            className={[
              "w-full max-w-115",
              "rounded-2xl",
              "bg-(--surface-2)", // gjør at det ikke ser “svart ramme” ut
              "border border-[rgba(2,6,23,0.06)]", // enda mykere border
              "shadow-[0_10px_25px_rgba(2,6,23,0.08)]", // subtil premium shadow
              "p-3 md:p-4", // litt luft rundt bildet
            ].join(" ")}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt || ""}
                className="w-full h-auto rounded-xl"
              />
            ) : (
              // Hvis du mangler bilde: viser en pen placeholder uten “svart ramme”
              <div className="aspect-video rounded-xl bg-[linear-gradient(135deg,rgba(0,95,86,0.10),rgba(0,51,102,0.10))]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}