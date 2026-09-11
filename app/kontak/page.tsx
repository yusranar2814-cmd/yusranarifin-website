import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kontak",
  description: "Mulai percakapan dengan Yusran Arifin tentang produk, mentoring, training, atau kolaborasi.",
  path: "/kontak",
});

const contactIntents = [
  {
    number: "01",
    title: "Saya ingin membeli / mengetahui produk",
    description: "Untuk pertanyaan seputar ecourse, ebook, atau produk digital.",
    cta: "Lihat Produk",
    href: "/produk",
  },
  {
    number: "02",
    title: "Saya ingin mentoring",
    description: "Untuk diskusi dan pendampingan personal seputar marketing, bisnis, atau sales.",
    cta: "Work With Me",
    href: "/work-with-me",
  },
  {
    number: "03",
    title: "Saya ingin mengundang sebagai trainer / speaker",
    description: "Untuk training, workshop, webinar, seminar, podcast, atau community session.",
    cta: "Work With Me",
    href: "/work-with-me",
  },
  {
    number: "04",
    title: "Saya ingin berkolaborasi",
    description: "Untuk campaign, project, content collaboration, atau bentuk kerja sama lainnya.",
    cta: "Work With Me",
    href: "/work-with-me",
  },
] as const;

const contactChannels = [
  {
    name: "WhatsApp",
    description: "Untuk percakapan langsung dan kebutuhan bisnis.",
    href: "https://example.com/replace-whatsapp-link",
    placeholder: "[Tambahkan tautan WhatsApp]",
  },
  {
    name: "Instagram",
    description: "Untuk ngobrol dan mengikuti aktivitas saya.",
    href: "https://example.com/replace-instagram-link",
    placeholder: "[Tambahkan tautan Instagram]",
  },
  {
    name: "Email",
    description: "Untuk kebutuhan profesional dan kolaborasi.",
    href: "mailto:replace-with-email@example.com",
    placeholder: "[Tambahkan alamat email]",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="type-label">01 — Kontak</p>
              <Heading as="h1" className="type-display mt-6">
                Mari ngobrol.
              </Heading>
            </div>
            <p className="max-w-md self-end text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg lg:col-span-4">
              Ada sesuatu yang sedang Anda bangun, masalah yang sedang Anda pikirkan, atau peluang kolaborasi yang ingin dibicarakan? Ceritakan sedikit. Kita mulai dari sana.
            </p>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="needs-title">
        <Container>
          <div className="border-t border-[color:var(--color-border)] pt-7 lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="mb-10 lg:col-span-3 lg:mb-0">
              <p className="type-label">02 — Mulai dari sini</p>
              <Heading as="h2" className="type-title mt-5" id="needs-title">
                Pilih kebutuhan Anda
              </Heading>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-[color:var(--color-border)]">
                {contactIntents.map((intent) => (
                  <article className="grid gap-5 border-b border-[color:var(--color-border)] py-9 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6 sm:py-12 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(14rem,0.65fr)] lg:gap-x-8 lg:py-16" key={intent.number}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">{intent.number}</p>
                    <Heading as="h3" className="text-4xl leading-none sm:text-5xl lg:text-6xl">
                      {intent.title}
                    </Heading>
                    <div className="sm:col-start-2 lg:col-start-3">
                      <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{intent.description}</p>
                      <Link className="mt-8 inline-flex text-sm font-medium text-[color:var(--color-text)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:text-[color:var(--color-olive)] motion-reduce:transition-none" href={intent.href}>
                        {intent.cta} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:color-mix(in_srgb,var(--color-charcoal)_4%,var(--color-off-white))]" aria-labelledby="channels-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">03 — Kanal kontak</p>
              <Heading as="h2" className="type-title mt-5" id="channels-title">
                Hubungi saya
              </Heading>
            </div>
            <ul className="border-t border-[color:var(--color-border)] lg:col-span-9">
              {contactChannels.map((channel) => (
                <li className="grid gap-4 border-b border-[color:var(--color-border)] py-7 sm:grid-cols-[minmax(10rem,0.45fr)_minmax(0,1fr)] sm:gap-8 sm:py-9" key={channel.name}>
                  <Heading as="h3" className="text-3xl leading-none sm:text-4xl">
                    {channel.name}
                  </Heading>
                  <div>
                    <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{channel.description}</p>
                    <a className="mt-4 inline-flex text-sm font-medium text-[color:var(--color-text)] underline decoration-[color:var(--color-border-strong)] transition-colors duration-[var(--duration-standard)] ease-[var(--ease-standard)] hover:text-[color:var(--color-olive)] motion-reduce:transition-none" href={channel.href}>
                      {channel.placeholder}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]" aria-labelledby="closing-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)] lg:col-span-3">Selanjutnya</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl" id="closing-title">
                Ceritakan apa yang sedang Anda bangun.
              </Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">
                Tidak harus sudah punya jawaban yang lengkap. Ceritakan saja konteksnya, dan kita lihat apakah saya bisa membantu.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
