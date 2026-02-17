import { Brain, BarChart3, Globe, Microscope } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI / Machine Learning Solutions",
    description:
      "Custom ML models, neural networks, and AI-powered applications tailored to solve complex business problems and automate decision-making.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description:
      "Transform raw data into actionable insights through comprehensive EDA, statistical analysis, and interactive visualizations.",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development with modern frameworks, responsive design, and seamless user experiences.",
  },
  {
    icon: Microscope,
    title: "Research & Internship Projects",
    description:
      "Academic research support, thesis projects, and structured internship work with documentation and practical implementations.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary/30">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle mx-auto">
            Professional offerings to help bring your ideas to life
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-hover group rounded-xl bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary group-hover:scale-110">
                <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
