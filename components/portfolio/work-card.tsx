import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/content/portfolio";

export function WorkCard({
  item,
  className,
}: {
  item: PortfolioItem;
  className?: string;
}) {
  return (
    <Link
      href={`/portofolio#${item.slug}`}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex h-44 items-center justify-center overflow-hidden sm:h-52",
          item.accent,
        )}
      >
        <div className="flex size-20 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
          <span className="font-display text-2xl font-bold text-white/90">
            {item.client.charAt(0)}
          </span>
        </div>
        {item.placeholder && (
          <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            Contoh
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {item.category}
          </p>
          <ArrowUpRight
            size={18}
            className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
          />
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-foreground">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{item.client}</p>
      </div>
    </Link>
  );
}
