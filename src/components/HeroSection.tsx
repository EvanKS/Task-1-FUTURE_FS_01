import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
    {/* Subtle gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="space-y-6 max-w-3xl mx-auto">
        <p className="text-sm font-mono tracking-widest uppercase text-primary animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-gradient">Evan K S</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground font-light animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Full Stack Developer · AI &amp; Cyber Security Enthusiast
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Bengaluru, Karnataka · Building intelligent, secure applications that make a difference.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a href="https://github.com/EvanKS" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/evan-ks-472580315/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:evan8760r@gmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>
    </div>
  </section>
);

export default HeroSection;
