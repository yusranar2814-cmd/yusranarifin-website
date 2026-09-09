import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold">Yusran Arifin</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">Personal website.</p>
        </div>
        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-5 gap-y-3">
          {navigationItems.map((item) => (
            <Link className="text-sm text-[color:var(--color-muted)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:text-[color:var(--color-charcoal)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
