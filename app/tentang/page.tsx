import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Tentang Saya", path: "/tentang" });

export default function AboutPage() {
  return <PageIntro title="Tentang Saya" />;
}
