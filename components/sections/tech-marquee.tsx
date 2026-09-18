import { techStack } from "@/data/portfolio";

export function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section
      aria-label="Technology stack showcase"
      className="overflow-hidden border-y border-border py-5 dark:border-white/10"
    >
      <div className="flex w-max animate-marquee gap-3">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="glass-panel inline-flex h-12 items-center rounded-full px-5 text-sm font-semibold text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
