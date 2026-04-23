import Link from "next/link";
import { navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xl font-semibold tracking-tight">
              Available for full-time software engineering roles.
            </p>
            <p className="text-white/65 mt-2">
              Focused on frontend, backend, and product execution with measurable impact.
            </p>
          </div>
          <Link
            href="/contact"
            className="mono text-[11px] uppercase tracking-[0.16em] px-3 py-2 border border-white/20 w-fit hover:bg-white hover:text-black transition-colors"
          >
            Contact Recruiters
          </Link>
        </div>
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mono text-[11px] uppercase tracking-[0.16em] text-white/55 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mono text-[11px] text-white/45">
            © {new Date().getFullYear()} abideen.site
          </p>
        </div>
      </div>
    </footer>
  );
}

