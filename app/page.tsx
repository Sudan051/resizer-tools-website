"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import { encryptPDF } from "@pdfsmaller/pdf-encrypt-lite";
import { decryptPDF } from "@pdfsmaller/pdf-decrypt-lite";
import { 
  Download, Sliders, Maximize2, ShieldCheck, Smartphone, 
  Briefcase, Cpu, Play, ArrowDownCircle,
  Crop, Image as ImageIcon, Camera, Grid, QrCode,
  FileText, Copy, Percent, Split, Trash2, FolderSync,
  RefreshCw, RotateCw, PenTool, Droplet, Lock, Unlock, 
  FileCode, Cpu as NfcCpu, X, Sparkles, Check
} from "lucide-react";
// 🌐 CONFIGURATION KEYS (Replace with your actual keys)
const RAZORPAY_KEY_ID = "rzp_test_mockkey12345"; // e.g. "rzp_live_xxxxxxxxxxxxxx"
const GOOGLE_ADSENSE_PUB_ID = "ca-pub-5876595914883924"; // e.g. "ca-pub-xxxxxxxxxxxxxxxx"

// 🛠 Master Tools Dataset with full detailed user explanations
const toolsData = [
  { id: "img_comp", title: "Image Compressor", subtitle: "Reduce image size without losing quality", desc: "Advanced down-sampling algorithms compress image file sizes up to 80% while retaining pixel-perfect fidelity for app deployment.", icon: ArrowDownCircle, category: "image", src: "/Pro.png", isAppOnly: false },
  { id: "img_res", title: "Image Resizer", subtitle: "Resize images to custom dimensions", desc: "Scale canvas aspect ratios instantly. Input custom coordinate parameters for flawless App Store asset rendering.", icon: Crop, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "img_pdf", title: "Image to PDF", subtitle: "Convert images into PDF documents", desc: "Batch transform multiple image files directly into formatted PDF pages natively without external server latency.", icon: ImageIcon, category: "image", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "img_conv", title: "Image Format Converter", subtitle: "Convert images between formats", desc: "Convert seamlessly between HEIC, PNG, JPEG, and WebP, optimizing assets for multi-platform distribution.", icon: RefreshCw, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "id_cam", title: "ID Photo Camera", subtitle: "Capture photos for official documents", desc: "Smart live-viewfinder alignment assistance helps you capture and auto-crop standard government-compliant document photos.", icon: Camera, category: "image", src: "/utilify-camera.jpg", isAppOnly: true },
  { id: "prnt_sheet", title: "Print Photo Sheet", subtitle: "Arrange photos on Letter sheets", desc: "Auto-arrange passport sizes or standard cutouts perfectly on grid layouts for A4, A5, and Letter sheet dimensions.", icon: Grid, category: "image", src: "/utilify-camera.jpg", isAppOnly: false },
  
  { id: "qr_scan", title: "QR Scanner", subtitle: "Scan and decode QR codes instantly", desc: "Hardware-accelerated camera optics capture, decode, and parse structural metadata link formats inside sub-pixel vectors.", icon: QrCode, category: "scanner", src: "/QRPowerScan.png", isAppOnly: true },
  { id: "doc_scan", title: "Document Scanner", subtitle: "Scan documents with auto edge detection", desc: "Real-time edge checking and automated quad perspective wrapping clean up skewed camera snapshots into crisp flat scans.", icon: FileText, category: "scanner", src: "/utilify-scan.jpg", isAppOnly: false },
  
  { id: "mrg_pdf", title: "Merge PDF", subtitle: "Combine multiple PDFs into one", desc: "Consolidate independent sub-documents or bulk paperwork paperwork packets cleanly into a unified index-optimized master PDF.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "mk_pdf", title: "PDF Maker", subtitle: "Create PDF files from vectors", desc: "Design structural layout configurations from localized media elements, text styles, and layout alignment matrices.", icon: FileCode, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "red_pdf", title: "PDF Reducer", subtitle: "Compress PDF files to save space", desc: "Optimize embedded graphics and compress structural document streams to drastically cut asset storage overhead.", icon: Percent, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "spl_pdf", title: "Split PDF", subtitle: "Extract pages from PDF documents", desc: "Surgically extract specified page indexes or break up bulky documentation arrays into cleanly segmented sub-files.", icon: Split, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "del_pdf", title: "Delete PDF Pages", subtitle: "Remove unwanted pages from PDF", desc: "Prune bloated assets instantly by clearing out irrelevant padding padding blocks or unwanted pages from document streams.", icon: Trash2, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ext_pdf", title: "Extract PDF Pages", subtitle: "Save specific pages from PDF", desc: "Isolate specific visual blocks or forms from massive data tables and dump them cleanly into distinct files.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ord_pdf", title: "Reorder PDF Pages", subtitle: "Change page order in PDF", desc: "An interactive, visual layout workspace to easily drag, drop, and rearrange index page configurations on the fly.", icon: FolderSync, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "rot_pdf", title: "Rotate PDF Pages", subtitle: "Rotate selected pages in PDF", desc: "Fix misaligned camera uploads instantly by adjusting structural rotation matrices by 90, 180, or 270 degrees.", icon: RotateCw, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "sgn_pdf", title: "Sign PDF", subtitle: "Add signature to PDF", desc: "Draw, cache, and stamp dynamic personalized cryptographic visual signatures cleanly onto official application layers.", icon: PenTool, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "wtrmk_pdf", title: "PDF Watermark", subtitle: "Add text watermark to PDF", desc: "Inject transparent security badging, copyright texts, or corporate logo graphics directly into asset backgrounds.", icon: Droplet, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "pdf_imgs", title: "PDF to Images", subtitle: "Convert PDF pages to images", icon: ImageIcon, desc: "Deconstruct compressed cross-platform document packages into separate lossless high-resolution asset images.", category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "prt_pdf", title: "Protect PDF", subtitle: "Add password to PDF", desc: "Enforce ironclad user file safety using local AES password hashes and secure document permission locking flags.", icon: Lock, category: "pdf", src: "/ProtectPDF.png", isAppOnly: false },
  { id: "unl_pdf", title: "Unlock PDF", subtitle: "Remove password from PDF", desc: "Instantly decrypt authorized protected streams and drop password requirements for verified layout updates.", icon: Unlock, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "inv_mk", title: "Invoice Maker", subtitle: "Create professional invoices", desc: "Generate professional corporate statements with exact sub-total computations, localized tax tabs, and sleek headers.", icon: FileText, category: "pdf", src: "/NFC Command.png", isAppOnly: false },
  { id: "num_pdf", title: "Page Numbers", subtitle: "Add page numbers to PDF", desc: "Stamp custom-aligned dynamic numeric indexes automatically onto base layouts with adjustable margins.", icon: Sliders, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  
  { id: "qr_gen", title: "QR Generator", subtitle: "Create QR codes instantly", desc: "Generate customized high-density vector matrix codes using custom tracking hyperlinks, text strings, or credentials.", icon: QrCode, category: "generator", src: "/scan and Generate QR.png", isAppOnly: false },
  { id: "sig_cr", title: "Signature Creator", subtitle: "Draw and save signature", desc: "Smooth vector canvas capturing utility transforms touch/stylus paths into anti-aliased alpha-channel graphics.", icon: PenTool, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false },
  
  { id: "nfc_tl", title: "NFC Tools", subtitle: "Read and write NFC tags", desc: "Access native radio frequencies to write customized NDEF instructions or query contactless chip assets effortlessly.", icon: NfcCpu, category: "nfc", src: "/NFC Command.png", isAppOnly: true }
];

const categories = [
  { id: "all", label: "All Tools" },
  { id: "image", label: "Images" },
  { id: "scanner", label: "Scanners" },
  { id: "pdf", label: "PDF Studio" },
  { id: "generator", label: "Generators" },
  { id: "nfc", label: "NFC" }
];

const realScreenshots = [
  { src: "/Home.png", headline: "Ultimate All-In-One Utilities", sub: "Image, PDF, QR, NFC Integrated" },
  { src: "/Pro.png", headline: "Unlock Full Productivity", sub: "Complete Pro Suite Features" },
  { src: "/ProtectPDF.png", headline: "Secure, Sign, & Master PDFs", sub: "Advanced Document Controls" },
  { src: "/QRPowerScan.png", headline: "QR Power: Scan & Design", sub: "Instant Code Generation" },
  { src: "/scan and Generate QR.png", headline: "Scan & Generate Instantly", sub: "Effortless Creation Loop" },
  { src: "/NFC Command.png", headline: "NFC Command & Smart Invoicing", sub: "Connect Seamlessly Everywhere" }
];

export default function Home() {
  const [width, setWidth] = useState(1242);
  const [height, setHeight] = useState(2688);
  const [activeCategory, setActiveCategory] = useState("all");

  // Form States for Rating and Feedback
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  // Interface for tool types
  interface Tool {
    id: string;
    title: string;
    subtitle?: string;
    desc?: string;
    icon?: React.ComponentType<{ className?: string }>;
    category?: string;
    src?: string;
    isAppDownload?: boolean;
  }

  // Interactive tools states
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [showSubscription, setShowSubscription] = useState(false);
  const [showAd, setShowAd] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("resizer_pro_subscribed") === "true";
    }
    return false;
  });
  const [paymentProgress, setPaymentProgress] = useState<string | null>(null);

  // States for interactive workspace utilities
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Specific tool configurations
  const [imgQuality, setImgQuality] = useState(80);
  const [resizeWidth, setResizeWidth] = useState(800);
  const [resizeHeight, setResizeHeight] = useState(600);
  const [qrText, setQrText] = useState("https://utilify.app");
  const [docContrast, setDocContrast] = useState(130);
  const [docBrightness, setDocBrightness] = useState(100);
  const [docGrayscale, setDocGrayscale] = useState(true);

  // States for PDF manipulation tools
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [splitStart, setSplitStart] = useState(1);
  const [splitEnd, setSplitEnd] = useState(1);
  const [pdfRotation, setPdfRotation] = useState(90);
  const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL");
  const [watermarkColor, setWatermarkColor] = useState("#D4AF37");
  const [pdfPageCount, setPdfPageCount] = useState(0);

  // Ad Download Countdown states
  const [showAdOverlay, setShowAdOverlay] = useState(false);
  const [adCountdown, setAdCountdown] = useState(5);
  const [adDownloadUrl, setAdDownloadUrl] = useState<string | null>(null);
  const [adFileName, setAdFileName] = useState("");

  // Signature canvas ref, drawing & color states
  const sigCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [sigColor, setSigColor] = useState("#FFFFFF");

  // Invoice Maker states
  const [senderName, setSenderName] = useState("Your Company");
  const [senderEmail, setSenderEmail] = useState("billing@company.com");
  const [clientName, setClientName] = useState("Client Company");
  const [clientEmail, setClientEmail] = useState("info@client.com");
  const [invoiceNum, setInvoiceNum] = useState("INV-001");
  const [invoiceItems, setInvoiceItems] = useState<{ id: number; desc: string; qty: number; price: number }[]>([
    { id: 1, desc: "Premium Design Work", qty: 1, price: 999 }
  ]);
  const [invoiceTax, setInvoiceTax] = useState(18);

  // Extended PDF tools states
  const [deletePagesInput, setDeletePagesInput] = useState("");
  const [extractPagesInput, setExtractPagesInput] = useState("");
  const [reorderPagesInput, setReorderPagesInput] = useState("");
  const [signatureImageFile, setSignatureImageFile] = useState<File | null>(null);
  const [signPageNum, setSignPageNum] = useState(1);
  const [targetPageImageIndex, setTargetPageImageIndex] = useState(1);
  const [pdfPassword, setPdfPassword] = useState("");
  const [unlockPassword, setUnlockPassword] = useState("");

  // Additional canvas and print sheet states
  const [targetImageFormat, setTargetImageFormat] = useState("image/png");
  const [photoSheetRows, setPhotoSheetRows] = useState(3);
  const [photoSheetCols, setPhotoSheetCols] = useState(4);
  const [pdfMakerText, setPdfMakerText] = useState("Your Document Content");

  // Open & close modal helpers to clear state cleanly
  const openToolModal = (tool: Tool) => {
    setUploadFile(null);
    setPreviewUrl(null);
    setDownloadUrl(null);
    setIsLoading(false);
    setUploadFiles([]);
    setSplitStart(1);
    setSplitEnd(1);
    setPdfRotation(90);
    setWatermarkText("CONFIDENTIAL");
    setPdfPageCount(0);
    setSigColor("#FFFFFF");
    setSenderName("Your Company");
    setSenderEmail("billing@company.com");
    setClientName("Client Company");
    setClientEmail("info@client.com");
    setInvoiceNum("INV-001");
    setInvoiceItems([{ id: 1, desc: "Premium Design Work", qty: 1, price: 999 }]);
    setInvoiceTax(18);
    setDeletePagesInput("");
    setExtractPagesInput("");
    setReorderPagesInput("");
    setSignatureImageFile(null);
    setSignPageNum(1);
    setTargetPageImageIndex(1);
    setPdfPassword("");
    setUnlockPassword("");
    setTargetImageFormat("image/png");
    setPhotoSheetRows(3);
    setPhotoSheetCols(4);
    setPdfMakerText("Your Document Content");
    setActiveTool(tool);
  };

  const closeToolModal = () => {
    setActiveTool(null);
    clearSignature();
  };

  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("yearly");

  // Load Scripts on Mount
  useEffect(() => {
    // 1. Load Razorpay script
    const rzScript = document.createElement("script");
    rzScript.src = "https://checkout.razorpay.com/v1/checkout.js";
    rzScript.async = true;
    document.body.appendChild(rzScript);

    // 3. Load Google AdSense script if publisher ID is declared
    let adsScript: HTMLScriptElement | null = null;
    if (GOOGLE_ADSENSE_PUB_ID && GOOGLE_ADSENSE_PUB_ID.startsWith("ca-pub-")) {
      adsScript = document.createElement("script");
      adsScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_PUB_ID}`;
      adsScript.crossOrigin = "anonymous";
      adsScript.async = true;
      document.head.appendChild(adsScript);
    }

    return () => {
      if (document.body.contains(rzScript)) {
        document.body.removeChild(rzScript);
      }
      if (adsScript && document.head.contains(adsScript)) {
        document.head.removeChild(adsScript);
      }
    };
  }, []);

  // Ad Countdown Interval Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showAdOverlay && adCountdown > 0) {
      interval = setInterval(() => {
        setAdCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showAdOverlay, adCountdown]);

  // Intercept downloads and force interstitial ads for non-subscribed users
  const triggerAdDownload = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, downloadUrlValue: string | null, filename: string) => {
    if (!downloadUrlValue) return;

    if (isSubscribed) {
      // Immediate download
      const a = document.createElement("a");
      a.href = downloadUrlValue;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // Intercept and launch interstitial ad overlay
      e.preventDefault();
      setAdDownloadUrl(downloadUrlValue);
      setAdFileName(filename);
      setAdCountdown(5);
      setShowAdOverlay(true);
    }
  };

  const handleRazorpaySubscription = (planType: "monthly" | "yearly") => {
    const priceText = planType === "monthly" ? "Monthly Plan (₹199)" : "Yearly Plan (₹999)";
    const amountVal = planType === "monthly" ? 19900 : 99900; // in paisa
    const displayAmount = planType === "monthly" ? "199.00" : "999.00";
    
    // Fall back to clean simulation if using the placeholder key
    if (RAZORPAY_KEY_ID === "rzp_test_mockkey12345") {
      setPaymentProgress("Initializing Razorpay checkout...");
      setTimeout(() => {
        setPaymentProgress("Connecting to secure payment gateway...");
      }, 600);
      setTimeout(() => {
        setPaymentProgress(`Processing test transaction of ₹${displayAmount}...`);
      }, 1300);
      setTimeout(() => {
        setPaymentProgress("Payment approved! Unlocking Utilify Pro access...");
      }, 2000);
      setTimeout(() => {
        setIsSubscribed(true);
        localStorage.setItem("resizer_pro_subscribed", "true");
        setPaymentProgress(null);
        setShowSubscription(false);
        alert(`Subscription activated successfully! [TEST GATEWAY] - Plan: ${priceText}. Ads removed.`);
      }, 2700);
      return;
    }

    // Otherwise, launch the real Razorpay transaction window
    interface RazorpayResponse {
      razorpay_payment_id: string;
      razorpay_order_id?: string;
      razorpay_signature?: string;
    }

    interface RazorpayInstance {
      open: () => void;
    }

    interface WindowWithRazorpay {
      Razorpay: new (options: unknown) => RazorpayInstance;
    }

    const win = window as unknown as WindowWithRazorpay;
    if (!win.Razorpay) {
      alert("Razorpay SDK is still loading. Please try again in a moment.");
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amountVal,
      currency: "INR",
      name: "Resizer Tools",
      description: `Premium Subscription - ${priceText}`,
      image: "/utilify-dashboard.jpg",
      handler: function (response: RazorpayResponse) {
        setIsSubscribed(true);
        localStorage.setItem("resizer_pro_subscribed", "true");
        setShowSubscription(false);
        alert(`Subscription activated successfully! Payment ID: ${response.razorpay_payment_id}. Ads removed.`);
      },
      prefill: {
        name: userName || "Premium User",
        email: "user@example.com",
      },
      theme: {
        color: "#D4AF37"
      }
    };

    try {
      const rzp = new win.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay initiation failed:", err);
      alert("Failed to open Razorpay payment window. Please check if your Key ID is correct.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setDownloadUrl(null);
      
      // Auto fill dimensions for Resizer
      if (activeTool?.id === "img_res") {
        const img = new window.Image();
        img.onload = () => {
          setResizeWidth(img.width);
          setResizeHeight(img.height);
        };
        img.src = URL.createObjectURL(file);
      }

      // Load page count if PDF file
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const bytes = event.target?.result as ArrayBuffer;
            const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
            try {
              const count = pdf.getPageCount();
              setPdfPageCount(count);
              setSplitStart(1);
              setSplitEnd(count);
            } catch {
              setPdfPageCount(1);
              setSplitStart(1);
              setSplitEnd(1);
            }
          } catch (err) {
            console.error("Error reading PDF:", err);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  const handleMultipleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadFiles(Array.from(files));
      setDownloadUrl(null);
    }
  };

  // 📁 Merge PDFs
  const mergePDFs = async () => {
    if (uploadFiles.length < 2) {
      alert("Please upload at least 2 PDF files to merge.");
      return;
    }
    setIsLoading(true);
    try {
      const mergedPdf = await PDFDocument.create();
      for (const file of uploadFiles) {
        const fileBytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(fileBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to merge PDFs. Please verify files are not password protected.");
    }
    setIsLoading(false);
  };

  // ✂ Split PDF
  const splitPDF = async () => {
    if (!uploadFile) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      const totalPages = pdf.getPageCount();
      
      const start = Math.max(1, Math.min(splitStart, totalPages));
      const end = Math.max(start, Math.min(splitEnd, totalPages));
      
      if (start > end) {
        alert("Start page cannot be greater than End page.");
        setIsLoading(false);
        return;
      }

      const newPdf = await PDFDocument.create();
      const indices = [];
      for (let i = start - 1; i < end; i++) {
        indices.push(i);
      }
      const copiedPages = await newPdf.copyPages(pdf, indices);
      copiedPages.forEach((page) => newPdf.addPage(page));
      
      const newPdfBytes = await newPdf.save();
      const blob = new Blob([newPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to split PDF.");
    }
    setIsLoading(false);
  };

  // 🔄 Rotate PDF Pages
  const rotatePDF = async () => {
    if (!uploadFile) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      const pages = pdf.getPages();
      pages.forEach((page) => {
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees((currentRotation + pdfRotation) % 360));
      });
      const rotatedPdfBytes = await pdf.save();
      const blob = new Blob([rotatedPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to rotate PDF.");
    }
    setIsLoading(false);
  };

  // 🔢 Add Page Numbers to PDF
  const addPageNumbers = async () => {
    if (!uploadFile) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      // Load standard PDF ignoring encryption parameters if any
      const pdf = await PDFDocument.load(fileBytes, { ignoreEncryption: true });
      const pages = pdf.getPages();
      
      pages.forEach((page, index) => {
        const { width } = page.getSize();
        const text = `Page ${index + 1} of ${pages.length}`;
        page.drawText(text, {
          x: width / 2 - 35,
          y: 25, // raised slightly for visibility
          size: 10,
          color: rgb(0.3, 0.3, 0.3), // darker gray for readability
        });
      });
      
      const numberedPdfBytes = await pdf.save();
      const blob = new Blob([numberedPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
      alert("Page numbers applied successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add page numbers to PDF. Please check if the file is secure or corrupted.");
    }
    setIsLoading(false);
  };

  // 🏷 Add Watermark to PDF
  const addWatermark = async () => {
    if (!uploadFile || !watermarkText.trim()) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      // Load PDF ignoring encryption parameters if any
      const pdf = await PDFDocument.load(fileBytes, { ignoreEncryption: true });
      const pages = pdf.getPages();
      
      const hexToRgb = (hexString: string) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const fullHex = hexString.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
        return result ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255
        } : { r: 0.83, g: 0.69, b: 0.22 };
      };
      
      const rgbColor = hexToRgb(watermarkColor);
      
      pages.forEach((page) => {
        const { width, height } = page.getSize();
        page.drawText(watermarkText, {
          x: width / 2 - 150,
          y: height / 2 - 100,
          size: 36,
          color: rgb(rgbColor.r, rgbColor.g, rgbColor.b),
          opacity: 0.25,
          rotate: degrees(45),
        });
      });
      
      const watermarkedPdfBytes = await pdf.save();
      const blob = new Blob([watermarkedPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
      alert("Watermark applied successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add watermark to PDF. Please check if the file is secure or corrupted.");
    }
    setIsLoading(false);
  };

  // 🧾 Invoice Maker Operations
  const addInvoiceItem = () => {
    setInvoiceItems([...invoiceItems, { id: Date.now(), desc: "New Line Item", qty: 1, price: 0 }]);
  };

  const removeInvoiceItem = (id: number) => {
    setInvoiceItems(invoiceItems.filter(item => item.id !== id));
  };

  const updateInvoiceItem = (id: number, key: "desc" | "qty" | "price", val: string | number) => {
    setInvoiceItems(invoiceItems.map(item => {
      if (item.id === id) {
        return { ...item, [key]: val };
      }
      return item;
    }));
  };

  const compileInvoice = async () => {
    setIsLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([595, 842]);
      const { width, height } = page.getSize();

      // Top golden bar
      page.drawRectangle({
        x: 0,
        y: height - 15,
        width: width,
        height: 15,
        color: rgb(0.83, 0.68, 0.21),
      });

      // Brand Title
      page.drawText("UTILIFY INVOICE STUDIO", {
        x: 40,
        y: height - 55,
        size: 14,
        color: rgb(0.1, 0.1, 0.1),
      });

      // Invoice metadata
      page.drawText(`Invoice No: ${invoiceNum}`, {
        x: width - 200,
        y: height - 55,
        size: 10,
        color: rgb(0.3, 0.3, 0.3),
      });
      page.drawText(`Date: ${new Date().toLocaleDateString()}`, {
        x: width - 200,
        y: height - 70,
        size: 10,
        color: rgb(0.3, 0.3, 0.3),
      });

      // Billing info block
      page.drawText("FROM SENDER:", { x: 40, y: height - 110, size: 9, color: rgb(0.5, 0.5, 0.5) });
      page.drawText(senderName, { x: 40, y: height - 125, size: 10, color: rgb(0.1, 0.1, 0.1) });
      page.drawText(senderEmail, { x: 40, y: height - 140, size: 9, color: rgb(0.4, 0.4, 0.4) });

      page.drawText("BILL TO CLIENT:", { x: 260, y: height - 110, size: 9, color: rgb(0.5, 0.5, 0.5) });
      page.drawText(clientName, { x: 260, y: height - 125, size: 10, color: rgb(0.1, 0.1, 0.1) });
      page.drawText(clientEmail, { x: 260, y: height - 140, size: 9, color: rgb(0.4, 0.4, 0.4) });

      // Table Header Row
      let yOffset = height - 190;
      page.drawRectangle({
        x: 40,
        y: yOffset - 5,
        width: width - 80,
        height: 20,
        color: rgb(0.95, 0.95, 0.95),
      });

      page.drawText("Item Description", { x: 50, y: yOffset, size: 9, color: rgb(0.2, 0.2, 0.2) });
      page.drawText("Qty", { x: 340, y: yOffset, size: 9, color: rgb(0.2, 0.2, 0.2) });
      page.drawText("Price (INR)", { x: 400, y: yOffset, size: 9, color: rgb(0.2, 0.2, 0.2) });
      page.drawText("Total (INR)", { x: 480, y: yOffset, size: 9, color: rgb(0.2, 0.2, 0.2) });

      yOffset -= 25;

      // Draw items list
      let subtotal = 0;
      invoiceItems.forEach((item) => {
        const itemTotal = item.qty * item.price;
        subtotal += itemTotal;

        page.drawText(item.desc, { x: 50, y: yOffset, size: 9, color: rgb(0.15, 0.15, 0.15) });
        page.drawText(item.qty.toString(), { x: 340, y: yOffset, size: 9, color: rgb(0.15, 0.15, 0.15) });
        page.drawText(item.price.toFixed(2), { x: 400, y: yOffset, size: 9, color: rgb(0.15, 0.15, 0.15) });
        page.drawText(itemTotal.toFixed(2), { x: 480, y: yOffset, size: 9, color: rgb(0.15, 0.15, 0.15) });

        yOffset -= 22;
      });

      // Bottom separator
      page.drawLine({
        start: { x: 40, y: yOffset + 10 },
        end: { x: width - 40, y: yOffset + 10 },
        thickness: 1,
        color: rgb(0.9, 0.9, 0.9),
      });

      // Calculation summary fields
      const taxAmount = (subtotal * invoiceTax) / 100;
      const totalAmount = subtotal + taxAmount;

      yOffset -= 15;
      page.drawText(`Subtotal:`, { x: 370, y: yOffset, size: 9, color: rgb(0.4, 0.4, 0.4) });
      page.drawText(`INR ${subtotal.toFixed(2)}`, { x: 480, y: yOffset, size: 9, color: rgb(0.15, 0.15, 0.15) });

      yOffset -= 18;
      page.drawText(`GST (${invoiceTax}%):`, { x: 370, y: yOffset, size: 9, color: rgb(0.4, 0.4, 0.4) });
      page.drawText(`INR ${taxAmount.toFixed(2)}`, { x: 480, y: yOffset, size: 9, color: rgb(0.15, 0.15, 0.15) });

      yOffset -= 22;
      page.drawRectangle({
        x: 360,
        y: yOffset - 5,
        width: width - 400,
        height: 20,
        color: rgb(0.98, 0.96, 0.92),
      });
      page.drawText(`Grand Total:`, { x: 370, y: yOffset, size: 10, color: rgb(0.83, 0.68, 0.21) });
      page.drawText(`INR ${totalAmount.toFixed(2)}`, { x: 480, y: yOffset, size: 10, color: rgb(0.1, 0.1, 0.1) });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to compile invoice PDF document.");
    }
    setIsLoading(false);
  };

  // 📉 PDF Reducer Operation
  const compressPDF = async () => {
    if (!uploadFile) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      const compressedBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([compressedBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to compress PDF file.");
    }
    setIsLoading(false);
  };

  // 🗑 Delete PDF Pages
  const deletePDFPages = async () => {
    if (!uploadFile || !deletePagesInput.trim()) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      
      const indicesToRemove = deletePagesInput.split(",")
        .map(p => parseInt(p.trim()) - 1)
        .filter(idx => idx >= 0 && idx < pdf.getPageCount())
        .sort((a, b) => b - a);
      
      if (indicesToRemove.length === 0) {
        alert("Please enter valid page numbers to delete.");
        setIsLoading(false);
        return;
      }
      
      indicesToRemove.forEach(idx => pdf.removePage(idx));
      
      const newPdfBytes = await pdf.save();
      const blob = new Blob([newPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to delete pages from PDF.");
    }
    setIsLoading(false);
  };

  // 📥 Extract PDF Pages
  const extractPDFPages = async () => {
    if (!uploadFile || !extractPagesInput.trim()) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      const newPdf = await PDFDocument.create();
      
      const pageIndices = extractPagesInput.split(",")
        .map(p => parseInt(p.trim()) - 1)
        .filter(idx => idx >= 0 && idx < pdf.getPageCount());
      
      if (pageIndices.length === 0) {
        alert("Please enter valid page numbers to extract.");
        setIsLoading(false);
        return;
      }
      
      const copiedPages = await newPdf.copyPages(pdf, pageIndices);
      copiedPages.forEach(p => newPdf.addPage(p));
      
      const newPdfBytes = await newPdf.save();
      const blob = new Blob([newPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to extract pages from PDF.");
    }
    setIsLoading(false);
  };

  // 🔄 Reorder PDF Pages
  const reorderPDFPages = async () => {
    if (!uploadFile || !reorderPagesInput.trim()) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      const newPdf = await PDFDocument.create();
      
      const pageIndices = reorderPagesInput.split(",")
        .map(p => parseInt(p.trim()) - 1)
        .filter(idx => idx >= 0 && idx < pdf.getPageCount());
      
      if (pageIndices.length === 0) {
        alert("Please enter valid page numbers for the new sequence.");
        setIsLoading(false);
        return;
      }
      
      const copiedPages = await newPdf.copyPages(pdf, pageIndices);
      copiedPages.forEach(p => newPdf.addPage(p));
      
      const newPdfBytes = await newPdf.save();
      const blob = new Blob([newPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to reorder PDF pages.");
    }
    setIsLoading(false);
  };

  // 🖊 Sign PDF
  const signPDF = async () => {
    if (!uploadFile || !signatureImageFile) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      
      const sigImgBytes = await signatureImageFile.arrayBuffer();
      let sigImg;
      if (signatureImageFile.type === "image/png") {
        sigImg = await pdf.embedPng(sigImgBytes);
      } else {
        sigImg = await pdf.embedJpg(sigImgBytes);
      }
      
      const pageIdx = Math.max(0, Math.min(signPageNum - 1, pdf.getPageCount() - 1));
      const page = pdf.getPage(pageIdx);
      const { width } = page.getSize();
      
      page.drawImage(sigImg, {
        x: width - 160,
        y: 40,
        width: 120,
        height: 60,
      });
      
      const signedBytes = await pdf.save();
      const blob = new Blob([signedBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to stamp signature on PDF.");
    }
    setIsLoading(false);
  };

  // 🖼 PDF to Images (Single page split extractor)
  const extractPageAsImage = async () => {
    if (!uploadFile) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      const pdf = await PDFDocument.load(fileBytes);
      const newPdf = await PDFDocument.create();
      const idx = Math.max(0, Math.min(targetPageImageIndex - 1, pdf.getPageCount() - 1));
      const [copiedPage] = await newPdf.copyPages(pdf, [idx]);
      newPdf.addPage(copiedPage);
      
      const singlePageBytes = await newPdf.save();
      const blob = new Blob([singlePageBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to extract target page.");
    }
    setIsLoading(false);
  };

  // 🔒 Protect PDF (Standard PDF password protection)
  const protectPDF = async () => {
    if (!uploadFile || !pdfPassword) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      // Encrypt PDF bytes natively so standard readers prompt for password
      const encryptedPdfBytes = await encryptPDF(new Uint8Array(fileBytes), pdfPassword);
      
      const blob = new Blob([encryptedPdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
      alert("PDF locked successfully! Standard readers will now prompt for the password when opening.");
    } catch (err) {
      console.error(err);
      alert("Failed to protect PDF.");
    }
    setIsLoading(false);
  };

  // 🔓 Unlock PDF (Standard PDF password removal decryption)
  const unlockPDF = async () => {
    if (!uploadFile || !unlockPassword) return;
    setIsLoading(true);
    try {
      const fileBytes = await uploadFile.arrayBuffer();
      // Decrypt standard RC4 encrypted PDF
      const decryptedBytes = await decryptPDF(new Uint8Array(fileBytes), unlockPassword);
      
      const blob = new Blob([decryptedBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
      alert("PDF decrypted and unlocked successfully!");
    } catch (err) {
      console.error(err);
      alert("Incorrect password or verification failed.");
    }
    setIsLoading(false);
  };

  // 🖼 Image to PDF Converter
  const convertImageToPDF = async () => {
    if (!uploadFile) return;
    setIsLoading(true);
    try {
      const imageBytes = await uploadFile.arrayBuffer();
      const pdfDoc = await PDFDocument.create();
      
      let embeddedImage;
      if (uploadFile.type === "image/png") {
        embeddedImage = await pdfDoc.embedPng(imageBytes);
      } else {
        embeddedImage = await pdfDoc.embedJpg(imageBytes);
      }
      
      const page = pdfDoc.addPage([embeddedImage.width, embeddedImage.height]);
      page.drawImage(embeddedImage, {
        x: 0,
        y: 0,
        width: embeddedImage.width,
        height: embeddedImage.height,
      });
      
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Failed to convert image to PDF document.");
    }
    setIsLoading(false);
  };

  // 🔄 Image Format Converter (JPEG, PNG, WebP)
  const convertImageFormat = () => {
    if (!uploadFile) return;
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        
        const dataUrl = canvas.toDataURL(targetImageFormat);
        setDownloadUrl(dataUrl);
        setIsLoading(false);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(uploadFile);
  };

  // 🖨 Photo Sheet Grid Generator
  const generatePhotoSheet = () => {
    if (!uploadFile) return;
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 1200;
        canvas.height = 1600;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const cellWidth = canvas.width / photoSheetCols;
        const cellHeight = canvas.height / photoSheetRows;
        
        for (let r = 0; r < photoSheetRows; r++) {
          for (let c = 0; c < photoSheetCols; c++) {
            const x = c * cellWidth + 10;
            const y = r * cellHeight + 10;
            const w = cellWidth - 20;
            const h = cellHeight - 20;
            ctx.drawImage(img, x, y, w, h);
            ctx.strokeStyle = "#CCCCCC";
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, w, h);
          }
        }
        
        const dataUrl = canvas.toDataURL("image/jpeg");
        setDownloadUrl(dataUrl);
        setIsLoading(false);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(uploadFile);
  };

  // 📝 PDF Text Maker
  const compileCustomPDF = async () => {
    setIsLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();
      
      const margin = 50;
      const pageWidth = 595;
      const pageHeight = 842;
      const fontSize = 10;
      const lineHeight = 14;

      let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      let currentY = pageHeight - margin - fontSize; // Start near top

      // Helper function to split a string into lines that fit the width
      const wrapText = (text: string, maxCharsPerLine: number): string[] => {
        const words = text.split(" ");
        const lines: string[] = [];
        let currentLine = "";

        for (const word of words) {
          if ((currentLine + word).length > maxCharsPerLine) {
            lines.push(currentLine.trim());
            currentLine = word + " ";
          } else {
            currentLine += word + " ";
          }
        }
        if (currentLine.trim()) {
          lines.push(currentLine.trim());
        }
        return lines;
      };

      // Split original text by raw line breaks first
      const rawLines = pdfMakerText.split("\n");
      const processedLines: string[] = [];

      // Helvetica size 10 average character width approximation yields ~82 characters per line for 495px usable width
      const maxChars = 82;

      for (const line of rawLines) {
        if (line.trim() === "") {
          processedLines.push("");
        } else {
          const wrapped = wrapText(line, maxChars);
          processedLines.push(...wrapped);
        }
      }

      // Draw lines onto pages
      for (const line of processedLines) {
        // If we reach the bottom of the page, add a new page
        if (currentY < margin + lineHeight) {
          currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
          currentY = pageHeight - margin - fontSize;
        }

        if (line !== "") {
          currentPage.drawText(line, {
            x: margin,
            y: currentY,
            size: fontSize,
            color: rgb(0.1, 0.1, 0.1),
          });
        }
        currentY -= lineHeight;
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes] as BlobPart[], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
      alert("PDF generated with margins and word-wrapped flow!");
    } catch (err) {
      console.error(err);
      alert("Failed to build PDF.");
    }
    setIsLoading(false);
  };

  // 🖊 Signature Drawer Helpers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    if ("touches" in e) {
      if (e.cancelable) e.preventDefault();
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.strokeStyle = sigColor;
    ctx.lineWidth = 3.5;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSignature = (e: React.MouseEvent<HTMLButtonElement>) => {
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    if (isSubscribed) {
      const link = document.createElement("a");
      link.download = "signature.png";
      link.href = url;
      link.click();
    } else {
      e.preventDefault();
      setAdDownloadUrl(url);
      setAdFileName("signature.png");
      setAdCountdown(5);
      setShowAdOverlay(true);
    }
  };

  // 🖼 Canvas Compressor Engine
  const compressImage = () => {
    if (!uploadFile) return;
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const compressedUrl = canvas.toDataURL("image/jpeg", imgQuality / 100);
          setDownloadUrl(compressedUrl);
        }
        setIsLoading(false);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(uploadFile);
  };

  // 📐 Canvas Resizer Engine
  const resizeImage = () => {
    if (!uploadFile) return;
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = resizeWidth;
        canvas.height = resizeHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, resizeWidth, resizeHeight);
          const resizedUrl = canvas.toDataURL(uploadFile.type);
          setDownloadUrl(resizedUrl);
        }
        setIsLoading(false);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(uploadFile);
  };

  // 📄 Canvas Scan Filter Engine
  const applyScanFilters = () => {
    if (!uploadFile) return;
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          ctx.filter = `contrast(${docContrast}%) brightness(${docBrightness}%) ${docGrayscale ? "grayscale(100%)" : ""}`;
          ctx.drawImage(img, 0, 0);
          const scannedUrl = canvas.toDataURL(uploadFile.type);
          setDownloadUrl(scannedUrl);
        }
        setIsLoading(false);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(uploadFile);
  };

  // 🔍 QR Code URL Generator
  const generateQRCodeUrl = () => {
    const encodedData = encodeURIComponent(qrText);
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedData}`;
  };

  const filteredTools = activeCategory === "all" 
    ? toolsData 
    : toolsData.filter(t => t.category === activeCategory);

  // Form Validation Logic
  const isFormValid = userName.trim() !== "" && feedbackMsg.trim() !== "";

  // Dynamic Mailto Builder
  const getMailtoString = () => {
    const subject = encodeURIComponent("Resizer Tools - User Feedback & Signal");
    const body = encodeURIComponent(
      `User Identifier: ${userName}\nRating: ${rating}/5 Stars\n\nFeedback / Message:\n${feedbackMsg}`
    );
    return `mailto:saurabhsudan051@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-gold/30 selection:text-brand-gold-light relative">
      
      {/* 🍎 1. Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 glass-panel flex items-center justify-between px-6 md:px-12 border-b border-white/5"
      >
        <div className="flex items-center gap-2 font-semibold tracking-wide text-lg">
          <Sliders className="w-5 h-5 text-brand-gold" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-muted">Resizer Tools</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted font-medium">
          <a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a>
          <a href="#studio" className="hover:text-white transition-colors">Workspace Tools ({toolsData.length})</a>
          <a href="#gallery" className="hover:text-white transition-colors">Visual Gallery</a>
          <a href="#showcase" className="hover:text-white transition-colors">Full Matrix Showcase</a>
          <a href="#about" className="hover:text-white transition-colors">Creator</a>
          <button onClick={() => setShowSubscription(true)} className="hover:text-white text-brand-gold font-semibold flex items-center gap-1 transition-colors cursor-pointer">Unlock Pro ✨</button>
        </div>
        <button onClick={() => openToolModal({ id: "app_download", title: "Download Utilify App", isAppDownload: true })} className="flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold text-xs px-4 py-2 rounded-full shadow-premium-gold hover:scale-105 transition-transform cursor-pointer">
          <Download className="w-3.5 h-3.5 stroke-[3]" /> Download App
        </button>
      </motion.nav>

      {/* 👑 2. Hero Section */}
      <section className="relative pt-36 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-gold-light mb-6">
          <ShieldCheck className="w-3.5 h-3.5" /> Fully Private & Apple Native
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-bold tracking-tight max-w-5xl leading-tight">
          Resizer Tools: <br />
          <span className="bg-clip-text text-transparent bg-gold-gradient">{toolsData.length} Free PDF & Image Web Utilities</span>
        </motion.h1>
        <p className="mt-6 text-brand-muted text-base md:text-xl max-w-2xl font-light">
          Your standalone platform for advanced graphics manipulation, secure encryption, and document automation. 
        </p>
        
        {/* HERO SMARTPHONE MOCKUP */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-16 w-72 aspect-[1242/2688] bg-brand-obsidian rounded-[44px] p-2 border-[4px] border-white/10 shadow-2xl shadow-brand-gold/10 relative">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-10" />
          <div className="w-full h-full bg-black/40 rounded-[34px] flex items-center justify-center overflow-hidden p-1 relative">
            <Image 
              src="/Home.png" 
              alt="App Dashboard Mockup" 
              width={280} 
              height={606} 
              priority 
              className="w-full h-full object-fill rounded-[24px]" 
            />
          </div>
        </motion.div>
      </section>

      {/* 📊 3. Interactive Slider Demo */}
      <section id="demo" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-brand-obsidian/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-brand-gold font-medium text-sm tracking-wider uppercase"><Sliders className="w-4 h-4" /> Dimension Engine</div>
            <div>
              <div className="flex justify-between text-sm mb-2 font-mono"><span className="text-brand-muted">Target Width:</span><span className="text-brand-gold-light font-bold">{width} px</span></div>
              <input type="range" min="400" max="2000" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer appearance-none" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 font-mono"><span className="text-brand-muted">Target Height:</span><span className="text-brand-gold-light font-bold">{height} px</span></div>
              <input type="range" min="600" max="3000" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer appearance-none" />
            </div>
          </div>
          <div className="h-64 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center p-4">
            <motion.div animate={{ width: Math.min(width / 6, 220), height: Math.min(height / 12, 220) }} className="bg-gold-gradient rounded-xl flex flex-col items-center justify-center text-black font-bold p-2 shadow-2xl">
              <Maximize2 className="w-5 h-5 mb-1 opacity-70" />
              <span className="text-[10px] font-mono tracking-tighter">{width}×{height}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⚡ 4. Workspace Directory Grid with Luxury Golden Hover Glow & Explanation */}
      <section id="studio" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16 border-t border-white/5">
        <div className="text-center mb-12">
          <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Centralized Command</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Browse Free Web PDF & Image Tools</h2>
          <p className="text-brand-muted mt-3 max-w-lg mx-auto text-sm font-light">Hover over each standalone unit to unfold full operational engine blueprints.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/[0.02] p-1.5 rounded-full border border-white/5 max-w-3xl mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id 
                  ? "bg-brand-gold text-black shadow-lg font-semibold" 
                  : "text-brand-muted hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 26 Tools Grid */}
        <div className="space-y-20">
          <div>
            <div className="mb-8 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-brand-gold" /> Web-Native Tool Studio
              </h3>
              <p className="text-xs text-brand-muted mt-1 font-light">These utility tools run 100% locally inside your browser sandbox.</p>
            </div>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]">
              <AnimatePresence mode="popLayout">
                {filteredTools.filter(t => !t.isAppOnly).map((tool) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.93 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.93 }}
                    whileHover={{ 
                      y: -6,
                      borderColor: "rgba(212, 175, 55, 0.4)",
                      boxShadow: "0 12px 30px -10px rgba(212, 175, 55, 0.25)"
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    key={tool.id}
                    onClick={() => openToolModal(tool)}
                    className="p-6 rounded-2xl bg-brand-obsidian/40 border border-white/5 transition-colors group relative overflow-hidden flex flex-col justify-between cursor-pointer"
                  >
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-brand-gold group-hover:bg-gradient-to-r group-hover:from-brand-gold group-hover:to-brand-gold-dark group-hover:text-black transition-all duration-300 shadow-glass">
                          <tool.icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-brand-gold-light transition-colors">{tool.title}</h3>
                          <p className="text-[11px] text-brand-muted font-medium tracking-wide">{tool.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-xs text-brand-muted font-light leading-relaxed border-t border-white/5 pt-3 group-hover:text-neutral-200 transition-colors">
                        {tool.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="border-t border-white/5 pt-16">
            <div className="mb-8 text-left">
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-brand-gold" /> App-Level Features (Deep OS Integration)
              </h3>
              <p className="text-xs text-brand-muted mt-1 font-light">These features require direct iOS or Android mobile hardware access (NFC radio chip, government compliance templates, or platform password streams). Download our mobile app to run these features.</p>
            </div>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredTools.filter(t => t.isAppOnly).map((tool) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.93 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.93 }}
                    whileHover={{ 
                      y: -6,
                      borderColor: "rgba(212, 175, 55, 0.2)",
                      boxShadow: "0 12px 30px -10px rgba(212, 175, 55, 0.15)"
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    key={tool.id}
                    onClick={() => openToolModal(tool)}
                    className="p-6 rounded-2xl bg-brand-obsidian/20 border border-white/5 opacity-75 hover:opacity-100 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-pointer"
                  >
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[8px] font-mono uppercase tracking-wider text-brand-gold font-bold">App Only</div>
                    
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-neutral-400 group-hover:text-brand-gold transition-colors shadow-glass">
                          <tool.icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-neutral-300 tracking-tight group-hover:text-white transition-colors">{tool.title}</h3>
                          <p className="text-[11px] text-brand-muted font-medium tracking-wide">{tool.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-xs text-brand-muted font-light leading-relaxed border-t border-white/5 pt-3 group-hover:text-neutral-200 transition-colors">
                        {tool.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🎬 5. Visual Media Gallery */}
      <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Production Design</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Official App Store Core Walkthroughs</h2>
          <p className="text-brand-muted text-xs md:text-sm mt-2 font-light">Swipe horizontally to view full-frame 1242 × 2688 px presentation layouts.</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 scrollbar-none snap-x snap-mandatory scroll-smooth">
          {realScreenshots.map((screenshot, i) => (
            <div key={i} className="w-[280px] sm:w-[320px] shrink-0 bg-brand-obsidian/30 border border-white/5 rounded-3xl p-4 flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300 shadow-xl snap-center">
              
              <div className="w-full aspect-[1242/2688] overflow-hidden rounded-2xl relative bg-black/60 flex items-center justify-center border border-white/5 p-1">
                <Image 
                  src={screenshot.src} 
                  alt={screenshot.headline} 
                  width={320} 
                  height={693} 
                  className="w-full h-full object-fill rounded-xl group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>

              <div className="w-full text-left mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded-full">Core 0{i+1}</span>
                  <span className="text-[10px] text-brand-muted font-mono uppercase tracking-widest">1242 × 2688 px</span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-brand-gold-light transition-colors">{screenshot.headline}</h4>
                <p className="text-xs text-brand-muted font-light mt-0.5">{screenshot.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📱 6. Ultimate 26-Tool Visual Matrix Showcase */}
      <section id="showcase" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16 border-t border-white/5">
        <div className="text-center mb-12">
          <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Full Viewport Matrix</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Complete {toolsData.length}-Tool Interface Tour</h2>
          <p className="text-brand-muted mt-2 text-sm font-light">Every single localized runtime view mapped side-by-side.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {toolsData.map((tool, idx) => {
            const imageSrc = tool.src === "/placeholder.png" 
              ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
              : tool.src;

            return (
              <div key={idx} onClick={() => openToolModal(tool)} className="bg-brand-obsidian/20 border border-white/5 rounded-2xl p-2.5 flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300 shadow-md group cursor-pointer">
                
                <div className="w-full aspect-[1242/2688] overflow-hidden rounded-xl relative bg-neutral-900 flex items-center justify-center border border-white/5 p-0.5">
                  <Image 
                    src={imageSrc} 
                    alt={tool.title} 
                    width={150} 
                    height={325} 
                    className={`w-full h-full object-fill rounded-lg transition-transform duration-300 ${tool.src === "/placeholder.png" ? "opacity-30 blur-[1px] group-hover:scale-105" : "group-hover:scale-[1.02]"}`} 
                  />
                  {tool.src === "/placeholder.png" && (
                    <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-black/40">
                      <tool.icon className="w-6 h-6 text-brand-gold/40" />
                    </div>
                  )}
                </div>
                <div className="mt-3 px-1 text-left">
                  <p className="text-[11px] font-semibold text-white tracking-tight truncate group-hover:text-brand-gold-light transition-colors">{tool.title}</p>
                  <p className="text-[9px] text-brand-muted font-mono uppercase tracking-tighter mt-0.5">
                    {tool.src === "/placeholder.png" ? "Blueprint Mode" : "Live Interface"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 💼 7. Premium LinkedIn-Style Profile & Live Feedback Console (with Orange Shirt Alignment Alignment) */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-brand-black via-brand-obsidian/20 to-brand-black border-t border-white/5 scroll-mt-16">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center mb-12">
            <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Connect & Innovate</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Creator Terminal & User Signals</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 👤 Left Side: Your Custom LinkedIn Profile Image Card Card */}
            <div className="lg:col-span-7 bg-brand-obsidian/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group">
              <div className="w-full h-36 bg-neutral-900 relative overflow-hidden border-b border-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" 
                  alt="MacBook Pro Workspace Aesthetic" 
                  width={800} 
                  height={300} 
                  className="w-full h-full object-cover opacity-25 object-center group-hover:scale-[1.01] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              </div>

              <div className="px-6 pb-6 pt-0 relative flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-14 text-center sm:text-left">
                <div className="relative shrink-0 z-10">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-brand-gold via-brand-gold-dark to-transparent rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-500"></div>
                  
                  {/* PERFECTLY ADJUSTED CO-ORDINATES FOR YOUR PIC PIC */}
                  <div className="relative w-28 h-28 rounded-full border-4 border-brand-black bg-[#1a1a1a] overflow-hidden shadow-xl flex items-center justify-center">
                    <Image 
                      src="/saurabh-profile1.PNG" 
                      alt="Saurabh Kumar Sharma" 
                      width={112} 
                      height={112} 
                      className="w-full h-full object-cover object-top scale-125 origin-top"
                    />
                  </div>
                </div>

                <div className="flex-1 sm:mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[9px] font-mono tracking-widest text-brand-gold uppercase mb-1.5">
                    iOS Engineer & Digital Creator
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Saurabh Kumar Sharma</h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    Specializing in native iOS app deployment and automated asset distribution matrices. Crafting seamless pipelines for global product compliance.
                  </p>
                </div>
              </div>

              {/* Verified Contact Quick Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4 border-t border-white/5 bg-black/20 text-left">
                <a href="mailto:saurabhsudan051@gmail.com" className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all">
                  <span className="p-1.5 bg-brand-gold/10 rounded-md text-brand-gold"><Briefcase className="w-3.5 h-3.5" /></span>
                  <div className="overflow-hidden"><p className="text-[8px] text-brand-muted font-mono uppercase tracking-wider leading-none mb-0.5">Email</p><p className="text-xs font-medium text-white truncate">saurabhsudan051@gmail.com</p></div>
                </a>
                <a href="https://linkedin.com/in/pandit-saurabh-kumar-sharma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all">
                  <span className="p-1.5 bg-brand-gold/10 rounded-md text-brand-gold"><Cpu className="w-3.5 h-3.5" /></span>
                  <div className="overflow-hidden"><p className="text-[8px] text-brand-muted font-mono uppercase tracking-wider leading-none mb-0.5">LinkedIn</p><p className="text-xs font-medium text-white truncate">Connect Live</p></div>
                </a>
                <a href="https://youtube.com/@ComedyWithTau-Saurabh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all">
                  <span className="p-1.5 bg-brand-gold/10 rounded-md text-brand-gold"><Play className="w-3.5 h-3.5" /></span>
                  <div className="overflow-hidden"><p className="text-[8px] text-brand-muted font-mono uppercase tracking-wider leading-none mb-0.5">YouTube</p><p className="text-xs font-medium text-white truncate">ComedyWithTau-Saurabh</p></div>
                </a>
              </div>
            </div>

            {/* ✉️ Right Side: Live Feedback Form */}
            <div className="lg:col-span-5 bg-brand-obsidian/40 border border-white/5 rounded-3xl p-6 shadow-2xl relative">
              <h4 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-brand-gold" /> System Telemetry & Feedback
              </h4>
              <p className="text-xs text-brand-muted font-light mb-4">Submit tool reviews, engine logs, or custom feature inquiries instantly.</p>
              
              <div className="space-y-3.5 text-left">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1">User Identifier</label>
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-gold/40 transition-colors" />
                </div>
                
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1">Engine Utility Rating</label>
                  <div className="flex gap-1.5 text-brand-gold">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button type="button" key={star} onClick={() => setRating(star)} className={`hover:scale-110 transition-transform cursor-pointer text-base ${rating >= star ? "opacity-100" : "opacity-30"}`}>★</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1">Payload Message / Feedback</label>
                  <textarea rows={3} value={feedbackMsg} onChange={(e) => setFeedbackMsg(e.target.value)} placeholder="Type your message here..." className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-gold/40 transition-colors resize-none" />
                </div>

                {/* Validation Lock Trigger link */}
                <a 
                  href={isFormValid ? getMailtoString() : "#"}
                  onClick={(e) => !isFormValid && e.preventDefault()}
                  className={`block w-full text-center text-black font-bold text-xs py-2.5 rounded-xl transition-all duration-300 ${
                    isFormValid 
                      ? "bg-gradient-to-r from-brand-gold to-brand-gold-dark shadow-premium-gold hover:scale-[1.02] cursor-pointer" 
                      : "bg-neutral-800 text-neutral-500 opacity-40 cursor-not-allowed pointer-events-none"
                  }`}
                >
                  Transmit Signal Securely
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📺 Premium App-like Ad Banner */}
      {showAd && !isSubscribed && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-xl bg-brand-obsidian/90 border border-brand-gold/20 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-4 backdrop-blur-md animate-gold-glow"
        >
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold font-mono tracking-wider bg-brand-gold/20 text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded uppercase">AD</span>
            <div className="text-left">
              <h5 className="text-xs font-bold text-white">Remove ads & unlock premium tools natively</h5>
              <p className="text-[10px] text-brand-muted">Utilify Pro starting from only $1.99/mo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowSubscription(true)} 
              className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black text-[10px] font-bold px-3 py-1.5 rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
              Go Ad-Free
            </button>
            <button onClick={() => setShowAd(false)} className="text-brand-muted hover:text-white p-1 cursor-pointer">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}

      {/* 👑 Subscription Modal */}
      <AnimatePresence>
        {showSubscription && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-obsidian/95 border border-brand-gold/30 rounded-3xl p-6 md:p-8 max-w-lg w-full relative overflow-hidden shadow-2xl text-center"
            >
              {paymentProgress && (
                <div className="absolute inset-0 bg-brand-obsidian/98 z-50 flex flex-col items-center justify-center p-6 space-y-6">
                  <div className="w-12 h-12 rounded-full border-4 border-brand-gold/20 border-t-brand-gold animate-spin" />
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-white tracking-wide">Razorpay Secure Transaction</h4>
                    <p className="text-xs text-brand-gold-light font-mono animate-pulse">{paymentProgress}</p>
                  </div>
                </div>
              )}
              {/* Premium Background Blurs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-gold/10 rounded-full blur-[60px] pointer-events-none" />
              
              <button 
                onClick={() => setShowSubscription(false)} 
                className="absolute top-4 right-4 text-brand-muted hover:text-white p-1 rounded-full bg-white/5 border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/35 text-xs text-brand-gold-light mb-4 tracking-wide font-medium">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> UTILIFY PREMIUM MEMBERSHIP
              </div>

              <h3 className="text-3xl font-extrabold tracking-tight text-white mb-2">Unlock Ultimate Productivity</h3>
              <p className="text-sm text-brand-muted font-light mb-6 max-w-md mx-auto">
                Gain access to unlimited file masteries, high-speed Canvas engines, local offline processing, and 100% ad-free layouts.
              </p>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { id: "monthly", title: "Monthly Pro", price: "₹199", desc: "Standard Billing", isPopular: false },
                  { id: "yearly", title: "Yearly Pro", price: "₹999", desc: "Best Deal (Save 60%)", isPopular: true }
                ].map((tier) => (
                  <div 
                    key={tier.id} 
                    onClick={() => setSelectedPlan(tier.id as "monthly" | "yearly")}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedPlan === tier.id 
                        ? "bg-brand-gold/10 border-brand-gold shadow-premium-gold scale-[1.02]" 
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:scale-[1.01]"
                    }`}
                  >
                    {tier.isPopular && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        POPULAR
                      </span>
                    )}
                    <h5 className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1.5">{tier.title}</h5>
                    <p className="text-3xl font-black text-white mb-1">{tier.price}</p>
                    <p className="text-[10px] text-brand-muted font-light">{tier.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bullet Features */}
              <div className="space-y-2 mb-8 text-left max-w-xs mx-auto">
                {[
                  "Complete 100% Ad-Free Experience",
                  "Unlimited Resizes & Compressions",
                  "Cryptographic Signatures & PDF Lock",
                  "Full NFC Chip Command Utilities"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 stroke-[3]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {isSubscribed ? (
                <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-3 text-xs text-brand-gold-light font-semibold mb-2 animate-pulse">
                  ✓ Premium Features Unlocked Successfully! Thank you.
                </div>
              ) : (
                <div className="space-y-3">
                  <button 
                    onClick={() => handleRazorpaySubscription(selectedPlan)}
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-3 rounded-xl shadow-premium-gold hover:scale-[1.01] transition-transform cursor-pointer"
                  >
                    Pay with Razorpay & Activate Pro
                  </button>
                  <p className="text-[10px] text-brand-gold/60 font-mono">
                    💡 Test Mode: No real money will be charged. Choose Netbanking, select any bank (like SBI), and click Success to activate for free.
                  </p>
                </div>
              )}
              <p className="text-[10px] text-brand-muted mt-3">Cancel anytime. Terms of Service & Privacy Policy apply.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📺 Full-Screen Interstitial Ad Modal */}
      <AnimatePresence>
        {showAdOverlay && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-[#080808]/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="max-w-md w-full bg-[#121212] border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col items-center space-y-6 text-center"
            >
              {/* Ad badge */}
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] bg-brand-gold/15 text-brand-gold font-bold px-2 py-0.5 rounded-full font-mono uppercase tracking-wider animate-pulse">
                  Sponsored Ad
                </span>
                <span className="text-[10px] text-brand-muted font-mono">
                  {adCountdown > 0 ? `Skip in ${adCountdown}s` : "Ad Finished"}
                </span>
              </div>

              {/* Main Ad Content (Premium App Promotion) */}
              <div className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-brand-gold to-brand-gold-dark rounded-2xl shadow-premium-gold mx-auto flex items-center justify-center text-black font-extrabold text-base">
                  UT
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">Download Utilify Mobile Companion App</h4>
                  <p className="text-[10px] text-brand-muted leading-relaxed font-light">
                    Access premium camera layouts, real-time hardware NFC diagnostics reading, and zero-latency local QR matrix scan sensors directly.
                  </p>
                </div>
                {/* Visual mockup / screenshot */}
                <div className="h-28 w-full rounded-xl overflow-hidden relative border border-white/10 bg-black/40">
                  <Image 
                    src="/utilify-dashboard.jpg" 
                    alt="Utilify Ad Showcase" 
                    fill 
                    className="object-cover opacity-75 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>
              </div>

              {/* Action buttons */}
              <div className="w-full space-y-3">
                {adCountdown > 0 ? (
                  <button 
                    disabled 
                    className="w-full bg-white/5 border border-white/10 text-neutral-500 font-bold text-xs py-3 rounded-xl cursor-not-allowed"
                  >
                    Processing download ({adCountdown}s remaining)
                  </button>
                ) : (
                  <div className="flex gap-3 w-full">
                    <button 
                      onClick={() => {
                        setShowAdOverlay(false);
                        if (adDownloadUrl) {
                          const a = document.createElement("a");
                          a.href = adDownloadUrl;
                          a.download = adFileName;
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                        }
                      }}
                      className="flex-1 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-3 rounded-xl shadow-premium-gold hover:scale-[1.01] transition-transform cursor-pointer"
                    >
                      Download Now
                    </button>
                    <button 
                      onClick={() => setShowAdOverlay(false)}
                      className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs py-3 rounded-xl cursor-pointer"
                    >
                      Close Ad
                    </button>
                  </div>
                )}

                <button 
                  onClick={() => {
                    setShowAdOverlay(false);
                    setShowSubscription(true);
                  }}
                  className="text-[10px] text-brand-gold-light hover:underline font-semibold block mx-auto cursor-pointer"
                >
                  Get Ad-Free Premium Access
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🛠 Interactive Workspace & Download Redirection Modal */}
      <AnimatePresence>
        {activeTool && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.93, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 20 }}
              className="bg-brand-obsidian/95 border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-lg">
                    {activeTool.icon ? <activeTool.icon className="w-5 h-5" /> : <Sliders className="w-5 h-5" />}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                      {activeTool.title}
                      {!isSubscribed && (
                        <span className="text-[8px] font-mono bg-brand-gold/20 text-brand-gold px-1.5 py-0.5 rounded border border-brand-gold/25 uppercase font-bold tracking-wider">PRO</span>
                      )}
                    </h3>
                    <p className="text-xs text-brand-muted">{activeTool.subtitle || "Utilify Standalone Workspace"}</p>
                  </div>
                </div>
                <button 
                  onClick={closeToolModal} 
                  className="text-brand-muted hover:text-white p-1.5 rounded-full bg-white/5 border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content Panel (Scrollable) */}
              <div className="flex-1 overflow-y-auto pr-1 scrollbar-none space-y-6">
                
                {/* 📳 CASE A: App Download / App-Level Redirect prompt */}
                {(activeTool.isAppDownload || !["img_comp", "img_res", "doc_scan", "sig_cr", "qr_gen", "mrg_pdf", "spl_pdf", "rot_pdf", "num_pdf", "wtrmk_pdf", "inv_mk", "red_pdf", "del_pdf", "ext_pdf", "ord_pdf", "sgn_pdf", "pdf_imgs", "prt_pdf", "unl_pdf", "img_pdf", "img_conv", "prnt_sheet", "mk_pdf"].includes(activeTool.id)) ? (
                  <div className="text-center py-6 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center mx-auto text-brand-gold animate-pulse">
                      {activeTool.isAppDownload ? <Download className="w-8 h-8" /> : <Smartphone className="w-8 h-8" />}
                    </div>
                    <div className="space-y-2 max-w-md mx-auto">
                      <h4 className="text-base font-bold text-white">NFC & Hardware Integration Required</h4>
                      <p className="text-xs text-brand-muted font-light leading-relaxed">
                        Features like NFC radio reading, passport camera validation, and multi-file PDF merges require deep mobile hardware capabilities not supported natively in this browser sandbox.
                      </p>
                    </div>

                    {/* Appstore badging */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                      <a 
                        href="https://apps.apple.com/in/app/resizer-tools/id6785073828" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 hover:border-brand-gold/40 hover:bg-white/[0.08] transition-all duration-300 w-full sm:w-48 text-left"
                      >
                        <Smartphone className="w-6 h-6 text-white" />
                        <div>
                          <p className="text-[9px] text-brand-muted font-mono uppercase leading-none">Download for</p>
                          <p className="text-xs font-bold text-white">iOS App Store</p>
                        </div>
                      </a>
                      {/*
                      <a 
                        href="https://play.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 hover:border-brand-gold/40 hover:bg-white/[0.08] transition-all duration-300 w-full sm:w-48 text-left"
                      >
                        <Cpu className="w-6 h-6 text-white" />
                        <div>
                          <p className="text-[9px] text-brand-muted font-mono uppercase leading-none">Download for</p>
                          <p className="text-xs font-bold text-white">Android Play Store</p>
                        </div>
                      </a>
                      */}
                    </div>

                    <div className="pt-4 border-t border-white/5 max-w-sm mx-auto text-[10px] text-brand-muted">
                      No data is uploaded or stored. Download our native app for an optimized mobile-first workflow.
                    </div>
                  </div>
                ) : (
                  
                  // 💻 CASE B: Native In-Browser Workspaces
                  <div className="space-y-6">
                    
                    {/* 1. IMAGE COMPRESSOR */}
                    {activeTool.id === "img_comp" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload Image file</label>
                          <input type="file" accept="image/*" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {previewUrl && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 flex flex-col items-center">
                              <span className="text-[10px] font-mono text-brand-muted mb-2">Original Preview</span>
                              <Image src={previewUrl} alt="Original Preview" width={200} height={200} className="max-h-48 w-auto object-contain rounded-lg border border-white/5" />
                              <span className="text-[10px] font-mono text-brand-muted mt-2">Size: {(uploadFile!.size / 1024).toFixed(1)} KB</span>
                            </div>
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-between">
                              <span className="text-[10px] font-mono text-brand-muted mb-2">Compression Control</span>
                              <div className="w-full px-2 space-y-4">
                                <div>
                                  <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-brand-muted">Quality Parameter:</span>
                                    <span className="text-brand-gold font-bold">{imgQuality}%</span>
                                  </div>
                                  <input type="range" min="10" max="100" value={imgQuality} onChange={(e) => setImgQuality(Number(e.target.value))} className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer appearance-none" />
                                </div>
                                <button onClick={compressImage} className="w-full bg-white/5 border border-white/10 hover:border-brand-gold/40 text-xs font-bold py-2 rounded-xl text-white cursor-pointer">
                                  {isLoading ? "Compressing..." : "Process Compression"}
                                </button>
                              </div>
                              {downloadUrl && (
                                <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `compressed_${uploadFile!.name}`)} download={`compressed_${uploadFile!.name}`} className="w-full mt-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2 rounded-xl text-center shadow-premium-gold block cursor-pointer">
                                  Download Optimized JPEG
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 2. IMAGE RESIZER */}
                    {activeTool.id === "img_res" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload Image file</label>
                          <input type="file" accept="image/*" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {previewUrl && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 flex flex-col items-center">
                              <span className="text-[10px] font-mono text-brand-muted mb-2">Source Asset</span>
                              <Image src={previewUrl} alt="Source" width={200} height={200} className="max-h-48 w-auto object-contain rounded-lg border border-white/5" />
                              <span className="text-[10px] font-mono text-brand-muted mt-2">Original Res: {resizeWidth}x{resizeHeight}</span>
                            </div>
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 flex flex-col justify-between space-y-4">
                              <span className="text-[10px] font-mono text-brand-muted">Target Coordinates</span>
                              <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                  <div>
                                    <label className="block text-brand-muted mb-1">Width (px)</label>
                                    <input type="number" value={resizeWidth} onChange={(e) => setResizeWidth(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-brand-gold/40 text-center" />
                                  </div>
                                  <div>
                                    <label className="block text-brand-muted mb-1">Height (px)</label>
                                    <input type="number" value={resizeHeight} onChange={(e) => setResizeHeight(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-brand-gold/40 text-center" />
                                  </div>
                                </div>
                                <button onClick={resizeImage} className="w-full bg-white/5 border border-white/10 hover:border-brand-gold/40 text-xs font-bold py-2 rounded-xl text-white cursor-pointer">
                                  {isLoading ? "Resizing..." : "Execute Resize"}
                                </button>
                              </div>
                              {downloadUrl && (
                                <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `resized_${uploadFile!.name}`)} download={`resized_${uploadFile!.name}`} className="w-full mt-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2 rounded-xl text-center shadow-premium-gold block cursor-pointer">
                                  Download Resized File
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 3. DOCUMENT SCANNER */}
                    {activeTool.id === "doc_scan" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload Skewed document snapshot</label>
                          <input type="file" accept="image/*" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {previewUrl && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 flex flex-col items-center">
                              <span className="text-[10px] font-mono text-brand-muted mb-2">Source Document</span>
                              <Image src={previewUrl} alt="Source Doc" width={200} height={200} className="max-h-48 w-auto object-contain rounded-lg border border-white/5" />
                            </div>
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 flex flex-col justify-between space-y-4">
                              <span className="text-[10px] font-mono text-brand-muted">Scanner Calibration</span>
                              <div className="space-y-3.5 text-xs font-mono">
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-brand-muted">Contrast Boost:</span>
                                    <span className="text-brand-gold font-bold">{docContrast}%</span>
                                  </div>
                                  <input type="range" min="80" max="250" value={docContrast} onChange={(e) => setDocContrast(Number(e.target.value))} className="w-full accent-brand-gold bg-white/10 rounded-lg h-1" />
                                </div>
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-brand-muted">Brightness:</span>
                                    <span className="text-brand-gold font-bold">{docBrightness}%</span>
                                  </div>
                                  <input type="range" min="50" max="150" value={docBrightness} onChange={(e) => setDocBrightness(Number(e.target.value))} className="w-full accent-brand-gold bg-white/10 rounded-lg h-1" />
                                </div>
                                <div className="flex items-center justify-between py-1 bg-white/[0.02] border border-white/5 px-2.5 rounded-lg">
                                  <span className="text-brand-muted">Grayscale / Black & White</span>
                                  <input type="checkbox" checked={docGrayscale} onChange={(e) => setDocGrayscale(e.target.checked)} className="accent-brand-gold cursor-pointer" />
                                </div>
                                <button onClick={applyScanFilters} className="w-full bg-white/5 border border-white/10 hover:border-brand-gold/40 text-xs font-bold py-2 rounded-xl text-white cursor-pointer">
                                  {isLoading ? "Scanning..." : "Apply Scan Filters"}
                                </button>
                              </div>
                              {downloadUrl && (
                                <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `scanned_${uploadFile!.name}`)} download={`scanned_${uploadFile!.name}`} className="w-full mt-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2 rounded-xl text-center shadow-premium-gold block cursor-pointer">
                                  Download Scanned PDF/JPG
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 4. SIGNATURE CREATOR */}
                    {activeTool.id === "sig_cr" && (
                      <div className="space-y-4 text-center">
                        <p className="text-xs text-brand-muted text-left font-light">Draw your signature with your mouse or finger inside the interactive canvas area below.</p>
                        
                        {/* Interactive Ink Color Selection */}
                        <div className="flex items-center gap-3 justify-center mb-1">
                          <span className="text-xs text-brand-muted font-mono">Select Ink Color:</span>
                          {[
                            { hex: "#FFFFFF", label: "White" },
                            { hex: "#000000", label: "Black" },
                            { hex: "#D4AF37", label: "Gold" },
                            { hex: "#38BDF8", label: "Blue" },
                            { hex: "#F87171", label: "Red" },
                            { hex: "#4ADE80", label: "Green" }
                          ].map((c) => (
                            <button 
                              key={c.hex}
                              onClick={() => setSigColor(c.hex)}
                              style={{ backgroundColor: c.hex }}
                              className={`w-6 h-6 rounded-full border cursor-pointer transition-transform hover:scale-110 ${
                                sigColor === c.hex ? "border-brand-gold ring-2 ring-brand-gold/40 scale-105" : "border-white/20"
                              }`}
                              title={c.label}
                            />
                          ))}
                        </div>

                        <div className="bg-black/60 border border-white/10 rounded-2xl overflow-hidden p-2">
                          <canvas 
                            ref={sigCanvasRef}
                            width={500}
                            height={250}
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={stopDrawing}
                            onMouseLeave={stopDrawing}
                            onTouchStart={startDrawing}
                            onTouchMove={draw}
                            onTouchEnd={stopDrawing}
                            className="w-full bg-[#111111] rounded-xl border border-white/5 cursor-crosshair h-64 touch-none"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={clearSignature} className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 text-xs font-bold py-2.5 rounded-xl text-white cursor-pointer">
                            Clear Canvas
                          </button>
                          <button onClick={downloadSignature} className="flex-1 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl shadow-premium-gold cursor-pointer">
                            Download Signature PNG
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 5. QR GENERATOR */}
                    {activeTool.id === "qr_gen" && (
                      <div className="space-y-4 text-left">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">Input URL or Text payload</label>
                          <input 
                            type="text" 
                            value={qrText} 
                            onChange={(e) => setQrText(e.target.value)} 
                            placeholder="Type URL here..." 
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-gold/40 transition-colors" 
                          />
                        </div>

                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center space-y-4">
                          <span className="text-[10px] font-mono text-brand-muted">Dynamic Vector Code Matrix</span>
                          <div className="p-3 bg-white rounded-xl">
                            <Image src={generateQRCodeUrl()} alt="Generated QR Code" width={160} height={160} className="w-40 h-40 object-contain" />
                          </div>
                          <a href={generateQRCodeUrl()} target="_blank" rel="noopener noreferrer" download="qrcode.png" className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs px-5 py-2 rounded-xl shadow-premium-gold cursor-pointer">
                            Open & Save QR Code
                          </a>
                        </div>
                      </div>
                    )}

                    {/* 6. MERGE PDF */}
                    {activeTool.id === "mrg_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload multiple PDF files</label>
                          <input type="file" multiple accept="application/pdf" onChange={handleMultipleFilesChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {uploadFiles.length > 0 && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <span className="text-[10px] font-mono text-brand-muted">Uploaded Files Queue ({uploadFiles.length})</span>
                            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                              {uploadFiles.map((file, idx) => (
                                <div key={idx} className="flex justify-between items-center text-xs font-mono py-1 border-b border-white/5 text-neutral-300">
                                  <span className="truncate max-w-[200px]">{file.name}</span>
                                  <span>{(file.size / 1024).toFixed(1)} KB</span>
                                </div>
                              ))}
                            </div>
                            <button onClick={mergePDFs} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Merging..." : `Merge ${uploadFiles.length} PDFs`}
                            </button>
                          </div>
                        )}
                        
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, "merged_document.pdf")} download="merged_document.pdf" className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Merged PDF Document
                          </a>
                        )}
                      </div>
                    )}

                    {/* 7. SPLIT PDF */}
                    {activeTool.id === "spl_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div className="flex justify-between items-center text-xs font-mono">
                              <span className="text-brand-muted">Total Page Count:</span>
                              <span className="text-white font-bold">{pdfPageCount} pages</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[10px] font-mono text-brand-muted mb-1">Start Page</label>
                                <input type="number" min={1} max={pdfPageCount || 1} value={splitStart} onChange={(e) => setSplitStart(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white text-center focus:outline-none focus:border-brand-gold/40" />
                              </div>
                              <div>
                                <label className="block text-[10px] font-mono text-brand-muted mb-1">End Page</label>
                                <input type="number" min={1} max={pdfPageCount || 1} value={splitEnd} onChange={(e) => setSplitEnd(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white text-center focus:outline-none focus:border-brand-gold/40" />
                              </div>
                            </div>

                            <button onClick={splitPDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Extracting..." : `Extract Pages ${splitStart} - ${splitEnd}`}
                            </button>
                          </div>
                        )}

                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `split_${uploadFile!.name}`)} download={`split_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Extracted PDF Pages
                          </a>
                        )}
                      </div>
                    )}

                    {/* 8. ROTATE PDF */}
                    {activeTool.id === "rot_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1.5">Select Rotation Angle</label>
                              <select 
                                value={pdfRotation} 
                                onChange={(e) => setPdfRotation(Number(e.target.value))}
                                className="w-full bg-neutral-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40 cursor-pointer"
                              >
                                <option value={90}>90° Clockwise</option>
                                <option value={180}>180° Flip</option>
                                <option value={270}>270° Counter-Clockwise</option>
                              </select>
                            </div>

                            <button onClick={rotatePDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Rotating..." : `Apply Rotation Matrix`}
                            </button>
                          </div>
                        )}

                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `rotated_${uploadFile!.name}`)} download={`rotated_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Rotated PDF Document
                          </a>
                        )}
                      </div>
                    )}

                    {/* 9. PAGE NUMBERS */}
                    {activeTool.id === "num_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <p className="text-xs text-brand-muted font-light leading-relaxed">
                              This will stamp standard aligned page indexes at the bottom center margin on all pages of the document.
                            </p>
                            <button onClick={addPageNumbers} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Stamping..." : `Stamp Page Numbers`}
                            </button>
                          </div>
                        )}

                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `numbered_${uploadFile!.name}`)} download={`numbered_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Numbered PDF Document
                          </a>
                        )}
                      </div>
                    )}

                    {/* 10. PDF WATERMARK */}
                    {activeTool.id === "wtrmk_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>

                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1.5">Watermark Text</label>
                              <input 
                                type="text" 
                                value={watermarkText} 
                                onChange={(e) => setWatermarkText(e.target.value)} 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40 mb-3" 
                              />
                            </div>
                            
                            {/* Interactive Color Selection */}
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-[10px] text-brand-muted font-mono uppercase tracking-wide">Watermark Color:</span>
                              {[
                                { hex: "#D4AF37", label: "Gold" },
                                { hex: "#F87171", label: "Red" },
                                { hex: "#38BDF8", label: "Blue" },
                                { hex: "#4ADE80", label: "Green" },
                                { hex: "#4B5563", label: "Gray" }
                              ].map((c) => (
                                <button 
                                  key={c.hex}
                                  type="button"
                                  onClick={() => setWatermarkColor(c.hex)}
                                  style={{ backgroundColor: c.hex }}
                                  className={`w-5 h-5 rounded-full border cursor-pointer transition-transform hover:scale-110 ${
                                    watermarkColor === c.hex ? "border-brand-gold ring-2 ring-brand-gold/40 scale-105" : "border-white/20"
                                  }`}
                                  title={c.label}
                                />
                              ))}
                            </div>

                            <button onClick={addWatermark} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Injecting Watermark..." : `Stamp Watermark`}
                            </button>
                          </div>
                        )}

                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `watermarked_${uploadFile!.name}`)} download={`watermarked_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Watermarked PDF
                          </a>
                        )}
                      </div>
                    )}
                    {/* 11. INVOICE MAKER */}
                    {activeTool.id === "inv_mk" && (
                      <div className="space-y-4 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Sender Details */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-gold">Sender Info</h4>
                            <div>
                              <label className="block text-[10px] text-brand-muted mb-1">Company / Sender Name</label>
                              <input type="text" value={senderName} onChange={(e) => setSenderName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <div>
                              <label className="block text-[10px] text-brand-muted mb-1">Sender Email</label>
                              <input type="text" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                          </div>

                          {/* Client Details */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-gold">Client Info</h4>
                            <div>
                              <label className="block text-[10px] text-brand-muted mb-1">Client Name</label>
                              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <div>
                              <label className="block text-[10px] text-brand-muted mb-1">Client Email</label>
                              <input type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                          </div>
                        </div>

                        {/* Invoice Metadata */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] text-brand-muted mb-1">Invoice Number</label>
                            <input type="text" value={invoiceNum} onChange={(e) => setInvoiceNum(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                          </div>
                          <div>
                            <label className="block text-[10px] text-brand-muted mb-1">GST / Tax Rate (%)</label>
                            <input type="number" value={invoiceTax} onChange={(e) => setInvoiceTax(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                          </div>
                        </div>

                        {/* Line Items Editor */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-gold">Line Items</h4>
                            <button onClick={addInvoiceItem} className="text-[10px] font-bold text-brand-gold hover:underline cursor-pointer">
                              + Add Item
                            </button>
                          </div>

                          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                            {invoiceItems.map((item) => (
                              <div key={item.id} className="grid grid-cols-12 gap-2 items-center bg-black/20 p-2 rounded-xl border border-white/5">
                                <div className="col-span-6">
                                  <input type="text" value={item.desc} onChange={(e) => updateInvoiceItem(item.id, "desc", e.target.value)} placeholder="Item Description" className="w-full bg-black/40 border border-white/10 rounded-lg px-2 py-1 text-xs text-white focus:outline-none" />
                                </div>
                                <div className="col-span-2">
                                  <input type="number" value={item.qty} onChange={(e) => updateInvoiceItem(item.id, "qty", Number(e.target.value))} placeholder="Qty" className="w-full bg-black/40 border border-white/10 rounded-lg px-2 py-1 text-xs text-white text-center focus:outline-none" />
                                </div>
                                <div className="col-span-3">
                                  <input type="number" value={item.price} onChange={(e) => updateInvoiceItem(item.id, "price", Number(e.target.value))} placeholder="Price" className="w-full bg-black/40 border border-white/10 rounded-lg px-2 py-1 text-xs text-white text-center focus:outline-none" />
                                </div>
                                <div className="col-span-1 text-right">
                                  <button onClick={() => removeInvoiceItem(item.id)} className="text-red-400 hover:text-red-500 cursor-pointer text-xs font-bold font-mono">×</button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Totals Preview & compile CTA */}
                        <div className="bg-black/40 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                          <div className="text-left font-mono">
                            <span className="text-[10px] text-brand-muted block uppercase">Estimated Total</span>
                            <span className="text-sm font-bold text-white">
                              INR {(invoiceItems.reduce((acc, curr) => acc + (curr.qty * curr.price), 0) * (1 + invoiceTax/100)).toFixed(2)}
                            </span>
                          </div>
                          <button onClick={compileInvoice} className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-premium-gold cursor-pointer">
                            {isLoading ? "Generating Invoice..." : "Compile Invoice PDF"}
                          </button>
                        </div>

                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `${invoiceNum || "invoice"}.pdf`)} download={`${invoiceNum || "invoice"}.pdf`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Invoice PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 12. PDF REDUCER */}
                    {activeTool.id === "red_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <button onClick={compressPDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Reducing..." : "Reduce PDF Size"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `reduced_${uploadFile!.name}`)} download={`reduced_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Compressed PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 13. DELETE PDF PAGES */}
                    {activeTool.id === "del_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1">Pages to Delete (e.g. 2, 4)</label>
                              <input type="text" value={deletePagesInput} onChange={(e) => setDeletePagesInput(e.target.value)} placeholder="Enter page numbers..." className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <button onClick={deletePDFPages} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Deleting..." : "Delete Pages"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `pruned_${uploadFile!.name}`)} download={`pruned_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Updated PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 14. EXTRACT PDF PAGES */}
                    {activeTool.id === "ext_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1">Pages to Keep (e.g. 1, 3)</label>
                              <input type="text" value={extractPagesInput} onChange={(e) => setExtractPagesInput(e.target.value)} placeholder="Enter page numbers..." className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <button onClick={extractPDFPages} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Extracting..." : "Extract Pages"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `extracted_${uploadFile!.name}`)} download={`extracted_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Extracted PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 15. REORDER PDF PAGES */}
                    {activeTool.id === "ord_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1">New Page Order (e.g. 3, 1, 2)</label>
                              <input type="text" value={reorderPagesInput} onChange={(e) => setReorderPagesInput(e.target.value)} placeholder="Enter sequence..." className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <button onClick={reorderPDFPages} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Reordering..." : "Save Page Order"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `reordered_${uploadFile!.name}`)} download={`reordered_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Reordered PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 16. SIGN PDF */}
                    {activeTool.id === "sgn_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-3">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-1">1. Upload PDF Document</label>
                            <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                          </div>
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-1">2. Upload Signature PNG</label>
                            <input type="file" accept="image/png, image/jpeg" onChange={(e) => setSignatureImageFile(e.target.files?.[0] || null)} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                          </div>
                        </div>
                        {uploadFile && signatureImageFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1">Stamp on Page Number</label>
                              <input type="number" min={1} value={signPageNum} onChange={(e) => setSignPageNum(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <button onClick={signPDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Signing..." : "Sign Document"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `signed_${uploadFile!.name}`)} download={`signed_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Signed PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 17. PDF TO IMAGES */}
                    {activeTool.id === "pdf_imgs" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1">Target Page Number</label>
                              <input type="number" min={1} value={targetPageImageIndex} onChange={(e) => setTargetPageImageIndex(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <button onClick={extractPageAsImage} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Processing..." : "Extract Target Page"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `page_${targetPageImageIndex}_${uploadFile!.name}`)} download={`page_${targetPageImageIndex}_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Extracted Page PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 18. PROTECT PDF */}
                    {activeTool.id === "prt_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1">Set Password Lock</label>
                              <input type="password" value={pdfPassword} onChange={(e) => setPdfPassword(e.target.value)} placeholder="Enter password..." className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <button onClick={protectPDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Locking..." : "Protect PDF"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `protected_${uploadFile!.name}`)} download={`protected_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Protected PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 19. UNLOCK PDF */}
                    {activeTool.id === "unl_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload PDF Document</label>
                          <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1">Enter Security Password</label>
                              <input type="password" value={unlockPassword} onChange={(e) => setUnlockPassword(e.target.value)} placeholder="Type password..." className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-gold/40" />
                            </div>
                            <button onClick={unlockPDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Unlocking..." : "Unlock Document"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `unlocked_${uploadFile!.name}`)} download={`unlocked_${uploadFile!.name}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Unlocked PDF
                          </a>
                        )}
                      </div>
                    )}

                    {/* 20. IMAGE TO PDF */}
                    {activeTool.id === "img_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload Image file</label>
                          <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <button onClick={convertImageToPDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Generating..." : "Generate PDF Document"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, "document_converted.pdf")} download="document_converted.pdf" className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download PDF File
                          </a>
                        )}
                      </div>
                    )}

                    {/* 21. IMAGE FORMAT CONVERTER */}
                    {activeTool.id === "img_conv" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload Source Image</label>
                          <input type="file" accept="image/*" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-brand-muted mb-1.5">Target Format Type</label>
                              <select value={targetImageFormat} onChange={(e) => setTargetImageFormat(e.target.value)} className="w-full bg-neutral-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none cursor-pointer">
                                <option value="image/png">Lossless PNG</option>
                                <option value="image/jpeg">Optimized JPEG</option>
                                <option value="image/webp">Next-Gen WebP</option>
                              </select>
                            </div>
                            <button onClick={convertImageFormat} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Converting..." : "Execute Conversion"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, `converted.${targetImageFormat.split("/")[1]}`)} download={`converted.${targetImageFormat.split("/")[1]}`} className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Converted Image
                          </a>
                        )}
                      </div>
                    )}

                    {/* 22. PRINT PHOTO SHEET */}
                    {activeTool.id === "prnt_sheet" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Upload Passport Photo</label>
                          <input type="file" accept="image/*" onChange={handleFileChange} className="text-xs text-neutral-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-gold/15 file:text-brand-gold hover:file:bg-brand-gold/25 file:cursor-pointer" />
                        </div>
                        {uploadFile && (
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[10px] font-mono text-brand-muted mb-1">Sheet Rows</label>
                                <input type="number" min={1} max={8} value={photoSheetRows} onChange={(e) => setPhotoSheetRows(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white text-center focus:outline-none" />
                              </div>
                              <div>
                                <label className="block text-[10px] font-mono text-brand-muted mb-1">Sheet Columns</label>
                                <input type="number" min={1} max={8} value={photoSheetCols} onChange={(e) => setPhotoSheetCols(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white text-center focus:outline-none" />
                              </div>
                            </div>
                            <button onClick={generatePhotoSheet} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                              {isLoading ? "Generating Grid..." : "Build Print Grid"}
                            </button>
                          </div>
                        )}
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, "photo_grid_sheet.jpg")} download="photo_grid_sheet.jpg" className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Grid Sheet JPG
                          </a>
                        )}
                      </div>
                    )}

                    {/* 23. PDF MAKER */}
                    {activeTool.id === "mk_pdf" && (
                      <div className="space-y-4 text-left">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">1. Enter PDF Layout Content</label>
                          <textarea rows={4} value={pdfMakerText} onChange={(e) => setPdfMakerText(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-brand-gold/40 resize-none" />
                        </div>
                        <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
                          <button onClick={compileCustomPDF} className="w-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-2.5 rounded-xl text-center shadow-premium-gold cursor-pointer">
                            {isLoading ? "Compiling..." : "Generate Vector PDF"}
                          </button>
                        </div>
                        {downloadUrl && (
                          <a href={downloadUrl} onClick={(e) => triggerAdDownload(e, downloadUrl, "custom_doc.pdf")} download="custom_doc.pdf" className="block w-full bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer animate-pulse">
                            Download Generated PDF
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}

              </div>
              
              {/* Modal Footer Banner ad (if not premium) */}
              {!isSubscribed && (
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-left">
                  <div>
                    <p className="text-[9px] font-bold text-brand-gold font-mono tracking-wide leading-none mb-0.5">SPONSORED PROMO</p>
                    <p className="text-[10px] text-brand-muted">Enjoy clean, ad-free canvas processing. Get premium subscription.</p>
                  </div>
                  <button onClick={() => setShowSubscription(true)} className="text-[10px] text-brand-gold-light hover:underline font-semibold cursor-pointer shrink-0">
                    Remove Ads
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-xs text-brand-muted border-t border-white/5">
        &copy; {new Date().getFullYear()} Resizer Tools. Engineered to perfection. All rights reserved.
      </footer>
    </main>
  );
}