import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl", align === "center" ? "text-center" : "text-left")}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
