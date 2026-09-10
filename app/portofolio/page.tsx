"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkCard } from "@/components/portfolio/work-card";
import { portfolioItems } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const filters = ["Semua", "Video", "Web", "Publikasi", "Desain", "Pelatihan"] as const;

export default function PortofolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("Semua");

  const items =
    active === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section className="pb-24 pt-28 sm:pb-32 sm:pt-36">
      <Container>
        <SectionHeading
          overline="Portofolio"
          title="Karya yang kami kerjakan"
          description="Contoh proyek bersama lembaga pendidikan di seluruh Indonesia."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === f
                  ? "border-accent bg-accent text-on-accent"
                  : "border-border bg-surface text-muted hover:border-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <WorkCard key={item.slug} item={item} className="h-full" />
          ))}
        </div>
      </Container>
    </section>
  );
}
