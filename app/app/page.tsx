import Link from "next/link";
import { 
  Apple, ShieldCheck, CheckCircle2, ArrowLeft, 
  Sparkles, Lock, Zap, QrCode, Cpu, ExternalLink, Smile
} from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Download Resizer Tools Mobile App - iOS & Android",
  description: "Download Resizer Tools mobile app for iOS. 100% private, offline PDF & image tools with NFC, camera document scanning, and zero server uploads.",
};

export default function AppDownloadPage() {
  const iosAppUrl = "https://apps.apple.com/app/id6742385150";

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-16 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background glow ambiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-xl space-y-10 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-gold transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Web Workspace
        </Link>

        {/* Hero Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-xs font-mono text-brand-gold uppercase tracking-wider mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> Mobile Companion App
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Resizer Tools for Mobile
          </h1>
          <p className="text-sm sm:text-base text-brand-muted font-light max-w-md mx-auto leading-relaxed">
            Carry 26 offline PDF & image utilities in your pocket. 100% client-side privacy, camera document scanner, and NFC radio tools.
          </p>
        </div>

        {/* Download Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* iOS App Store Button */}
          <a
            href={iosAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 p-6 rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#111111] border border-brand-gold/40 hover:border-brand-gold text-white shadow-premium-gold hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
          >
            <Apple className="w-10 h-10 text-brand-gold group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <div className="text-[10px] uppercase font-mono text-brand-muted tracking-wider">Download on</div>
              <div className="text-base font-extrabold text-white">Apple App Store</div>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Available for iOS
            </div>
          </a>

          {/* Android Play Store Card (Coming Soon) */}
          <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-3xl bg-white/[0.02] border border-white/10 text-center relative overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <Smile className="w-6 h-6 text-brand-gold animate-bounce" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono text-brand-muted tracking-wider">Google Play Store</div>
              <div className="text-base font-bold text-white flex items-center justify-center gap-1.5">
                Android App Coming Soon! 😊
              </div>
            </div>
            <p className="text-[11px] text-brand-muted font-light leading-snug pt-1">
              We are crafting a super-fast native Android app. Stay tuned! ✨
            </p>
          </div>

        </div>

        {/* Features Highlights */}
        <div className="p-6 rounded-3xl bg-[#121212]/80 border border-white/5 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Why Use Resizer Tools Mobile?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-muted font-light">
            <li className="flex items-start gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong className="text-white">Zero Server Uploads:</strong> Files stay 100% on your device.</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong className="text-white">Works 100% Offline:</strong> Process files without internet access.</span>
            </li>
            <li className="flex items-start gap-2">
              <QrCode className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong className="text-white">Offline QR & NFC:</strong> Scan and program NFC tags on mobile.</span>
            </li>
            <li className="flex items-start gap-2">
              <Cpu className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong className="text-white">Camera Scanner:</strong> Auto-crop passport & ID sheets natively.</span>
            </li>
          </ul>
        </div>

        {/* Footer Link */}
        <div className="text-center pt-4">
          <Link
            href="/card"
            className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline font-mono"
          >
            View Founder Digital Card <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </main>
  );
}
