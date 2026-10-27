import type { Metadata } from "next";
import Link from "next/link";
import { 
  Cpu, Lock, Globe, ArrowLeft, 
  Sparkles, Code2, FileCheck, CheckCircle2, HeartHandshake
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us - Resizer Tools | Privacy-First Web Utilities",
  description: "Learn about Resizer Tools, our mission to deliver 100% client-side, zero-upload PDF and image tools, our engineering principles, and our team.",
  alternates: {
    canonical: "https://www.resizertools.com/about",
  },
  openGraph: {
    title: "About Resizer Tools - 100% Private Client-Side Utilities",
    description: "Discover how Resizer Tools executes PDF editing, image compression, and document processing directly in your browser with zero server uploads.",
    url: "https://www.resizertools.com/about",
    siteName: "Resizer Tools",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.resizertools.com/about#webpage",
        "url": "https://www.resizertools.com/about",
        "name": "About Resizer Tools",
        "description": "Learn about the mission, engineering architecture, and team behind Resizer Tools.",
        "publisher": {
          "@id": "https://www.resizertools.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.resizertools.com/#organization",
        "name": "Resizer Tools",
        "url": "https://www.resizertools.com",
        "logo": "https://www.resizertools.com/icon.svg",
        "founder": {
          "@type": "Person",
          "name": "Saurabh Kumar Sharma",
          "jobTitle": "Lead Software Engineer & Founder",
          "sameAs": [
            "https://github.com/Sudan051"
          ]
        },
        "foundingDate": "2024",
        "description": "A privacy-first web utilities platform providing zero-upload client-side PDF, image, and document processing tools.",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "Saurabhsudan051@gmail.com",
          "contactType": "customer support"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light pt-20 px-4 sm:px-6 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Navigation back */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-gold transition-colors font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Workspace
        </Link>

        {/* Hero Section */}
        <header className="space-y-6 text-left border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-mono text-xs uppercase font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Our Mission &amp; Engineering Philosophy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Building the Future of <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent">Zero-Upload</span> Web Utilities
          </h1>
          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed max-w-3xl">
            Resizer Tools was founded with a singular conviction: your personal documents, tax filings, sensitive business contracts, and private photos should never be uploaded to remote cloud servers just to resize an image or merge two PDF files.
          </p>
        </header>

        {/* The Problem We Solve */}
        <section className="space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            The Critical Privacy Problem in Modern Web Converters
          </h2>
          <div className="space-y-4 text-sm text-neutral-300 font-light leading-relaxed">
            <p>
              For over a decade, digital file conversion followed an archaic, privacy-invasive model. When users needed to compress a JPEG, add a signature to a non-disclosure agreement, or split a legal brief, traditional websites required them to upload the raw file over the public internet to a remote server.
            </p>
            <p>
              This legacy architecture introduces severe vulnerabilities: files can be intercepted in transit, cached indefinitely on unvetted third-party storage buckets, scrutinized by automated data crawlers, or exposed in server-side security breaches. In an era where data protection laws like GDPR, CCPA, and HIPAA strictly mandate digital privacy, uploading confidential paperwork to anonymous cloud servers represents an unacceptable compliance liability.
            </p>
            <p>
              <strong>Resizer Tools completely reimagines this paradigm.</strong> We harness modern browser primitives—including WebAssembly, HTML5 Canvas 2D pipelines, WebCrypto APIs, and OffscreenCanvas workers—to execute every single byte transformation locally inside your machine&apos;s isolated browser sandbox.
            </p>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">100% Client-Side Privacy</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Your files never leave your computer or smartphone. We do not operate remote processing queues, document ingestion endpoints, or cloud storage buckets.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Hardware Acceleration</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              By utilizing your local CPU and GPU through WebGL and WebAssembly, operations complete instantly without internet latency, upload delays, or download wait times.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Universal Offline Functionality</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Thanks to Progressive Web App (PWA) service workers, once you load Resizer Tools, you can disconnect from Wi-Fi or cellular networks and process files entirely offline.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero Paywalls &amp; No Registration</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              We do not force user account creation, capture email addresses, or impose arbitrary daily file quotas. All 28 utility tools are freely accessible to everyone worldwide.
            </p>
          </div>
        </section>

        {/* Technical Architecture & Stack */}
        <section className="space-y-6 text-left bg-gradient-to-b from-white/[0.02] to-transparent p-8 sm:p-10 rounded-3xl border border-white/5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-brand-gold font-mono text-xs uppercase font-bold tracking-wider">
              <Code2 className="w-4 h-4" /> Under The Hood
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Our Technology Stack &amp; Implementation Standards
            </h2>
          </div>
          <p className="text-sm text-neutral-300 font-light leading-relaxed">
            Every utility on Resizer Tools is engineered with modern, standards-compliant open web technologies:
          </p>
          <ul className="space-y-3 text-xs text-neutral-300 font-light">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>PDF Processing Engine:</strong> Built on top of <code className="text-brand-gold-light">pdf-lib</code> and custom WebAssembly vector parsers, enabling lossless page manipulation, cryptographic digital signatures, and PDF stream compression without native dependencies.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>Raster Graphics &amp; Compression:</strong> Powered by the HTML5 Canvas 2D API, WebGL shaders, and high-performance bicubic downsampling algorithms that reduce visual artifacts while stripping non-essential EXIF metadata.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>Cryptographic Security:</strong> Standard AES-128 and AES-256 PDF encryption modules conformant to Adobe PDF ISO 32000 specifications executed entirely in client-side memory.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>Web Platform:</strong> Developed with Next.js 16 (App Router), React, TypeScript, and Tailwind CSS for instant sub-second page loads and zero runtime vulnerabilities.</span>
            </li>
          </ul>
        </section>

        {/* Editorial Standards, Curation & Maintenance */}
        <section className="space-y-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-brand-gold font-mono text-xs uppercase font-bold tracking-wider">
              <FileCheck className="w-4 h-4" /> Quality Assurance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ongoing Curation, Testing &amp; Content Standards
            </h2>
          </div>
          <div className="space-y-4 text-sm text-neutral-300 font-light leading-relaxed">
            <p>
              To maintain high utility performance and user trust, our engineering team continuously tests Resizer Tools across all major browser engines—Google Chrome (Blink), Apple Safari (WebKit), Mozilla Firefox (Gecko), and Microsoft Edge.
            </p>
            <p>
              Our comprehensive educational articles and step-by-step guides undergo rigorous technical verification. We ensure that all guidance on image compression ratios, ATS resume formatting rules, and PDF legal signature validity reflects current industry specifications and compliance mandates.
            </p>
          </div>
        </section>

        {/* Founder & Team Section */}
        <section className="space-y-6 text-left p-8 sm:p-10 rounded-3xl bg-brand-obsidian/40 border border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-gold-dark to-brand-gold flex items-center justify-center text-black font-extrabold text-2xl font-mono shrink-0 shadow-premium-gold">
              SS
            </div>
            <div className="space-y-1 text-left">
              <h3 className="text-xl font-bold text-white tracking-tight">Saurabh Kumar Sharma</h3>
              <p className="text-xs text-brand-gold font-mono">Founder &amp; Principal Software Engineer</p>
              <p className="text-xs text-neutral-400 font-light pt-1 leading-relaxed max-w-2xl">
                Full-stack developer and open web enthusiast specializing in high-performance browser-native applications, WebAssembly integrations, and privacy-first digital tools.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div>
              <span>GitHub: </span>
              <a 
                href="https://github.com/Sudan051" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline"
              >
                github.com/Sudan051
              </a>
            </div>
            <div>
              <span>Inquiries: </span>
              <a 
                href="mailto:Saurabhsudan051@gmail.com" 
                className="text-brand-gold hover:underline"
              >
                Saurabhsudan051@gmail.com
              </a>
            </div>
            <div>
              <span>Location: Haridwar, Uttarakhand, India</span>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="p-8 rounded-3xl bg-gradient-to-r from-brand-gold/10 via-brand-obsidian to-black border border-brand-gold/25 text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">Have Questions or Suggestions?</h3>
            <p className="text-xs text-neutral-400 font-light">
              We welcome tool feature requests, bug reports, and partnership inquiries from developers and users.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs px-6 py-3 rounded-full shadow-premium-gold hover:scale-105 transition-transform shrink-0"
          >
            Contact Our Team 📬
          </Link>
        </section>

      </div>

      <div className="mt-20">
        <SiteFooter />
      </div>
    </main>
  );
}
