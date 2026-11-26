import { blogPosts } from "../data/blog";
import { toolsData } from "../data/tools";

export const dynamic = "force-static";

export async function GET() {
  const toolLines = toolsData
    .map((t) => `- ${t.title} (https://www.resizertools.com/${t.slug}): ${t.desc}`)
    .join("\n");

  const blogLines = blogPosts
    .map((p) => `- ${p.title} (https://www.resizertools.com/blog/${p.slug}): ${p.excerpt}`)
    .join("\n");

  const content = `# Resizer Tools (https://www.resizertools.com) - 100% Client-Side PDF & Image Utility Suite

> Resizer Tools is a free, privacy-first suite of ${toolsData.length} browser-native web utilities for image compression, image resizing, PDF compilation, document signing, PDF protection, screenshot generation, and local QR/NFC utilities. All file processing runs 100% locally in browser memory via HTML5 Canvas API, WebCrypto API, Web NFC API, and pdf-lib. Zero files or document metadata are ever uploaded to external servers.

## Core Security & Architecture Guarantees
- Zero Server Uploads: Files never leave the user's local device memory.
- 100% Offline Capability: Once loaded, users can disconnect from Wi-Fi and continue processing files locally.
- Zero Upload Lag: Processing speed depends on local CPU/GPU, eliminating network bandwidth delays.
- Privacy Compliance: Designed under GDPR and CCPA data-minimization standards with transparent browser processing.

## All ${toolsData.length} Browser-Native Utility Tools
${toolLines}

## Knowledge Base & Technical Guides (${blogPosts.length} Articles)
- Blog Hub: https://www.resizertools.com/blog
${blogLines}

## Official Resources & Trust Pages
- Web App Homepage: https://www.resizertools.com
- About Us: https://www.resizertools.com/about
- Editorial & Testing Policy: https://www.resizertools.com/editorial
- Help Center & FAQ: https://www.resizertools.com/help
- Mobile App Download Page: https://www.resizertools.com/app
- Privacy Policy: https://www.resizertools.com/privacy
- Terms of Service: https://www.resizertools.com/terms
- Refund & Cancellation Policy: https://www.resizertools.com/refund
- Contact & Support: https://www.resizertools.com/contact
- Creator / Engineer: Saurabh Kumar Sharma
- Support Contact: Saurabhsudan051@gmail.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
