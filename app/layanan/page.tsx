import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan agensi digital untuk pendidikan: video produksi, pengembangan web, publikasi digital, desain grafis, dan pelatihan.",
};

export default function LayananPage() {
  return (
    <section className="pb-24 pt-28 sm:pb-32 sm:pt-36">
      <Container>
        <SectionHeading
          overline="Layanan"
          title="Solusi digital lengkap untuk lembaga pendidikan"
          description="Dari produksi video hingga pendampingan digitalisasi, kami hadir sebagai mitra yang memahami kebutuhan sekolah dan kampus."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/layanan/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <Icon size={24} weight="bold" />
                      </span>
                      <ArrowUpRight
                        size={22}
                        className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      />
                    </div>
                    <h2 className="mt-8 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.short}
                    </p>
                  </div>
                  <p className="mt-8 text-xs font-medium text-muted">
                    Cocok untuk: {service.audience}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
