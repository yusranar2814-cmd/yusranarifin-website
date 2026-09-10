import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const focusAreas = [
  ["01", "Marketing", "Membangun perhatian yang tepat dan perjalanan pelanggan yang lebih terarah."],
  ["02", "Business", "Menerjemahkan tujuan menjadi keputusan, proses, dan pertumbuhan yang lebih jelas."],
  ["03", "Digital Product", "Mencari bentuk produk digital yang benar-benar berguna bagi orang yang memakainya."],
  ["04", "Technology & AI", "Memahami teknologi sebagai cara untuk memperbaiki sistem dan cara kerja."],
] as const;

const systemSteps = ["Attention", "Interest", "Lead", "Sales", "Repeat", "Growth"] as const;

const selectedWork = [
  ["Lazuna Chicken", "F&B", "Marketing & Growth"],
  ["Seleraa Buah", "Retail", "Digital Commerce"],
  ["EVLVE", "Digital Product", "Business"],
  ["Education & Community", "People", "Training, mentoring, dan community work"],
] as const;

const insights = [
  ["Marketing", "Tentang marketing yang bisa diprediksi", "Catatan sedang disiapkan"],
  ["Business", "Membangun sistem sebelum mengejar skala", "Catatan sedang disiapkan"],
  ["AI & Technology", "AI sebagai cara kerja, bukan sekadar tren", "Catatan sedang disiapkan"],
  ["Personal", "Mencari cara kerja yang lebih baik", "Catatan sedang disiapkan"],
] as const;

const explorations = [
  "Predictable Marketing",
  "AI & Automation",
  "Digital Products",
  "EVLVE",
  "Cara kerja yang lebih baik",
] as const;

export default function HomePage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label">Yusran Arifin — Personal website</p>
              <Heading as="h1" className="type-display mt-6 max-w-6xl">
                Saya percaya, bisnis yang baik tidak seharusnya bergantung pada keberuntungan.
              </Heading>
            </div>
            <div className="flex flex-col justify-end lg:col-span-3">
              <div className="max-w-sm space-y-5 text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                <p>Saya banyak belajar tentang bagaimana marketing, sales, dan teknologi bisa dibangun menjadi sebuah sistem yang lebih terarah dan bisa diprediksi.</p>
                <p>Ini adalah tempat saya mencatat perjalanan, pekerjaan, pemikiran, dan hal-hal yang sedang saya bangun.</p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/pekerjaan">Lihat apa yang saya kerjakan →</Button>
                <Button href="/tentang" variant="secondary">Kenalan lebih jauh →</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="pt-0" id="tentang-saya">
        <Container>
          <div className="grid border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <p className="type-label lg:col-span-3">01 — Tentang saya</p>
            <div className="mt-9 max-w-3xl lg:col-span-7 lg:mt-0">
              <Heading as="h2" className="type-title">Sedikit tentang saya.</Heading>
              <div className="mt-7 max-w-2xl space-y-5 text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                <p>Saya tertarik pada bagaimana marketing, bisnis, produk digital, teknologi, dan AI bisa saling menguatkan dalam pekerjaan sehari-hari.</p>
                <p>Lebih dari mencari jawaban yang cepat, saya sedang belajar memahami masalah dengan lebih baik—lalu membangun cara kerja yang lebih sederhana, terarah, dan berguna.</p>
              </div>
              <Button className="mt-9" href="/tentang" variant="secondary">Selengkapnya tentang saya →</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} id="yang-saya-kerjakan">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">02 — Fokus kerja</p>
              <Heading as="h2" className="type-title mt-5">Yang saya kerjakan.</Heading>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-[color:var(--color-border)]">
                {focusAreas.map(([number, title, description]) => (
                  <div className="grid gap-4 border-b border-[color:var(--color-border)] py-6 sm:grid-cols-[3rem_1fr] lg:grid-cols-[4rem_minmax(0,1fr)_minmax(16rem,0.8fr)] lg:gap-6 lg:py-8" key={title}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">{number}</p>
                    <Heading as="h3" className="text-3xl leading-none sm:text-4xl">{title}</Heading>
                    <p className="max-w-sm text-sm leading-relaxed text-[color:var(--color-muted)]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:color-mix(in_srgb,var(--color-charcoal)_4%,var(--color-off-white))]" id="sistem-marketing">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">03 — Cara melihat marketing</p>
            </div>
            <div className="lg:col-span-9">
              <Heading as="h2" className="type-title max-w-4xl">Saya melihat marketing sebagai sebuah sistem.</Heading>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Marketing bukan hanya tentang campaign atau iklan. Ia adalah cara seluruh proses bekerja—dari perhatian pertama, hingga alasan seseorang kembali dan pertumbuhan yang bisa dijaga.
              </p>
              <ol className="mt-12 grid border-y border-[color:var(--color-border)] sm:grid-cols-2 lg:grid-cols-6">
                {systemSteps.map((step, index) => (
                  <li className="flex min-h-30 flex-col justify-between border-b border-[color:var(--color-border)] p-5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0" key={step}>
                    <span className="text-sm tabular-nums text-[color:var(--color-muted)]">0{index + 1}</span>
                    <span className="mt-8 text-lg tracking-[-0.02em]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} id="selected-work">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">04 — Selected work</p>
              <Heading as="h2" className="type-title mt-5">Beberapa hal yang pernah saya kerjakan.</Heading>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-[color:var(--color-border)]">
                {selectedWork.map(([title, category, focus], index) => (
                  <Card className="grid gap-4 border-t-0 border-b pb-6 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(12rem,0.55fr)] sm:gap-6 lg:pb-8" key={title}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">0{index + 1}</p>
                    <Heading as="h3" className="text-3xl leading-none sm:text-4xl">{title}</Heading>
                    <div className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                      <p>{category}</p>
                      <p className="mt-1">{focus}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-muted)]">Lazuna Chicken adalah pengalaman dan proyek sebelumnya, bukan pekerjaan saat ini.</p>
              <Button className="mt-8" href="/pekerjaan" variant="secondary">Lihat semua pekerjaan →</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="pt-0" id="insights">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-3">
              <p className="type-label">05 — Insights</p>
              <Heading as="h2" className="type-title mt-5">Hal-hal yang sedang saya pikirkan.</Heading>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-[color:var(--color-border)]">
                {insights.map(([category, title, status]) => (
                  <article className="grid gap-3 border-b border-[color:var(--color-border)] py-6 sm:grid-cols-[9rem_minmax(0,1fr)_10rem] sm:items-baseline sm:gap-6" key={title}>
                    <p className="type-label">{category}</p>
                    <Heading as="h3" className="text-2xl leading-tight sm:text-3xl">{title}</Heading>
                    <p className="text-sm text-[color:var(--color-muted)]">{status}</p>
                  </article>
                ))}
              </div>
              <Button className="mt-8" href="/insights" variant="secondary">Baca semua insights →</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} id="exploring">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">06 — Currently exploring</p>
              <Heading as="h2" className="type-title mt-5">Yang sedang saya eksplorasi.</Heading>
            </div>
            <div className="lg:col-span-9">
              <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">Beberapa arah yang sedang saya pelajari, uji, dan kembangkan pelan-pelan.</p>
              <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-4 border-t border-[color:var(--color-border)] pt-6 sm:gap-x-8">
                {explorations.map((item, index) => (
                  <li className="flex items-baseline gap-3 text-xl tracking-[-0.025em] sm:text-2xl" key={item}>
                    <span className="text-sm tabular-nums text-[color:var(--color-muted)]">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]" id="products">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)]">07 — Digital products</p>
            </div>
            <div className="max-w-4xl lg:col-span-8">
              <Heading as="h2" className="font-[family-name:var(--font-serif)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl">Yang sedang saya bangun.</Heading>
              <p className="mt-10 text-sm font-medium uppercase tracking-[var(--tracking-label)] text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)]">Predictable Marketing to Sales</p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-xl">Belajar membangun sistem marketing dan sales yang lebih terarah, terukur, dan bisa diprediksi.</p>
              <Button className="mt-9 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/produk">Pelajari lebih lanjut →</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-olive)] text-[color:var(--color-off-white)]" id="contact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] lg:col-span-3">08 — Contact</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-serif)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl">Yuk ngobrol.</Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">Untuk kolaborasi, pertanyaan, atau sekadar bertukar perspektif, silakan hubungi saya.</p>
              <Button className="mt-8 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/kontak">Mulai percakapan →</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
