import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary opacity-0 animate-fade-in">
              Welcome to my portfolio
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in [animation-delay:100ms] md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="gradient-text">Nishant Kumar</span>
            </h1>
            <p className="mb-4 text-lg font-medium text-foreground/80 opacity-0 animate-fade-in [animation-delay:200ms] md:text-xl">
              AI & Machine Learning Engineer | Data Science & Full-Stack Development Enthusiast
            </p>
            <p className="mb-8 max-w-xl text-muted-foreground opacity-0 animate-fade-in [animation-delay:300ms] lg:mx-0 mx-auto">
              I am a Computer Science and Engineering undergraduate with a strong focus on 
              Artificial Intelligence, Machine Learning, and Data Science. I enjoy building 
              intelligent systems, scalable web applications, and data-driven solutions by 
              combining solid theoretical foundations with real-world problem solving.
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in [animation-delay:400ms] lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in [animation-delay:500ms] lg:justify-start">
              <a
                href="https://www.linkedin.com/in/nishant-kumar-544b79290/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/nishantkr0904"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:nishantkr.0904@gmail.com"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative opacity-0 animate-fade-in [animation-delay:200ms]">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-xl md:h-80 md:w-80 lg:h-96 lg:w-96">
                <img
                  src={profilePhoto}
                  alt="Nishant Kumar"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-primary/20 animate-float" />
              <div className="absolute -bottom-2 -left-6 h-12 w-12 rounded-full bg-primary/15 animate-float [animation-delay:2s]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:700ms]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll down</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="h-2 w-full rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
