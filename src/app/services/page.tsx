import type { Metadata } from "next";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeading } from "@/components/SectionHeading";
import { servicePillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities | abideen.site",
  description:
    "Technical capabilities relevant to software engineering roles across product and platform teams.",
};

export default function ServicesPage() {
  return (
    <>
      <MotionSection delay={0.05}>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical strengths I bring to engineering teams."
          description="A concise view of the practical skills I apply in full-time software engineering roles."
        />
      </MotionSection>

      <MotionSection delay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {servicePillars.map((service) => (
          <article key={service.title} className="surface-panel space-y-3">
            <h3 className="text-xl font-medium tracking-tight">{service.title}</h3>
            <p className="text-white/70 leading-relaxed">{service.description}</p>
          </article>
        ))}
      </MotionSection>

      <MotionSection delay={0.18} className="surface-panel">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55 mb-3">
          How I Contribute
        </p>
        <p className="text-white/72 leading-relaxed">
          I am most effective in product-oriented teams where I can contribute to
          architecture, implementation, and cross-functional execution from planning
          through release.
        </p>
      </MotionSection>
    </>
  );
}

