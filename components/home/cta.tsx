import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-accent px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-white/10"
            />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-on-accent sm:text-4xl">
              Siap membawa lembaga pendidikan Anda ke level berikutnya?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-accent/85">
              Konsultasikan kebutuhan digitalisasi lembaga Anda. Gratis, tanpa
              komitmen.
            </p>
            <div className="mt-8">
              <Button
                href="/kontak"
                variant="light"
                size="lg"
                className="bg-background text-foreground hover:bg-surface-2"
              >
                Mulai Proyek
                <ArrowRight size={18} weight="bold" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
