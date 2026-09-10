import type { ComponentPropsWithoutRef, ElementType } from "react";

type HeadingProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Heading<T extends ElementType = "h2">({
  as,
  className = "",
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";

  return (
    <Component
      className={`font-[family-name:var(--font-sans)] text-balance font-bold tracking-[var(--tracking-heading)] text-[color:var(--color-text)] ${className}`.trim()}
      {...props}
    />
  );
}
