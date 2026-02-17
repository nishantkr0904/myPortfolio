import { GraduationCap, BookOpen, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech in CSE",
    description: "SRM University, Amravati (2023-2027)",
  },
  {
    icon: BookOpen,
    title: "CGPA: 8.8",
    description: "Strong academic foundation",
  },
  {
    icon: Target,
    title: "Focused Areas",
    description: "AI, ML, Data Science, Full-Stack",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Research-oriented mindset",
  },
];

const focusAreas = [
  "Artificial Intelligence & Machine Learning",
  "Generative AI & Deep Learning",
  "Data Science & Analytics",
  "Computer Networks & Operating Systems",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate about building intelligent systems and solving real-world problems
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Computer Science and Engineering undergraduate with a deep passion for 
              Artificial Intelligence and Machine Learning. My journey in tech is driven by 
              curiosity and a desire to build solutions that make a meaningful impact.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I believe in combining strong theoretical knowledge with hands-on implementation. 
              From developing ML pipelines for stock market forecasting to building full-stack 
              web applications, I enjoy the challenge of turning complex problems into elegant solutions.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am actively seeking opportunities to grow through impactful projects, research 
              collaborations, and industry experience that push the boundaries of what's possible 
              with AI and technology.
            </p>

            {/* Focus Areas */}
            <div className="pt-4">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Academic Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-hover rounded-xl bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
