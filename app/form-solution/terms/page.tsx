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
    <main className="min-h-screen bg-slate-50 text-neutral-900 py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
        
        {/* Navigation back */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-amber-600 transition-colors font-medium">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200 pb-8">
          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-600 w-fit rounded-2xl shadow-sm">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Terms of Service — Form Solution</h1>
          <p className="text-xs text-neutral-500 font-mono">Effective Date: November 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-neutral-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using <strong>Form Solution</strong>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">2. Permitted Use</h2>
            <p className="text-neutral-600">
              Form Solution is provided to assist individuals with preparing, resizing, optimizing, and organizing digital documents, photos, and signatures for official exams, government applications, job portals, and personal documentation.
            </p>
            <p className="text-neutral-600">
              You agree not to use the application for fraudulent document manipulation, forgery of unauthorized signatures, or any illegal activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">3. User Responsibility &amp; File Ownership</h2>
            <p className="text-neutral-600">
              All files, images, signatures, and PDFs created or edited with Form Solution remain your sole intellectual property. Because all operations are performed locally on your device, you are solely responsible for ensuring the accuracy and validity of any documents submitted to third-party portals or authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">4. Disclaimer of Warranties</h2>
            <p className="text-neutral-600">
              The application is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. While we strive for maximum accuracy in file size compression and dimension scaling, we cannot guarantee acceptance of files by third-party government or examination servers whose criteria may change without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">5. Limitation of Liability</h2>
            <p className="text-neutral-600">
              To the fullest extent permitted by applicable law, the developer shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the application or any application submission deadlines.
            </p>
          </section>

          <section className="space-y-3 border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight">6. Contact Information</h2>
            <p className="text-neutral-600">
              For legal inquiries, support, or terms clarification:
            </p>
            <p className="font-mono text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg w-fit text-xs font-semibold">
              Email: Saurabhsudan051@gmail.com
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
