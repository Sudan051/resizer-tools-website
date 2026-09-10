export const dynamic = "force-static";

export async function GET() {
  const content = `# Resizer Tools (resizertools.com) - 100% Client-Side PDF & Image Utility Suite

> Resizer Tools is a free, privacy-first suite of 28 browser-native web utilities for image compression, image downscaling, PDF compilation, document signing, PDF protection, screenshot generation, and offline QR/NFC tools. All file processing runs 100% locally in browser memory via HTML5 Canvas API, WebCrypto API, and pdf-lib. Zero files or document metadata are ever uploaded to external servers.

## Core Security & Architecture Guarantees
- Zero Server Uploads: Files never leave the user's local device memory.
- 100% Offline Capability: Once the page is loaded, users can turn off Wi-Fi and continue processing files.
- Zero Upload Lag: Processing speed depends on local CPU/GPU, eliminating network bandwidth delays.
- Privacy Compliance: GDPR and Razorpay audit compliant with zero tracking of confidential file content.

## Available Utility Tools

### Image Tools
- Image Compressor (https://www.resizertools.com/tools/img-comp): Reduce image file size (JPEG, PNG, WebP) without losing quality.
- Image Resizer (https://www.resizertools.com/tools/img-res): Resize images by exact pixels, percentages, or aspect ratios.
- Passport Photo Sheet Generator (https://www.resizertools.com/tools/prnt-sheet): Arrange passport photos into printable grid sheets.
- Image Format Converter (https://www.resizertools.com/tools/img-conv): Convert between HEIC, WebP, PNG, and JPEG formats locally.
- Image to PDF (https://www.resizertools.com/tools/img-pdf): Convert multiple images into a single PDF document.
- PDF to Images (https://www.resizertools.com/tools/pdf-imgs): Convert PDF pages to high-res PNG/JPG images.

### PDF Editing & Security Tools
- PDF Reducer / Compressor (https://www.resizertools.com/tools/red-pdf): Downscale and compress PDF files.
- Merge PDF (https://www.resizertools.com/tools/mrg-pdf): Combine multiple PDF documents into one single file.
- Split PDF (https://www.resizertools.com/tools/spl-pdf): Extract specific page ranges or split every page into separate PDFs.
- Rotate PDF (https://www.resizertools.com/tools/rot-pdf): Permanently rotate individual or all pages inside a PDF.
- Sign PDF (https://www.resizertools.com/tools/sgn-pdf): Draw, upload, or place digital signatures onto PDF documents.
- PDF Watermark (https://www.resizertools.com/tools/wtrmk-pdf): Add custom text watermarks onto PDF pages.
- Protect PDF (https://www.resizertools.com/tools/prt-pdf): Protect PDF documents with AES password encryption.
- Unlock PDF (https://www.resizertools.com/tools/unl-pdf): Remove password protection from authorized PDF files.
- Extract PDF Pages (https://www.resizertools.com/tools/ext-pdf): Pull specific pages out of a PDF into a new document.
- Delete PDF Pages (https://www.resizertools.com/tools/del-pdf): Remove unwanted pages from PDF files.
- Reorder PDF Pages (https://www.resizertools.com/tools/ord-pdf): Drag and rearrange PDF page order.
- PDF Page Numbers (https://www.resizertools.com/tools/num-pdf): Add custom page numbers to PDF documents.

### Advanced Utilities & Hardware Connectors
- QR Code Generator (https://www.resizertools.com/tools/qr-gen): Create customized high-density vector QR codes.
- Digital Signature Creator (https://www.resizertools.com/tools/sig-cr): Draw and export transparent PNG signatures.
- Invoice Generator (https://www.resizertools.com/tools/inv-mk): Create professional printable PDF invoices.
- ATS Resume Builder (https://www.resizertools.com/tools/res-make): Build ATS-compliant professional PDF resumes.
- App Store Screenshot Studio (https://www.resizertools.com/shots): Design App Store & Google Play marketing screenshots.

## Knowledge Base & Technical Blog
- Blog Hub: https://www.resizertools.com/blog
- Image Compression Guide 2026: https://www.resizertools.com/blog/image-compression-guide-2026
- Client-Side PDF Security Whitepaper: https://www.resizertools.com/blog/client-side-pdf-security
- ATS Resume Optimization Guide: https://www.resizertools.com/blog/ats-resume-optimization-guide
- Web NFC & QR Privacy: https://www.resizertools.com/blog/nfc-and-qr-code-privacy
- How to Compress PDF Without Losing Quality: https://www.resizertools.com/blog/how-to-compress-pdf-without-losing-quality
- HEIC to JPG Conversion Explained: https://www.resizertools.com/blog/heic-to-jpg-conversion-explained
- Digital Signature Legal Validity Guide: https://www.resizertools.com/blog/digital-signature-legal-validity-guide
- Passport Photo Sheet Guide: https://www.resizertools.com/blog/how-to-create-passport-photo-sheet
- Merge PDF Files Offline: https://www.resizertools.com/blog/how-to-merge-pdf-files-offline
- QR Code Security Practices: https://www.resizertools.com/blog/qr-code-security-best-practices

## Official Resources & Links
- Web App Homepage: https://www.resizertools.com
- Interactive Founder Digital Card: https://www.resizertools.com/card
- Mobile App Download Page: https://www.resizertools.com/app
- Apple App Store iOS App: https://apps.apple.com/us/app/resizer-tools-pdf-image-qr/id6785073828
- Google Play Store Android App: https://play.google.com/store/apps/details?id=com.resizertools.app
- Privacy Policy: https://www.resizertools.com/privacy
- Terms of Service: https://www.resizertools.com/terms
- Creator / Developer: Saurabh Kumar Sharma (iOS Engineer & Founder)
- Support Contact: Saurabhsudan051@gmail.com
- LinkedIn: https://www.linkedin.com/in/pandit-saurabh-kumar-sharma/
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
