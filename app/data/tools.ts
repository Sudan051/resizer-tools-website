import { 
  ArrowDownCircle, Crop, Image as ImageIcon, RefreshCw, 
  Camera, Grid, QrCode, FileText, Copy, FileCode, Percent, 
  Split, Trash2, FolderSync, RotateCw, PenTool, Droplet, 
  Lock, Unlock, Sliders, Cpu as NfcCpu
} from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  category?: string;
  src?: string;
  isAppOnly?: boolean;
  isAppDownload?: boolean;
}

export const toolsData: Tool[] = [
  { id: "img-comp", title: "Image Compressor", subtitle: "Reduce image size without losing quality", desc: "Advanced down-sampling algorithms compress image file sizes up to 80% while retaining pixel-perfect fidelity for app deployment.", icon: ArrowDownCircle, category: "image", src: "/Pro.png", isAppOnly: false },
  { id: "img-res", title: "Image Resizer", subtitle: "Resize images to custom dimensions", desc: "Scale canvas aspect ratios instantly. Input custom coordinate parameters for flawless App Store asset rendering.", icon: Crop, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "img-pdf", title: "Image to PDF", subtitle: "Convert images into PDF documents", desc: "Batch transform multiple image files directly into formatted PDF pages natively without external server latency.", icon: ImageIcon, category: "image", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "img-conv", title: "Image Format Converter", subtitle: "Convert images between formats", desc: "Convert seamlessly between HEIC, PNG, JPEG, and WebP, optimizing assets for multi-platform distribution.", icon: RefreshCw, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "id-cam", title: "ID Photo Camera", subtitle: "Capture photos for official documents", desc: "Smart live-viewfinder alignment assistance helps you capture and auto-crop standard government-compliant document photos.", icon: Camera, category: "image", src: "/utilify-camera.jpg", isAppOnly: true },
  { id: "prnt-sheet", title: "Print Photo Sheet", subtitle: "Arrange photos on Letter sheets", desc: "Auto-arrange passport sizes or standard cutouts perfectly on grid layouts for A4, A5, and Letter sheet dimensions.", icon: Grid, category: "image", src: "/utilify-camera.jpg", isAppOnly: false },
  
  { id: "qr-scan", title: "QR Scanner", subtitle: "Scan and decode QR codes instantly", desc: "Hardware-accelerated camera optics capture, decode, and parse structural metadata link formats inside sub-pixel vectors.", icon: QrCode, category: "scanner", src: "/QRPowerScan.png", isAppOnly: true },
  { id: "doc-scan", title: "Document Scanner", subtitle: "Scan documents with auto edge detection", desc: "Real-time edge checking and automated quad perspective wrapping clean up skewed camera snapshots into crisp flat scans.", icon: FileText, category: "scanner", src: "/utilify-scan.jpg", isAppOnly: false },
  
  { id: "mrg-pdf", title: "Merge PDF", subtitle: "Combine multiple PDFs into one", desc: "Consolidate independent sub-documents or bulk paperwork paperwork packets cleanly into a unified index-optimized master PDF.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "mk-pdf", title: "PDF Maker", subtitle: "Create PDF files from vectors", desc: "Design structural layout configurations from localized media elements, text styles, and layout alignment matrices.", icon: FileCode, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "red-pdf", title: "PDF Reducer", subtitle: "Compress PDF files to save space", desc: "Optimize embedded graphics and compress structural document streams to drastically cut asset storage overhead.", icon: Percent, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "spl-pdf", title: "Split PDF", subtitle: "Extract pages from PDF documents", desc: "Surgically extract specified page indexes or break up bulky documentation arrays into cleanly segmented sub-files.", icon: Split, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "del-pdf", title: "Delete PDF Pages", subtitle: "Remove unwanted pages from PDF", desc: "Prune bloated assets instantly by clearing out irrelevant padding padding blocks or unwanted pages from document streams.", icon: Trash2, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ext-pdf", title: "Extract PDF Pages", subtitle: "Save specific pages from PDF", desc: "Isolate specific visual blocks or forms from massive data tables and dump them cleanly into distinct files.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ord-pdf", title: "Reorder PDF Pages", subtitle: "Change page order in PDF", desc: "An interactive, visual layout workspace to easily drag, drop, and rearrange index page configurations on the fly.", icon: FolderSync, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "rot-pdf", title: "Rotate PDF Pages", subtitle: "Rotate selected pages in PDF", desc: "Fix misaligned camera uploads instantly by adjusting structural rotation matrices by 90, 180, or 270 degrees.", icon: RotateCw, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "sgn-pdf", title: "Sign PDF", subtitle: "Add signature to PDF", desc: "Draw, cache, and stamp dynamic personalized cryptographic visual signatures cleanly onto official application layers.", icon: PenTool, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "wtrmk-pdf", title: "PDF Watermark", subtitle: "Add text watermark to PDF", desc: "Inject transparent security badging, copyright texts, or corporate logo graphics directly into asset backgrounds.", icon: Droplet, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "pdf-imgs", title: "PDF to Images", subtitle: "Convert PDF pages to images", icon: ImageIcon, desc: "Deconstruct compressed cross-platform document packages into separate lossless high-resolution asset images.", category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "prt-pdf", title: "Protect PDF", subtitle: "Add password to PDF", desc: "Enforce ironclad user file safety using local AES password hashes and secure document permission locking flags.", icon: Lock, category: "pdf", src: "/ProtectPDF.png", isAppOnly: false },
  { id: "unl-pdf", title: "Unlock PDF", subtitle: "Remove password from PDF", desc: "Instantly decrypt authorized protected streams and drop password requirements for verified layout updates.", icon: Unlock, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "inv-mk", title: "Invoice Maker", subtitle: "Create professional invoices", desc: "Generate professional corporate statements with exact sub-total computations, localized tax tabs, and sleek headers.", icon: FileText, category: "pdf", src: "/NFC Command.png", isAppOnly: false },
  { id: "res-make", title: "ATS Resume Builder", subtitle: "Build ATS-friendly professional resumes", desc: "Create clean, modern ATS-compliant PDF resumes 100% locally in your browser memory with zero server uploads.", icon: FileText, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "num-pdf", title: "Page Numbers", subtitle: "Add page numbers to PDF", desc: "Stamp custom-aligned dynamic numeric indexes automatically onto base layouts with adjustable margins.", icon: Sliders, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  
  { id: "qr-gen", title: "QR Generator", subtitle: "Create QR codes instantly", desc: "Generate customized high-density vector matrix codes using custom tracking hyperlinks, text strings, or credentials.", icon: QrCode, category: "generator", src: "/scan and Generate QR.png", isAppOnly: false },
  { id: "sig-cr", title: "Signature Creator", subtitle: "Draw and save signature", desc: "Smooth vector canvas capturing utility transforms touch/stylus paths into anti-aliased alpha-channel graphics.", icon: PenTool, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false },
  { id: "nfc-tl", title: "NFC Tools", subtitle: "Read and write NFC tags", desc: "Access native radio frequencies to write customized NDEF instructions or query contactless chip assets effortlessly.", icon: NfcCpu, category: "nfc", src: "/NFC Command.png", isAppOnly: true },
  { id: "shot-gen", title: "App Store Screenshot Studio", subtitle: "Generate iOS & Android App Store Screenshots", desc: "Generate pixel-perfect Apple App Store (6.7\", 6.5\", 5.5\", iPad 13\") & Google Play Store (Phone, 7\" & 10\" Tablet) marketing screenshots with dark-gold luxury frames, customizable headers, and instant batch ZIP/PNG download.", icon: Sliders, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false }
];

export const categories = [
  { id: "all", label: "All Tools" },
  { id: "image", label: "Images" },
  { id: "scanner", label: "Scanners" },
  { id: "pdf", label: "PDF Studio" },
  { id: "generator", label: "Generators" },
  { id: "nfc", label: "NFC" }
];

export interface SEOContent {
  steps: string[];
  faq: { q: string; a: string }[];
}

export function getToolSEOContent(tool: { id: string; title: string; subtitle?: string; desc?: string }): SEOContent {
  const steps: string[] = [
    `Select and upload your local files directly into the specialized ${tool.title} web workspace.`,
    `Adjust the custom settings, visual parameters, or compression metrics using our integrated control sliders.`,
    `Preview the real-time file computation and verify byte reductions or output quality directly in your browser.`,
    `Click the instant single-click trigger button to download your finalized ${tool.title} file with zero server wait times.`
  ];

  const faq: { q: string; a: string }[] = [
    { 
      q: `Does ${tool.title} upload my personal files to external servers?`, 
      a: `No. ${tool.title} operates 100% client-side inside your local browser memory using HTML5 Canvas, WebCrypto, and WebAssembly APIs. Your private images, PDF files, and documents never leave your device.` 
    },
    { 
      q: `Is ${tool.title} completely free to use without subscriptions?`, 
      a: `Yes, ${tool.title} on Resizer Tools is completely free to use with zero mandatory account registrations, hidden paywalls, or daily file quota caps.` 
    },
    { 
      q: `Can I use ${tool.title} offline without an active internet connection?`, 
      a: `Yes. Because ${tool.title} is a progressive browser-native application, once the workspace page is loaded, you can disconnect from the internet and continue using the tool completely offline.` 
    },
    { 
      q: `Which devices and web browsers are supported?`, 
      a: `${tool.title} is fully responsive and compatible with all modern desktop and mobile browsers, including Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, and Opera on Windows, macOS, iOS, and Android.` 
    },
    { 
      q: `How does browser-native processing benefit privacy and speed?`, 
      a: `Traditional web converters force you to upload large files over cellular or Wi-Fi networks to remote cloud servers, creating privacy risks and upload delays. By performing calculations in local RAM, processing completes instantly with maximum data safety.` 
    }
  ];

  if (tool.id === "img_comp" || tool.id === "img-comp") {
    faq.push({
      q: "What image formats can I compress with this tool?",
      a: "Our Image Compressor supports JPEG, JPG, PNG, WebP, and HEIC image formats, compressing them up to 80% with zero perceptible quality degradation."
    });
  } else if (tool.id === "mrg_pdf" || tool.id === "mrg-pdf") {
    faq.push({
      q: "Can I reorder PDF pages before merging?",
      a: "Yes, you can drag and drop or re-sequence your PDF file queue before stitching them together into a single master document."
    });
  } else if (tool.id === "res_make" || tool.id === "res-make") {
    faq.push({
      q: "Is the generated resume ATS-compliant?",
      a: "Yes, our resume builder generates clean, single-column vector PDFs that Applicant Tracking Systems (ATS) like Greenhouse, Workday, and Lever parse with 100% accuracy."
    });
  }

  return { steps, faq };
}
