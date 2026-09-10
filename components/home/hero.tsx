"use client";

import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { SplitTextHeading } from "@/components/ui/split-text-heading";
import { ScrambleText } from "@/components/ui/scramble-text";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.6fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              <ScrambleText text="Agensi digital untuk pendidikan" />
            </p>
            <SplitTextHeading className="font-display text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Membantu sekolah dan kampus hadir lebih profesional di era digital.
            </SplitTextHeading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-8"
          >
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Video profil, website sekolah, jurnal digital, dan pendampingan
              teknologi untuk lembaga pendidikan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/kontak" variant="primary" size="lg">
                Konsultasi Gratis
                <ArrowRight size={18} weight="bold" />
              </Button>
              <Button href="/portofolio" variant="outline" size="lg">
                Lihat Karya
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border border-border lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-accent/20 blur-2xl lg:block"
      />
    </section>
  );
}
