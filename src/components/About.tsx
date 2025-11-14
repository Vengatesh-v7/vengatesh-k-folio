import { Code2, Database, Layout, Server } from "lucide-react";

const About = () => {
  const stats = [
    { value: "900+", label: "Happy Clients" },
    { value: "1200+", label: "Projects Done Successfully" },
  ];

  const highlights = [
    {
      icon: Layout,
      title: "Front-end",
      description: "Modern, responsive interfaces using React, Next.js, and TypeScript",
    },
    {
      icon: Server,
      title: "Back-end",
      description: "Scalable server solutions with Node.js, Express, and Nest.js",
    },
    {
      icon: Database,
      title: "Database",
      description: "Efficient data management with MongoDB and PostgreSQL",
    },
    {
      icon: Code2,
      title: "Full Stack",
      description: "End-to-end solutions from concept to deployment",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Why you <span className="text-accent">hire me</span> for your{" "}
            <span className="text-primary">next project?</span>
          </h3>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 animate-scale-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-md hover-lift hover-glow"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-md hover-lift hover-glow transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-accent">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
