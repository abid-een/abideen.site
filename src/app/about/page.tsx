import type { Metadata } from "next";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About | abideen.site",
  description:
    "Professional background, engineering strengths, and working style for hiring teams.",
};

export default function AboutPage() {
  return (
    <>
      <MotionSection delay={0.05} className="space-y-6">
        <SectionHeading
          eyebrow="About"
          title="Engineer focused on shipping reliable products with measurable impact."
          description="I work across frontend, backend, and product delivery to turn complex requirements into maintainable systems."
        />
      </MotionSection>

      <MotionSection delay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="surface-panel md:col-span-2 space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight">
            Professional Summary
          </h3>
          <p className="text-white/72 leading-relaxed">
            I have delivered production systems across product-facing interfaces,
            API layers, and platform improvements. My approach blends clear
            communication, pragmatic architecture, and disciplined execution.
          </p>
        </article>
        <article className="surface-panel space-y-3">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55">
            Working Style
          </p>
          <ul className="space-y-2 text-white/70">
            <li>Own outcomes end-to-end, not just code output.</li>
            <li>Document decisions and communicate tradeoffs clearly.</li>
            <li>Prioritize maintainability without sacrificing velocity.</li>
          </ul>
        </article>
      </MotionSection>
    </>
  );
}

