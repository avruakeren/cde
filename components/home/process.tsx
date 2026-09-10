import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    no: "01",
    title: "Konsultasi kebutuhan",
    text: "Kami mendengar dulu tujuan lembaga Anda, lalu menyusun rencana yang sesuai.",
  },
  {
    no: "02",
    title: "Penawaran & kesepakatan",
    text: "Rincian cakupan, biaya, dan jadwal disepakati bersama sebelum eksekusi.",
  },
  {
    no: "03",
    title: "Produksi & pengerjaan",
    text: "Tim kami mengerjakan sesuai rencana dengan komunikasi yang terjadwal.",
  },
  {
    no: "04",
    title: "Serah terima & dukungan",
    text: "Hasil diserahkan, lalu kami dampingi agar Anda bisa memanfaatkannya sepenuhnya.",
  },
];

export function Process() {
  return (
    <section className="border-y border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          overline="Cara kerja"
          title="Langkah sederhana, dari diskusi hingga serah terima"
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="border-t border-border pt-6">
                <span className="font-display text-sm font-bold text-accent">
                  {step.no}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
