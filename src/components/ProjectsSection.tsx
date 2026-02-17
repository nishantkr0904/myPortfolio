import { ExternalLink, Github, Shield, Brain, LineChart, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Shield,
    title: "Network Intrusion Detection System",
    description:
      "A comprehensive security tool that monitors network traffic and detects potential intrusion attempts using machine learning algorithms.",
    techStack: ["Python", "Flask", "nmap", "ML"],
    github: "https://github.com/nishantkr0904/Network-Intrusion-Detection-System",
    live: null,
  },
  {
    icon: Brain,
    title: "Calmify – AI Mental Wellness Platform",
    description:
      "An AI-powered platform designed to support mental wellness through intelligent conversations and personalized recommendations.",
    techStack: ["Azure OpenAI", "React", "Node.js"],
    github: "https://github.com/nishantkr0904/Calmify",
    live: "#",
  },
  {
    icon: MessageSquare,
    title: "Restaurant Review Sentiment Classifier",
    description:
      "NLP-based system for analyzing restaurant reviews, performing sentiment analysis and aspect-based classification.",
    techStack: ["Python", "NLP", "BERT", "Flask"],
    github: "https://github.com/nishantkr0904/restaurant-review-classifier",
    live: null,
  },
  {
    icon: LineChart,
    title: "Stock Market Analytics System",
    description:
      "Multi-stock forecasting platform using Linear Regression, Random Forest, and LSTM models for market prediction.",
    techStack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    github: "https://github.com/nishantkr0904/Stock-Market-Analysis",
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-hover group rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
