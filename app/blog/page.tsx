import Link from "next/link";
import { blogPosts } from "../data/blog";
import { ArrowLeft, BookOpen, Clock, User, ArrowRight, ShieldCheck } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Resizer Tools Blog - Guides, Tutorials & Web Utility Knowledge Base",
  description: "Explore technical guides on image compression, ATS resume optimization, client-side PDF security, Web NFC, and browser-native web performance.",
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Web Workspace
        </Link>

        {/* Hero Section */}
        <div className="space-y-4 border-b border-white/5 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-xs font-mono text-brand-gold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Technical Guides & Articles
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Resizer Tools Knowledge Base
          </h1>
          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed max-w-2xl">
            In-depth technical tutorials, privacy guides, and web optimization practices written by industry developers. Learn how browser-native technologies protect your data.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-white/5 hover:border-brand-gold/40 rounded-3xl p-6 flex flex-col justify-between transition-all hover:scale-[1.01] group space-y-4 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-brand-gold uppercase tracking-wider">
                  <span>{post.category}</span>
                  <span className="flex items-center gap-1 text-brand-muted"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-brand-muted font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                <span className="text-[11px] font-mono text-brand-muted flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-gold" /> {post.author}
                </span>
                <Link 
                  href={`/blog/${post.slug}/`}
                  className="inline-flex items-center gap-1 font-mono text-xs text-brand-gold group-hover:translate-x-1 transition-transform"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Value Callout Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-transparent border border-brand-gold/25 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-gold" /> 100% Client-Side Privacy Standard
          </h3>
          <p className="text-xs text-brand-muted font-light leading-relaxed">
            All tools featured in our articles run directly inside your web browser memory. No uploaded files, zero server database logs, and complete GDPR compliance guaranteed.
          </p>
        </div>

        {/* Footer info */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-muted font-mono">
          &copy; {new Date().getFullYear()} Resizer Tools. All rights reserved.
        </div>

      </div>
    </main>
  );
}
