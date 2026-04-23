import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { servicePillars, workPreviews } from "@/lib/site";

function RecruiterHero() {
  return (
    <MotionSection className="space-y-6 sm:space-y-8" delay={0.04}>
      <p className="mono text-[11px] uppercase tracking-[0.18em] text-white/60">
        Software Engineer Portfolio
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
        I build reliable full-stack products that ship fast and scale cleanly.
      </h1>
      <p className="text-white/72 max-w-2xl text-base sm:text-lg leading-relaxed">
        I am actively seeking software engineering roles where I can contribute
        across frontend, backend, and product execution with measurable impact.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/work" className="btn-primary">
          View Project Highlights
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact for Opportunities
        </Link>
      </div>
    </MotionSection>
  );
}

function WorkPreviewSection() {
  return (
    <MotionSection className="space-y-6" delay={0.1}>
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that demonstrate engineering depth and delivery impact."
        description="A quick view of problems solved, decisions made, and outcomes delivered."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {workPreviews.map((work) => (
          <Card
            key={work.title}
            title={work.title}
            subtitle={work.summary}
            label="Case Study"
            className="surface-card"
          >
            <p className="text-sm leading-relaxed text-white/72 mb-4">
              {work.outcome}
            </p>
            <Link href={work.href} className="mono text-[11px] text-white/80">
              View details →
            </Link>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}

function CapabilitySnapshot() {
  return (
    <MotionSection className="space-y-6" delay={0.16}>
      <SectionHeading
        eyebrow="Capabilities"
        title="Core strengths I bring to engineering teams."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {servicePillars.map((pillar) => (
          <article key={pillar.title} className="surface-panel">
            <h3 className="text-xl font-medium tracking-tight">{pillar.title}</h3>
            <p className="mt-3 text-white/70 leading-relaxed">{pillar.description}</p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}

function ProofStrip() {
  const metrics = [
    { label: "Years Building Products", value: "5+" },
    { label: "Production Features Shipped", value: "40+" },
    { label: "Cross-Functional Projects", value: "20+" },
  ];

  return (
    <MotionSection className="surface-panel" delay={0.2}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-1">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55">
              {metric.label}
            </p>
            <p className="text-3xl font-semibold tracking-tight">{metric.value}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

function FinalCta() {
  return (
    <MotionSection className="surface-panel space-y-4" delay={0.24}>
      <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/60">
        Next Step
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
        Open to software engineering opportunities with product-focused teams.
      </h2>
      <Link href="/contact" className="btn-primary">
        Get in Touch
      </Link>
    </MotionSection>
  );
}

export default function Home() {
  return (
    <>
      <RecruiterHero />
      <WorkPreviewSection />
      <CapabilitySnapshot />
      <ProofStrip />
      <FinalCta />
    </>
  );
}

