export const dynamic = "force-static";

export async function GET() {
  const content = `# Resizer Tools (resizertools.com) - 100% Client-Side PDF & Image Utility Suite

> Resizer Tools is a free, privacy-first suite of 26 browser-native web utilities for image compression, image downscaling, PDF compilation, document signing, PDF protection, and offline QR/NFC tools. All file processing runs 100% locally in browser memory via HTML5 Canvas API, WebCrypto API, and pdf-lib. Zero files or document metadata are ever uploaded to external servers.

## Core Security & Architecture Guarantees
- Zero Server Uploads: Files never leave the user's local device memory.
- 100% Offline Capability: Once the page is loaded, users can turn off Wi-Fi and continue processing files.
- Zero Upload Lag: Processing speed depends on local CPU/GPU, eliminating network bandwidth delays.
- Privacy Compliance: GDPR and Razorpay audit compliant with zero tracking of confidential file content.

## Available Utility Tools

### Image Tools
- Image Compressor (https://resizertools.com/tools/img_comp/): Reduce image file size (JPEG, PNG, WebP) without losing quality.
- Image Resizer (https://resizertools.com/tools/img_res/): Resize images by exact pixels, percentages, or aspect ratios.
- Passport Photo Sheet Generator (https://resizertools.com/tools/passport_print/): Arrange passport photos into printable 4x6 grid sheets.
- Image Format Converter (https://resizertools.com/tools/img_conv/): Convert between HEIC, WebP, PNG, and JPEG formats locally.
- Crop Image (https://resizertools.com/tools/img_crop/): Crop photos with custom aspect ratios.
- Flip / Rotate Image (https://resizertools.com/tools/img_rotate/): Rotate or mirror images instantly.
- Image to PDF (https://resizertools.com/tools/img_pdf/): Convert multiple images into a single PDF document.
- DPI Converter (https://resizertools.com/tools/dpi_conv/): Change image DPI metadata for high-resolution printing.

### PDF Editing & Security Tools
- PDF Reducer / Compressor (https://resizertools.com/tools/pdf_reduce/): Downscale embedded images in PDF files to shrink document size.
- Merge PDF (https://resizertools.com/tools/pdf_merge/): Combine multiple PDF documents into one single file.
- Split PDF (https://resizertools.com/tools/pdf_split/): Extract specific page ranges or split every page into separate PDFs.
- Rotate PDF (https://resizertools.com/tools/pdf_rotate/): Permanently rotate individual or all pages inside a PDF.
- PDF Signer (https://resizertools.com/tools/pdf_sign/): Draw, upload, or type digital signatures onto PDF documents.
- PDF Watermark (https://resizertools.com/tools/pdf_watermark/): Add custom text or image watermarks onto PDF pages.
- Lock PDF (Encrypt) (https://resizertools.com/tools/pdf_lock/): Protect PDF documents with AES password encryption.
- Unlock PDF (Decrypt) (https://resizertools.com/tools/pdf_unlock/): Remove password protection from authorized PDF files.
- Extract PDF Pages (https://resizertools.com/tools/pdf_extract/): Pull specific pages out of a PDF into a new document.
- Delete PDF Pages (https://resizertools.com/tools/pdf_delete/): Remove unwanted pages from PDF files.
- Reorder PDF Pages (https://resizertools.com/tools/pdf_reorder/): Drag and rearrange PDF page order.
- PDF to Image Converter (https://resizertools.com/tools/pdf_to_img/): Render PDF pages into PNG or JPEG images.

### Advanced Utilities & Hardware Connectors
- QR Code Scanner & Generator (https://resizertools.com/tools/qr_tool/): Create or scan QR codes offline.
- NFC Tag Writer & Reader (https://resizertools.com/tools/nfc_tool/): Read and write Web NFC tags natively.
- Invoice Generator (https://resizertools.com/tools/invoice_make/): Create client-side PDF invoices with zero server logs.
- ATS Resume Builder (https://resizertools.com/tools/res_make/): Build ATS-compliant professional PDF resumes 100% locally in browser memory with zero server uploads.

## Knowledge Base & Technical Blog
- Blog Hub: https://resizertools.com/blog/
- Image Compression Guide 2026: https://resizertools.com/blog/image-compression-guide-2026/
- Client-Side PDF Security Whitepaper: https://resizertools.com/blog/client-side-pdf-security/
- ATS Resume Optimization Guide: https://resizertools.com/blog/ats-resume-optimization-guide/
- Web NFC & QR Privacy: https://resizertools.com/blog/nfc-and-qr-code-privacy/
- How to Compress PDF Without Losing Quality: https://resizertools.com/blog/how-to-compress-pdf-without-losing-quality/
- HEIC to JPG Conversion Explained: https://resizertools.com/blog/heic-to-jpg-conversion-explained/
- Digital Signature Legal Validity Guide: https://resizertools.com/blog/digital-signature-legal-validity-guide/
- Passport Photo Sheet Guide: https://resizertools.com/blog/how-to-create-passport-photo-sheet/
- Merge PDF Files Offline: https://resizertools.com/blog/how-to-merge-pdf-files-offline/
- QR Code Security Practices: https://resizertools.com/blog/qr-code-security-best-practices/

## Official Resources & Links
- Web App Homepage: https://resizertools.com/
- Interactive Founder Digital Card: https://resizertools.com/card/
- Mobile App Download Page: https://resizertools.com/app/
- Apple App Store iOS App: https://apps.apple.com/us/app/resizer-tools-pdf-image-qr/id6785073828
- Google Play Store Android App: https://play.google.com/store/apps/details?id=com.resizertools.app
- Privacy Policy: https://resizertools.com/privacy/
- Terms of Service: https://resizertools.com/terms/
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
