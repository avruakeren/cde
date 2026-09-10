"use client";

import { useEffect, useRef } from "react";
import { splitText, animate, stagger, onScroll, set } from "animejs";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function AnimatedHeading({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const split = splitText(el, { words: { wrap: "clip" } });
    const { words } = split;
    set(words, { y: "110%" });

    const observer = onScroll({
      target: el,
      repeat: false,
      onEnter: () => {
        animate(words, {
          y: { from: "110%", to: "0%" },
          duration: 700,
          ease: "out(3)",
          delay: stagger(45),
        });
      },
    });

    return () => {
      observer.revert();
      split.revert();
    };
  }, [reduce]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
