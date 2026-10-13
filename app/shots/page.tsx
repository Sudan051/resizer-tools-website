import ScreenshotStudioClient from "./client";
import ToolContentSection from "../components/ToolContentSection";
import SiteFooter from "../components/SiteFooter";
import { toolsData } from "../data/tools";

export const dynamic = "force-static";

export const metadata = {
  title: "App Store & Play Store Screenshot Generator Studio - Resizer Tools",
  description: "Create pixel-perfect, high-converting iOS App Store (6.7\", 6.5\", 5.5\", iPad 13\") & Google Play Store (Phone, 7\" & 10\" Tablet) screenshots with dark-gold luxury device frames, custom typography, and instant batch export.",
  alternates: {
    canonical: "https://www.resizertools.com/shots",
  },
};

export default function ShotsPage() {
  const shotTool = toolsData.find((t) => t.id === "shot_gen") || {
    id: "shot_gen",
    title: "App Store Screenshot Studio",
    subtitle: "Generate iOS & Android App Store Screenshots",
    desc: "Generate pixel-perfect Apple App Store & Google Play Store marketing screenshots with luxury frames and batch ZIP export.",
    category: "generator"
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light p-2 sm:p-3 relative overflow-x-clip">
      
      {/* Ambiance glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-gold/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1920px] w-full mx-auto relative z-10">
        {/* Full Viewport 3-Column Studio */}
        <ScreenshotStudioClient />

        {/* Informational SEO Guide & App Store Specifications */}
        <div className="mt-8 pt-8 border-t border-white/10 space-y-6 text-xs text-brand-muted font-light leading-relaxed max-w-4xl mx-auto">
          <div className="space-y-2 text-left">
            <h2 className="text-base font-bold text-white tracking-tight">App Store &amp; Google Play Screenshot Dimensions (2026 Guide)</h2>
            <p>
              When uploading your app to Apple App Store Connect or Google Play Console, your screenshots must match exact screen dimensions. Clear, well-designed screenshots with device frames and readable titles help showcase your app&apos;s best features and attract more downloads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5">
              <h3 className="font-bold text-white font-mono text-[11px] uppercase tracking-wider text-brand-gold">Apple App Store Specifications</h3>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                <li><strong>6.7&quot; Super Retina (iPhone 16 Pro Max, 15 Pro Max)</strong>: 1290 x 2796 px (Portrait)</li>
                <li><strong>6.5&quot; Display (iPhone 14 Plus, 11 Pro Max)</strong>: 1242 x 2688 px (Portrait)</li>
                <li><strong>5.5&quot; Display (iPhone 8 Plus, 7 Plus)</strong>: 1242 x 2208 px (Portrait)</li>
                <li><strong>13&quot; iPad Pro (M4 &amp; 6th Gen Liquid Retina)</strong>: 2064 x 2752 px (Portrait)</li>
              </ul>
            </div>

            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5">
              <h3 className="font-bold text-white font-mono text-[11px] uppercase tracking-wider text-brand-gold">Google Play Store Specifications</h3>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                <li><strong>Android Phone Display</strong>: 1080 x 2400 px or 1080 x 1920 px (16:9 / 20:9 ratio)</li>
                <li><strong>7-inch Tablet Screenshots</strong>: 1200 x 1920 px (minimum 1080 px edge)</li>
                <li><strong>10-inch Tablet Screenshots</strong>: 1600 x 2560 px (required for Play Tablet feature)</li>
                <li><strong>Aspect Ratio</strong>: 16:9, 18:9, 19.5:9 or 20:9 supported</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* 👑 RICH SEO VALUE, FAQ, RATINGS, HOW-TO & TRUST CONTENT */}
      <div className="mt-12">
        <ToolContentSection 
          tool={{
            id: shotTool.id,
            title: shotTool.title,
            subtitle: shotTool.subtitle,
            desc: shotTool.desc,
            category: shotTool.category,
          }} 
        />
      </div>

      {/* 🔻 GLOBAL LUXURY SITE FOOTER */}
      <SiteFooter />

    </main>
  );
}
