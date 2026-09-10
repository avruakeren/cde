export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Video profil sekolah kami benar-benar menggambarkan suasana belajar yang ingin kami tampilkan. Tim sangat memahami kebutuhan sekolah.",
    name: "Dra. Sri Wahyuni, M.Pd.",
    role: "Kepala Sekolah, SMA Negeri Nusantara",
  },
  {
    quote:
      "Website kampus kini mudah dikelola sendiri oleh tim humas. Prosesnya jelas dan dukungannya cepat setiap kali kami bertanya.",
    name: "Rizky Firmansyah",
    role: "Koordinator Humas, Kampus Merdeka Institute",
  },
  {
    quote:
      "Pelatihannya langsung praktis dipakai di kelas. Guru-guru kami jadi lebih percaya diri mengembangkan media pembelajaran.",
    name: "Ahmad Zaki",
    role: "Kepala Bidang Akademik, Yayasan Pendidikan Citra",
  },
];
