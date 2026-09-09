import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const pathways = [
  {
    href: "/pekerjaan",
    label: "Pekerjaan",
    description: "Pilihan proyek dan studi kasus yang menempatkan konteks, proses, dan hasil secara berdampingan.",
  },
  {
    href: "/insights",
    label: "Insights",
    description: "Catatan tentang praktik, cara berpikir, dan hal-hal yang layak dibagikan sepanjang proses.",
  },
  {
    href: "/produk",
    label: "Produk",
    description: "Ruang untuk alat, eksperimen, dan produk yang dikembangkan secara bertahap.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Section contained={false} className="overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label">Website personal</p>
              <Heading as="h1" className="type-display mt-6 max-w-5xl">
                Yusran Arifin
              </Heading>
            </div>
            <div className="flex flex-col justify-end lg:col-span-3">
              <p className="max-w-sm text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Sebuah ruang untuk pekerjaan terpilih, pemikiran, dan produk yang dibangun dengan perhatian pada kejelasan dan kegunaan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/pekerjaan">Telusuri pekerjaan</Button>
                <Button href="/kontak" variant="secondary">Mulai percakapan</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="pt-0">
        <Container>
          <div className="grid border-t border-[color:var(--color-border)] pt-6 lg:grid-cols-12 lg:gap-8 lg:pt-8">
            <p className="type-label lg:col-span-3">Arah</p>
            <div className="mt-8 max-w-3xl lg:col-span-7 lg:mt-0">
              <Heading as="h2" className="type-title">
                Catatan yang bertumbuh dari kerja yang dijalani dengan saksama.
              </Heading>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">Jelajahi</p>
            </div>
            <div className="lg:col-span-9">
              <div className="grid gap-10 md:grid-cols-3 md:gap-6">
                {pathways.map((pathway, index) => (
                  <Card className="flex min-h-56 flex-col justify-between" key={pathway.href}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">0{index + 1}</p>
                    <div className="mt-12">
                      <Heading as="h2" className="text-3xl leading-none sm:text-4xl">
                        {pathway.label}
                      </Heading>
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[color:var(--color-muted)]">
                        {pathway.description}
                      </p>
                      <Button className="mt-6 px-0 underline decoration-1 underline-offset-4" href={pathway.href} variant="secondary">
                        Lihat {pathway.label.toLowerCase()}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-olive)] text-[color:var(--color-off-white)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] lg:col-span-3">Kontak</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-serif)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl">
                Mari memulai percakapan yang bermakna.
              </Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">
                Untuk kolaborasi, pertanyaan, atau sekadar bertukar perspektif, silakan hubungi saya.
              </p>
              <Button className="mt-8 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/kontak">
                Ke halaman kontak
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
