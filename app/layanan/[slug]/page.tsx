import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Layanan" };
  return {
    title: service.name,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <div className="pb-24 pt-28 sm:pb-32 sm:pt-36">
      <Container>
        <Link
          href="/layanan"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Semua layanan
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon size={28} weight="bold" />
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              {service.description}
            </p>

            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Yang bisa dikerjakan
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-7 lg:sticky lg:top-28">
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
              Cocok untuk
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.audience}</p>
            <div className="mt-8">
              <Button href="/kontak" variant="primary" size="lg" className="w-full">
                Minta Penawaran
                <ArrowRight size={18} weight="bold" />
              </Button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              {service.pricingNote}
            </p>
          </div>
        </div>
      </Container>

      <section className="mt-24 border-y border-border bg-surface py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Paket harga
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Pilihan paket {service.name}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {pkg.name}
                    </h3>
                    {i === 1 && (
                      <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                        Terpopuler
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold tracking-tight text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-muted">{pkg.priceNote}</span>
                  </div>
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-muted">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">
            * Harga merupakan estimasi awal dan dapat disesuaikan dengan kebutuhan
            spesifik lembaga Anda setelah konsultasi.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Pertanyaan umum
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                Hal yang sering ditanyakan
              </h2>
            </div>
            <div className="divide-y divide-border">
              {service.faq.map((f) => (
                <div key={f.q} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
