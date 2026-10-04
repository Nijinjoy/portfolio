import { SectionHeading } from "@/components/common/section-heading";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Services"
          title="From idea to app store."
          description="First build, full launch, or a stubborn bug — I plug in wherever your product needs momentum."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="glass-panel rounded-2xl p-6 transition hover:border-primary/50"
              >
                <span className="text-accent-ink">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
