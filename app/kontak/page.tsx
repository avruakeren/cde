"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";
import { services } from "@/content/services";

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    lembaga: "",
    email: "",
    layanan: "",
    pesan: "",
  });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Permintaan Penawaran — ${form.layanan || "Layanan"} (${form.lembaga || "Lembaga"})`,
    );
    const body = encodeURIComponent(
      `Nama: ${form.nama}\nLembaga: ${form.lembaga}\nEmail: ${form.email}\nLayanan: ${form.layanan}\n\nPesan:\n${form.pesan}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="pb-24 pt-28 sm:pb-32 sm:pt-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <SectionHeading
              overline="Kontak"
              title="Mulai proyek Anda"
              description="Ceritakan kebutuhan lembaga pendidikan Anda. Kami akan merespons dalam satu hari kerja."
            />
            <div className="mt-10 space-y-4">
              <p className="text-sm font-semibold text-foreground">
                Sampaikan kebutuhan melalui email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-medium text-accent hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold text-foreground">Layanan kami</p>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.slug} className="text-sm text-muted">
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-7 sm:p-10">
            {sent ? (
              <div className="flex min-h-72 flex-col items-center justify-center text-center">
                <CheckCircle size={48} weight="fill" className="text-accent" />
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                  Aplikasi email telah dibuka
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Pesan Anda sudah disiapkan di aplikasi email. Klik kirim di sana
                  untuk meneruskannya kepada kami.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="nama" className="block text-sm font-medium text-foreground">
                      Nama lengkap
                    </label>
                    <input
                      id="nama"
                      required
                      className={inputClass}
                      placeholder="Budi Santoso"
                      value={form.nama}
                      onChange={update("nama")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lembaga" className="block text-sm font-medium text-foreground">
                      Nama lembaga / sekolah
                    </label>
                    <input
                      id="lembaga"
                      required
                      className={inputClass}
                      placeholder="SMA Negeri 1"
                      value={form.lembaga}
                      onChange={update("lembaga")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="nama@sekolah.sch.id"
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="layanan" className="block text-sm font-medium text-foreground">
                    Layanan yang dibutuhkan
                  </label>
                  <select
                    id="layanan"
                    required
                    className={inputClass}
                    value={form.layanan}
                    onChange={update("layanan")}
                  >
                    <option value="" disabled>
                      Pilih layanan
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="pesan" className="block text-sm font-medium text-foreground">
                    Ceritakan kebutuhan Anda
                  </label>
                  <textarea
                    id="pesan"
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Contoh: kami ingin membuat video profil sekolah untuk PPDB tahun ini."
                    value={form.pesan}
                    onChange={update("pesan")}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-on-accent transition-all duration-200 hover:bg-accent-strong active:translate-y-px sm:w-auto"
                >
                  Kirim Permintaan
                  <ArrowRight size={18} weight="bold" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
