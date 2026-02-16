import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
} as const;

export default function Container({ children, className = "", size = "lg" }: Props) {
  return (
    <div className={`mx-auto w-full ${sizeMap[size]} px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}