import type { Metadata } from "next";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPreviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | abideen.site",
  description:
    "Engineering notes on architecture, delivery, and technical decision-making.",
};

export default function BlogPage() {
  return (
    <>
      <MotionSection delay={0.05}>
        <SectionHeading
          eyebrow="Notes"
          title="Technical writing on engineering execution and architecture."
        />
      </MotionSection>

      <MotionSection delay={0.12} className="space-y-4">
        {blogPreviews.map((post) => (
          <article key={post.title} className="surface-panel space-y-2">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-white/50">
              {post.tag} · {post.date}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">{post.title}</h3>
            <p className="text-white/70">{post.excerpt}</p>
          </article>
        ))}
      </MotionSection>
    </>
  );
}

