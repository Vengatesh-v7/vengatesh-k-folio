import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "MERN Stack Development",
      issuer: "Guvi",
      year: "2024",
      description: "Comprehensive training in MongoDB, Express.js, React.js, and Node.js stack development",
    },
    {
      title: "Soft Skill Development",
      issuer: "TCS ION",
      year: "2024",
      description: "Professional development in communication, teamwork, and workplace effectiveness",
    },
    {
      title: "Crash Course on Python",
      issuer: "Coursera by Google",
      year: "2023",
      description: "Introduction to Python programming fundamentals and practical applications",
    },
    {
      title: "Web Designing",
      issuer: "Nextgen Solutions",
      year: "2022",
      description: "Training in modern web design principles, UI/UX, and front-end development",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Certifications
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Credentials</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-md hover-lift hover-glow animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary mb-1">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-sm">{cert.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
