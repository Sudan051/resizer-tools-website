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
  { id: "img_comp", title: "Image Compressor", subtitle: "Reduce file size while preserving clarity", desc: "Shrink JPG, PNG, and WebP images by up to 80% without noticeable quality loss. Great for websites, emails, and forms.", icon: ArrowDownCircle, category: "image", src: "/Pro.png", isAppOnly: false },
  { id: "img_res", title: "Image Resizer", subtitle: "Resize images to exact dimensions or KB", desc: "Change width, height, or aspect ratios in pixels or percentage. Perfect for social media banners, passport photos, and app icons.", icon: Crop, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "img_pdf", title: "Image to PDF", subtitle: "Convert photos and graphics into a PDF", desc: "Turn one or more JPG, PNG, or WebP images into a clean, easy-to-share PDF document in just a few seconds.", icon: ImageIcon, category: "image", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "img_conv", title: "Image Format Converter", subtitle: "Switch between PNG, JPG, WebP & HEIC", desc: "Convert images to the exact format you need. Fast, simple, and runs completely in your browser.", icon: RefreshCw, category: "image", src: "/utilify-image.jpg", isAppOnly: false },
  { id: "id_cam", title: "ID Photo Camera", subtitle: "Take passport and visa photos easily", desc: "Use guided on-screen frames to take and crop standardized passport, visa, and ID photos directly from your phone.", icon: Camera, category: "image", src: "/utilify-camera.jpg", isAppOnly: true },
  { id: "prnt_sheet", title: "Print Photo Sheet", subtitle: "Arrange multiple photos on one page", desc: "Fit multiple passport or wallet-sized photos onto standard A4, A5, or Letter sheets ready for high-quality printing.", icon: Grid, category: "image", src: "/utilify-camera.jpg", isAppOnly: false },
  
  { id: "qr_scan", title: "QR Scanner", subtitle: "Scan and read QR codes quickly", desc: "Scan QR codes instantly using your device camera or an uploaded image to open links, text, and contact details.", icon: QrCode, category: "scanner", src: "/QRPowerScan.png", isAppOnly: true },
  { id: "doc_scan", title: "Document Scanner", subtitle: "Scan physical documents with edge detection", desc: "Straighten, enhance contrast, and convert paper receipts, notes, and contracts into crisp digital scans.", icon: FileText, category: "scanner", src: "/utilify-scan.jpg", isAppOnly: false },
  
  { id: "mrg_pdf", title: "Merge PDF", subtitle: "Combine multiple PDFs into one document", desc: "Join separate PDF files together in whatever order you want. Clean, fast, and simple to organize.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "mk_pdf", title: "PDF Maker", subtitle: "Create custom PDFs from text and images", desc: "Draft clean, formatted PDF documents from scratch right in your browser with custom text and styling.", icon: FileCode, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "red_pdf", title: "PDF Reducer", subtitle: "Compress large PDFs for easy sharing", desc: "Cut down PDF file sizes so you can easily send them via email or upload to portals without hitting file limits.", icon: Percent, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "spl_pdf", title: "Split PDF", subtitle: "Separate a PDF into smaller files", desc: "Divide large multi-page PDF documents into individual sections or separate files with custom page ranges.", icon: Split, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "del_pdf", title: "Delete PDF Pages", subtitle: "Remove unwanted pages from your PDF", desc: "Delete blank pages, covers, or outdated sheets from your PDF file in just two clicks.", icon: Trash2, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ext_pdf", title: "Extract PDF Pages", subtitle: "Save selected pages as a new PDF", desc: "Pick and pull out only the specific pages or forms you need and save them into a new, smaller PDF.", icon: Copy, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "ord_pdf", title: "Reorder PDF Pages", subtitle: "Rearrange page order with drag and drop", desc: "Organize your PDF pages visually. Drag, drop, and sequence pages exactly the way you want them.", icon: FolderSync, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "rot_pdf", title: "Rotate PDF Pages", subtitle: "Fix upside down or sideways PDF pages", desc: "Rotate specific pages or entire PDF files by 90, 180, or 270 degrees to get the orientation right.", icon: RotateCw, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "sgn_pdf", title: "Sign PDF", subtitle: "Add your signature to PDF documents", desc: "Draw or upload your signature, place it on any page, and download your signed contract or form securely.", icon: PenTool, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "wtrmk_pdf", title: "PDF Watermark", subtitle: "Add custom text watermarks to your PDF", desc: "Protect your work with custom text stamps like 'CONFIDENTIAL', 'DRAFT', or your company name.", icon: Droplet, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "pdf_imgs", title: "PDF to Images", subtitle: "Save PDF pages as high-res images", desc: "Convert each page of your PDF into clear, high-resolution PNG or JPG images ready for presentations.", icon: ImageIcon, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "prt_pdf", title: "Protect PDF", subtitle: "Lock your PDF with a password", desc: "Secure sensitive documents, contracts, and financial records with strong password encryption.", icon: Lock, category: "pdf", src: "/ProtectPDF.png", isAppOnly: false },
  { id: "unl_pdf", title: "Unlock PDF", subtitle: "Remove password protection from your PDF", desc: "Enter your password once to remove restrictions and make your PDF easy to open, edit, and share.", icon: Unlock, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "inv_mk", title: "Invoice Maker", subtitle: "Create clean, professional PDF invoices", desc: "Fill out client info, line items, and tax rates to generate sleek, printable PDF invoices for your business.", icon: FileText, category: "pdf", src: "/NFC Command.png", isAppOnly: false },
  { id: "res_make", title: "ATS Resume Builder", subtitle: "Build clean, job-ready ATS resumes", desc: "Create a modern, recruiter-friendly single-column resume formatted to pass ATS screening with ease.", icon: FileText, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "num_pdf", title: "Page Numbers", subtitle: "Add page numbers to your PDF", desc: "Insert clean page numbers at the top or bottom of your document pages with custom positioning.", icon: Sliders, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  
  { id: "qr_gen", title: "QR Generator", subtitle: "Create custom QR codes in seconds", desc: "Generate high-quality QR codes for website URLs, Wi-Fi networks, text notes, or contact info.", icon: QrCode, category: "generator", src: "/scan and Generate QR.png", isAppOnly: false },
  { id: "sig_cr", title: "Signature Creator", subtitle: "Draw, customize, and save your signature", desc: "Draw a clean digital signature with your mouse, finger, or stylus, and export it as a transparent PNG.", icon: PenTool, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false },
  { id: "nfc_tl", title: "NFC Tools", subtitle: "Read and write NFC tags with your phone", desc: "Program and scan NFC tags easily to launch URLs, trigger automations, or store quick contact information.", icon: NfcCpu, category: "nfc", src: "/NFC Command.png", isAppOnly: true },
  { id: "shot_gen", title: "App Store Screenshot Studio", subtitle: "Design App Store & Google Play screenshots", desc: "Create gorgeous marketing screenshots for iPhone, iPad, and Android with custom backgrounds, device frames, and headlines.", icon: Sliders, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false }
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
    `Click the upload box or drag and drop your file directly into ${tool.title}.`,
    `Adjust the options to fit your needs—such as size, quality, page order, or format.`,
    `Check the instant preview on screen to make sure everything looks right.`,
    `Click download to save your new file immediately to your computer or phone.`
  ];

  const faq: { q: string; a: string }[] = [
    { 
      q: `Are my files uploaded to any servers?`, 
      a: `No. ${tool.title} runs 100% locally inside your web browser. Your images, PDFs, signatures, and personal documents never leave your device, ensuring complete privacy.` 
    },
    { 
      q: `Is ${tool.title} really free to use?`, 
      a: `Yes, it's completely free. You don't need to sign up for an account, provide a credit card, or worry about hidden daily limits or watermarks.` 
    },
    { 
      q: `Can I use this tool offline?`, 
      a: `Yes! Once this page loads in your browser, you can disconnect from Wi-Fi or mobile data and keep using ${tool.title} without any interruptions.` 
    },
    { 
      q: `Which browsers and devices are supported?`, 
      a: `${tool.title} works smoothly on modern web browsers including Google Chrome, Apple Safari, Mozilla Firefox, and Microsoft Edge across Windows, Mac, iPhone, iPad, and Android devices.` 
    },
    { 
      q: `Why is local browser processing better for privacy and speed?`, 
      a: `Most online tools upload your files to remote servers, which takes time and exposes your private documents to third parties. Resizer Tools does all the work directly in your browser memory, so it is faster and 100% private.` 
    },
    { 
      q: `Is there any limit on how many files I can process?`, 
      a: `There are no arbitrary daily quotas. You can process as many files as you need, whenever you need.` 
    },
    { 
      q: `Are my sensitive business or legal documents safe?`, 
      a: `Yes. Because your files are processed entirely on your local machine and never sent over the internet, your contracts, invoices, and personal records remain strictly in your hands.` 
    }
  ];

  if (tool.id === "img_comp" || tool.id === "img-comp") {
    faq.push({
      q: "What image formats can I compress?",
      a: "You can compress JPG, PNG, WebP, and HEIC images with full control over quality and target file size."
    });
  } else if (tool.id === "mrg_pdf" || tool.id === "mrg-pdf") {
    faq.push({
      q: "Can I change the order of pages before merging?",
      a: "Yes, you can easily arrange your files in any sequence before combining them into a single PDF."
    });
  } else if (tool.id === "res_make" || tool.id === "res-make") {
    faq.push({
      q: "Is the resume format compatible with ATS job portals?",
      a: "Yes. The builder creates clean, standard single-column PDFs that ATS systems (like Workday, Greenhouse, and Lever) can read without formatting glitches."
    });
  }

  return { steps, faq };
}

