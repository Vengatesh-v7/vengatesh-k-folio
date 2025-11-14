import { Progress } from "./ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React JS", level: 95 },
        { name: "Next JS", level: 90 },
        { name: "React Native", level: 88 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 94 },
        { name: "Redux", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node JS", level: 90 },
        { name: "Express JS", level: 88 },
        { name: "Nest JS", level: 85 },
        { name: "Laravel", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 82 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "GitLab", level: 85 },
        { name: "Jira", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Figma", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            My Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Expertise</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 shadow-md hover-lift animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h4 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h4>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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
