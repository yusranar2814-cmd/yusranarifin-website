import type { ComponentPropsWithoutRef } from "react";

export function Card({ className = "", ...props }: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={`border-t border-[color:var(--color-border)] pt-[var(--space-6)] ${className}`.trim()}
      {...props}
    />
  );
}
