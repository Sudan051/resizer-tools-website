import Link from "next/link";
import { Mail, MapPin, ArrowLeft, PhoneCall, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Contact Us - Resizer Tools Customer Support & Engineering",
  description: "Get in touch with Resizer Tools support team for questions, tool feedback, enterprise inquiries, and payment assistance.",
  alternates: {
    canonical: "https://www.resizertools.com/contact",
  },
};

export default function ContactPage() {
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
            <PhoneCall className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-xs text-brand-muted font-light leading-relaxed">
            Have questions about our tools, billing inquiries, or technical support? Drop us a message and our team will get back to you promptly.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Support Card */}
          <div className="p-6 bg-brand-obsidian/30 border border-white/5 rounded-2xl space-y-3">
            <div className="text-brand-gold">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Email Support</h3>
            <p className="text-xs text-brand-muted leading-relaxed font-light">
              Get direct help for your queries, tool bugs, payment inquiries, or custom feature requests. We typically respond within 24 hours.
            </p>
            <a 
              href="mailto:Saurabhsudan051@gmail.com" 
              className="inline-block text-xs font-semibold text-brand-gold hover:text-brand-gold-light hover:underline pt-2 font-mono"
            >
              Saurabhsudan051@gmail.com
            </a>
          </div>

          {/* Registered Merchant Address Card */}
          <div className="p-6 bg-brand-obsidian/30 border border-white/5 rounded-2xl space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-brand-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Registered Address</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                Razorpay &amp; legal compliance registered business coordinates.
              </p>
            </div>

            <div className="pt-4">
              <details className="group cursor-pointer">
                <summary className="text-xs font-bold text-brand-gold bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/20 px-4 py-2 rounded-xl transition-all list-none text-center select-none">
                  Show Registered Address
                </summary>
                <div className="mt-3 text-xs font-mono text-brand-gold-light p-3 bg-white/[0.02] border border-white/5 rounded-xl text-left animate-fadeIn space-y-1">
                  <p className="font-semibold text-white">SAURABH KUMAR SHARMA</p>
                  <p>Subhashgarh, Haridwar,</p>
                  <p>Uttarakhand - 247663, India</p>
                </div>
              </details>
            </div>
          </div>

        </div>

        {/* Additional Support FAQs */}
        <div className="space-y-6 pt-4">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-gold" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-xs text-brand-muted leading-relaxed font-light">
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5">
              <h3 className="font-semibold text-white">How do I report a bug or suggest a new tool feature?</h3>
              <p>Email our technical team directly at Saurabhsudan051@gmail.com with details or screenshots. We review all user suggestions and ship new utility enhancements weekly.</p>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5">
              <h3 className="font-semibold text-white">Are my files uploaded to your servers when I request assistance?</h3>
              <p>No. Resizer Tools operates 100% locally in your device browser. Our support team never has access to your private files, signatures, or photos.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-muted font-mono">
          &copy; {new Date().getFullYear()} Resizer Tools. All rights reserved.
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-muted font-mono">
          &copy; {new Date().getFullYear()} Resizer Tools. All rights reserved.
        </div>

      </div>
    </main>
  );
}
