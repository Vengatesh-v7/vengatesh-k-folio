import { useState } from "react";
import { Code2, Database, Wrench, Palette, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Front-End Development",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React JS", level: 95, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
        { name: "Next JS", level: 90, color: "bg-gradient-to-r from-gray-700 to-gray-900" },
        { name: "React Native", level: 88, color: "bg-gradient-to-r from-blue-400 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "bg-gradient-to-r from-blue-600 to-blue-400" },
        { name: "JavaScript", level: 94, color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
        { name: "Redux", level: 88, color: "bg-gradient-to-r from-purple-600 to-purple-400" },
        { name: "Tailwind CSS", level: 92, color: "bg-gradient-to-r from-teal-400 to-cyan-500" },
        { name: "HTML/CSS", level: 95, color: "bg-gradient-to-r from-orange-500 to-red-500" },
        { name: "jQuery", level: 85, color: "bg-gradient-to-r from-blue-700 to-blue-500" },
        { name: "Bootstrap", level: 88, color: "bg-gradient-to-r from-purple-700 to-purple-500" },
        { name: "Material UI", level: 87, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
        { name: "Ant Design", level: 86, color: "bg-gradient-to-r from-red-500 to-red-600" },
      ],
    },
    {
      title: "Back-End Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node JS", level: 90, color: "bg-gradient-to-r from-green-600 to-green-400" },
        { name: "Express JS", level: 88, color: "bg-gradient-to-r from-gray-700 to-gray-500" },
        { name: "Nest JS", level: 85, color: "bg-gradient-to-r from-red-600 to-pink-500" },
        { name: "TypeScript", level: 90, color: "bg-gradient-to-r from-blue-600 to-blue-400" },
        { name: "Laravel", level: 80, color: "bg-gradient-to-r from-red-700 to-orange-600" },
      ],
    },
    {
      title: "Database Management",
      icon: Database,
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "MongoDB", level: 88, color: "bg-gradient-to-r from-green-600 to-green-800" },
        { name: "PostgreSQL", level: 82, color: "bg-gradient-to-r from-blue-600 to-indigo-600" },
        { name: "MySQL", level: 80, color: "bg-gradient-to-r from-blue-500 to-teal-600" },
      ],
    },
    {
      title: "Tools & Collaboration",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 92, color: "bg-gradient-to-r from-gray-800 to-gray-900" },
        { name: "GitLab", level: 85, color: "bg-gradient-to-r from-orange-600 to-red-600" },
        { name: "Jira", level: 88, color: "bg-gradient-to-r from-blue-600 to-blue-800" },
        { name: "VS Code", level: 95, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "Postman", level: 90, color: "bg-gradient-to-r from-orange-500 to-orange-600" },
        { name: "Figma", level: 82, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { name: "FileZilla", level: 80, color: "bg-gradient-to-r from-red-600 to-red-700" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            My Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proficient in modern technologies across the full development stack
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeCategory === idx
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : "bg-card hover:bg-card/80 text-foreground hover-lift"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                activeCategory === idx
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute pointer-events-none"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-md hover-lift hover-glow animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </h4>
                      <span className="text-2xl font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: activeCategory === idx ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;