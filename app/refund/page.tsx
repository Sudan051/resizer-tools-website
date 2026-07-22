import Link from "next/link";
import { HelpCircle, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Refund and Cancellation Policy - Resizer Tools",
  description: "Read the refund rules, billing terms, and subscription cancellation processes on Resizer Tools.",
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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Refund & Cancellation</h1>
          <p className="text-xs text-brand-muted font-mono">Last updated: July 22, 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-brand-muted font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">1. Subscription Cancellation</h2>
            <p>
              You can cancel your Resizer Tools Pro subscription at any time. When you cancel, the auto-renewal feature will be immediately turned off. 
            </p>
            <p>
              Your account will remain in Pro status and you will have full access to all premium features until the end of your current active billing cycle (e.g., the end of your paid month or year).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">2. Refund Terms</h2>
            <p>
              Since we offer immediate, downloadable premium benefits and browser utilities upon payment:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>**Standard Subscriptions**: Payments made for monthly or annual subscriptions are generally non-refundable, and we do not provide refunds or credits for any partial-month subscription periods.</li>
              <li>**Billing Errors**: If you believe you were charged in error, billed twice for the same period, or encountered a payment gateway bug, please contact us within **7 days** of the transaction. We will inspect your transaction log and process a full refund if the double charge is verified.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">3. How to Request a Refund or Support</h2>
            <p>
              For refund inquiries, billing assistance, or payment cancellation issues, please write to us at **Saurabhsudan051@gmail.com**. Please include your transaction ID (e.g., Razorpay payment ID) and the billing email address.
            </p>
            <p>
              All verified refunds are processed back to the original payment source (UPI, Card, or Netbanking) within **5-7 business days** as per bank settlement guidelines.
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
