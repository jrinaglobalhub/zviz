import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A2218",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zviz.in"),
  title: "ZVIZ — Tender Coconut Water | Electrolyte Rich Powder Mix",
  description:
    "Discover ZVIZ Tender Coconut Water — an electrolyte-rich powder mix designed for convenient preparation in seconds. 100% natural tender coconut refreshment.",
  keywords: [
    "ZVIZ",
    "Tender Coconut Water",
    "Electrolyte Rich",
    "Powder Mix",
    "Coconut Water Sachet",
    "Made in India",
    "Natural Hydration",
  ],
  authors: [{ name: "ZVIZ" }],
  openGraph: {
    title: "ZVIZ — Tender Coconut Water | Electrolyte Rich Powder Mix",
    description:
      "Tender coconut water, made convenient. Discover instant refreshment in an easy-to-carry sachet.",
    siteName: "ZVIZ",
    images: [
      {
        url: "/images/zviz/product-showcase.jpg",
        width: 1920,
        height: 1080,
        alt: "ZVIZ Tender Coconut Water",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZVIZ — Tender Coconut Water | Electrolyte Rich Powder Mix",
    description: "Tender coconut water, made convenient. Pure. Convenient. ZVIZ.",
    images: ["/images/zviz/product-showcase.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans bg-coconut-ivory text-charcoal-900 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
