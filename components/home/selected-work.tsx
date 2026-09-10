import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WorkCard } from "@/components/portfolio/work-card";
import { portfolioItems } from "@/content/portfolio";

export function SelectedWork() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            overline="Portofolio"
            title="Beberapa karya kami"
            description="Contoh proyek yang pernah kami kerjakan bersama lembaga pendidikan."
          />
          <Link
            href="/portofolio"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-foreground hover:text-accent"
          >
            Lihat semua
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <WorkCard item={item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
