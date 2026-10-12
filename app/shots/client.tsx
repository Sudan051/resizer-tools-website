"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  Download, Smartphone, 
  Plus, Upload, Palette, MoveVertical, Type, Image as ImageIcon, Sparkles, Tag,
  ChevronLeft, ChevronRight, ArrowLeft
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

// Helper to draw clean placeholder wireframe inside phone screen
function drawPlaceholderWireframe(
  ctx: CanvasRenderingContext2D, 
  x: number, y: number, w: number, h: number
) {
  // Sleek dark gradient background for app canvas
  const bgGrad = ctx.createLinearGradient(x, y, x, y + h);
  bgGrad.addColorStop(0, "#11141c");
  bgGrad.addColorStop(1, "#07090e");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(x, y, w, h);

  // App UI Top Navigation Bar (Positioned safely BELOW status bar / dynamic island area)
  const navY = y + h * 0.072;
  const navH = h * 0.045;
  
  // Left: App Menu / Back pill icon
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.beginPath();
  ctx.roundRect(x + w * 0.08, navY + (navH - 24) / 2, 24, 24, 8);
  ctx.fill();

  // Center: App Header Title placeholder
  ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
  ctx.beginPath();
  ctx.roundRect(x + w * 0.35, navY + (navH - 12) / 2, w * 0.3, 12, 6);
  ctx.fill();

  // Right: Action button pill
  ctx.fillStyle = "rgba(245, 158, 11, 0.2)";
  ctx.beginPath();
  ctx.roundRect(x + w * 0.82, navY + (navH - 24) / 2, 24, 24, 8);
  ctx.fill();

  // Dotted Upload Screenshot Box in Center
  const boxX = x + w * 0.08;
  const boxY = y + h * 0.18;
  const boxW = w * 0.84;
  const boxH = h * 0.46;

  // Box Background
  ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 20);
  ctx.fill();

  // Dashed Golden Rim
  ctx.strokeStyle = "rgba(245, 158, 11, 0.45)";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([8, 8]);
  ctx.strokeRect(boxX, boxY, boxW, boxH);
  ctx.setLineDash([]);

  // Upload Cloud / Icon Glyph
  const iconCenterY = boxY + boxH * 0.34;
  ctx.fillStyle = "#F59E0B";
  ctx.beginPath();
  ctx.arc(x + w / 2, iconCenterY, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#000000";
  ctx.font = `900 ${Math.round(w * 0.045)}px -apple-system, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("↑", x + w / 2, iconCenterY);

  // Upload Callout Primary Text
  ctx.fillStyle = "#ffffff";
  ctx.font = `700 ${Math.round(w * 0.042)}px -apple-system, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Upload App Screenshot", x + w / 2, boxY + boxH * 0.58);

  // Upload Subtitle Helper
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.font = `500 ${Math.round(w * 0.028)}px -apple-system, sans-serif`;
  ctx.fillText("PNG, JPG or WebP supported", x + w / 2, boxY + boxH * 0.68);

  // App UI Bottom Cards / Skeleton Rows
  const cardY1 = y + h * 0.69;
  const cardH = h * 0.085;
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  ctx.beginPath();
  ctx.roundRect(boxX, cardY1, boxW, cardH, 16);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Skeleton rows inside card
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.beginPath();
  ctx.roundRect(boxX + 16, cardY1 + 18, boxW * 0.45, 10, 5);
  ctx.fill();
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.beginPath();
  ctx.roundRect(boxX + 16, cardY1 + 36, boxW * 0.65, 8, 4);
  ctx.fill();

  const cardY2 = y + h * 0.80;
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  ctx.beginPath();
  ctx.roundRect(boxX, cardY2, boxW, cardH, 16);
  ctx.fill();
  ctx.stroke();

  // Skeleton rows inside card 2
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.beginPath();
  ctx.roundRect(boxX + 16, cardY2 + 18, boxW * 0.35, 10, 5);
  ctx.fill();
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.beginPath();
  ctx.roundRect(boxX + 16, cardY2 + 36, boxW * 0.55, 8, 4);
  ctx.fill();

  // iOS Home Indicator Bar at the bottom
  const homeW = w * 0.34;
  const homeH = 4.5;
  const homeX = x + (w - homeW) / 2;
  const homeY = y + h - 14;
  ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
  ctx.beginPath();
  ctx.roundRect(homeX, homeY, homeW, homeH, homeH / 2);
  ctx.fill();
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
    <div className="space-y-0.5 text-left">
      <label className="block text-[9px] font-mono text-brand-muted uppercase tracking-wider">{label}</label>
      <div className="flex items-center gap-1.5">
        <div className="relative flex items-center shrink-0">
          <input
            type="color"
            value={safeHex.length === 7 ? safeHex : "#d4af37"}
            onChange={(e) => onChange(e.target.value)}
            className="w-5 h-5 rounded cursor-pointer bg-transparent border border-white/20 p-0 hover:border-brand-gold transition-colors"
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#HEX or rgba"
          className="w-full bg-black/60 border border-white/10 rounded-lg px-2 py-0.5 text-[10px] text-white font-mono focus:outline-none focus:border-brand-gold uppercase"
        />
      </div>
      {swatches && swatches.length > 0 && (
        <div className="flex flex-wrap gap-1 pt-0.5">
          {swatches.map((swatch) => (
            <button
              key={swatch}
              type="button"
              onClick={() => onChange(swatch)}
              className="w-3 h-3 rounded-full border border-white/20 hover:scale-125 transition-transform cursor-pointer"
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

      // ==========================================
      // LAYER 1: BACKGROUND RENDER
      // ==========================================
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

      // Background Pattern
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

      // ==========================================
      // LAYER 2: DEVICE MOCKUP HARDWARE & SCREEN
      // ==========================================
      const renderDeviceAndMarketing = () => {
        ctx.save();

        const baseFrameWidth = (width * 0.82) * (slide.mockupScale || 1.0);
        const baseFrameHeight = (height * 0.80) * (slide.mockupScale || 1.0);
        
        // Clean Device Placement: starts around 24% height so marketing text has plenty of breathing room
        const frameX = width / 2;
        const frameY = height * 0.65 + (slide.mockupPositionY || 0);

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
          ctx.fillRect(drawX - 4, drawY + drawH * 0.18, 4, 32); // Action Button
          ctx.fillRect(drawX - 4, drawY + drawH * 0.24, 4, 60); // Volume Up
          ctx.fillRect(drawX - 4, drawY + drawH * 0.32, 4, 60); // Volume Down
          ctx.fillRect(drawX + drawW, drawY + drawH * 0.26, 4, 90); // Power Button
        }

        // Draw Outer Bezel Body
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

        // Inner Screen Area Clip & Image Draw
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

        // Inner Screen Background Fill
        ctx.fillStyle = slide.frameInnerBgColor || "#000000";
        ctx.fillRect(innerX, innerY, innerW, innerH);

        // Hardware Notch/Island & Status Bar Sub-Renderer
        const renderHardwareAndStatusBar = () => {
          const islandH = innerH * 0.027;
          const islandY = innerY + innerH * 0.012;
          const statusBarY = islandY + islandH * 0.5;

          // A) DYNAMIC ISLAND (Modern iPhone 15/16 Pro)
          if (slide.frameStyle === "island" && preset.deviceType === "Phone") {
            const islandW = innerW * 0.285;
            const islandX = innerX + (innerW - islandW) / 2;
            const islandR = islandH / 2;

            ctx.save();
            ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.roundRect(islandX, islandY, islandW, islandH, islandR);
            ctx.fillStyle = "#000000";
            ctx.fill();

            // 0.75px metallic outline rim so island pops on light screenshots
            ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
            ctx.lineWidth = 1;
            ctx.stroke();

            // TrueDepth Camera Lens (Right)
            const camX = islandX + islandW * 0.76;
            const camY = statusBarY;
            const camR = islandH * 0.22;
            ctx.beginPath();
            ctx.arc(camX, camY, camR, 0, Math.PI * 2);
            ctx.fillStyle = "#0a1324";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(camX - camR * 0.35, camY - camR * 0.35, camR * 0.35, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(96, 165, 250, 0.65)";
            ctx.fill();

            // Face ID / Optical Matrix (Left)
            const sensorX = islandX + islandW * 0.26;
            const sensorY = statusBarY;
            const sensorR = islandH * 0.16;
            ctx.beginPath();
            ctx.arc(sensorX, sensorY, sensorR, 0, Math.PI * 2);
            ctx.fillStyle = "#050505";
            ctx.fill();
            ctx.restore();
          } 
          // B) CLASSIC APPLE CURVED NOTCH (iPhone 14/13/XS)
          else if (slide.frameStyle === "notch" && preset.deviceType === "Phone") {
            const notchW = innerW * 0.44;
            const notchH = innerH * 0.034;
            const notchX = innerX + (innerW - notchW) / 2;
            const notchY = innerY;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(notchX - 10, notchY);
            ctx.quadraticCurveTo(notchX, notchY, notchX, notchY + 8);
            ctx.lineTo(notchX, notchY + notchH - 12);
            ctx.quadraticCurveTo(notchX, notchY + notchH, notchX + 12, notchY + notchH);
            ctx.lineTo(notchX + notchW - 12, notchY + notchH);
            ctx.quadraticCurveTo(notchX + notchW, notchY + notchH, notchX + notchW, notchY + notchH - 12);
            ctx.lineTo(notchX + notchW, notchY + 8);
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

            // Front Camera
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
          // C) ANDROID HOLE PUNCH
          else if (slide.frameStyle === "pixel_hole" && preset.deviceType === "Phone") {
            const holeX = innerX + innerW / 2;
            const holeY = statusBarY;
            const holeR = innerW * 0.02;

            ctx.save();
            ctx.beginPath();
            ctx.arc(holeX, holeY, holeR, 0, Math.PI * 2);
            ctx.fillStyle = "#000000";
            ctx.fill();
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
            ctx.font = getCanvasFont("sans", 700, Math.round(innerW * 0.035));
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            
            // Time 9:41
            const timeX = innerX + innerW * 0.075;
            ctx.fillText("9:41", timeX, statusBarY);

            // Right Icons (Cellular, Wi-Fi, Battery)
            const rightBaseX = innerX + innerW * 0.925;

            // 1. Battery Pill
            const batW = innerW * 0.054;
            const batH = innerH * 0.0125;
            const batX = rightBaseX - batW;
            const batY = statusBarY - batH / 2;
            ctx.strokeStyle = sbColor;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.roundRect(batX, batY, batW, batH, 3.5);
            ctx.stroke();

            // Battery Nipple
            ctx.fillStyle = sbColor;
            ctx.beginPath();
            ctx.roundRect(batX + batW + 1.2, statusBarY - batH * 0.22, 1.8, batH * 0.44, 1);
            ctx.fill();

            // Battery Charge Fill
            ctx.beginPath();
            ctx.roundRect(batX + 2.2, batY + 2.2, batW - 4.4, batH - 4.4, 2);
            ctx.fill();

            // 2. Wi-Fi Arc
            const wifiX = batX - innerW * 0.046;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(wifiX, statusBarY + 3, 7.5, Math.PI * 1.25, Math.PI * 1.75);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(wifiX, statusBarY + 3, 4.5, Math.PI * 1.25, Math.PI * 1.75);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(wifiX, statusBarY + 3, 1.5, 0, Math.PI * 2);
            ctx.fill();

            // 3. Cellular 4 Bars
            const cellX = wifiX - innerW * 0.044;
            const cellBaseY = statusBarY + batH * 0.45;
            for (let b = 0; b < 4; b++) {
              const barH = 3.5 + b * 2.5;
              ctx.fillRect(cellX + b * 3.2, cellBaseY - barH, 2.2, barH);
            }

            ctx.restore();
          }
        };

        if (slide.imageSrc) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => {
            const srcY = (slide.cropStatusBar !== false) ? img.height * 0.042 : 0;
            const srcH = (slide.cropStatusBar !== false) ? img.height * 0.958 : img.height;
            const srcW = img.width;

            const paddingGap = Math.max(1, Math.round(width * 0.001));
            const paddedW = innerW - paddingGap * 2;
            const paddedH = innerH - paddingGap * 2;

            ctx.drawImage(img, 0, srcY, srcW, srcH, innerX + paddingGap, innerY + paddingGap, paddedW, paddedH);
            renderHardwareAndStatusBar();
            ctx.restore();
            renderMarketingLayer();
            resolve();
          };
          img.onerror = () => {
            drawPlaceholderWireframe(ctx, innerX, innerY, innerW, innerH);
            renderHardwareAndStatusBar();
            ctx.restore();
            renderMarketingLayer();
            resolve();
          };
          img.src = slide.imageSrc;
        } else {
          drawPlaceholderWireframe(ctx, innerX, innerY, innerW, innerH);
          renderHardwareAndStatusBar();
          ctx.restore();
          renderMarketingLayer();
          resolve();
        }
      };

      // ==========================================
      // LAYER 3: TOP MARKETING COPY (ALWAYS ON TOP)
      // ==========================================
      const renderMarketingLayer = () => {
        ctx.save();
        let textX = width / 2;
        let alignMode: CanvasTextAlign = "center";
        if (slide.textAlign === "left") {
          textX = width * 0.08;
          alignMode = "left";
        } else if (slide.textAlign === "right") {
          textX = width * 0.92;
          alignMode = "right";
        }

        // App Logo Watermark
        if (slide.logoSrc) {
          const logoImg = new Image();
          logoImg.crossOrigin = "anonymous";
          logoImg.onload = () => {
            const logoSize = Math.round(height * 0.035);
            let logoX = width / 2 - logoSize / 2;
            if (slide.textAlign === "left") logoX = width * 0.08;
            if (slide.textAlign === "right") logoX = width * 0.92 - logoSize;
            
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(logoX, height * 0.015, logoSize, logoSize, 10);
            ctx.clip();
            ctx.drawImage(logoImg, logoX, height * 0.015, logoSize, logoSize);
            ctx.restore();
          };
          logoImg.src = slide.logoSrc;
        }

        const hasBadge = slide.badgeText && slide.badgeText.trim() !== "" && slide.badgeStyle && slide.badgeStyle !== "none";

        // A) TOP BADGE
        let currentY = height * 0.035;
        if (hasBadge) {
          const badgeFontSize = Math.round(height * 0.012 * (slide.headerFontSize || 1.0));
          ctx.font = getCanvasFont(slide.fontFamily, 800, badgeFontSize);
          ctx.textAlign = alignMode;
          ctx.textBaseline = "alphabetic";

          const metrics = ctx.measureText(slide.badgeText.toUpperCase());
          const badgeW = metrics.width + 32;
          const badgeH = badgeFontSize + 16;
          let badgeX = textX - badgeW / 2;
          if (slide.textAlign === "left") badgeX = textX;
          if (slide.textAlign === "right") badgeX = textX - badgeW;

          if (slide.badgeStyle === "pill_filled") {
            ctx.fillStyle = slide.badgeBgColor || "#F59E0B";
            ctx.beginPath();
            ctx.roundRect(badgeX, currentY, badgeW, badgeH, badgeH / 2);
            ctx.fill();

            ctx.fillStyle = slide.badgeTextColor || "#000000";
            ctx.fillText(slide.badgeText.toUpperCase(), badgeX + badgeW / 2, currentY + badgeH * 0.72);
          } else if (slide.badgeStyle === "pill_bordered") {
            ctx.strokeStyle = slide.badgeBgColor || "#F59E0B";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(badgeX, currentY, badgeW, badgeH, badgeH / 2);
            ctx.stroke();

            ctx.fillStyle = slide.badgeTextColor || "#FFFFFF";
            ctx.fillText(slide.badgeText.toUpperCase(), badgeX + badgeW / 2, currentY + badgeH * 0.72);
          } else if (slide.badgeStyle === "neon") {
            ctx.save();
            ctx.shadowColor = slide.badgeBgColor || "#F59E0B";
            ctx.shadowBlur = 12;
            ctx.fillStyle = slide.badgeBgColor || "#F59E0B";
            ctx.fillText(slide.badgeText.toUpperCase(), textX, currentY + badgeH * 0.65);
            ctx.restore();
          }

          currentY += badgeH + height * 0.015;
        } else {
          currentY = height * 0.048;
        }

        // B) HEADER TITLE (WITH AUTO MULTI-LINE WRAPPING)
        const headerFontSize = Math.round(height * 0.035 * (slide.headerFontSize || 1.0));
        ctx.font = getCanvasFont(slide.fontFamily, 900, headerFontSize);
        ctx.textAlign = alignMode;
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = slide.headerColor || "#ffffff";

        const maxTitleWidth = width * 0.86;
        const words = (slide.header || "").split(" ");
        let line = "";
        const lines: string[] = [];

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxTitleWidth && n > 0) {
            lines.push(line.trim());
            line = words[n] + " ";
          } else {
            line = testLine;
          }
        }
        lines.push(line.trim());

        const lineHeight = headerFontSize * 1.15;
        for (let i = 0; i < lines.length; i++) {
          ctx.fillText(lines[i], textX, currentY + headerFontSize * 0.85 + (i * lineHeight));
        }
        currentY += (lines.length * lineHeight) + height * 0.008;

        // C) SUBTEXT DESCRIPTION
        if (slide.subtext && slide.subtext.trim() !== "") {
          const subfontSize = Math.round(height * 0.016 * (slide.subtextFontSize || 1.0));
          ctx.font = getCanvasFont(slide.fontFamily, 500, subfontSize);
          ctx.textAlign = alignMode;
          ctx.textBaseline = "alphabetic";
          ctx.fillStyle = slide.subtextColor || "rgba(255, 255, 255, 0.75)";
          
          const subwords = slide.subtext.split(" ");
          let subline = "";
          const sublines: string[] = [];
          for (let sn = 0; sn < subwords.length; sn++) {
            const testSub = subline + subwords[sn] + " ";
            if (ctx.measureText(testSub).width > maxTitleWidth && sn > 0) {
              sublines.push(subline.trim());
              subline = subwords[sn] + " ";
            } else {
              subline = testSub;
            }
          }
          sublines.push(subline.trim());

          const subLineHeight = subfontSize * 1.25;
          for (let si = 0; si < sublines.length; si++) {
            ctx.fillText(sublines[si], textX, currentY + subfontSize * 0.85 + (si * subLineHeight));
          }
        }

        ctx.restore();
      };

      // Launch Device & Layer Rendering
      renderDeviceAndMarketing();
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
    <div className="flex flex-col h-[calc(100vh-24px)] min-h-[580px] max-h-[100vh] space-y-1.5 overflow-hidden">
      
      {/* 🚀 TOP ULTRA-COMPACT TOOLBAR (Single Sleek 44px Bar) */}
      <header className="h-11 shrink-0 bg-[#121212] border border-white/10 rounded-xl px-2.5 sm:px-3 flex items-center justify-between gap-2 shadow-lg z-20">
        {/* Left: Back & Title & Preset Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-muted hover:text-brand-gold transition-colors shrink-0"
            title="Back to Web Studio"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <div className="h-3.5 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xs font-bold text-white tracking-tight hidden md:inline">Screenshot Studio</span>
            <span className="text-[9px] font-mono bg-brand-gold/20 text-brand-gold px-1.5 py-0.2 rounded border border-brand-gold/30 font-bold">PRO</span>
          </div>

          {/* Preset Dropdown */}
          <div className="flex items-center gap-1 ml-1">
            <select
              value={selectedPreset.id}
              onChange={(e) => {
                const p = PRESET_SIZES.find((s) => s.id === e.target.value);
                if (p) setSelectedPreset(p);
              }}
              className="bg-black/80 border border-white/20 rounded-lg px-2 py-0.5 text-[11px] text-white font-medium focus:outline-none focus:border-brand-gold cursor-pointer max-w-[150px] sm:max-w-[210px] truncate"
            >
              {PRESET_SIZES.map((preset) => (
                <option key={preset.id} value={preset.id} className="bg-[#121212] text-white">
                  {preset.platform === "iOS" ? "🍏" : "🤖"} {preset.name} ({preset.width}×{preset.height})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Center: Slide Sequencer Pills */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlideIndex(idx)}
              className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-mono font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1 ${
                activeSlideIndex === idx
                  ? "bg-brand-gold text-black border-brand-gold shadow-md"
                  : "bg-white/[0.04] border-white/10 text-white hover:border-brand-gold/40"
              }`}
            >
              <span>#{idx + 1}</span>
              <span className="truncate max-w-[65px] hidden sm:inline">{slide.header || "Slide"}</span>
              {slides.length > 1 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSlide(idx);
                  }}
                  className="hover:text-rose-600 p-0.5 font-bold text-[10px]"
                  title="Delete slide"
                >
                  ×
                </span>
              )}
            </button>
          ))}
          <button
            onClick={handleAddNewSlide}
            className="p-1 rounded-lg bg-white/5 border border-white/10 hover:border-brand-gold/40 text-brand-gold hover:text-white transition-all cursor-pointer shrink-0"
            title="Add new screenshot slide"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={applyCurrentStyleToAllSlides}
            className="flex items-center gap-1 bg-brand-gold/10 border border-brand-gold/30 hover:border-brand-gold text-brand-gold font-bold text-[11px] px-2.5 py-1 rounded-lg transition-all cursor-pointer"
            title="Apply active slide's colors, fonts, zoom, & background to all slides"
          >
            <Sparkles className="w-3 h-3" /> <span className="hidden sm:inline">Sync Style</span>
          </button>

          <button
            onClick={downloadAllScreenshots}
            disabled={isGenerating}
            className="flex items-center gap-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark text-black font-extrabold text-[11px] px-3 py-1 rounded-lg shadow-premium-gold hover:scale-105 transition-transform cursor-pointer disabled:opacity-50 shrink-0"
          >
            <Download className="w-3 h-3 stroke-[3]" />
            <span>{isGenerating ? "Exporting..." : `Export (${slides.length})`}</span>
          </button>
        </div>
      </header>

      {/* 3-COLUMN WORKSPACE: LEFT TOOLS | CENTER PREVIEW | RIGHT TOOLS */}
      <div className="flex-1 flex flex-col lg:flex-row gap-2 overflow-hidden min-h-0">
        
        {/* ⬅️ LEFT COLUMN: DEVICE, UPLOADS & POSITIONING (w-[260px] xl:w-[280px]) */}
        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 h-full overflow-y-auto custom-scrollbar space-y-2 pr-1 pb-4">
          {activeSlide && (
            <>
              {/* SECTION 1: UPLOAD ASSETS */}
              <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 space-y-2 shadow-sm text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-1">
                  <Upload className="w-3 h-3" /> 1. Upload Assets
                </h3>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-brand-gold/40 space-y-0.5">
                    <label className="block text-[9px] font-mono font-bold text-white uppercase flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-brand-gold" /> App Screenshot
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full text-[9px] text-neutral-400 file:mr-1.5 file:py-0.5 file:px-2 file:rounded-md file:border-0 file:text-[9px] file:font-semibold file:bg-brand-gold/20 file:text-brand-gold file:cursor-pointer"
                    />
                    {activeSlide.imageSrc && (
                      <span className="text-[8px] text-emerald-400 font-mono block">✓ Loaded</span>
                    )}
                  </div>

                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/10 space-y-0.5">
                    <label className="block text-[9px] font-mono font-bold text-white uppercase flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-brand-gold" /> App Icon / Logo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="w-full text-[9px] text-neutral-400 file:mr-1.5 file:py-0.5 file:px-2 file:rounded-md file:border-0 file:text-[9px] file:font-semibold file:bg-white/10 file:text-white file:cursor-pointer"
                    />
                    {activeSlide.logoSrc && (
                      <span className="text-[8px] text-emerald-400 font-mono block">✓ Loaded</span>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION 2: DEVICE FRAME & HARDWARE BEZEL */}
              <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 space-y-2 shadow-sm text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-1">
                  <Smartphone className="w-3 h-3" /> 2. Device Frame &amp; Bezel
                </h3>

                <div className="space-y-2">
                  <div>
                    <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Top Display Cutout</label>
                    <select
                      value={activeSlide.frameStyle}
                      onChange={(e) => updateActiveSlide("frameStyle", e.target.value as "island" | "notch" | "pixel_hole" | "borderless")}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold font-medium"
                    >
                      <option value="island">✨ Dynamic Island (16 Pro)</option>
                      <option value="notch">📱 Apple Curved Notch</option>
                      <option value="pixel_hole">⚫ Android Punch Hole</option>
                      <option value="borderless">⬛ Borderless</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between text-[9px] font-mono mb-0.5">
                      <span className="text-brand-muted uppercase">Border Width</span>
                      <span className="text-brand-gold font-bold">{activeSlide.frameBorderWidth}px</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      step="1"
                      value={activeSlide.frameBorderWidth || 8}
                      onChange={(e) => updateActiveSlide("frameBorderWidth", parseInt(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1 cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <ColorPickerField
                      label="Bezel Frame"
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
                  </div>

                  <ColorPickerField
                    label="Glow Shadow"
                    value={activeSlide.frameShadowColor || "rgba(245, 158, 11, 0.35)"}
                    onChange={(val) => updateActiveSlide("frameShadowColor", val)}
                    swatches={["rgba(245, 158, 11, 0.35)", "rgba(0, 0, 0, 0.5)", "rgba(16, 185, 129, 0.35)", "rgba(59, 130, 246, 0.35)"]}
                  />

                  {/* Status Bar Toggles */}
                  <div className="space-y-1 pt-1 border-t border-white/5">
                    <label className="text-[10px] text-white font-medium flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeSlide.showIOSStatusBar !== false}
                        onChange={(e) => updateActiveSlide("showIOSStatusBar", e.target.checked)}
                        className="w-3 h-3 accent-brand-gold rounded cursor-pointer"
                      />
                      <span>Render Apple Status Bar (9:41)</span>
                    </label>

                    <label className="text-[10px] text-white font-medium flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeSlide.cropStatusBar !== false}
                        onChange={(e) => updateActiveSlide("cropStatusBar", e.target.checked)}
                        className="w-3 h-3 accent-brand-gold rounded cursor-pointer"
                      />
                      <span>Auto-Crop Raw Top Bar</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* SECTION 3: ZOOM, POSITION & TILT */}
              <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 space-y-2 shadow-sm text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-1">
                  <MoveVertical className="w-3 h-3" /> 3. Zoom, Position &amp; Tilt
                </h3>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[9px] font-mono mb-0.5">
                      <span className="text-brand-muted uppercase">Zoom Factor</span>
                      <span className="text-brand-gold font-bold">{activeSlide.mockupScale}x</span>
                    </div>
                    <input
                      type="range"
                      min="0.6"
                      max="1.4"
                      step="0.05"
                      value={activeSlide.mockupScale || 1.0}
                      onChange={(e) => updateActiveSlide("mockupScale", parseFloat(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[9px] font-mono mb-0.5">
                      <span className="text-brand-muted uppercase">Vertical Offset</span>
                      <span className="text-brand-gold font-bold">{activeSlide.mockupPositionY}px</span>
                    </div>
                    <input
                      type="range"
                      min="-120"
                      max="120"
                      step="10"
                      value={activeSlide.mockupPositionY || 0}
                      onChange={(e) => updateActiveSlide("mockupPositionY", parseInt(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[9px] font-mono mb-0.5">
                      <span className="text-brand-muted uppercase">3D Tilt Angle</span>
                      <span className="text-brand-gold font-bold">{activeSlide.mockupRotation}°</span>
                    </div>
                    <input
                      type="range"
                      min="-20"
                      max="20"
                      step="1"
                      value={activeSlide.mockupRotation || 0}
                      onChange={(e) => updateActiveSlide("mockupRotation", parseInt(e.target.value))}
                      className="w-full accent-brand-gold bg-white/10 rounded-lg h-1 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 🎯 CENTER COLUMN: PREVIEW VIEWPORT (FITS IN VIEWPORT WITHOUT SCROLLING) */}
        <div className="flex-1 h-full min-w-0 flex flex-col items-center justify-between p-2 bg-[#050505] border border-white/10 rounded-2xl relative overflow-hidden">
          {/* Quick Preview Navigation Bar */}
          <div className="w-full flex items-center justify-between bg-[#121212] border border-white/10 rounded-lg px-2.5 py-1 shadow-sm shrink-0 mb-1">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveSlideIndex(Math.max(0, activeSlideIndex - 1))}
                disabled={activeSlideIndex === 0}
                className="p-0.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white cursor-pointer"
                title="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded bg-white/5 border border-white/10">
                Slide #{activeSlideIndex + 1}/{slides.length}
              </span>

              <button
                onClick={() => setActiveSlideIndex(Math.min(slides.length - 1, activeSlideIndex + 1))}
                disabled={activeSlideIndex === slides.length - 1}
                className="p-0.5 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white cursor-pointer"
                title="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <span className="text-[10px] font-mono text-brand-gold font-medium truncate mx-2">
              {selectedPreset.name} • {selectedPreset.width}×{selectedPreset.height}px
            </span>

            <button
              onClick={() => downloadSingleScreenshot(activeSlide, activeSlideIndex)}
              className="flex items-center gap-1 text-[10px] font-bold text-black bg-brand-gold hover:bg-brand-gold-light px-2 py-0.5 rounded transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-3 h-3 stroke-[2.5]" />
              <span className="hidden sm:inline">Export PNG</span>
            </button>
          </div>

          {/* HTML5 Canvas Render Box - auto-scales dynamically to fit viewport */}
          <div className="flex-1 w-full flex items-center justify-center min-h-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-gold/5 blur-3xl pointer-events-none" />

            <canvas
              ref={canvasRef}
              className="rounded-xl border border-white/10 shadow-2xl transition-all duration-300 object-contain"
              style={{
                maxHeight: "calc(100vh - 130px)",
                maxWidth: "100%",
              }}
            />
          </div>

          <div className="text-center pt-0.5 shrink-0">
            <span className="text-[9px] font-mono text-brand-muted">
              High-DPI Client Render • 100% Client-Side Memory
            </span>
          </div>
        </div>

        {/* ➡️ RIGHT COLUMN: TYPOGRAPHY, BADGES & BACKGROUND (w-[260px] xl:w-[280px]) */}
        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 h-full overflow-y-auto custom-scrollbar space-y-2 pl-1 pb-4">
          {activeSlide && (
            <>
              {/* SECTION 4: TYPOGRAPHY & TEXT COLORS */}
              <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 space-y-2 shadow-sm text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-1">
                  <Type className="w-3 h-3" /> 4. Typography &amp; Copy
                </h3>

                <div className="space-y-2">
                  {/* Header Title */}
                  <div>
                    <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Header Headline</label>
                    <input
                      type="text"
                      value={activeSlide.header}
                      onChange={(e) => updateActiveSlide("header", e.target.value)}
                      placeholder="e.g. YOUR APP TITLE"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <ColorPickerField
                      label="Header Color"
                      value={activeSlide.headerColor}
                      onChange={(val) => updateActiveSlide("headerColor", val)}
                      swatches={["#F59E0B", "#FFFFFF", "#10B981", "#60A5FA", "#F43F5E", "#FDE047"]}
                    />

                    <div>
                      <div className="flex justify-between text-[9px] font-mono mb-0.5">
                        <span className="text-brand-muted uppercase">Size</span>
                        <span className="text-brand-gold font-bold">{activeSlide.headerFontSize || 1.0}x</span>
                      </div>
                      <input
                        type="range"
                        min="0.6"
                        max="1.8"
                        step="0.05"
                        value={activeSlide.headerFontSize || 1.0}
                        onChange={(e) => updateActiveSlide("headerFontSize", parseFloat(e.target.value))}
                        className="w-full accent-brand-gold bg-white/10 rounded-lg h-1 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Subtext Description */}
                  <div className="pt-1 border-t border-white/5">
                    <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Subtext Description</label>
                    <input
                      type="text"
                      value={activeSlide.subtext}
                      onChange={(e) => updateActiveSlide("subtext", e.target.value)}
                      placeholder="e.g. Describe key app benefit"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <ColorPickerField
                      label="Subtext Color"
                      value={activeSlide.subtextColor}
                      onChange={(val) => updateActiveSlide("subtextColor", val)}
                      swatches={["#E2E8F0", "#94A3B8", "#D1FAE5", "#FDE047", "#FFFFFF", "#64748B"]}
                    />

                    <div>
                      <div className="flex justify-between text-[9px] font-mono mb-0.5">
                        <span className="text-brand-muted uppercase">Size</span>
                        <span className="text-brand-gold font-bold">{activeSlide.subtextFontSize || 1.0}x</span>
                      </div>
                      <input
                        type="range"
                        min="0.6"
                        max="1.8"
                        step="0.05"
                        value={activeSlide.subtextFontSize || 1.0}
                        onChange={(e) => updateActiveSlide("subtextFontSize", parseFloat(e.target.value))}
                        className="w-full accent-brand-gold bg-white/10 rounded-lg h-1 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-white/5">
                    <div>
                      <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Font Family</label>
                      <select
                        value={activeSlide.fontFamily}
                        onChange={(e) => updateActiveSlide("fontFamily", e.target.value as "sans" | "serif" | "mono" | "display")}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-1.5 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold"
                      >
                        <option value="sans">Apple SF Pro</option>
                        <option value="serif">Luxury Serif</option>
                        <option value="mono">SF Mono</option>
                        <option value="display">Impact Bold</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Alignment</label>
                      <select
                        value={activeSlide.textAlign}
                        onChange={(e) => updateActiveSlide("textAlign", e.target.value as "center" | "left" | "right")}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-1.5 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold"
                      >
                        <option value="center">Center</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 5: FEATURE BADGE */}
              <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 space-y-2 shadow-sm text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-1">
                  <Tag className="w-3 h-3" /> 5. Feature Badge Pill
                </h3>

                <div className="space-y-1.5">
                  <div className="grid grid-cols-2 gap-1.5">
                    <div>
                      <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Badge Text</label>
                      <input
                        type="text"
                        value={activeSlide.badgeText || ""}
                        onChange={(e) => updateActiveSlide("badgeText", e.target.value)}
                        placeholder="★ 4.9 RATING"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Style</label>
                      <select
                        value={activeSlide.badgeStyle || "none"}
                        onChange={(e) => updateActiveSlide("badgeStyle", e.target.value as "pill_filled" | "pill_bordered" | "neon" | "none")}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-1.5 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold"
                      >
                        <option value="none">Disabled</option>
                        <option value="pill_filled">Filled</option>
                        <option value="pill_bordered">Border</option>
                        <option value="neon">Neon</option>
                      </select>
                    </div>
                  </div>

                  {activeSlide.badgeStyle !== "none" && (
                    <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-white/5">
                      <ColorPickerField
                        label="Badge BG"
                        value={activeSlide.badgeBgColor || "#F59E0B"}
                        onChange={(val) => updateActiveSlide("badgeBgColor", val)}
                        swatches={["#F59E0B", "#10B981", "#3B82F6", "#EF4444", "#8B5CF6", "#FFFFFF"]}
                      />

                      <ColorPickerField
                        label="Badge Text"
                        value={activeSlide.badgeTextColor || "#000000"}
                        onChange={(val) => updateActiveSlide("badgeTextColor", val)}
                        swatches={["#000000", "#FFFFFF", "#F59E0B", "#10B981", "#3B82F6"]}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 6: BACKGROUND STUDIO */}
              <div className="p-2.5 rounded-xl bg-[#121212] border border-white/10 space-y-2 shadow-sm text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold font-mono flex items-center gap-1">
                  <Palette className="w-3 h-3" /> 6. Background Studio
                </h3>

                <div className="space-y-2">
                  {/* 1-Click ASO Palette Shortcuts */}
                  <div className="grid grid-cols-3 gap-1">
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
                      className="p-1.5 rounded-lg bg-[#0F172A] border border-[#F59E0B]/40 hover:border-[#F59E0B] text-left transition-all cursor-pointer"
                    >
                      <div className="text-[8px] font-bold text-[#F59E0B] truncate">Dark Slate</div>
                      <div className="text-[7px] text-[#E2E8F0] truncate">Executive</div>
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
                      className="p-1.5 rounded-lg bg-[#18181B] border border-amber-500/40 hover:border-amber-500 text-left transition-all cursor-pointer"
                    >
                      <div className="text-[8px] font-bold text-[#d4af37] truncate">Gold</div>
                      <div className="text-[7px] text-zinc-400 truncate">Luxury</div>
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
                      className="p-1.5 rounded-lg bg-[#064E3B] border border-emerald-500/40 hover:border-emerald-500 text-left transition-all cursor-pointer"
                    >
                      <div className="text-[8px] font-bold text-[#10B981] truncate">Emerald</div>
                      <div className="text-[7px] text-emerald-200 truncate">Finance</div>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <div>
                      <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Mode</label>
                      <select
                        value={activeSlide.bgType}
                        onChange={(e) => updateActiveSlide("bgType", e.target.value as "custom_solid" | "custom_gradient" | "preset")}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-1.5 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold"
                      >
                        <option value="custom_solid">Solid</option>
                        <option value="custom_gradient">Gradient</option>
                        <option value="preset">Preset</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono text-brand-muted uppercase mb-0.5">Pattern</label>
                      <select
                        value={activeSlide.bgPattern}
                        onChange={(e) => updateActiveSlide("bgPattern", e.target.value as "none" | "grid" | "dots")}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-1.5 py-1 text-[11px] text-white focus:outline-none focus:border-brand-gold"
                      >
                        <option value="none">None</option>
                        <option value="grid">Grid</option>
                        <option value="dots">Dots</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1 border-t border-white/5">
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
              </div>
            </>
          )}
        </div>

      </div>

    </div>
  );
}
