import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { blogPosts } from "@/data/portfolio";

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Blog"
          title="Practical notes on mobile engineering and clean code."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <a key={post} href="#" className="glass-panel group rounded-3xl p-6 transition hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-bold">{post}</h3>
                <ArrowUpRight className="h-5 w-5 text-sky-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                A concise engineering article covering patterns, tradeoffs, performance, and practical
                implementation details for production apps.
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
