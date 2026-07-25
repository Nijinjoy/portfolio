import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";

const strengths = [
  "React Native expertise",
  "Flutter expertise",
  "React.js expertise",
  "Clean architecture",
  "Mobile performance optimization",
  "Reusable components",
  "API integration",
  "Firebase",
  "Redux Toolkit",
  "TypeScript",
  "Team collaboration",
  "Agile development",
  "ERP solutions",
  "HRMS applications",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="About Me"
          title="A product-minded mobile developer focused on reliable delivery."
          description="I combine cross-platform engineering, clean code, and thoughtful UI execution to ship apps that teams can maintain and users can trust."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-panel rounded-3xl p-7">
            <p className="text-lg leading-8 text-muted-foreground">
              I specialize in building production mobile applications for startups, software companies,
              and enterprise teams. My work covers polished UI systems, authenticated flows, API-heavy
              apps, Firebase-backed products, maps, payments, push notifications, and business apps such
              as ERP and HRMS platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {strengths.map((item) => (
              <div key={item} className="glass-panel flex items-center gap-3 rounded-2xl p-4">
                <CheckCircle2 className="h-5 w-5 flex-none text-sky-400" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
