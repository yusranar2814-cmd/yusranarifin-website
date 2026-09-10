import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <Container className="flex flex-col gap-9 py-12 sm:flex-row sm:items-end sm:justify-between lg:py-14">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-2xl leading-none tracking-[var(--tracking-heading)]">Yusran Arifin</p>
          <p className="mt-3 text-[0.8125rem] text-[color:var(--color-muted)]">Personal website.</p>
        </div>
        <nav aria-label="Navigasi footer" className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 sm:justify-end">
          {navigationItems.map((item) => (
            <Link className="text-link py-1 text-[0.8125rem] text-[color:var(--color-muted)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:text-[color:var(--color-charcoal)] motion-reduce:transition-none" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
