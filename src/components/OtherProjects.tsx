import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const OtherProjects = () => {
  const otherProjects = [
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and customers with real-time analytics and inventory tracking. Built with modern UI components.",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Social Media App",
      description: "Full-featured social networking platform with posts, comments, likes, real-time notifications, and user profiles.",
      tags: ["Next.js", "MongoDB", "Socket.io", "Redux"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management application with kanban boards, team collaboration features, and progress tracking.",
      tags: ["React", "Node.js", "PostgreSQL", "Material-UI"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and 7-day predictions using weather APIs.",
      tags: ["React Native", "API Integration", "Maps", "Redux"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Blog CMS Platform",
      description: "Content management system for bloggers with markdown editor, SEO optimization, and analytics dashboard.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile application for tracking workouts, nutrition, and fitness goals with progress charts and workout plans.",
      tags: ["React Native", "Firebase", "Redux", "Chart.js"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            More Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Other <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Additional projects and experiments showcasing various technologies and concepts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover-lift hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover-lift text-xs"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 hover-lift text-xs"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;