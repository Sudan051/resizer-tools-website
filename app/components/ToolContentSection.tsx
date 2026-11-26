"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Star, ShieldCheck, Zap, Lock, 
  ChevronDown, CheckCircle2, ArrowRight, 
  Sparkles, Layers, Globe, Check
} from "lucide-react";
import { toolsData, getToolSEOContent } from "../data/tools";

export interface SerializableTool {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  category?: string;
}

interface ToolContentSectionProps {
  tool: SerializableTool;
}

function getCategorySpecs(tool: SerializableTool) {
  const cat = (tool.category || "utility").toLowerCase();
  const id = tool.id.toLowerCase();

  if (id === "pwd_gen") {
    return {
      formats: "Cryptographic UTF-8 Character Sets (A-Z, a-z, 0-9, Symbols)",
      formatNote: "Configurable entropy length from 8 to 64 characters",
      engine: "Web Crypto API (window.crypto.getRandomValues CSPRNG)",
      engineNote: "Hardware-backed pseudorandom number entropy inside RAM",
      useCases: [
        { title: "Enterprise & Cloud Access Credentials", body: `Create high-entropy 20+ character administrator keys with ${tool.title} without exposing raw secrets to third-party password APIs.` },
        { title: "API Tokens & Webhook Signing Keys", body: "Generate URL-safe or full-symbol authentication secrets locally in memory during server provisioning and DevOps configuration." },
      ],
    };
  }
  if (id === "qr_gen" || id === "bar_gen") {
    return {
      formats: id === "bar_gen" ? "Code-128 & Printable High-DPI PNG Bitmap" : "ISO/IEC 18004 Static Matrix PNG (URL, Wi-Fi, Text, vCard)",
      formatNote: "Direct crisp contrast export without dynamic tracking redirects",
      engine: "Client-Side Canvas 2D Encoder",
      engineNote: "Deterministic static barcode/QR rendering in browser memory",
      useCases: [
        { title: "Retail Packaging & Logistics Labeling", body: `Produce scannable monochrome matrix labels with ${tool.title} ready for thermal printers, product packaging, and inventory SKUs.` },
        { title: "Privacy-First Offline Sharing", body: "Encode direct destination URLs and Wi-Fi SSIDs without routing users through analytics redirect trackers or expiring links." },
      ],
    };
  }
  if (cat === "nfc") {
    return {
      formats: "NDEF Records (URI, Plain Text, Wi-Fi Credentials) • NTAG213/215/216",
      formatNote: "Real-time payload byte-length validation against chip limits",
      engine: "W3C Web NFC API (NDEFReader) + NDEF Calculator",
      engineNote: "Direct NDEF programming on Chrome Android & inspection on desktop",
      useCases: [
        { title: "Contactless Business Cards & Event Badges", body: `Validate NTAG213/215 payload capacities and write portfolio URLs directly onto physical NFC cards with ${tool.title}.` },
        { title: "Office & Smart Workspace Automation", body: "Audit NDEF payloads and estimate byte consumption before flashing smart tags for desk triggers or guest Wi-Fi access." },
      ],
    };
  }
  if (cat === "pdf") {
    return {
      formats: "PDF 1.4 – 1.7 Standards, AcroForm Dictionaries, Vector Page Trees",
      formatNote: "Structural object-stream manipulation and AES encryption support",
      engine: "Pure Client-Side PDF-Lib + WebCrypto Sandbox",
      engineNote: "Zero cloud upload; modifies xref tables and content streams in RAM",
      useCases: [
        { title: "Legal Contracts & Confidential Regulatory Filings", body: `Process NDAs, tax returns, and board packets with ${tool.title} under strict zero-upload GDPR and internal compliance rules.` },
        { title: "Academic & Portal File Compliance", body: "Meet strict 1MB–5MB portal upload limits, reorganize scanned page order, or strip blank covers instantly in offline tabs." },
      ],
    };
  }
  if (cat === "converter") {
    return {
      formats: "Cross-Format Pipelines (PDF, DOC/TXT, CSV/Excel, JPG, PNG, WebP)",
      formatNote: "Preserves tabular structure, resolution, and transparent alpha where supported",
      engine: "HTML5 Canvas Decoder + Document Stream Parser",
      engineNote: "Runs format transcoding locally with zero cloud queueing latency",
      useCases: [
        { title: "Accounting Data Extraction & Reporting", body: `Transform read-only statements and spreadsheets with ${tool.title} directly on your workstation without risking financial leakages.` },
        { title: "Universal Document & Web Compatibility", body: "Convert restricted camera formats or multi-image batches into universally readable PDFs, JPEGs, or editable document files." },
      ],
    };
  }
  if (cat === "scanner") {
    return {
      formats: "Live Camera Video Streams, PNG/JPEG Document Snapshots, QR Codes",
      formatNote: "Adaptive contrast calibration and native BarcodeDetector decoding",
      engine: "MediaDevices Camera API + HTML5 Canvas Image Filters",
      engineNote: "Real-time frame processing without transmitting video frames externally",
      useCases: [
        { title: "Expense Receipts & Whiteboard Digitization", body: `Clean up skewed shadows and enhance text legibility with ${tool.title} before archiving receipts or study notes locally.` },
        { title: "Secure Link Auditing Before Opening", body: "Inspect decoded QR payloads in sandboxed plain text before navigating to unfamiliar URLs or joining external Wi-Fi networks." },
      ],
    };
  }
  return {
    formats: "JPEG, PNG, WebP, GIF, BMP, HEIC & Standard Print Aspect Grids",
    formatNote: "Preserves pixel clarity, EXIF orientation, and target DPI budgets",
    engine: "Hardware-Accelerated HTML5 Canvas 2D & Offscreen Buffers",
    engineNote: "Direct GPU bicubic resampling inside isolated browser memory",
    useCases: [
      { title: "Web Core Web Vitals & E-Commerce Optimization", body: `Optimize hero imagery and product catalogs with ${tool.title} to shrink LCP transfer budgets and speed up mobile page loads.` },
      { title: "Official Exam, Visa & Passport Portals", body: "Dial in exact pixel dimensions, 2x2 inch / 35x45mm biometric ratios, and KB ceilings required by online application portals." },
    ],
  };
}

export default function ToolContentSection({ tool }: ToolContentSectionProps) {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState<boolean>(false);

  const seo = getToolSEOContent(tool);
  const specs = getCategorySpecs(tool);

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
  };

  // Contextual related tools with rotating window to ensure balanced link distribution across all tools
  const sameCategoryTools = toolsData.filter((t) => t.id !== tool.id && t.category === tool.category);
  const currentIndex = toolsData.findIndex((t) => t.id === tool.id);
  const rotatedSameCategory = sameCategoryTools.length > 0
    ? [
        ...sameCategoryTools.slice(currentIndex % sameCategoryTools.length),
        ...sameCategoryTools.slice(0, currentIndex % sameCategoryTools.length)
      ]
    : [];
  const otherCategoryTools = toolsData.filter((t) => t.id !== tool.id && t.category !== tool.category);
  const relatedTools = [...rotatedSameCategory, ...otherCategoryTools].slice(0, 6);

  return (
    <div className="w-full bg-[#080808] text-white border-t border-white/5 py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* 1. INTERACTIVE RATING & TRUST METRICS BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRate(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(null)}
                  className="p-1 text-brand-gold hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                  aria-label={`Rate ${star} stars out of 5`}
                >
                  <Star
                    className={`w-6 h-6 transition-colors ${
                      (hoverRating !== null ? star <= hoverRating : star <= (userRating || 5))
                        ? "fill-brand-gold text-brand-gold"
                        : "text-neutral-600"
                    }`}
                  />
                </button>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-base font-extrabold text-white">Rate this utility</span>
                {hasRated && (
                  <span className="text-xs text-brand-gold font-mono font-bold">(Rated {userRating}.0 / 5.0)</span>
                )}
              </div>
              <p className="text-xs text-brand-muted font-medium">
                {hasRated ? "Thank you for rating this tool!" : "Click stars to rate your user experience"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <Check className="w-3.5 h-3.5 stroke-[3]" /> 100% Client-Side
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Free & Unlimited
            </span>
          </div>
        </div>

        {/* 2. CORE VALUE PROPOSITION & IN-DEPTH TECHNICAL OVERVIEW */}
        <section className="space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Built For Privacy &amp; Performance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Professionals Rely on {tool.title}
            </h2>
            {seo.overview && seo.overview.length > 0 ? (
              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-4xl">
                {seo.overview.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-3xl">
                Unlike traditional cloud utilities that transfer your confidential documents over the network, Resizer Tools executes all transformations in zero-trust, local browser memory.
              </p>
            )}
          </div>

          {seo.features && seo.features.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {seo.features.map((feat, fIdx) => (
                <div key={fIdx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-2 group">
                  <div className="w-8 h-8 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold text-xs font-mono font-bold">
                    0{fIdx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{feat.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">{feat.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-3 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Instant Local Processing</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  No server upload queues, network timeouts, or bandwidth throttling. Operations complete in milliseconds directly on your CPU/GPU.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-3 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">High Fidelity &amp; Lossless Precision</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Native HTML5 Canvas rendering and WebAssembly vector compilation preserve vector clarity, font glyphs, and color profiles accurately.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-3 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Zero-Log Data Privacy</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Financial records, tax returns, passport scans, and contracts remain strictly confined to your physical machine with no remote database persistence.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* 3. STEP-BY-STEP "HOW TO USE" GUIDE */}
        <section className="space-y-8 text-left bg-gradient-to-b from-white/[0.02] to-transparent p-8 md:p-10 rounded-3xl border border-white/5">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Quick Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How to use {tool.title} Online for Free
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-3xl">
              Follow these simple steps to process your files in seconds without installing any software or waiting for uploads:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seo.steps.map((stepText, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3 relative overflow-hidden">
                <div className="w-8 h-8 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold font-mono text-sm">
                  {idx + 1}
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {stepText}
                </p>
                <div className="absolute top-2 right-3 font-mono text-[9px] text-white/10 font-black">
                  STEP 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 leading-relaxed font-light space-y-3">
            <p>
              The <strong>{tool.title}</strong> on Resizer Tools is built for fast, everyday productivity. Whether you are prepping documents for work, submitting official forms, creating App Store screenshots, or optimizing photos for the web, everything happens right inside your browser.
            </p>
            <p>
              Once loaded, you can even use this tool offline without an active internet connection—convenient when traveling, working remotely, or dealing with slow Wi-Fi.
            </p>
          </div>
        </section>

        {/* 4. TECHNICAL SPECIFICATIONS & BROWSER COMPATIBILITY MATRIX */}
        <section className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Technical Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Architecture, Engine &amp; Compatibility
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Detailed technical overview of execution parameters, supported file formats, cryptographic safeguards, and browser engine requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="bg-white/5 text-brand-gold font-mono uppercase text-[10px] tracking-wider border-b border-white/10">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Specification Parameter</th>
                  <th className="py-3 px-4 sm:px-6">Implementation Standard</th>
                  <th className="py-3 px-4 sm:px-6">Performance &amp; Security Guarantee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-light">
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Execution Environment</td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-brand-gold">Client-Side JavaScript / WebAssembly</td>
                  <td className="py-3.5 px-4 sm:px-6">Zero bytes dispatched to external cloud servers</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Supported Input / Output</td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-neutral-200">{specs.formats}</td>
                  <td className="py-3.5 px-4 sm:px-6">{specs.formatNote}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Offline Capability (PWA)</td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-emerald-400">Supported via Service Worker cache</td>
                  <td className="py-3.5 px-4 sm:px-6">Fully functional with no active network or Wi-Fi connection</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Processing Architecture</td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-neutral-200">{specs.engine}</td>
                  <td className="py-3.5 px-4 sm:px-6">{specs.engineNote}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Memory Lifecycle</td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-neutral-200">Transient Blob &amp; TypedArray Buffers</td>
                  <td className="py-3.5 px-4 sm:px-6">Auto-garbage collected upon tab dismissal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. PRACTICAL REAL-WORLD USE CASES */}
        <section className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Professional Workflows
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Practical Use Cases for {tool.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              See how different professionals, businesses, and everyday users streamline their digital workflows with {tool.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.useCases.map((uc, uIdx) => (
              <div key={uIdx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                  {uc.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {uc.body}
                </p>
              </div>
            ))}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                Remote Teams &amp; Low-Connectivity Travel
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Execute {tool.title.toLowerCase()} operations cleanly on laptops, tablets, or smartphones during flights or restricted corporate VPN environments without cloud uploads.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                Compliance-Strict GDPR &amp; Zero-Log Auditing
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Maintain 100% data ownership when handling regulated records—your files remain in volatile browser RAM and never traverse third-party storage servers.
              </p>
            </div>
          </div>
        </section>

        {/* ️ 6. YOUR PRIVACY, OUR CORE COMMITMENT TRUST SECTION */}
        <section className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-brand-gold/10 via-brand-obsidian to-black border border-brand-gold/25 text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold font-mono text-[10px] font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" /> Privacy Guarantee
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Your Files Stay on Your Device
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Most online file converters upload your personal documents and photos to their cloud servers. Resizer Tools runs entirely inside your browser memory, so your files are never transferred over the internet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Zero Server Uploads &amp; Zero Logs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Works Completely Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Processes Directly in Local RAM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Auto-Purged when Tab Closes</span>
              </div>
            </div>
          </div>

          <div className="w-36 h-36 rounded-3xl bg-brand-gold/10 border border-brand-gold/30 flex flex-col items-center justify-center text-center p-4 shrink-0 shadow-premium-gold">
            <ShieldCheck className="w-12 h-12 text-brand-gold mb-2" />
            <span className="text-[11px] font-extrabold text-white">100% PRIVATE</span>
            <span className="text-[9px] text-brand-muted font-mono">ZERO UPLOADS</span>
          </div>
        </section>

        {/* 7. INTERACTIVE ACCORDION FAQ SECTION */}
        <section className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Got Questions? We&apos;ve Got Answers
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Helpful answers about {tool.title} privacy, file limits, browser compatibility, and offline usage.
            </p>
          </div>

          <div className="space-y-3">
            {seo.faq.map((item, idx) => (
              <details
                key={idx}
                open={idx < 2}
                className="group rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors overflow-hidden"
              >
                <summary className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer list-none select-none focus:outline-none">
                  <span className="text-sm font-bold text-white flex items-center gap-2.5">
                    <span className="text-brand-gold font-mono text-xs">Q{idx + 1}.</span> {item.q}
                  </span>
                  <div className="p-1 rounded-lg bg-white/5 text-brand-muted shrink-0">
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
                  </div>
                </summary>

                <div className="px-5 pb-5 pt-2 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 8. RELATED TOOLS INTERNAL LINKING GRID */}
        <section className="space-y-6 text-left pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold">Related Utilities</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Explore More Free Web Tools</h2>
            </div>
            <Link href="/#studio" className="text-xs font-mono text-brand-gold hover:underline flex items-center gap-1">
              View All {toolsData.length} Tools →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map((rel) => (
              <Link
                key={rel.id}
                href={`/${rel.slug}`}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-gold/15 text-brand-gold uppercase">
                      {rel.category || "Utility"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">{rel.title}</h3>
                  <p className="text-xs text-neutral-400 font-light line-clamp-2">{rel.subtitle || rel.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/5 mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>100% Free</span>
                  <span className="text-emerald-400 font-medium">Offline Ready</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
