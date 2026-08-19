import Link from "next/link";
import ScreenshotStudioClient from "./client";

export const dynamic = "force-static";

export const metadata = {
  title: "App Store & Play Store Screenshot Generator Studio - Resizer Tools",
  description: "Create pixel-perfect, high-converting iOS App Store (6.7\", 6.5\", 5.5\", iPad 13\") & Google Play Store (Phone, 7\" & 10\" Tablet) screenshots with dark-gold luxury device frames, custom typography, and instant batch export.",
};

export default function ShotsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-10 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Ambiance glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-gold/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-gold transition-colors font-mono mb-2"
            >
              ← Back to Web Studio
            </Link>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>App Store Screenshot Studio</span>
              <span className="text-xs bg-brand-gold/20 text-brand-gold font-mono px-2 py-0.5 rounded border border-brand-gold/30">PRO</span>
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted font-light mt-1">
              Generate 6.7&quot; iPhone, 6.5&quot;, 5.5&quot;, iPad 13&quot; &amp; Android Play Store marketing screenshots 100% locally.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              href="/app" 
              className="bg-white/5 border border-white/10 hover:border-brand-gold/40 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-all"
            >
              Download Mobile Apps
            </Link>
          </div>
        </div>

        {/* Client Interactive Generator Canvas */}
        <ScreenshotStudioClient />

      </div>

    </main>
  );
}
