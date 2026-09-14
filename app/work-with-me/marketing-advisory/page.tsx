import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Marketing Advisory",
  description:
    "Membangun arah, struktur, dan sistem marketing yang jelas dan siap di-scale up.",
  path: "/work-with-me/marketing-advisory",
});

const advisoryWhatsAppUrl =
  "https://wa.me/6281341111820?text=Halo%20Yusran%2C%20saya%20tertarik%20dengan%20Marketing%20Advisory.%20Saya%20ingin%20berdiskusi%20mengenai%20kondisi%20marketing%20bisnis%20saya.";

const process = [
  ["01", "Diagnose", "Business & Marketing"],
  ["02", "Discuss", "Find the Problem"],
  ["03", "Prioritize", "What Matters Most"],
  ["04", "Execute", "Build & Improve"],
  ["05", "Review", "Daily · Weekly · Monthly"],
] as const;

const cases = [
  ["01", "Ajaba Industry", "Marketing Leadership", "Lead Marketing"],
  ["02", "Seleraa Buah", "Marketing → Profitability", "Growth Marketing"],
  ["03", "Lazuna Chicken", "Marketing Team & System", "7 → 37 Stores"],
] as const;

export default function MarketingAdvisoryPage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label">01 — Marketing Advisory</p>
              <Heading as="h1" className="type-display mt-6 max-w-6xl">
                Marketing yang punya arah, struktur, dan sistem.
              </Heading>
            </div>
            <div className="max-w-md self-end lg:col-span-3">
              <p className="text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Untuk bisnis yang ingin serius membangun marketing dan siap di-scale up.
              </p>
              <a className="mt-7 inline-flex min-h-[var(--control-height)] items-center justify-center bg-[color:var(--color-charcoal)] px-5 text-sm font-medium text-[color:var(--color-off-white)] transition-colors duration-[var(--duration-standard)] hover:bg-[color:var(--color-olive)]" href={advisoryWhatsAppUrl} target="_blank" rel="noreferrer">
                Diskusikan Advisory <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="outcomes-title">
        <Container>
          <div className="border-t border-[color:var(--color-border)] pt-7 lg:pt-9">
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="type-label">02 — The Outcome</p>
                <Heading as="h2" className="type-title mt-5" id="outcomes-title">Fondasi untuk scale-up.</Heading>
              </div>
            </div>
            <div className="mt-10 grid border-t border-[color:var(--color-border)] sm:grid-cols-3">
              {["Arah", "Struktur", "Sistem"].map((item, index) => (
                <div key={item} className="border-b border-[color:var(--color-border)] py-8 sm:border-b-0 sm:border-l sm:px-7 sm:first:border-l-0 sm:first:pl-0">
                  <p className="text-sm tabular-nums text-[color:var(--color-olive)]">0{index + 1}</p>
                  <Heading as="h3" className="mt-5 text-5xl sm:text-6xl">{item}</Heading>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)] sm:text-xl">
              Marketing yang lebih jelas, terstruktur, dan siap di-scale up.
            </p>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="process-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-4">
              <p className="type-label">03 — How It Works</p>
              <Heading as="h2" className="type-title mt-5" id="process-title">Mulai dari diagnosis.</Heading>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-[color:var(--color-border)]">
                {process.map(([number, title, detail]) => (
                  <div key={number} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 border-b border-[color:var(--color-border)] py-7 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(12rem,0.6fr)] sm:gap-6 lg:py-8">
                    <p className="text-sm tabular-nums text-[color:var(--color-olive)]">{number}</p>
                    <Heading as="h3" className="text-3xl sm:text-4xl">{title}</Heading>
                    <p className="col-start-2 text-sm text-[color:var(--color-muted)] sm:col-start-3 sm:pt-2">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="engagement-title">
        <Container>
          <div className="border-t border-[color:var(--color-border)] pt-7 lg:pt-9">
            <p className="type-label">04 — Engagement</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <Heading as="h2" className="type-title" id="engagement-title">Dibangun bersama, bukan sekali meeting.</Heading>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:col-span-5">
                <div>
                  <p className="text-7xl font-semibold tracking-[-0.05em] sm:text-8xl">3</p>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">bulan minimum</p>
                </div>
                <div>
                  <p className="text-7xl font-semibold tracking-[-0.05em] sm:text-8xl">3</p>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">brand maksimal</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="cases-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-4">
              <p className="type-label">05 — Selected Advisory</p>
              <Heading as="h2" className="type-title mt-5" id="cases-title">Pernah bekerja bersama.</Heading>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-[color:var(--color-border)]">
                {cases.map(([number, name, category, result]) => (
                  <article key={number} className="grid gap-5 border-b border-[color:var(--color-border)] py-8 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(11rem,0.6fr)] sm:gap-6 lg:py-10">
                    <p className="text-sm tabular-nums text-[color:var(--color-olive)]">{number}</p>
                    <div>
                      <Heading as="h3" className="text-3xl sm:text-4xl">{name}</Heading>
                      <p className="mt-2 text-sm text-[color:var(--color-muted)]">{category}</p>
                    </div>
                    <p className="text-lg font-medium sm:pt-1 sm:text-xl">{result}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
            <p className="type-label text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)] lg:col-span-3">06 — Start</p>
            <div className="lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl">
                Marketing belum siap di-scale up?
              </Heading>
              <a className="mt-8 inline-flex min-h-[var(--control-height)] items-center justify-center bg-[color:var(--color-off-white)] px-5 text-sm font-medium text-[color:var(--color-charcoal)] transition-colors duration-[var(--duration-standard)] hover:text-[color:var(--color-olive)]" href={advisoryWhatsAppUrl} target="_blank" rel="noreferrer">
                Diskusikan Marketing Advisory <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
