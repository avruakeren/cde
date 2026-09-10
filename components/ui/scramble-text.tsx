"use client";

import { useEffect, useRef } from "react";
import { animate, scrambleText } from "animejs";
import { useReducedMotion } from "motion/react";

export function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const animation = animate(el, {
      innerHTML: scrambleText({
        text,
        revealRate: 0.6,
        duration: 900,
        ease: "out(3)",
      }),
    });

    return () => {
      animation.revert();
      el.textContent = text;
    };
  }, [reduce, text]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
