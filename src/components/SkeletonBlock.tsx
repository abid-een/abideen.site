type SkeletonBlockProps = {
  rows?: number;
  compact?: boolean;
  className?: string;
};

export function SkeletonBlock({
  rows = 3,
  compact = false,
  className,
}: SkeletonBlockProps) {
  const items = Array.from({ length: rows });

  return (
    <div
      className={`flex flex-col gap-2 ${compact ? "mt-1" : "mt-3"} ${
        className ?? ""
      }`}
    >
      {items.map((_, index) => {
        const widthClass =
          index === rows - 1 ? "w-1/2" : index % 2 === 0 ? "w-full" : "w-3/4";
        return (
          <div
            key={index}
            className={`h-3 bg-white/5 ${widthClass} animate-pulse`}
          />
        );
      })}
    </div>
  );
}

