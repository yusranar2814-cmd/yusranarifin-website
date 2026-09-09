import type { ComponentPropsWithoutRef } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = ComponentPropsWithoutRef<"section"> & { contained?: boolean };

export function Section({
  children,
  className = "",
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section className={`py-[var(--section-space)] ${className}`} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
