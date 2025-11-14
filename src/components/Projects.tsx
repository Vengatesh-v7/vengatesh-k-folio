import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Next Street",
      description: "Nextstreet connects entrepreneurs and small business owners with the right resources at the right time, from place-based strategies to capital transactions. Developed front-end UI with React and Redux, integrated Nest.js/TypeScript backend API, implemented business logic, and achieved 85%+ test coverage with Jest.",
      role: "Developed and integrated front-end UI, implemented backend services, automated CI/CD with GitHub Actions",
      tags: ["React JS", "Nest JS", "TypeScript", "Redux", "Jest"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Workspace 360",
      description: "Comprehensive ERP suite integrating multiple business management functions into a single platform including Timesheet, Leave Management, Ticketing, Payroll, CRM, and Onboarding. Led front-end development, streamlined codebase structure, and implemented CRUD operations improving data handling efficiency.",
      role: "Lead developer for front-end modules, backend CRUD operations, code quality standardization",
      tags: ["Next JS", "Node JS", "Express JS", "TypeScript", "Tailwind", "Antd"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Spryntz",
      description: "Food ordering and dispatch app connecting consumers with local restaurants, providing convenient doorstep delivery. Developed core features including onboarding, UI cards, order booking, and coupon systems for both Android and iOS platforms using React Native.",
      role: "Developed mobile app features for Android/iOS, contributed to Laravel backend",
      tags: ["React Native", "React JS", "Laravel", "Redux"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      title: "Producer Bazaar",
      description: "Online marketplace designed for producers to showcase and buy/sell their rights for movies, albums, and other content using NFTs. Built well-structured interface with smooth navigation, responsive design, and optimized layout for seamless product discovery and purchase experience.",
      role: "Developed responsive UI, implemented product browsing and purchase flows",
      tags: ["Next JS", "Node JS", "Express JS", "MongoDB", "NFT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise across various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover-lift hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Role */}
                <div className="mb-4 p-3 bg-primary/5 rounded-lg border-l-2 border-primary/50">
                  <p className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-1">
                    My Role
                  </p>
                  <p className="text-sm text-foreground/80">
                    {project.role}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover-lift"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover-lift"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
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

export default Projects;
