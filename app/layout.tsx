import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    canonical: "https://resizertools.com/",
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
    url: "https://resizertools.com/",
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
                  "@type": "WebApplication",
                  "@id": "https://resizertools.com/#webapp",
                  "name": "Resizer Tools",
                  "url": "https://resizertools.com/",
                  "description": "Compress, resize, merge, split, rotate, watermark, lock, unlock, and sign PDF or image files 100% locally in your browser. Zero server uploads, private and secure.",
                  "applicationCategory": "Utility",
                  "operatingSystem": "All",
                  "browserRequirements": "Requires HTML5, WebCrypto API, Canvas API",
                  "softwareVersion": "1.0",
                  "offers": {
                    "@type": "Offer",
                    "price": "0.00",
                    "priceCurrency": "USD"
                  },
                  "featureList": [
                    "Offline Image Compressor",
                    "Browser-native Image Resizer",
                    "Merge PDF files locally",
                    "Split PDF files locally",
                    "Draw and Sign PDF documents",
                    "Client-side PDF Watermark creator",
                    "Format Converter HEIC, PNG, JPEG, WebP",
                    "Offline QR Code Scanner & Generator",
                    "NFC Tag Writer & Reader",
                    "Document Camera Scanner"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://resizertools.com/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Does Resizer Tools upload my files to any server?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, Resizer Tools processes all files 100% locally inside your web browser. Your private PDFs, signatures, and images never leave your device."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Resizer Tools free to use?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Resizer Tools provides free access to all its native web utilities. There is also an optional premium tier to support development and remove ads."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does offline PDF and image processing work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It leverages client-side Web APIs (Canvas API, WebCrypto API) and local libraries (pdf-lib) to modify files directly in the browser memory, offering zero latency and maximum security."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
