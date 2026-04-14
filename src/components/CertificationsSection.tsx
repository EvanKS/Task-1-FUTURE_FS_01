import { useInView } from "../hooks/useInView";
import { Award } from "lucide-react";

const certs = [
  "Artificial Intelligence: Principles and Practices — Udemy",
  "ChatGPT & Prompt Engineering — Udemy",
  "Python Programming — Udemy",
  "NPTEL Python Course",
  "Infosys Network Fundamentals",
];

const CertificationsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gradient">Certifications</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <div
              key={c}
              className={`glass rounded-xl p-5 flex items-start gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Award size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm font-medium">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
