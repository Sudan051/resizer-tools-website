import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Resizer Tools",
  description:
    "The page you are looking for does not exist. Browse our collection of image, PDF, QR, and NFC tools.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Brand logo */}
      <Link href="/" className="flex items-center gap-2.5 mb-12 group">
        <Image
          src="/logo.png"
          alt="RT Smart Tools Logo"
          width={40}
          height={40}
          className="rounded-xl border border-brand-gold/30 shadow-md group-hover:scale-105 transition-transform"
        />
        <span className="text-xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark font-black">RESIZER</span>{" "}
          <span className="text-white">TOOLS</span>
        </span>
      </Link>

      {/* Large 404 number */}
      <h1 className="text-[10rem] sm:text-[14rem] font-black leading-none select-none bg-clip-text text-transparent bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark drop-shadow-lg">
        404
      </h1>

      {/* Heading & description */}
      <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3 text-white text-center">
        Page Not Found
      </h2>
      <p className="text-brand-muted text-lg text-center max-w-md mb-12">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved. Let&apos;s get you back on track.
      </p>

      {/* Quick links card */}
      <div className="bg-brand-obsidian/40 border border-white/10 rounded-3xl p-8 w-full max-w-md">
        <p className="text-sm text-brand-muted uppercase tracking-widest mb-5 text-center">
          Quick Links
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-gold/20"
          >
            Back to Home
          </Link>
          <Link
            href="/#studio"
            className="flex items-center justify-center gap-2 border border-brand-gold/30 text-brand-gold font-semibold px-6 py-3 rounded-full transition-all hover:bg-brand-gold/10 hover:border-brand-gold/60"
          >
            Browse All Tools
          </Link>
          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 border border-white/10 text-brand-muted font-medium px-6 py-3 rounded-full transition-all hover:bg-white/5 hover:text-white hover:border-white/20"
          >
            Read Our Blog
          </Link>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="mt-16 flex items-center gap-3 text-brand-muted text-sm">
        <span className="h-px w-8 bg-white/10" />
        <span>Resizer Tools</span>
        <span className="h-px w-8 bg-white/10" />
      </div>
    </div>
  );
}
