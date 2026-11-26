import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  MessageCircle,
  Shield,
  Zap,
  FileText,
  ImageIcon,
  Lock,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Mail,
  RefreshCw,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import ThemeToggle from "../components/ThemeToggle";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Help Center & FAQ - Resizer Tools | Client-Side Privacy Utilities",
  description:
    "Find comprehensive answers to frequently asked questions about Resizer Tools. Learn about our 100% client-side zero-upload security, supported file formats, step-by-step tutorials, and technical support.",
  alternates: {
    canonical: "https://www.resizertools.com/help",
  },
  openGraph: {
    title: "Help Center & FAQ - Resizer Tools",
    description:
      "Explore answers to common questions about Resizer Tools. Discover how client-side WebAssembly processing protects your document privacy with zero cloud uploads.",
    url: "https://www.resizertools.com/help",
    siteName: "Resizer Tools",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center & FAQ - Resizer Tools",
    description:
      "Frequently asked questions, format guides, step-by-step workflows, and direct technical support for Resizer Tools.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string[];
}

const faqList: FAQItem[] = [
  {
    id: "what-is-resizer-tools",
    category: "General Platform",
    question: "What is Resizer Tools and how does it work?",
    answer: [
      "Resizer Tools (www.resizertools.com) is a modern, privacy-first web utilities suite built for fast document editing, image compression, file format conversion, and productivity workflows. Our suite includes 41 specialized tools, ranging from PDF merging and page organization to image cropping, passport photo sheet generation, QR code creation, and digital signature authoring.",
      "Unlike traditional online conversion websites that require you to upload your files to a remote cloud server for processing, Resizer Tools operates entirely inside your device's web browser. By leveraging cutting-edge web standards such as WebAssembly (WASM), HTML5 Canvas, and modern JavaScript Web Workers, all calculations and file transformations occur locally on your machine. Your files never travel across the internet, ensuring unmatched processing speed and absolute data confidentiality.",
    ],
  },
  {
    id: "is-it-free",
    category: "Pricing & Billing",
    question: "Is Resizer Tools really free? Are there hidden charges?",
    answer: [
      "Yes, Resizer Tools provides core utilities 100% free of charge for everyday use. There are no hidden fees, no mandatory credit card registrations, and no forced trials.",
      "Unlike many conventional utilities that watermark your output documents, artificially blur exported images, or restrict you to single-page trials, our free tier gives you full access to clean, unwatermarked, high-resolution outputs. We believe fundamental utility tools should be accessible to everyone worldwide without restrictive paywalls.",
    ],
  },
  {
    id: "do-files-get-uploaded",
    category: "Privacy & Security",
    question: "Do my files get uploaded to any server?",
    answer: [
      "No. Your files are never uploaded to any remote server or external storage bucket under any circumstances. When you drag and drop a file or browse your device to select one, the document is loaded strictly into your local browser's volatile memory (RAM).",
      "All file reading, parsing, image decoding, downsampling, cryptographic signing, and PDF page manipulations are executed by the CPU and GPU of your own computer or smartphone. Once your task is finished and you close the tab, the memory is cleared. You can verify this independently at any time by opening your browser's Developer Tools (Network tab) and observing that zero bytes of your document or image data are transmitted across the network during processing.",
    ],
  },
  {
    id: "how-client-side-processing-works",
    category: "Technical Architecture",
    question: "How does client-side processing work technically?",
    answer: [
      "Client-side processing represents a paradigm shift in web application architecture. Historically, web applications sent raw files to remote Linux server farms running command-line utilities like ImageMagick or Ghostscript. Resizer Tools replaces this centralized model with distributed local computing.",
      "When you execute an operation on Resizer Tools, your browser utilizes native File and FileReader APIs to read the binary data into an ArrayBuffer. For image tasks, an offscreen HTML5 2D Canvas renders and rasterizes pixels with bicubic interpolation algorithms, allowing real-time dimension scaling and quality compression. For PDF workflows, compiled WebAssembly binaries and pure client-side PDF object tree parsers dissect the document structure, compress embedded raster streams, manipulate xref tables, and reconstruct standard compliant PDF files. The final result is converted to a local Blob object URL (blob:https://...) that your browser downloads directly from local memory without making a network round-trip.",
    ],
  },
  {
    id: "supported-browsers",
    category: "Compatibility",
    question: "Which browsers are supported?",
    answer: [
      "Resizer Tools is engineered to support all modern, standards-compliant web browsers across desktop, tablet, and mobile platforms. We actively test and optimize our tools on Google Chrome (version 80+), Mozilla Firefox (version 78+), Apple Safari (version 14+), Microsoft Edge (Chromium editions), Brave, Opera, and Vivaldi.",
      "Mobile browsers including iOS Safari, Chrome for Android, and Samsung Internet are fully supported with tailored responsive touch controls. To ensure optimal performance with heavy WebAssembly execution and hardware-accelerated Canvas rendering, we recommend keeping your browser updated to the latest stable release.",
    ],
  },
  {
    id: "can-i-use-offline",
    category: "Compatibility",
    question: "Can I use Resizer Tools offline?",
    answer: [
      "Yes, core client-side functions can run offline. Once you load the Resizer Tools website in your browser, the necessary application scripts, stylesheets, and WebAssembly modules are cached in your browser storage.",
      "If your internet connection drops while working in a remote area or traveling on an airplane, loaded utilities such as image compression, image resizing, PDF page reorganization, password generation, and offline signature creation continue to function seamlessly. Because these tools execute on your local processor, they require zero active network communication to process your files.",
    ],
  },
  {
    id: "supported-file-formats",
    category: "File Handling",
    question: "What file formats are supported?",
    answer: [
      "Resizer Tools supports an extensive array of digital file formats across images, documents, and spreadsheets.",
      "For image workflows, we support JPEG (.jpg, .jpeg), PNG (.png, including full 32-bit alpha transparency), WebP (.webp), SVG (.svg vector formats), and standard bitmap files. For document workflows, we support PDF documents (.pdf, spanning specifications 1.4 through 2.0), Microsoft Word files (.docx, .doc), Microsoft Excel spreadsheets (.xlsx, .csv), and plain text documents (.txt). Additional format converters are added on an ongoing basis based on user community feedback.",
    ],
  },
  {
    id: "file-size-limits",
    category: "File Handling",
    question: "Is there a file size limit?",
    answer: [
      "Because Resizer Tools does not transfer your files over the internet to remote servers, we do not impose artificial server-side bandwidth or upload size caps. There is no arbitrary 10 MB or 25 MB paywall threshold common on legacy converter platforms.",
      "The practical file size boundary is determined solely by your device's available random-access memory (RAM) and browser memory ceilings. On modern desktop and laptop systems equipped with 8 GB or more of system memory, users regularly process PDF files and high-resolution photo archives exceeding 100 MB to 200 MB without difficulty. On mobile devices with restricted memory budgets, we recommend keeping individual files under 50 MB to prevent the mobile operating system from terminating the browser tab.",
    ],
  },
  {
    id: "how-to-compress-pdf",
    category: "Tool Tutorials",
    question: "How do I compress a PDF?",
    answer: [
      "Compressing a PDF with Resizer Tools is quick, intuitive, and completely private. Follow these five simple steps:",
      "1. Navigate to the PDF Reducer utility at /pdf-reducer or select Compress PDF from our homepage navigation.\n2. Drag and drop your PDF document into the designated upload area, or click the file picker to choose a file from your device.\n3. Use the compression slider to set your target optimization profile. You can select between standard compression (ideal for emailing), high compression (for strict government or portal file limits), or custom dpi downsampling.\n4. Click the 'Compress PDF' button. Your browser will parse the document tree, downsample embedded images, remove redundant font subsets, and strip unused metadata streams.\n5. Review the before and after file size metrics, then click 'Download PDF' to save the optimized file instantly to your device.",
    ],
  },
  {
    id: "how-to-convert-images",
    category: "Tool Tutorials",
    question: "How do I convert images between formats?",
    answer: [
      "Converting photos between formats—such as converting JPG to PNG, PNG to JPG, or WebP to JPG—takes only seconds:",
      "1. Open our Image Converter (/image-converter) or select a dedicated converter route such as /jpg-to-png or /webp-to-jpg.\n2. Upload one or multiple images by dropping them into the workspace.\n3. Choose your desired output format from the format selector and adjust the output quality factor if converting to lossy formats like JPG or WebP.\n4. Our client-side rendering pipeline loads the pixel data into memory, preserves or substitutes background alpha channels as required, and encodes the new format in real time.\n5. Click 'Download' to save individual files, or export all converted files together with one click.",
    ],
  },
  {
    id: "data-safety-and-privacy",
    category: "Privacy & Security",
    question: "Is my data safe and private?",
    answer: [
      "Yes, your data enjoys the highest security standard possible: absolute zero custody. In cybersecurity, the most secure server is the one that never receives the data in the first place.",
      "Traditional cloud converters store your uploaded files on cloud servers, exposing sensitive contracts, tax records, employee IDs, and personal photographs to server vulnerabilities, database misconfigurations, employee eavesdropping, or training-data harvesting. Because Resizer Tools processes every byte client-side inside your browser sandbox, our company, our developers, and third-party intermediaries have zero access to your files. This architecture makes our platform naturally aligned with stringent compliance mandates including GDPR, CCPA, and HIPAA guidelines.",
    ],
  },
  {
    id: "mobile-phone-support",
    category: "Compatibility",
    question: "Does Resizer Tools work on mobile phones?",
    answer: [
      "Yes, Resizer Tools is fully responsive and tailored for mobile smartphones and tablets running iOS or Android. Our user interface automatically adapts to handheld touchscreens, offering large touch targets, intuitive sliders, and gesture-friendly interactions.",
      "You can snap a photo directly using your phone's camera, import receipts from your photo library, compress oversized pictures before messaging them, or merge signed PDF contracts on the go. Furthermore, we offer an Android mobile app with specialized hardware-accelerated scanning and offline tools for users who prefer an installed mobile application.",
    ],
  },
  {
    id: "report-bug-request-feature",
    category: "Support & Feedback",
    question: "How do I report a bug or request a feature?",
    answer: [
      "We actively encourage user feedback, bug reports, and utility requests to help make Resizer Tools better for everyone. If you encounter an unexpected error, notice layout inconsistencies on a specific device, or have an idea for a new utility that would streamline your workflow, we would love to hear from you.",
      "You can contact our engineering team directly by sending an email to Saurabhsudan051@gmail.com, or by visiting our dedicated Contact page at /contact. When reporting a technical bug, please mention your device operating system, your browser and version number, and any error message displayed. We review all incoming communications and regularly ship user-requested improvements.",
    ],
  },
  {
    id: "premium-subscription",
    category: "Pricing & Billing",
    question: "What is the Premium subscription?",
    answer: [
      "While all essential Resizer Tools utilities are completely free for everyday consumer tasks, Resizer Tools Premium is designed for power users, legal teams, creative agencies, and commercial professionals who require higher throughput and dedicated productivity enhancements.",
      "Premium benefits include high-capacity concurrent batch processing (processing hundreds of files simultaneously), priority client-side execution profiles, an entirely ad-free workspace, offline desktop PWA enhancements, and expedited technical support from our engineering staff. Premium plans are priced affordably with no long-term contracts.",
    ],
  },
  {
    id: "commercial-purposes",
    category: "Legal & Usage",
    question: "Can I use Resizer Tools for commercial purposes?",
    answer: [
      "Yes, you are fully authorized to use Resizer Tools for commercial and business purposes. Freelancers, small businesses, marketing agencies, law firms, and multinational corporations use our utilities every day to prepare invoices, format marketing banners, compress client proposals, and sign vendor agreements.",
      "Because our tools run locally and do not claim any proprietary rights, licenses, or royalties over your content, you retain 100% intellectual property ownership of every processed file. We do not insert promotional watermarks or metadata stamps into your commercial files.",
    ],
  },
  {
    id: "exif-metadata-handling",
    category: "Privacy & Security",
    question: "Does compressing or resizing an image remove EXIF metadata?",
    answer: [
      "By default, our image compression and resizing pipelines automatically strip non-essential EXIF metadata (such as GPS coordinates, camera serial numbers, date/time stamps, and embedded thumbnail previews). This serves two vital purposes: it significantly reduces unnecessary file overhead to achieve smaller file sizes, and it protects your personal privacy by preventing sensitive location data from being shared online.",
      "If you are a photographer or archivist who requires camera exposure parameters (ISO, aperture, shutter speed) to remain intact, you can toggle the 'Preserve Metadata' option in our advanced settings before exporting your files.",
    ],
  },
  {
    id: "batch-processing-support",
    category: "Tool Tutorials",
    question: "Can I batch process multiple files at the same time?",
    answer: [
      "Yes, batch processing is supported across many of our most popular utilities, including the Image Compressor, Image Converter, JPG to PNG converter, and Image to PDF tool. You can drag and drop dozens of photos simultaneously into the upload area.",
      "Our processing engine queues and distributes tasks across background Web Workers, allowing your computer's multicore CPU to encode several images in parallel without locking up the user interface. Once batch execution finishes, you can download all processed assets individually or bundle them together into a single organized archive.",
    ],
  },
  {
    id: "cloud-vs-client-side",
    category: "Technical Architecture",
    question: "How does Resizer Tools compare to traditional cloud-based converters?",
    answer: [
      "Traditional cloud converters require a three-step round trip: uploading your file to a remote server, waiting in a server processing queue, and downloading the converted file back to your machine. For large files or slow internet connections, this process can take minutes and frequently fails due to network timeouts.",
      "Resizer Tools eliminates network latency entirely. Because computations occur locally in your browser's execution engine, processing starts the millisecond you click the button. More importantly, client-side execution guarantees zero third-party data custody, protecting you from data breaches and privacy violations inherent in centralized server farms.",
    ],
  },
];

interface ToolCategory {
  title: string;
  icon: typeof FileText;
  description: string;
  tools: {
    name: string;
    slug: string;
    desc: string;
  }[];
}

const toolCategories: ToolCategory[] = [
  {
    title: "PDF Utilities",
    icon: FileText,
    description: "Manage, optimize, and secure PDF documents locally without server uploads.",
    tools: [
      { name: "Compress PDF", slug: "/pdf-reducer", desc: "Reduce PDF size using an intuitive compression slider." },
      { name: "Merge PDF", slug: "/merge-pdf", desc: "Combine multiple PDF documents in any custom order." },
      { name: "Split PDF", slug: "/split-pdf", desc: "Extract individual pages or custom ranges into new files." },
      { name: "Sign PDF", slug: "/sign-pdf", desc: "Draw or place digital signatures directly onto contracts." },
      { name: "Protect PDF", slug: "/protect-pdf", desc: "Encrypt sensitive PDF documents with secure passwords." },
      { name: "Unlock PDF", slug: "/unlock-pdf", desc: "Remove passwords from authorized PDF documents." },
    ],
  },
  {
    title: "Image Utilities",
    icon: ImageIcon,
    description: "Resize, crop, and compress photographs and web graphics with zero quality loss.",
    tools: [
      { name: "Compress Image", slug: "/image-compressor", desc: "Downsample JPG, PNG, and WebP files to specific KB limits." },
      { name: "Resize Image", slug: "/image-resizer", desc: "Change dimensions by exact pixels, percentage, or aspect ratio." },
      { name: "Crop Image", slug: "/crop-image", desc: "Crop photos to exact ratios like 1:1, 16:9, or freehand." },
      { name: "Passport Photo Sheet", slug: "/print-photo-sheet", desc: "Tile passport and visa photos onto standard printable sheets." },
    ],
  },
  {
    title: "Format Converters",
    icon: RefreshCw,
    description: "Convert documents and media across major industry file formats instantly.",
    tools: [
      { name: "JPG to PNG", slug: "/jpg-to-png", desc: "Convert standard JPEG images to crisp PNG format." },
      { name: "PNG to JPG", slug: "/png-to-jpg", desc: "Convert PNG graphics to universal lightweight JPG files." },
      { name: "WebP to JPG", slug: "/webp-to-jpg", desc: "Convert modern WebP images to widely supported JPGs." },
      { name: "Image to PDF", slug: "/image-to-pdf", desc: "Compile multiple photos into a single organized PDF." },
      { name: "PDF to Word", slug: "/pdf-to-word", desc: "Convert PDF documents to editable Word documents." },
      { name: "PDF to Image", slug: "/pdf-images", desc: "Export PDF document pages into high-resolution images." },
    ],
  },
  {
    title: "Smart Generators",
    icon: Zap,
    description: "Client-side cryptographic generators, barcode makers, and business tools.",
    tools: [
      { name: "QR Code Generator", slug: "/qr-code-generator", desc: "Create customizable QR codes for links, text, and Wi-Fi." },
      { name: "Barcode Generator", slug: "/barcode-generator", desc: "Generate Code-128 and standard printable retail barcodes." },
      { name: "Password Generator", slug: "/password-generator", desc: "Generate cryptographically secure passwords locally." },
      { name: "Signature Creator", slug: "/signature-creator", desc: "Draw and export transparent digital signature stamps." },
      { name: "Invoice Maker", slug: "/invoice-maker", desc: "Create professional PDF invoices with automated totals." },
      { name: "ATS Resume Builder", slug: "/resume-builder", desc: "Draft recruiter-friendly single-column job resumes." },
    ],
  },
];

export default function HelpCenterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.resizertools.com/help#webpage",
        url: "https://www.resizertools.com/help",
        name: "Help Center & FAQ - Resizer Tools",
        description:
          "Frequently asked questions, platform technical details, format guides, and support for Resizer Tools.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.resizertools.com/#website",
          url: "https://www.resizertools.com",
          name: "Resizer Tools",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.resizertools.com/help#faq",
        mainEntity: faqList.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer.join(" "),
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.resizertools.com/help#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.resizertools.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Help Center",
            item: "https://www.resizertools.com/help",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-gold/30 selection:text-brand-gold-light relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Utility Bar with Navigation and ThemeToggle */}
      <nav className="sticky top-0 z-40 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs font-mono">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Tools
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-white font-semibold">Help Center &amp; FAQ</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="hidden sm:flex items-center gap-4 text-brand-muted">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/editorial" className="hover:text-white transition-colors">
              Editorial Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
          <div className="flex items-center gap-2 border-l border-white/10 pl-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20">
        
        {/* Hero Section */}
        <header className="space-y-6 text-left border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-mono text-xs uppercase font-bold tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Knowledge Base &amp; Technical Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How Can We Help You Today?
          </h1>
          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed max-w-3xl">
            Welcome to the Resizer Tools Help Center. Explore answers to frequent platform questions, learn how our 100% client-side zero-upload engine protects your confidential documents, discover step-by-step tutorials, or contact our engineering team.
          </p>

          {/* Core Guarantees Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white">100% Client-Side</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Files are processed directly in your browser memory. Zero server uploads.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white">Instant Execution</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Powered by WebAssembly and HTML5 Canvas for near-instant processing.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white">Strict Privacy</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Compliant with GDPR, CCPA, and HIPAA confidentiality principles.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Frequently Asked Questions (Accordion Style) */}
        <section aria-labelledby="faq-heading" className="space-y-8 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-gold uppercase tracking-wider font-semibold">
              <HelpCircle className="w-3.5 h-3.5" /> Comprehensive Platform Questions
            </div>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-muted font-light leading-relaxed max-w-2xl">
              Click any question below to expand the detailed explanation. All answers reflect our client-side architecture and operational standards.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((item, index) => (
              <details
                key={item.id}
                id={item.id}
                className="group border border-white/10 rounded-2xl bg-white/[0.02] hover:border-brand-gold/40 transition-all duration-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none">
                  <div className="flex items-start sm:items-center gap-3.5 text-left">
                    <span className="font-mono text-xs font-semibold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-md border border-brand-gold/20 shrink-0 mt-0.5 sm:mt-0">
                      Q{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="font-semibold text-base sm:text-lg text-white group-hover:text-brand-gold transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-neutral-300 leading-relaxed font-light border-t border-white/5 space-y-3">
                  <div className="inline-block text-[11px] font-mono font-medium text-brand-muted uppercase tracking-wider mb-1">
                    Category: {item.category}
                  </div>
                  {item.answer.map((para, pIdx) => (
                    <p key={pIdx} className="whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Section 2: Quick Links to Popular Tools by Category */}
        <section aria-labelledby="tools-directory-heading" className="space-y-8 text-left border-t border-white/10 pt-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-gold uppercase tracking-wider font-semibold">
              <Zap className="w-3.5 h-3.5" /> Fast Access Directory
            </div>
            <h2 id="tools-directory-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Popular Tools by Category
            </h2>
            <p className="text-sm text-brand-muted font-light leading-relaxed max-w-2xl">
              Quickly launch any of our web utilities. Every single utility executes entirely within your browser for speed, reliability, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={category.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-gold/30 transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-brand-gold">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-brand-muted font-light">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {category.tools.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={tool.slug}
                          className="group p-3 rounded-xl bg-white/[0.02] hover:bg-brand-gold/10 border border-white/5 hover:border-brand-gold/30 transition-all flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-semibold text-white group-hover:text-brand-gold transition-colors">
                              {tool.name}
                            </span>
                            <ArrowRight className="w-3 h-3 text-brand-muted group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all shrink-0" />
                          </div>
                          <span className="text-[11px] text-neutral-400 font-light mt-1 line-clamp-1">
                            {tool.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Technical Support & Contact Section */}
        <section aria-labelledby="support-heading" className="space-y-8 text-left border-t border-white/10 pt-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-gold uppercase tracking-wider font-semibold">
              <MessageCircle className="w-3.5 h-3.5" /> Reach Our Engineering Team
            </div>
            <h2 id="support-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Still Need Assistance?
            </h2>
            <p className="text-sm text-brand-muted font-light leading-relaxed max-w-2xl">
              Can’t find the answer you are looking for in our Help Center? Our technical engineering team is here to assist you with bugs, feature ideas, and custom workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Email Support Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-brand-gold w-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Email Engineering</h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  Direct contact with our engineering maintainers for bug diagnostics, edge-case troubleshooting, and tool questions.
                </p>
              </div>
              <div className="pt-3">
                <a
                  href="mailto:Saurabhsudan051@gmail.com"
                  className="inline-block text-xs font-mono font-semibold text-brand-gold hover:text-brand-gold-light hover:underline break-all"
                >
                  Saurabhsudan051@gmail.com
                </a>
                <p className="text-[11px] text-neutral-500 font-mono mt-1">Average response within 24 hours</p>
              </div>
            </div>

            {/* Support Scope & Bug Reports */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-brand-gold w-fit">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Report an Issue</h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  Encountered an unsupported file variant or a display issue? Include your device model, browser version, and error details.
                </p>
              </div>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:text-brand-gold-light"
                >
                  Visit Contact Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-[11px] text-neutral-500 font-mono mt-1">Includes registered merchant details</p>
              </div>
            </div>

            {/* Enterprise & Privacy Auditing */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-brand-gold/10 border border-brand-gold/25 text-brand-gold w-fit">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Privacy &amp; Policy</h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  Review our strict zero-upload data policies, security guarantees, editorial testing methodology, and legal terms.
                </p>
              </div>
              <div className="pt-3 flex flex-col gap-1.5 text-xs">
                <Link href="/privacy" className="text-brand-gold hover:underline">
                  Privacy Policy &rarr;
                </Link>
                <Link href="/terms" className="text-brand-gold hover:underline">
                  Terms of Service &rarr;
                </Link>
                <Link href="/editorial" className="text-brand-gold hover:underline">
                  Editorial &amp; Verification Policy &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Global Site Footer */}
      <SiteFooter />
    </main>
  );
}
