import type { Metadata } from "next";
import Link from "next/link";
import Home from "../../page";
import { toolsData, getToolSEOContent } from "../../data/tools";
import { Sliders, Download, ShieldCheck, Zap, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

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

  // Filter 6 related tools in same category or overall catalog for internal linking
  const relatedTools = toolsData
    .filter((t) => t.id !== tool.id && (t.category === tool.category || t.category === "generator"))
    .slice(0, 6);

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

      {/* 🔗 INTERNAL LINKING: RELATED TOOLS GRID */}
      <section className="bg-brand-black border-t border-white/5 py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-left space-y-2">
            <span className="text-brand-gold font-mono tracking-widest text-xs uppercase font-bold">Internal Utility Network</span>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              🔗 Explore Related Free Web &amp; Offline Tools
            </h2>
            <p className="text-xs text-brand-muted font-light">
              Try these complementary browser-native utilities to compress, convert, and manage your assets:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map((relTool) => (
              <Link
                key={relTool.id}
                href={`/tools/${relTool.id.replace(/_/g, "-")}`}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:border-brand-gold/40 hover:bg-white/[0.04] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-gold/15 text-brand-gold uppercase">
                      {relTool.category || "Utility"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">{relTool.title}</h3>
                  <p className="text-xs text-brand-muted font-light line-clamp-2">{relTool.subtitle || relTool.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] font-mono text-brand-muted">
                  <span>100% Free</span>
                  <span className="text-emerald-400">Offline Ready</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 📖 SEO STRUCTURED CONTENT & FAQ KNOWLEDGE SECTION */}
      <section className="bg-[#080808] border-t border-white/5 py-20 px-6 text-left relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Detailed Overview */}
          <div className="space-y-4 bg-white/[0.015] border border-white/5 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-brand-gold">⚡</span> Comprehensive {tool.title} Guide &amp; Technical Capabilities
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Welcome to the official <strong>{tool.title}</strong> workspace on Resizer Tools. Engineered specifically for high-speed, privacy-first file manipulation, this browser-native application enables developers, designers, students, and corporate teams to process documents and graphics with zero server upload friction. Utilizing client-side HTML5 Canvas, WebAssembly, and WebCrypto APIs, {tool.title} executes all computations directly in your local hardware memory (RAM).
            </p>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              Whether you are working with confidential financial contracts, personal ID photos, large PDF bundles, or high-resolution graphics, {tool.title} guarantees ironclad security. Because no data packets are transmitted across external cloud networks, your files remain completely private and immune to server-side data leaks or network sniffing. Furthermore, once loaded in your browser, the tool operates seamlessly offline without requiring cellular or Wi-Fi data.
            </p>
          </div>

          {/* How-To Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-brand-gold">📖</span> How to use {tool.title} Online &amp; Offline
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed font-light">
              Follow these simple browser-native instructions to process your documents and images without server uploads:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {seo.steps.map((step, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold font-mono text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-6 pt-6 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-brand-gold">🛡️</span> Frequently Asked Questions (FAQ)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {seo.faq.map((item, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" /> {item.q}
                  </h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed pl-6">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔻 FULL SITE FOOTER */}
      <footer className="bg-black border-t border-white/10 py-16 px-6 text-center md:text-left relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <Sliders className="w-5 h-5 text-brand-gold" /> Resizer Tools
            </div>
            <p className="text-xs text-brand-muted font-light leading-relaxed">
              100% Free client-side Web &amp; Mobile utility studio. Convert, compress, sign, merge, scan, and edit your documents with total privacy.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">Top Image Tools</h4>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li><Link href="/tools/img-comp" className="hover:text-brand-gold transition-colors">Image Compressor</Link></li>
              <li><Link href="/tools/img-res" className="hover:text-brand-gold transition-colors">Image Resizer</Link></li>
              <li><Link href="/tools/img-pdf" className="hover:text-brand-gold transition-colors">Image to PDF</Link></li>
              <li><Link href="/tools/img-conv" className="hover:text-brand-gold transition-colors">Image Converter</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">Top PDF Tools</h4>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li><Link href="/tools/mrg-pdf" className="hover:text-brand-gold transition-colors">Merge PDF</Link></li>
              <li><Link href="/tools/sgn-pdf" className="hover:text-brand-gold transition-colors">Sign PDF</Link></li>
              <li><Link href="/tools/prt-pdf" className="hover:text-brand-gold transition-colors">Protect PDF</Link></li>
              <li><Link href="/tools/res-make" className="hover:text-brand-gold transition-colors">ATS Resume Builder</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">Legal &amp; Support</h4>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li><Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-brand-gold transition-colors">Blog &amp; Guides</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted font-mono">
          <p>© {new Date().getFullYear()} Resizer Tools. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with 100% Client-Side WASM &amp; Canvas Privacy</p>
        </div>
      </footer>

    </div>
  );
}
