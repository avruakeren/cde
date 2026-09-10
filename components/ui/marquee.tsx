"use client";

import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  speed = 30,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-border bg-surface py-4",
        className,
      )}
      style={
        reduce
          ? undefined
          : {
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }
      }
    >
      <div
        className="flex w-max gap-8 whitespace-nowrap"
        style={
          reduce
            ? undefined
            : {
                animation: `marquee ${speed}s linear infinite`,
              }
        }
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm font-semibold tracking-wide text-muted"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
