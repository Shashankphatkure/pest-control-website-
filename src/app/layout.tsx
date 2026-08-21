import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { WhatsAppFloatingButton } from "@/components/site/WhatsAppFloatingButton";
import { business } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const siteUrl = "https://www.example.com"; // TODO: replace with real production domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — Pest Control in ${business.city}`,
    template: `%s | ${business.name}`,
  },
  description: `Professional pest control for homes and businesses in ${business.region}. Safe treatment, transparent pricing and fast response from trained technicians.`,
  openGraph: {
    type: "website",
    siteName: business.name,
    title: `${business.name} — Pest Control in ${business.city}`,
    description: `Professional pest control for homes and businesses in ${business.region}.`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  image: `${siteUrl}/og-image.jpg`, // TODO: add real OG/brand image
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
  },
  areaServed: business.region,
  url: siteUrl,
  priceRange: "₹₹",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
