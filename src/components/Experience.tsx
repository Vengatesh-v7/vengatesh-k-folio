import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Support Studio Technologies",
      role: "Full Stack Developer",
      period: "June 2025 - Sep 2025",
      location: "Chennai",
      description: "Led full-stack development projects using MERN stack, architecting scalable solutions and implementing best practices across multiple enterprise applications.",
      highlights: [
        "Architected and deployed production-ready web applications with React, Node.js, and MongoDB",
        "Implemented comprehensive testing strategies achieving 85%+ code coverage using Jest",
        "Automated CI/CD pipelines using GitHub Actions for streamlined deployments",
        "Mentored junior developers on code quality and best practices",
      ],
    },
    {
      company: "AgileSoftLabs",
      role: "Full Stack Developer",
      period: "Nov 2024 - May 2025",
      location: "Remote",
      description: "Developed and maintained full-stack web applications, collaborating with cross-functional teams to deliver high-quality software solutions on time.",
      highlights: [
        "Built responsive web applications using React Native and Laravel",
        "Developed core features including payment integration, order management, and user authentication",
        "Integrated third-party APIs and services for enhanced functionality",
        "Participated in agile ceremonies and code reviews to maintain code quality",
      ],
    },
    {
      company: "Redblox Technologies",
      role: "Full Stack Developer",
      period: "Oct 2022 - Nov 2024",
      location: "Bangalore",
      description: "Contributed to frontend and backend development for various projects, learning industry best practices and modern development workflows in a collaborative environment.",
      highlights: [
        "Developed the front-end UI for ERP modules using Next.js, TypeScript, and Tailwind CSS",
        "Streamlined codebase by standardizing folder structure and naming conventions",
        "Implemented CRUD operations improving data handling efficiency by 30%",
        "Configured Husky, ESLint, and Prettier reducing code review time significantly",
        "Built responsive interfaces ensuring seamless user experience across devices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Career Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-6 md:p-8 shadow-md hover-lift hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-primary mb-1">
                    {exp.role}
                  </h4>
                  <h5 className="text-xl font-semibold text-foreground mb-2">
                    {exp.company}
                  </h5>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="text-accent mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
