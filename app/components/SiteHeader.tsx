import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { toolsData } from "../data/tools";

interface SiteHeaderProps {
  currentPath?: string;
}

/**
 * Shared site-wide navigation bar used across content, legal, blog, and tool pages.
 */
export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  const navItems = [
    { href: "/#studio", label: `All Tools (${toolsData.length})` },
    { href: "/blog", label: "Blog & Guides" },
    { href: "/about", label: "About Us" },
    { href: "/editorial", label: "Editorial" },
    { href: "/help", label: "Help" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-wide text-base sm:text-lg shrink-0">
          <Image
            src="/logo.png"
            alt="Resizer Tools Logo"
            width={32}
            height={32}
            className="rounded-lg border border-brand-gold/30 shadow-sm"
            priority
          />
          <span className="font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark font-black">
              RESIZER
            </span>{" "}
            <span className="text-white">TOOLS</span>
          </span>
        </Link>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-6 text-xs lg:text-sm text-brand-muted font-medium">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-brand-gold font-semibold transition-colors"
                    : "hover:text-white transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <ThemeToggle />
          <Link
            href="/app"
            className="flex items-center gap-1.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold text-xs px-3.5 py-2 rounded-full shadow-premium-gold hover:scale-105 transition-transform"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">Mobile App</span>
            <span className="sm:hidden">App</span>
          </Link>
        </div>
      </div>

      {/* Compact mobile navigation row for effortless crawlability & UX on small screens */}
      <nav aria-label="Mobile Quick Navigation" className="md:hidden border-t border-white/5 px-4 py-2 flex items-center gap-4 overflow-x-auto scrollbar-none text-xs text-brand-muted font-medium">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-brand-gold transition-colors">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
