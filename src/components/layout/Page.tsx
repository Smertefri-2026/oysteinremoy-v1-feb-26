import React from "react";
import Container from "@/components/ui/Container";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  spacing?: "tight" | "normal" | "roomy";
  size?: "sm" | "md" | "lg";
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
  size = "lg",
}: Props) {
  const hasHeader = !!title || !!subtitle || !!actions;

  return (
    <main className="min-h-screen bg-bg text-text">
      <Container className={`py-8 sm:py-12 ${spacingMap[spacing]}`} size={size}>
        {hasHeader ? (
          <header className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {title ? (
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {title}
                </h1>
              ) : null}
              {subtitle ? <p className="mt-2 text-muted">{subtitle}</p> : null}
            </div>
            {actions ? <div className="shrink-0">{actions}</div> : null}
          </header>
        ) : null}

        {children}
      </Container>
    </main>
  );
}