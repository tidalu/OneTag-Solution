import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Shelf Labels (ESL) for Retail | Onetag Smart Solutions",
  description:
    "Bluetooth and Wi-Fi powered smart price tags for modern retail stores in Uzbekistan. Real-time pricing updates, cloud management, and seamless POS integration.",
  keywords: [
    "electronic shelf labels",
    "ESL Uzbekistan",
    "smart price tags",
    "retail automation",
    "digital price labels",
    "ZKONG ESL",
    "retail technology Tashkent",
  ],
  openGraph: {
    title: "Electronic Shelf Labels (ESL) for Retail | Onetag Smart Solutions",
    description:
      "Bluetooth and Wi-Fi powered smart price tags for modern retail stores. Transform your retail pricing with real-time updates.",
    type: "website",
    locale: "en_US",
    siteName: "Onetag Smart Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Onetag Smart Solutions - Electronic Shelf Labels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronic Shelf Labels (ESL) | Onetag",
    description:
      "Smart price tags with Bluetooth and Wi-Fi for modern retail stores.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/",
      uz: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};