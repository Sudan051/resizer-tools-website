"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Download, Layers, Sliders, Smartphone, 
  Tablet, Eye, Plus, Upload, Palette, MoveVertical, Type, Image as ImageIcon
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
  badgeBgColor: string;
  badgeTextColor: string;
  badgeStyle: "pill_filled" | "pill_bordered" | "neon" | "none";
  
  header: string;
  headerColor: string;
  headerFontSize: number;
  fontFamily: "sans" | "serif" | "mono" | "display";
  textAlign: "center" | "left" | "right";
  letterSpacing: number;
  
  subtext: string;
  subtextColor: string;
  subtextFontSize: number;

  imageSrc: string | null;
  logoSrc: string | null;

  bgType: "preset" | "custom_solid" | "custom_gradient";
  bgPreset: "gold_dark" | "pure_black" | "deep_navy" | "cyber_purple" | "luxury_emerald" | "sunset_amber" | "clean_white";
  bgColorPrimary: string;
  bgColorSecondary: string;
  bgPattern: "none" | "grid" | "dots" | "stripes";

  frameStyle: "island" | "notch" | "pixel_hole" | "borderless";
  frameColor: string;
  frameInnerBgColor: string;
  frameBorderWidth: number;
  frameShadowColor: string;
  frameShadowBlur: number;
  
  mockupScale: number;
  mockupPositionY: number;
  mockupRotation: number;
  cropStatusBar: boolean;
}

export const DEFAULT_SLIDES: ScreenshotSlide[] = [
  {
    id: "slide-1",
    badgeText: "SCREENSHOT 1",
    badgeBgColor: "#F59E0B",
    badgeTextColor: "#000000",
    badgeStyle: "pill_filled",
    header: "YOUR APP TITLE #1",
    headerColor: "#F59E0B",
    headerFontSize: 1.0,
    fontFamily: "sans",
    textAlign: "center",
    letterSpacing: 0,
    subtext: "Add a short description of your feature here",
    subtextColor: "#E2E8F0",
    subtextFontSize: 1.0,
    imageSrc: null,
    logoSrc: null,
    bgType: "custom_solid",
    bgPreset: "gold_dark",
    bgColorPrimary: "#0F172A",
    bgColorSecondary: "#1E293B",
    bgPattern: "none",
    frameStyle: "island",
    frameColor: "#F59E0B",
    frameInnerBgColor: "#0a0a0a",
    frameBorderWidth: 8,
    frameShadowColor: "rgba(245, 158, 11, 0.35)",
    frameShadowBlur: 40,
    mockupScale: 1.0,
    mockupPositionY: 0,
    mockupRotation: 0,
    cropStatusBar: true,
  },
  {
    id: "slide-2",
    badgeText: "SCREENSHOT 2",
    badgeBgColor: "#F59E0B",
    badgeTextColor: "#000000",
    badgeStyle: "pill_filled",
    header: "YOUR APP TITLE #2",
    headerColor: "#F59E0B",
    headerFontSize: 1.0,
    fontFamily: "sans",
    textAlign: "center",
    letterSpacing: 0,
    subtext: "Add a short description of your feature here",
    subtextColor: "#E2E8F0",
    subtextFontSize: 1.0,
    imageSrc: null,
    logoSrc: null,
    bgType: "custom_solid",
    bgPreset: "gold_dark",
    bgColorPrimary: "#0F172A",
    bgColorSecondary: "#1E293B",
    bgPattern: "none",
    frameStyle: "island",
    frameColor: "#F59E0B",
    frameInnerBgColor: "#0a0a0a",
    frameBorderWidth: 8,
    frameShadowColor: "rgba(245, 158, 11, 0.35)",
    frameShadowBlur: 40,
    mockupScale: 1.0,
    mockupPositionY: 0,
    mockupRotation: 0,
    cropStatusBar: true,
  },
  {
    id: "slide-3",
    badgeText: "SCREENSHOT 3",
    badgeBgColor: "#F59E0B",
    badgeTextColor: "#000000",
    badgeStyle: "pill_filled",
    header: "YOUR APP TITLE #3",
    headerColor: "#F59E0B",
    headerFontSize: 1.0,
    fontFamily: "sans",
    textAlign: "center",
    letterSpacing: 0,
    subtext: "Add a short description of your feature here",
    subtextColor: "#E2E8F0",
    subtextFontSize: 1.0,
    imageSrc: null,
    logoSrc: null,
    bgType: "custom_solid",
    bgPreset: "gold_dark",
    bgColorPrimary: "#0F172A",
    bgColorSecondary: "#1E293B",
    bgPattern: "none",
    frameStyle: "island",
    frameColor: "#F59E0B",
    frameInnerBgColor: "#0a0a0a",
    frameBorderWidth: 8,
    frameShadowColor: "rgba(245, 158, 11, 0.35)",
    frameShadowBlur: 40,
    mockupScale: 1.0,
    mockupPositionY: 0,
    mockupRotation: 0,
    cropStatusBar: true,
  }
];

export default function ScreenshotStudioClient() {
  const [selectedPreset, setSelectedPreset] = useState<PresetSize>(PRESET_SIZES[0]);
  const [slides, setSlides] = useState<ScreenshotSlide[]>(DEFAULT_SLIDES);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeSlide = slides[activeSlideIndex] || slides[0];

  // Map font family
  const getCanvasFont = (fontFamily: string, weight: number, size: number) => {
    let fontName = "sans-serif";
    if (fontFamily === "serif") fontName = "Georgia, serif";
    if (fontFamily === "mono") fontName = "monospace";
    if (fontFamily === "display") fontName = "Impact, sans-serif";
    return `${weight} ${size}px ${fontName}`;
  };

  // High-DPI Canvas Rendering Engine
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

      // 1. BACKGROUND RENDER
      if (slide.bgType === "custom_solid") {
        ctx.fillStyle = slide.bgColorPrimary;
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgType === "custom_gradient") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, slide.bgColorPrimary);
        grad.addColorStop(1, slide.bgColorSecondary);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Preset backgrounds
        if (slide.bgPreset === "gold_dark") {
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, "#080808");
          grad.addColorStop(0.5, "#15130d");
          grad.addColorStop(1, "#030303");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          const radGrad = ctx.createRadialGradient(width / 2, height * 0.22, 10, width / 2, height * 0.22, width * 0.75);
          radGrad.addColorStop(0, "rgba(212, 175, 55, 0.18)");
          radGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = radGrad;
          ctx.fillRect(0, 0, width, height);
        } else if (slide.bgPreset === "pure_black") {
          ctx.fillStyle = "#000000";
          ctx.fillRect(0, 0, width, height);
        } else if (slide.bgPreset === "deep_navy") {
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, "#09121a");
          grad.addColorStop(1, "#020508");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
        } else if (slide.bgPreset === "cyber_purple") {
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, "#150b24");
          grad.addColorStop(1, "#05020a");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
        } else if (slide.bgPreset === "luxury_emerald") {
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, "#071c14");
          grad.addColorStop(1, "#020a06");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
        } else if (slide.bgPreset === "sunset_amber") {
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, "#1f1207");
          grad.addColorStop(1, "#080401");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
        } else if (slide.bgPreset === "clean_white") {
          ctx.fillStyle = "#f8fafc";
          ctx.fillRect(0, 0, width, height);
        }
      }

      // BACKGROUND PATTERN OVERLAY
      if (slide.bgPattern === "grid") {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        const gridSize = 60;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      } else if (slide.bgPattern === "dots") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        const dotSpacing = 50;
        for (let x = 20; x < width; x += dotSpacing) {
          for (let y = 20; y < height; y += dotSpacing) {
            ctx.beginPath();
            ctx.arc(x, y, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 2. TEXT ALIGNMENT POSITIONING
      let textX = width / 2;
      let alignMode: CanvasTextAlign = "center";
      if (slide.textAlign === "left") {
        textX = width * 0.1;
        alignMode = "left";
      } else if (slide.textAlign === "right") {
        textX = width * 0.9;
        alignMode = "right";
      }

      // 3. LOGO WATERMARK STAMP (IF UPLOADED)
      if (slide.logoSrc) {
        const logoImg = new Image();
        logoImg.crossOrigin = "anonymous";
        logoImg.onload = () => {
          const logoSize = Math.round(height * 0.04);
          let logoX = width / 2 - logoSize / 2;
          if (slide.textAlign === "left") logoX = width * 0.1;
          if (slide.textAlign === "right") logoX = width * 0.9 - logoSize;
          
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(logoX, height * 0.02, logoSize, logoSize, 12);
          ctx.clip();
          ctx.drawImage(logoImg, logoX, height * 0.02, logoSize, logoSize);
          ctx.restore();
        };
        logoImg.src = slide.logoSrc;
      }

      // 4. TOP BADGE RENDER
      if (slide.badgeText && slide.badgeStyle !== "none") {
        const badgeFontSize = Math.round(height * 0.012 * slide.headerFontSize);
        ctx.font = getCanvasFont(slide.fontFamily, 700, badgeFontSize);
        ctx.textAlign = alignMode;

        if (slide.badgeStyle === "pill_filled") {
          const metrics = ctx.measureText(slide.badgeText.toUpperCase());
          const badgeW = metrics.width + 30;
          const badgeH = badgeFontSize + 16;
          let badgeX = textX - badgeW / 2;
          if (slide.textAlign === "left") badgeX = textX;
          if (slide.textAlign === "right") badgeX = textX - badgeW;

          ctx.fillStyle = slide.badgeBgColor || "#d4af37";
          ctx.beginPath();
          ctx.roundRect(badgeX, height * 0.055, badgeW, badgeH, 20);
          ctx.fill();

          ctx.fillStyle = slide.badgeTextColor || "#000000";
          ctx.fillText(slide.badgeText.toUpperCase(), badgeX + badgeW / 2, height * 0.055 + badgeH * 0.7);
        } else {
          ctx.fillStyle = slide.badgeBgColor || "#d4af37";
          ctx.fillText(slide.badgeText.toUpperCase(), textX, height * 0.065);
        }
      }

      // 5. HEADER TITLE RENDER
      const headerFontSize = Math.round(height * 0.036 * slide.headerFontSize);
      ctx.font = getCanvasFont(slide.fontFamily, 900, headerFontSize);
      ctx.textAlign = alignMode;
      ctx.fillStyle = slide.headerColor || "#ffffff";
      ctx.fillText(slide.header, textX, height * 0.115);

      // 6. SUBTEXT RENDER
      if (slide.subtext) {
        const subfontSize = Math.round(height * 0.017 * slide.subtextFontSize);
        ctx.font = getCanvasFont(slide.fontFamily, 400, subfontSize);
        ctx.textAlign = alignMode;
        ctx.fillStyle = slide.subtextColor || "rgba(255, 255, 255, 0.75)";
        ctx.fillText(slide.subtext, textX, height * 0.155);
      }

      // 7. DEVICE MOCKUP POSITION, SHADOW & ROTATION RENDER
      ctx.save();

      const baseFrameWidth = (width * 0.8) * (slide.mockupScale || 1.0);
      const baseFrameHeight = (height * 0.82) * (slide.mockupScale || 1.0);
      const frameX = width / 2;
      const frameY = height * 0.58 + (slide.mockupPositionY || 0);

      ctx.translate(frameX, frameY);
      if (slide.mockupRotation) {
        ctx.rotate((slide.mockupRotation * Math.PI) / 180);
      }

      const drawW = baseFrameWidth;
      const drawH = baseFrameHeight;
      const drawX = -drawW / 2;
      const drawY = -drawH / 2;

      const cornerRadius = preset.deviceType === "Tablet" ? 36 : 52;

      // Outer Frame Shadow & Glow
      ctx.shadowColor = slide.frameShadowColor || "rgba(0, 0, 0, 0.4)";
      ctx.shadowBlur = slide.frameShadowBlur !== undefined ? slide.frameShadowBlur : 40;
      ctx.shadowOffsetY = 20;

      // Draw Outer Bezel Body
      ctx.beginPath();
      ctx.roundRect(drawX, drawY, drawW, drawH, cornerRadius);
      ctx.fillStyle = "#161616";
      ctx.fill();

      // Custom Border Width & Bezel Color
      ctx.lineWidth = slide.frameBorderWidth !== undefined ? Math.max(2, slide.frameBorderWidth) : Math.max(4, Math.round(width * 0.008));
      ctx.strokeStyle = slide.frameColor || "#d4af37";
      ctx.stroke();
      ctx.restore();

      // Inner Screen Area Clip & Image Draw
      const innerMargin = Math.round(width * 0.012);
      const innerX = drawX + innerMargin;
      const innerY = drawY + innerMargin;
      const innerW = drawW - innerMargin * 2;
      const innerH = drawH - innerMargin * 2;
      const innerRadius = Math.max(12, cornerRadius - innerMargin);

      ctx.save();
      ctx.translate(frameX, frameY);
      if (slide.mockupRotation) {
        ctx.rotate((slide.mockupRotation * Math.PI) / 180);
      }

      ctx.beginPath();
      ctx.roundRect(innerX, innerY, innerW, innerH, innerRadius);
      ctx.clip();

      // Inner Screen Custom Background Color
      ctx.fillStyle = slide.frameInnerBgColor || "#0a0a0a";
      ctx.fillRect(innerX, innerY, innerW, innerH);

      if (slide.imageSrc) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          // Crop out top 4% status bar (battery, time, wifi icons) if cropStatusBar is enabled
          const srcY = (slide.cropStatusBar !== false) ? img.height * 0.04 : 0;
          const srcH = (slide.cropStatusBar !== false) ? img.height * 0.96 : img.height;
          const srcW = img.width;

          // 1px padding gap around screenshot image inside device frame
          const paddingGap = Math.max(2, Math.round(width * 0.0015)); // High-DPI 1-2px gap
          const paddedW = innerW - paddingGap * 2;
          const paddedH = innerH - paddingGap * 2;

          const scale = Math.max(paddedW / srcW, paddedH / srcH);
          const imgX = (innerX + paddingGap) + (paddedW - srcW * scale) / 2;
          const imgY = innerY + paddingGap;
          ctx.drawImage(img, 0, srcY, srcW, srcH, imgX, imgY, srcW * scale, srcH * scale);

          // Notch / Dynamic Island
          if (slide.frameStyle === "island" && preset.deviceType === "Phone") {
            ctx.fillStyle = "#000000";
            const islandW = innerW * 0.28;
            const islandH = innerH * 0.024;
            const islandX = innerX + (innerW - islandW) / 2;
            const islandY = innerY + innerH * 0.012;
            ctx.beginPath();
            ctx.roundRect(islandX, islandY, islandW, islandH, 20);
            ctx.fill();
          } else if (slide.frameStyle === "pixel_hole" && preset.deviceType === "Phone") {
            ctx.fillStyle = "#000000";
            const holeR = innerW * 0.02;
            ctx.beginPath();
            ctx.arc(innerX + innerW / 2, innerY + innerH * 0.02, holeR, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
          resolve();
        };
        img.onerror = () => {
          drawPlaceholderWireframe(ctx, innerX, innerY, innerW, innerH, slide.header);
          ctx.restore();
          resolve();
        };
        img.src = slide.imageSrc;
      } else {
        drawPlaceholderWireframe(ctx, innerX, innerY, innerW, innerH, slide.header);
        ctx.restore();
        resolve();
      }
    });
  };

  // Helper to draw clean placeholder wireframe
  const drawPlaceholderWireframe = (
    ctx: CanvasRenderingContext2D, 
    x: number, y: number, w: number, h: number, 
    title: string
  ) => {
    const bgGrad = ctx.createLinearGradient(x, y, x, y + h);
    bgGrad.addColorStop(0, "#1c1c1c");
    bgGrad.addColorStop(1, "#0d0d0d");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(x, y, w, h);

    const headerBarH = h * 0.08;
    ctx.fillStyle = "#262626";
    ctx.fillRect(x, y, w, headerBarH);

    ctx.fillStyle = "#d4af37";
    ctx.font = `bold ${Math.round(w * 0.04)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(title, x + w / 2, y + headerBarH * 0.6);

    ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]);
    ctx.strokeRect(x + w * 0.1, y + h * 0.25, w * 0.8, h * 0.4);
    ctx.setLineDash([]);

    ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    ctx.font = `600 ${Math.round(w * 0.04)}px sans-serif`;
    ctx.fillText("Upload App Screenshot", x + w / 2, y + h * 0.43);

    ctx.fillStyle = "rgba(212, 175, 55, 0.7)";
    ctx.font = `400 ${Math.round(w * 0.03)}px sans-serif`;
    ctx.fillText("(Click 'Upload Screenshot' panel)", x + w / 2, y + h * 0.48);
  };

  // Re-render active canvas
  useEffect(() => {
    if (canvasRef.current && activeSlide) {
      renderSlideToCanvas(canvasRef.current, activeSlide, selectedPreset);
    }
  }, [activeSlide, selectedPreset]);

  // Handle single slide PNG download
  const downloadSingleScreenshot = async (slide: ScreenshotSlide, index: number) => {
    const tempCanvas = document.createElement("canvas");
    await renderSlideToCanvas(tempCanvas, slide, selectedPreset);
    const link = document.createElement("a");
    link.download = `screenshot_${index + 1}_${presetSlug(selectedPreset.name)}_${slide.header.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
  };

  // Batch download all slides
  const downloadAllScreenshots = async () => {
    setIsGenerating(true);
    for (let i = 0; i < slides.length; i++) {
      await downloadSingleScreenshot(slides[i], i);
      await new Promise((r) => setTimeout(r, 400));
    }
    setIsGenerating(false);
  };

  const presetSlug = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, "_");

  const updateActiveSlide = (field: keyof ScreenshotSlide, value: string | number | boolean | null) => {
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

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateActiveSlide("logoSrc", event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNewSlide = () => {
    const newId = `slide-${Date.now()}`;
    const newSlide: ScreenshotSlide = {
      id: newId,
      badgeText: `SCREENSHOT ${slides.length + 1}`,
      badgeBgColor: "#d4af37",
      badgeTextColor: "#000000",
      badgeStyle: "pill_filled",
      header: `YOUR APP TITLE #${slides.length + 1}`,
      headerColor: "#ffffff",
      headerFontSize: 1.0,
      fontFamily: "sans",
      textAlign: "center",
      letterSpacing: 0,
      subtext: "Add a short description of your feature here",
      subtextColor: "rgba(255, 255, 255, 0.75)",
      subtextFontSize: 1.0,
      imageSrc: null,
      logoSrc: null,
      bgType: "preset",
      bgPreset: "gold_dark",
      bgColorPrimary: "#080808",
      bgColorSecondary: "#1c1917",
      bgPattern: "none",
      frameStyle: "island",
      frameColor: "#d4af37",
      frameInnerBgColor: "#0a0a0a",
      frameBorderWidth: 8,
      frameShadowColor: "rgba(212, 175, 55, 0.35)",
      frameShadowBlur: 40,
      mockupScale: 1.0,
      mockupPositionY: 0,
      mockupRotation: 0,
      cropStatusBar: true,
    };
    setSlides([...slides, newSlide]);
    setActiveSlideIndex(slides.length);
  };

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
      
      {/* PRESET SELECTION ROW */}
      <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
              <Sliders className="w-4 h-4" /> 2026 App Store & Play Store Resolution Presets
            </h2>
            <p className="text-xs text-brand-muted font-light mt-0.5">
              Select target specifications for Apple App Store Connect or Google Play Console.
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

      {/* STUDIO CONTROLS & CANVAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: ADVANCED CONTROLS */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* SLIDE SELECTOR LIST */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-gold" /> Slides Sequence ({slides.length} Cards)
              </h3>
              <span className="text-[11px] text-brand-muted font-mono">Editing Slide #{activeSlideIndex + 1}</span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`px-4 py-2.5 rounded-2xl border text-xs font-mono font-bold shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                    activeSlideIndex === idx
                      ? "bg-brand-gold text-black border-brand-gold shadow-lg"
                      : "bg-white/[0.02] border-white/10 text-white hover:border-brand-gold/40"
                  }`}
                >
                  <span>#{idx + 1}</span>
                  <span className="truncate max-w-[90px]">{slide.header || "Untitled"}</span>
                  {slides.length > 1 && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSlide(idx);
                      }}
                      className="hover:text-rose-500 p-0.5"
                    >
                      ×
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ADVANCED CUSTOMIZER PANEL */}
          {activeSlide && (
            <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 space-y-6 shadow-2xl">
              
              {/* SECTION A: UPLOAD SCREENSHOT & LOGO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-brand-gold/40 space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-white uppercase flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-brand-gold" /> App Screenshot
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full text-[11px] text-neutral-400 file:mr-2 file:py-1.5 file:px-2.5 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-brand-gold/20 file:text-brand-gold file:cursor-pointer"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-white uppercase flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-brand-gold" /> App Icon / Logo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="w-full text-[11px] text-neutral-400 file:mr-2 file:py-1.5 file:px-2.5 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-white/10 file:text-white file:cursor-pointer"
                  />
                </div>
              </div>

              {/* SECTION B: SCREENSHOT POSITION, ZOOM & TILT */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <MoveVertical className="w-4 h-4" /> Position, Zoom &amp; 3D Tilt
                </h4>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Zoom ({activeSlide.mockupScale}x)</label>
                    <input
                      type="range"
                      min="0.6"
                      max="1.4"
                      step="0.05"
                      value={activeSlide.mockupScale || 1.0}
                      onChange={(e) => updateActiveSlide("mockupScale", parseFloat(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Y-Offset ({activeSlide.mockupPositionY}px)</label>
                    <input
                      type="range"
                      min="-120"
                      max="120"
                      step="10"
                      value={activeSlide.mockupPositionY || 0}
                      onChange={(e) => updateActiveSlide("mockupPositionY", parseInt(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Tilt Angle ({activeSlide.mockupRotation}°)</label>
                    <input
                      type="range"
                      min="-20"
                      max="20"
                      step="1"
                      value={activeSlide.mockupRotation || 0}
                      onChange={(e) => updateActiveSlide("mockupRotation", parseInt(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION C: ASO COLOR PICKERS & BACKGROUND PATTERNS */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <Palette className="w-4 h-4" /> ASO Background Studio &amp; Color Pickers
                </h4>

                {/* 1-Click ASO Palette Presets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pb-1">
                  <button
                    onClick={() => {
                      updateActiveSlide("bgType", "custom_solid");
                      updateActiveSlide("bgColorPrimary", "#0F172A");
                      updateActiveSlide("headerColor", "#F59E0B");
                      updateActiveSlide("subtextColor", "#E2E8F0");
                      updateActiveSlide("badgeBgColor", "#F59E0B");
                      updateActiveSlide("badgeTextColor", "#000000");
                      updateActiveSlide("frameColor", "#F59E0B");
                    }}
                    className="p-2 rounded-xl bg-[#0F172A] border border-[#F59E0B]/40 hover:border-[#F59E0B] text-left transition-all cursor-pointer"
                  >
                    <div className="text-[10px] font-bold text-[#F59E0B]">⭐ Option 1: Dark Slate</div>
                    <div className="text-[9px] text-[#E2E8F0]">Executive &amp; Secure</div>
                  </button>

                  <button
                    onClick={() => {
                      updateActiveSlide("bgType", "custom_solid");
                      updateActiveSlide("bgColorPrimary", "#F59E0B");
                      updateActiveSlide("headerColor", "#111827");
                      updateActiveSlide("subtextColor", "#374151");
                      updateActiveSlide("badgeBgColor", "#111827");
                      updateActiveSlide("badgeTextColor", "#FFFFFF");
                      updateActiveSlide("frameColor", "#111827");
                    }}
                    className="p-2 rounded-xl bg-[#F59E0B] border border-black/20 hover:border-black text-left transition-all cursor-pointer"
                  >
                    <div className="text-[10px] font-bold text-[#111827]">Option 2: Golden Yellow</div>
                    <div className="text-[9px] text-[#374151]">High Contrast CAT</div>
                  </button>

                  <button
                    onClick={() => {
                      updateActiveSlide("bgType", "custom_solid");
                      updateActiveSlide("bgColorPrimary", "#1E1B4B");
                      updateActiveSlide("headerColor", "#FDE047");
                      updateActiveSlide("subtextColor", "#E0E7FF");
                      updateActiveSlide("badgeBgColor", "#FDE047");
                      updateActiveSlide("badgeTextColor", "#000000");
                      updateActiveSlide("frameColor", "#FDE047");
                    }}
                    className="p-2 rounded-xl bg-[#1E1B4B] border border-[#FDE047]/40 hover:border-[#FDE047] text-left transition-all cursor-pointer"
                  >
                    <div className="text-[10px] font-bold text-[#FDE047]">Option 3: Indigo & Neon</div>
                    <div className="text-[9px] text-[#E0E7FF]">Modern Tech Feel</div>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Background Mode</label>
                    <select
                      value={activeSlide.bgType}
                      onChange={(e) => updateActiveSlide("bgType", e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="preset">Preset Theme</option>
                      <option value="custom_solid">Custom Solid Hex</option>
                      <option value="custom_gradient">Custom Gradient Hex</option>
                    </select>
                  </div>

                  {activeSlide.bgType === "preset" ? (
                    <div>
                      <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Theme Presets</label>
                      <select
                        value={activeSlide.bgPreset}
                        onChange={(e) => updateActiveSlide("bgPreset", e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                      >
                        <option value="gold_dark">Luxury Gold-Dark</option>
                        <option value="pure_black">OLED Pure Black</option>
                        <option value="deep_navy">Deep Navy Blue</option>
                        <option value="cyber_purple">Cyberpunk Purple</option>
                        <option value="luxury_emerald">Emerald Dark</option>
                        <option value="sunset_amber">Sunset Amber</option>
                        <option value="clean_white">Apple Studio White</option>
                      </select>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 pt-4">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="color"
                          value={activeSlide.bgColorPrimary}
                          onChange={(e) => updateActiveSlide("bgColorPrimary", e.target.value)}
                          className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                        />
                        <span className="text-[9px] font-mono text-brand-muted">Color #1</span>
                      </div>

                      {activeSlide.bgType === "custom_gradient" && (
                        <div className="flex items-center gap-1.5">
                          <input
                            type="color"
                            value={activeSlide.bgColorSecondary}
                            onChange={(e) => updateActiveSlide("bgColorSecondary", e.target.value)}
                            className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                          />
                          <span className="text-[9px] font-mono text-brand-muted">Color #2</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Overlay Pattern</label>
                    <select
                      value={activeSlide.bgPattern}
                      onChange={(e) => updateActiveSlide("bgPattern", e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="none">None (Smooth)</option>
                      <option value="grid">Grid Wireframe</option>
                      <option value="dots">Dots Polka Mesh</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION D: TYPOGRAPHY & FONT STUDIO */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <Type className="w-4 h-4" /> Typography &amp; Font Studio
                </h4>

                <div className="grid grid-cols-4 gap-2.5 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Font Family</label>
                    <select
                      value={activeSlide.fontFamily}
                      onChange={(e) => updateActiveSlide("fontFamily", e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="sans">Modern Sans</option>
                      <option value="serif">Luxury Serif</option>
                      <option value="mono">Geist Mono</option>
                      <option value="display">Impact Bold</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Text Align</label>
                    <select
                      value={activeSlide.textAlign}
                      onChange={(e) => updateActiveSlide("textAlign", e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="center">Center</option>
                      <option value="left">Left Align</option>
                      <option value="right">Right Align</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Title Color</label>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <input
                        type="color"
                        value={activeSlide.headerColor.startsWith("#") ? activeSlide.headerColor : "#ffffff"}
                        onChange={(e) => updateActiveSlide("headerColor", e.target.value)}
                        className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                      />
                      <span className="text-[9px] font-mono text-brand-muted">Title Hex</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Subtext Color</label>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <input
                        type="color"
                        value={activeSlide.subtextColor.startsWith("#") ? activeSlide.subtextColor : "#e2e8f0"}
                        onChange={(e) => updateActiveSlide("subtextColor", e.target.value)}
                        className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                      />
                      <span className="text-[9px] font-mono text-brand-muted">Sub Hex</span>
                    </div>
                  </div>
                </div>

                {/* Font Size Sliders */}
                <div className="grid grid-cols-2 gap-3 text-left pt-1">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Title Size ({activeSlide.headerFontSize || 1.0}x)</label>
                    <input
                      type="range"
                      min="0.6"
                      max="1.8"
                      step="0.1"
                      value={activeSlide.headerFontSize || 1.0}
                      onChange={(e) => updateActiveSlide("headerFontSize", parseFloat(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Subtitle Size ({activeSlide.subtextFontSize || 1.0}x)</label>
                    <input
                      type="range"
                      min="0.6"
                      max="1.8"
                      step="0.1"
                      value={activeSlide.subtextFontSize || 1.0}
                      onChange={(e) => updateActiveSlide("subtextFontSize", parseFloat(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Header Title Input */}
                <div>
                  <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Header Title (2-3 Words Recommended)</label>
                  <input
                    type="text"
                    value={activeSlide.header}
                    onChange={(e) => updateActiveSlide("header", e.target.value)}
                    placeholder="e.g. YOUR APP TITLE"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold font-bold"
                  />
                </div>

                {/* Subtext Input */}
                <div>
                  <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Subtext Description (Single Sentence)</label>
                  <input
                    type="text"
                    value={activeSlide.subtext}
                    onChange={(e) => updateActiveSlide("subtext", e.target.value)}
                    placeholder="e.g. Describe key app benefit here"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              {/* SECTION E: DEVICE FRAME COLOR, INNER BG & BORDER WIDTH */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Device Frame Bezel &amp; Inner Screen Customizer
                </h4>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Bezel Color</label>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <input
                        type="color"
                        value={activeSlide.frameColor.startsWith("#") ? activeSlide.frameColor : "#d4af37"}
                        onChange={(e) => updateActiveSlide("frameColor", e.target.value)}
                        className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                      />
                      <span className="text-[9px] font-mono text-brand-muted">Bezel Hex</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Screen Inner BG</label>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <input
                        type="color"
                        value={activeSlide.frameInnerBgColor || "#0a0a0a"}
                        onChange={(e) => updateActiveSlide("frameInnerBgColor", e.target.value)}
                        className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                      />
                      <span className="text-[9px] font-mono text-brand-muted">Screen Hex</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Glow Shadow Color</label>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <input
                        type="color"
                        value={activeSlide.frameShadowColor.startsWith("#") ? activeSlide.frameShadowColor : "#d4af37"}
                        onChange={(e) => updateActiveSlide("frameShadowColor", e.target.value)}
                        className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                      />
                      <span className="text-[9px] font-mono text-brand-muted">Glow Hex</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left pt-1">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Border Width ({activeSlide.frameBorderWidth}px)</label>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      step="1"
                      value={activeSlide.frameBorderWidth || 8}
                      onChange={(e) => updateActiveSlide("frameBorderWidth", parseInt(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Display Notch</label>
                    <select
                      value={activeSlide.frameStyle}
                      onChange={(e) => updateActiveSlide("frameStyle", e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="island">Dynamic Island</option>
                      <option value="notch">Classic Notch</option>
                      <option value="pixel_hole">Android Punch Hole</option>
                      <option value="borderless">Borderless Modern</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <label className="text-xs text-white font-medium flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeSlide.cropStatusBar !== false}
                      onChange={(e) => updateActiveSlide("cropStatusBar", e.target.checked)}
                      className="w-4 h-4 accent-brand-gold rounded cursor-pointer"
                    />
                    <span>Auto-Erase Top Status Bar (Battery / Time / Wi-Fi Icons)</span>
                  </label>
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
              <Download className="w-3.5 h-3.5" /> Export Slide PNG
            </button>
          </div>

          {/* HTML5 Canvas Render Box */}
          <div className="w-full bg-[#030303] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[560px] relative overflow-hidden shadow-2xl">
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
                  Client-Side High-DPI Render • {selectedPreset.width} × {selectedPreset.height} pixels (Apple App Store Connect &amp; Google Play Specs)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
