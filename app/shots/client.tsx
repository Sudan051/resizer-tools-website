"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Download, Sparkles, Layers, Sliders, Smartphone, 
  Tablet, Eye, Plus, Trash2, Upload
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
  id: string;
  badgeText: string;
  header: string;
  subtext: string;
  imageSrc: string | null;
  bgTheme: "gold_dark" | "pure_black" | "deep_navy" | "cyber_purple" | "luxury_emerald" | "sunset_amber";
  titleColor: "gold" | "white" | "emerald" | "cyan" | "amber";
  frameColor: "gold" | "titanium" | "black" | "emerald" | "blue";
  frameType: "island" | "notch" | "tablet" | "borderless";
}

export const DEFAULT_SLIDES: ScreenshotSlide[] = [
  {
    id: "slide-1",
    badgeText: "SCREENSHOT 1",
    header: "YOUR FEATURE TITLE #1",
    subtext: "Add a short description of your feature here",
    imageSrc: null,
    bgTheme: "gold_dark",
    titleColor: "gold",
    frameColor: "gold",
    frameType: "island"
  },
  {
    id: "slide-2",
    badgeText: "SCREENSHOT 2",
    header: "YOUR FEATURE TITLE #2",
    subtext: "Add a short description of your feature here",
    imageSrc: null,
    bgTheme: "gold_dark",
    titleColor: "gold",
    frameColor: "gold",
    frameType: "island"
  },
  {
    id: "slide-3",
    badgeText: "SCREENSHOT 3",
    header: "YOUR FEATURE TITLE #3",
    subtext: "Add a short description of your feature here",
    imageSrc: null,
    bgTheme: "gold_dark",
    titleColor: "gold",
    frameColor: "gold",
    frameType: "island"
  },
  {
    id: "slide-4",
    badgeText: "SCREENSHOT 4",
    header: "YOUR FEATURE TITLE #4",
    subtext: "Add a short description of your feature here",
    imageSrc: null,
    bgTheme: "gold_dark",
    titleColor: "gold",
    frameColor: "gold",
    frameType: "island"
  },
  {
    id: "slide-5",
    badgeText: "SCREENSHOT 5",
    header: "YOUR FEATURE TITLE #5",
    subtext: "Add a short description of your feature here",
    imageSrc: null,
    bgTheme: "gold_dark",
    titleColor: "gold",
    frameColor: "gold",
    frameType: "island"
  }
];

export default function ScreenshotStudioClient() {
  const [selectedPreset, setSelectedPreset] = useState<PresetSize>(PRESET_SIZES[0]);
  const [slides, setSlides] = useState<ScreenshotSlide[]>(DEFAULT_SLIDES);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeSlide = slides[activeSlideIndex] || slides[0];

  // Draw single slide onto canvas
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
      if (slide.bgTheme === "gold_dark") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#080808");
        grad.addColorStop(0.5, "#15130d");
        grad.addColorStop(1, "#030303");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        const radGrad = ctx.createRadialGradient(width / 2, height * 0.22, 10, width / 2, height * 0.22, width * 0.75);
        radGrad.addColorStop(0, "rgba(212, 175, 55, 0.16)");
        radGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgTheme === "pure_black") {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgTheme === "deep_navy") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#09121a");
        grad.addColorStop(1, "#020508");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgTheme === "cyber_purple") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#150b24");
        grad.addColorStop(1, "#05020a");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgTheme === "luxury_emerald") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#071c14");
        grad.addColorStop(1, "#020a06");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgTheme === "sunset_amber") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#1f1207");
        grad.addColorStop(1, "#080401");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Decorative Top Badge
      if (slide.badgeText) {
        ctx.font = `700 ${Math.round(height * 0.012)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillStyle = slide.titleColor === "gold" ? "rgba(212, 175, 55, 0.9)" : "rgba(255, 255, 255, 0.7)";
        ctx.fillText(slide.badgeText.toUpperCase(), width / 2, height * 0.06);
      }

      // 3. Draw Header Title
      ctx.font = `900 ${Math.round(height * 0.036)}px sans-serif`;
      ctx.textAlign = "center";

      if (slide.titleColor === "gold") {
        const textGrad = ctx.createLinearGradient(0, height * 0.08, 0, height * 0.14);
        textGrad.addColorStop(0, "#ffffff");
        textGrad.addColorStop(0.5, "#fef3c7");
        textGrad.addColorStop(1, "#d4af37");
        ctx.fillStyle = textGrad;
      } else if (slide.titleColor === "emerald") {
        ctx.fillStyle = "#34d399";
      } else if (slide.titleColor === "cyan") {
        ctx.fillStyle = "#38bdf8";
      } else if (slide.titleColor === "amber") {
        ctx.fillStyle = "#fbbf24";
      } else {
        ctx.fillStyle = "#ffffff";
      }
      ctx.fillText(slide.header, width / 2, height * 0.11);

      // 4. Draw Subtext
      if (slide.subtext) {
        ctx.font = `400 ${Math.round(height * 0.017)}px sans-serif`;
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fillText(slide.subtext, width / 2, height * 0.145);
      }

      // 5. Draw Device Mockup Frame
      const frameMarginX = width * 0.1;
      const frameTop = height * 0.185;
      const frameWidth = width - frameMarginX * 2;
      const frameHeight = height * 0.85; // Overhang
      const cornerRadius = preset.deviceType === "Tablet" ? 36 : 56;

      // Outer Frame Glow & Border
      ctx.save();
      ctx.shadowColor = slide.frameColor === "gold" ? "rgba(212, 175, 55, 0.35)" : "rgba(255, 255, 255, 0.15)";
      ctx.shadowBlur = 40;
      ctx.shadowOffsetY = 20;

      // Draw Outer Bezel
      ctx.beginPath();
      ctx.roundRect(frameMarginX, frameTop, frameWidth, frameHeight, cornerRadius);
      ctx.fillStyle = "#161616";
      ctx.fill();

      // Border Stroke Color
      let strokeColor = "#d4af37";
      if (slide.frameColor === "titanium") strokeColor = "#94a3b8";
      if (slide.frameColor === "black") strokeColor = "#333333";
      if (slide.frameColor === "emerald") strokeColor = "#10b981";
      if (slide.frameColor === "blue") strokeColor = "#3b82f6";

      ctx.lineWidth = Math.max(6, Math.round(width * 0.008));
      ctx.strokeStyle = strokeColor;
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

      // If user uploaded screenshot image
      if (slide.imageSrc) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const scale = Math.max(innerW / img.width, innerH / img.height);
          const x = innerX + (innerW - img.width * scale) / 2;
          const y = innerY;
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

          // Draw Dynamic Island / Notch
          if (slide.frameType === "island" && preset.deviceType === "Phone") {
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
          drawPlaceholderUI(ctx, innerX, innerY, innerW, innerH, slide.header);
          ctx.restore();
          resolve();
        };
        img.src = slide.imageSrc;
      } else {
        // Draw Clean Wireframe Mockup Placeholder
        drawPlaceholderUI(ctx, innerX, innerY, innerW, innerH, slide.header);
        ctx.restore();
        resolve();
      }
    });
  };

  // Helper to draw clean placeholder UI inside device frame
  const drawPlaceholderUI = (
    ctx: CanvasRenderingContext2D, 
    x: number, y: number, w: number, h: number, 
    title: string
  ) => {
    // Screen bg
    const bgGrad = ctx.createLinearGradient(x, y, x, y + h);
    bgGrad.addColorStop(0, "#1a1a1a");
    bgGrad.addColorStop(1, "#0d0d0d");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(x, y, w, h);

    // Grid wireframe
    ctx.fillStyle = "#222222";
    const headerBarH = h * 0.08;
    ctx.fillRect(x, y, w, headerBarH);

    ctx.fillStyle = "#d4af37";
    ctx.font = `bold ${Math.round(w * 0.045)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(title, x + w / 2, y + headerBarH * 0.6);

    // Dashed Dropzone Box
    ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]);
    ctx.strokeRect(x + w * 0.1, y + h * 0.25, w * 0.8, h * 0.4);
    ctx.setLineDash([]);

    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.font = `600 ${Math.round(w * 0.04)}px sans-serif`;
    ctx.fillText("Upload Your App Screenshot", x + w / 2, y + h * 0.43);

    ctx.fillStyle = "rgba(212, 175, 55, 0.7)";
    ctx.font = `400 ${Math.round(w * 0.03)}px sans-serif`;
    ctx.fillText("(Click 'Upload Image' on the left panel)", x + w / 2, y + h * 0.48);
  };

  // Render canvas on state change
  useEffect(() => {
    if (canvasRef.current && activeSlide) {
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

  // Batch download all screenshots
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
    if (activeSlideIndex >= slides.length) return;
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

  // Add New Slide
  const handleAddNewSlide = () => {
    const newId = `slide-${Date.now()}`;
    const newSlide: ScreenshotSlide = {
      id: newId,
      badgeText: "NEW FEATURE SHOWCASE",
      header: "YOUR CUSTOM HEADER TITLE",
      subtext: "Add a compelling subtitle describing your app feature",
      imageSrc: null,
      bgTheme: "gold_dark",
      titleColor: "gold",
      frameColor: "gold",
      frameType: "island"
    };
    setSlides([...slides, newSlide]);
    setActiveSlideIndex(slides.length);
  };

  // Delete Slide
  const handleDeleteSlide = (indexToDelete: number) => {
    if (slides.length <= 1) return;
    const filtered = slides.filter((_, idx) => idx !== indexToDelete);
    setSlides(filtered);
    if (activeSlideIndex >= filtered.length) {
      setActiveSlideIndex(filtered.length - 1);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* PRESET RESOLUTION SELECTOR TABS */}
      <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
              <Sliders className="w-4 h-4" /> Production App Store & Play Store Resolutions
            </h2>
            <p className="text-xs text-brand-muted font-light mt-0.5">
              Select Apple App Store (Connect) or Google Play Console target specifications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAddNewSlide}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-brand-gold/40 text-white font-semibold text-xs px-4 py-3 rounded-2xl transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-brand-gold" /> Add Screenshot Slide
            </button>

            <button
              onClick={downloadAllScreenshots}
              disabled={isGenerating}
              className="flex items-center gap-2 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark text-black font-extrabold text-xs px-6 py-3 rounded-2xl shadow-premium-gold hover:scale-105 transition-transform cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4 stroke-[3]" />
              {isGenerating ? "Generating PNGs..." : `Export All ${slides.length} Screenshots (PNG)`}
            </button>
          </div>
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
        
        {/* LEFT COLUMN: SCREENSHOT SEQUENCE BUILDER */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-gold" /> Slides Sequence ({slides.length} Cards)
            </h3>
            <span className="text-[11px] text-brand-muted font-mono">Editing Slide #{activeSlideIndex + 1}</span>
          </div>

          {/* Sequence Thumbnails */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-none">
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

                <div className="flex items-center gap-1 shrink-0">
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

                  {slides.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSlide(idx);
                      }}
                      title="Delete Slide"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500 hover:text-white text-neutral-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* EDIT ACTIVE SLIDE METADATA PANEL */}
          {activeSlide && (
            <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 space-y-4 shadow-2xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Customize Slide #{activeSlideIndex + 1}
              </h4>

              {/* Upload App Screenshot Image */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-brand-gold/30 space-y-2">
                <label className="block text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
                  <Upload className="w-4 h-4 text-brand-gold" /> Upload App Screenshot Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full text-xs text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/20 file:text-brand-gold hover:file:bg-brand-gold/30 file:cursor-pointer"
                />
                <p className="text-[10px] text-brand-muted font-light">
                  Upload raw screenshot from your iPhone, iPad, or Android phone.
                </p>
              </div>

              {/* Top Badge Text */}
              <div>
                <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Top Badge Text</label>
                <input
                  type="text"
                  value={activeSlide.badgeText}
                  onChange={(e) => updateActiveSlide("badgeText", e.target.value)}
                  placeholder="e.g. VERSION 2.0 • OFFLINE FIRST"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              {/* Header Title */}
              <div>
                <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Header Title</label>
                <input
                  type="text"
                  value={activeSlide.header}
                  onChange={(e) => updateActiveSlide("header", e.target.value)}
                  placeholder="e.g. FASTEST PHOTO COMPRESSOR"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold font-bold"
                />
              </div>

              {/* Subtext */}
              <div>
                <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Subtext Description</label>
                <input
                  type="text"
                  value={activeSlide.subtext}
                  onChange={(e) => updateActiveSlide("subtext", e.target.value)}
                  placeholder="e.g. Compress high-resolution photos 80% without losing quality"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              {/* Theme & Frame Controls */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Background Theme</label>
                  <select
                    value={activeSlide.bgTheme}
                    onChange={(e) => updateActiveSlide("bgTheme", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                  >
                    <option value="gold_dark">Luxury Dark Gold</option>
                    <option value="pure_black">OLED Pure Black</option>
                    <option value="deep_navy">Deep Navy Blue</option>
                    <option value="cyber_purple">Cyberpunk Purple</option>
                    <option value="luxury_emerald">Emerald Dark</option>
                    <option value="sunset_amber">Sunset Amber</option>
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
                    <option value="emerald">Emerald Green</option>
                    <option value="cyan">Cyan Blue</option>
                    <option value="amber">Warm Amber</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Device Frame Bezel</label>
                  <select
                    value={activeSlide.frameColor}
                    onChange={(e) => updateActiveSlide("frameColor", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                  >
                    <option value="gold">Luxury Gold</option>
                    <option value="titanium">Titanium Silver</option>
                    <option value="black">Space Black</option>
                    <option value="emerald">Emerald Green</option>
                    <option value="blue">Royal Blue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Display Notch</label>
                  <select
                    value={activeSlide.frameType}
                    onChange={(e) => updateActiveSlide("frameType", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                  >
                    <option value="island">Dynamic Island</option>
                    <option value="notch">Classic Notch</option>
                    <option value="borderless">Borderless Modern</option>
                  </select>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* RIGHT COLUMN: LIVE CANVAS PREVIEW */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-between bg-[#121212] border border-white/10 rounded-2xl px-5 py-3 shadow-lg">
            <div className="flex items-center gap-2 text-xs text-brand-muted font-mono truncate">
              <Eye className="w-4 h-4 text-brand-gold shrink-0" /> Target Preset: <strong className="text-white truncate">{selectedPreset.name}</strong> ({selectedPreset.width}×{selectedPreset.height}px)
            </div>

            <button
              onClick={() => downloadSingleScreenshot(activeSlide, activeSlideIndex)}
              className="flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:underline cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" /> Export PNG
            </button>
          </div>

          {/* HTML5 Canvas Render Box */}
          <div className="w-full bg-[#030303] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[520px] relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-gold/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <canvas
                ref={canvasRef}
                className="max-h-[640px] w-auto rounded-2xl border border-white/10 shadow-2xl transition-all duration-300"
                style={{
                  maxHeight: selectedPreset.deviceType === "Tablet" ? "520px" : "640px",
                }}
              />

              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono text-brand-muted">
                  Client-Side Render • {selectedPreset.width} × {selectedPreset.height} pixels (Ready for App Store Connect &amp; Google Play Console)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
