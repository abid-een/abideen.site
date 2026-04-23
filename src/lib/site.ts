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
    title: "Market Intelligence Dashboard",
    summary:
      "Designed a high-performance analytics interface to calculate and visualize complex financial Greeks from real-time data.",
    outcome: "Optimized client-side execution to minimize data-stream latency for option chains.",
    href: "/work",
  },
  {
    title: "Retail Management OS",
    summary:
      "Transitioned manual retail operations to a relational system with attribute-based inventory tracking.",
    outcome: "Increased reporting accuracy by 35% through robust data modeling and SQL design.",
    href: "/work",
  },
  {
    title: "Automated Compliance Engine",
    summary:
      "Engineered a WhatsApp-integrated billing solution utilizing linked-device protocols.",
    outcome: "Reduced manual documentation time by 80% for retail floor staff.",
    href: "/work",
  },
];

export const servicePillars: ServicePillar[] = [
  {
    title: "Full-Stack Development",
    description:
      "Specializing in React, Node.js, and TypeScript to build scalable architectural solutions.",
  },
  {
    title: "Fintech & Analytics",
    description:
      "Architecting engines for NSE option chains, Greeks calculation, and real-time data processing.",
  },
  {
    title: "Automated Compliance",
    description:
      "Developing GST-compliant SaaS and direct filing engines to streamline high-volume tax compliance.",
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

