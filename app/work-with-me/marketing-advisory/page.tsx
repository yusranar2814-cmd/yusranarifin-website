import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Marketing Advisory",
  description:
    "Pendampingan strategis untuk membangun arah, struktur, dan sistem marketing yang jelas dan siap di-scale up.",
  path: "/work-with-me/marketing-advisory",
});

const advisoryWhatsAppUrl =
  "https://wa.me/6281341111820?text=Halo%20Yusran%2C%20saya%20tertarik%20dengan%20Marketing%20Advisory.%20Saya%20ingin%20berdiskusi%20mengenai%20kondisi%20marketing%20bisnis%20saya.";

const stages = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Membongkar kondisi bisnis dan marketing dari dalam. Mulai dari data marketing, sales, customer, tim, sistem kerja, hingga laporan keuangan bila diperlukan.",
  },
  {
    number: "02",
    title: "Discuss",
    description:
      "Mendiskusikan temuan bersama owner atau decision maker untuk memahami konteks, menemukan akar masalah, dan melihat peluang yang paling relevan.",
  },
  {
    number: "03",
    title: "Prioritize",
    description:
      "Menentukan masalah dan peluang yang paling penting untuk dikerjakan lebih dulu, agar tim tidak sibuk mengerjakan terlalu banyak hal sekaligus.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Mendampingi proses implementasi. Bisa masuk ke strategy, manpower, job desk, hiring, KPI, workflow, maupun marketing system sesuai kebutuhan bisnis.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Meninjau progres dan hasil secara dinamis melalui review daily, weekly, dan monthly. Strategi dapat berubah mengikuti kondisi dan data terbaru.",
  },
] as const;

const outcomes = [
  {
    number: "01",
    title: "Arah",
    description: "Marketing punya tujuan, prioritas, dan strategi yang selaras dengan bisnis.",
  },
  {
    number: "02",
    title: "Struktur",
    description: "Role, job desk, KPI, dan kebutuhan manpower menjadi lebih jelas.",
  },
  {
    number: "03",
    title: "Sistem",
    description: "Marketing memiliki cara kerja dan proses review yang lebih terstruktur dan konsisten.",
  },
] as const;

const cases = [
  {
    number: "01",
    name: "Ajaba Industry",
    category: "Industry · Apparel · B2B",
    description:
      "Mendampingi sebagai Lead Marketing untuk mengarahkan aktivitas marketing pada bisnis industri sablon kaos, seragam, dan kebutuhan apparel.",
  },
  {
    number: "02",
    name: "Seleraa Buah",
    category: "Retail · Premium Fruit · Digital Commerce",
    description:
      "Mengembangkan pendekatan marketing plan dan digital commerce yang lebih impactful untuk bisnis retail buah premium, dengan pendekatan yang melihat marketing secara lebih menyeluruh.",
  },
  {
    number: "03",
    name: "Lazuna Chicken",
    category: "F&B · Multi Outlet · Marketing System",
    description:
      "Membantu membangun Marketing Team dan Marketing System yang lebih scalable, serta membersamai perkembangan dari 7 hingga 37 store di 4 kota/kabupaten di Sulawesi Selatan.",
  },
] as const;

export default function MarketingAdvisoryPage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="type-label">01 — Marketing Advisory</p>
              <Heading as="h1" className="type-display mt-6 max-w-6xl">
                Membangun marketing yang siap di-scale up.
              </Heading>
            </div>
            <div className="max-w-xl self-end lg:col-span-4">
              <p className="text-lg leading-relaxed text-[color:var(--color-muted)] sm:text-xl">
                Saat bisnis ingin serius membangun marketing, tetapi belum punya arah, struktur, sistem, atau leader yang tepat.
              </p>
              <a
                className="mt-8 inline-flex min-h-[var(--control-height)] items-center justify-center bg-[color:var(--color-charcoal)] px-5 text-sm font-medium text-[color:var(--color-off-white)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:bg-[color:var(--color-olive)] motion-reduce:transition-none"
                href={advisoryWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
              >
                Diskusikan Advisory <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="fit-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-4">
              <p className="type-label">02 — Apakah ini untuk Anda?</p>
              <Heading as="h2" className="type-title mt-5" id="fit-title">
                Bukan untuk semua bisnis.
              </Heading>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-2xl text-xl leading-relaxed sm:text-2xl">
                Marketing Advisory dirancang untuk bisnis yang sudah berjalan dan ingin lebih serius membangun marketing sebagai bagian dari mesin pertumbuhan bisnis.
              </p>
              <div className="mt-10 grid gap-6 border-t border-[color:var(--color-border)] sm:grid-cols-2">
                {[
                  ["01", "Sudah berjalan", "Minimal 1 tahun beroperasi dan sudah memiliki data serta aktivitas bisnis yang bisa dianalisis."],
                  ["02", "Ingin scale up", "Bisnis sudah punya traction dan ingin pertumbuhan yang lebih terarah."],
                  ["03", "Belum punya arah", "Aktivitas marketing sudah banyak, tetapi belum jelas mana yang paling berdampak."],
                  ["04", "Ingin membangun sistem & tim", "Ingin marketing lebih terstruktur dan tidak terus bergantung pada owner atau satu orang."],
                ].map(([number, title, description]) => (
                  <article key={number} className="border-b border-[color:var(--color-border)] py-6">
                    <p className="text-sm tabular-nums text-[color:var(--color-olive)]">{number}</p>
                    <Heading as="h3" className="mt-4 text-2xl sm:text-3xl">{title}</Heading>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="outcomes-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-4">
              <p className="type-label">03 — Yang dibangun</p>
              <Heading as="h2" className="type-title mt-5" id="outcomes-title">
                Marketing yang punya fondasi.
              </Heading>
            </div>
            <div className="lg:col-span-8">
              <div className="grid border-t border-[color:var(--color-border)] sm:grid-cols-3 sm:border-t-0">
                {outcomes.map((outcome) => (
                  <article key={outcome.number} className="border-b border-[color:var(--color-border)] py-7 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0">
                    <p className="text-sm tabular-nums text-[color:var(--color-olive)]">{outcome.number}</p>
                    <Heading as="h3" className="mt-5 text-4xl sm:text-5xl">{outcome.title}</Heading>
                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">{outcome.description}</p>
                  </article>
                ))}
              </div>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed sm:text-2xl">
                Hasil akhirnya: <span className="text-[color:var(--color-olive)]">marketing yang tidak hanya berjalan, tetapi siap di-scale up.</span>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="process-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-4">
              <p className="type-label">04 — Cara bekerja</p>
              <Heading as="h2" className="type-title mt-5" id="process-title">
                Tidak ada template yang dipaksakan.
              </Heading>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[color:var(--color-muted)]">
                Setiap bisnis punya kondisi yang berbeda. Karena itu, advisory dimulai dari diagnosis dan berkembang mengikuti temuan serta data.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-[color:var(--color-border)]">
                {stages.map((stage) => (
                  <article key={stage.number} className="grid gap-5 border-b border-[color:var(--color-border)] py-8 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(14rem,0.8fr)] sm:gap-6 lg:py-10">
                    <p className="text-sm tabular-nums text-[color:var(--color-olive)]">{stage.number}</p>
                    <Heading as="h3" className="text-4xl leading-none sm:text-5xl">{stage.title}</Heading>
                    <p className="text-sm leading-relaxed text-[color:var(--color-muted)] sm:pt-1">{stage.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="engagement-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-4">
              <p className="type-label">05 — Engagement</p>
              <Heading as="h2" className="type-title mt-5" id="engagement-title">
                Dibangun bersama, bukan sekali meeting.
              </Heading>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-7xl font-semibold tracking-[-0.05em] sm:text-8xl">3</p>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">bulan minimum engagement</p>
                </div>
                <div>
                  <p className="text-7xl font-semibold tracking-[-0.05em] sm:text-8xl">3</p>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">brand maksimal dalam satu waktu</p>
                </div>
              </div>
              <div className="mt-10 border-t border-[color:var(--color-border)] pt-7">
                <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
                  Review dapat dilakukan <strong>daily, weekly, dan monthly</strong>, secara online maupun offline. Fokus dan strategi akan sangat dinamis mengikuti kondisi client.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="cases-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-4">
              <p className="type-label">06 — Selected Advisory</p>
              <Heading as="h2" className="type-title mt-5" id="cases-title">
                Beberapa bisnis yang pernah saya dampingi.
              </Heading>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-[color:var(--color-border)]">
                {cases.map((item) => (
                  <article key={item.number} className="grid gap-5 border-b border-[color:var(--color-border)] py-8 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(15rem,0.8fr)] sm:gap-6 lg:py-10">
                    <p className="text-sm tabular-nums text-[color:var(--color-olive)]">{item.number}</p>
                    <div>
                      <Heading as="h3" className="text-3xl sm:text-4xl">{item.name}</Heading>
                      <p className="type-label mt-3">{item.category}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-[color:var(--color-muted)] sm:pt-1">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]" aria-labelledby="cta-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="type-label lg:col-span-3 text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)]">07 — Selanjutnya</p>
            <div className="max-w-4xl lg:col-span-8">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl" id="cta-title">
                Punya marketing yang ingin dibangun lebih serius?
              </Heading>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">
                Ceritakan kondisi bisnis dan marketing Anda. Kita mulai dari diagnosis, lalu lihat apa yang paling penting untuk dibangun.
              </p>
              <a
                className="mt-8 inline-flex min-h-[var(--control-height)] items-center justify-center bg-[color:var(--color-off-white)] px-5 text-sm font-medium text-[color:var(--color-charcoal)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:text-[color:var(--color-olive)] motion-reduce:transition-none"
                href={advisoryWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
              >
                Diskusikan Marketing Advisory <span aria-hidden="true" className="ml-2">→</span>
              </a>
              <Link className="ml-6 inline-flex text-sm font-medium text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] hover:text-[color:var(--color-off-white)]" href="/work-with-me">
                Kembali ke Work With Me <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
