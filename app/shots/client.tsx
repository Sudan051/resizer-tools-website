"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  Download, Layers, Sliders, Smartphone, 
  Tablet, Eye, Plus, Upload, Palette, MoveVertical, Type, Image as ImageIcon, Sparkles, Tag
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

  bgType: "custom_solid" | "custom_gradient" | "preset";
  bgPreset: "gold_dark" | "pure_black" | "deep_navy" | "cyber_purple" | "luxury_emerald" | "sunset_amber" | "clean_white";
  bgColorPrimary: string;
  bgColorSecondary: string;
  bgPattern: "none" | "grid" | "dots";

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
  showIOSStatusBar: boolean;
}

export const DEFAULT_SLIDES: ScreenshotSlide[] = [
  {
    id: "slide-1",
    badgeText: "★ 4.9 RATED",
    badgeBgColor: "#F59E0B",
    badgeTextColor: "#000000",
    badgeStyle: "pill_filled",
    header: "INSTANT DOCUMENT SCANNER",
    headerColor: "#F59E0B",
    headerFontSize: 1.0,
    fontFamily: "sans",
    textAlign: "center",
    letterSpacing: 0,
    subtext: "Auto-detect edges & export crystal clear PDFs in seconds",
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
    frameInnerBgColor: "#000000",
    frameBorderWidth: 8,
    frameShadowColor: "rgba(245, 158, 11, 0.35)",
    frameShadowBlur: 40,
    mockupScale: 1.0,
    mockupPositionY: 0,
    mockupRotation: 0,
    cropStatusBar: true,
    showIOSStatusBar: true,
  },
  {
    id: "slide-2",
    badgeText: "100% PRIVATE",
    badgeBgColor: "#10B981",
    badgeTextColor: "#000000",
    badgeStyle: "pill_filled",
    header: "SECURE PDF COMPRESSION",
    headerColor: "#10B981",
    headerFontSize: 1.0,
    fontFamily: "sans",
    textAlign: "center",
    letterSpacing: 0,
    subtext: "Shrink file size up to 90% without losing text quality",
    subtextColor: "#E2E8F0",
    subtextFontSize: 1.0,
    imageSrc: null,
    logoSrc: null,
    bgType: "custom_solid",
    bgPreset: "gold_dark",
    bgColorPrimary: "#064E3B",
    bgColorSecondary: "#022C22",
    bgPattern: "none",
    frameStyle: "island",
    frameColor: "#10B981",
    frameInnerBgColor: "#000000",
    frameBorderWidth: 8,
    frameShadowColor: "rgba(16, 185, 129, 0.35)",
    frameShadowBlur: 40,
    mockupScale: 1.0,
    mockupPositionY: 0,
    mockupRotation: 0,
    cropStatusBar: true,
    showIOSStatusBar: true,
  },
  {
    id: "slide-3",
    badgeText: "ZERO UPLOADS",
    badgeBgColor: "#3B82F6",
    badgeTextColor: "#FFFFFF",
    badgeStyle: "pill_filled",
    header: "MERGE & SIGN ANYWHERE",
    headerColor: "#60A5FA",
    headerFontSize: 1.0,
    fontFamily: "sans",
    textAlign: "center",
    letterSpacing: 0,
    subtext: "Draw digital signatures and stamp stamps on contracts",
    subtextColor: "#E2E8F0",
    subtextFontSize: 1.0,
    imageSrc: null,
    logoSrc: null,
    bgType: "custom_solid",
    bgPreset: "gold_dark",
    bgColorPrimary: "#1E1B4B",
    bgColorSecondary: "#0F172A",
    bgPattern: "none",
    frameStyle: "island",
    frameColor: "#3B82F6",
    frameInnerBgColor: "#000000",
    frameBorderWidth: 8,
    frameShadowColor: "rgba(59, 130, 246, 0.35)",
    frameShadowBlur: 40,
    mockupScale: 1.0,
    mockupPositionY: 0,
    mockupRotation: 0,
    cropStatusBar: true,
    showIOSStatusBar: true,
  }
];

// Helper to draw clean placeholder wireframe
function drawPlaceholderWireframe(
  ctx: CanvasRenderingContext2D, 
  x: number, y: number, w: number, h: number, 
  title: string
) {
  const bgGrad = ctx.createLinearGradient(x, y, x, y + h);
  bgGrad.addColorStop(0, "#161616");
  bgGrad.addColorStop(1, "#0a0a0a");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(x, y, w, h);

  const headerBarH = h * 0.08;
  ctx.fillStyle = "#222222";
  ctx.fillRect(x, y, w, headerBarH);

  ctx.fillStyle = "#F59E0B";
  ctx.font = `bold ${Math.round(w * 0.04)}px sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText(title, x + w / 2, y + headerBarH * 0.62);

  ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 8]);
  ctx.strokeRect(x + w * 0.1, y + h * 0.25, w * 0.8, h * 0.4);
  ctx.setLineDash([]);

  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.font = `600 ${Math.round(w * 0.042)}px sans-serif`;
  ctx.fillText("Upload App Screenshot", x + w / 2, y + h * 0.43);

  ctx.fillStyle = "rgba(245, 158, 11, 0.8)";
  ctx.font = `400 ${Math.round(w * 0.03)}px sans-serif`;
  ctx.fillText("(Click 'Upload Screenshot' panel on left)", x + w / 2, y + h * 0.48);
}

interface ColorPickerFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  swatches?: string[];
}

function ColorPickerField({ label, value, onChange, swatches }: ColorPickerFieldProps) {
  const safeHex = value && value.startsWith("#") ? value : "#d4af37";

  return (
    <div className="space-y-1.5 text-left">
      <label className="block text-[10px] font-mono text-brand-muted uppercase tracking-wider">{label}</label>
      <div className="flex items-center gap-2">
        <div className="relative flex items-center shrink-0">
          <input
            type="color"
            value={safeHex.length === 7 ? safeHex : "#d4af37"}
            onChange={(e) => onChange(e.target.value)}
            className="w-8 h-8 rounded-xl cursor-pointer bg-transparent border border-white/20 p-0.5 hover:border-brand-gold transition-colors"
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#HEX or rgba"
          className="w-full bg-black/60 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-brand-gold uppercase"
        />
      </div>
      {swatches && swatches.length > 0 && (
        <div className="flex flex-wrap gap-1 pt-0.5">
          {swatches.map((swatch) => (
            <button
              key={swatch}
              type="button"
              onClick={() => onChange(swatch)}
              className="w-4 h-4 rounded-full border border-white/20 hover:scale-125 transition-transform cursor-pointer"
              style={{ backgroundColor: swatch }}
              title={swatch}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ScreenshotStudioClient() {
  const [selectedPreset, setSelectedPreset] = useState<PresetSize>(PRESET_SIZES[0]);
  const [slides, setSlides] = useState<ScreenshotSlide[]>(DEFAULT_SLIDES);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeSlide = slides[activeSlideIndex] || slides[0];

  const getCanvasFont = (fontFamily: string, weight: number, size: number) => {
    let fontName = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif";
    if (fontFamily === "serif") fontName = "Georgia, Cambria, 'Times New Roman', serif";
    if (fontFamily === "mono") fontName = "'SF Mono', Monaco, 'Courier New', monospace";
    if (fontFamily === "display") fontName = "Impact, 'Arial Black', sans-serif";
    return `${weight} ${size}px ${fontName}`;
  };

  // High-DPI Canvas Rendering Engine with Hyper-Realistic iOS Hardware
  const renderSlideToCanvas = useCallback((
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
        ctx.fillStyle = slide.bgColorPrimary || "#0F172A";
        ctx.fillRect(0, 0, width, height);
      } else if (slide.bgType === "custom_gradient") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, slide.bgColorPrimary || "#0F172A");
        grad.addColorStop(1, slide.bgColorSecondary || "#1E293B");
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
      if (slide.badgeText && slide.badgeText.trim() !== "" && slide.badgeStyle && slide.badgeStyle !== "none") {
        const badgeFontSize = Math.round(height * 0.0125 * (slide.headerFontSize || 1.0));
        ctx.font = getCanvasFont(slide.fontFamily, 800, badgeFontSize);
        ctx.textAlign = alignMode;

        const metrics = ctx.measureText(slide.badgeText.toUpperCase());
        const badgeW = metrics.width + 36;
        const badgeH = badgeFontSize + 18;
        let badgeX = textX - badgeW / 2;
        if (slide.textAlign === "left") badgeX = textX;
        if (slide.textAlign === "right") badgeX = textX - badgeW;

        if (slide.badgeStyle === "pill_filled") {
          ctx.fillStyle = slide.badgeBgColor || "#F59E0B";
          ctx.beginPath();
          ctx.roundRect(badgeX, height * 0.052, badgeW, badgeH, badgeH / 2);
          ctx.fill();

          ctx.fillStyle = slide.badgeTextColor || "#000000";
          ctx.fillText(slide.badgeText.toUpperCase(), badgeX + badgeW / 2, height * 0.052 + badgeH * 0.72);
        } else if (slide.badgeStyle === "pill_bordered") {
          ctx.strokeStyle = slide.badgeBgColor || "#F59E0B";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.roundRect(badgeX, height * 0.052, badgeW, badgeH, badgeH / 2);
          ctx.stroke();

          ctx.fillStyle = slide.badgeTextColor || "#FFFFFF";
          ctx.fillText(slide.badgeText.toUpperCase(), badgeX + badgeW / 2, height * 0.052 + badgeH * 0.72);
        } else if (slide.badgeStyle === "neon") {
          ctx.save();
          ctx.shadowColor = slide.badgeBgColor || "#F59E0B";
          ctx.shadowBlur = 15;
          ctx.fillStyle = slide.badgeBgColor || "#F59E0B";
          ctx.fillText(slide.badgeText.toUpperCase(), textX, height * 0.065);
          ctx.restore();
        }
      }

      // 5. HEADER TITLE RENDER
      const headerFontSize = Math.round(height * 0.036 * (slide.headerFontSize || 1.0));
      ctx.font = getCanvasFont(slide.fontFamily, 900, headerFontSize);
      ctx.textAlign = alignMode;
      ctx.fillStyle = slide.headerColor || "#ffffff";
      ctx.fillText(slide.header, textX, height * 0.115);

      // 6. SUBTEXT RENDER
      if (slide.subtext) {
        const subfontSize = Math.round(height * 0.017 * (slide.subtextFontSize || 1.0));
        ctx.font = getCanvasFont(slide.fontFamily, 400, subfontSize);
        ctx.textAlign = alignMode;
        ctx.fillStyle = slide.subtextColor || "rgba(255, 255, 255, 0.75)";
        ctx.fillText(slide.subtext, textX, height * 0.155);
      }

      // 7. DEVICE MOCKUP POSITION, BEZEL, SHADOW & ROTATION
      ctx.save();

      const baseFrameWidth = (width * 0.82) * (slide.mockupScale || 1.0);
      const baseFrameHeight = (height * 0.84) * (slide.mockupScale || 1.0);
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

      const cornerRadius = preset.deviceType === "Tablet" ? 44 : 58;

      // Outer Frame Shadow & Ambient Glow
      ctx.shadowColor = slide.frameShadowColor || "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = slide.frameShadowBlur !== undefined ? slide.frameShadowBlur : 40;
      ctx.shadowOffsetY = 24;

      // Subtle Realistic Side Buttons on iPhone Bezel
      if (preset.deviceType === "Phone") {
        ctx.fillStyle = slide.frameColor || "#1e1e1e";
        // Left side: Action button & Volume Buttons
        ctx.fillRect(drawX - 4, drawY + drawH * 0.18, 4, 32); // Action Button
        ctx.fillRect(drawX - 4, drawY + drawH * 0.24, 4, 60); // Volume Up
        ctx.fillRect(drawX - 4, drawY + drawH * 0.32, 4, 60); // Volume Down
        // Right side: Power / Lock Button
        ctx.fillRect(drawX + drawW, drawY + drawH * 0.26, 4, 90); // Power Button
      }

      // Draw Outer Bezel Body (Titanium / Dark Matte)
      ctx.beginPath();
      ctx.roundRect(drawX, drawY, drawW, drawH, cornerRadius);
      ctx.fillStyle = "#121212";
      ctx.fill();

      // Custom Border Width & Bezel Color
      const borderWidth = slide.frameBorderWidth !== undefined ? Math.max(3, slide.frameBorderWidth) : 8;
      ctx.lineWidth = borderWidth;
      ctx.strokeStyle = slide.frameColor || "#F59E0B";
      ctx.stroke();

      // Top Micro-Speaker Acoustic Mesh Slit on Outer Bezel
      if (preset.deviceType === "Phone") {
        const speakerW = drawW * 0.14;
        const speakerH = 4;
        const speakerX = -speakerW / 2;
        const speakerY = drawY + Math.max(4, borderWidth * 0.5);
        ctx.beginPath();
        ctx.roundRect(speakerX, speakerY, speakerW, speakerH, 2);
        ctx.fillStyle = "#262626";
        ctx.fill();
      }

      ctx.restore();

      // 8. INNER SCREEN AREA CLIP & IMAGE DRAW
      const innerMargin = Math.round(width * 0.012) + Math.round(borderWidth * 0.6);
      const innerX = drawX + innerMargin;
      const innerY = drawY + innerMargin;
      const innerW = drawW - innerMargin * 2;
      const innerH = drawH - innerMargin * 2;
      const innerRadius = Math.max(14, cornerRadius - innerMargin);

      ctx.save();
      ctx.translate(frameX, frameY);
      if (slide.mockupRotation) {
        ctx.rotate((slide.mockupRotation * Math.PI) / 180);
      }

      ctx.beginPath();
      ctx.roundRect(innerX, innerY, innerW, innerH, innerRadius);
      ctx.clip();

      // Inner Screen Custom Background Color
      ctx.fillStyle = slide.frameInnerBgColor || "#000000";
      ctx.fillRect(innerX, innerY, innerW, innerH);

      // Render Cutouts (Dynamic Island / Apple Notch / Hole Punch) and Status Bar
      const renderTopHardwareAndStatusBar = () => {
        // A) AUTHENTIC DYNAMIC ISLAND (Modern iPhone 15/16 Pro)
        if (slide.frameStyle === "island" && preset.deviceType === "Phone") {
          const islandW = innerW * 0.285;
          const islandH = innerH * 0.026;
          const islandX = innerX + (innerW - islandW) / 2;
          const islandY = innerY + innerH * 0.012;
          const islandR = islandH / 2;

          // Island Outer Glow / Edge Outline
          ctx.save();
          ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.roundRect(islandX, islandY, islandW, islandH, islandR);
          ctx.fillStyle = "#000000";
          ctx.fill();

          // Subtle 0.75px metallic rim so island pops on white/light screenshots
          ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // TrueDepth Camera Lens (Right Side)
          const camX = islandX + islandW * 0.74;
          const camY = islandY + islandH * 0.5;
          const camR = islandH * 0.22;
          ctx.beginPath();
          ctx.arc(camX, camY, camR, 0, Math.PI * 2);
          ctx.fillStyle = "#0a1324"; // Deep sapphire blue glass
          ctx.fill();
          // Lens Specular Reflection Dot
          ctx.beginPath();
          ctx.arc(camX - camR * 0.35, camY - camR * 0.35, camR * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(96, 165, 250, 0.65)";
          ctx.fill();

          // Face ID / Optical Matrix (Left Side)
          const sensorX = islandX + islandW * 0.28;
          const sensorY = islandY + islandH * 0.5;
          const sensorR = islandH * 0.16;
          ctx.beginPath();
          ctx.arc(sensorX, sensorY, sensorR, 0, Math.PI * 2);
          ctx.fillStyle = "#050505";
          ctx.fill();
          ctx.restore();
        } 
        // B) AUTHENTIC CLASSIC CURVED APPLE NOTCH (iPhone 14/13/XS)
        else if (slide.frameStyle === "notch" && preset.deviceType === "Phone") {
          const notchW = innerW * 0.44;
          const notchH = innerH * 0.034;
          const notchX = innerX + (innerW - notchW) / 2;
          const notchY = innerY;

          ctx.save();
          ctx.beginPath();
          // Top Left Outward Curve
          ctx.moveTo(notchX - 10, notchY);
          ctx.quadraticCurveTo(notchX, notchY, notchX, notchY + 8);
          // Left Wall
          ctx.lineTo(notchX, notchY + notchH - 12);
          // Bottom Left Round
          ctx.quadraticCurveTo(notchX, notchY + notchH, notchX + 12, notchY + notchH);
          // Bottom Wall
          ctx.lineTo(notchX + notchW - 12, notchY + notchH);
          // Bottom Right Round
          ctx.quadraticCurveTo(notchX + notchW, notchY + notchH, notchX + notchW, notchY + notchH - 12);
          // Right Wall
          ctx.lineTo(notchX + notchW, notchY + 8);
          // Top Right Outward Curve
          ctx.quadraticCurveTo(notchX + notchW, notchY, notchX + notchW + 10, notchY);
          ctx.closePath();
          ctx.fillStyle = "#000000";
          ctx.fill();

          // Speaker Slit in Notch
          const spkW = notchW * 0.36;
          const spkH = 4;
          const spkX = notchX + (notchW - spkW) / 2;
          const spkY = notchY + 8;
          ctx.beginPath();
          ctx.roundRect(spkX, spkY, spkW, spkH, 2);
          ctx.fillStyle = "#222222";
          ctx.fill();

          // Front Camera in Notch
          const nCamX = notchX + notchW * 0.78;
          const nCamY = notchY + notchH * 0.55;
          ctx.beginPath();
          ctx.arc(nCamX, nCamY, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#0d1a33";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(nCamX - 1.2, nCamY - 1.2, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(96, 165, 250, 0.7)";
          ctx.fill();
          ctx.restore();
        } 
        // C) ANDROID PUNCH HOLE
        else if (slide.frameStyle === "pixel_hole" && preset.deviceType === "Phone") {
          const holeX = innerX + innerW / 2;
          const holeY = innerY + innerH * 0.022;
          const holeR = innerW * 0.02;

          ctx.save();
          ctx.beginPath();
          ctx.arc(holeX, holeY, holeR, 0, Math.PI * 2);
          ctx.fillStyle = "#000000";
          ctx.fill();
          // Inner Sapphire Lens
          ctx.beginPath();
          ctx.arc(holeX, holeY, holeR * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = "#0a1324";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(holeX - holeR * 0.25, holeY - holeR * 0.25, holeR * 0.25, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(96, 165, 250, 0.7)";
          ctx.fill();
          ctx.restore();
        }

        // D) CRISP NATIVE APPLE STATUS BAR (9:41 + 5G/Wi-Fi + Battery)
        if (slide.showIOSStatusBar !== false && preset.deviceType === "Phone") {
          ctx.save();
          const sbColor = "rgba(255, 255, 255, 0.95)";
          ctx.fillStyle = sbColor;
          ctx.font = getCanvasFont("sans", 700, Math.round(innerW * 0.034));
          ctx.textAlign = "left";
          
          // Time 9:41
          const timeX = innerX + innerW * 0.07;
          const timeY = innerY + innerH * 0.028;
          ctx.fillText("9:41", timeX, timeY);

          // Right Icons (Cellular, Wi-Fi, Battery)
          const rightBaseX = innerX + innerW * 0.93;
          const iconY = innerY + innerH * 0.023;

          // 1. Battery Pill
          const batW = innerW * 0.054;
          const batH = innerH * 0.013;
          const batX = rightBaseX - batW;
          ctx.strokeStyle = sbColor;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.roundRect(batX, iconY - batH / 2, batW, batH, 3.5);
          ctx.stroke();

          // Battery Positive Nipple
          ctx.fillStyle = sbColor;
          ctx.beginPath();
          ctx.roundRect(batX + batW + 1.5, iconY - batH * 0.25, 2, batH * 0.5, 1);
          ctx.fill();

          // Battery 100% Charge Fill
          ctx.beginPath();
          ctx.roundRect(batX + 2.5, iconY - batH / 2 + 2.5, batW - 5, batH - 5, 2);
          ctx.fill();

          // 2. Wi-Fi Icon Arc
          const wifiX = batX - innerW * 0.045;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.arc(wifiX, iconY + 2, 8, Math.PI * 1.25, Math.PI * 1.75);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(wifiX, iconY + 2, 5, Math.PI * 1.25, Math.PI * 1.75);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(wifiX, iconY + 2, 1.5, 0, Math.PI * 2);
          ctx.fill();

          // 3. Cellular 4 Bars
          const cellX = wifiX - innerW * 0.042;
          for (let b = 0; b < 4; b++) {
            const barH = 4 + b * 2.8;
            ctx.fillRect(cellX + b * 3.2, iconY + 4 - barH, 2.2, barH);
          }

          ctx.restore();
        }
      };

      if (slide.imageSrc) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          // Crop out user's raw status bar to prevent double icons
          const srcY = (slide.cropStatusBar !== false) ? img.height * 0.042 : 0;
          const srcH = (slide.cropStatusBar !== false) ? img.height * 0.958 : img.height;
          const srcW = img.width;

          // High-DPI padding gap inside device frame
          const paddingGap = Math.max(1, Math.round(width * 0.001));
          const paddedW = innerW - paddingGap * 2;
          const paddedH = innerH - paddingGap * 2;

          ctx.drawImage(img, 0, srcY, srcW, srcH, innerX + paddingGap, innerY + paddingGap, paddedW, paddedH);

          // Draw hardware Dynamic Island / Notch and Status bar on top of screenshot
          renderTopHardwareAndStatusBar();

          ctx.restore();
          resolve();
        };
        img.onerror = () => {
          drawPlaceholderWireframe(ctx, innerX, innerY, innerW, innerH, slide.header);
          renderTopHardwareAndStatusBar();
          ctx.restore();
          resolve();
        };
        img.src = slide.imageSrc;
      } else {
        drawPlaceholderWireframe(ctx, innerX, innerY, innerW, innerH, slide.header);
        renderTopHardwareAndStatusBar();
        ctx.restore();
        resolve();
      }
    });
  }, []);

  // Re-render active canvas
  useEffect(() => {
    if (canvasRef.current && activeSlide) {
      renderSlideToCanvas(canvasRef.current, activeSlide, selectedPreset);
    }
  }, [activeSlide, selectedPreset, renderSlideToCanvas]);

  // Handle single slide PNG download
  const downloadSingleScreenshot = async (slide: ScreenshotSlide, index: number) => {
    const tempCanvas = document.createElement("canvas");
    await renderSlideToCanvas(tempCanvas, slide, selectedPreset);
    const link = document.createElement("a");
    link.download = `AppStore_${selectedPreset.id}_Slide_${index + 1}.png`;
    link.href = tempCanvas.toDataURL("image/png");
    link.click();
  };

  // Handle batch download all slides
  const downloadAllScreenshots = async () => {
    setIsGenerating(true);
    try {
      for (let i = 0; i < slides.length; i++) {
        await downloadSingleScreenshot(slides[i], i);
        await new Promise((r) => setTimeout(r, 400));
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const updateActiveSlide = (key: keyof ScreenshotSlide, value: ScreenshotSlide[keyof ScreenshotSlide]) => {
    const updated = [...slides];
    updated[activeSlideIndex] = {
      ...updated[activeSlideIndex],
      [key]: value,
    };
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
      badgeText: "",
      badgeBgColor: "#F59E0B",
      badgeTextColor: "#000000",
      badgeStyle: "none",
      header: `YOUR APP TITLE #${slides.length + 1}`,
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
      frameInnerBgColor: "#000000",
      frameBorderWidth: 8,
      frameShadowColor: "rgba(245, 158, 11, 0.35)",
      frameShadowBlur: 40,
      mockupScale: 1.0,
      mockupPositionY: 0,
      mockupRotation: 0,
      cropStatusBar: true,
      showIOSStatusBar: true,
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

  const applyCurrentStyleToAllSlides = () => {
    if (!activeSlide) return;
    const {
      badgeBgColor, badgeTextColor, badgeStyle,
      headerColor, headerFontSize, fontFamily, textAlign, letterSpacing,
      subtextColor, subtextFontSize,
      bgType, bgPreset, bgColorPrimary, bgColorSecondary, bgPattern,
      frameStyle, frameColor, frameInnerBgColor, frameBorderWidth, frameShadowColor, frameShadowBlur,
      mockupScale, mockupPositionY, mockupRotation, cropStatusBar, showIOSStatusBar
    } = activeSlide;

    const updated = slides.map((s) => ({
      ...s,
      badgeBgColor, badgeTextColor, badgeStyle,
      headerColor, headerFontSize, fontFamily, textAlign, letterSpacing,
      subtextColor, subtextFontSize,
      bgType, bgPreset, bgColorPrimary, bgColorSecondary, bgPattern,
      frameStyle, frameColor, frameInnerBgColor, frameBorderWidth, frameShadowColor, frameShadowBlur,
      mockupScale, mockupPositionY, mockupRotation, cropStatusBar, showIOSStatusBar
    }));

    setSlides(updated);
  };

  return (
    <div className="space-y-8">
      
      {/* PRESET SELECTION ROW */}
      <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
              <Sliders className="w-4 h-4" /> 2026 App Store &amp; Play Store Resolution Presets
            </h2>
            <p className="text-xs text-brand-muted font-light mt-0.5">
              Select target specifications for Apple App Store Connect or Google Play Console.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={applyCurrentStyleToAllSlides}
              className="flex items-center gap-1.5 bg-brand-gold/15 border border-brand-gold/40 hover:border-brand-gold text-brand-gold font-bold text-xs px-4 py-3 rounded-2xl transition-all cursor-pointer shadow-lg"
              title="Apply active slide's colors, fonts, zoom, & background to all slides"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" /> Sync Style to All Slides
            </button>

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
              <button
                onClick={applyCurrentStyleToAllSlides}
                className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 px-2.5 py-1 rounded-xl cursor-pointer flex items-center gap-1 transition-all"
              >
                <Sparkles className="w-3 h-3" /> Sync Style to All
              </button>
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
                      className="hover:text-rose-500 p-0.5 font-bold text-sm"
                      title="Delete this slide"
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

              {/* SECTION C: ASO BACKGROUND STUDIO & FULL COLOR PICKERS */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <Palette className="w-4 h-4" /> Background Color Studio
                </h4>

                {/* 1-Click ASO Palette Shortcuts */}
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
                    className="p-2.5 rounded-xl bg-[#0F172A] border border-[#F59E0B]/40 hover:border-[#F59E0B] text-left transition-all cursor-pointer"
                  >
                    <div className="text-[10px] font-bold text-[#F59E0B]">⭐ Dark Slate</div>
                    <div className="text-[9px] text-[#E2E8F0]">Executive &amp; Tech</div>
                  </button>

                  <button
                    onClick={() => {
                      updateActiveSlide("bgType", "custom_solid");
                      updateActiveSlide("bgColorPrimary", "#18181B");
                      updateActiveSlide("headerColor", "#FAFAFA");
                      updateActiveSlide("subtextColor", "#A1A1AA");
                      updateActiveSlide("badgeBgColor", "#d4af37");
                      updateActiveSlide("badgeTextColor", "#000000");
                      updateActiveSlide("frameColor", "#d4af37");
                    }}
                    className="p-2.5 rounded-xl bg-[#18181B] border border-amber-500/40 hover:border-amber-500 text-left transition-all cursor-pointer"
                  >
                    <div className="text-[10px] font-bold text-[#d4af37]">Titanium Gold</div>
                    <div className="text-[9px] text-zinc-400">Luxury Modern</div>
                  </button>

                  <button
                    onClick={() => {
                      updateActiveSlide("bgType", "custom_solid");
                      updateActiveSlide("bgColorPrimary", "#064E3B");
                      updateActiveSlide("headerColor", "#10B981");
                      updateActiveSlide("subtextColor", "#D1FAE5");
                      updateActiveSlide("badgeBgColor", "#10B981");
                      updateActiveSlide("badgeTextColor", "#000000");
                      updateActiveSlide("frameColor", "#10B981");
                    }}
                    className="p-2.5 rounded-xl bg-[#064E3B] border border-emerald-500/40 hover:border-emerald-500 text-left transition-all cursor-pointer"
                  >
                    <div className="text-[10px] font-bold text-[#10B981]">Emerald Pro</div>
                    <div className="text-[9px] text-emerald-200">High Trust Finance</div>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Background Mode</label>
                    <select
                      value={activeSlide.bgType}
                      onChange={(e) => updateActiveSlide("bgType", e.target.value as "custom_solid" | "custom_gradient" | "preset")}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="custom_solid">Solid Color</option>
                      <option value="custom_gradient">Linear Gradient</option>
                      <option value="preset">Theme Presets</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Overlay Pattern</label>
                    <select
                      value={activeSlide.bgPattern}
                      onChange={(e) => updateActiveSlide("bgPattern", e.target.value as "none" | "grid" | "dots")}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="none">None (Smooth)</option>
                      <option value="grid">Grid Wireframe</option>
                      <option value="dots">Dots Polka Mesh</option>
                    </select>
                  </div>
                </div>

                {/* Direct Interactive Background Color Pickers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <ColorPickerField
                    label="Background Color #1"
                    value={activeSlide.bgColorPrimary}
                    onChange={(val) => updateActiveSlide("bgColorPrimary", val)}
                    swatches={["#0F172A", "#080808", "#064E3B", "#1E1B4B", "#1F1207", "#FFFFFF"]}
                  />

                  {activeSlide.bgType === "custom_gradient" && (
                    <ColorPickerField
                      label="Gradient Color #2"
                      value={activeSlide.bgColorSecondary}
                      onChange={(val) => updateActiveSlide("bgColorSecondary", val)}
                      swatches={["#1E293B", "#18181B", "#022C22", "#0F172A", "#080401", "#E2E8F0"]}
                    />
                  )}
                </div>
              </div>

              {/* SECTION D: TYPOGRAPHY & TEXT COLOR PICKERS */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <Type className="w-4 h-4" /> Typography &amp; Font Colors
                </h4>

                {/* Header Title Input */}
                <div>
                  <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Header Title (2-4 Words Recommended)</label>
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

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Font Family</label>
                    <select
                      value={activeSlide.fontFamily}
                      onChange={(e) => updateActiveSlide("fontFamily", e.target.value as "sans" | "serif" | "mono" | "display")}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="sans">Apple SF Pro (Modern Sans)</option>
                      <option value="serif">Luxury Serif</option>
                      <option value="mono">SF Mono (Geist)</option>
                      <option value="display">Impact Bold</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Text Alignment</label>
                    <select
                      value={activeSlide.textAlign}
                      onChange={(e) => updateActiveSlide("textAlign", e.target.value as "center" | "left" | "right")}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="center">Center</option>
                      <option value="left">Left Align</option>
                      <option value="right">Right Align</option>
                    </select>
                  </div>
                </div>

                {/* Direct Typography Color Pickers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <ColorPickerField
                    label="Header Title Color"
                    value={activeSlide.headerColor}
                    onChange={(val) => updateActiveSlide("headerColor", val)}
                    swatches={["#F59E0B", "#FFFFFF", "#10B981", "#60A5FA", "#F43F5E", "#FDE047"]}
                  />

                  <ColorPickerField
                    label="Subtitle Text Color"
                    value={activeSlide.subtextColor}
                    onChange={(val) => updateActiveSlide("subtextColor", val)}
                    swatches={["#E2E8F0", "#94A3B8", "#D1FAE5", "#FDE047", "#FFFFFF", "#64748B"]}
                  />
                </div>

                {/* Font Size Sliders */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Title Size ({activeSlide.headerFontSize || 1.0}x)</label>
                    <input
                      type="range"
                      min="0.6"
                      max="1.8"
                      step="0.05"
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
                      step="0.05"
                      value={activeSlide.subtextFontSize || 1.0}
                      onChange={(e) => updateActiveSlide("subtextFontSize", parseFloat(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION E: BADGE / FEATURE PILL STUDIO */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <Tag className="w-4 h-4" /> Feature Pill &amp; Badge Studio
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={activeSlide.badgeText || ""}
                      onChange={(e) => updateActiveSlide("badgeText", e.target.value)}
                      placeholder="e.g. ★ 4.9 RATING or PRO"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Badge Style</label>
                    <select
                      value={activeSlide.badgeStyle || "none"}
                      onChange={(e) => updateActiveSlide("badgeStyle", e.target.value as "pill_filled" | "pill_bordered" | "neon" | "none")}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="none">Disabled (No Badge)</option>
                      <option value="pill_filled">Filled Pill</option>
                      <option value="pill_bordered">Bordered Outline</option>
                      <option value="neon">Neon Glow Text</option>
                    </select>
                  </div>
                </div>

                {activeSlide.badgeStyle !== "none" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <ColorPickerField
                      label="Badge Background Color"
                      value={activeSlide.badgeBgColor || "#F59E0B"}
                      onChange={(val) => updateActiveSlide("badgeBgColor", val)}
                      swatches={["#F59E0B", "#10B981", "#3B82F6", "#EF4444", "#8B5CF6", "#FFFFFF"]}
                    />

                    <ColorPickerField
                      label="Badge Text Color"
                      value={activeSlide.badgeTextColor || "#000000"}
                      onChange={(val) => updateActiveSlide("badgeTextColor", val)}
                      swatches={["#000000", "#FFFFFF", "#F59E0B", "#10B981", "#3B82F6"]}
                    />
                  </div>
                )}
              </div>

              {/* SECTION F: DEVICE FRAME, AUTHENTIC HARDWARE & COLOR PICKERS */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> iOS Device Frame &amp; Hardware Bezel
                </h4>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-brand-muted uppercase mb-1">Top Display Cutout</label>
                    <select
                      value={activeSlide.frameStyle}
                      onChange={(e) => updateActiveSlide("frameStyle", e.target.value as "island" | "notch" | "pixel_hole" | "borderless")}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold font-medium"
                    >
                      <option value="island">✨ Dynamic Island (iPhone 16/15 Pro)</option>
                      <option value="notch">📱 Classic Apple Curved Notch</option>
                      <option value="pixel_hole">⚫ Android Punch Hole</option>
                      <option value="borderless">⬛ Borderless Infinity</option>
                    </select>
                  </div>

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
                </div>

                {/* Direct Frame Color Pickers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <ColorPickerField
                    label="Bezel Frame Color"
                    value={activeSlide.frameColor}
                    onChange={(val) => updateActiveSlide("frameColor", val)}
                    swatches={["#F59E0B", "#1E1E1E", "#D4AF37", "#8A8A8E", "#2563EB", "#E2E8F0"]}
                  />

                  <ColorPickerField
                    label="Screen Inner BG"
                    value={activeSlide.frameInnerBgColor || "#000000"}
                    onChange={(val) => updateActiveSlide("frameInnerBgColor", val)}
                    swatches={["#000000", "#0A0A0A", "#1E1E1E", "#FFFFFF"]}
                  />

                  <ColorPickerField
                    label="Glow Shadow Color"
                    value={activeSlide.frameShadowColor || "rgba(245, 158, 11, 0.35)"}
                    onChange={(val) => updateActiveSlide("frameShadowColor", val)}
                    swatches={["rgba(245, 158, 11, 0.35)", "rgba(0, 0, 0, 0.5)", "rgba(16, 185, 129, 0.35)", "rgba(59, 130, 246, 0.35)"]}
                  />
                </div>

                {/* Status Bar Controls */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <label className="text-xs text-white font-medium flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeSlide.showIOSStatusBar !== false}
                        onChange={(e) => updateActiveSlide("showIOSStatusBar", e.target.checked)}
                        className="w-4 h-4 accent-brand-gold rounded cursor-pointer"
                      />
                      <span>Render Native Apple Status Bar (9:41, 5G, Battery)</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <label className="text-xs text-white font-medium flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeSlide.cropStatusBar !== false}
                        onChange={(e) => updateActiveSlide("cropStatusBar", e.target.checked)}
                        className="w-4 h-4 accent-brand-gold rounded cursor-pointer"
                      />
                      <span>Auto-Crop Raw Screenshot Top Bar</span>
                    </label>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* RIGHT COLUMN: LIVE CANVAS PREVIEW */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-center sticky top-6">
          <div className="w-full flex items-center justify-between bg-[#121212] border border-white/10 rounded-2xl px-5 py-3 shadow-lg">
            <div className="flex items-center gap-2 text-xs text-brand-muted font-mono truncate">
              <Eye className="w-4 h-4 text-brand-gold shrink-0" /> Target: <strong className="text-white truncate">{selectedPreset.name}</strong> ({selectedPreset.width}×{selectedPreset.height}px)
            </div>

            <button
              onClick={() => downloadSingleScreenshot(activeSlide, activeSlideIndex)}
              className="flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:underline cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" /> Export Slide PNG
            </button>
          </div>

          {/* HTML5 Canvas Render Box */}
          <div className="w-full bg-[#030303] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[580px] relative overflow-hidden shadow-2xl">
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
