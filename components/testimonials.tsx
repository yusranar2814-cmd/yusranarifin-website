import { Heading } from "@/components/ui/heading";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: readonly Testimonial[] = [
  {
    quote: "Sebelum ikut sesi one-on-one dengan Yusran, saya bingung bagaimana cara menyusun dan mengevaluasi program marketing untuk meningkatkan sales. Alhamdulillah, setelah ikut, semua pertanyaan di kepala saya terjawab, dikasih solusi dan framework untuk program ke depannya. Pembahasan juga sangat asik dan insightful sampai diskusinya tidak terasa sudah 90 menit saja.",
    name: "Nur Ichsan",
    role: "Head of Marketing",
  },
  {
    quote: "Dari webinar ini bikin saya mikir ulang cara saya menjalankan marketing di bisnis saya, cuma fokus ke konten dan promo, tapi belum ada sistem yang predictable. Ternyata awareness saja tidak cukup kalau tidak berubah menjadi leads dan penjualan. Webinar ini sangat membantu saya membuat sistem marketing yang rapi dan terukur.",
    name: "Atika",
    role: "Owner",
  },
  {
    quote: "Alhamdulillah, lebih paham sekarang gimana atur target ke Marketing yang impact-nya bisa ke Sales, karena framework-nya sudah dijelaskan dengan sederhana. Tapi, sepertinya perlu ada offline-nya biar lebih enak untuk diskusi.",
    name: "Ismail Hamzah",
    role: "Marketing Manager",
  },
  {
    quote: "Mentoring-nya jujur sangat berkesan. Materi yang disampaikan jelas, mudah dipahami, dan banyak insight baru yang didapatkan. Cara penyampaiannya ringan tapi berbobot, jadi tidak terasa membingungkan. Sangat membuka wawasan saya tentang marketing dan sangat bermanfaat dan bisa langsung saya praktekkan ke team.",
    name: "Aris",
    role: "General Manager",
  },
  {
    quote: "Awalnya dapat info layanan ini dengan DM Yusran langsung dan menanyakan tentang CRM. Setelah mengikuti kelasnya dapat output mengenai pengelolaan database, cara buat brainstorming sampai program apa yang cocok untuk brand kami.",
    name: "Andi Ulfayanti",
    role: "Owner & Manager Marketing",
  },
] as const;

export function Testimonials() {
  return (
    <div className="border-t border-[color:var(--color-border)]">
      {testimonials.map((testimonial) => (
        <article className="border-b border-[color:var(--color-border)] py-9 sm:py-12" key={testimonial.name}>
          <p className="max-w-4xl font-[family-name:var(--font-sans)] text-2xl leading-[1.12] tracking-[var(--tracking-heading)] sm:text-3xl lg:text-4xl">
            “{testimonial.quote}”
          </p>
          <div className="mt-7 flex items-baseline gap-3 text-sm">
            <Heading as="h3" className="text-lg leading-none">{testimonial.name}</Heading>
            <span className="text-[color:var(--color-muted)]">/ {testimonial.role}</span>
          </div>
          <p className="mt-3 text-sm tracking-[0.08em]" aria-label="5 dari 5 bintang">★★★★★</p>
        </article>
      ))}
    </div>
  );
}
