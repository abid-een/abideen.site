"use client";

import { MotionSection } from "@/components/MotionSection";
import { Tabs } from "@/components/Tabs";
import { useState } from "react";

export function Sandbox() {
  const [active, setActive] = useState<"demo-1" | "demo-2">("demo-1");

  return (
    <MotionSection className="space-y-4" delay={0.24}>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-sm sm:text-base font-medium tracking-tight">
          Sandbox
        </h2>
        <p className="mono text-[11px] text-white/40">
          Interactive Lab / Mount Point
        </p>
      </div>
      <div className="border border-[var(--color-border-subtle)]">
        <Tabs
          tabs={[
            { id: "demo-1", label: "Demo 1" },
            { id: "demo-2", label: "Demo 2" },
          ]}
          activeId={active}
          onChange={setActive}
        />
        <div className="mono flex min-h-[200px] md:min-h-[260px] items-center justify-center border-t border-dashed border-[var(--color-border-subtle)] text-[11px] text-white/60">
          Component Mounting Point
        </div>
      </div>
    </MotionSection>
  );
}

