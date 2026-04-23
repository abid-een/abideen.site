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
            Software Engineer with 1.5+ years of experience in Full-Stack development, 
            specializing in Fintech and Automated Compliance systems. Expert in 
            React and Node.js, focused on building high-performance, scalable 
            architectural solutions.
          </p>
        </article>
        <article className="surface-panel space-y-3">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55">
            Technical Stack
          </p>
          <ul className="space-y-2 text-white/70">
            <li>React, Node.js, Python</li>
            <li>TypeScript, SQL, Redis</li>
            <li>Docker, SWC, Nginx</li>
          </ul>
        </article>
      </MotionSection>

      <MotionSection delay={0.18} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="surface-panel space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Experience</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Software Developer</p>
              <p className="text-sm text-white/55">AaniRids Technologies • 2026-Present</p>
            </div>
            <div>
              <p className="font-medium">Full-Stack Developer</p>
              <p className="text-sm text-white/55">4C Solutions • 2024-2025</p>
            </div>
          </div>
        </article>
        <article className="surface-panel space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Master of Computer Applications (MCA)</p>
              <p className="text-sm text-white/55">Graduated 2024</p>
            </div>
            <div>
              <p className="font-medium">Bachelor of Commerce (B.Com)</p>
              <p className="text-sm text-white/55">Graduated 2022</p>
            </div>
          </div>
        </article>
      </MotionSection>
    </>
  );
}

