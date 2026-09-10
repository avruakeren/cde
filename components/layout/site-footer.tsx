import Link from "next/link";
import { ArrowUpRight, Envelope, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { services } from "@/content/services";

const socialIcons = {
  Instagram: InstagramLogo,
  YouTube: YoutubeLogo,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo-real.png" alt={site.name} className="h-7" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}. Mendampingi sekolah, kampus, dan yayasan dalam
              transformasi digital.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent"
            >
              <Envelope size={16} />
              {site.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Layanan</h3>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/layanan/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Ikuti Kami</h3>
            <ul className="mt-4 space-y-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {Icon ? <Icon size={16} /> : <ArrowUpRight size={16} />}
                      {s.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-muted">
            Mitra digital lembaga pendidikan di Indonesia.
          </p>
        </div>
      </Container>
    </footer>
  );
}
