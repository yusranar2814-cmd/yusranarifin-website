import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Testimonials } from "@/components/testimonials";

const focusAreas = [
  ["01", "Marketing", "Attention, lead, dan sales yang lebih terarah."],
  ["02", "Business", "Sistem dan keputusan yang lebih jelas."],
  ["03", "Digital Product", "Pengetahuan menjadi produk yang berguna."],
  ["04", "Technology & AI", "Teknologi untuk cara kerja yang lebih sederhana."],
] as const;

const systemSteps = ["Attention", "Interest", "Lead", "Sales", "Repeat", "Growth"] as const;

const systemIcons = ["◎", "◌", "◇", "↗", "↻", "✦"] as const;

const selectedWork = [
  ["Lazuna Chicken", "F&B", "Marketing & Growth"],
  ["Seleraa Buah", "Retail", "Digital Commerce"],
  ["EVLVE", "Digital Product", "Business"],
  ["Education & Community", "People", "Training, mentoring, dan community work"],
] as const;

const workWithMe = [
  ["◎", "Mentoring", "Pendampingan one-on-one."],
  ["▣", "Training", "Untuk tim dan organisasi."],
  ["◌", "Speaker", "Sharing dan guest session."],
  ["✦", "Collaboration", "Membangun sesuatu bersama."],
] as const;

export default function HomePage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label flex items-center gap-3"><span className="inline-block size-2 bg-[color:var(--color-green)]" />Yusran Arifin — Marketing · Business · Technology</p>
              <Heading as="h1" className="type-display mt-7 max-w-5xl">
                Kalau penjualan naik karena campaign, dan turun saat campaign berhenti, mungkin bisnis Anda masih bergantung pada <span className="text-[color:var(--color-green)]">keberuntungan.</span>
              </Heading>
            </div>
            <div className="flex flex-col justify-end border-l-2 border-[color:var(--color-green)] pl-5 lg:col-span-3 lg:pl-7">
              <p className="max-w-sm text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">Saya membantu membangun marketing dan sales menjadi sistem yang lebih terarah, terukur, dan bisa diprediksi.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/work-with-me">Work With Me →</Button>
                <Button href="/pekerjaan" variant="secondary">Lihat pekerjaan →</Button>
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
              <Heading as="h2" className="type-title">Marketing, business, technology, dan AI.</Heading>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">Saya tertarik pada bagaimana semuanya bisa bekerja sebagai sebuah sistem yang sederhana, terarah, dan berguna.</p>
              <Button className="mt-9" href="/tentang" variant="secondary">Tentang saya →</Button>
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
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex size-9 shrink-0 items-center justify-center border border-[color:var(--color-border)] text-base text-[color:var(--color-green)]" aria-hidden="true">{number === "01" ? "◎" : number === "02" ? "◇" : number === "03" ? "□" : "✦"}</span>
                      <Heading as="h3" className="text-3xl leading-none sm:text-4xl">{title}</Heading>
                    </div>
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
            <div className="lg:col-span-3"><p className="type-label">03 — Marketing system</p></div>
            <div className="lg:col-span-9">
              <Heading as="h2" className="type-title max-w-4xl">Marketing bukan sekadar campaign.</Heading>
              <p className="mt-4 text-xl leading-relaxed tracking-[-0.02em]">Saya melihatnya sebagai sebuah sistem.</p>
              <ol className="mt-10 grid border-y border-[color:var(--color-border)] sm:grid-cols-2 lg:grid-cols-6">
                {systemSteps.map((step, index) => (
                  <li className="flex min-h-32 flex-col justify-between border-b border-[color:var(--color-border)] p-5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0" key={step}>
                    <span className="text-lg text-[color:var(--color-green)]" aria-hidden="true">{systemIcons[index]}</span>
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
                  <div className="grid gap-4 border-b border-[color:var(--color-border)] py-6 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(12rem,0.55fr)] sm:gap-6 lg:py-8" key={title}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">0{index + 1}</p>
                    <Heading as="h3" className="text-3xl leading-none sm:text-4xl">{title}</Heading>
                    <div className="text-sm leading-relaxed text-[color:var(--color-muted)]"><p>{category}</p><p className="mt-1">{focus}</p></div>
                  </div>
                ))}
              </div>
              <Button className="mt-8" href="/pekerjaan" variant="secondary">Lihat semua pekerjaan →</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} id="testimonials" className="pt-0">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-3"><p className="type-label">05 — Social proof</p><Heading as="h2" className="type-title mt-5">Bukan cuma saya yang bilang.</Heading></div>
            <div className="lg:col-span-9"><Testimonials /></div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-charcoal)] text-[color:var(--color-off-white)]" id="products">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3"><p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)]">06 — Digital products</p></div>
            <div className="max-w-4xl lg:col-span-8">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl">Belajar. Bangun sistemnya.</Heading>
              <p className="mt-8 text-sm font-medium uppercase tracking-[var(--tracking-label)] text-[color:color-mix(in_srgb,var(--color-off-white)_62%,transparent)]">Bangun Sistem Marketing Sales yang Bisa Diprediksi</p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-xl">Framework untuk membantu bisnis membangun marketing dan sales yang lebih terarah, terukur, dan bisa diprediksi.</p>
              <Button className="mt-8 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/produk">Lihat produk →</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-olive)] text-[color:var(--color-off-white)]" id="work-with-me">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3"><p className="text-sm font-medium uppercase tracking-[var(--tracking-label)]">07 — Work With Me</p></div>
            <div className="max-w-4xl lg:col-span-8">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl">Kalau ada sesuatu yang ingin dibangun, mari ngobrol.</Heading>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {workWithMe.map(([icon, title, description]) => (
                  <div className="border-t border-[color:color-mix(in_srgb,var(--color-off-white)_30%,transparent)] pt-5" key={title}>
                    <div className="flex items-center gap-3"><span className="text-xl" aria-hidden="true">{icon}</span><Heading as="h3" className="text-2xl text-[color:var(--color-off-white)]">{title}</Heading></div>
                    <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)]">{description}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-10 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/work-with-me">Work With Me →</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
