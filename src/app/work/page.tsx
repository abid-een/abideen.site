import type { Metadata } from "next";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeading } from "@/components/SectionHeading";
import { workPreviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work | abideen.site",
  description:
    "Case study index showing technical decisions, implementation approach, and measurable outcomes.",
};

export default function WorkPage() {
  return (
    <>
      <MotionSection delay={0.05}>
        <SectionHeading
          eyebrow="Work"
          title="Case studies with measurable outcomes."
          description="Each project highlights challenge, implementation approach, and business impact."
        />
      </MotionSection>

      <MotionSection delay={0.12} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {workPreviews.map((work) => (
          <article key={work.title} className="surface-panel space-y-3">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55">
              Case Study
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">{work.title}</h3>
            <ul className="space-y-2 text-white/72">
              <li>
                <span className="mono text-[11px] uppercase tracking-[0.12em] text-white/55 mr-2">
                  Challenge
                </span>
                {work.summary}
              </li>
              <li>
                <span className="mono text-[11px] uppercase tracking-[0.12em] text-white/55 mr-2">
                  Outcome
                </span>
                {work.outcome}
              </li>
            </ul>
          </article>
        ))}
      </MotionSection>
    </>
  );
}

