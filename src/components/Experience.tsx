import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Support Studio Technologies",
      role: "Full Stack Developer (MERN)",
      period: "Mar 2024 - Present",
      location: "Chennai",
      description: "Leading full-stack development projects using MERN stack, implementing scalable solutions and mentoring junior developers.",
      highlights: [
        "Architected and deployed multiple production applications",
        "Improved application performance by 40%",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      company: "AgileSoftLabs",
      role: "Software Developer",
      period: "Jul 2023 - Feb 2024",
      location: "Remote",
      description: "Developed and maintained web applications, collaborated with cross-functional teams to deliver high-quality software solutions.",
      highlights: [
        "Built responsive web applications using React and Node.js",
        "Integrated third-party APIs and services",
        "Participated in code reviews and agile ceremonies",
      ],
    },
    {
      company: "Redblox Technologies",
      role: "Junior Developer",
      period: "Jan 2022 - Jun 2023",
      location: "Bangalore",
      description: "Contributed to frontend and backend development, learned industry best practices and modern development workflows.",
      highlights: [
        "Developed reusable React components",
        "Assisted in database design and optimization",
        "Wrote unit tests and documentation",
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
