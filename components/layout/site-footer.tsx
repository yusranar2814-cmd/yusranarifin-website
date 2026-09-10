import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/lib/constants";

export function SiteFooter() {
  return <footer className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]"><Container className="flex flex-col gap-10 py-12 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-2 text-sm font-extrabold tracking-[-0.035em]"><span className="size-2.5 bg-[color:var(--color-green)]" />Yusran Arifin</div><p className="mt-3 text-sm text-[color:color-mix(in_srgb,var(--color-off-white)_58%,transparent)]">Marketing × Business × Technology</p></div><nav aria-label="Navigasi footer" className="flex max-w-xl flex-wrap gap-x-5 gap-y-3">{navigationItems.map((item) => <Link className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[color:color-mix(in_srgb,var(--color-off-white)_64%,transparent)] transition-colors hover:text-[color:var(--color-green)]" href={item.href} key={item.href}>{item.label}</Link>)}</nav></Container></footer>;
}
