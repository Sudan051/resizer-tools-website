import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy - Resizer Tools",
  description: "Learn how Resizer Tools maintains absolute client-side file privacy, zero server uploads, and secure browser-native execution.",
};

export default function PrivacyPage() {
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
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-brand-muted font-mono">Last updated: July 22, 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-brand-muted font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">1. Client-Side Guarantee (Zero Server Uploads)</h2>
            <p>
              At Resizer Tools, privacy is our core architectural pillar. All utility operations—including image compression, resizing, PDF compiling, split-merge actions, and visual document signatures—run **100% locally in your browser memory**. 
            </p>
            <p>
              No document, image, signature path, or file metadata is ever uploaded, cached, or transmitted to any server database. Your private files never leave your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">2. Information Collection & Usage</h2>
            <p>
              Because we operate entirely client-side, we do not require user account creation. We do not collect, request, or store your name, email address, physical location, payment account numbers, or files.
            </p>
            <p>
              Any premium billing triggers are handled directly through **Razorpay** and **Google Play In-App Billing**, ensuring absolute security. Resizer Tools does not store your financial details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">3. AdMob & AdSense Analytics</h2>
            <p>
              To support free utility development, Resizer Tools imports third-party advertising services (Google AdMob and AdSense). These advertising frameworks may collect and share:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>**Device and Advertising IDs**: Used to serve, target, and measure personalized or non-personalized ads.</li>
              <li>**Diagnostics and Crash Logs**: ephemerally collected to analyze code stability, load speed, and runtime app crashes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">4. Browser Local Storage</h2>
            <p>
              We use `localStorage` (a client-side storage API inside your web browser) purely to remember if you have activated a Pro subscription so that we do not show you advertisements during subsequent visits. No tracking data is saved.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">5. Contact Information</h2>
            <p>
              If you have any queries regarding our browser-native local pipeline or this policy, please reach out to us at:
            </p>
            <p className="font-mono text-brand-gold-light">
              Email: Saurabhsudan051@gmail.com
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
