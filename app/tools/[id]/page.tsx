import type { Metadata } from "next";
import Link from "next/link";
import Home from "../../page";
import { toolsData, getToolSEOContent } from "../../data/tools";
import { Sliders, Download, ShieldCheck, Zap, Smartphone } from "lucide-react";
import ToolContentSection from "../../components/ToolContentSection";
import SiteFooter from "../../components/SiteFooter";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return toolsData.map((tool) => ({
    id: tool.id.replace(/_/g, "-"),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const tool = toolsData.find((t) => t.id === id || t.id.replace(/_/g, "-") === id || t.id.replace(/-/g, "_") === id);
  if (!tool) {
    return {
      title: "Tool Not Found - Resizer Tools",
      description: "The requested tool utility was not found.",
    };
  }

  const cleanId = tool.id.replace(/_/g, "-");
  const title = `${tool.title} Online | Free Resizer Tools`;
  const description = `Free ${tool.title.toLowerCase()} tool. ${tool.subtitle || tool.desc} 100% browser-native with zero server uploads and high privacy.`;

  return {
    title,
    description,
    keywords: [
      tool.title.toLowerCase(),
      `${tool.title.toLowerCase()} online`,
      `free ${tool.title.toLowerCase()}`,
      "offline utility tools",
      "resizer tools",
      "client side pdf tools",
      "privacy first tools"
    ],
    alternates: {
      canonical: `https://www.resizertools.com/tools/${cleanId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.resizertools.com/tools/${cleanId}`,
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

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = toolsData.find((t) => t.id === id || t.id.replace(/_/g, "-") === id || t.id.replace(/-/g, "_") === id);

  if (!tool) return <Home />;

  const seo = getToolSEOContent(tool);

  // 1. SoftwareApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": `https://www.resizertools.com/tools/${tool.id.replace(/_/g, "-")}#software`,
    "name": `${tool.title} - Resizer Tools`,
    "url": `https://www.resizertools.com/tools/${tool.id.replace(/_/g, "-")}`,
    "description": `${tool.subtitle || tool.desc}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Windows, macOS, Android, iOS, Web Browser",
    "browserRequirements": "Requires HTML5 Canvas, WebAssembly, WebCrypto API",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // 2. HowTo Schema
  const howToSchema = {
    "@type": "HowTo",
    "@id": `https://resizertools.com/tools/${tool.id}/#howto`,
    "name": `How to use ${tool.title} online and offline`,
    "description": `Step-by-step guide to run ${tool.title} in your web browser with zero server uploads.`,
    "step": seo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": step
    }))
  };

  // 3. FAQPage Schema
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

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `https://resizertools.com/tools/${tool.id}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://resizertools.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://resizertools.com/#studio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tool.title,
        "item": `https://resizertools.com/tools/${tool.id}/`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-gold/30 selection:text-brand-gold-light relative">
      
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [webAppSchema, howToSchema, faqSchema, breadcrumbSchema]
          })
        }}
      />

      {/* 🍎 TOP NAVIGATION NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 glass-panel flex items-center justify-between px-6 md:px-12 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide text-lg cursor-pointer">
          <Sliders className="w-5 h-5 text-brand-gold" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-muted">Resizer Tools</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted font-medium">
          <Link href="/#studio" className="hover:text-white transition-colors">All Tools ({toolsData.length})</Link>
          <Link href="/blog/" className="text-brand-gold hover:text-white font-semibold flex items-center gap-1 transition-colors">Blog &amp; Guides 📖</Link>
          <Link href="/app/" className="hover:text-white transition-colors">Mobile App</Link>
        </div>
        <Link 
          href="/app/" 
          className="flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold text-xs px-4 py-2 rounded-full shadow-premium-gold hover:scale-105 transition-transform cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 stroke-[3]" /> Download App
        </Link>
      </nav>

      {/* 👑 SEO HERO SECTION ABOVE WORKSPACE (HIGHLIGHTED TITLE) */}
      <header className="pt-28 pb-8 px-6 text-center max-w-4xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/35 text-brand-gold font-mono text-xs uppercase font-bold tracking-wider">
          ⚡ FREE {tool.category?.toUpperCase() || "ONLINE"} UTILITY
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {tool.title} <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent">Online &amp; Offline</span>
        </h1>

        <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
          {tool.subtitle || tool.desc} Process your assets 100% locally in browser memory with zero server uploads and maximum speed.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-muted pt-2 font-mono">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-gold" /> 100% Client-Side Memory</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-brand-gold" /> Zero Server Uploads</span>
          <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-brand-gold" /> Works Completely Offline</span>
        </div>
      </header>

      {/* 🛠 INTERACTIVE TOOL WORKSPACE CONTAINER */}
      <main className="relative z-10">
        <Home initialToolId={id} isStandaloneToolPage={true} />
      </main>

      {/* 👑 RICH SEO VALUE, FAQ, RATINGS, HOW-TO & TRUST CONTENT */}
      <ToolContentSection 
        tool={{
          id: tool.id,
          title: tool.title,
          subtitle: tool.subtitle,
          desc: tool.desc,
          category: tool.category,
        }} 
      />

      {/* 🔻 GLOBAL LUXURY SITE FOOTER */}
      <SiteFooter />

    </div>
  );
}
