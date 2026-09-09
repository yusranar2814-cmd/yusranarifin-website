import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Kontak", path: "/kontak" });

export default function ContactPage() {
  return <PageIntro title="Kontak" />;
}
