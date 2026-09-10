import Link from "next/link";
import { Sliders, ShieldCheck, Globe } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-left">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
              <Sliders className="w-5 h-5 text-brand-gold" />
              <span className="bg-gradient-to-r from-white via-white to-brand-gold bg-clip-text text-transparent">
                Resizer Tools
              </span>
            </Link>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Free, privacy-first web tools to edit PDFs, compress photos, generate QR codes, and create screenshots—processed 100% locally on your device.
            </p>
            <div className="space-y-2 pt-2 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Client-Side Engine Active</span>
              </div>
              <div className="flex items-center gap-1.5 text-brand-gold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Server Uploads</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Image Utilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="text-brand-gold">🖼️</span> Image Utilities
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/tools/img-comp" className="hover:text-brand-gold transition-colors">Image Compressor</Link></li>
              <li><Link href="/tools/img-res" className="hover:text-brand-gold transition-colors">Image Resizer</Link></li>
              <li><Link href="/tools/img-pdf" className="hover:text-brand-gold transition-colors">Image to PDF</Link></li>
              <li><Link href="/tools/img-conv" className="hover:text-brand-gold transition-colors">Image Converter</Link></li>
              <li><Link href="/tools/pdf-imgs" className="hover:text-brand-gold transition-colors">PDF to Image</Link></li>
              <li><Link href="/tools/prnt-sheet" className="hover:text-brand-gold transition-colors">Passport Photo Sheet</Link></li>
              <li><Link href="/tools/id-cam" className="hover:text-brand-gold transition-colors">ID Photo Camera</Link></li>
              <li><Link href="/tools/doc-scan" className="hover:text-brand-gold transition-colors">Document Scanner</Link></li>
            </ul>
          </div>

          {/* Column 3: Advanced PDF Studio */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="text-brand-gold">📄</span> PDF Studio
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/tools/mrg-pdf" className="hover:text-brand-gold transition-colors">Merge PDF Files</Link></li>
              <li><Link href="/tools/spl-pdf" className="hover:text-brand-gold transition-colors">Split PDF Pages</Link></li>
              <li><Link href="/tools/red-pdf" className="hover:text-brand-gold transition-colors">PDF Reducer</Link></li>
              <li><Link href="/tools/sgn-pdf" className="hover:text-brand-gold transition-colors">Sign PDF Online</Link></li>
              <li><Link href="/tools/prt-pdf" className="hover:text-brand-gold transition-colors">Protect PDF Password</Link></li>
              <li><Link href="/tools/unl-pdf" className="hover:text-brand-gold transition-colors">Unlock PDF Decrypt</Link></li>
              <li><Link href="/tools/del-pdf" className="hover:text-brand-gold transition-colors">Delete PDF Pages</Link></li>
              <li><Link href="/tools/rot-pdf" className="hover:text-brand-gold transition-colors">Rotate PDF Pages</Link></li>
              <li><Link href="/tools/res-make" className="hover:text-brand-gold transition-colors">ATS Resume Builder</Link></li>
              <li><Link href="/tools/wtrmk-pdf" className="hover:text-brand-gold transition-colors">PDF Watermark</Link></li>
              <li><Link href="/tools/num-pdf" className="hover:text-brand-gold transition-colors">Page Numbers</Link></li>
            </ul>
          </div>

          {/* Column 4: Generators & Productivity */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="text-brand-gold">⚡</span> Generators &amp; Tools
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/shots" className="hover:text-brand-gold transition-colors font-medium text-brand-gold">Screenshot Studio 🚀</Link></li>
              <li><Link href="/tools/shot-gen" className="hover:text-brand-gold transition-colors">Screenshot Generator</Link></li>
              <li><Link href="/tools/qr-gen" className="hover:text-brand-gold transition-colors">QR Code Generator</Link></li>
              <li><Link href="/tools/qr-scan" className="hover:text-brand-gold transition-colors">QR Matrix Scanner</Link></li>
              <li><Link href="/tools/inv-mk" className="hover:text-brand-gold transition-colors">Invoice Maker</Link></li>
              <li><Link href="/tools/sig-cr" className="hover:text-brand-gold transition-colors">Signature Creator</Link></li>
              <li><Link href="/tools/nfc-tl" className="hover:text-brand-gold transition-colors">Web NFC Studio</Link></li>
              <li><Link href="/card" className="hover:text-brand-gold transition-colors">Pro Membership</Link></li>
              <li><Link href="/app" className="hover:text-brand-gold transition-colors">Mobile iOS App</Link></li>
            </ul>
          </div>

          {/* Column 5: Knowledge Guides & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="text-brand-gold">📚</span> Guides &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/blog" className="hover:text-brand-gold transition-colors font-medium text-white">All Knowledge Guides</Link></li>
              <li><Link href="/blog/image-compression-guide-2026" className="hover:text-brand-gold transition-colors">Image Compression 2026</Link></li>
              <li><Link href="/blog/client-side-pdf-security" className="hover:text-brand-gold transition-colors">Zero-Upload PDF Security</Link></li>
              <li><Link href="/blog/ats-resume-optimization-guide" className="hover:text-brand-gold transition-colors">ATS Resume Guide</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-brand-gold transition-colors">Refund &amp; Cancellation</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact &amp; Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Language, System Badges */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300 text-[11px]">
              <Globe className="w-3.5 h-3.5 text-brand-gold" />
              <span>English (Global)</span>
            </div>
            <span>© {new Date().getFullYear()} Resizer Tools. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span className="text-white/20">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
            <span className="text-white/20">•</span>
            <span className="text-brand-gold">WASM Client Sandbox</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
