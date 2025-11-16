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
        "Developed and integrated front-end UI using React and Redux with Nest.js/TypeScript backend API",
        "Implemented key business logic and maintained smooth operation of backend services",
        "Ensured code reliability with comprehensive Jest.js unit tests achieving over 85% coverage",
        "Automated build, test, and deployment processes via GitHub Actions for CI/CD",
      ],
    },
    {
      company: "AgileSoftLabs",
      role: "Full Stack Developer",
      period: "Nov 2024 - May 2025",
      location: "Remote",
      description: "Developed and maintained full-stack mobile and web applications for food ordering and dispatch platform, collaborating with cross-functional teams.",
      highlights: [
        "Developed core features including onboarding, UI cards, order booking, and coupons for Android and iOS",
        "Built mobile applications using React Native ensuring smooth user experience",
        "Contributed to Laravel-based backend ensuring smooth operation and integration",
        "Implemented responsive designs and optimized performance across platforms",
      ],
    },
    {
      company: "Redblox Technologies",
      role: "Full Stack Developer",
      period: "Oct 2022 - Nov 2024",
      location: "Bangalore",
      description: "Contributed as lead developer to comprehensive ERP suite integrating multiple business management functions including Timesheet, Leave Management, Ticketing, Payroll, CRM, and Onboarding.",
      highlights: [
        "Developed front-end UI for various modules using Next.js, TypeScript, and Tailwind CSS",
        "Streamlined codebase by standardizing folder structure and naming conventions",
        "Implemented CRUD operations that improved data handling efficiency significantly",
        "Configured Husky, ESLint, and Prettier improving code quality and consistency",
        "Reduced code review time through automated linting and formatting standards",
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
