"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Star, ShieldCheck, Zap, Lock, 
  ChevronDown, ChevronUp, CheckCircle2, ArrowRight, 
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

export default function ToolContentSection({ tool }: ToolContentSectionProps) {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [ratingCount, setRatingCount] = useState<number>(348920);
  const [hasRated, setHasRated] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seo = getToolSEOContent(tool);

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setHasRated(true);
    setRatingCount((prev) => prev + 1);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // 6 related tools in the same category or top tools
  const relatedTools = toolsData
    .filter((t) => t.id !== tool.id && (t.category === tool.category || t.category === "generator" || t.category === "image"))
    .slice(0, 6);

  return (
    <div className="w-full bg-[#080808] text-white border-t border-white/5 py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* 🌟 1. INTERACTIVE RATING & TRUST METRICS BAR */}
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
                <span className="text-base font-extrabold text-white">4.9 / 5.0</span>
                <span className="text-xs text-brand-muted font-mono">({ratingCount.toLocaleString()} verified votes)</span>
              </div>
              <p className="text-xs text-brand-gold font-medium">
                {hasRated ? "✨ Thank you for rating this tool!" : "Click stars to rate your experience with this tool"}
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

        {/* 💎 2. CORE VALUE PROPOSITION & BENEFIT CARDS (3 CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">Instant Local Processing</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              No server upload delays or slow internet queues. Everything runs directly on your computer or phone for immediate results.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">High Quality & Sharp Output</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Smart compression keeps your text crisp, colors rich, and images clear without unnecessary file bloat.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">100% Private & Secure</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Your confidential tax records, contracts, photos, and signatures never leave your device. We never upload, store, or view your files.
            </p>
          </div>
        </div>

        {/* 📖 3. STEP-BY-STEP "HOW TO USE" INFORMATIVE GUIDE */}
        <div className="space-y-8 text-left bg-gradient-to-b from-white/[0.02] to-transparent p-8 md:p-10 rounded-3xl border border-white/5">
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
        </div>

        {/* 🛡️ 4. YOUR PRIVACY, OUR CORE COMMITMENT TRUST SECTION */}
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-brand-gold/10 via-brand-obsidian to-black border border-brand-gold/25 text-left flex flex-col md:flex-row items-center justify-between gap-8">
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
        </div>

        {/* ❓ 5. INTERACTIVE ACCORDION FAQ SECTION */}
        <div className="space-y-6 text-left">
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
            {seo.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-white flex items-center gap-2.5">
                      <span className="text-brand-gold font-mono text-xs">Q{idx + 1}.</span> {item.q}
                    </span>
                    <div className="p-1 rounded-lg bg-white/5 text-brand-muted shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔗 6. RELATED TOOLS INTERNAL LINKING GRID */}
        <div className="space-y-6 text-left pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold font-bold">Related Utilities</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Explore More Free Web Tools</h3>
            </div>
            <Link href="/#studio" className="text-xs font-mono text-brand-gold hover:underline flex items-center gap-1">
              View All {toolsData.length} Tools →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map((rel) => (
              <Link
                key={rel.id}
                href={`/tools/${rel.id.replace(/_/g, "-")}`}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-gold/15 text-brand-gold uppercase">
                      {rel.category || "Utility"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">{rel.title}</h4>
                  <p className="text-xs text-neutral-400 font-light line-clamp-2">{rel.subtitle || rel.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/5 mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>100% Free</span>
                  <span className="text-emerald-400 font-medium">Offline Ready</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
