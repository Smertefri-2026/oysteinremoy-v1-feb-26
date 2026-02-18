// src/components/layout/Page.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  spacing?: "tight" | "normal" | "roomy";
};

const spacingMap = {
  tight: "space-y-6",
  normal: "space-y-8",
  roomy: "space-y-10",
} as const;

export default function Page({
  children,
  title,
  subtitle,
  actions,
  spacing = "roomy",
}: Props) {
  const hasHeader = !!title || !!subtitle || !!actions;

  return (
    <div className={spacingMap[spacing]}>
      {hasHeader ? (
        <header
          className={[
            "flex flex-col gap-3",
            "md:flex-row md:items-start md:justify-between md:gap-6",
          ].join(" ")}
        >
          <div className="min-w-0">
            {title ? (
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h1>
            ) : null}
            {subtitle ? <p className="mt-2 text-muted max-w-prose">{subtitle}</p> : null}
          </div>

          {actions ? <div className="shrink-0 md:pt-1">{actions}</div> : null}
        </header>
      ) : null}

      {children}
    </div>
  );
}