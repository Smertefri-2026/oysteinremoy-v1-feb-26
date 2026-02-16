import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={[
        "rounded-(--radius) bg-surface shadow-sm",
        "p-5 sm:p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}