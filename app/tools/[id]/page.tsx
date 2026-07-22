import type { Metadata } from "next";
import Home from "../../page";
import { toolsData } from "../../data/tools";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return toolsData.map((tool) => ({
    id: tool.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const tool = toolsData.find((t) => t.id === params.id);
  if (!tool) {
    return {
      title: "Tool Not Found - Resizer Tools",
      description: "The requested tool utility was not found.",
    };
  }

  const title = `${tool.title} - Free Online PDF & Image Utility`;
  const description = `Use our free, local ${tool.title.toLowerCase()} tool. ${tool.subtitle || tool.desc} 100% browser-native with zero server latency or data uploads.`;

  return {
    title,
    description,
    keywords: [
      tool.title.toLowerCase(),
      `${tool.title.toLowerCase()} online`,
      `free ${tool.title.toLowerCase()}`,
      "offline utility tools",
      "resizer tools"
    ],
    alternates: {
      canonical: `https://resizertools.com/tools/${tool.id}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://resizertools.com/tools/${tool.id}/`,
      siteName: "Resizer Tools",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = toolsData.find((t) => t.id === params.id);

  return (
    <>
      {tool && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": `${tool.title} - Resizer Tools`,
              "url": `https://resizertools.com/tools/${tool.id}/`,
              "description": `${tool.subtitle || tool.desc}`,
              "applicationCategory": "Utility",
              "operatingSystem": "All",
              "browserRequirements": "Requires HTML5, WebCrypto API, Canvas API",
              "softwareVersion": "1.0",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      )}
      <Home initialToolId={params.id} />
    </>
  );
}
