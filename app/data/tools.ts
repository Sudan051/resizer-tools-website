import { 
  ArrowDownCircle, Crop, Image as ImageIcon, RefreshCw, 
  Camera, Grid, QrCode, FileText, Copy, FileCode, Percent, 
  Split, Trash2, FolderSync, RotateCw, PenTool, Droplet, 
  Lock, Unlock, Sliders, Cpu as NfcCpu, FileSpreadsheet, FileType,
  Barcode, KeyRound
} from "lucide-react";
import { TOOL_CONTENT } from "./toolContent";

export interface Tool {
  id: string;
  slug?: string;
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
  // �️ IMAGE TOOLS
  { id: "img_comp", slug: "image-compressor", title: "Compress Image", subtitle: "Best tool to compress image size using slider", desc: "Compress JPG, PNG, and WebP image size easily using slider. Reduce file size without losing quality.", icon: ArrowDownCircle, category: "image", src: "/Pro.png", isAppOnly: false },
  { id: "img_res", slug: "image-resizer", title: "Resize Image", subtitle: "The fastest tool to resize image dimensions and quality", desc: "Resize image dimensions by pixels or percentage. Perfect for passport photos, social media, and web uploads.", icon: Crop, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "crp_img", slug: "crop-image", title: "Crop Image", subtitle: "Crop images online to custom size or aspect ratio", desc: "You can easily crop images using crop box online. Choose 1:1 square, 16:9, or custom dimensions.", icon: Crop, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "jpg_png", slug: "jpg-to-png", title: "JPG to PNG", subtitle: "Convert JPG images to PNG file online", desc: "Easily convert your JPG and JPEG images to high-quality transparent PNG format in seconds.", icon: RefreshCw, category: "converter", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "png_jpg", slug: "png-to-jpg", title: "PNG to JPG", subtitle: "Convert PNG images to JPG file online", desc: "Convert PNG images to JPG format with clean white background and customizable quality compression.", icon: RefreshCw, category: "converter", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "webp_jpg", slug: "webp-to-jpg", title: "WebP to JPG", subtitle: "Convert WebP images to standard JPG", desc: "Easily convert downloaded Google WebP images to universal JPG format for passport forms and photo viewers.", icon: RefreshCw, category: "converter", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "webp_png", slug: "webp-to-png", title: "WebP to PNG", subtitle: "Convert WebP images to PNG file online", desc: "Convert WebP images into transparent PNG graphics while preserving original resolution and clarity.", icon: RefreshCw, category: "converter", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "img_pdf", slug: "image-to-pdf", title: "Image to PDF", subtitle: "Convert multiple images into a PDF file", desc: "Combine one or more JPG, PNG, or WebP photos into a clean, easy-to-share PDF document online.", icon: ImageIcon, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "img_conv", slug: "image-converter", title: "Image Converter", subtitle: "Switch between PNG, JPG, WebP & HEIC", desc: "Easily convert images between all popular formats online. Fast, simple, and runs completely on your device.", icon: RefreshCw, category: "converter", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "prnt_sheet", slug: "print-photo-sheet", title: "Passport Photo Sheet", subtitle: "Arrange multiple passport photos on one page", desc: "Fit multiple passport or wallet-sized photos onto a standard A4 or 4x6 grid sheet ready for printing.", icon: Grid, category: "image", src: "/utilify-camera.jpg", isAppOnly: false },
  { id: "id_cam", slug: "id-photo-camera", title: "ID Photo Camera", subtitle: "Take passport and visa photos easily", desc: "Take and crop standardized passport, visa, and ID photos directly using camera frames on your phone.", icon: Camera, category: "image", src: "/utilify-camera.jpg", isAppOnly: true },

  // � PDF TOOLS
  { id: "mrg_pdf", slug: "merge-pdf", title: "Merge PDF", subtitle: "Merge multiple PDF files into a single PDF", desc: "Combine multiple PDF files into one document in your preferred order. Fast, secure, and easy to organize.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "spl_pdf", slug: "split-pdf", title: "Split PDF", subtitle: "Split pages or specify page range from PDF", desc: "Split pages into a fixed range or specify custom page ranges from the PDF file.", icon: Split, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "red_pdf", slug: "pdf-reducer", title: "Compress PDF", subtitle: "Best tool to compress PDF size using slider", desc: "Reduce PDF file size easily so you can email documents or upload them to portals without hitting size limits.", icon: Percent, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "pdf_word", slug: "pdf-to-word", title: "PDF to Word", subtitle: "Convert PDF to editable Word file online", desc: "You can simply convert PDF to Word file online. Keep headings, formatting, and tables intact.", icon: FileType, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "pdf_excel", slug: "pdf-to-excel", title: "PDF to Excel", subtitle: "The best PDF to Excel spreadsheet converter", desc: "Extract structured tables, numbers, and balance sheets from PDF files into Microsoft Excel spreadsheets.", icon: FileSpreadsheet, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "word_pdf", slug: "word-to-pdf", title: "Word to PDF", subtitle: "The best tool to convert Word to PDF online", desc: "Convert Microsoft Word documents (.docx, .doc) or text files into clean, professional PDF documents.", icon: FileType, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "excel_pdf", slug: "excel-to-pdf", title: "Excel to PDF", subtitle: "Easily convert Excel spreadsheet to PDF file", desc: "Convert Excel spreadsheets (.xlsx, .csv) into clean, printable PDF documents with neat column formatting.", icon: FileSpreadsheet, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "pdf_txt", slug: "pdf-to-text", title: "PDF to Text", subtitle: "Simply convert PDF to a text file online", desc: "Extract all plain text content from your PDF file into a downloadable .txt file in one click.", icon: FileText, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "txt_pdf", slug: "text-to-pdf", title: "Text to PDF", subtitle: "Convert plain text notes into a clean PDF file", desc: "Type, paste, or upload plain text to generate a beautifully formatted, paginated PDF document.", icon: FileCode, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "pdf_imgs", slug: "pdf-images", title: "PDF to Image", subtitle: "Convert PDF pages to high-res images online", desc: "You can easily convert PDF pages to clear, high-resolution PNG or JPG images ready for sharing.", icon: ImageIcon, category: "converter", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "mk_pdf", slug: "pdf-maker", title: "PDF Maker", subtitle: "Create custom PDF documents from text online", desc: "Type or paste text to build formatted, multi-page vector PDF documents directly in your browser.", icon: FileCode, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "del_pdf", slug: "delete-pdf-pages", title: "Remove Pages", subtitle: "Remove single or multiple pages from PDF", desc: "Delete unwanted pages, blank covers, or outdated sheets from your PDF file in just two clicks.", icon: Trash2, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ext_pdf", slug: "extract-pdf-pages", title: "Extract Pages", subtitle: "Extract each page or specify page range from PDF", desc: "The best tool to extract each page or specify a custom page range from the PDF file.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ord_pdf", slug: "reorder-pdf-pages", title: "Organize PDF", subtitle: "Easily organize and reorder PDF pages online", desc: "You can easily organize PDF pages online as you like. Rearrange page sequences with simple controls.", icon: FolderSync, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "rot_pdf", slug: "rotate-pdf-pages", title: "Rotate PDF", subtitle: "Rotate PDF pages using the rotate tool", desc: "You can rotate PDF pages using the rotate tool. Fix upside down or sideways pages permanently.", icon: RotateCw, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "sgn_pdf", slug: "sign-pdf", title: "Sign PDF", subtitle: "Add your signature to PDF documents online", desc: "Draw or upload your signature, place it on any page, and download your signed contract securely.", icon: PenTool, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "wtrmk_pdf", slug: "pdf-watermark", title: "Add Watermark", subtitle: "The best way to add watermark to a PDF online", desc: "Protect your work with custom text stamps like 'CONFIDENTIAL', 'DRAFT', or your company name.", icon: Droplet, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "prt_pdf", slug: "protect-pdf", title: "Protect PDF", subtitle: "Simply enter password and protect PDF", desc: "Protect your PDF files with strong password encryption to secure confidential records.", icon: Lock, category: "pdf", src: "/ProtectPDF.png", isAppOnly: false },
  { id: "unl_pdf", slug: "unlock-pdf", title: "Unlock PDF", subtitle: "You can simply unlock password-protected PDF", desc: "Remove password protection from authorized PDF files so you can easily view, print, and share them.", icon: Unlock, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "num_pdf", slug: "pdf-page-numbers", title: "Add Page Number", subtitle: "The fastest tool to add page numbers in a PDF", desc: "Add page numbers to the top or bottom of your PDF pages with custom numbering format.", icon: Sliders, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },

  // GENERATORS & PRODUCTIVITY
  { id: "qr_gen", slug: "qr-code-generator", title: "QR Code Generator", subtitle: "Generate high-quality QR codes in seconds", desc: "Create custom QR codes for websites, Wi-Fi networks, text notes, or contact info.", icon: QrCode, category: "generator", src: "/scan and Generate QR.png", isAppOnly: false },
  { id: "bar_gen", slug: "barcode-generator", title: "Barcode Generator", subtitle: "Generate barcode by entering text and download", desc: "You can generate barcode by entering text and download barcode as clean, printable PNG image.", icon: Barcode, category: "generator", src: "/scan and Generate QR.png", isAppOnly: false },
  { id: "pwd_gen", slug: "password-generator", title: "Password Generator", subtitle: "Generate random strong passwords with custom strength", desc: "You can easily generate random password with its strength. 100% private, client-side cryptographic security.", icon: KeyRound, category: "generator", src: "/ProtectPDF.png", isAppOnly: false },
  { id: "sig_cr", slug: "signature-creator", title: "Signature Creator", subtitle: "Draw, customize, and save your signature", desc: "Draw a clean digital signature with your mouse or finger, and export it as a transparent PNG.", icon: PenTool, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false },
  { id: "inv_mk", slug: "invoice-maker", title: "Invoice Maker", subtitle: "Create clean, professional PDF invoices online", desc: "Fill out client info, line items, and tax rates to generate sleek, printable PDF invoices for your business.", icon: FileText, category: "generator", src: "/NFC Command.png", isAppOnly: false },
  { id: "res_make", slug: "resume-builder", title: "ATS Resume Builder", subtitle: "Build clean, job-ready ATS resumes online", desc: "Create a modern, recruiter-friendly single-column resume formatted to pass ATS screening with ease.", icon: FileText, category: "generator", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "shot_gen", slug: "screenshot-generator", title: "App Store Screenshot Studio", subtitle: "Design App Store & Google Play screenshots", desc: "Create gorgeous marketing screenshots for iPhone and Android with custom backgrounds and device frames.", icon: Sliders, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false },

  // � SCANNERS & HARDWARE
  { id: "qr_scan", slug: "qr-scanner", title: "QR Scanner", subtitle: "Scan and read QR codes quickly", desc: "Scan QR codes instantly using your device camera or uploaded image to open links and text.", icon: QrCode, category: "scanner", src: "/QRPowerScan.png", isAppOnly: true },
  { id: "doc_scan", slug: "document-scanner", title: "Document Scanner", subtitle: "Scan physical documents with edge detection", desc: "Straighten, enhance contrast, and convert receipts and documents into crisp digital scans.", icon: FileText, category: "scanner", src: "/utilify-scan.jpg", isAppOnly: true },
  { id: "nfc_tl", slug: "nfc-tools", title: "NFC Tools", subtitle: "Read and write NFC tags with your phone", desc: "Program and scan NFC tags easily to launch URLs, trigger automations, or store contact information.", icon: NfcCpu, category: "nfc", src: "/NFC Command.png", isAppOnly: true }
];

export const categories = [
  { id: "all", label: "All Tools" },
  { id: "pdf", label: "PDF Tools" },
  { id: "image", label: "Image Tools" },
  { id: "converter", label: "Converter Tools" },
  { id: "generator", label: "Smart Utilities" },
  { id: "scanner", label: "Scanners & App" }
];

export interface SEOContent {
  overview: string[];
  steps: string[];
  faq: { q: string; a: string }[];
  features: { title: string; desc: string }[];
}

export function getToolSEOContent(tool: { id: string; title: string; subtitle?: string; desc?: string }): SEOContent {
  const normalizedId = tool.id.replace(/-/g, "_");
  const deepContent = TOOL_CONTENT[normalizedId] || TOOL_CONTENT[tool.id];

  if (deepContent) {
    return deepContent;
  }

  return {
    overview: [
      `${tool.title} is an open client-side web utility provided by Resizer Tools. It runs entirely inside your browser memory without uploading any files to remote servers.`,
      `Designed for speed, data privacy, and cross-platform reliability, your data is processed locally with zero external network transmission.`
    ],
    steps: [
      `Select or drag-and-drop your source file directly into ${tool.title}.`,
      `Configure the desired options, quality parameters, or layout targets.`,
      `Inspect the real-time preview to verify your changes.`,
      `Download the processed output immediately to your device.`
    ],
    faq: [
      {
        q: `Are my files uploaded to any servers when using ${tool.title}?`,
        a: `No. ${tool.title} runs 100% locally in your web browser. Your files never leave your device, ensuring complete confidentiality.`
      },
      {
        q: `Is ${tool.title} free to use?`,
        a: `Yes, it is completely free with no registration, email requirements, or daily file limits.`
      },
      {
        q: `Can I use this tool offline?`,
        a: `Yes! Once loaded, our Service Worker caches the code so you can continue using ${tool.title} even without an internet connection.`
      }
    ],
    features: [
      { title: "Zero Server Uploads", desc: "Processed 100% locally in browser memory" },
      { title: "Free & Unlimited", desc: "No daily limits, credits, or registration required" },
      { title: "Offline Capable", desc: "Works seamlessly without an active internet connection" },
      { title: "Cross-Platform", desc: "Compatible with modern desktop and mobile browsers" }
    ]
  };
}

export function findTool(idOrSlug: string): Tool | undefined {
  if (!idOrSlug) return undefined;
  const normalized = idOrSlug.toLowerCase().trim();
  const normalizedHyphen = normalized.replace(/_/g, "-");
  const normalizedUnderscore = normalized.replace(/-/g, "_");

  return toolsData.find(
    (t) =>
      t.slug?.toLowerCase() === normalizedHyphen ||
      t.id.toLowerCase() === normalizedUnderscore ||
      t.id.toLowerCase() === normalized ||
      t.id.replace(/_/g, "-").toLowerCase() === normalizedHyphen
  );
}


