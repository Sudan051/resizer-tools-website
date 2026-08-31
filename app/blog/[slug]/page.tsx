import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../data/blog";
import { ArrowLeft, Clock, User, Calendar, Layers } from "lucide-react";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found - Resizer Tools",
    };
  }

  return {
    title: `${post.title} | Resizer Tools Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.resizertools.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.resizertools.com/blog/${post.slug}`,
      siteName: "Resizer Tools Knowledge Base",
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://resizertools.com/blog/${post.slug}/#article`,
    "mainEntityOfPage": `https://resizertools.com/blog/${post.slug}/`,
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://resizertools.com/icon.svg",
    "datePublished": "2026-08-19",
    "dateModified": "2026-08-28",
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://resizertools.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Resizer Tools",
      "logo": {
        "@type": "ImageObject",
        "url": "https://resizertools.com/icon.svg"
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-16 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Navigation */}
        <Link 
          href="/blog/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
        </Link>

        {/* Header Header */}
        <div className="space-y-4 border-b border-white/5 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-brand-gold">
            <span className="px-3 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 uppercase tracking-wider text-[10px]">
              {post.category}
            </span>
            <span className="text-brand-muted">•</span>
            <span className="flex items-center gap-1 text-brand-muted"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            <span className="text-brand-muted">•</span>
            <span className="flex items-center gap-1 text-brand-muted"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 pt-2 text-xs font-mono text-brand-muted">
            <User className="w-4 h-4 text-brand-gold" />
            <span>Written by <strong className="text-white">{post.author}</strong></span>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-6 text-sm text-brand-muted font-light leading-relaxed">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("# ")) {
              return null; // Skip main title as it's rendered above
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6 border-b border-white/5 pb-2">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-base font-bold text-brand-gold tracking-tight pt-4">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("---")) {
              return <hr key={idx} className="border-white/5 my-8" />;
            }
            if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
              const items = paragraph.split("\n");
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 text-brand-muted">
                  {items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ 
                      __html: item.replace(/^[-*\d.]+\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-gold hover:underline font-mono">$1</a>')
                    }} />
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("|")) {
              // Markdown Table rendering
              const rows = paragraph.trim().split("\n").filter(r => !r.includes(":---"));
              if (rows.length === 0) return null;
              const headers = rows[0].split("|").filter(Boolean).map(h => h.trim());
              const bodyRows = rows.slice(1).map(r => r.split("|").filter(Boolean).map(c => c.trim()));

              return (
                <div key={idx} className="overflow-x-auto my-6 border border-white/10 rounded-2xl bg-black/40 p-2">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-brand-gold">
                        {headers.map((h, i) => <th key={i} className="p-3 uppercase font-bold">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-brand-muted">
                      {bodyRows.map((r, i) => (
                        <tr key={i} className="hover:bg-white/[0.02]">
                          {r.map((c, j) => <td key={j} className="p-3">{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return (
              <p 
                key={idx} 
                className="text-sm leading-relaxed font-light text-brand-muted"
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-gold hover:underline font-mono font-medium">$1</a>')
                }}
              />
            );
          })}
        </article>

        {/* Internal Cross-Linking Grid */}
        <div className="border-t border-white/5 pt-10 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-brand-gold font-bold">Related Knowledge & Utilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((rp) => (
              <Link 
                key={rp.slug}
                href={`/blog/${rp.slug}/`}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all space-y-2 group"
              >
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider block">{rp.category}</span>
                <h4 className="text-xs font-bold text-white group-hover:text-brand-gold transition-colors line-clamp-2">{rp.title}</h4>
                <p className="text-[11px] text-brand-muted font-light line-clamp-2">{rp.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA to Use Tools */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141414] to-[#0a0a0a] border border-brand-gold/30 space-y-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/25 text-brand-gold rounded-xl">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Try Resizer Tools Web Workspace</h3>
              <p className="text-xs text-brand-muted font-light">Explore 27+ browser-native, offline PDF and image utilities.</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link 
              href="/"
              className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-extrabold text-xs py-3 px-6 rounded-xl shadow-premium-gold hover:scale-[1.02] transition-transform"
            >
              Open Web Utilities Studio
            </Link>
            <Link 
              href="/app"
              className="bg-white/5 border border-white/10 hover:border-brand-gold/40 text-white font-bold text-xs py-3 px-6 rounded-xl transition-colors"
            >
              Download Mobile App
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-white/5 pt-8 flex flex-wrap items-center justify-between text-xs text-brand-muted font-mono gap-4">
          <span>&copy; {new Date().getFullYear()} Resizer Tools. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-brand-gold">Home Studio</Link>
            <Link href="/blog" className="hover:text-brand-gold">All Guides</Link>
            <Link href="/privacy" className="hover:text-brand-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold">Terms</Link>
            <Link href="/refund" className="hover:text-brand-gold">Refund Policy</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
