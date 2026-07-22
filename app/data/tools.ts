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
  { id: "num_pdf", title: "Page Numbers", subtitle: "Add page numbers to PDF", desc: "Stamp custom-aligned dynamic numeric indexes automatically onto base layouts with adjustable margins.", icon: Sliders, category: "pdf", src: "/utilify-pdf.jpg", isAppOnly: false },
  
  { id: "qr_gen", title: "QR Generator", subtitle: "Create QR codes instantly", desc: "Generate customized high-density vector matrix codes using custom tracking hyperlinks, text strings, or credentials.", icon: QrCode, category: "generator", src: "/scan and Generate QR.png", isAppOnly: false },
  { id: "sig_cr", title: "Signature Creator", subtitle: "Draw and save signature", desc: "Smooth vector canvas capturing utility transforms touch/stylus paths into anti-aliased alpha-channel graphics.", icon: PenTool, category: "generator", src: "/utilify-dashboard.jpg", isAppOnly: false },
  
  { id: "nfc_tl", title: "NFC Tools", subtitle: "Read and write NFC tags", desc: "Access native radio frequencies to write customized NDEF instructions or query contactless chip assets effortlessly.", icon: NfcCpu, category: "nfc", src: "/NFC Command.png", isAppOnly: true }
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
  let steps: string[] = [];
  let faq: { q: string; a: string }[] = [];

  switch(tool.id) {
    case "img_comp":
      steps = [
        "Click the upload area or drop your image files (JPEG, PNG, WebP) directly into the browser.",
        "Adjust the quality slider to control the balance between image size and visual fidelity.",
        "Verify the real-time compressed size computation and download your optimized image instantly."
      ];
      faq = [
        { q: "Is the Image Compressor secure?", a: "Yes, it runs 100% locally in your browser memory. Your private images are never uploaded to any remote server." },
        { q: "Can I use it offline?", a: "Absolutely. Once the page is loaded, you can turn off your Wi-Fi and compress files completely offline." }
      ];
      break;
    case "img_res":
      steps = [
        "Upload the target graphic or photo you wish to resize.",
        "Input your custom width and height coordinate values in pixels.",
        "Maintain or unlock the original aspect ratio and download the resized image instantly."
      ];
      faq = [
        { q: "Will resizing reduce image quality?", a: "No, we use advanced canvas resampling filters to ensure your resized graphics remain crisp and clean." },
        { q: "Does the Image Resizer upload my photos?", a: "No, all dimensions are processed locally inside your web browser. No server uploads occur." }
      ];
      break;
    case "mrg_pdf":
      steps = [
        "Select and upload multiple PDF documents from your local filesystem.",
        "Arrange or drag the document array order to define the merged sequence.",
        "Click the compilation trigger button to stitch files together and download the merged PDF instantly."
      ];
      faq = [
        { q: "Is there a file limit on merging PDFs?", a: "No, since it runs locally on your computer, you can merge massive files without hitches, limited only by your device RAM." },
        { q: "Are my sensitive PDF contracts uploaded?", a: "Never. Resizer Tools runs entirely client-side using JavaScript libraries. Your files remain on your device." }
      ];
      break;
    case "sgn_pdf":
      steps = [
        "Upload your PDF document to the visual canvas viewer.",
        "Use your touch device or mouse pointer to draw a custom signature in the signature creator pad.",
        "Position, scale, and stamp the digital signature onto your document pages, and save the signed PDF."
      ];
      faq = [
        { q: "Is my signature saved securely?", a: "Yes, your signature is stamped directly onto the PDF file in your local browser memory. We never store or upload your signatures." },
        { q: "Is it legally binding?", a: "Yes, visual signatures applied locally are valid for standard applications and standard digital declarations." }
      ];
      break;
    default:
      steps = [
        `Select and upload your local files into the specialized ${tool.title} workspace interface.`,
        "Adjust the visual parameters, metadata properties, or action triggers using our integrated controls.",
        `Run browser-native compiling to download your finalized ${tool.title} file with zero upload delay.`
      ];
      faq = [
        { q: `Does this ${tool.title} upload my personal data?`, a: `No, just like all our resources, the ${tool.title} runs 100% client-side in your browser. No files are ever sent to our servers.` },
        { q: "Does this utility work on mobile devices?", a: "Yes, Resizer Tools is fully responsive and supports all mobile, tablet, and desktop browser environments." }
      ];
  }

  return { steps, faq };
}
