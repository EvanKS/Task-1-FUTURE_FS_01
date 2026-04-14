import { useInView } from "../hooks/useInView";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-gradient">Education</span>
        </h2>
        <div className={`glass rounded-2xl p-8 max-w-2xl mx-auto text-center transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
            <GraduationCap size={28} />
          </div>
          <h3 className="text-xl font-bold mb-1">B.Tech in Computer Science and Engineering</h3>
          <p className="text-primary font-medium mb-1">Specialization: AI &amp; Machine Learning</p>
          <p className="text-accent font-medium text-sm mb-3">Honours in Cyber Security</p>
          <p className="text-muted-foreground">CHRIST (Deemed to be University), Bangalore</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
