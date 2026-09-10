import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tentang Saya",
  description: "Catatan tentang perjalanan, cara bekerja, dan hal-hal yang sedang dibangun oleh Yusran Arifin.",
  path: "/tentang",
});

const principles = [
  ["01", "Memahami masalah", "Memulai dari masalah yang sebenarnya, bukan langsung melompat ke solusi."],
  ["02", "Membuat lebih sederhana", "Mencari cara agar proses yang rumit bisa dipahami dan dijalankan dengan lebih sederhana."],
  ["03", "Menguji dan belajar", "Lebih percaya pada proses mencoba, melihat hasil, lalu memperbaiki daripada merasa harus langsung sempurna."],
  ["04", "Membangun untuk jangka panjang", "Mencari sesuatu yang bukan hanya bekerja hari ini, tetapi bisa terus berkembang."],
] as const;

const beliefs = [
  "Marketing yang baik bukan hanya tentang mendapatkan perhatian, tetapi memahami perjalanan seseorang sampai ia percaya.",
  "Bisnis yang sehat membutuhkan sistem yang bisa dipahami dan dijalankan, bukan hanya orang-orang yang bekerja lebih keras.",
  "Teknologi seharusnya membuat pekerjaan menjadi lebih baik, bukan sekadar terlihat lebih canggih.",
  "AI bagi saya adalah alat untuk memperbaiki cara kita bekerja, berpikir, dan membangun.",
  "Masih banyak hal yang belum saya tahu. Dan mungkin justru itu yang membuat perjalanan ini menarik.",
] as const;

const explorations = ["Predictable Marketing", "AI & Automation", "Digital Products", "EVLVE", "Cara kerja yang lebih baik"] as const;

export default function AboutPage() {
  return (
    <>
      <Section contained={false} className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="type-label">01 — Tentang saya</p>
              <Heading as="h1" className="type-display mt-6 max-w-5xl">Sedikit tentang saya.</Heading>
            </div>
            <div className="max-w-md self-end lg:col-span-3">
              <p className="text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Saya tertarik pada bagaimana marketing, bisnis, produk digital, teknologi, dan AI bisa saling menguatkan dalam pekerjaan sehari-hari.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                Lebih dari sekadar mencari jawaban yang cepat, saya sedang belajar memahami masalah dengan lebih baik—lalu membangun cara kerja yang lebih sederhana, terarah, dan berguna.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="perjalanan-title">
        <Container>
          <div className="grid border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <p className="type-label lg:col-span-3">02 — Perjalanan</p>
            <div className="mt-9 max-w-3xl lg:col-span-7 lg:mt-0">
              <Heading as="h2" className="type-title" id="perjalanan-title">Belajar dari pekerjaan yang dijalani.</Heading>
              <div className="mt-9 max-w-2xl space-y-5 text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                <p>Saya memulai dan berkembang melalui dunia marketing dan bisnis. Banyak pelajaran datang dari pekerjaan nyata: melihat bagaimana sebuah bisnis mendapatkan perhatian, mengubahnya menjadi pelanggan, lalu membangun hubungan agar pelanggan kembali.</p>
                <p>Pengalaman bekerja bersama bisnis F&amp;B, retail, digital marketing, dan berbagai aktivitas bisnis membuat saya semakin tertarik pada apa yang terjadi di balik hasil: sistem, proses, dan keputusan kecil yang membantu pekerjaan berjalan lebih baik.</p>
                <p>Dari sana, perhatian saya perlahan meluas ke digital product, teknologi, dan AI. Sekarang saya sedang memasuki fase baru—membangun produk digital dan personal ecosystem sendiri, sambil terus belajar dari hal-hal yang dikerjakan.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:color-mix(in_srgb,var(--color-charcoal)_4%,var(--color-off-white))]" aria-labelledby="cara-kerja-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">03 — Cara saya bekerja</p>
            </div>
            <div className="lg:col-span-9">
              <Heading as="h2" className="type-title max-w-4xl" id="cara-kerja-title">Saya lebih tertarik membangun sistem daripada sekadar mengejar hasil sesaat.</Heading>
              <ol className="mt-12 grid border-t border-[color:var(--color-border)] sm:grid-cols-2">
                {principles.map(([number, title, description]) => (
                  <li className="grid gap-5 border-b border-[color:var(--color-border)] py-7 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:px-6 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0" key={number}>
                    <p className="text-sm tabular-nums text-[color:var(--color-muted)]">{number}</p>
                    <div>
                      <Heading as="h3" className="text-3xl leading-none sm:text-4xl">{title}</Heading>
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[color:var(--color-muted)]">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="percaya-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">04 — Beberapa hal yang saya percaya</p>
            </div>
            <div className="lg:col-span-9">
              <Heading as="h2" className="sr-only" id="percaya-title">Beberapa hal yang saya percaya</Heading>
              <div className="border-t border-[color:var(--color-border)]">
                {beliefs.map((belief, index) => (
                  <p className={`max-w-4xl border-b border-[color:var(--color-border)] py-9 font-[family-name:var(--font-sans)] text-3xl leading-[1.08] tracking-[var(--tracking-heading)] sm:text-4xl lg:text-5xl ${index % 2 === 1 ? "lg:ml-[12%]" : ""}`} key={belief}>
                    {belief}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} aria-labelledby="exploring-title">
        <Container>
          <div className="grid border-t border-[color:var(--color-border)] pt-7 lg:grid-cols-12 lg:gap-8 lg:pt-9">
            <div className="lg:col-span-3">
              <p className="type-label">05 — Currently exploring</p>
            </div>
            <div className="mt-9 lg:col-span-9 lg:mt-0">
              <Heading as="h2" className="type-title max-w-4xl" id="exploring-title">Hal-hal yang sedang saya pelajari dan bangun.</Heading>
              <ol className="mt-12 grid border-t border-[color:var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
                {explorations.map((item, index) => (
                  <li className="flex min-h-36 flex-col justify-between border-b border-[color:var(--color-border)] py-5 sm:px-5 sm:odd:border-r sm:odd:pl-0 lg:border-r lg:px-6 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(4)]:pl-0" key={item}>
                    <span className="text-sm tabular-nums text-[color:var(--color-muted)]">0{index + 1}</span>
                    <span className="mt-8 text-2xl leading-tight tracking-[-0.025em]">{item}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">Website ini juga merupakan bagian dari proses tersebut. Bukan hanya tempat menampilkan hasil, tetapi ruang untuk mencatat apa yang sedang dipelajari dan dibangun.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:color-mix(in_srgb,var(--color-charcoal)_4%,var(--color-off-white))]" aria-labelledby="luar-pekerjaan-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="type-label">06 — Di luar pekerjaan</p>
            </div>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="type-title" id="luar-pekerjaan-title">Karena hidup tidak hanya tentang pekerjaan.</Heading>
              <div className="mt-9 max-w-2xl space-y-5 text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
                <p>Di luar pekerjaan, saya berusaha memberi ruang untuk keluarga, belajar, komunitas, dan spiritualitas. Hal-hal ini membantu saya tetap melihat pekerjaan sebagai bagian dari hidup, bukan seluruhnya.</p>
                <p>Saya juga sedang belajar menjaga tubuh dan pikiran, sambil berusaha menjadi pribadi dan ayah yang lebih baik—pelan-pelan, dengan perhatian pada hal-hal yang benar-benar penting.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section contained={false} className="bg-[color:var(--color-olive)] text-[color:var(--color-off-white)]" aria-labelledby="about-contact-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-label)] lg:col-span-3">Mari terhubung</p>
            <div className="max-w-3xl lg:col-span-7">
              <Heading as="h2" className="font-[family-name:var(--font-sans)] text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-heading)] text-[color:var(--color-off-white)] sm:text-6xl lg:text-7xl" id="about-contact-title">Masih banyak yang sedang saya bangun.</Heading>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:color-mix(in_srgb,var(--color-off-white)_78%,transparent)] sm:text-lg">Kalau ada hal yang sedang Anda pikirkan, bangun, atau ingin diskusikan, mari ngobrol.</p>
              <Button className="mt-8 bg-[color:var(--color-off-white)] text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-off-white)] hover:text-[color:var(--color-olive)]" href="/kontak">Mari ngobrol →</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
