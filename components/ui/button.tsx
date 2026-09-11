import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & { variant?: "primary" | "secondary" };

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[color:var(--color-green)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-charcoal)] hover:text-[color:var(--color-off-white)]",
    secondary: "border border-[color:var(--color-charcoal)] bg-transparent text-[color:var(--color-charcoal)] hover:border-[color:var(--color-green)] hover:bg-[color:var(--color-green)]",
  };
  return <Link className={`inline-flex min-h-[var(--control-height)] items-center justify-center rounded-sm px-5 text-sm font-bold tracking-[-0.015em] transition-[background-color,border-color,color,transform] duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:-translate-y-px motion-reduce:transform-none motion-reduce:transition-none ${variants[variant]} ${className}`} {...props} />;
}
