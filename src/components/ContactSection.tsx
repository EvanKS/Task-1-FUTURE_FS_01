import { useState, type FormEvent } from "react";
import { useInView } from "../hooks/useInView";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const socials = [
  { icon: Mail, label: "evan8760r@gmail.com", href: "mailto:evan8760r@gmail.com" },
  { icon: Phone, label: "+91 9611789501", href: "tel:+919611789501" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/evan-ks-472580315/" },
  { icon: Github, label: "GitHub", href: "https://github.com/EvanKS" },
];

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { name: fd.get("name") as string, email: fd.get("email") as string, message: fd.get("message") as string };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => { fieldErrors[issue.path[0] as string] = issue.message; });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    window.location.href = "mailto:evan8760r@gmail.com";
    toast.success("Opening default email client...");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <div className={`space-y-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                    <s.icon size={18} />
                  </div>
                  <span className="text-sm">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {submitted ? (
              <div className="glass rounded-xl p-10 text-center">
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your message has been received. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
                <div>
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition text-sm"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition text-sm"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition text-sm resize-none"
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
