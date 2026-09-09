import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)] hover:bg-[color:var(--color-olive)]",
    secondary: "border border-[color:var(--color-charcoal)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-charcoal)] hover:text-[color:var(--color-off-white)]",
  };

  return (
    <Link
      className={`inline-flex min-h-[var(--control-height)] items-center justify-center px-5 text-sm font-medium transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
