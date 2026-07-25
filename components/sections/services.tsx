import { SectionHeading } from "@/components/common/section-heading";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end support for mobile products."
          description="From first build to optimization, maintenance, and consulting."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/12 text-sky-300">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
