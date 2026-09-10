"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Draggable } from "animejs";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { services } from "@/content/services";

export function ServicesShowcase() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport || reduce) return;

    const draggable = new Draggable(track, {
      container: viewport,
      x: true,
      y: false,
      containerFriction: 0.6,
      releaseContainerFriction: 0.6,
      releaseEase: "out(3)",
      dragThreshold: 6,
    });

    return () => {
      draggable.revert();
    };
  }, [reduce]);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Layanan
            </p>
            <AnimatedHeading className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Apa yang kami kerjakan
            </AnimatedHeading>
          </div>
          <Link
            href="/layanan"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-foreground hover:text-accent sm:inline-flex"
          >
            Semua layanan
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </div>

      <div ref={viewportRef} className="mt-12 overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max cursor-grab gap-5 px-5 select-none active:cursor-grabbing sm:px-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/layanan/${service.slug}`}
                className="group flex h-[24rem] w-[19rem] shrink-0 flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent sm:w-[22rem]"
              >
                <div>
                  <span className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={22} weight="bold" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.short}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Lihat detail
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
