import type { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact | abideen.site",
  description:
    "Contact details for recruiters and hiring teams interested in software engineering opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <MotionSection delay={0.05} className="space-y-6">
        <SectionHeading
          eyebrow="Contact"
          title="Open to software engineering opportunities."
          description="Recruiters and hiring managers can reach out directly to discuss role fit, experience, and availability."
        />
      </MotionSection>

      <MotionSection delay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="surface-panel space-y-3">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55">
            Email
          </p>
          <Link
            href="mailto:hello@abideen.site"
            className="text-xl font-medium tracking-tight hover:underline"
          >
            hello@abideen.site
          </Link>
        </article>
        <article className="surface-panel space-y-3">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/55">
            Typical Response
          </p>
          <p className="text-white/72 leading-relaxed">
            Within 24-48 hours. Please include role details, tech stack, and location/time zone expectations.
          </p>
        </article>
      </MotionSection>
    </>
  );
}

