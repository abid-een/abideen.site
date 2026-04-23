type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`space-y-3 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mono text-[11px] uppercase tracking-[0.18em] text-white/55">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description ? (
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}

