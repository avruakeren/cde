"use client";

import { useEffect, useRef } from "react";
import { splitText, animate, stagger } from "animejs";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function SplitTextHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const split = splitText(el, {
      chars: { wrap: "clip" },
    });
    const { chars } = split;

    const animation = animate(chars, {
      y: { to: ["110%", "0%"] },
      duration: 800,
      ease: "out(3)",
      delay: stagger(40, { start: 150 }),
    });

    return () => {
      animation.revert();
      split.revert();
    };
  }, [reduce]);

  return (
    <h1 ref={ref} className={cn(className)}>
      {children}
    </h1>
  );
}
