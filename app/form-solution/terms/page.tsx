import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Terms of Service - Form Solution (iOS)",
  description: "Terms and conditions for using Form Solution - Document Scanner, Image Compressor, and Signature Maker.",
  alternates: {
    canonical: "https://www.resizertools.com/form-solution/terms",
  },
};

export default function FormSolutionTermsPage() {
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
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service — Form Solution</h1>
          <p className="text-xs text-brand-muted font-mono">Effective Date: November 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-brand-muted font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using <strong>Form Solution</strong>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">2. Permitted Use</h2>
            <p>
              Form Solution is provided to assist individuals with preparing, resizing, optimizing, and organizing digital documents, photos, and signatures for official exams, government applications, job portals, and personal documentation.
            </p>
            <p>
              You agree not to use the application for fraudulent document manipulation, forgery of unauthorized signatures, or any illegal activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">3. User Responsibility &amp; File Ownership</h2>
            <p>
              All files, images, signatures, and PDFs created or edited with Form Solution remain your sole intellectual property. Because all operations are performed locally on your device, you are solely responsible for ensuring the accuracy and validity of any documents submitted to third-party portals or authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">4. Disclaimer of Warranties</h2>
            <p>
              The application is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. While we strive for maximum accuracy in file size compression and dimension scaling, we cannot guarantee acceptance of files by third-party government or examination servers whose criteria may change without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, the developer shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the application or any application submission deadlines.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white tracking-tight">6. Contact Information</h2>
            <p>
              For legal inquiries, support, or terms clarification:
            </p>
            <p className="font-mono text-brand-gold text-xs">
              Email: Saurabhsudan051@gmail.com
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
