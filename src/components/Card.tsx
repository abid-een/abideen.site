import type { ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
};

export function Card({
  title,
  subtitle,
  label,
  className,
  children,
}: CardProps) {
  return (
    <article
      className={`border border-white/10 bg-white/[0.02] p-5 sm:p-6 flex flex-col gap-3 ${className ?? ""}`}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-xl font-medium tracking-tight">{title}</h3>
          {subtitle ? (
            <p className="text-sm text-white/60 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>
        {label ? (
          <span className="mono text-[10px] px-2 py-1 border border-white/15 text-white/55 uppercase tracking-[0.12em]">
            {label}
          </span>
        ) : null}
      </header>
      {children ? <div className="mt-2 flex-1">{children}</div> : null}
    </article>
  );
}

