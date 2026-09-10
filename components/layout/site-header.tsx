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
      <Link aria-current={isActive ? "page" : undefined} className={`relative py-2 text-[0.75rem] font-bold uppercase tracking-[0.08em] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[color:var(--color-green)] after:transition-[width] after:duration-[var(--duration-standard)] after:ease-[var(--ease-standard)] motion-reduce:transition-none ${isActive ? "text-[color:var(--color-charcoal)] after:w-full" : "text-[color:var(--color-muted)] after:w-0 hover:text-[color:var(--color-charcoal)] hover:after:w-full"}`} href={item.href} key={item.href} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  });
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:color-mix(in_srgb,var(--color-off-white)_94%,transparent)] backdrop-blur-sm">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-6 py-3">
        <Link className="group flex items-center gap-2 text-sm font-extrabold tracking-[-0.04em]" href="/">
          <span className="inline-block size-2.5 bg-[color:var(--color-green)] transition-transform duration-[var(--duration-standard)] group-hover:rotate-45 motion-reduce:transition-none" />
          Yusran Arifin
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-5 xl:flex"><NavigationLinks /></nav>
        <button aria-controls="mobile-navigation" aria-expanded={isOpen} className="inline-flex min-h-[var(--control-height)] min-w-[var(--control-height)] items-center justify-center border border-[color:var(--color-charcoal)] text-[0.75rem] font-bold uppercase tracking-[0.08em] transition-colors hover:border-[color:var(--color-green)] hover:bg-[color:var(--color-green)] xl:hidden" onClick={() => setIsOpen((current) => !current)} type="button">
          <span className="sr-only">{isOpen ? "Tutup navigasi" : "Buka navigasi"}</span><span aria-hidden="true">{isOpen ? "Tutup" : "Menu"}</span>
        </button>
      </Container>
      <div className={`grid transition-[grid-template-rows] duration-[var(--duration-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none xl:hidden ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`} id="mobile-navigation">
        <div className="overflow-hidden"><Container><nav aria-label="Navigasi seluler" className="flex flex-col gap-1 border-t border-[color:var(--color-border)] py-5"><NavigationLinks onNavigate={() => setIsOpen(false)} /></nav></Container></div>
      </div>
    </header>
  );
}
