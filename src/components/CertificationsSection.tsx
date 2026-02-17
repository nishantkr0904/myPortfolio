import { Award, Shield, Cloud, BarChart } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Google Cybersecurity Certifications",
    issuer: "Google",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Cloud,
    title: "OCI 2025 Certified DevOps Professional",
    issuer: "Oracle",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Cloud,
    title: "OCI 2025 Certified Architect Associate",
    issuer: "Oracle",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: BarChart,
    title: "Data Analyst Certification",
    issuer: "Unified Mentor",
    color: "bg-green-500/10 text-green-600",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle mx-auto">
            Professional certifications validating technical expertise
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-hover rounded-xl border border-border bg-card p-5 text-center"
            >
              <div
                className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${cert.color}`}
              >
                <cert.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
