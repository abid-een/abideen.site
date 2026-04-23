import Link from "next/link";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/90 border-b border-white/10">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">
          abideen.site
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mono text-[11px] tracking-[0.16em] uppercase text-white/65 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="mono text-[11px] uppercase tracking-[0.16em] px-3 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
}

