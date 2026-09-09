import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Insights", path: "/insights" });

export default function InsightsPage() {
  return <PageIntro title="Insights" />;
}
