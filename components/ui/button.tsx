import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] text-[color:var(--color-charcoal)] hover:-translate-y-px hover:border-[color:var(--color-charcoal)] hover:bg-[color:var(--color-charcoal)] hover:text-[color:var(--color-off-white)] active:translate-y-0",
    secondary: "border border-[color:var(--color-border-strong)] text-[color:var(--color-charcoal)] hover:-translate-y-px hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] active:translate-y-0",
  };

  return (
    <Link
      className={`inline-flex min-h-[var(--control-height)] items-center justify-center px-5 text-[0.8125rem] font-semibold tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-[var(--duration-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
