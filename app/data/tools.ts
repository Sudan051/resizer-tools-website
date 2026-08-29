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
  { id: "res_make", title: "ATS Resume Builder", subtitle: "Build ATS-friendly professional resumes", desc: "Create clean, modern ATS-compliant PDF resumes 100% locally in your browser memory with zero server uploads.", icon: FileText, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  { id: "num_pdf", title: "Page Numbers", subtitle: "Add page numbers to PDF", desc: "Stamp custom-aligned dynamic numeric indexes automatically onto base layouts with adjustable margins.", icon: Sliders, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  
  { id: "qr_gen", title: "QR Generator", subtitle: "Create QR codes instantly", desc: "Generate customized high-density vector matrix codes using custom tracking hyperlinks, text strings, or credentials.", icon: QrCode, category: "generator", src: "/scan and Generate QR.png", isAppOnly: false },
  { id: "sig_cr", title: "Signature Creator", subtitle: "Draw and save signature", desc: "Smooth vector canvas capturing utility transforms touch/stylus paths into anti-aliased alpha-channel graphics.", icon: PenTool, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false },
  { id: "nfc_tl", title: "NFC Tools", subtitle: "Read and write NFC tags", desc: "Access native radio frequencies to write customized NDEF instructions or query contactless chip assets effortlessly.", icon: NfcCpu, category: "nfc", src: "/NFC Command.png", isAppOnly: true },
  { id: "shot_gen", title: "App Store Screenshot Studio", subtitle: "Generate iOS & Android App Store Screenshots", desc: "Generate pixel-perfect Apple App Store (6.7\", 6.5\", 5.5\", iPad 13\") & Google Play Store (Phone, 7\" & 10\" Tablet) marketing screenshots with dark-gold luxury frames, customizable headers, and instant batch ZIP/PNG download.", icon: Sliders, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false }
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
    `Select and drag-and-drop your local files or documents directly into the specialized ${tool.title} web workspace interface using your desktop browser or mobile touch screen.`,
    `Adjust the custom settings, visual parameters, quality ratios, page range parameters, or compression metrics using our integrated control sliders and real-time canvas configuration controls.`,
    `Preview the real-time file computation in your workspace, verify byte reductions, page alignments, visual quality, or output parameters directly in your local browser memory before compiling.`,
    `Click the instant single-click action button to download your finalized ${tool.title} file instantly to your local device downloads folder with zero server upload wait times or queue delays.`
  ];

  const faq: { q: string; a: string }[] = [
    { 
      q: `Does ${tool.title} upload my personal files to external remote servers?`, 
      a: `No, absolutely not. ${tool.title} operates 100% client-side inside your local web browser memory using modern HTML5 Canvas, WebCrypto API, and WebAssembly technologies. Your private images, PDF files, financial invoices, signatures, and confidential documents remain completely on your local device and are never sent over the network to any third-party or cloud server.` 
    },
    { 
      q: `Is ${tool.title} completely free to use without hidden subscriptions or limits?`, 
      a: `Yes, ${tool.title} on Resizer Tools is completely free to use. There are zero mandatory account registrations, hidden credit card paywalls, daily file processing quota caps, or watermarks injected into your output documents. You can process as many files as you need for personal, commercial, or professional projects.` 
    },
    { 
      q: `Can I use ${tool.title} offline without an active internet connection?`, 
      a: `Yes. Because Resizer Tools is engineered as a progressive, browser-native application, once the workspace page is loaded in your browser tab, you can turn off your Wi-Fi or mobile data and continue using ${tool.title} completely offline without any internet connection.` 
    },
    { 
      q: `Which operating systems, devices, and web browsers are supported?`, 
      a: `${tool.title} is fully responsive and compatible across all modern desktop, laptop, tablet, and mobile platforms. It works flawlessly on Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, and Opera across Windows, macOS, Linux, iOS (iPhone/iPad), and Android operating systems.` 
    },
    { 
      q: `How does browser-native local processing benefit privacy and speed?`, 
      a: `Traditional online file converters force you to upload multi-megabyte files over mobile data or Wi-Fi to remote servers, exposing sensitive personal records to data privacy risks and causing long upload queues. By executing all algorithms directly in your computer or phone's local RAM, processing finishes in milliseconds while keeping your private data 100% secure.` 
    },
    { 
      q: `What are the system RAM or file size recommendations for ${tool.title}?`, 
      a: `Since ${tool.title} computes files locally inside your web browser's RAM sandbox, processing speed depends on your device CPU and available memory. For optimal performance with large multi-page PDF documents or high-resolution camera photos, we recommend using a modern web browser with at least 2GB of available system RAM.` 
    },
    { 
      q: `How does ${tool.title} protect confidential legal and corporate documents?`, 
      a: `Because no remote server connections are established during file manipulation, your sensitive tax records, legal contracts, business invoices, and personal identity documents never leave your physical hardware. This zero-trust client architecture satisfies strict corporate compliance and data privacy regulations.` 
    }
  ];

  if (tool.id === "img_comp" || tool.id === "img-comp") {
    faq.push({
      q: "What image formats can I compress with this tool?",
      a: "Our Image Compressor supports JPEG, JPG, PNG, WebP, and HEIC image formats, compressing them up to 80% with zero perceptible visual quality loss for web and mobile publishing."
    });
  } else if (tool.id === "mrg_pdf" || tool.id === "mrg-pdf") {
    faq.push({
      q: "Can I reorder PDF pages before merging?",
      a: "Yes, you can drag and drop or re-sequence your PDF file queue before stitching them together into a single master document."
    });
  } else if (tool.id === "res_make" || tool.id === "res-make") {
    faq.push({
      q: "Is the generated resume ATS-compliant for job applications?",
      a: "Yes, our resume builder generates clean, single-column vector PDFs that Applicant Tracking Systems (ATS) like Greenhouse, Workday, and Lever parse with 100% accuracy."
    });
  }

  return { steps, faq };
}
