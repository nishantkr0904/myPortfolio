import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nishantkr.0904@gmail.com",
    href: "mailto:nishantkr.0904@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7004613014",
    href: "tel:+917004613014",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nishant-kumar-544b79290/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nishantkr0904",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-card"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Connect with Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-card"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-card resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
