import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { siteContact, siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Handmade Crochet Fashion`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    "handmade crochet",
    "crochet clothing",
    "custom crochet garments",
    "crochet accessories",
    "The Yarn Couture"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | Handmade Crochet Fashion`,
    description: siteDescription,
    images: [
      {
        url: "/ycphotos/hero_photo.jpg",
        width: 1264,
        height: 842,
        alt: "Handmade crochet pieces by The Yarn Couture"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Handmade Crochet Fashion`,
    description: siteDescription,
    images: ["/ycphotos/hero_photo.jpg"]
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.png"
  },
  robots: {
    index: true,
    follow: true
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/ycphotos/hero_photo.jpg`,
  description: siteDescription,
  email: siteContact.email,
  telephone: siteContact.phone,
  sameAs: [siteContact.instagram, siteContact.facebook]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
