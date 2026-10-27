'use client' // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { Sliders, AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  unstable_retry,
  reset,
}: {
  error: Error & { digest?: string };
  unstable_retry?: () => void;
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleRetry = () => {
    if (typeof unstable_retry === "function") {
      unstable_retry();
    } else if (typeof reset === "function") {
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Brand logo */}
      <Link href="/" className="flex items-center gap-2 mb-12 group">
        <Sliders className="w-8 h-8 text-brand-gold transition-transform group-hover:rotate-12" />
        <span className="text-xl font-bold tracking-tight">
          <span className="text-brand-gold">Resizer</span>{" "}
          <span className="text-white">Tools</span>
        </span>
      </Link>

      {/* Error icon */}
      <div className="bg-brand-obsidian/40 border border-white/10 rounded-full p-6 mb-8">
        <AlertTriangle className="w-16 h-16 text-brand-gold" />
      </div>

      {/* Heading & description */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark">
        Something Went Wrong
      </h2>
      <p className="text-brand-muted text-lg text-center max-w-md mb-10">
        An unexpected error occurred. Don&apos;t worry — you can try again or
        head back to the home page.
      </p>

      {/* Error digest for debugging */}
      {error.digest && (
        <p className="text-xs text-brand-muted/60 font-mono mb-8 bg-brand-obsidian/40 border border-white/10 rounded-xl px-4 py-2">
          Error ID: {error.digest}
        </p>
      )}

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <button
          onClick={handleRetry}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-gold/20 flex-1 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 border border-brand-gold/30 text-brand-gold font-semibold px-6 py-3 rounded-full transition-all hover:bg-brand-gold/10 hover:border-brand-gold/60 flex-1"
        >
          Back to Home
        </Link>
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
