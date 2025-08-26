import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      position: "Estágio",
      company: "Prefeitura Municipal do Crato",
      location: "Crato, CE",
      period: "Em curso",
      description: "Desenvolvimento de soluções web para a administração pública municipal.",
      responsibilities: []
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-professional max-w-2xl mx-auto">
            Minha jornada no desenvolvimento web e as experiências que moldaram 
            minha carreira profissional.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="gradient-card shadow-card hover:shadow-lg transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy flex items-center gap-2">
                      <Briefcase size={24} />
                      {exp.position}
                    </h3>
                    <p className="text-xl text-primary font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2 text-gray-professional">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-professional mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {exp.responsibilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Principais responsabilidades:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-professional">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;