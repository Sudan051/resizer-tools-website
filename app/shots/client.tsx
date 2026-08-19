"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Download, Sparkles, Layers, Sliders, Smartphone, 
  Tablet, Eye
} from "lucide-react";

export interface PresetSize {
  id: string;
  name: string;
  platform: "iOS" | "Android";
  deviceType: "Phone" | "Tablet";
  width: number;
  height: number;
  label: string;
}

export const PRESET_SIZES: PresetSize[] = [
  { id: "ios_6_7", name: "iPhone 6.7\" (Pro Max)", platform: "iOS", deviceType: "Phone", width: 1290, height: 2796, label: "1290 x 2796 px (Required)" },
  { id: "ios_6_5", name: "iPhone 6.5\" (XS Max)", platform: "iOS", deviceType: "Phone", width: 1242, height: 2688, label: "1242 x 2688 px (Required)" },
  { id: "ios_5_5", name: "iPhone 5.5\" (8 Plus)", platform: "iOS", deviceType: "Phone", width: 1242, height: 2208, label: "1242 x 2208 px (Required)" },
  { id: "ios_ipad_13", name: "iPad Pro 13\"", platform: "iOS", deviceType: "Tablet", width: 2064, height: 2752, label: "2064 x 2752 px (iPad)" },
  { id: "android_phone", name: "Android Phone HD", platform: "Android", deviceType: "Phone", width: 1080, height: 1920, label: "1080 x 1920 px (Play Store)" },
  { id: "android_tab_7", name: "Android 7\" Tablet", platform: "Android", deviceType: "Tablet", width: 1200, height: 1920, label: "1200 x 1920 px (7\" Tab)" },
  { id: "android_tab_10", name: "Android 10\" Tablet", platform: "Android", deviceType: "Tablet", width: 1600, height: 2560, label: "1600 x 2560 px (10\" Tab)" },
];

export interface ScreenshotSlide {
  id: number;
  header: string;
  subtext: string;
  imageSrc: string | null;
  bgStyle: "gold_dark" | "pure_black" | "deep_navy" | "cyber_purple" | "luxury_emerald";
  titleColor: "gold" | "white" | "amber";
}

export const INITIAL_SLIDES: ScreenshotSlide[] = [
  {
    id: 1,
    header: "ALL-IN-ONE OFFLINE TOOLS",
    subtext: "Image Resizer, PDF Tools, QR & NFC Scanner",
    imageSrc: "/Home.png",
    bgStyle: "gold_dark",
    titleColor: "gold",
  },
  {
    id: 2,
    header: "PHOTO COMPRESSOR",
    subtext: "Reduce Photo Size in KB Instantly",
    imageSrc: "/Pro.png",
    bgStyle: "gold_dark",
    titleColor: "gold",
  },
  {
    id: 3,
    header: "IMAGE RESIZER",
    subtext: "Change Dimensions (Width & Height) Easily",
    imageSrc: "/utilify-image.jpg",
    bgStyle: "gold_dark",
    titleColor: "gold",
  },
  {
    id: 4,
    header: "COMPREHENSIVE PDF TOOLS",
    subtext: "Merge, Split, Compress & Edit PDF Files",
    imageSrc: "/utilify-pdf.jpg",
    bgStyle: "gold_dark",
    titleColor: "gold",
  },
  {
    id: 5,
    header: "QR & NFC UTILITIES",
    subtext: "Scan QR Codes & Write Smart NFC Tags",
    imageSrc: "/QRPowerScan.png",
    bgStyle: "gold_dark",
    titleColor: "gold",
  },
  {
    id: 6,
    header: "PASSPORT PHOTO CAMERA",
    subtext: "Generate Print-Ready Passport Sheets",
    imageSrc: "/utilify-camera.jpg",
    bgStyle: "gold_dark",
    titleColor: "gold",
  },
];

export default function ScreenshotStudioClient() {
  const [selectedPreset, setSelectedPreset] = useState<PresetSize>(PRESET_SIZES[0]);
  const [slides, setSlides] = useState<ScreenshotSlide[]>(INITIAL_SLIDES);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeSlide = slides[activeSlideIndex];

  // Helper to draw single slide onto canvas
  const renderSlideToCanvas = (
    canvas: HTMLCanvasElement, 
    slide: ScreenshotSlide, 
    preset: PresetSize
  ): Promise<void> => {
    return new Promise((resolve) => {
      canvas.width = preset.width;
      canvas.height = preset.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve();

      const { width, height } = preset;

      // 1. Draw Background Gradient
      if (slide.bgStyle === "gold_dark") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#080808");
        grad.addColorStop(0.5, "#14120c");
        grad.addColorStop(1, "#030303");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Gold radial accent
        const radGrad = ctx.createRadialGradient(width / 2, height * 0.25, 10, width / 2, height * 0.25, width * 0.7);
        radGrad.addColorStop(0, "rgba(212, 175, 55, 0.15)");
        radGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgStyle === "pure_black") {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgStyle === "deep_navy") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#0a1118");
        grad.addColorStop(1, "#030609");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgStyle === "cyber_purple") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#120a1c");
        grad.addColorStop(1, "#050209");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgStyle === "luxury_emerald") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#081812");
        grad.addColorStop(1, "#020805");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // Decorative top badge
      const badgeText = "RESIZER TOOLS • 100% PRIVATE & OFFLINE";
      ctx.font = `600 ${Math.round(height * 0.013)}px monospace`;
      ctx.textAlign = "center";
      ctx.fillStyle = slide.titleColor === "gold" ? "rgba(212, 175, 55, 0.85)" : "rgba(255, 255, 255, 0.6)";
      ctx.fillText(badgeText, width / 2, height * 0.06);

      // 2. Draw Header Title
      ctx.font = `900 ${Math.round(height * 0.038)}px sans-serif`;
      ctx.textAlign = "center";
      if (slide.titleColor === "gold") {
        const textGrad = ctx.createLinearGradient(0, height * 0.08, 0, height * 0.14);
        textGrad.addColorStop(0, "#ffffff");
        textGrad.addColorStop(0.6, "#fef3c7");
        textGrad.addColorStop(1, "#d4af37");
        ctx.fillStyle = textGrad;
      } else if (slide.titleColor === "amber") {
        ctx.fillStyle = "#f59e0b";
      } else {
        ctx.fillStyle = "#ffffff";
      }
      ctx.fillText(slide.header, width / 2, height * 0.11);

      // 3. Draw Subtext
      ctx.font = `400 ${Math.round(height * 0.018)}px sans-serif`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      ctx.fillText(slide.subtext, width / 2, height * 0.145);

      // 4. Draw Device Mockup Frame
      const frameMarginX = width * 0.1;
      const frameTop = height * 0.18;
      const frameWidth = width - frameMarginX * 2;
      const frameHeight = height * 0.85; // extends below canvas for realistic overhang
      const cornerRadius = preset.deviceType === "Tablet" ? 36 : 56;

      // Outer Gold Frame Glow & Border
      ctx.save();
      ctx.shadowColor = "rgba(212, 175, 55, 0.3)";
      ctx.shadowBlur = 40;
      ctx.shadowOffsetY = 20;

      // Draw Outer Bezel
      ctx.beginPath();
      ctx.roundRect(frameMarginX, frameTop, frameWidth, frameHeight, cornerRadius);
      ctx.fillStyle = "#161616";
      ctx.fill();

      // Border stroke
      ctx.lineWidth = Math.max(6, Math.round(width * 0.008));
      ctx.strokeStyle = slide.titleColor === "gold" ? "#d4af37" : "#333333";
      ctx.stroke();
      ctx.restore();

      // Draw Inner Screen Area
      const innerMargin = Math.round(width * 0.012);
      const innerX = frameMarginX + innerMargin;
      const innerY = frameTop + innerMargin;
      const innerW = frameWidth - innerMargin * 2;
      const innerH = frameHeight - innerMargin * 2;
      const innerRadius = Math.max(12, cornerRadius - innerMargin);

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(innerX, innerY, innerW, innerH, innerRadius);
      ctx.clip();

      // Default inner screen bg
      ctx.fillStyle = "#0c0c0c";
      ctx.fillRect(innerX, innerY, innerW, innerH);

      // If custom image loaded, draw image
      if (slide.imageSrc) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          // Draw image aspect fill
          const scale = Math.max(innerW / img.width, innerH / img.height);
          const x = innerX + (innerW - img.width * scale) / 2;
          const y = innerY;
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

          // Top Notch or Dynamic Island (for Phones)
          if (preset.deviceType === "Phone") {
            ctx.fillStyle = "#000000";
            const islandW = innerW * 0.28;
            const islandH = innerH * 0.024;
            const islandX = innerX + (innerW - islandW) / 2;
            const islandY = innerY + innerH * 0.012;
            ctx.beginPath();
            ctx.roundRect(islandX, islandY, islandW, islandH, 20);
            ctx.fill();
          }

          ctx.restore();
          resolve();
        };
        img.onerror = () => {
          // Fallback UI text inside mockup
          ctx.fillStyle = "#1e1e1e";
          ctx.fillRect(innerX, innerY, innerW, innerH);
          ctx.font = `600 ${Math.round(innerW * 0.05)}px sans-serif`;
          ctx.fillStyle = "#d4af37";
          ctx.textAlign = "center";
          ctx.fillText("Resizer Tools Mobile", innerX + innerW / 2, innerY + innerH * 0.3);
          ctx.restore();
          resolve();
        };
        img.src = slide.imageSrc;
      } else {
        ctx.restore();
        resolve();
      }
    });
  };

  // Re-render active canvas on state change
  useEffect(() => {
    if (canvasRef.current) {
      renderSlideToCanvas(canvasRef.current, activeSlide, selectedPreset);
    }
  }, [activeSlide, selectedPreset]);

  // Handle single screenshot download
  const downloadSingleScreenshot = async (slide: ScreenshotSlide, index: number) => {
    const tempCanvas = document.createElement("canvas");
    await renderSlideToCanvas(tempCanvas, slide, selectedPreset);
    const link = document.createElement("a");
    link.download = `screenshot_${index + 1}_${presetSlug(selectedPreset.name)}_${slide.header.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
  };

  // Batch download all 6 screenshots
  const downloadAllScreenshots = async () => {
    setIsGenerating(true);
    for (let i = 0; i < slides.length; i++) {
      await downloadSingleScreenshot(slides[i], i);
      await new Promise((r) => setTimeout(r, 400));
    }
    setIsGenerating(false);
  };

  const presetSlug = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, "_");

  const updateActiveSlide = (field: keyof ScreenshotSlide, value: string | null) => {
    const updated = [...slides];
    updated[activeSlideIndex] = { ...updated[activeSlideIndex], [field]: value };
    setSlides(updated);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateActiveSlide("imageSrc", event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* PRESET SELECTOR TABS */}
      <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
              <Sliders className="w-4 h-4" /> Select App Store Preset & Resolution
            </h2>
            <p className="text-xs text-brand-muted font-light mt-0.5">
              Choose required dimensions for Apple App Store (Connect) or Google Play Console.
            </p>
          </div>

          <button
            onClick={downloadAllScreenshots}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark text-black font-extrabold text-xs px-6 py-3 rounded-2xl shadow-premium-gold hover:scale-105 transition-transform cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4 stroke-[3]" />
            {isGenerating ? "Generating Batch PNGs..." : "Batch Download All 6 Screenshots (PNG)"}
          </button>
        </div>

        {/* Preset Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2">
          {PRESET_SIZES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedPreset(preset)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedPreset.id === preset.id
                  ? "bg-brand-gold/15 border-brand-gold text-white shadow-premium-gold scale-[1.02]"
                  : "bg-white/[0.02] border-white/5 text-brand-muted hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  preset.platform === "iOS" ? "bg-blue-500/20 text-blue-400" : "bg-emerald-500/20 text-emerald-400"
                }`}>
                  {preset.platform}
                </span>
                {preset.deviceType === "Phone" ? <Smartphone className="w-3 h-3 opacity-60" /> : <Tablet className="w-3 h-3 opacity-60" />}
              </div>
              <div className="text-xs font-bold text-white truncate">{preset.name}</div>
              <div className="text-[10px] font-mono text-brand-muted mt-0.5">{preset.width}×{preset.height}</div>
            </button>
          ))}
        </div>
      </div>

      {/* WORKSPACE & CANVAS PREVIEW GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: 6 SCREENSHOT SEQUENCES BUILDER */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-gold" /> Screenshot Sequence (6 Cards)
            </h3>
            <span className="text-[11px] text-brand-muted font-mono">Active: Slide #{activeSlideIndex + 1}</span>
          </div>

          {/* Sequence Thumbnails */}
          <div className="space-y-3">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() => setActiveSlideIndex(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  activeSlideIndex === idx
                    ? "bg-brand-gold/10 border-brand-gold text-white shadow-lg"
                    : "bg-white/[0.02] border-white/5 text-brand-muted hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                    activeSlideIndex === idx ? "bg-brand-gold text-black" : "bg-white/5 text-white"
                  }`}>
                    #{idx + 1}
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold text-white truncate">{slide.header}</div>
                    <div className="text-[10px] text-brand-muted font-light truncate">{slide.subtext}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadSingleScreenshot(slide, idx);
                    }}
                    title="Download Single PNG"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-brand-gold hover:text-black text-brand-gold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* EDIT ACTIVE SLIDE INPUTS */}
          <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Edit Screenshot #{activeSlideIndex + 1} Metadata
            </h4>

            {/* Header Text Input */}
            <div>
              <label className="block text-[11px] font-mono text-brand-muted uppercase mb-1">Header Title</label>
              <input
                type="text"
                value={activeSlide.header}
                onChange={(e) => updateActiveSlide("header", e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            {/* Subtext Input */}
            <div>
              <label className="block text-[11px] font-mono text-brand-muted uppercase mb-1">Subtext Description</label>
              <input
                type="text"
                value={activeSlide.subtext}
                onChange={(e) => updateActiveSlide("subtext", e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            {/* Background Style & Title Color */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Background Theme</label>
                <select
                  value={activeSlide.bgStyle}
                  onChange={(e) => updateActiveSlide("bgStyle", e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                >
                  <option value="gold_dark">Luxury Gold-Dark</option>
                  <option value="pure_black">OLED Pure Black</option>
                  <option value="deep_navy">Deep Navy Blue</option>
                  <option value="cyber_purple">Cyber Purple</option>
                  <option value="luxury_emerald">Emerald Dark</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Title Accent</label>
                <select
                  value={activeSlide.titleColor}
                  onChange={(e) => updateActiveSlide("titleColor", e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                >
                  <option value="gold">Gold Gradient</option>
                  <option value="white">Pure White</option>
                  <option value="amber">Warm Amber</option>
                </select>
              </div>
            </div>

            {/* Upload Custom Mobile Screenshot */}
            <div className="pt-2">
              <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Replace App Screenshot Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full text-xs text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LIVE CANVAS PREVIEW & DOWNLOAD CARD */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-between bg-[#121212] border border-white/10 rounded-2xl px-5 py-3">
            <div className="flex items-center gap-2 text-xs text-brand-muted font-mono">
              <Eye className="w-4 h-4 text-brand-gold" /> Previewing Preset: <strong className="text-white">{selectedPreset.name}</strong> ({selectedPreset.width}×{selectedPreset.height}px)
            </div>

            <button
              onClick={() => downloadSingleScreenshot(activeSlide, activeSlideIndex)}
              className="flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:underline cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download Screenshot #{activeSlideIndex + 1}
            </button>
          </div>

          {/* HTML5 Canvas Render Box */}
          <div className="w-full bg-[#030303] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-gold/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <canvas
                ref={canvasRef}
                className="max-h-[620px] w-auto rounded-2xl border border-white/10 shadow-2xl transition-all duration-300"
                style={{
                  maxHeight: selectedPreset.deviceType === "Tablet" ? "520px" : "620px",
                }}
              />

              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono text-brand-muted">
                  High-DPI Canvas • {selectedPreset.width} × {selectedPreset.height} pixels (Apple/Google Spec)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
