import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-xl text-gray-professional max-w-2xl mx-auto">
            Minha base educacional que fundamenta minha expertise em 
            desenvolvimento de sistemas e tecnologia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card shadow-card hover:shadow-lg transition-smooth animate-fade-in">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-navy flex items-center gap-2 mb-2">
                    <GraduationCap size={28} className="text-primary" />
                    Análise e Desenvolvimento de Sistemas
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    Unifap - Centro Universitário Paraíso - UniFAP (2022 - 2026)
                  </p>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 text-gray-professional">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="font-medium">Em andamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Juazeiro do Norte - Ce</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-gray-professional mb-6 leading-relaxed">
                Curso superior focado no desenvolvimento de competências técnicas e 
                analíticas para criação, análise e manutenção de sistemas computacionais. 
                Abrange desde conceitos fundamentais da computação até tecnologias 
                modernas de desenvolvimento web e mobile.
              </p>
              
              <div>
                <h4 className="font-semibold text-navy mb-4">Principais áreas de estudo:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Programação e Algoritmos</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Banco de Dados</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Engenharia de Software</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Estrutura de Dados</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Desenvolvimento Web</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sistemas Operacionais</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Redes de Computadores</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-professional">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Metodologias Ágeis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complementary Education */}
        <div className="max-w-4xl mx-auto mt-8">
          <h3 className="text-2xl font-bold text-navy text-center mb-8">
            Formação Complementar
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="gradient-card shadow-card hover:shadow-lg transition-smooth animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Cursos Online</h4>
                <p className="text-gray-professional text-sm">
                  Constantemente aprimorando conhecimentos através de cursos 
                  especializados em tecnologias modernas de desenvolvimento web.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover:shadow-lg transition-smooth animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Projetos Práticos</h4>
                <p className="text-gray-professional text-sm">
                  Desenvolvimento de projetos pessoais e freelances para 
                  aplicação prática dos conhecimentos adquiridos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;