import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Work With Me",
  description: "Kesempatan untuk bekerja bersama Yusran melalui training, mentoring, speaking, dan kolaborasi.",
  path: "/work-with-me",
});

type Opportunity = {
  number: string;
  title: string;
  category: string;
  description: string;
  additionalDescription?: string;
  details?: readonly string[];
  cta: string;
};

const opportunities: readonly Opportunity[] = [
  {
    number: "01",
    title: "Training & Workshop",
    category: "Untuk Tim · Bisnis · Komunitas",
    description:
      "Sesi training atau workshop yang dirancang untuk membantu tim memahami marketing, sales, digital marketing, customer journey, atau membangun sistem kerja yang lebih terarah.",
    details: ["Corporate training", "Workshop", "In-house session", "Community workshop"],
    cta: "Diskusikan Training",
  },
  {
    number: "02",
    title: "One on One Mentoring",
    category: "Personal · Marketing · Business",
    description: "Sesi pendampingan personal untuk membahas tantangan marketing, sales, bisnis, atau sistem yang sedang Anda bangun.",
    additionalDescription:
      "Kita bisa mulai dari masalah yang sedang dihadapi, melihat kondisi saat ini, lalu mencari langkah yang paling masuk akal untuk dilakukan berikutnya.",
    cta: "Diskusikan Mentoring",
  },
  {
    number: "03",
    title: "Speaker / Guest Session",
    category: "Event · Webinar · Podcast · Community",
    description: "Berbagi pengalaman dan insight melalui seminar, webinar, podcast, community session, maupun event lainnya.",
    details: [
      "Marketing & Consumer Behavior",
      "Digital Marketing",
      "Marketing to Revenue",
      "Business & Growth",
      "AI & Technology for Business",
    ],
    cta: "Undang Saya",
  },
  {
    number: "04",
    title: "Collaboration",
    category: "Brand · Business · Community · Project",
    description: "Terbuka untuk kolaborasi yang relevan dengan marketing, bisnis, digital product, teknologi, maupun community.",
    additionalDescription:
      "Bisa berupa campaign, project, content collaboration, knowledge sharing, atau bentuk kerja sama lainnya.",
    cta: "Mari Diskusikan",
  },
] as const;

export default function WorkWithMePage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="type-label">01 — Work With Me</p>
              <Heading as="h1" className="type-display mt-6 max-w-5xl">
                Mari membangun sesuatu bersama.
              </Heading>
            </div>
            <p className="max-w-md self-end text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg lg:col-span-4">
              Tidak semua kebutuhan harus dimulai dari sebuah produk. Beberapa hal justru lebih baik dibicarakan, didiskusikan, dan dikerjakan bersama.
            </p>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="opportunities-title">
        <Container>
          <div className="border-t border-[color:var(--color-border)] pt-7 lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="mb-10 lg:col-span-3 lg:mb-0">
              <p className="type-label">02 — Cara bekerja bersama</p>
              <Heading as="h2" className="type-title mt-5" id="opportunities-title">
                Mari mulai dari kebutuhan yang ada.
              </Heading>
            </div>

            <div className="lg:col-span-9">
              <div className="border-t border-[color:var(--color-border)]">
                {opportunities.map((opportunity) => (
                  <article className="grid gap-5 border-b border-[color:var(--color-border)] py-9 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6 sm:py-12 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(14rem,0.65fr)] lg:gap-x-8 lg:py-16" key={opportunity.number}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">{opportunity.number}</p>
                    <div>
                      <Heading as="h3" className="text-4xl leading-none sm:text-5xl lg:text-6xl">
                        {opportunity.title}
                      </Heading>
                      <p className="type-label mt-5">{opportunity.category}</p>
                    </div>
                    <div className="sm:col-start-2 lg:col-start-3">
                      <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{opportunity.description}</p>
                      {opportunity.additionalDescription ? (
                        <p className="mt-5 text-base leading-relaxed text-[color:var(--color-muted)]">{opportunity.additionalDescription}</p>
                      ) : null}
                      {opportunity.details ? (
                        <ul className="mt-6 space-y-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                          {opportunity.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      ) : null}
                      <Link className="mt-8 inline-flex text-sm font-medium text-[color:var(--color-text)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:text-[color:var(--color-olive)] motion-reduce:transition-none" href="/kontak">
                        {opportunity.cta} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]" aria-labelledby="conversation-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)] lg:col-span-3">Selanjutnya</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl" id="conversation-title">
                Punya sesuatu yang sedang dibangun?
              </Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">
                Ceritakan sedikit tentang apa yang sedang Anda kerjakan atau masalah yang sedang Anda hadapi. Kita lihat apakah ada hal yang bisa saya bantu.
              </p>
              <Link className="mt-8 inline-flex min-h-[var(--control-height)] items-center justify-center bg-[color:var(--color-off-white)] px-5 text-sm font-medium text-[color:var(--color-charcoal)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)] motion-reduce:transition-none" href="/kontak">
                Mulai percakapan <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
