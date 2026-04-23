type TabId = "demo-1" | "demo-2";

export type TabDefinition = {
  id: TabId;
  label: string;
};

type TabsProps = {
  tabs: TabDefinition[];
  activeId: TabId;
  onChange: (id: TabId) => void;
  className?: string;
};

export function Tabs({ tabs, activeId, onChange, className }: TabsProps) {
  return (
    <div className={className}>
      <div className="mono flex border-b border-[var(--color-border-subtle)] text-[11px]">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`px-4 py-2 border-r border-[var(--color-border-subtle)] transition-colors ${
                isActive
                  ? "bg-white text-black"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

