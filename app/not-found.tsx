import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section>
      <Container className="px-0">
        <p className="text-sm text-[color:var(--color-muted)]">404</p>
        <Heading as="h1" className="mt-4 text-5xl sm:text-6xl">Halaman tidak ditemukan.</Heading>
        <Link className="mt-8 inline-block text-sm underline" href="/">Kembali ke beranda</Link>
      </Container>
    </Section>
  );
}
