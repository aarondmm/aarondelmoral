import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Aaron Del Moral — Developer & Explorer", template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: ["Aaron Del Moral", "desarrollador web", "Next.js", "portfolio", "desarrollo frontend", "viajes", "skate"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_ES", url: SITE_URL, siteName: SITE_NAME, title: "Aaron Del Moral — Developer & Explorer", description: SITE_DESCRIPTION, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Aaron Del Moral — Developer & Explorer" }] },
  twitter: { card: "summary_large_image", title: "Aaron Del Moral — Developer & Explorer", description: SITE_DESCRIPTION, images: ["/opengraph-image"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
