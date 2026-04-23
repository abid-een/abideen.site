export type NavItem = {
  href: string;
  label: string;
};

export type WorkPreview = {
  title: string;
  summary: string;
  outcome: string;
  href: string;
};

export type ServicePillar = {
  title: string;
  description: string;
};

export type BlogPreview = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  href: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Capabilities" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const workPreviews: WorkPreview[] = [
  {
    title: "Real-Time Commerce Platform",
    summary:
      "Led migration from a monolith to a modular architecture with typed APIs.",
    outcome: "Improved checkout success rate by 18% and reduced incident volume.",
    href: "/work",
  },
  {
    title: "Analytics Pipeline Stabilization",
    summary:
      "Built resilient ingestion and validation workflows for reporting reliability.",
    outcome: "Reduced data quality incidents by 63% within two quarters.",
    href: "/work",
  },
  {
    title: "Design System Rollout",
    summary:
      "Created reusable UI primitives, docs, and release workflow for product teams.",
    outcome: "Cut feature UI delivery time by 34% and improved consistency.",
    href: "/work",
  },
];

export const servicePillars: ServicePillar[] = [
  {
    title: "Frontend Engineering",
    description:
      "Build responsive, accessible interfaces with scalable React and Next.js patterns.",
  },
  {
    title: "Backend & API Design",
    description:
      "Design resilient services and data contracts that support reliable product delivery.",
  },
  {
    title: "Delivery & Collaboration",
    description:
      "Drive execution across engineering, design, and product with clear ownership.",
  },
];

export const blogPreviews: BlogPreview[] = [
  {
    title: "How I Evaluate Code Quality Under Delivery Pressure",
    excerpt:
      "A practical framework for balancing shipping speed with long-term maintainability.",
    date: "2026-04-01",
    tag: "Engineering",
    href: "/blog",
  },
  {
    title: "Designing Team Workflows That Reduce Engineering Bottlenecks",
    excerpt:
      "The execution rituals I use to keep teams aligned and delivery predictable.",
    date: "2026-03-18",
    tag: "Delivery",
    href: "/blog",
  },
];

