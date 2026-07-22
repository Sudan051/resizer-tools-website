import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Terms and Conditions - Resizer Tools",
  description: "Read the Terms of Service for Resizer Tools. Operating browser-native client-side utility platforms.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Navigation back */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-gold transition-colors font-mono">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Workspace
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-white/5 pb-8">
          <div className="p-3 bg-brand-gold/10 border border-brand-gold/25 text-brand-gold w-fit rounded-2xl">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms & Conditions</h1>
          <p className="text-xs text-brand-muted font-mono">Last updated: July 22, 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-brand-muted font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing and utilizing `resizertools.com` and its associated tools, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our utilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">2. Scope of Service</h2>
            <p>
              Resizer Tools provides a suite of browser-native graphics and document utilities. Because all computations happen on your client device, we do not guarantee storage backups of your files. Once you close the browser tab, your work session is cleared. It is your responsibility to download your processed assets immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">3. Premium Billing & Subscriptions</h2>
            <p>
              We offer optional paid plans to remove ads and unlock advanced tool features. Payments are handled via securely integrated third-party processors (Razorpay and Google Play Billing). 
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Subscriptions auto-renew periodically (monthly/annually) based on your selected plan.</li>
              <li>You can cancel your subscription at any time. Upon cancellation, you will continue to have Pro access until the end of your current billing period.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">4. Disclaimer of Warranties</h2>
            <p>
              Resizer Tools is provided &quot;as is&quot; and &quot;as available&quot;. We do not guarantee that the services will meet all custom requirements, run uninterrupted, or be entirely free of rendering errors. Since processing is handled by your browser, performance depends on your device hardware (CPU, RAM, and browser configuration).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">5. Contact and Ownership</h2>
            <p>
              Resizer Tools is owned and operated by SAURABH KUMAR SHARMA. For legal inquiries or support requests, please contact us at **Saurabhsudan051@gmail.com**.
            </p>
          </section>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-muted font-mono">
          &copy; {new Date().getFullYear()} Resizer Tools. All rights reserved.
        </div>

      </div>
    </main>
  );
}
