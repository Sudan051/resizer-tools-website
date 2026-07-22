import type { Metadata } from "next";
import Home from "../../page";
import { toolsData, getToolSEOContent } from "../../data/tools";

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

  if (!tool) return <Home />;

  const seo = getToolSEOContent(tool);

  const webAppSchema = {
    "@type": "WebApplication",
    "@id": `https://resizertools.com/tools/${tool.id}/#webapp`,
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
  };

  const howToSchema = {
    "@type": "HowTo",
    "@id": `https://resizertools.com/tools/${tool.id}/#howto`,
    "name": `How to use ${tool.title} locally`,
    "description": `Step-by-step guide to run ${tool.title} in your web browser with zero server uploads.`,
    "step": seo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": step
    }))
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `https://resizertools.com/tools/${tool.id}/#faq`,
    "mainEntity": seo.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webAppSchema, howToSchema, faqSchema]
          })
        }}
      />
      <Home initialToolId={params.id} />
      
      {/* 📝 SEO Structured Text Section (For Google and AI Crawler Indexability) */}
      <section className="bg-brand-black/95 border-t border-white/5 py-20 px-6 text-left relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-brand-gold">📖</span> How to use {tool.title} Online & Offline
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed font-light">
              Follow these simple browser-native instructions to process your documents and images without server uploads:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-brand-muted font-light">
              {seo.steps.map((step, idx) => (
                <li key={idx} className="marker:text-brand-gold marker:font-bold">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-brand-gold">🛡️</span> Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {seo.faq.map((item, idx) => (
                <div key={idx} className="space-y-1 border-l-2 border-brand-gold/30 pl-4">
                  <h3 className="text-sm font-bold text-white">{item.q}</h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
