import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.resizertools.com"),
  title: "Resizer Tools - Free Online PDF & Image Utilities Platform",
  description: "Compress, resize, merge, split, rotate, watermark, lock, unlock, and sign PDF or image files 100% locally in your browser. Zero server uploads, private and secure.",
  keywords: [
    "resizer tools", "image compressor online", "pdf compression free", "passport photo sheet print",
    "pdf signature drawer", "online invoice maker", "merge pdf files", "split pdf pages online",
    "rotate pdf pages", "pdf watermark creator", "lock pdf password protection", "unlock pdf decryption",
    "extract pdf pages", "delete pdf pages", "reorder pdf pages", "pdf to image converter",
    "image to pdf doc", "image format converter webp png jpeg", "client-side web utility tools"
  ],
  alternates: {
    canonical: "https://www.resizertools.com",
  },
  verification: {
    google: "google38413941c148eb69",
  },
  other: {
    "apple-itunes-app": "app-id=6785073828",
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
  openGraph: {
    title: "Resizer Tools - 26 Free Web-Native Image & PDF Utilities",
    description: "Browser-native document & image manipulation with zero server latency. Private, secure, and 100% client-side.",
    url: "https://www.resizertools.com",
    siteName: "Resizer Tools",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resizer Tools - Free Web-Native PDF & Image Platform",
    description: "Compress, resize, merge, protect, sign, and watermarks PDFs and images entirely in your browser with zero uploads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.resizertools.com/#organization",
                  "name": "Resizer Tools",
                  "url": "https://www.resizertools.com",
                  "logo": "https://www.resizertools.com/icon.svg",
                  "sameAs": [
                    "https://github.com/Sudan051"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.resizertools.com/#website",
                  "url": "https://www.resizertools.com",
                  "name": "Resizer Tools",
                  "description": "Compress, resize, merge, split, rotate, watermark, lock, unlock, and sign PDF or image files 100% locally in your browser.",
                  "publisher": {
                    "@id": "https://www.resizertools.com/#organization"
                  }
                }
              ]
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
