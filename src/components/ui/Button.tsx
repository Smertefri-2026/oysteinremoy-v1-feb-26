import React from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  fullWidth?: boolean;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--accent)] text-[color:var(--accent-ink)] hover:bg-[color:var(--accent-hover)] active:translate-y-[1px]",
  secondary:
    "bg-[color:var(--brand)] text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-hover)] active:translate-y-[1px]",
  ghost:
    "bg-transparent text-[color:var(--text)] hover:bg-[color:var(--brand-soft)] active:translate-y-[1px]",
};

export default function Button({
  className = "",
  variant = "primary",
  fullWidth = false,
  asChild = false,
  children,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = [
    "inline-flex items-center justify-center gap-2",
    "rounded-full px-5 py-3 text-sm font-semibold",
    "transition select-none",
    fullWidth ? "w-full" : "",
    variants[variant],
    className,
  ].join(" ");

  if (asChild) {
    const onlyChild = React.Children.only(children) as React.ReactElement<any>;
    return React.cloneElement(onlyChild, {
      className: [onlyChild.props?.className ?? "", classes].join(" ").trim(),
    });
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}