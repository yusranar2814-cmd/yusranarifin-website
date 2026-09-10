import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Insights",
  description: "Catatan Yusran Arifin tentang marketing, bisnis, teknologi, AI, dan perjalanan belajar.",
  path: "/insights",
});

const categories = [
  {
    number: "01",
    title: "Marketing",
    description: "Tentang bagaimana orang melihat, mempertimbangkan, membeli, dan kembali kepada sebuah brand.",
    topics: ["Consumer behavior", "Digital marketing", "Growth marketing", "Marketing funnel", "CRM & retention", "Campaign & brand strategy"],
  },
  {
    number: "02",
    title: "Business",
    description: "Tentang bagaimana sebuah bisnis dibangun agar tidak hanya tumbuh, tetapi juga bisa berjalan dengan sistem yang lebih sehat.",
    topics: ["Business system", "Sales", "Operations", "Team & organization", "UMKM", "Entrepreneurship"],
  },
  {
    number: "03",
    title: "AI & Technology",
    description: "Tentang bagaimana teknologi dan AI bisa digunakan untuk membuat pekerjaan menjadi lebih sederhana dan efektif.",
    topics: ["AI tools", "AI automation", "No-code / low-code", "Productivity", "Digital products", "Eksperimen teknologi"],
  },
  {
    number: "04",
    title: "Personal",
    description: "Catatan dari perjalanan membangun, belajar, bekerja, dan mencoba menjadi lebih baik.",
    topics: ["Lessons learned", "Career", "Building in public", "Personal growth", "Habits", "Life & work"],
  },
] as const;

export default function InsightsPage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label">01 — Insights</p>
              <Heading as="h1" className="type-display mt-6 max-w-5xl">
                Hal-hal yang sedang saya pikirkan.
              </Heading>
            </div>
            <div className="max-w-md self-end lg:col-span-3">
              <p className="text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Catatan tentang marketing, bisnis, teknologi, AI, dan pengalaman yang saya temui sepanjang perjalanan.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="categories-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-3">
              <p className="type-label">02 — Topik</p>
              <Heading as="h2" className="type-title mt-5" id="categories-title">
                Ruang untuk memahami dan mencatat.
              </Heading>
            </div>
            <div className="lg:col-span-9">
              <ol className="border-t border-[color:var(--color-border)]">
                {categories.map((category) => (
                  <li className="grid gap-5 border-b border-[color:var(--color-border)] py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6 sm:py-10 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(14rem,0.65fr)] lg:gap-x-8 lg:py-14" key={category.number}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">{category.number}</p>
                    <div>
                      <Heading as="h3" className="text-4xl leading-none sm:text-5xl lg:text-6xl">
                        {category.title}
                      </Heading>
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                        {category.description}
                      </p>
                    </div>
                    <ul aria-label={`Topik ${category.title}`} className="flex flex-wrap content-start gap-x-4 gap-y-2 text-sm leading-relaxed text-[color:var(--color-muted)] sm:col-start-2 lg:col-start-3">
                      {category.topics.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:color-mix(in_srgb,var(--color-charcoal)_4%,var(--color-off-white))]" aria-labelledby="selected-insights-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">03 — Selected insights</p>
              <Heading as="h2" className="type-title mt-5" id="selected-insights-title">
                Selected Insights
              </Heading>
            </div>
            <div className="flex min-h-56 items-end border-t border-[color:var(--color-border)] pt-8 lg:col-span-9 lg:min-h-72 lg:pt-10">
              <p className="max-w-2xl font-[family-name:var(--font-sans)] text-3xl leading-[1.08] tracking-[var(--tracking-heading)] text-[color:var(--color-muted)] sm:text-4xl lg:text-5xl">
                Saya masih membangun ruang ini. Tulisan dan catatan akan hadir secara bertahap.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-olive)] text-[color:var(--color-off-white)]" aria-labelledby="insights-contact-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] lg:col-span-3">Mari terhubung</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl" id="insights-contact-title">
                Belum menemukan yang Anda cari?
              </Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">
                Saya masih terus menulis dan belajar. Kalau ada topik yang ingin dibahas, mari ngobrol.
              </p>
              <Button className="mt-8 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/kontak">
                Mari ngobrol <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
