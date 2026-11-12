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
    <main className="min-h-screen bg-slate-50 text-neutral-900 py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
        
        {/* Navigation back */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-blue-600 underline hover:text-blue-800 transition-colors font-medium">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200 pb-8">
          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-600 w-fit rounded-2xl shadow-sm">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Privacy Policy — Form Solution</h1>
          <p className="text-xs text-neutral-500 font-mono">Effective Date: November 2026</p>
        </div>

        {/* 100% On-device highlight banner */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl text-amber-950 text-sm leading-relaxed shadow-sm">
          <strong className="block text-amber-900 font-semibold mb-1">100% On-Device Privacy Guarantee:</strong>
          Form Solution operates on a strictly client-side architecture. Your photos, scanned documents, and digital signatures are processed entirely in your device memory and are <strong>never uploaded, stored, or transmitted</strong> to any external server.
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-neutral-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">1. Local Processing Architecture</h2>
            <p>
              <strong>Form Solution</strong> is designed from the ground up to respect user privacy. All operations—including Document Scanning, Photo Resizing &amp; KB Compression, Digital Signature creation, and ZIP packaging—operate <strong>strictly on your local device</strong> using Apple native APIs (VisionKit, PencilKit, CoreGraphics, and ImageIO).
            </p>
            <p>
              Your documents, identification photos, and handwritten signatures <strong>never leave your device</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">2. Information We Do NOT Collect</h2>
            <p>
              We believe your personal documents belong solely to you:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li>No account creation, sign-in, email address, or phone number is required.</li>
              <li>We do not collect or view your scanned certificates, government IDs, or marksheets.</li>
              <li>We do not record, store, or transmit your digital signatures.</li>
              <li>We do not collect GPS location data or personal contact lists.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">3. Device Permissions &amp; Usage</h2>
            <div className="space-y-3 text-neutral-600">
              <div>
                <strong className="text-neutral-900">Camera Permission (NSCameraUsageDescription):</strong>
                <p>Used solely to scan physical documents, capture ID cards, and photograph physical paper signatures. Camera data is processed in real time in temporary device memory.</p>
              </div>
              <div>
                <strong className="text-neutral-900">Photo Library Permission (NSPhotoLibraryUsageDescription):</strong>
                <p>Used solely when you manually select a photo or document from your library to crop, resize, or compress to a target KB size.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">4. Third-Party Services &amp; Crash Diagnostics</h2>
            <p className="text-neutral-600">
              To ensure application stability, the app may use anonymous crash diagnostics (such as Firebase Crashlytics) to detect technical exceptions and app crashes. These reports contain purely diagnostic device telemetry (e.g. iOS version, device model, crash stack trace) and never include your personal images, documents, or signatures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">5. Data Retention &amp; Security</h2>
            <p className="text-neutral-600">
              Any exported files (such as generated PDF documents or bundled ZIP archives) are saved strictly to your device&apos;s sandboxed local storage or exported directly through the standard iOS share sheet. You retain full control over your files and can delete them at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">6. Children&apos;s Privacy</h2>
            <p className="text-neutral-600">
              Our application does not knowingly collect any personally identifiable information from children under the age of 13.
            </p>
          </section>

          <section className="space-y-3 border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">7. Developer Contact &amp; Support</h2>
            <p className="text-neutral-600">
              If you have any questions or feedback regarding this Privacy Policy, please contact developer support directly:
            </p>
            <p className="font-mono text-xs">
              Email: <a href="mailto:Saurabhsudan051@gmail.com" className="text-blue-600 underline font-semibold hover:text-blue-800">Saurabhsudan051@gmail.com</a>
            </p>
            <p className="text-xs text-neutral-500 pt-2">
              Also view our <Link href="/form-solution/terms" className="text-blue-600 underline font-medium hover:text-blue-800">Terms of Service</Link>.
            </p>
          </section>
        </div>

        {/* Clean, dedicated App Store compliant footer */}
        <footer className="border-t border-neutral-200 pt-8 pb-4 text-center text-xs text-neutral-500 space-y-1.5">
          <p className="text-neutral-800 font-semibold">© 2026 Form Solution (iOS). Developed by Saurabh Kumar Sharma.</p>
          <p className="text-neutral-400 font-mono text-[11px]">Strict 100% On-Device Privacy Architecture • Zero Server Storage</p>
        </footer>
      </div>
    </main>
  );
}
