import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "SDE (Web) Intern",
    company: "Trinwo Solutions",
    period: "Jun 2025 – Jul 2025",
    description: [
      "Developed a full-stack quiz management platform with comprehensive features",
      "Implemented role-based authentication and real-time scoring system",
      "Built responsive UI components and improved system efficiency and scalability",
    ],
    type: "current",
  },
  {
    title: "Machine Learning Intern",
    company: "Unified Mentor",
    period: "Dec 2024 – Jan 2025",
    description: [
      "Built ML pipelines for stock market forecasting using Linear Regression, Random Forest, and LSTM",
      "Performed feature engineering, EDA, and model evaluation on large datasets",
      "Delivered actionable insights through comprehensive data analysis",
    ],
    type: "completed",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            Professional journey and internship experiences
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg">
                      <Briefcase className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-hover flex-1 rounded-xl bg-card p-6">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
