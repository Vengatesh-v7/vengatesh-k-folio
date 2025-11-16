import { useEffect, useState, useRef } from "react";
import { Award, Briefcase, Code2, Users } from "lucide-react";

const Stats = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    skills: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Briefcase,
      end: 3,
      suffix: "+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      end: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      end: 900,
      suffix: "+",
      label: "Happy Clients",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      end: 25,
      suffix: "+",
      label: "Technical Skills",
      color: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let current = 0;
      return setInterval(() => {
        current += stat.end / steps;
        if (current >= stat.end) {
          setCounts((prev) => ({
            ...prev,
            [Object.keys(counts)[index]]: stat.end,
          }));
          clearInterval(timers[index]);
        } else {
          setCounts((prev) => ({
            ...prev,
            [Object.keys(counts)[index]]: Math.floor(current),
          }));
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const value = Object.values(counts)[index];
            
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 text-center shadow-md hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-gradient bg-gradient-to-r ${stat.color}">
                    {value}{stat.suffix}
                  </span>
                </div>
                
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;