import Link from "next/link";
import { HelpCircle, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Refund and Cancellation Policy - Resizer Tools",
  description: "Read the refund rules, billing terms, and subscription cancellation processes on Resizer Tools.",
  alternates: {
    canonical: "https://www.resizertools.com/refund",
  },
};

export default function RefundPage() {
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
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Refund &amp; Cancellation Policy</h1>
          <p className="text-xs text-brand-muted font-mono">Last updated: July 22, 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-brand-muted font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">1. Subscription Cancellation</h2>
            <p>
              You can cancel your Resizer Tools Pro subscription at any time without penalty or cancellation fees. When you cancel, the auto-renewal feature will be immediately turned off for your billing account. 
            </p>
            <p>
              Your account will remain in Pro status with full ad-free access to all premium features until the end of your current active billing cycle (e.g., the end of your paid month or year).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">2. Refund Terms &amp; Eligibility</h2>
            <p>
              Since we provide instant, client-side digital utilities and immediate ad-removal benefits upon payment confirmation:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>**Standard Subscriptions**: Monthly or annual membership payments are generally non-refundable once active, and we do not provide prorated refunds for partial-month usage.</li>
              <li>**Billing Errors &amp; Duplicate Charges**: If you believe you were charged in error, billed twice for the same billing cycle, or encountered a payment gateway error, please contact us within **7 calendar days** of the transaction. We will verify your transaction logs and issue a full refund immediately.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">3. How to Request a Refund</h2>
            <p>
              For refund inquiries, billing assistance, or payment cancellation requests, please email our support desk at **Saurabhsudan051@gmail.com**. Please include your payment ID, billing email, and date of transaction.
            </p>
            <p>
              All verified refunds are processed back to the original payment source (UPI, Debit/Credit Card, Netbanking, or Google Play balance) within **5-7 business days** in accordance with banking settlement timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">4. Payment Security &amp; Gateway Compliance</h2>
            <p>
              All transactions are encrypted with 256-bit SSL protocols handled exclusively by PCI-DSS compliant payment gateways (Razorpay and Google Play). Resizer Tools does not store or process your sensitive credit card numbers or banking passwords.
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
