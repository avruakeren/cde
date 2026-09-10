import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Profil agensi digital yang fokus mendampingi lembaga pendidikan dalam transformasi digital.",
};

const values = [
  {
    title: "Paham dunia pendidikan",
    text: "Kami terbiasa bekerja dengan sekolah, kampus, dan yayasan. Bahasa kami sederhana dan menghargai proses belajar.",
  },
  {
    title: "Hasil yang bisa dikelola",
    text: "Setiap produk disertai pelatihan agar tim lembaga dapat memanfaatkannya secara mandiri, bukan sekali jadi.",
  },
  {
    title: "Harga yang realistis",
    text: "Penawaran transparan dan disesuaikan dengan anggaran lembaga pendidikan, tanpa biaya tersembunyi.",
  },
];

const stats = [
  { value: "50+", label: "Proyek digitalisasi" },
  { value: "30+", label: "Lembaga pendidikan" },
  { value: "5", label: "Layanan utama" },
];

export default function TentangPage() {
  return (
    <>
      <section className="pb-24 pt-28 sm:pb-32 sm:pt-36">
        <Container>
          <SectionHeading
            overline="Tentang"
            title="Mitra digital yang memahami dunia pendidikan"
            description="Kami membantu sekolah, kampus, dan yayasan menghadirkan citra profesional melalui video, website, publikasi, dan pelatihan."
          />
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="font-display text-5xl font-bold tracking-tight text-foreground">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <SectionHeading
                overline="Nilai kami"
                title="Prinsip yang kami pegang"
              />
            </div>
            <div className="divide-y divide-border">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="py-8 first:pt-0">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-10 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Bekerja sama dengan kami
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Ceritakan kebutuhan lembaga Anda. Kami akan merespons dalam satu
                hari kerja.
              </p>
            </div>
            <Button href="/kontak" variant="primary" size="lg">
              Hubungi Kami
              <ArrowRight size={18} weight="bold" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
