export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: "Video" | "Web" | "Publikasi" | "Desain" | "Pelatihan";
  service: string;
  year: string;
  summary: string;
  outcome: string;
  accent: string;
  placeholder: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "profil-sma-nusantara",
    title: "Video Profil & Kampanye PPDB",
    client: "SMA Negeri Nusantara",
    category: "Video",
    service: "Video Produksi",
    year: "2026",
    summary:
      "Video profil dan versi pendek untuk kampanye penerimaan murid baru.",
    outcome:
      "Lebih dari 1.200 pendaftar pada gelombang pertama setelah kampanye.",
    accent: "bg-[#0f7b5f]",
    placeholder: true,
  },
  {
    slug: "website-kampus-merdeka",
    title: "Website Profil Kampus",
    client: "Kampus Merdeka Institute",
    category: "Web",
    service: "Pengembangan Web",
    year: "2026",
    summary:
      "Website profil kampus dengan portal berita dan form pendaftaran.",
    outcome: "Informasi terpusat dan pengelolaan konten oleh tim humas kampus.",
    accent: "bg-[#2563eb]",
    placeholder: true,
  },
  {
    slug: "jurnal-ilmu-pendidikan",
    title: "Portal Jurnal Ilmiah",
    client: "Fakultas Ilmu Pendidikan",
    category: "Publikasi",
    service: "Publikasi Digital",
    year: "2026",
    summary:
      "Website jurnal dengan manajemen artikel dan arsip terbitan.",
    outcome: "Artikel mudah ditemukan dan dikelola oleh editor jurnal.",
    accent: "bg-[#7c3aed]",
    placeholder: true,
  },
  {
    slug: "identitas-sekolah-harapan",
    title: "Identitas Visual & Konten Sosmed",
    client: "Sekolah Harapan Bunda",
    category: "Desain",
    service: "Desain Grafis",
    year: "2025",
    summary:
      "Logo, panduan identitas, dan konten sosial media selama satu tahun ajaran.",
    outcome: "Konsistensi citra sekolah di semua media promosi.",
    accent: "bg-[#ea580c]",
    placeholder: true,
  },
  {
    slug: "pelatihan-media-guru",
    title: "Program Digitalisasi Guru",
    client: "Yayasan Pendidikan Citra",
    category: "Pelatihan",
    service: "Pelatihan & Digitalisasi",
    year: "2025",
    summary:
      "Pelatihan media pembelajaran digital untuk 60 guru di 4 sekolah.",
    outcome: "Guru mampu menyusun bahan ajar digital secara mandiri.",
    accent: "bg-[#0d9488]",
    placeholder: true,
  },
  {
    slug: "dokumentasi-wisuda",
    title: "Dokumentasi Wisuda & Acara",
    client: "Universitas Dharma Kencana",
    category: "Video",
    service: "Video Produksi",
    year: "2025",
    summary:
      "Liputan lengkap upacara wisuda dalam bentuk video sinematik.",
    outcome: "Momen wisuda terdokumentasi dan dibagikan di kanal resmi.",
    accent: "bg-[#db2777]",
    placeholder: true,
  },
];
