"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
};

export default function NavLink({ href, children, className = "", exact = false }: Props) {
  const pathname = usePathname();
  const active = exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold transition",
        active ? "bg-(--accent) text-(--accent-ink)" : "text-text hover:bg-(--brand-soft)",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}