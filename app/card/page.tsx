"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, ExternalLink, Mail, Globe, Play, 
  Sparkles, Layers, Smartphone, CheckCircle2, X, Smile, Apple 
} from "lucide-react";

export default function DigitalCardPage() {
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  // Default iOS App Store link
  const iosAppUrl = "https://apps.apple.com/app/id6742385150";

  const handleAppDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";

    const isIOS = /iPad|iPhone|iPod|Macintosh/i.test(userAgent) && !("MSStream" in window);
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      window.open(iosAppUrl, "_blank", "noopener,noreferrer");
    } else if (isAndroid) {
      setShowAndroidModal(true);
    } else {
      // Fallback for Desktop/Others: default to iOS link or show options
      window.open(iosAppUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Glow background ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-brand-gold/30 rounded-[32px] p-6 sm:p-8 shadow-2xl relative z-10 space-y-8 backdrop-blur-xl">
        
        {/* Header Profile Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Saurabh's Profile Photo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-28 h-28 rounded-full border-4 border-[#080808] bg-[#1a1a1a] overflow-hidden shadow-2xl flex items-center justify-center">
              <Image 
                src="/saurabh-profile1.PNG" 
                alt="Saurabh Kumar Sharma" 
                width={112} 
                height={112} 
                className="w-full h-full object-cover object-top scale-125 origin-top"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-[10px] font-mono tracking-widest text-brand-gold uppercase">
              <Sparkles className="w-3 h-3 text-brand-gold" /> Creator & Developer
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">Saurabh Kumar Sharma</h1>
            <p className="text-xs text-brand-muted font-light">
              iOS Engineer & Founder of <span className="text-white font-medium">Resizer Tools</span>
            </p>
          </div>
        </div>

        {/* Product Value Proposition Box */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-left">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold" /> Resizer Tools (26-in-1 Suite)
          </h2>
          <p className="text-[11px] text-brand-muted leading-relaxed font-light">
            100% Client-side PDF & Image utilities. Compresses images, edits PDFs, signs documents, and scans QR/NFC <strong className="text-white">with zero server uploads</strong>.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-[10px] text-brand-gold-light font-mono">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Works Offline</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> 100% Private</span>
          </div>
        </div>

        {/* REAL CLICKABLE ACTION BUTTONS */}
        <div className="space-y-3">
          
          {/* Web App Button */}
          <Link 
            href="/"
            className="flex items-center justify-between w-full bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark text-black font-extrabold text-xs py-3.5 px-5 rounded-2xl shadow-premium-gold hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <Layers className="w-4 h-4" /> Open Web Utility Studio
            </span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </Link>

          {/* Mobile App Download Button */}
          <button 
            onClick={handleAppDownloadClick}
            className="flex items-center justify-between w-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-bold text-xs py-3.5 px-5 rounded-2xl hover:border-brand-gold/40 transition-all cursor-pointer group"
          >
            <span className="flex items-center gap-2.5">
              <Smartphone className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" /> Download Mobile App
            </span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-gold">
              <Apple className="w-3.5 h-3.5" /> iOS Link
            </div>
          </button>

          {/* Social Links */}
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/pandit-saurabh-kumar-sharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.05] transition-all group"
            >
              <Globe className="w-4 h-4 text-brand-gold mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium text-brand-muted group-hover:text-white">LinkedIn</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:Saurabhsudan051@gmail.com"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.05] transition-all group"
            >
              <Mail className="w-4 h-4 text-brand-gold mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium text-brand-muted group-hover:text-white">Email</span>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/@ComedyWithTau-Saurabh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.05] transition-all group"
            >
              <Play className="w-4 h-4 text-brand-gold mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium text-brand-muted group-hover:text-white">YouTube</span>
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 text-center text-[10px] font-mono text-brand-muted border-t border-white/5">
          resizertools.com &copy; {new Date().getFullYear()}
        </div>

      </div>

      {/* ANDROID COMING SOON MODAL */}
      {showAndroidModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-sm bg-[#121212] border border-brand-gold/40 rounded-3xl p-6 shadow-2xl text-center space-y-5 relative">
            
            <button 
              onClick={() => setShowAndroidModal(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center mx-auto shadow-inner">
              <Smile className="w-9 h-9 text-brand-gold animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-center gap-2">
                Android App Coming Soon! 😊
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                We are currently crafting a super-fast, 100% private native Android app just for you! Please stay tuned, it will be available on the Google Play Store very soon. ✨
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <Link
                href="/"
                onClick={() => setShowAndroidModal(false)}
                className="block w-full bg-brand-gold text-black font-bold text-xs py-3 rounded-xl hover:bg-brand-gold-light transition-all"
              >
                Use Web App in Browser Now 🚀
              </Link>

              <button
                onClick={() => setShowAndroidModal(false)}
                className="w-full text-xs text-brand-muted hover:text-white py-1 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
