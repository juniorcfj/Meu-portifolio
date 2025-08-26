import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Palette, 
  Users, 
  GitBranch, 
  Globe,
  Terminal,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Tecnologias",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: [
        { name: "SQL", level: 85 },
        { name: "NoSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Design & UX/UI",
      icon: Palette,
      skills: [
        { name: "Design Responsivo", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Adobe Creative Suite", level: 75 },
        { name: "Prototipagem", level: 85 }
      ]
    },
    {
      title: "Ferramentas & Metodologias",
      icon: GitBranch,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Metodologias Ágeis", level: 85 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    "Informática",
    "Lógica de Programação", 
    "Exploração de Novas Tendências em TI",
    "Colaboração Ativa",
    "Domínio de Git e GitHub"
  ];

  const languages = [
    { name: "Português", level: "Nativo", percentage: 100 },
    { name: "Inglês", level: "Intermediário", percentage: 70 }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Habilidades & Competências
          </h2>
          <p className="text-xl text-gray-professional max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções web 
            modernas e eficientes.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="gradient-card shadow-card hover:shadow-lg transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-navy">
                  <category.icon size={24} className="text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-professional">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-light rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="gradient-card shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-navy">
                <Terminal size={24} className="text-primary" />
                Competências Adicionais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-2 text-sm font-medium bg-blue-light text-navy hover:bg-primary hover:text-white transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="gradient-card shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-navy">
                <Globe size={24} className="text-primary" />
                Idiomas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-professional">
                        {lang.name}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-light rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;