import { useInView } from "../hooks/useInView";

const categories = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Backend", skills: ["Flask (Python)", "Node.js"] },
  { title: "Programming", skills: ["Python", "Java", "C", "C++", "SQL"] },
  { title: "AI & Technologies", skills: ["Machine Learning", "Prompt Engineering", "Generative AI"] },
  { title: "Core CS", skills: ["DSA", "DBMS", "OS", "Computer Networks"] },
  { title: "Cyber Security", skills: ["Web Security", "Network Security", "OWASP Top 10"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Kali Linux"] },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="font-semibold text-primary mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
