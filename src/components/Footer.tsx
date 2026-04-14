import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Evan K S. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/EvanKS" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/evan-ks-472580315/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href="mailto:evan8760r@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
