import { Hero } from "@/components/home/hero";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { SelectedWork } from "@/components/home/selected-work";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { Cta } from "@/components/home/cta";
import { Marquee } from "@/components/ui/marquee";

const marqueeItems = [
  "Video Profil Sekolah",
  "Website Sekolah",
  "Jurnal Ilmiah",
  "Desain Grafis",
  "Pelatihan Guru",
  "Digitalisasi Sekolah",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} speed={32} />
      <ServicesShowcase />
      <SelectedWork />
      <Process />
      <Testimonials />
      <Cta />
    </>
  );
}
