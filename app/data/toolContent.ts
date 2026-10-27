export interface ToolDeepContent {
  overview: string[];
  steps: string[];
  faq: { q: string; a: string }[];
  features: { title: string; desc: string }[];
}

export const TOOL_CONTENT: Record<string, ToolDeepContent> = {
  img_comp: {
    overview: [
      "The Resizer Tools Image Compressor employs browser-native HTML5 Canvas rendering and quantization algorithms to downscale file weight by up to 80% while retaining perceptual sharpness. Whether prepping high-resolution product photography for e-commerce stores, compressing digital receipts for expense reports, or adhering to portal upload limits, files are encoded directly in local device RAM.",
      "Traditional online compressors upload your personal photos and sensitive documents across public cloud networks, creating data vulnerability and network latency. Our client-side pipeline processes JPEG, PNG, WebP, and HEIC files locally on your GPU and CPU, ensuring zero external exposure and instant processing."
    ],
    steps: [
      "Select or drag-and-drop your target JPG, PNG, or WebP photo into the compression zone.",
      "Adjust the interactive quality slider (recommended 75%–85% for balanced visual fidelity and low file size).",
      "Inspect the live size calculation and visual comparison directly in your browser window.",
      "Click Download to immediately save your compressed image with zero server waiting queues."
    ],
    faq: [
      {
        q: "How does browser-side image compression work without quality degradation?",
        a: "We utilize bicubic downsampling and selective quantization within your browser's Canvas 2D engine. High-frequency pixel variations imperceptible to the human eye are mathematically trimmed while preserving sharp subject contours, text edges, and true color profiles."
      },
      {
        q: "What file formats are supported for compression?",
        a: "You can compress JPEG, JPG, PNG, WebP, and modern smartphone HEIC images directly without needing third-party desktop software."
      },
      {
        q: "Is there a limit on input image resolution or file size?",
        a: "Because processing utilizes your physical device memory rather than remote cloud limits, you can easily compress ultra-high resolution 4K, 8K, and 50MB+ camera RAW exports."
      },
      {
        q: "Are EXIF metadata and GPS coordinates stripped during compression?",
        a: "Yes. When re-encoding compressed images, privacy-invasive metadata—including camera model, exposure settings, and embedded GPS geographical coordinates—is automatically removed to safeguard your privacy."
      },
      {
        q: "Can I use the Image Compressor offline?",
        a: "Yes. Once the web application loads, our Service Worker caches the compression algorithms, enabling complete offline performance during flights or remote site visits."
      }
    ],
    features: [
      { title: "Bicubic Quantization", desc: "Reduces file size up to 80% with lossless appearance" },
      { title: "EXIF Stripping", desc: "Removes sensitive camera and GPS tracking data" },
      { title: "Zero Uploads", desc: "Processed 100% in local memory with WebAssembly" },
      { title: "Multi-Format", desc: "Native encoding for WebP, PNG, JPEG, and HEIC" }
    ]
  },

  img_res: {
    overview: [
      "The Image Resizer gives you surgical control over pixel dimensions, aspect ratio constraints, and display scaling. Tailored for digital marketers, web designers, and job applicants, this tool enables rapid resizing for passport standards, social banners (YouTube, LinkedIn, Twitter), app icons, and responsive web assets.",
      "By executing scaling through hardware-accelerated Canvas transforms, image interpolation remains crisp without the blurry edges or distortion common in basic online stretchers. Lock aspect ratios with a single click or specify custom width and height targets."
    ],
    steps: [
      "Upload your source graphic or photo from your desktop or mobile file system.",
      "Enter exact target width and height in pixels, or toggle percentage scaling for uniform downsampling.",
      "Keep the aspect ratio lock checked to prevent unnatural stretching and distortion.",
      "Export the resized image instantaneously in pristine PNG or optimized JPEG format."
    ],
    faq: [
      {
        q: "Will resizing my image make it look blurry or pixelated?",
        a: "Downsizing images actually increases apparent pixel density, keeping them crisp. When upscaling, our bilinear smoothing filter prevents harsh pixelation artifacts."
      },
      {
        q: "Can I resize an image to exact passport or visa dimensions?",
        a: "Yes. You can switch from standard pixels to exact millimeter ratios or predefined passport specifications (e.g., 35x45mm or 2x2 inches) for official portal submissions."
      },
      {
        q: "How does aspect ratio locking work?",
        a: "When the lock icon is engaged, entering a new width automatically computes and adjusts the corresponding height to maintain the photo's original proportions without stretching."
      },
      {
        q: "Are my resized photos stored on any external server?",
        a: "Never. All Canvas manipulations occur strictly within your browser's private memory heap and are instantly discarded when you close or reload the browser tab."
      }
    ],
    features: [
      { title: "Aspect Ratio Lock", desc: "Prevents distortion by preserving natural proportions" },
      { title: "Pixel & Percent Modes", desc: "Scale by precise dimensions or percentage factors" },
      { title: "Social Presets", desc: "Ready-to-use dimensions for YouTube, Instagram, and LinkedIn" },
      { title: "Lossless Sampling", desc: "Maintains maximum edge sharpness across resolutions" }
    ]
  },

  img_pdf: {
    overview: [
      "The Image to PDF converter bundles multiple images, camera snaps, and graphic designs into a standardized, multi-page vector PDF document. Ideal for submitting receipts, portfolios, academic assignments, or business proposals, it arranges images with proper margins and orientation.",
      "Rather than sending your images to an unvetted cloud API, our client-side engine uses PDF-lib to embed raw image bytes directly into standard PDF XObject dictionaries. This guarantees rapid compilation, exact color fidelity, and total confidentiality."
    ],
    steps: [
      "Select one or multiple photos (JPG, PNG, WebP) to combine into your PDF.",
      "Review the queued images and reorder pages if needed to establish the desired sequence.",
      "Select page layout, orientation (Portrait or Landscape), and border margin padding.",
      "Click Generate PDF to produce a unified, print-ready document in milliseconds."
    ],
    faq: [
      {
        q: "Can I combine images of different dimensions and orientations into one PDF?",
        a: "Yes. The compiler dynamically evaluates each image's native dimensions and fits it cleanly onto uniform pages or scales page boundaries individually to match image orientation."
      },
      {
        q: "Is there a maximum number of images I can combine?",
        a: "Because processing executes locally in your device memory, you can combine dozens of high-res photos without encountering arbitrary server upload limits."
      },
      {
        q: "Will the PDF format maintain original image clarity for printing?",
        a: "Yes. Images are embedded at their native resolution without lossy re-encoding unless you explicitly enable compression, making files optimal for high-DPI office printing."
      },
      {
        q: "Are confidential paperwork or invoices safe to convert here?",
        a: "Completely safe. Your files never leave your device, eliminating compliance risks for legal, tax, or medical records."
      }
    ],
    features: [
      { title: "Batch Processing", desc: "Combine dozens of images into a single multi-page PDF" },
      { title: "Page Fit & Margins", desc: "Customize padding, portrait/landscape orientation, and sizing" },
      { title: "High-DPI Print Ready", desc: "Retains original photo resolution for professional printing" },
      { title: "Zero Server Delay", desc: "Immediate document compilation directly in browser memory" }
    ]
  },

  img_conv: {
    overview: [
      "The Image Format Converter provides seamless, bidirectional translation between all modern web and print formats: WebP, PNG, JPEG, and HEIC. Web developers, designers, and creators can effortlessly modernize legacy graphic assets or convert next-gen formats for compatibility with older software.",
      "Using hardware-accelerated image decoders and canvas encodings, conversion happens in milliseconds. Convert bloated PNGs into lightweight WebP for Core Web Vitals optimization, or export transparent PNGs from camera stills with zero server latency."
    ],
    steps: [
      "Upload the source image you wish to convert.",
      "Choose your desired output format: Next-Gen WebP, Lossless PNG, or Universal JPEG.",
      "Fine-tune output parameters such as compression level and background transparency handling.",
      "Download your converted image file instantly, ready for web deployment or software import."
    ],
    faq: [
      {
        q: "Why should I convert my website images from PNG or JPEG to WebP?",
        a: "WebP was developed by Google to provide superior lossy and lossless compression. WebP files are on average 25% to 34% smaller than equivalent JPEGs while delivering matching visual quality, significantly improving website speed and Google Core Web Vitals."
      },
      {
        q: "Can this tool convert transparent PNGs to JPEG without dark borders?",
        a: "Yes. Transparent pixels are automatically composited against a clean white canvas background during JPEG conversion to prevent blackened transparent areas."
      },
      {
        q: "Does this converter support Apple iPhone HEIC photos?",
        a: "Yes. Modern mobile HEIC captures can be converted directly into universal JPEG or PNG formats for effortless sharing with Windows and Android users."
      },
      {
        q: "Are my converted photos kept on a server?",
        a: "No. The entire decoding and encoding cycle happens inside your browser's private V8 JavaScript engine with no remote transmission."
      }
    ],
    features: [
      { title: "Next-Gen WebP", desc: "Cut web asset sizes by up to 35% to boost page load speed" },
      { title: "Alpha Transparency", desc: "Clean preservation or solid-fill compositing for transparent layers" },
      { title: "Apple HEIC Support", desc: "Convert iPhone camera photos to universally compatible JPG/PNG" },
      { title: "No Server Uploads", desc: "Private, instantaneous format translation inside your browser" }
    ]
  },

  id_cam: {
    overview: [
      "The ID Photo Camera utility turns your smartphone or webcam into a biometric passport and visa photography studio. With real-time on-screen biometric alignment guides, it helps users center their facial oval, balance head heights, and ensure standard lighting.",
      "Achieving compliant passport photos typically requires expensive commercial studios. This tool provides official biometric guidance, instant cropping, and background contrast enhancement—all calculated client-side with full camera stream privacy."
    ],
    steps: [
      "Grant temporary browser camera permission (video streams are processed locally and never recorded remotely).",
      "Align your eyes, nose, and chin within the on-screen biometric oval overlay.",
      "Snap the photo in well-lit conditions with a neutral facial expression.",
      "Crop, adjust exposure, and export standard passport-ready photo files."
    ],
    faq: [
      {
        q: "Is it safe to use my device camera on this website?",
        a: "Yes. The camera feed is linked strictly to a local HTML5 `<video>` element on your screen. No video frames, facial geometry, or photos are ever streamed or recorded to an external server."
      },
      {
        q: "What are standard passport photo specifications?",
        a: "Most international authorities (including US Department of State and Indian Passport Seva) require 2x2 inch (51x51mm) or 35x45mm dimensions with the head occupying 70%–80% of total frame height against a plain white background."
      },
      {
        q: "Can I adjust brightness and contrast after capturing?",
        a: "Yes. Built-in adjustment controls let you balance exposure, enhance contrast, and remove subtle facial shadows before saving."
      }
    ],
    features: [
      { title: "Biometric Oval Guide", desc: "Real-time alignment overlay ensuring official compliance" },
      { title: "Camera Stream Privacy", desc: "Local hardware video pipeline with zero remote transmission" },
      { title: "Instant Exposure Control", desc: "Fine-tune contrast and brightness for clean white backgrounds" },
      { title: "Standard ID Sizing", desc: "One-click cropping to 2x2 inch and 35x45mm international standards" }
    ]
  },

  prnt_sheet: {
    overview: [
      "The Print Photo Sheet tool tiles multiple passport, visa, or wallet-sized photos onto standard printable paper formats (A4, A5, and US Letter). Designed for families, job seekers, and travelers, it eliminates the cost of multiple studio print orders by letting you print 8, 16, or 32 compliant photos on a single photo paper sheet.",
      "Custom grid layouts, customizable cut margins, and high-DPI output ensure that your home inkjet or pharmacy photo kiosk produces sharp, evenly spaced prints with easy cutting guidelines."
    ],
    steps: [
      "Upload your cropped passport or ID photo.",
      "Select your paper size (A4, A5, 4x6 inch, or US Letter) and grid count (e.g. 2x4, 3x5).",
      "Enable cutting border guides to make trimming with scissors or paper cutters effortless.",
      "Download a high-resolution 300 DPI print sheet ready for home printing or store kiosks."
    ],
    faq: [
      {
        q: "What paper size is best for printing passport photos at home?",
        a: "Standard 4x6 inch (10x15cm) glossy photo paper is most popular and supported by virtually all photo printers and local pharmacy kiosks, fitting 6 to 8 standard passport photos."
      },
      {
        q: "Will the printed photos maintain 300 DPI sharpness?",
        a: "Yes. The sheet compiler outputs at 300 DPI (dots per inch), the universal commercial standard for crisp, artifact-free physical photo printing."
      },
      {
        q: "Can I print different photos on the same sheet?",
        a: "Yes. You can duplicate a single photo across all grid slots or upload multiple individual photos for family members on the same sheet."
      }
    ],
    features: [
      { title: "Multi-Grid Layouts", desc: "Tile 4 to 32 photos across standard A4, 4x6, and Letter sheets" },
      { title: "Cutting Guides", desc: "Subtle dashed lines for effortless scissors and trimmer alignment" },
      { title: "300 DPI Print Resolution", desc: "Commercial print-shop sharpness on glossy photographic paper" },
      { title: "Zero Uploads", desc: "Assembled directly in browser RAM with complete personal privacy" }
    ]
  },

  qr_scan: {
    overview: [
      "The QR Scanner provides instant, privacy-first QR code and barcode recognition using your device camera or an uploaded image file. Ideal for verifying website URLs, inspecting Wi-Fi credentials, or reading raw payload data without automatically triggering malicious links.",
      "Unlike generic mobile scanner apps that bundle aggressive tracking SDKs and adware, our scanner operates 100% inside your browser using computer vision algorithms. You inspect the decrypted text safely before choosing to open or copy it."
    ],
    steps: [
      "Point your webcam/phone camera at the QR code, or upload an image file containing a code.",
      "The computer vision engine detects and decodes the matrix instantly.",
      "Review the parsed content (URL, contact card, Wi-Fi credentials, or raw plain text).",
      "Copy the payload safely to your clipboard or open verified links in a new tab."
    ],
    faq: [
      {
        q: "Is it safe to scan unknown QR codes with this tool?",
        a: "Yes. Our scanner displays the exact raw destination URL or plain text without automatically redirecting your browser, preventing malicious drive-by phishing attacks."
      },
      {
        q: "Can I scan a QR code from a screenshot or saved image?",
        a: "Yes. You can upload any JPEG, PNG, or WebP screenshot directly to read its encoded data without using a physical camera."
      },
      {
        q: "Does this scanner record or track the QR codes I inspect?",
        a: "No. Decoded information is processed purely in your browser session and is never logged to any remote database."
      }
    ],
    features: [
      { title: "Phishing Protection", desc: "Inspect decoded URLs safely before opening destination pages" },
      { title: "Camera & Image Modes", desc: "Scan live through webcams or upload saved screenshot graphics" },
      { title: "All QR Standards", desc: "Parses URLs, vCards, Wi-Fi keys, SMS, and plain text formats" },
      { title: "No Third-Party Tracking", desc: "Zero ad telemetry, analytics tracking, or remote data logging" }
    ]
  },

  doc_scan: {
    overview: [
      "The Document Scanner transforms physical paper receipts, handwritten notes, whiteboards, and multi-page agreements into crisp, high-contrast digital scans. Using intelligent thresholding and adaptive contrast filters, it eliminates shadows and enhances text legibility.",
      "Traditional mobile scanning apps frequently upload documents to proprietary clouds for OCR processing. Our browser scanner performs all pixel binarization and perspective contrast adjustments locally, ensuring that financial receipts and confidential notes remain strictly on your device."
    ],
    steps: [
      "Snap a photo with your camera or upload a picture of your paper document.",
      "Adjust adaptive contrast, brightness, and grayscale sliders to clean up background shadows.",
      "Review the enhanced, high-contrast document preview.",
      "Download your digital scan as a crisp, archival-quality image or PDF file."
    ],
    faq: [
      {
        q: "How does the scanner remove paper wrinkles and background shadows?",
        a: "The tool applies an adaptive binarization algorithm that evaluates local pixel brightness against surrounding areas, brightening the paper background to pure white while darkening ink text."
      },
      {
        q: "Is this suitable for legal contracts and tax invoices?",
        a: "Yes. Enhanced high-contrast scans meet the clarity standards required for corporate accounting, tax audits, and online government portal uploads."
      },
      {
        q: "Can I scan multiple document pages into one file?",
        a: "Yes. You can process sequential pages and then use our Image to PDF tool to merge them into a single organized PDF document."
      }
    ],
    features: [
      { title: "Adaptive Binarization", desc: "Eliminates uneven lighting and phone camera shadows" },
      { title: "Ink Contrast Boost", desc: "Darkens handwriting and faded print for high legibility" },
      { title: "Grayscale & B/W Modes", desc: "Switch between clean monochrome and balanced grayscale" },
      { title: "Confidentiality Assured", desc: "Tax receipts and agreements are processed locally with zero uploads" }
    ]
  },

  mrg_pdf: {
    overview: [
      "The Merge PDF utility combines multiple individual PDF files, reports, and chapters into a cohesive, organized master document. Essential for compiling corporate proposals, academic theses, legal exhibits, and billing statements, it preserves all original vector fidelity, bookmarks, and font encodings.",
      "Rather than sending large, confidential PDF attachments to remote cloud servers where file size limits and privacy concerns apply, Resizer Tools merges documents client-side using WebAssembly and PDF-lib. Reorder files visually before finalizing."
    ],
    steps: [
      "Upload two or more PDF files you want to combine into a single document.",
      "Drag and drop file cards to arrange them in your exact desired order.",
      "Preview the unified page count and file structure.",
      "Click Merge PDF to assemble and download your consolidated file instantly."
    ],
    faq: [
      {
        q: "Will merging PDFs degrade visual quality or blur text?",
        a: "No. Merging occurs at the binary vector level by copying native PDF page dictionaries. Vector text, crisp fonts, mathematical curves, and embedded photos remain 100% untouched."
      },
      {
        q: "Can I merge password-protected PDF files?",
        a: "If a PDF has password security, use our Unlock PDF tool first to remove the restriction, then merge it seamlessly with other files."
      },
      {
        q: "Is there a limit on how many PDFs I can combine at once?",
        a: "Because processing runs directly on your machine's hardware, you can merge dozens of files without encountering arbitrary cloud upload quotas."
      },
      {
        q: "Are my confidential contracts or tax records safe when merging?",
        a: "Yes. Because zero bytes are uploaded to any external server, sensitive financial and legal records remain strictly under your control."
      }
    ],
    features: [
      { title: "Lossless Vector Fusion", desc: "Preserves native text clarity, font glyphs, and high-res photos" },
      { title: "Visual Reordering", desc: "Drag-and-drop file cards to structure your preferred reading order" },
      { title: "Unlimited File Merging", desc: "Combine multiple reports without restrictive file size caps" },
      { title: "100% Offline Processing", desc: "Runs in local browser memory without network latency" }
    ]
  },

  mk_pdf: {
    overview: [
      "The PDF Maker is a lightweight, browser-native desktop publishing tool that turns plain text, structured copy, and graphical elements into clean, formatted vector PDF documents. Perfect for drafting quick formal letters, memos, checklists, or printable notices.",
      "Operating completely client-side, it dynamically compiles document layouts into standard ISO 32000 compliant PDF structures without requiring complex office suites or external print drivers."
    ],
    steps: [
      "Type or paste your formatted text content into the drafting workspace.",
      "Configure page margins, font sizes, heading styles, and paragraph spacing.",
      "Review the live document layout in real-time.",
      "Click Generate Vector PDF to export a crisp, lightweight, universally readable document."
    ],
    faq: [
      {
        q: "What makes this different from saving as PDF in a word processor?",
        a: "Our PDF Maker runs instantly in your browser without launching heavy software suites, producing ultra-lightweight vector PDFs with zero unnecessary metadata bloat."
      },
      {
        q: "Can I print the created PDF on standard office printers?",
        a: "Yes. The generated PDFs adhere strictly to standard A4 and US Letter page boundaries, ensuring perfect physical print alignment."
      },
      {
        q: "Is my text content logged or transmitted to an external server?",
        a: "No. All text compilation is handled locally inside your browser's memory heap with zero server communication."
      }
    ],
    features: [
      { title: "Vector Typography", desc: "Crisp, scalable font rendering on retina screens and printers" },
      { title: "Lightweight File Size", desc: "Generates clean PDFs free of unnecessary software bloat" },
      { title: "Standard A4 Alignment", desc: "Strict adherence to international standard page boundaries" },
      { title: "Zero Data Logging", desc: "Private memo and letter drafting with total client-side privacy" }
    ]
  },

  red_pdf: {
    overview: [
      "The PDF Reducer compresses bloated PDF documents by downsampling high-resolution embedded raster graphics, stripping redundant color profiles, and reorganizing internal PDF stream dictionaries. Ideal for adhering to government job portals, university admissions, and email attachment file size limits.",
      "Where cloud services queue your files on remote servers, our client-side reducer performs memory stream optimization directly on your CPU. Reduce files from 25MB down to under 2MB for seamless sharing."
    ],
    steps: [
      "Upload your oversized PDF file into the reducer workspace.",
      "Choose your optimization level: Standard Compression, Strong Compression, or Extreme Reduction.",
      "View the calculated reduction percentage and final output size.",
      "Download your optimized, lightweight PDF ready for immediate email or portal submission."
    ],
    faq: [
      {
        q: "How does the PDF Reducer shrink file sizes so dramatically?",
        a: "Most oversized PDFs are bloated by uncompressed print-resolution photos and redundant embedded font subsets. The reducer re-encodes images at optimal screen resolutions (150 DPI) and eliminates duplicate data streams."
      },
      {
        q: "Will reducing a PDF make the text unreadable?",
        a: "No. Vector text characters, outlines, and form fields remain unaffected. Only embedded photographic elements are optimized, ensuring text stays razor-sharp."
      },
      {
        q: "What should I do if a government portal has a strict 200KB or 500KB limit?",
        a: "Select our Strong or Extreme compression preset. It aggressively downsamples embedded photos while preserving complete document structure."
      },
      {
        q: "Are sensitive documents like bank statements safe to compress here?",
        a: "Yes. All compression computations happen locally inside your browser, ensuring confidential financial data is never exposed."
      }
    ],
    features: [
      { title: "Multi-Tier Compression", desc: "Choose between light, balanced, and aggressive reduction presets" },
      { title: "Vector Text Preservation", desc: "Keeps alphanumeric text razor-sharp while optimizing images" },
      { title: "Email & Portal Ready", desc: "Shrink multi-megabyte PDFs down to meet strict 500KB/1MB quotas" },
      { title: "100% Client-Side", desc: "Zero server uploads guarantees complete document privacy" }
    ]
  },

  spl_pdf: {
    overview: [
      "The Split PDF utility separates multi-page PDF documents into individual pages, distinct chapters, or custom page subsets. Indispensable for isolating specific contracts from large bundles, extracting single invoices from monthly statements, or breaking up lengthy scanned books.",
      "By utilizing client-side PDF tree parsing, splitting operations complete in a fraction of a second without uploading multi-hundred-page files to third-party cloud servers."
    ],
    steps: [
      "Upload the multi-page PDF document you need to split.",
      "Specify your split criteria: extract all pages as individual files, or enter a custom page range (e.g., 1-5, 8, 12-15).",
      "Verify the page count and target ranges in the visual preview.",
      "Download your split PDF files instantly to your device."
    ],
    faq: [
      {
        q: "Can I extract non-consecutive pages using this tool?",
        a: "Yes. You can input custom ranges such as '1-3, 7, 10-12' to package only the specific pages you need into a new PDF."
      },
      {
        q: "Does splitting a PDF damage links, forms, or bookmarks on remaining pages?",
        a: "No. Page dictionaries are extracted cleanly with their associated visual annotations, font glyphs, and content streams intact."
      },
      {
        q: "Is there a limit on how large of a PDF I can split?",
        a: "Because processing leverages your device's local memory, you can split massive 200+ page documents without encountering remote server timeouts."
      }
    ],
    features: [
      { title: "Custom Range Syntax", desc: "Extract continuous or non-consecutive page sequences (e.g. 1-4, 8)" },
      { title: "Lossless Page Separation", desc: "Preserves original page visual quality, vectors, and fonts" },
      { title: "Instant Extraction", desc: "Split 100+ page documents in seconds without server uploads" },
      { title: "Complete Confidentiality", desc: "Legal agreements and medical charts remain 100% private" }
    ]
  },

  del_pdf: {
    overview: [
      "The Delete PDF Pages tool allows you to permanently prune unwanted pages, blank filler sheets, outdated terms, or accidental duplicates from any PDF file. Simply select the page numbers you wish to remove and export a streamlined document.",
      "Our client-side engine reconstructs the internal PDF page tree without re-compressing or degrading the pages you choose to keep, ensuring that the remaining content preserves pristine original vector fidelity."
    ],
    steps: [
      "Upload your PDF document to inspect all contained pages.",
      "Select or type the specific page numbers you want to permanently delete.",
      "Review the updated total page count in the summary indicator.",
      "Click Delete Pages to export and save your refined PDF document."
    ],
    faq: [
      {
        q: "Does deleting pages re-compress or degrade the quality of remaining pages?",
        a: "No. The tool simply updates the PDF catalog dictionary to remove pointers to the deleted pages. The surviving pages remain identical to their original state."
      },
      {
        q: "Can I delete multiple non-consecutive pages at once?",
        a: "Yes. You can specify single pages or comma-separated lists (e.g. '2, 5, 9-11') to purge all unwanted pages in one operation."
      },
      {
        q: "Is it possible to recover pages after deletion?",
        a: "Once you download the new PDF, the deleted pages are not in that file. However, your original source file on your computer remains completely untouched."
      }
    ],
    features: [
      { title: "Batch Page Removal", desc: "Eliminate single pages or multiple ranges in one step" },
      { title: "Dictionary Pruning", desc: "Streamlines internal PDF structure without re-encoding surviving pages" },
      { title: "Original File Protected", desc: "Produces a new cleaned file while keeping your source file intact" },
      { title: "Private Local Memory", desc: "Process sensitive business and legal files with zero cloud exposure" }
    ]
  },

  ext_pdf: {
    overview: [
      "The Extract PDF Pages tool extracts designated pages from a large PDF document and packages them into a brand-new, standalone PDF file. Perfect for extracting single signed signature pages, specific financial quarters from annual reports, or specific chapters from manuals.",
      "By decoupling page extraction from cloud-based queues, Resizer Tools extracts vector assets, fonts, and annotations locally in your browser memory for immediate, secure export."
    ],
    steps: [
      "Upload the source PDF containing the pages you wish to extract.",
      "Enter the target page numbers or ranges (e.g. '3-7, 14') you want to pull out.",
      "Verify the page selection in the preview monitor.",
      "Download your new, focused PDF file containing only the extracted pages."
    ],
    faq: [
      {
        q: "What is the difference between splitting and extracting PDF pages?",
        a: "Splitting divides an entire document into multiple separate files, whereas extracting isolates only the specific pages you designate into a single new document."
      },
      {
        q: "Will hyperlinks and vector graphics work in the extracted PDF?",
        a: "Yes. All page-level vector data, clickable web hyperlinks, and embedded fonts are preserved in the extracted output."
      },
      {
        q: "Can I extract pages from encrypted PDFs?",
        a: "You must first unlock the PDF using our Unlock PDF tool if it has an open password, after which extraction works normally."
      }
    ],
    features: [
      { title: "Targeted Isolation", desc: "Extract specific exhibits, forms, or chapters into a new file" },
      { title: "Preserved Annotations", desc: "Maintains form fields, clickable links, and vector typography" },
      { title: "Lightweight Output", desc: "Resulting file contains only the data needed for extracted pages" },
      { title: "Zero Upload Latency", desc: "Extract pages from large documents instantly without server uploads" }
    ]
  },

  ord_pdf: {
    overview: [
      "The Reorder PDF Pages utility provides an intuitive, drag-and-drop workspace to rearrange the sequence of pages within your PDF document. Fix reversed document scans, organize presentation decks, or sequence book chapters effortlessly.",
      "Because the reordering process manipulates the internal PDF page array in client-side memory, the operation takes milliseconds and involves zero file uploads or quality degradation."
    ],
    steps: [
      "Upload your multi-page PDF document to load all pages into the visual sequencer.",
      "Drag and drop page cards into your desired reading order.",
      "Review the new page index numbering to ensure complete accuracy.",
      "Download the re-sequenced PDF document immediately."
    ],
    faq: [
      {
        q: "Why are my scanned PDF pages out of order?",
        a: "Automatic document feeders (ADFs) and duplex scanners frequently scan reverse sides in inverted order. This tool allows you to restore the natural page flow in seconds."
      },
      {
        q: "Does reordering alter page contents or formatting?",
        a: "No. Reordering simply changes the sequence pointers in the PDF document catalog. Every page's visual appearance and text remain exactly as originally rendered."
      },
      {
        q: "Can I rotate pages while reordering them?",
        a: "Yes, you can adjust page order and then use our Rotate PDF tool to correct any sideways or inverted scans."
      }
    ],
    features: [
      { title: "Visual Drag & Drop", desc: "Easily reorder pages with responsive card dragging" },
      { title: "Instant Re-Indexing", desc: "Updates page sequence dictionaries without re-encoding content" },
      { title: "Scanned Stack Fixer", desc: "Perfect for correcting duplex scanner inverted page sequences" },
      { title: "100% Client-Side", desc: "All page reorganizations execute safely in your browser RAM" }
    ]
  },

  rot_pdf: {
    overview: [
      "The Rotate PDF utility corrects upside-down or sideways pages in PDF documents. Whether dealing with mixed landscape architectural drawings, rotated tax receipts, or flipped mobile camera scans, you can rotate individual pages or the entire document by 90, 180, or 270 degrees.",
      "Unlike basic image editors that rasterize PDF pages and destroy text clarity, our tool modifies the native `/Rotate` parameter inside the PDF page object. Your text remains crisp, searchable, and selectable."
    ],
    steps: [
      "Upload the PDF document with misaligned or upside-down pages.",
      "Choose to rotate all pages universally or select specific page numbers.",
      "Click the 90° Clockwise, 180° Inversion, or 270° Counter-Clockwise rotation buttons.",
      "Download your properly oriented PDF file ready for presentation or printing."
    ],
    faq: [
      {
        q: "Why is modifying the `/Rotate` tag better than re-saving as images?",
        a: "Modifying the PDF `/Rotate` tag changes only a single metadata integer in the page object. This preserves all vector text, fonts, and searchable layers without losing quality or ballooning file size."
      },
      {
        q: "Can I rotate only landscape pages while keeping portrait pages vertical?",
        a: "Yes. You can target specific individual page numbers to ensure diagrams are landscape while letter pages remain portrait."
      },
      {
        q: "Will the rotation stay permanent when opened in Adobe Acrobat or Apple Preview?",
        a: "Yes. The rotation tag conforms to ISO 32000 PDF standards and will be rendered permanently across all PDF readers, mobile viewers, and printers."
      }
    ],
    features: [
      { title: "Native Tag Mutation", desc: "Rotates without rasterizing, preserving 100% text searchability" },
      { title: "Selective Orientation", desc: "Rotate single pages or apply bulk changes across all pages" },
      { title: "Permanent Standard Fix", desc: "Conforms to ISO 32000 PDF standards across all external readers" },
      { title: "Zero Cloud Latency", desc: "Rotations execute instantly in client-side memory" }
    ]
  },

  sgn_pdf: {
    overview: [
      "The Sign PDF tool allows you to draw, customize, and stamp binding digital signatures onto contracts, leases, non-disclosure agreements, and official paperwork directly in your web browser. Position your signature with pixel precision on any page, adjust ink colors, and export signed documents ready for legal submission.",
      "Sending confidential agreements to third-party e-signature platforms often exposes proprietary corporate secrets. Resizer Tools stamps signature vector overlays into PDF content streams client-side, guaranteeing that your agreements remain strictly confidential."
    ],
    steps: [
      "Upload the agreement, contract, or form that requires your signature.",
      "Draw your signature using a mouse, stylus, or touchscreen, or choose a saved signature.",
      "Select your signature ink color (Professional Navy Blue, Classic Black, or Gold).",
      "Drag and place the signature onto the designated signature line on any page, then click Download."
    ],
    faq: [
      {
        q: "Are signatures created with this tool legally valid?",
        a: "Yes. Under the US ESIGN Act, UETA, and European eIDAS regulations, electronic signatures demonstrating intent to sign are legally recognized for most commercial and personal contracts."
      },
      {
        q: "Does Resizer Tools see or store my signature or signed contracts?",
        a: "Never. The drawing canvas and PDF vector stamping pipeline execute 100% in local browser memory. Neither your signature nor your document is ever transmitted to a server."
      },
      {
        q: "Can I add the signing date or initials alongside my signature?",
        a: "Yes. You can stamp your primary signature, secondary initials, and dates wherever required across multi-page contracts."
      },
      {
        q: "What devices are supported for signing?",
        a: "The signature pad supports mouse drawing on desktop PCs, as well as high-precision capacitive touch and Apple Pencil input on iPads, iPhones, and Android tablets."
      }
    ],
    features: [
      { title: "Vector Ink Stamping", desc: "Embeds sharp signature paths directly into PDF content streams" },
      { title: "Multi-Color Inks", desc: "Select between authentic legal blue, formal black, and custom ink" },
      { title: "Touch & Stylus Precision", desc: "Smooth cubic Bezier curve smoothing for natural handwritten signatures" },
      { title: "Complete Legal Privacy", desc: "Confidential contracts remain strictly inside your browser sandbox" }
    ]
  },

  wtrmk_pdf: {
    overview: [
      "The PDF Watermark utility stamps customizable diagonal or horizontal text watermarks across your document pages. Protect intellectual property, draft manuscripts, confidential financials, and legal discovery files with prominent stamps such as 'CONFIDENTIAL', 'DRAFT', 'DO NOT COPY', or your company name.",
      "Our client-side vector stamping engine renders semi-transparent text with precise opacity, rotation angles, and typography without corrupting existing underlying document text or diagrams."
    ],
    steps: [
      "Upload the PDF document you wish to protect with a watermark.",
      "Enter your custom watermark text (e.g., 'CONFIDENTIAL', 'SAMPLE', or client name).",
      "Configure font color, opacity percentage, font size, and rotation angle (diagonal 45° recommended).",
      "Click Inject Watermark to generate and save your protected PDF document."
    ],
    faq: [
      {
        q: "Will the watermark block or hide the text underneath it?",
        a: "No. With customizable transparency and opacity controls (recommended 15%–30%), the watermark remains clearly visible while allowing underlying text and tables to be easily read."
      },
      {
        q: "Can someone easily remove a watermark stamped by this tool?",
        a: "The watermark is injected directly into the PDF content stream as a composite graphic layer, making it difficult to strip without dedicated vector editing tools."
      },
      {
        q: "Can I watermark only specific pages in a document?",
        a: "You can apply the watermark universally across all pages or target specific page ranges for draft review."
      }
    ],
    features: [
      { title: "Customizable Opacity", desc: "Fine-tune transparency so text underneath remains fully legible" },
      { title: "Diagonal 45° Angle", desc: "Industry-standard diagonal stamping for maximum visual deterrence" },
      { title: "Universal Compatibility", desc: "Watermarks render accurately across all PDF viewers and printers" },
      { title: "Zero Server Exposure", desc: "Internal corporate memos are watermarked locally without cloud risks" }
    ]
  },

  pdf_imgs: {
    overview: [
      "The PDF to Images converter renders each page of a PDF document into a high-resolution, crystal-clear PNG or JPEG image. Essential for inserting PDF pages into slide decks (PowerPoint, Keynote), posting documents on social media, or embedding report pages into websites.",
      "Running locally via WebAssembly-powered PDF rendering libraries, it converts document pages with sharp font anti-aliasing and true color fidelity without transmitting your data across external networks."
    ],
    steps: [
      "Upload the PDF document you want to convert into images.",
      "Choose your desired output format (PNG for lossless graphic clarity, or JPEG for smaller file sizes).",
      "Select rendering resolution (standard 150 DPI for web, or high-res 300 DPI for print).",
      "Download individual page images or export all pages packaged in a clean ZIP bundle."
    ],
    faq: [
      {
        q: "What is the difference between PNG and JPEG output for PDF pages?",
        a: "PNG is a lossless format that preserves razor-sharp text edges and vector lines, ideal for charts and text documents. JPEG produces smaller file sizes, ideal for photo-heavy brochures."
      },
      {
        q: "Are the converted images high enough resolution for professional printing?",
        a: "Yes. When selecting 300 DPI output, the rasterized images match the resolution of commercial photographic prints."
      },
      {
        q: "Does this tool work for multi-page PDF documents?",
        a: "Yes. The converter processes all pages sequentially, allowing you to preview and download each page individually or download all pages in a single ZIP file."
      }
    ],
    features: [
      { title: "300 DPI Retina Output", desc: "Ultra-sharp image rendering suitable for presentations and prints" },
      { title: "Lossless PNG & JPG", desc: "Export in clean lossless PNG or lightweight web-ready JPEG" },
      { title: "Batch ZIP Export", desc: "Convert multi-page documents and download all pages in one bundle" },
      { title: "Zero Server Uploads", desc: "Document rendering executes directly on your local GPU/CPU" }
    ]
  },

  prt_pdf: {
    overview: [
      "The Protect PDF utility locks your PDF documents with standard password encryption. Secure salary slips, bank records, confidential corporate NDAs, and private health records against unauthorized opening, copying, or printing.",
      "Our client-side encryption engine applies standard 128-bit and 256-bit AES encryption algorithms directly in your browser. Because your password and document never leave your device, there is zero risk of password interception on external networks."
    ],
    steps: [
      "Upload the unencrypted PDF document you wish to secure.",
      "Enter a strong master password to restrict document opening.",
      "Confirm your password to ensure zero typing errors.",
      "Download your encrypted, password-protected PDF file immediately."
    ],
    faq: [
      {
        q: "What encryption standard is used to protect the PDF?",
        a: "The tool utilizes standard 128-bit and 256-bit AES encryption conforming to the Adobe PDF ISO 32000 standard, compatible with Adobe Acrobat, Apple Preview, and web browsers."
      },
      {
        q: "Can Resizer Tools recover my password if I forget it?",
        a: "No. Because encryption runs locally with zero-knowledge architecture, we never see or store your password. Keep a secure copy of your password in a password manager."
      },
      {
        q: "Will the password protection work on smartphones and tablets?",
        a: "Yes. The encrypted PDF will prompt for the password on any standard iOS, Android, macOS, Windows, or Linux PDF viewer."
      }
    ],
    features: [
      { title: "Industry-Standard AES Encryption", desc: "Robust cryptographic security conforming to ISO 32000" },
      { title: "Universal Reader Support", desc: "Prompts for password on Adobe Acrobat, Apple Preview, and browsers" },
      { title: "Zero-Knowledge Architecture", desc: "Passwords are never transmitted, logged, or stored externally" },
      { title: "Immediate Locking", desc: "Protects large documents in seconds using local WebCrypto APIs" }
    ]
  },

  unl_pdf: {
    overview: [
      "The Unlock PDF tool decrypts password-protected PDF files once you provide the authorized password, permanently removing the password requirement. Ideal for streamlining workflows when you have legitimately received encrypted bank statements, salary slips, or legal documents and need to merge, print, or share them without entering a password every time.",
      "Operating completely inside your browser memory, it removes encryption dictionaries and exports a clean, standard PDF without exposing your password or file to third-party cloud servers."
    ],
    steps: [
      "Upload the password-protected PDF document.",
      "Enter the authorized document open password.",
      "Click Unlock PDF to decrypt the file in browser memory.",
      "Download the unlocked, restriction-free PDF file for effortless sharing and printing."
    ],
    faq: [
      {
        q: "Can this tool crack or bypass an unknown PDF password?",
        a: "No. In compliance with security standards and privacy laws, you must provide the authorized password. The tool then permanently removes the lock for seamless future access."
      },
      {
        q: "Is it safe to enter my password on this website?",
        a: "Yes. Decryption happens entirely in your local browser session using client-side WebAssembly. Your password is never sent across the internet or saved to any server."
      },
      {
        q: "Will unlocking the PDF alter its text, images, or formatting?",
        a: "No. The document's internal vector text, fonts, and images remain identical; only the encryption wrapper is safely stripped."
      }
    ],
    features: [
      { title: "Permanent Lock Removal", desc: "Eliminates repetitive password prompts for authorized files" },
      { title: "Zero Quality Loss", desc: "Preserves identical vector text, form fields, and image streams" },
      { title: "Workflow Enabler", desc: "Unlocked PDFs can now be freely merged, compressed, and signed" },
      { title: "Complete Privacy", desc: "Decryption keys never leave your physical device's local memory" }
    ]
  },

  inv_mk: {
    overview: [
      "The Invoice Maker is a streamlined, professional invoicing suite for freelancers, contractors, small businesses, and agencies. Generate clean, branded PDF invoices with automated line-item subtotals, custom tax rates (GST, VAT, Sales Tax), discounts, payment terms, and company logos in seconds.",
      "Most online invoice tools require creating an account, paying recurring subscriptions, or storing your private client lists and revenue figures on their servers. Resizer Tools generates beautiful vector invoices locally in your browser with zero data harvesting."
    ],
    steps: [
      "Enter your business details, client billing information, and invoice number.",
      "Add billing line items with descriptions, quantities, and unit prices (totals calculate automatically).",
      "Apply applicable tax rates, shipping fees, or discounts.",
      "Download a sleek, print-ready corporate PDF invoice ready to email to your client."
    ],
    faq: [
      {
        q: "Can I add my business logo to the generated invoice?",
        a: "Yes. You can upload your company logo or badge, which is embedded directly onto the PDF header."
      },
      {
        q: "Does this invoice format comply with standard tax accounting requirements?",
        a: "Yes. The generated invoice includes formal fields for tax identification numbers (GSTIN, VAT, EIN), itemized breakdowns, payment terms, and bank transfer details."
      },
      {
        q: "Are my client names, addresses, or revenue amounts saved on your server?",
        a: "No. All financial calculations and PDF rendering happen locally in your browser memory. We never store or analyze your commercial transactions."
      }
    ],
    features: [
      { title: "Automated Math Calculations", desc: "Calculates subtotals, custom tax rates, and discounts dynamically" },
      { title: "Custom Logo Embedding", desc: "Upload transparent logos for professional corporate branding" },
      { title: "Universal Currency Support", desc: "Generate invoices in USD ($), EUR (€), GBP (£), INR (₹), and more" },
      { title: "Client Privacy Protection", desc: "Customer lists and billing figures remain 100% confidential" }
    ]
  },

  res_make: {
    overview: [
      "The ATS Resume Builder generates clean, recruiter-approved single-column resumes designed specifically to pass modern Applicant Tracking Systems (ATS) used by major employers (Workday, Greenhouse, Lever, Taleo). Built with structured semantic formatting, it prevents parsing errors common in overly stylized graphic resumes.",
      "By eliminating complex multi-column tables, text boxes, and background graphics that confuse automated ATS parsers, your career experience, education, and technical skills are indexed accurately by recruiter search algorithms. Edit with live real-time preview and export instantly."
    ],
    steps: [
      "Fill in your contact information, target job title, and professional summary.",
      "Add your work experience, company names, employment dates, and measurable bullet points.",
      "Input educational credentials, degrees, institutions, and core technical skills.",
      "Watch the live real-time ATS preview sync as you type, then download your job-ready PDF resume."
    ],
    faq: [
      {
        q: "Why do Applicant Tracking Systems (ATS) reject two-column or graphic resumes?",
        a: "ATS software parses resumes into plain text fields. Complex multi-column tables, floating text boxes, and icons frequently cause parsers to scramble content order or drop entire experience sections. Standard single-column formats ensure 100% parsing accuracy."
      },
      {
        q: "Is this resume builder truly free, or is there a paywall at the download step?",
        a: "Resizer Tools is 100% free with no surprise paywalls. You can generate and download as many customized resumes as you need without signing up or entering a credit card."
      },
      {
        q: "Can I customize the resume for different job applications?",
        a: "Yes. You can quickly tweak your technical skills, professional summary, and job bullet points to match specific job descriptions and download tailored PDFs."
      },
      {
        q: "Is my personal contact information or career history logged?",
        a: "No. All resume data is handled strictly in your browser session and is never uploaded, tracked, or sold to recruiters or advertisers."
      }
    ],
    features: [
      { title: "ATS Parser Compliant", desc: "Single-column semantic hierarchy designed for Workday & Greenhouse" },
      { title: "Real-Time Paper Preview", desc: "Live preview updates dynamically as you type your career details" },
      { title: "Standard Typography", desc: "Clean serif and sans-serif fonts tested for high readability" },
      { title: "Zero Paywalls", desc: "Download clean, unwatermarked PDF resumes with zero restrictions" }
    ]
  },

  num_pdf: {
    overview: [
      "The Page Numbers utility stamps sequential page numbering onto multi-page PDF documents. Essential for legal briefs, academic dissertations, financial prospectuses, and manuals, it lets you position page numbers at the top or bottom of pages with customizable formats (e.g. 'Page 1 of 20', '1', '- 1 -').",
      "By updating the PDF vector content streams client-side, page numbers are injected cleanly without re-compressing underlying photos or shifting existing text margins."
    ],
    steps: [
      "Upload the multi-page PDF document you want to number.",
      "Choose your preferred page number position: Bottom Center, Bottom Right, Top Center, or Top Right.",
      "Select your numbering format style (e.g., '1', 'Page 1', 'Page 1 of 10').",
      "Download your neatly numbered PDF document ready for formal filing or binding."
    ],
    faq: [
      {
        q: "Can I exclude the cover page from being numbered?",
        a: "Yes. You can set the numbering start page to begin on page 2 or 3, leaving your cover sheet and table of contents clean."
      },
      {
        q: "Does adding page numbers shrink or modify the original content?",
        a: "No. Page numbers are stamped as a non-destructive vector overlay. The underlying text, diagrams, and margins remain identical."
      },
      {
        q: "Are legal documents safe to number with this tool?",
        a: "Yes. Because processing executes 100% locally in your browser memory, confidential court exhibits and filings are never uploaded to the cloud."
      }
    ],
    features: [
      { title: "Flexible Positioning", desc: "Place page numbers at bottom-center, bottom-right, or headers" },
      { title: "Custom Numbering Formats", desc: "Choose '1 of N', 'Page 1', or simple numeric index styles" },
      { title: "Cover Page Exclusion", desc: "Skip title sheets and start numbering on any specified page" },
      { title: "Zero Cloud Uploads", desc: "Confidential academic and legal briefs remain strictly on your machine" }
    ]
  },

  qr_gen: {
    overview: [
      "The QR Generator creates high-resolution, scannable QR codes for website URLs, Wi-Fi network credentials, contact cards (vCard), plain text, and phone numbers. Featuring adjustable error correction levels and customizable foreground/background colors, codes are optimized for both digital displays and physical print marketing.",
      "Unlike many commercial QR generators that create redirect links that expire unless you pay a monthly fee, Resizer Tools generates direct, static QR codes that never expire and require zero subscriptions."
    ],
    steps: [
      "Choose your QR content type: Website URL, Wi-Fi network, plain text, or phone number.",
      "Enter your destination link or data payload into the input field.",
      "Customize colors, border margins, and error correction levels (L, M, Q, H).",
      "Download your high-resolution QR code as a crisp, scalable PNG or SVG image."
    ],
    faq: [
      {
        q: "Will the QR codes generated here ever expire?",
        a: "Never. We generate static QR codes that encode your data directly into the pixel matrix. They do not rely on redirect servers and will work permanently."
      },
      {
        q: "What is QR error correction and which level should I choose?",
        a: "Error correction (using Reed-Solomon algorithms) allows QR codes to be scanned even if partially smudged, torn, or covered by a logo. Level M (15%) is standard for web use; Level H (30%) is best for outdoor physical signs and merchandise."
      },
      {
        q: "Can I print these QR codes on business cards and posters?",
        a: "Yes. You can export high-resolution PNG or vector images that maintain sharp edges when scaled to large poster formats."
      }
    ],
    features: [
      { title: "Permanent Static Codes", desc: "No redirect middleman, zero monthly fees, and never expires" },
      { title: "Reed-Solomon Error Correction", desc: "Ensures scannability even if codes are partially obscured or damaged" },
      { title: "Wi-Fi & vCard Formats", desc: "One-scan network connection and contact address book importing" },
      { title: "High-Resolution Export", desc: "Pristine vector and raster rendering ready for business cards and signs" }
    ]
  },

  sig_cr: {
    overview: [
      "The Signature Creator lets you draw, refine, and export authentic digital signatures as transparent PNG images. Ideal for signing PDF documents, adding personal sign-offs to emails, stamping digital certificates, and inserting signatures into Google Docs and Microsoft Word.",
      "Built with cubic Bezier curve interpolation and pressure smoothing, our signature pad reproduces the natural fluidity of a physical pen. Export your signature with pure transparent backgrounds in black, blue, or gold ink."
    ],
    steps: [
      "Draw your handwritten signature using your mouse, trackpad, finger, or digital stylus.",
      "Select your ink color (Formal Black, Legal Navy Blue, or Luxury Gold).",
      "Adjust stroke thickness for fine-point or bold fountain pen aesthetics.",
      "Download your transparent PNG signature file, ready to insert into any document."
    ],
    faq: [
      {
        q: "Does the exported signature have a transparent background?",
        a: "Yes. The signature is rendered with an alpha transparency channel, allowing you to place it over signature lines, shaded boxes, or colored letterheads without ugly white borders."
      },
      {
        q: "Is it safe to create my personal signature on this website?",
        a: "Yes. The drawing canvas operates entirely in client-side browser memory. Your signature path is never uploaded, stored, or analyzed on any external server."
      },
      {
        q: "Can I use an Apple Pencil or stylus to sign?",
        a: "Yes. Our HTML5 canvas captures high-resolution stylus touch events for authentic, smooth penmanship on iPads and touch laptops."
      }
    ],
    features: [
      { title: "Pure Alpha Transparency", desc: "Seamlessly drops onto contracts and letterheads without white boxes" },
      { title: "Cubic Bezier Smoothing", desc: "Smooths jittery mouse lines for natural fountain-pen calligraphy" },
      { title: "Multi-Ink Selection", desc: "Choose between classic legal blue, deep black, and custom tones" },
      { title: "100% Private Canvas", desc: "Signatures are drawn in local memory and never transmitted online" }
    ]
  },

  nfc_tl: {
    overview: [
      "Web NFC Studio enables reading and writing NFC (Near Field Communication) tags directly through modern Android mobile browsers using the Web NFC API. Program physical NDEF tags to launch website URLs, share contact vCards, trigger home automation shortcuts, or inspect raw NFC chip metadata.",
      "Historically, programming NFC tags required installing ad-supported native mobile apps. Our browser utility provides a clean, zero-bloat interface to read and write NDEF records with complete hardware security."
    ],
    steps: [
      "Ensure NFC is enabled in your Android device settings and open this tool in Chrome.",
      "Select your task: Read NFC Tag or Write NDEF Record (URL, Text, or Contact).",
      "Click Start Scan or Write, then hold your physical NFC tag against the back of your phone.",
      "Receive instant confirmation once the tag is successfully read or programmed."
    ],
    faq: [
      {
        q: "Which devices and browsers support Web NFC?",
        a: "Web NFC is natively supported on Android devices running Google Chrome (version 89 or newer) with hardware NFC enabled. iOS currently restricts Web NFC access in browser environments."
      },
      {
        q: "What types of NFC tags can I program?",
        a: "Standard NTAG213, NTAG215, NTAG216, and Mifare Ultralight chips formatted with the universal NFC Forum NDEF standard are supported."
      },
      {
        q: "Is any data stored when reading my NFC tags?",
        a: "No. Tag serial numbers and NDEF records are displayed in your active browser session and are never transmitted to external analytics servers."
      }
    ],
    features: [
      { title: "Native Web NFC API", desc: "Interact with physical RFID/NFC chips directly from your browser" },
      { title: "NDEF URL & Text Writing", desc: "Program tags to open websites, share contact cards, or launch tasks" },
      { title: "Tag Diagnostics", desc: "Inspect chip serial numbers (UID), memory capacity, and record types" },
      { title: "Hardware-Level Security", desc: "Direct browser-to-chip communication with zero remote logging" }
    ]
  },

  shot_gen: {
    overview: [
      "App Store Screenshot Studio is a professional design tool for mobile app developers, indie hackers, and product managers. Generate pixel-perfect, high-converting marketing screenshots for Apple App Store (iPhone 6.7\", 6.5\", 5.5\", iPad 13\") and Google Play Store (Phone, 7\" & 10\" Tablet) with authentic hardware bezels, custom typography, and batch export.",
      "Featuring pixel-perfect Apple Dynamic Island optics, curved notch geometry, and iOS status bars, screenshots conform strictly to App Store Connect guidelines. Process multiple slides simultaneously with client-side canvas rendering and zero server uploads."
    ],
    steps: [
      "Select your target device preset (e.g. iPhone 6.7\" Pro Max 1290x2796px or Android 1080x2400px).",
      "Upload your raw mobile app screenshots into the device frames.",
      "Customize headlines, subtitles, feature badge pills, font families, and luxury gradient backgrounds.",
      "Adjust hardware frame bezels, 3D tilt angles, and zoom scales, then export single slides or batch download all slides."
    ],
    faq: [
      {
        q: "Does this tool generate exact dimensions required by Apple App Store Connect?",
        a: "Yes. Presets match official App Store dimensions: 6.7\" Super Retina (1290x2796 px), 6.5\" Display (1242x2688 px), 5.5\" Display (1242x2208 px), and 13\" iPad Pro (2064x2752 px)."
      },
      {
        q: "How does the Dynamic Island and Apple curved notch render?",
        a: "Our studio renders mathematically accurate Apple hardware cutouts—including the 125pt x 37pt capsule Dynamic Island with camera lens glare and smooth quadratic Bezier ear notch transitions."
      },
      {
        q: "Can I customize the background colors and gradients?",
        a: "Yes. Choose from luxury dark-gold, executive dark slate, emerald pro, and cyber purple ASO presets, or create custom linear gradients and solid colors."
      },
      {
        q: "Are my unreleased app screenshots safe from public leaks?",
        a: "Yes. All slide compositing and high-DPI canvas rendering occur 100% inside your browser memory. Unreleased designs and confidential UI mocks are never uploaded to any server."
      }
    ],
    features: [
      { title: "Authentic Apple Bezels", desc: "Accurate Dynamic Island, curved notch, and status bar rendering" },
      { title: "Store-Compliant Dimensions", desc: "Instant export at 1290x2796px, 1242x2688px, and Play Store resolutions" },
      { title: "ASO Color Studio", desc: "Luxury dark-gold, titanium, and custom gradient marketing palettes" },
      { title: "Batch PNG Export", desc: "Export entire slide sequences in seconds with zero cloud uploads" }
    ]
  }
};
