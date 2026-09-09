import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Pekerjaan", path: "/pekerjaan" });

export default function WorkPage() {
  return <PageIntro title="Pekerjaan" />;
}
