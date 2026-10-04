const strengths = [
  "React Native",
  "React & Next.js",
  "Vue.js & WordPress",
  "Node.js & MongoDB",
  "APIs & Firebase",
  "Redux Toolkit",
  "TypeScript",
];

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container-premium">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">
          About
        </p>
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Code that ships. <span className="text-muted-foreground">Apps that last.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I build production apps for startups and enterprises: polished UI, secure login,
            payments, maps, push notifications, and the HR &amp; ERP systems teams run on every day.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {strengths.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
