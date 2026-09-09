import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/lib/constants";
import { SiteHeader } from "@/components/layout/site-header";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata(),
};

export const viewport: Viewport = {
  themeColor: "#F5F3EE",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
