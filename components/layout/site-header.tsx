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
        className={`text-sm transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none ${
          isActive
            ? "text-[color:var(--color-charcoal)]"
            : "text-[color:var(--color-muted)] hover:text-[color:var(--color-charcoal)]"
        }`}
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
    <header className="border-b border-[color:var(--color-border)]">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-6 py-4">
        <Link className="text-sm font-semibold tracking-[-0.02em]" href="/">
          Yusran Arifin
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 md:flex">
          <NavigationLinks />
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="inline-flex min-h-[var(--control-height)] min-w-[var(--control-height)] items-center justify-center border border-[color:var(--color-border-strong)] text-sm md:hidden"
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
            <nav aria-label="Navigasi seluler" className="flex flex-col gap-5 border-t border-[color:var(--color-border)] py-6">
              <NavigationLinks onNavigate={() => setIsOpen(false)} />
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
