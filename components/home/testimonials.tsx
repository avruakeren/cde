import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          overline="Kata mereka"
          title="Dipercaya oleh pengelola lembaga pendidikan"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-7">
                <blockquote className="text-[15px] leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
