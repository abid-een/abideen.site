"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<MotionProps, "initial" | "animate" | "transition">;

export function MotionSection({
  children,
  className,
  delay = 0,
  ...rest
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

