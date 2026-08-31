import Link from "next/link";
import { 
  Apple, ShieldCheck, CheckCircle2, ArrowLeft, 
  Sparkles, Lock, Zap, QrCode, 
  Star, Smartphone, Camera 
} from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Download Resizer Tools Mobile App - Official iOS & Android Apps",
  description: "Download Resizer Tools official mobile app for iOS App Store and Google Play Store. 100% private, offline PDF & image utilities, camera document scanner, and NFC writer.",
  alternates: {
    canonical: "https://www.resizertools.com/app",
  },
};

export default function AppDownloadPage() {
  const iosAppUrl = "https://apps.apple.com/us/app/resizer-tools-pdf-image-qr/id6785073828";
  const androidAppUrl = "https://play.google.com/store/apps/details?id=com.resizertools.app";

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-16 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Glow background ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-4xl space-y-12 relative z-10">
        
        {/* Back Link */}
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-gold transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Web Workspace
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> iOS & Android Apps Live
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs font-mono text-brand-gold uppercase tracking-wider mx-auto shadow-glass">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> Official Mobile Suite
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Carry 27 Studio Tools <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark">
              Right in Your Pocket
            </span>
          </h1>

          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
            Experience 100% offline PDF compilation, 120FPS camera document scanning, and Web NFC tag programming with absolute privacy. Zero server uploads guaranteed.
          </p>

          {/* Social Proof Rating */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-brand-muted font-mono">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold">4.9/5 Rating</span>
            <span>• 100% Client-Side Safe</span>
          </div>
        </div>

        {/* Download Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* iOS App Store Button */}
          <a
            href={iosAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-8 rounded-3xl bg-gradient-to-b from-[#1c1c1c] via-[#121212] to-[#0a0a0a] border border-brand-gold/50 hover:border-brand-gold text-white shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
            <Apple className="w-12 h-12 text-brand-gold group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <div className="text-[10px] uppercase font-mono text-brand-muted tracking-widest">Download for iPhone / iPad</div>
              <div className="text-lg font-extrabold text-white">Apple App Store</div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" /> Official iOS App
            </div>
          </a>

          {/* Android Play Store Button */}
          <a
            href={androidAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-8 rounded-3xl bg-gradient-to-b from-[#1c1c1c] via-[#121212] to-[#0a0a0a] border border-emerald-500/50 hover:border-emerald-400 text-white shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <Smartphone className="w-12 h-12 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <div className="text-[10px] uppercase font-mono text-brand-muted tracking-widest">Get it on Android</div>
              <div className="text-lg font-extrabold text-white">Google Play Store</div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" /> Official Android App
            </div>
          </a>

        </div>

        {/* Device Mockup Display */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-white/10 space-y-6 max-w-3xl mx-auto shadow-2xl">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" /> Built for Mobile-First Productivity
            </h2>
            <p className="text-xs text-brand-muted font-light">
              Why millions choose Resizer Tools over standard cloud converters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-left">
              <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white">Zero Uploads</h3>
              <p className="text-[11px] text-brand-muted font-light leading-relaxed">
                Files stay in local RAM. Complete security for confidential legal & tax files.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-left">
              <div className="p-2 w-fit rounded-lg bg-brand-gold/10 text-brand-gold">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white">100% Offline</h3>
              <p className="text-[11px] text-brand-muted font-light leading-relaxed">
                Edit PDFs and compress images without internet connectivity on flights or travel.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-left">
              <div className="p-2 w-fit rounded-lg bg-brand-gold/10 text-brand-gold">
                <Camera className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white">HD Doc Scanner</h3>
              <p className="text-[11px] text-brand-muted font-light leading-relaxed">
                Camera edge detection automatically formats passport & ID cards cleanly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-left">
              <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400">
                <QrCode className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white">NFC & QR Radio</h3>
              <p className="text-[11px] text-brand-muted font-light leading-relaxed">
                Scan, write, and program physical NFC tags and vCards directly from your phone.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Application Features & Mobile Architecture */}
        <div className="pt-8 border-t border-white/5 space-y-6 text-xs text-brand-muted font-light leading-relaxed max-w-3xl mx-auto text-left">
          <h2 className="text-base font-bold text-white tracking-tight">Why Choose the Resizer Tools Mobile App?</h2>
          <p>
            The official Resizer Tools mobile app for iOS and Android is engineered for professionals, students, photographers, and developers who require reliable, offline-ready document and image manipulation. Unlike traditional cloud converters that require stable LTE/5G connections and upload confidential data to remote servers, our mobile apps run native on-device rendering engines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5">
              <h3 className="font-semibold text-white">Full On-Device Hardware Acceleration</h3>
              <p>Utilizes Apple Metal, iOS CoreImage, and Android Canvas APIs to deliver instantaneous compression and multi-page PDF compilation without battery drain.</p>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5">
              <h3 className="font-semibold text-white">Zero Cloud Tracking &amp; Absolute Privacy</h3>
              <p>Your contracts, medical scans, signatures, and personal photos are processed exclusively in sandboxed application memory. No telemetry or file harvesting.</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-6 text-xs font-mono text-brand-muted border-t border-white/5">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home Studio
          </Link>
          <span>•</span>
          <Link href="/shots" className="hover:text-brand-gold transition-colors">
            Screenshot Studio
          </Link>
          <span>•</span>
          <Link href="/card" className="hover:text-brand-gold transition-colors">
            Founder Profile
          </Link>
          <span>•</span>
          <Link href="/blog" className="hover:text-brand-gold transition-colors">
            Guides &amp; Tutorials
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-brand-gold transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>

    </main>
  );
}
