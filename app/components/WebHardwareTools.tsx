"use client";

import { useState, useRef, useEffect } from "react";
import {
  Camera,
  Upload,
  Download,
  QrCode,
  Cpu,
  Copy,
  Check,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface WebHardwareToolsProps {
  toolId: string;
}

interface BarcodeDetectionResult {
  rawValue: string;
  format?: string;
}

interface BarcodeDetectorInstance {
  detect: (source: ImageBitmapSource) => Promise<BarcodeDetectionResult[]>;
}

interface BarcodeDetectorConstructor {
  new (options?: { formats?: string[] }): BarcodeDetectorInstance;
}

interface NdefRecordData {
  recordType: string;
  data?: DataView;
  encoding?: string;
}

interface NdefReadingEvent {
  serialNumber: string;
  message: {
    records: NdefRecordData[];
  };
}

interface NdefReaderInstance {
  scan: () => Promise<void>;
  write: (message: { records: { recordType: string; data: string }[] }) => Promise<void>;
  onreading: ((event: NdefReadingEvent) => void) | null;
  onreadingerror: (() => void) | null;
}

/**
 * Interactive client-side implementations for ID Photo Camera/Cropper,
 * QR Code Scanner, and Web NFC / NDEF Payload Builder utilities.
 */
export default function WebHardwareTools({ toolId }: WebHardwareToolsProps) {
  if (toolId === "id_cam" || toolId === "id-photo-camera") {
    return <IdPhotoCameraWorkspace />;
  }
  if (toolId === "qr_scan" || toolId === "qr-scanner") {
    return <QrScannerWorkspace />;
  }
  if (toolId === "nfc_tl" || toolId === "nfc-tools") {
    return <NfcStudioWorkspace />;
  }
  return null;
}

const ID_PRESETS = [
  { id: "us_2x2", label: "US Passport / Visa (2x2 in • 600x600 px)", w: 600, h: 600 },
  { id: "intl_35x45", label: "UK / Schengen / India (35x45 mm • 413x531 px)", w: 413, h: 531 },
  { id: "pan_25x35", label: "PAN / ID Card (25x35 mm • 295x413 px)", w: 295, h: 413 },
  { id: "dv_600", label: "Digital Visa Portal Square (600x600 px)", w: 600, h: 600 },
];

function IdPhotoCameraWorkspace() {
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [presetId, setPresetId] = useState<string>("us_2x2");
  const [zoom, setZoom] = useState<number>(100);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError("Live webcam capture requires HTTPS or a modern browser. You can upload any portrait photo below instead.");
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 960 } },
      });
      streamRef.current = stream;
      setCameraActive(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 50);
    } catch {
      setCameraError("Camera permission was denied or no camera was detected. Please upload an image file below.");
    }
  };

  const captureFromVideo = () => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    setSourceUrl(dataUrl);
    setOutputUrl(null);
    stopCamera();
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    stopCamera();
    const url = URL.createObjectURL(file);
    setSourceUrl(url);
    setOutputUrl(null);
  };

  const generateIdPhoto = () => {
    if (!sourceUrl) return;
    const preset = ID_PRESETS.find((p) => p.id === presetId) || ID_PRESETS[0];
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = preset.w;
      canvas.height = preset.h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, preset.w, preset.h);

      const scaleFactor = zoom / 100;
      const imgAspect = img.width / img.height;
      const targetAspect = preset.w / preset.h;

      let drawW: number;
      let drawH: number;
      if (imgAspect > targetAspect) {
        drawH = preset.h * scaleFactor;
        drawW = drawH * imgAspect;
      } else {
        drawW = preset.w * scaleFactor;
        drawH = drawW / imgAspect;
      }

      const dx = (preset.w - drawW) / 2;
      const dy = (preset.h - drawH) * 0.35;
      ctx.drawImage(img, dx, dy, drawW, drawH);

      setOutputUrl(canvas.toDataURL("image/jpeg", 0.94));
    };
    img.src = sourceUrl;
  };

  const selectedPreset = ID_PRESETS.find((p) => p.id === presetId) || ID_PRESETS[0];

  return (
    <div className="space-y-4 text-left">
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-brand-gold font-bold">
              1. Capture Live Photo or Upload Portrait
            </p>
            <p className="text-[11px] text-brand-muted">
              Processed 100% locally in browser memory. Select a preset standard for automatic 300 DPI sizing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {!cameraActive ? (
              <button
                type="button"
                onClick={startCamera}
                className="inline-flex items-center gap-1.5 bg-brand-gold/15 hover:bg-brand-gold/25 border border-brand-gold/30 text-brand-gold text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer transition-colors"
              >
                <Camera className="w-3.5 h-3.5" /> Open Camera
              </button>
            ) : (
              <button
                type="button"
                onClick={stopCamera}
                className="inline-flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer"
              >
                Stop Camera
              </button>
            )}
            <label className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold px-3.5 py-2 rounded-xl cursor-pointer transition-colors">
              <Upload className="w-3.5 h-3.5 text-brand-gold" /> Upload Photo
              <input type="file" accept="image/*" capture="user" onChange={handleUpload} className="hidden" />
            </label>
          </div>
        </div>

        {cameraError && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{cameraError}</span>
          </div>
        )}

        {cameraActive && (
          <div className="space-y-3 pt-2">
            <div className="relative rounded-2xl overflow-hidden border border-brand-gold/40 bg-black max-w-md mx-auto">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-auto block" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-48 border-2 border-dashed border-brand-gold/70 rounded-full opacity-80" />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={captureFromVideo}
                className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-premium-gold cursor-pointer"
              >
                Capture ID Portrait
              </button>
            </div>
          </div>
        )}
      </div>

      {sourceUrl && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-4 space-y-3">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1.5">
                Passport / Visa Standard
              </label>
              <select
                value={presetId}
                onChange={(e) => {
                  setPresetId(e.target.value);
                  setOutputUrl(null);
                }}
                className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
              >
                {ID_PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-brand-muted">Framing Zoom:</span>
                <span className="text-brand-gold font-bold">{zoom}%</span>
              </div>
              <input
                type="range"
                min="80"
                max="180"
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer"
              />
            </div>

            <button
              type="button"
              onClick={generateIdPhoto}
              className="w-full bg-white/10 hover:bg-brand-gold/20 border border-brand-gold/30 text-white text-xs font-bold py-2.5 rounded-xl cursor-pointer transition-colors"
            >
              Generate {selectedPreset.w}x{selectedPreset.h} ID Photo
            </button>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-between space-y-3">
            <span className="text-[10px] font-mono uppercase text-brand-muted">
              {outputUrl ? `Exported Standard (${selectedPreset.w}x${selectedPreset.h} px)` : "Source Preview"}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={outputUrl || sourceUrl}
              alt="ID Portrait Preview"
              className="max-h-52 w-auto rounded-xl border border-white/15 bg-white object-contain"
            />
            {outputUrl && (
              <a
                href={outputUrl}
                download={`id_photo_${selectedPreset.w}x${selectedPreset.h}.jpg`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl shadow-premium-gold"
              >
                <Download className="w-3.5 h-3.5" /> Download 300 DPI ID Photo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function QrScannerWorkspace() {
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const [scanFormat, setScanFormat] = useState<string>("qr_code");
  const [scanError, setScanError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);

  const stopCamera = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const getDetector = (): BarcodeDetectorInstance | null => {
    if (typeof window === "undefined") return null;
    const DetectorClass = (window as unknown as { BarcodeDetector?: BarcodeDetectorConstructor }).BarcodeDetector;
    if (!DetectorClass) return null;
    return new DetectorClass({ formats: ["qr_code", "ean_13", "code_128", "upc_a"] });
  };

  const handleImageScan = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    stopCamera();
    setScanError(null);
    setScannedResult(null);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    const detector = getDetector();
    if (!detector) {
      setScanError(
        "Your current browser lacks the native BarcodeDetector API (supported in Chrome/Edge/Android). Try Chrome/Edge or scan live using our iOS/Android companion app."
      );
      return;
    }

    try {
      const bitmap = await createImageBitmap(file);
      const codes = await detector.detect(bitmap);
      if (codes.length > 0) {
        setScannedResult(codes[0].rawValue);
        setScanFormat(codes[0].format || "qr_code");
      } else {
        setScanError("No readable QR code or barcode was detected in this image. Ensure sharp contrast and unobstructed quiet zones.");
      }
    } catch {
      setScanError("Unable to decode image locally. Please try a clearer PNG/JPG screenshot of the QR code.");
    }
  };

  const startLiveCameraScan = async () => {
    setScanError(null);
    setScannedResult(null);

    const detector = getDetector();
    if (!detector) {
      setScanError(
        "Live browser BarcodeDetector is not exposed in this browser engine yet (available in Chrome, Edge, and Android Chrome). Upload a QR image or use Chrome/Edge."
      );
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      setCameraActive(true);

      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.srcObject = stream;
        const tick = async () => {
          if (!videoRef.current || !streamRef.current) return;
          if (videoRef.current.readyState >= 2) {
            try {
              const found = await detector.detect(videoRef.current);
              if (found.length > 0) {
                setScannedResult(found[0].rawValue);
                setScanFormat(found[0].format || "qr_code");
                stopCamera();
                return;
              }
            } catch {
              // continue polling frame
            }
          }
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      }, 80);
    } catch {
      setScanError("Unable to access device camera. Grant camera permissions or upload a QR screenshot instead.");
    }
  };

  const copyPayload = () => {
    if (!scannedResult) return;
    navigator.clipboard.writeText(scannedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const isUrl = scannedResult ? /^https?:\/\//i.test(scannedResult) : false;

  return (
    <div className="space-y-4 text-left">
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-brand-gold font-bold">
              Scan QR Image or Live Camera
            </p>
            <p className="text-[11px] text-brand-muted">
              Decodes QR URLs, Wi-Fi payloads, vCards, and EAN/Code-128 barcodes directly inside browser RAM.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {!cameraActive ? (
              <button
                type="button"
                onClick={startLiveCameraScan}
                className="inline-flex items-center gap-1.5 bg-brand-gold/15 hover:bg-brand-gold/25 border border-brand-gold/30 text-brand-gold text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer transition-colors"
              >
                <QrCode className="w-3.5 h-3.5" /> Live Camera Scan
              </button>
            ) : (
              <button
                type="button"
                onClick={stopCamera}
                className="inline-flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer"
              >
                Stop Scanner
              </button>
            )}
            <label className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold px-3.5 py-2 rounded-xl cursor-pointer transition-colors">
              <Upload className="w-3.5 h-3.5 text-brand-gold" /> Upload QR Image
              <input type="file" accept="image/*" onChange={handleImageScan} className="hidden" />
            </label>
          </div>
        </div>

        {cameraActive && (
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden border border-brand-gold/40 bg-black relative">
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-auto block" />
            <div className="p-2 text-center text-[11px] font-mono text-brand-gold bg-black/70">
              Scanning frames locally... Hold QR code steadily inside frame.
            </div>
          </div>
        )}
      </div>

      {scanError && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{scanError}</span>
        </div>
      )}

      {(previewUrl || scannedResult) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {previewUrl && (
            <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center">
              <span className="text-[10px] font-mono text-brand-muted mb-2 uppercase">Source QR Image</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Uploaded QR Code" className="max-h-44 w-auto rounded-lg border border-white/10" />
            </div>
          )}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-4 space-y-3 flex flex-col justify-between md:col-span-1">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Decoded Payload
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-gold/15 text-brand-gold uppercase">
                  {scanFormat}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white break-all select-all">
                {scannedResult || "Ready to inspect payload..."}
              </div>
            </div>

            {scannedResult && (
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={copyPayload}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold py-2 px-3 rounded-xl cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied" : "Copy Content"}
                </button>
                {isUrl && (
                  <a
                    href={scannedResult}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black text-xs font-extrabold py-2 px-3 rounded-xl"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Open URL
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function NfcStudioWorkspace() {
  const [recordType, setRecordType] = useState<"url" | "text" | "wifi">("url");
  const [payloadValue, setPayloadValue] = useState<string>("https://www.resizertools.com");
  const [wifiPass, setWifiPass] = useState<string>("");
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [readTagInfo, setReadTagInfo] = useState<{ serial: string; records: string[] } | null>(null);
  const [isScanningNfc, setIsScanningNfc] = useState(false);

  const formattedPayload =
    recordType === "wifi"
      ? `WIFI:T:WPA;S:${payloadValue};P:${wifiPass};;`
      : payloadValue;

  const byteLength = new TextEncoder().encode(formattedPayload).length + 7; // NDEF header overhead estimate
  const fits213 = byteLength <= 144;
  const fits215 = byteLength <= 504;
  const fits216 = byteLength <= 888;

  const supportsWebNfc = typeof window !== "undefined" && "NDEFReader" in window;

  const handleReadNfc = async () => {
    setStatusMsg(null);
    if (!supportsWebNfc) {
      setStatusMsg(
        "Hardware Web NFC radio reading requires Chrome on Android (or the Resizer Tools iOS/Android mobile app). You can still validate NDEF records and chip sizes below."
      );
      return;
    }
    try {
      const NdefClass = (window as unknown as { NDEFReader: new () => NdefReaderInstance }).NDEFReader;
      const ndef = new NdefClass();
      setIsScanningNfc(true);
      await ndef.scan();
      setStatusMsg("Hold an NFC tag against the back of your Android phone to read NDEF records...");
      ndef.onreading = (event: NdefReadingEvent) => {
        const decoder = new TextDecoder();
        const recs = event.message.records.map((r) => {
          const text = r.data ? decoder.decode(r.data) : "(binary record)";
          return `${r.recordType.toUpperCase()}: ${text}`;
        });
        setReadTagInfo({ serial: event.serialNumber || "Unknown UID", records: recs });
        setIsScanningNfc(false);
        setStatusMsg("Tag read successfully.");
      };
      ndef.onreadingerror = () => {
        setStatusMsg("Could not read NDEF data from this NFC tag. Ensure the tag is NDEF formatted.");
        setIsScanningNfc(false);
      };
    } catch (err) {
      setStatusMsg(`NFC Read Error: ${(err as Error).message}`);
      setIsScanningNfc(false);
    }
  };

  const handleWriteNfc = async () => {
    setStatusMsg(null);
    if (!supportsWebNfc) {
      setStatusMsg(
        "Hardware Web NFC writing requires Chrome on Android over HTTPS (or our Resizer Tools iOS/Android app). Payload sizing preview below is ready for verification."
      );
      return;
    }
    try {
      const NdefClass = (window as unknown as { NDEFReader: new () => NdefReaderInstance }).NDEFReader;
      const ndef = new NdefClass();
      await ndef.write({
        records: [{ recordType: recordType === "url" ? "url" : "text", data: formattedPayload }],
      });
      setStatusMsg("Successfully wrote NDEF record to your physical NFC tag!");
    } catch (err) {
      setStatusMsg(`NFC Write Error: ${(err as Error).message}`);
    }
  };

  return (
    <div className="space-y-4 text-left">
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-brand-gold font-bold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> NDEF Tag Record Builder &amp; Web NFC Writer
            </p>
            <p className="text-[11px] text-brand-muted">
              Construct NDEF payloads, verify NTAG213/215/216 byte budgets, and write directly via Web NFC on Android Chrome.
            </p>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-muted">
            Web NFC: {supportsWebNfc ? "Supported" : "Desktop Inspection Mode"}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {(["url", "text", "wifi"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setRecordType(type);
                setPayloadValue(type === "url" ? "https://www.resizertools.com" : type === "wifi" ? "OfficeWiFi" : "Contact Note");
              }}
              className={`py-2 px-3 rounded-xl text-xs font-mono font-bold uppercase border cursor-pointer transition-colors ${
                recordType === type
                  ? "bg-brand-gold text-black border-brand-gold"
                  : "bg-black/30 text-brand-muted border-white/10 hover:text-white"
              }`}
            >
              {type} Record
            </button>
          ))}
        </div>

        <div className="space-y-2.5">
          <div>
            <label className="block text-[10px] font-mono uppercase text-brand-muted mb-1">
              {recordType === "url" ? "Target URL" : recordType === "wifi" ? "Wi-Fi SSID Name" : "Plain Text Message"}
            </label>
            <input
              type="text"
              value={payloadValue}
              onChange={(e) => setPayloadValue(e.target.value)}
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
            />
          </div>
          {recordType === "wifi" && (
            <div>
              <label className="block text-[10px] font-mono uppercase text-brand-muted mb-1">Wi-Fi WPA2/WPA3 Password</label>
              <input
                type="text"
                value={wifiPass}
                onChange={(e) => setWifiPass(e.target.value)}
                placeholder="Enter network password"
                className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
          )}
        </div>

        {/* NTAG Chip Capacity Calculator */}
        <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-brand-muted">Estimated NDEF Size:</span>
            <span className="text-brand-gold font-bold">{byteLength} bytes</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
            <div className={`p-1.5 rounded-lg border ${fits213 ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-rose-500/30 bg-rose-500/10 text-rose-400"}`}>
              NTAG213 (144B): {fits213 ? "Fits" : "Too Large"}
            </div>
            <div className={`p-1.5 rounded-lg border ${fits215 ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-rose-500/30 bg-rose-500/10 text-rose-400"}`}>
              NTAG215 (504B): {fits215 ? "Fits" : "Too Large"}
            </div>
            <div className={`p-1.5 rounded-lg border ${fits216 ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-rose-500/30 bg-rose-500/10 text-rose-400"}`}>
              NTAG216 (888B): {fits216 ? "Fits" : "Too Large"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleReadNfc}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold py-2.5 px-4 rounded-xl cursor-pointer transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanningNfc ? "animate-spin text-brand-gold" : ""}`} />
            {isScanningNfc ? "Waiting for NFC Tag..." : "Read NFC Tag"}
          </button>
          <button
            type="button"
            onClick={handleWriteNfc}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black text-xs font-extrabold py-2.5 px-4 rounded-xl cursor-pointer shadow-premium-gold"
          >
            Write NDEF to Tag
          </button>
        </div>

        {statusMsg && (
          <div className="p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-xs text-brand-gold-light">
            {statusMsg}
          </div>
        )}

        {readTagInfo && (
          <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/30 space-y-1 text-xs font-mono">
            <p className="text-emerald-400 font-bold">UID: {readTagInfo.serial}</p>
            {readTagInfo.records.map((rec, i) => (
              <p key={i} className="text-white break-all">{rec}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
