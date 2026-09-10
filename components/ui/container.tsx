import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`mx-auto w-full max-w-[var(--layout-max-width)] px-[var(--layout-gutter)] ${className}`.trim()}
      {...props}
    />
  );
}
