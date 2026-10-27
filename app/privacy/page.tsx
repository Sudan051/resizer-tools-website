import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy - Resizer Tools",
  description: "Learn how Resizer Tools maintains absolute client-side file privacy, zero server uploads, and secure browser-native execution.",
  alternates: {
    canonical: "https://www.resizertools.com/privacy",
  },
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
            <h2 className="text-lg font-bold text-white tracking-tight">3. Google AdSense &amp; Third-Party Advertising Policy</h2>
            <p>
              To maintain free, unrestricted access to all 28 digital utilities without mandatory paid subscriptions, Resizer Tools displays online advertisements served by Google AdSense and third-party advertising partners.
            </p>
            <p>
              Under Google&apos;s AdSense Program Policies, we provide the following mandatory disclosures regarding advertising technologies and data practices:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs">
              <li>
                <strong>Third-Party Vendors &amp; Google Cookies:</strong> Third-party vendors, including Google, use cookies and web beacons to serve advertisements based on a user&apos;s prior visits to this website or other websites across the internet.
              </li>
              <li>
                <strong>DoubleClick DART Cookie:</strong> Google&apos;s use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve ads to our users based on their navigation history across Resizer Tools and other sites on the World Wide Web.
              </li>
              <li>
                <strong>Personalized Advertising Opt-Out:</strong> Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Google Ads Settings</a>.
              </li>
              <li>
                <strong>Third-Party Network Opt-Out:</strong> Alternatively, users may opt out of third-party vendors&apos; use of cookies for interest-based advertising by visiting the <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Digital Advertising Alliance (aboutads.info)</a> or the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Network Advertising Initiative (NAI) opt-out portal</a>.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">4. Browser Local Storage &amp; Cookie Disclosure</h2>
            <p>
              Resizer Tools itself does not set tracking cookies or create persistent user surveillance profiles. We utilize standard browser <code className="text-brand-gold-light">localStorage</code> exclusively for client-side configuration preferences:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs">
              <li>Remembering whether an ad-free Pro subscription has been verified on your browser session.</li>
              <li>Preserving non-sensitive UI settings such as theme preferences and canvas zoom scales.</li>
              <li>No personal information, uploaded files, or document contents are ever stored in cookies or transferred to external analytics databases.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">5. GDPR &amp; CCPA Compliance</h2>
            <p>
              Because Resizer Tools utilizes zero-upload client architecture, your personal records, photos, and files are never stored or processed on our backend systems. You maintain 100% data ownership and sovereignty under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).
            </p>
            <p>
              Users have the unconditional right to process, compress, convert, and delete their files locally without leaving any digital footprint on external networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-tight">6. Contact Information &amp; Support</h2>
            <p>
              If you have any queries regarding our browser-native local pipeline or this privacy policy, please reach out to our engineering team at:
            </p>
            <p className="font-mono text-brand-gold-light">
              Email: Saurabhsudan051@gmail.com
            </p>
          </section>
        </div>

      </div>

      <div className="mt-16">
        <SiteFooter />
      </div>
    </main>
  );
}
