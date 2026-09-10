"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/lib/constants";

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return navigationItems.map((item) => {
    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

    return (
      <Link
        aria-current={isActive ? "page" : undefined}
        className={`text-link relative py-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none ${
          isActive
            ? "text-[color:var(--color-accent)] after:scale-x-100"
            : "text-[color:var(--color-muted)] hover:text-[color:var(--color-charcoal)]"
        }`.trim()}
        href={item.href}
        key={item.href}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  });
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--color-border)] bg-[color:var(--color-off-white)]">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-6 py-3">
        <Link className="text-[0.8125rem] font-bold tracking-[-0.025em] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:text-[color:var(--color-accent)] motion-reduce:transition-none" href="/">
          Yusran Arifin
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:gap-8 md:flex">
          <NavigationLinks />
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="inline-flex min-h-[var(--control-height)] min-w-[var(--control-height)] items-center justify-center border border-[color:var(--color-border-strong)] px-3 text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-[background-color,border-color,color] duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:border-[color:var(--color-charcoal)] hover:bg-[color:var(--color-charcoal)] hover:text-[color:var(--color-off-white)] motion-reduce:transition-none md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">{isOpen ? "Tutup navigasi" : "Buka navigasi"}</span>
          <span aria-hidden="true">{isOpen ? "Tutup" : "Menu"}</span>
        </button>
      </Container>

      <div
        className={`grid transition-[grid-template-rows] duration-[var(--duration-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none md:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        id="mobile-navigation"
      >
        <div className="overflow-hidden">
          <Container>
            <nav aria-label="Navigasi seluler" className="flex flex-col gap-3 border-t border-[color:var(--color-border)] py-5">
              <NavigationLinks onNavigate={() => setIsOpen(false)} />
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
