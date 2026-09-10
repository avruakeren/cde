import type { Icon } from "@phosphor-icons/react";
import {
  VideoCamera,
  Code,
  BookOpenText,
  Palette,
  ChalkboardTeacher,
} from "@phosphor-icons/react/dist/ssr";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: Icon;
  deliverables: string[];
  audience: string;
  pricingNote: string;
  packages: {
    name: string;
    price: string;
    priceNote: string;
    features: string[];
  }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "video-produksi",
    name: "Video Produksi",
    short:
      "Video profil sekolah, promosi, dokumentasi, dan media pembelajaran yang menyampaikan identitas lembaga.",
    description:
      "Kami memproduksi video yang merepresentasikan identitas dan kualitas lembaga pendidikan Anda. Dari pra-produksi hingga pasca-produksi, setiap karya disusun dengan narasi yang kuat, sinematografi yang tepat, dan pesan yang mudah dipahami oleh siswa, orang tua, hingga publik.",
    icon: VideoCamera,
    audience: "SD, SMP, SMA/SMK, pondok, dan perguruan tinggi",
    pricingNote:
      "Harga disesuaikan durasi, lokasi syuting, dan kompleksitas produksi.",
    deliverables: [
      "Video profil sekolah (3–5 menit)",
      "Video promosi PPDB / penerimaan murid",
      "Dokumentasi acara & wisuda",
      "Video pembelajaran & media ajar",
      "Reels & konten vertikal untuk sosial media",
    ],
    packages: [
      {
        name: "Profil",
        price: "Rp3,5 jt",
        priceNote: "mulai dari",
        features: [
          "Video profil 3–4 menit",
          "1 hari syuting di lokasi",
          "Naskah & storyboard",
          "1 sesi revisi",
        ],
      },
      {
        name: "Promosi",
        price: "Rp5 jt",
        priceNote: "mulai dari",
        features: [
          "Video profil + versi pendek 60 detik",
          "1–2 hari syuting",
          "Naskah, storyboard, voice-over",
          "2 sesi revisi",
        ],
      },
      {
        name: "Komprehensif",
        price: "Rp8,5 jt",
        priceNote: "mulai dari",
        features: [
          "Video profil + versi pendek + 3 konten vertikal",
          "2–3 hari syuting",
          "Voice-over profesional & musik lisensi",
          "3 sesi revisi",
        ],
      },
    ],
    faq: [
      {
        q: "Berapa lama proses produksi video profil sekolah?",
        a: "Umumnya 3–4 minggu dari survei lokasi hingga video siap diserahkan, tergantung jadwal syuting sekolah.",
      },
      {
        q: "Apakah bisa syuting di hari libur sekolah?",
        a: "Bisa. Banyak sekolah memilih syuting di akhir pekan agar suasana lebih terkontrol dan tidak mengganggu kegiatan belajar.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Pengembangan Web",
    short:
      "Website sekolah, portal, dan platform digital yang cepat, mudah dikelola, dan teroptimasi SEO.",
    description:
      "Kami membangun website dan platform digital untuk lembaga pendidikan dengan fokus pada kecepatan, kemudahan pengelolaan, dan pengalaman pengguna. Dari profil sekolah hingga portal jurnal, semuanya dirancang agar guru dan staf dapat memperbarui konten secara mandiri.",
    icon: Code,
    audience: "Sekolah, kampus, yayasan, dan penerbit akademik",
    pricingNote:
      "Harga disesuaikan jumlah halaman, fitur, dan sistem yang dibutuhkan.",
    deliverables: [
      "Website profil sekolah / kampus",
      "Portal PPDB (penerimaan murid baru)",
      "Website & manajemen jurnal ilmiah",
      "Learning management system (LMS) sederhana",
      "Perawatan & pendampingan konten",
    ],
    packages: [
      {
        name: "Profil",
        price: "Rp4,5 jt",
        priceNote: "mulai dari",
        features: [
          "Website profil hingga 10 halaman",
          "Desain responsif & SEO dasar",
          "Admin panel untuk pengelolaan konten",
          "1 tahun hosting & domain",
        ],
      },
      {
        name: "Portal",
        price: "Rp8 jt",
        priceNote: "mulai dari",
        features: [
          "Profil + portal berita & pengumuman",
          "Form PPDB & data pendaftar",
          "Manajemen konten oleh tim sekolah",
          "Integrasi WhatsApp & email",
        ],
      },
      {
        name: "Platform",
        price: "Rp15 jt",
        priceNote: "mulai dari",
        features: [
          "Portal lengkap + LMS / kelas daring",
          "Manajemen jurnal & karya siswa",
          "Dashboard analitik kunjungan",
          "Pelatihan pengelolaan sistem",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah guru atau staf yang bukan programmer bisa mengelola website?",
        a: "Bisa. Kami menyediakan admin panel yang mudah digunakan serta pelatihan singkat agar tim sekolah dapat memperbarui berita, galeri, dan halaman lainnya secara mandiri.",
      },
    ],
  },
  {
    slug: "publikasi-digital",
    name: "Publikasi Digital",
    short:
      "Jurnal, e-book, dan majalah digital yang dikelola rapi serta siap diakses publik.",
    description:
      "Kami membantu lembaga pendidikan menerbitkan karya secara digital: jurnal ilmiah dengan manajemen artikel yang rapi, e-book dan buku tahunan digital, hingga majalah sekolah. Semua dikemas agar mudah dibaca di berbagai perangkat dan tersimpan secara permanen.",
    icon: BookOpenText,
    audience: "Sekolah, kampus, guru, dan peneliti",
    pricingNote:
      "Harga disesuaikan volume artikel, jumlah terbitan, dan fitur pencarian.",
    deliverables: [
      "Website jurnal ilmiah & arsip artikel",
      "E-book & buku tahunan digital",
      "Majalah sekolah / buletin digital",
      "Dokumentasi karya siswa & guru",
      "Pendampingan pengelolaan publikasi",
    ],
    packages: [
      {
        name: "Buletin",
        price: "Rp2,5 jt",
        priceNote: "mulai dari",
        features: [
          "Majalah / buletin digital satu terbitan",
          "Desain halaman responsif",
          "Publikasi tautan publik",
          "1 sesi revisi",
        ],
      },
      {
        name: "E-book",
        price: "Rp5 jt",
        priceNote: "mulai dari",
        features: [
          "E-book / buku tahunan digital",
          "Tampilan baca nyaman (mobile-friendly)",
          "Katalog & daftar isi interaktif",
          "2 sesi revisi",
        ],
      },
      {
        name: "Jurnal",
        price: "Rp9 jt",
        priceNote: "mulai dari",
        features: [
          "Website jurnal ilmiah lengkap",
          "Manajemen artikel & metadata",
          "Pencarian & filter terbitan",
          "Pelatihan editor jurnal",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah jurnal kami bisa diakses publik tanpa biaya?",
        a: "Ya. Website jurnal dapat dibuka bebas oleh publik, sementara pengelolaan artikel dilakukan melalui panel khusus untuk editor dan penulis.",
      },
    ],
  },
  {
    slug: "desain-grafis",
    name: "Desain Grafis",
    short:
      "Identitas visual, konten sosial media, dan materi promosi untuk memperkuat citra lembaga.",
    description:
      "Kami merancang identitas visual dan materi promosi yang konsisten untuk lembaga pendidikan: logo, palet warna, konten sosial media, poster kegiatan, hingga buku tahunan. Desain kami mengedepankan kejelasan dan kesan profesional yang tepat bagi lembaga pendidikan.",
    icon: Palette,
    audience: "Sekolah, kampus, dan yayasan pendidikan",
    pricingNote: "Harga disesuaikan cakupan desain dan jenis materi.",
    deliverables: [
      "Logo & panduan identitas visual",
      "Desain konten sosial media sekolah",
      "Poster, banner & materi cetak",
      "Desain buku tahunan & modul ajar",
      "Templat presentasi sekolah",
    ],
    packages: [
      {
        name: "Paket Konten",
        price: "Rp1,5 jt",
        priceNote: "mulai dari",
        features: [
          "10 desain konten sosial media",
          "Ukuran siap unggah (feed & story)",
          "Gaya visual konsisten",
          "Revisi 1 putaran",
        ],
      },
      {
        name: "Identitas",
        price: "Rp4 jt",
        priceNote: "mulai dari",
        features: [
          "Logo + panduan identitas visual",
          "Kartu nama & kop surat digital",
          "Templat presentasi",
          "Revisi 2 putaran",
        ],
      },
      {
        name: "Branding",
        price: "Rp7 jt",
        priceNote: "mulai dari",
        features: [
          "Identitas visual lengkap",
          "Konten sosial media 3 bulan",
          "Materi cetak & digital",
          "Revisi 3 putaran",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah kami bisa memakai desain sendiri sambil dibantu penyempurnaan?",
        a: "Bisa. Kami terbuka menyempurnakan materi yang sudah ada agar konsisten dan lebih profesional, tanpa harus memulai dari nol.",
      },
    ],
  },
  {
    slug: "pelatihan-digitalisasi",
    name: "Pelatihan & Digitalisasi",
    short:
      "Workshop dan pendampingan bagi guru dan staf untuk menguasai teknologi pembelajaran.",
    description:
      "Kami menghadirkan pelatihan dan pendampingan langsung bagi guru, staf, dan pengelola sekolah untuk mengadopsi teknologi: media pembelajaran digital, pengelolaan website, pemanfaatan AI dalam mengajar, hingga digitalisasi administrasi sekolah.",
    icon: ChalkboardTeacher,
    audience: "Guru, staf sekolah, dan pengelola yayasan",
    pricingNote: "Harga disesuaikan jumlah peserta dan durasi pelatihan.",
    deliverables: [
      "Workshop media pembelajaran digital",
      "Pelatihan pemanfaatan AI untuk guru",
      "Pendampingan pengelolaan website sekolah",
      "Digitalisasi administrasi & arsip",
      "Audit kesiapan digital sekolah",
    ],
    packages: [
      {
        name: "Workshop",
        price: "Rp2 jt",
        priceNote: "mulai dari / sesi",
        features: [
          "1 sesi pelatihan (3–4 jam)",
          "Materi & modul digital",
          "Sertifikat peserta",
          "Maks. 30 peserta",
        ],
      },
      {
        name: "Program",
        price: "Rp5 jt",
        priceNote: "mulai dari / bulan",
        features: [
          "4 sesi pelatihan tematik",
          "Pendampingan via grup",
          "Modul & tugas praktik",
          "Laporan kemajuan peserta",
        ],
      },
      {
        name: "Pendampingan",
        price: "Rp8 jt",
        priceNote: "mulai dari / bulan",
        features: [
          "Program 3 bulan penuh",
          "Pendampingan individual",
          "Digitalisasi administrasi",
          "Evaluasi & rekomendasi",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah pelatihan bisa dilakukan secara daring?",
        a: "Bisa. Pelatihan tersedia dalam format luring dan daring (video conference) dengan modul yang sama.",
      },
    ],
  },
];
