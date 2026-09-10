import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Produk",
  description: "Produk digital dan materi gratis dari pengalaman Yusran Arifin di bidang marketing, sales, bisnis, dan digital.",
  path: "/produk",
});

const digitalProducts = [
  {
    number: "01",
    title: "Bangun Sistem Marketing Sales yang Bisa Diprediksi",
    category: "Ecourse · Marketing · Sales System",
    description: "Ecourse praktis untuk membantu bisnis membangun sistem yang menghubungkan marketing, leads, sales, hingga repeat purchase secara lebih terarah.",
    cta: "Pelajari Ecourse →",
  },
  {
    number: "02",
    title: "Buku Saku Meta Ads",
    category: "Ebook · Digital Marketing · Meta Ads",
    description: "Panduan praktis untuk membantu memahami dan menjalankan Meta Ads dengan lebih terarah—mulai dari dasar hingga bagaimana membaca dan mengevaluasi campaign.",
    cta: "Lihat Ebook →",
  },
  {
    number: "03",
    title: "Affiliate Marketing Hack",
    category: "Recording Webinar · Affiliate Marketing",
    description: "Rekaman webinar yang membahas strategi dan pendekatan praktis dalam menjalankan affiliate marketing.",
    cta: "Lihat Recording →",
  },
] as const;

const freeResources = [
  {
    number: "01",
    title: "Insight 2 Days Makassar Marketing Festival",
    category: "FREE Ebook · Marketing",
    description: "Kumpulan insight dan pembelajaran dari 2 Days Makassar Marketing Festival.",
    cta: "Download Gratis →",
  },
  {
    number: "02",
    title: "Marketing to Revenue",
    category: "FREE Ebook · Marketing & Business",
    description: "Membahas bagaimana aktivitas marketing seharusnya tidak berhenti pada traffic dan leads, tetapi dapat dihubungkan dengan revenue bisnis.",
    cta: "Download Gratis →",
  },
] as const;

type ProductItem = (typeof digitalProducts)[number] | (typeof freeResources)[number];

function ProductList({ items }: { items: readonly ProductItem[] }) {
  return (
    <div className="border-t border-[color:var(--color-border)]">
      {items.map((product) => (
        <article className="grid gap-5 border-b border-[color:var(--color-border)] py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6 sm:py-10 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(15rem,0.65fr)] lg:gap-x-8 lg:py-14" key={product.title}>
          <p className="text-sm tabular-nums text-[color:var(--color-muted)]">{product.number}</p>
          <div>
            <Heading as="h3" className="text-4xl leading-none sm:text-5xl lg:text-6xl">
              {product.title}
            </Heading>
            <p className="type-label mt-5">{product.category}</p>
          </div>
          <div className="sm:col-start-2 lg:col-start-3">
            <p className="max-w-md text-base leading-relaxed text-[color:var(--color-muted)]">{product.description}</p>
            <p className="mt-7 text-sm font-medium text-[color:var(--color-text)]">{product.cta}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label">01 — Produk</p>
              <Heading as="h1" className="type-display mt-6 max-w-6xl">
                Hal-hal yang saya bangun untuk membantu proses belajar dan bertumbuh.
              </Heading>
            </div>
            <div className="max-w-md self-end lg:col-span-3">
              <p className="text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Beberapa produk, materi, dan layanan yang saya buat dari pengalaman bekerja, belajar, dan bereksperimen di bidang marketing, sales, dan bisnis.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="digital-products-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-3">
              <p className="type-label">02 — Digital products</p>
              <Heading as="h2" className="type-title mt-5" id="digital-products-title">
                Digital Products
              </Heading>
            </div>
            <div className="lg:col-span-9">
              <ProductList items={digitalProducts} />
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:color-mix(in_srgb,var(--color-charcoal)_4%,var(--color-off-white))]" aria-labelledby="free-resources-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">03 — Resources</p>
              <Heading as="h2" className="type-title mt-5" id="free-resources-title">
                Free Resources
              </Heading>
            </div>
            <div className="lg:col-span-9">
              <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Beberapa materi yang saya bagikan secara gratis sebagai bagian dari proses belajar dan berbagi.
              </p>
              <div className="mt-10">
                <ProductList items={freeResources} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]" aria-labelledby="contact-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)] lg:col-span-3">Selanjutnya</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl" id="contact-title">
                Belajar. Membangun. Menguji.
              </Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">
                Produk-produk ini lahir dari proses yang sama: belajar dari masalah nyata, mencoba sesuatu, lalu membagikan apa yang berhasil dan apa yang masih perlu diperbaiki.
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
