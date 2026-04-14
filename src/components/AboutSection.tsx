import { useInView } from "../hooks/useInView";
import { Code2, Shield, Brain } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full Stack Dev", desc: "Python, Flask, JavaScript" },
  { icon: Brain, label: "AI & ML", desc: "Machine Learning, Gen AI" },
  { icon: Shield, label: "Cyber Security", desc: "OWASP, Network Security" },
];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          About <span className="text-gradient">Me</span>
        </h2>
        <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          I am a motivated Computer Science undergraduate specializing in Artificial Intelligence &amp; Machine Learning, with Honours in Cyber Security. I have a strong foundation in Python, problem-solving, and core CS concepts including Data Structures, DBMS, Operating Systems, and Computer Networks. I am passionate about building real-world applications and continuously improving my skills.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`glass rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
