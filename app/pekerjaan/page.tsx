import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pekerjaan",
  description: "Pilihan pengalaman dan proyek yang membentuk cara Yusran Arifin melihat marketing, bisnis, dan sistem.",
  path: "/pekerjaan",
});

const selectedWork = [
  {
    number: "01",
    title: "Lazuna Chicken",
    category: "Marketing · F&B · Growth",
    description: [
      "Pengalaman membangun dan mengembangkan sistem marketing pada bisnis F&B—dari tim marketing yang awalnya hanya terdiri dari 2 orang hingga terbentuknya sistem marketing yang lebih terstruktur.",
      "Dalam perjalanan tersebut, bisnis berkembang dari 7 store menjadi 37 store yang tersebar di 4 kota/kabupaten di Sulawesi Selatan.",
    ],
    href: "/work/lazuna",
  },
  {
    number: "02",
    title: "Seleraa Buah",
    category: "Growth Marketing · Retail · Digital Commerce",
    description: [
      "Mengembangkan pendekatan marketing dan digital commerce untuk bisnis retail buah premium melalui pendekatan 360° marketing.",
      "Fokusnya tidak hanya pada sisi marketing, tetapi melihat bisnis secara lebih menyeluruh—dari proses, customer experience, hingga aspek lain yang ikut memengaruhi pertumbuhan bisnis.",
    ],
    href: "/work/seleraa",
  },
  {
    number: "03",
    title: "EVLVE",
    category: "Digital Product · Business · Technology",
    description: ["Membangun ekosistem produk digital yang membantu bisnis memahami dan membangun sistem marketing yang lebih terarah."],
    href: "/work/evlve",
  },
  {
    number: "04",
    title: "Education & Community",
    category: "Training · Mentoring · Community",
    description: ["Berbagi pengalaman melalui training, mentoring, dan aktivitas komunitas di bidang marketing dan bisnis."],
    href: undefined,
  },
] as const;

export default function WorkPage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label">01 — Pekerjaan</p>
              <Heading as="h1" className="type-display mt-6 max-w-6xl">
                Beberapa hal yang pernah saya kerjakan.
              </Heading>
            </div>
            <div className="max-w-md self-end lg:col-span-3">
              <p className="text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Sebagian pekerjaan membentuk cara saya melihat marketing, bisnis, dan bagaimana sebuah sistem dibangun. Berikut beberapa proyek dan pengalaman yang paling banyak memberi saya pelajaran.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="selected-work-title">
        <Container>
          <div className="grid gap-10 border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-3">
              <p className="type-label">02 — Selected work</p>
              <Heading as="h2" className="type-title mt-5" id="selected-work-title">
                Pengalaman yang memberi pelajaran.
              </Heading>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-[color:var(--color-border)]">
                {selectedWork.map((work) => (
                  <article className="grid gap-5 border-b border-[color:var(--color-border)] py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6 sm:py-10 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(14rem,0.65fr)] lg:gap-x-8 lg:py-14" key={work.number}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">{work.number}</p>
                    <div>
                      <Heading as="h3" className="text-4xl leading-none sm:text-5xl lg:text-6xl">
                        {work.title}
                      </Heading>
                      <p className="type-label mt-5">{work.category}</p>
                    </div>
                    <div className="sm:col-start-2 lg:col-start-3">
                      <div className="space-y-5 text-base leading-relaxed text-[color:var(--color-muted)]">
                        {work.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                      {work.href ? (
                        <Button className="mt-7" href={work.href} variant="secondary">
                          Lihat case study <span aria-hidden="true">→</span>
                        </Button>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-olive)] text-[color:var(--color-off-white)]" aria-labelledby="next-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] lg:col-span-3">Selanjutnya</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-serif)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl" id="next-title">
                Masih banyak yang sedang saya bangun.
              </Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">
                Beberapa catatan tentang marketing, bisnis, dan cara kerja yang sedang saya pelajari ada di sini.
              </p>
              <Button className="mt-8 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/insights">
                Lihat insights <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
