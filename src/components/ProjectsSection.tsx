import { useInView } from "../hooks/useInView";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className={`glass rounded-2xl overflow-hidden max-w-3xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="p-1">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 sm:p-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-primary mb-2 block">Featured Project</span>
                  <h3 className="text-2xl font-bold">Medora</h3>
                </div>
                <a
                  href="https://github.com/EvanKS/Medora-Diabetes-Heart-Disease-Prediction-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
              <p className="text-sm font-medium text-accent mb-3">AI Healthcare Prediction System</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Developed an AI-powered full-stack healthcare web application that predicts the risk of Diabetes and Heart Disease using machine learning models. Features real-time prediction, Flask backend integration, and a responsive medical-style UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Flask", "Scikit-learn", "HTML", "CSS", "JavaScript"].map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-background/60 text-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/EvanKS/Medora-Diabetes-Heart-Disease-Prediction-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
