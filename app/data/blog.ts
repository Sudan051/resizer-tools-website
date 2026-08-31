export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "image-compression-guide-2026",
    title: "Image Compression Guide 2026: WebP, JPEG & PNG",
    excerpt: "Learn how modern browser-native Canvas and WebGL APIs downscale images up to 80% with zero quality loss and absolute privacy.",
    date: "August 8, 2026",
    readTime: "6 min read",
    author: "Saurabh Kumar Sharma",
    category: "Image Optimization",
    content: `
# Image Compression Guide 2026: WebP, JPEG & PNG Optimization

In the modern digital landscape, image optimization is no longer just a technical luxury—it is a mandatory requirement for web performance, Core Web Vitals (CWV), and user engagement. High-resolution imagery can severely degrade website loading speeds, inflate cellular data costs, and trigger search engine ranking penalties.
    `
  },
  {
    slug: "client-side-pdf-security",
    title: "Why Zero-Upload PDF Processing is Future of Security",
    excerpt: "Discover why uploading sensitive contracts, tax records, and NDA documents to server-side PDF converters is a major compliance risk.",
    date: "August 8, 2026",
    readTime: "7 min read",
    author: "Saurabh Kumar Sharma",
    category: "Document Privacy",
    content: `
# Why Zero-Upload PDF Processing is the Future of Security

Protecting sensitive business documentation requires adopting tools built with privacy as a foundational architectural principle. With zero-upload client-side PDF utilities, organizations and individuals can handle legal paperwork with complete confidence and zero risk.
    `
  },
  {
    slug: "ats-resume-optimization-guide",
    title: "How to Build an ATS-Friendly Resume in 2026",
    excerpt: "Master the rules of Applicant Tracking Systems (ATS) to ensure your tech resume passes automated recruiter filters every single time.",
    date: "August 8, 2026",
    readTime: "8 min read",
    author: "Saurabh Kumar Sharma",
    category: "Career & Productivity",
    content: `
# How to Build an ATS-Friendly Resume in 2026

Over 95% of Fortune 500 companies and top tech startups utilize Applicant Tracking Systems (ATS) to automatically screen job applications.
    `
  },
  {
    slug: "nfc-and-qr-code-privacy",
    title: "Offline QR & Web NFC Technology Security Guide",
    excerpt: "Explore how Web NFC and browser-native QR code generators enable contactless data transfer without intermediate tracking servers.",
    date: "August 8, 2026",
    readTime: "5 min read",
    author: "Saurabh Kumar Sharma",
    category: "Hardware & IoT",
    content: `
# Offline QR & Web NFC Technology Security Guide

Contactless data exchange has become an integral part of modern digital interactions. Learn how browser-native technologies protect scan privacy.
    `
  },
  {
    slug: "how-to-compress-pdf-without-losing-quality",
    title: "How to Compress PDF Files Without Losing Quality",
    excerpt: "Learn how to shrink PDF file sizes for email attachments, online applications, and portals while keeping text sharp and images crisp.",
    date: "August 19, 2026",
    readTime: "7 min read",
    author: "Saurabh Kumar Sharma",
    category: "PDF Optimization",
    content: `
# How to Compress PDF Files Without Losing Quality

Large PDF files can be a headache when submitting job applications or emailing reports. Learn five proven ways to compress PDF files efficiently without losing text sharpness.
    `
  },
  {
    slug: "heic-to-jpg-conversion-explained",
    title: "Understanding HEIC vs JPEG: iPhone Photo Guide",
    excerpt: "Discover why Apple uses HEIC photo format, why Windows and web forms reject it, and how to convert HEIC images to JPG 100% locally.",
    date: "August 19, 2026",
    readTime: "6 min read",
    author: "Saurabh Kumar Sharma",
    category: "Image Formats",
    content: `
# Understanding HEIC vs JPEG: iPhone Photo Conversion Guide

If you take photos on an iPhone, you have likely encountered the .HEIC file format. Learn how to convert HEIC photos to JPG format 100% offline.
    `
  },
  {
    slug: "digital-signature-legal-validity-guide",
    title: "Are Electronic PDF Signatures Legally Binding?",
    excerpt: "Learn about the legal status of electronic and digital signatures under ESIGN, eIDAS, and IT Act guidelines worldwide.",
    date: "August 19, 2026",
    readTime: "8 min read",
    author: "Saurabh Kumar Sharma",
    category: "Legal & Compliance",
    content: `
# Are Electronic PDF Signatures Legally Binding?

In the modern digital economy, remote contract signing has become standard practice. Learn how electronic signatures carry full legal validity under ESIGN, eIDAS, and IT Act frameworks.
    `
  },
  {
    slug: "how-to-create-passport-photo-sheet",
    title: "How to Create and Print Passport Photos at Home",
    excerpt: "Save money on passport photos by creating exact 3.5x4.5cm photo grid sheets for printing on standard 4x6 photo paper.",
    date: "August 19, 2026",
    readTime: "6 min read",
    author: "Saurabh Kumar Sharma",
    category: "Photo Printing",
    content: `
# How to Create and Print Passport Photos at Home

Visiting a commercial photo studio can be expensive. Learn how to crop your portrait to exact passport dimensions and layout print sheets for pennies.
    `
  },
  {
    slug: "how-to-merge-pdf-files-offline",
    title: "Step-by-Step Guide: Merging PDF Files Privately",
    excerpt: "Combine PDFs, reports, receipts, and scans into a single organized document without uploading data to external servers.",
    date: "August 19, 2026",
    readTime: "5 min read",
    author: "Saurabh Kumar Sharma",
    category: "PDF Management",
    content: `
# Step-by-Step Guide: Merging PDF Files Privately

Combining multiple PDF files into one clean document is essential for job applications and proposals. Learn how to merge PDFs locally in your browser.
    `
  },
  {
    slug: "qr-code-security-best-practices",
    title: "QR Code Security 101: Spot Scams and Stay Safe",
    excerpt: "Learn how quishing (QR phishing) scams work and how offline static QR code generators protect user data.",
    date: "August 19, 2026",
    readTime: "6 min read",
    author: "Saurabh Kumar Sharma",
    category: "Cybersecurity",
    content: `

Quishing occurs when attackers replace legitimate QR stickers in public places with fraudulent QR codes that point to phishing websites designed to steal credit card details or login credentials.

---

## 2. Best Practices for Safe QR Code Usage

- **Inspect Physical Stickers**: Check if a QR sticker has been pasted over an original poster in public areas.
- **Preview URLs Before Opening**: Ensure the target domain matches the official entity before submitting personal data.
- **Use Native Static QR Generators**: Avoid dynamic tracking QR generators that route your traffic through intermediate tracking servers.
- **Use Offline Scanners**: Tools like **[QR Scanner](/tools/qr-scan)** on Resizer Tools decode QR matrix codes locally in browser memory without sending data anywhere.
    `
  }
];
