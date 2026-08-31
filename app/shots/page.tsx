import Link from "next/link";
import ScreenshotStudioClient from "./client";

export const dynamic = "force-static";

export const metadata = {
  title: "App Store & Play Store Screenshot Generator Studio - Resizer Tools",
  description: "Create pixel-perfect, high-converting iOS App Store (6.7\", 6.5\", 5.5\", iPad 13\") & Google Play Store (Phone, 7\" & 10\" Tablet) screenshots with dark-gold luxury device frames, custom typography, and instant batch export.",
  alternates: {
    canonical: "https://www.resizertools.com/shots",
  },
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

        {/* Informational SEO Guide & App Store Specifications */}
        <div className="pt-12 border-t border-white/10 space-y-8 text-xs text-brand-muted font-light leading-relaxed max-w-4xl mx-auto">
          <div className="space-y-3 text-left">
            <h2 className="text-lg font-bold text-white tracking-tight">App Store &amp; Google Play Screenshot Dimensions (2026 Guide)</h2>
            <p>
              Publishing your mobile app on the Apple App Store and Google Play Store requires uploading screenshots that strictly comply with official store dimension guidelines. High-converting screenshot sets with readable value propositions and dark-gold luxury device mockups directly increase organic tap-through rates (TTR) and store conversion rates (CVR).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h3 className="font-bold text-white font-mono text-xs uppercase tracking-wider text-brand-gold">Apple App Store Specifications</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>**6.7&quot; Super Retina (iPhone 16 Pro Max, 15 Pro Max)**: 1290 x 2796 px (Portrait)</li>
                <li>**6.5&quot; Display (iPhone 14 Plus, 11 Pro Max)**: 1242 x 2688 px (Portrait)</li>
                <li>**5.5&quot; Display (iPhone 8 Plus, 7 Plus)**: 1242 x 2208 px (Portrait)</li>
                <li>**13&quot; iPad Pro (M4 &amp; 6th Gen Liquid Retina)**: 2064 x 2752 px (Portrait)</li>
              </ul>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h3 className="font-bold text-white font-mono text-xs uppercase tracking-wider text-brand-gold">Google Play Store Specifications</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>**Android Phone Display**: 1080 x 2400 px or 1080 x 1920 px (16:9 / 20:9 ratio)</li>
                <li>**7-inch Tablet Screenshots**: 1200 x 1920 px (minimum 1080 px edge)</li>
                <li>**10-inch Tablet Screenshots**: 1600 x 2560 px (required for Play Tablet feature)</li>
                <li>**Aspect Ratio**: 16:9, 18:9, 19.5:9 or 20:9 supported</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 text-left">
            <h2 className="text-lg font-bold text-white tracking-tight">100% Client-Side Privacy &amp; Instant Batch Export</h2>
            <p>
              Unlike traditional cloud design portals that upload your unreleased app UI mockups to third-party servers, Resizer Tools processes all slide renders, typography blending, gradients, and device shadows locally on your device using HTML5 Canvas. Export your full 5-slide screenshot suite instantly in high-resolution PNG or compressed ZIP format.
            </p>
          </div>

          {/* Footer Directory */}
          <div className="pt-8 border-t border-white/5 text-center font-mono space-y-3">
            <div className="flex flex-wrap justify-center gap-4 text-[11px]">
              <Link href="/" className="hover:text-brand-gold">Home Studio</Link>
              <Link href="/tools/shot-gen" className="hover:text-brand-gold">Screenshot Tool</Link>
              <Link href="/app" className="hover:text-brand-gold">Mobile App</Link>
              <Link href="/card" className="hover:text-brand-gold">Pro Card</Link>
              <Link href="/blog" className="hover:text-brand-gold">Guides</Link>
              <Link href="/privacy" className="hover:text-brand-gold">Privacy Policy</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Resizer Tools. All rights reserved.</p>
          </div>
        </div>

      </div>

    </main>
  );
}
