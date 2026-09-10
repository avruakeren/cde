import { cn } from "@/lib/utils";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export function SectionHeading({
  overline,
  title,
  description,
  align = "left",
  className,
}: {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {overline && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {overline}
        </p>
      )}
      <AnimatedHeading className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </AnimatedHeading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
