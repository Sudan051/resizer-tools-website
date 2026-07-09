"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, Sliders, Maximize2, ShieldCheck, Smartphone, 
  Briefcase, Cpu, Award, Play, CheckCircle2, ArrowDownCircle,
  Crop, Image as ImageIcon, Camera, Grid, QrCode,
  FileText, Copy, Percent, Split, Trash2, FolderSync,
  RefreshCw, RotateCw, PenTool, Droplet, Lock, Unlock, 
  FileCode, Cpu as NfcCpu
} from "lucide-react";

export default function Home() {
  const [width, setWidth] = useState(1242);
  const [height, setHeight] = useState(2688);
  const [activeCategory, setActiveCategory] = useState("all");

  // Form States for Rating and Feedback
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  // 🛠 Master Tools Dataset with full detailed user explanations
  const toolsData = [
    { id: "img_comp", title: "Image Compressor", subtitle: "Reduce image size without losing quality", desc: "Advanced down-sampling algorithms compress image file sizes up to 80% while retaining crisp pixel-perfect fidelity for app deployment.", icon: ArrowDownCircle, category: "image", src: "/Pro.png" },
    { id: "img_res", title: "Image Resizer", subtitle: "Resize images to custom dimensions", desc: "Scale canvas aspect ratios instantly. Input custom coordinate parameters for flawless App Store asset rendering.", icon: Crop, category: "image", src: "/placeholder.png" },
    { id: "img_pdf", title: "Image to PDF", subtitle: "Convert images into PDF documents", desc: "Batch transform multiple image files directly into formatted PDF pages natively without external server latency.", icon: ImageIcon, category: "image", src: "/placeholder.png" },
    { id: "img_conv", title: "Image Format Converter", subtitle: "Convert images between formats", desc: "Convert seamlessly between HEIC, PNG, JPEG, and WebP, optimizing assets for multi-platform distribution.", icon: RefreshCw, category: "image", src: "/placeholder.png" },
    { id: "id_cam", title: "ID Photo Camera", subtitle: "Capture photos for official documents", desc: "Smart live-viewfinder alignment assistance helps you capture and auto-crop standard government-compliant document photos.", icon: Camera, category: "image", src: "/placeholder.png" },
    { id: "prnt_sheet", title: "Print Photo Sheet", subtitle: "Arrange photos on Letter sheets", desc: "Auto-arrange passport sizes or standard cutouts perfectly on grid layouts for A4, A5, and Letter sheet dimensions.", icon: Grid, category: "image", src: "/placeholder.png" },
    
    { id: "qr_scan", title: "QR Scanner", subtitle: "Scan and decode QR codes instantly", desc: "Hardware-accelerated camera optics capture, decode, and parse structural metadata link formats inside sub-pixel vectors.", icon: QrCode, category: "scanner", src: "/QRPowerScan.png" },
    { id: "doc_scan", title: "Document Scanner", subtitle: "Scan documents with auto edge detection", desc: "Real-time edge checking and automated quad perspective wrapping clean up skewed camera snapshots into crisp flat scans.", icon: FileText, category: "scanner", src: "/placeholder.png" },
    
    { id: "mrg_pdf", title: "Merge PDF", subtitle: "Combine multiple PDFs into one", desc: "Consolidate independent sub-documents or bulk paperwork packets cleanly into a unified index-optimized master PDF.", icon: Copy, category: "pdf", src: "/placeholder.png" },
    { id: "mk_pdf", title: "PDF Maker", subtitle: "Create PDF files from vectors", desc: "Design structural layout configurations from localized media elements, text styles, and layout alignment matrices.", icon: FileCode, category: "pdf", src: "/placeholder.png" },
    { id: "red_pdf", title: "PDF Reducer", subtitle: "Compress PDF files to save space", desc: "Optimize embedded graphics and compress structural document streams to drastically cut asset storage overhead.", icon: Percent, category: "pdf", src: "/placeholder.png" },
    { id: "spl_pdf", title: "Split PDF", subtitle: "Extract pages from PDF documents", desc: "Surgically extract specified page indexes or break up bulky documentation arrays into cleanly segmented sub-files.", icon: Split, category: "pdf", src: "/placeholder.png" },
    { id: "del_pdf", title: "Delete PDF Pages", subtitle: "Remove unwanted pages from PDF", desc: "Prune bloated assets instantly by clearing out irrelevant padding blocks or unwanted pages from document streams.", icon: Trash2, category: "pdf", src: "/placeholder.png" },
    { id: "ext_pdf", title: "Extract PDF Pages", subtitle: "Save specific pages from PDF", desc: "Isolate specific visual blocks or forms from massive data tables and dump them cleanly into distinct files.", icon: Copy, category: "pdf", src: "/placeholder.png" },
    { id: "ord_pdf", title: "Reorder PDF Pages", subtitle: "Change page order in PDF", desc: "An interactive, visual layout workspace to easily drag, drop, and rearrange index page configurations on the fly.", icon: FolderSync, category: "pdf", src: "/placeholder.png" },
    { id: "rot_pdf", title: "Rotate PDF Pages", subtitle: "Rotate selected pages in PDF", desc: "Fix misaligned camera uploads instantly by adjusting structural rotation matrices by 90, 180, or 270 degrees.", icon: RotateCw, category: "pdf", src: "/placeholder.png" },
    { id: "sgn_pdf", title: "Sign PDF", subtitle: "Add signature to PDF", desc: "Draw, cache, and stamp dynamic personalized cryptographic visual signatures cleanly onto official application layers.", icon: PenTool, category: "pdf", src: "/placeholder.png" },
    { id: "wtrmk_pdf", title: "PDF Watermark", subtitle: "Add text watermark to PDF", desc: "Inject transparent security badging, copyright texts, or corporate logo graphics directly into asset backgrounds.", icon: Droplet, category: "pdf", src: "/placeholder.png" },
    { id: "pdf_imgs", title: "PDF to Images", subtitle: "Convert PDF pages to images", icon: ImageIcon, desc: "Deconstruct compressed cross-platform document packages into separate lossless high-resolution asset images.", category: "pdf", src: "/placeholder.png" },
    { id: "prt_pdf", title: "Protect PDF", subtitle: "Add password to PDF", desc: "Enforce ironclad user file safety using local AES password hashes and secure document permission locking flags.", icon: Lock, category: "pdf", src: "/ProtectPDF.png" },
    { id: "unl_pdf", title: "Unlock PDF", subtitle: "Remove password from PDF", desc: "Instantly decrypt authorized protected streams and drop password requirements for verified layout updates.", icon: Unlock, category: "pdf", src: "/placeholder.png" },
    { id: "inv_mk", title: "Invoice Maker", subtitle: "Create professional invoices", desc: "Generate professional corporate statements with exact sub-total computations, localized tax tabs, and sleek headers.", icon: FileText, category: "pdf", src: "/NFC Command.png" },
    { id: "num_pdf", title: "Page Numbers", subtitle: "Add page numbers to PDF", desc: "Stamp custom-aligned dynamic numeric indexes automatically onto base layouts with adjustable margins.", icon: Sliders, category: "pdf", src: "/placeholder.png" },
    
    { id: "qr_gen", title: "QR Generator", subtitle: "Create QR codes instantly", desc: "Generate customized high-density vector matrix codes using custom tracking hyperlinks, text strings, or credentials.", icon: QrCode, category: "generator", src: "/scan and Generate QR.png" },
    { id: "sig_cr", title: "Signature Creator", subtitle: "Draw and save signature", desc: "Smooth vector canvas capturing utility transforms touch/stylus paths into anti-aliased alpha-channel graphics.", icon: PenTool, category: "generator", src: "/placeholder.png" },
    
    { id: "nfc_tl", title: "NFC Tools", subtitle: "Read and write NFC tags", desc: "Access native radio frequencies to write customized NDEF instructions or query contactless chip assets effortlessly.", icon: NfcCpu, category: "nfc", src: "/NFC Command.png" }
  ];

  const categories = [
    { id: "all", label: "All Tools" },
    { id: "image", label: "Images" },
    { id: "scanner", label: "Scanners" },
    { id: "pdf", label: "PDF Studio" },
    { id: "generator", label: "Generators" },
    { id: "nfc", label: "NFC" }
  ];

  const realScreenshots = [
    { src: "/Home.png", headline: "Ultimate All-In-One Utilities", sub: "Image, PDF, QR, NFC Integrated" },
    { src: "/Pro.png", headline: "Unlock Full Productivity", sub: "Complete Pro Suite Features" },
    { src: "/ProtectPDF.png", headline: "Secure, Sign, & Master PDFs", sub: "Advanced Document Controls" },
    { src: "/QRPowerScan.png", headline: "QR Power: Scan & Design", sub: "Instant Code Generation" },
    { src: "/scan and Generate QR.png", headline: "Scan & Generate Instantly", sub: "Effortless Creation Loop" },
    { src: "/NFC Command.png", headline: "NFC Command & Smart Invoicing", sub: "Connect Seamlessly Everywhere" }
  ];

  const filteredTools = activeCategory === "all" 
    ? toolsData 
    : toolsData.filter(t => t.category === activeCategory);

  // Form Validation Logic
  const isFormValid = userName.trim() !== "" && feedbackMsg.trim() !== "";

  // Dynamic Mailto Builder
  const getMailtoString = () => {
    const subject = encodeURIComponent("Resizer Tools - User Feedback & Signal");
    const body = encodeURIComponent(
      `User Identifier: ${userName}\nRating: ${rating}/5 Stars\n\nFeedback / Message:\n${feedbackMsg}`
    );
    return `mailto:saurabhsudan051@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-gold/30 selection:text-brand-gold-light relative">
      
      {/* 🍎 1. Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 glass-panel flex items-center justify-between px-6 md:px-12 border-b border-white/5"
      >
        <div className="flex items-center gap-2 font-semibold tracking-wide text-lg">
          <Sliders className="w-5 h-5 text-brand-gold" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-muted">Resizer Tools</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted font-medium">
          <a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a>
          <a href="#studio" className="hover:text-white transition-colors">Workspace Tools ({toolsData.length})</a>
          <a href="#gallery" className="hover:text-white transition-colors">Visual Gallery</a>
          <a href="#showcase" className="hover:text-white transition-colors">Full Matrix Showcase</a>
          <a href="#about" className="hover:text-white transition-colors">Creator</a>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold text-xs px-4 py-2 rounded-full shadow-premium-gold hover:scale-105 transition-transform cursor-pointer">
          <Download className="w-3.5 h-3.5 stroke-[3]" /> Download App
        </button>
      </motion.nav>

      {/* 👑 2. Hero Section */}
      <section className="relative pt-36 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-gold-light mb-6">
          <ShieldCheck className="w-3.5 h-3.5" /> Fully Private & Apple Native
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-bold tracking-tight max-w-5xl leading-tight">
          An Elite Matrix of <br />
          <span className="bg-clip-text text-transparent bg-gold-gradient">{toolsData.length} Professional App Tools</span>
        </motion.h1>
        <p className="mt-6 text-brand-muted text-base md:text-xl max-w-2xl font-light">
          Your standalone platform for advanced graphics manipulation, secure encryption, and document automation. 
        </p>
        
        {/* HERO SMARTPHONE MOCKUP */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-16 w-72 aspect-[1242/2688] bg-brand-obsidian rounded-[44px] p-2 border-[4px] border-white/10 shadow-2xl shadow-brand-gold/10 relative">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-10" />
          <div className="w-full h-full bg-black/40 rounded-[34px] flex items-center justify-center overflow-hidden p-1">
            <img src="/Home.png" alt="App Dashboard Mockup" className="w-full h-full object-fill rounded-[24px]" />
          </div>
        </motion.div>
      </section>

      {/* 📊 3. Interactive Slider Demo */}
      <section id="demo" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-brand-obsidian/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-brand-gold font-medium text-sm tracking-wider uppercase"><Sliders className="w-4 h-4" /> Dimension Engine</div>
            <div>
              <div className="flex justify-between text-sm mb-2 font-mono"><span className="text-brand-muted">Target Width:</span><span className="text-brand-gold-light font-bold">{width} px</span></div>
              <input type="range" min="400" max="2000" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer appearance-none" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 font-mono"><span className="text-brand-muted">Target Height:</span><span className="text-brand-gold-light font-bold">{height} px</span></div>
              <input type="range" min="600" max="3000" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-brand-gold bg-white/10 rounded-lg h-1.5 cursor-pointer appearance-none" />
            </div>
          </div>
          <div className="h-64 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center p-4">
            <motion.div animate={{ width: Math.min(width / 6, 220), height: Math.min(height / 12, 220) }} className="bg-gold-gradient rounded-xl flex flex-col items-center justify-center text-black font-bold p-2 shadow-2xl">
              <Maximize2 className="w-5 h-5 mb-1 opacity-70" />
              <span className="text-[10px] font-mono tracking-tighter">{width}×{height}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⚡ 4. Workspace Directory Grid with Luxury Golden Hover Glow & Explanation */}
      <section id="studio" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16 border-t border-white/5">
        <div className="text-center mb-12">
          <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Centralized Command</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">App Architecture Directory</h2>
          <p className="text-brand-muted mt-3 max-w-lg mx-auto text-sm font-light">Hover over each standalone unit to unfold full operational engine blueprints.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/[0.02] p-1.5 rounded-full border border-white/5 max-w-3xl mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id 
                  ? "bg-brand-gold text-black shadow-lg font-semibold" 
                  : "text-brand-muted hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 26 Tools Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 12px 30px -10px rgba(212, 175, 55, 0.25)"
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                key={tool.id}
                className="p-6 rounded-2xl bg-brand-obsidian/40 border border-white/5 transition-colors group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-brand-gold group-hover:bg-gradient-to-r group-hover:from-brand-gold group-hover:to-brand-gold-dark group-hover:text-black transition-all duration-300 shadow-glass">
                      <tool.icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-brand-gold-light transition-colors">{tool.title}</h3>
                      <p className="text-[11px] text-brand-muted font-medium tracking-wide">{tool.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-brand-muted font-light leading-relaxed border-t border-white/5 pt-3 group-hover:text-neutral-200 transition-colors">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 🎬 5. Visual Media Gallery */}
      <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Production Design</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Official App Store Core Walkthroughs</h2>
          <p className="text-brand-muted text-xs md:text-sm mt-2 font-light">Swipe horizontally to view full-frame 1242 × 2688 px presentation layouts.</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 scrollbar-none snap-x snap-mandatory scroll-smooth">
          {realScreenshots.map((screenshot, i) => (
            <div key={i} className="w-[280px] sm:w-[320px] shrink-0 bg-brand-obsidian/30 border border-white/5 rounded-3xl p-4 flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300 shadow-xl snap-center">
              
              <div className="w-full aspect-[1242/2688] overflow-hidden rounded-2xl relative bg-black/60 flex items-center justify-center border border-white/5 p-1">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.headline} 
                  className="w-full h-full object-fill rounded-xl group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>

              <div className="w-full text-left mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded-full">Core 0{i+1}</span>
                  <span className="text-[10px] text-brand-muted font-mono uppercase tracking-widest">1242 × 2688 px</span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-brand-gold-light transition-colors">{screenshot.headline}</h4>
                <p className="text-xs text-brand-muted font-light mt-0.5">{screenshot.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📱 6. Ultimate 26-Tool Visual Matrix Showcase */}
      <section id="showcase" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16 border-t border-white/5">
        <div className="text-center mb-12">
          <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Full Viewport Matrix</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Complete {toolsData.length}-Tool Interface Tour</h2>
          <p className="text-brand-muted mt-2 text-sm font-light">Every single localized runtime view mapped side-by-side.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {toolsData.map((tool, idx) => {
            const imageSrc = tool.src === "/placeholder.png" 
              ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
              : tool.src;

            return (
              <div key={idx} className="bg-brand-obsidian/20 border border-white/5 rounded-2xl p-2.5 flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300 shadow-md group">
                
                <div className="w-full aspect-[1242/2688] overflow-hidden rounded-xl relative bg-neutral-900 flex items-center justify-center border border-white/5 p-0.5">
                  <img 
                    src={imageSrc} 
                    alt={tool.title} 
                    className={`w-full h-full object-fill rounded-lg transition-transform duration-300 ${tool.src === "/placeholder.png" ? "opacity-30 blur-[1px] group-hover:scale-105" : "group-hover:scale-[1.02]"}`} 
                  />
                  {tool.src === "/placeholder.png" && (
                    <div className="absolute inset-0 flex items-center justify-center p-2 text-center bg-black/40">
                      <tool.icon className="w-6 h-6 text-brand-gold/40" />
                    </div>
                  )}
                </div>
                <div className="mt-3 px-1 text-left">
                  <p className="text-[11px] font-semibold text-white tracking-tight truncate group-hover:text-brand-gold-light transition-colors">{tool.title}</p>
                  <p className="text-[9px] text-brand-muted font-mono uppercase tracking-tighter mt-0.5">
                    {tool.src === "/placeholder.png" ? "Blueprint Mode" : "Live Interface"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 💼 7. Premium LinkedIn-Style Profile & Live Feedback Console (with Orange Shirt Alignment Alignment) */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-brand-black via-brand-obsidian/20 to-brand-black border-t border-white/5 scroll-mt-16">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center mb-12">
            <p className="text-brand-gold font-mono tracking-widest text-xs uppercase mb-2">Connect & Innovate</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Creator Terminal & User Signals</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 👤 Left Side: Your Custom LinkedIn Profile Image Card Card */}
            <div className="lg:col-span-7 bg-brand-obsidian/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group">
              <div className="w-full h-36 bg-neutral-900 relative overflow-hidden border-b border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" 
                  alt="MacBook Pro Workspace Aesthetic" 
                  className="w-full h-full object-cover opacity-25 object-center group-hover:scale-[1.01] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              </div>

              <div className="px-6 pb-6 pt-0 relative flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-14 text-center sm:text-left">
                <div className="relative shrink-0 z-10">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-brand-gold via-brand-gold-dark to-transparent rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-500"></div>
                  
                  {/* PERFECTLY ADJUSTED CO-ORDINATES FOR YOUR PIC PIC */}
                  <div className="relative w-28 h-28 rounded-full border-4 border-brand-black bg-[#1a1a1a] overflow-hidden shadow-xl flex items-center justify-center">
                    <img 
                      src="/saurabh-profile1.PNG" 
                      alt="Saurabh Kumar Sharma" 
                      className="w-full h-full object-cover object-top scale-125 origin-top"
                    />
                  </div>
                </div>

                <div className="flex-1 sm:mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[9px] font-mono tracking-widest text-brand-gold uppercase mb-1.5">
                    iOS Engineer & Digital Creator
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Saurabh Kumar Sharma</h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    Specializing in native iOS app deployment and automated asset distribution matrices. Crafting seamless pipelines for global product compliance.
                  </p>
                </div>
              </div>

              {/* Verified Contact Quick Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4 border-t border-white/5 bg-black/20 text-left">
                <a href="mailto:saurabhsudan051@gmail.com" className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all">
                  <span className="p-1.5 bg-brand-gold/10 rounded-md text-brand-gold"><Briefcase className="w-3.5 h-3.5" /></span>
                  <div className="overflow-hidden"><p className="text-[8px] text-brand-muted font-mono uppercase tracking-wider leading-none mb-0.5">Email</p><p className="text-xs font-medium text-white truncate">saurabhsudan051@gmail.com</p></div>
                </a>
                <a href="https://linkedin.com/in/pandit-saurabh-kumar-sharma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all">
                  <span className="p-1.5 bg-brand-gold/10 rounded-md text-brand-gold"><Cpu className="w-3.5 h-3.5" /></span>
                  <div className="overflow-hidden"><p className="text-[8px] text-brand-muted font-mono uppercase tracking-wider leading-none mb-0.5">LinkedIn</p><p className="text-xs font-medium text-white truncate">Connect Live</p></div>
                </a>
                <a href="https://youtube.com/@ComedyWithTau-Saurabh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] transition-all">
                  <span className="p-1.5 bg-brand-gold/10 rounded-md text-brand-gold"><Play className="w-3.5 h-3.5" /></span>
                  <div className="overflow-hidden"><p className="text-[8px] text-brand-muted font-mono uppercase tracking-wider leading-none mb-0.5">YouTube</p><p className="text-xs font-medium text-white truncate">ComedyWithTau-Saurabh</p></div>
                </a>
              </div>
            </div>

            {/* ✉️ Right Side: Live Feedback Form */}
            <div className="lg:col-span-5 bg-brand-obsidian/40 border border-white/5 rounded-3xl p-6 shadow-2xl relative">
              <h4 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-brand-gold" /> System Telemetry & Feedback
              </h4>
              <p className="text-xs text-brand-muted font-light mb-4">Submit tool reviews, engine logs, or custom feature inquiries instantly.</p>
              
              <div className="space-y-3.5 text-left">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1">User Identifier</label>
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-gold/40 transition-colors" />
                </div>
                
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1">Engine Utility Rating</label>
                  <div className="flex gap-1.5 text-brand-gold">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button type="button" key={star} onClick={() => setRating(star)} className={`hover:scale-110 transition-transform cursor-pointer text-base ${rating >= star ? "opacity-100" : "opacity-30"}`}>★</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-muted mb-1">Payload Message / Feedback</label>
                  <textarea rows={3} value={feedbackMsg} onChange={(e) => setFeedbackMsg(e.target.value)} placeholder="Type your message here..." className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-gold/40 transition-colors resize-none" />
                </div>

                {/* Validation Lock Trigger link */}
                <a 
                  href={isFormValid ? getMailtoString() : "#"}
                  onClick={(e) => !isFormValid && e.preventDefault()}
                  className={`block w-full text-center text-black font-bold text-xs py-2.5 rounded-xl transition-all duration-300 ${
                    isFormValid 
                      ? "bg-gradient-to-r from-brand-gold to-brand-gold-dark shadow-premium-gold hover:scale-[1.02] cursor-pointer" 
                      : "bg-neutral-800 text-neutral-500 opacity-40 cursor-not-allowed pointer-events-none"
                  }`}
                >
                  Transmit Signal Securely
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-xs text-brand-muted border-t border-white/5">
        &copy; {new Date().getFullYear()} Resizer Tools. Engineered to perfection. All rights reserved.
      </footer>
    </main>
  );
}