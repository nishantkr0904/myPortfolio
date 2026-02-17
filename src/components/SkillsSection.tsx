import { Code2, Brain, Sparkles, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    skills: [
      "Regression",
      "Classification",
      "CNN",
      "RNN/LSTM",
      "Transformers",
      "BERT",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    skills: [
      "GANs",
      "Diffusion Models",
      "Autoencoders",
      "Attention Mechanisms",
    ],
  },
  {
    icon: Database,
    title: "Data Science",
    skills: [
      "SQL",
      "EDA",
      "ETL",
      "Visualization",
      "Time-Series Forecasting",
    ],
  },
  {
    icon: Wrench,
    title: "Frameworks & Tools",
    skills: [
      "TensorFlow",
      "Keras",
      "Flask",
      "React",
      "Node.js",
      "Git",
      "Docker",
      "Linux",
      "AWS",
      "Azure",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-hover rounded-xl border border-border bg-card p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
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

export default SkillsSection;
