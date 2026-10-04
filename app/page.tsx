import dynamic from "next/dynamic";
import { Navbar } from "@/components/common/navbar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";

const ProjectsSection = dynamic(
  () => import("@/components/sections/projects").then((module) => module.ProjectsSection),
  {
    loading: () => (
      <section className="section" aria-label="Loading projects">
        <div className="container-premium grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="glass-panel h-96 animate-pulse rounded-2xl" />
          ))}
        </div>
      </section>
    ),
  },
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
