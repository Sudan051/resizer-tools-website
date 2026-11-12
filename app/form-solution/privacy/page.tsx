import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy - Form Solution (iOS)",
  description: "Learn how Form Solution protects your privacy with 100% on-device processing for document scanning, image compression, and digital signatures.",
  alternates: {
    canonical: "https://www.resizertools.com/form-solution/privacy",
  },
};

export default function FormSolutionPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-brand-gold/30 selection:text-brand-gold-light py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Navigation back */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-gold transition-colors font-mono">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-white/5 pb-8">
          <div className="p-3 bg-brand-gold/10 border border-brand-gold/25 text-brand-gold w-fit rounded-2xl">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy — Form Solution</h1>
          <p className="text-xs text-brand-muted font-mono">Effective Date: November 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-brand-muted font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">1. 100% On-Device Local Processing</h2>
            <p>
              <strong>Form Solution</strong> is designed from the ground up with a strict privacy-first architecture. All core features—including Document Scanning, Photo Resizing &amp; KB Compression, Digital Signature creation, and ZIP packaging—operate <strong>strictly on your local device</strong> using Apple native APIs (VisionKit, PencilKit, CoreGraphics, and ImageIO).
            </p>
            <p>
              Your documents, identification photos, and handwritten signatures <strong>never leave your device</strong> and are never uploaded to any remote server or third-party database.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">2. Information We Do NOT Collect</h2>
            <p>
              We believe your personal documents belong solely to you:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>No user registration, phone number, or account creation is required.</li>
              <li>We do not collect or view your scanned certificates, government IDs, or marksheets.</li>
              <li>We do not record, store, or transmit your digital signatures.</li>
              <li>We do not collect location data or personal contact lists.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">3. Device Permissions &amp; How They Are Used</h2>
            <div className="space-y-3">
              <div>
                <strong className="text-white">Camera Permission (NSCameraUsageDescription):</strong>
                <p>Used solely to scan physical documents, capture ID cards, and photograph physical paper signatures. Camera data is processed in real time in temporary device memory.</p>
              </div>
              <div>
                <strong className="text-white">Photo Library Permission (NSPhotoLibraryUsageDescription):</strong>
                <p>Used solely when you manually select a photo or document from your library to crop, resize, or compress to a target KB size.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">4. Third-Party Services &amp; Crash Reporting</h2>
            <p>
              To ensure application stability, the app may use anonymous crash diagnostics (such as Firebase Crashlytics) to detect technical exceptions and crashes. These reports contain purely diagnostic device information (e.g. iOS version, device model, crash stack trace) and never include your personal images, documents, or signatures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">5. Data Retention &amp; Security</h2>
            <p>
              Any exported files (such as generated PDF documents or bundled ZIP archives) are saved strictly to your device&apos;s sandboxed local storage or exported directly through the standard iOS share sheet. You retain full control over your files and can delete them at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">6. Children&apos;s Privacy</h2>
            <p>
              Our application does not knowingly collect any personally identifiable information from children under the age of 13.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white tracking-tight">7. Contact &amp; Support</h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy or the security of Form Solution, please contact:
            </p>
            <p className="font-mono text-brand-gold text-xs">
              Developer Support: Saurabhsudan051@gmail.com
            </p>
          </section>
        </div>

        {/* Clean, dedicated App Store compliant footer */}
        <footer className="border-t border-white/10 pt-8 pb-12 text-center text-xs text-neutral-400 space-y-2">
          <p className="text-white font-medium">© 2026 Form Solution (iOS). Developed by Saurabh Kumar Sharma.</p>
          <p className="text-neutral-500 font-mono text-[11px]">Strict 100% On-Device Privacy Architecture • Zero Server Storage</p>
        </footer>
      </div>
    </main>
  );
}
