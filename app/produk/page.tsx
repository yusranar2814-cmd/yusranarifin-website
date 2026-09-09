import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Produk", path: "/produk" });

export default function ProductsPage() {
  return <PageIntro title="Produk" />;
}
