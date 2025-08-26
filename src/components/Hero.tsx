import { Download, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from ".//./../assets/Hero.png";

const Hero = () => {
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    // Aqui você pode adicionar o link para download do CV
    window.open("/cv-jose-itamar.pdf", "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              José Itamar Pereira de Sousa Junior
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-blue-light mt-2">
                Junior
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-light mb-8">
              Desenvolvedor Web
            </p>
            
            <p className="text-lg text-blue-light/90 mb-8 max-w-lg">
              Busco a posição de desenvolvedor, onde posso aplicar minhas habilidades de 
              desenvolvimento web e de comunicação para contribuir efetivamente para o sucesso 
              da empresa.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8 text-blue-light/90">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone size={18} />
                <span>(88) 994737825</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail size={18} />
                <span>jtamarjunior06@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin size={18} />
                <span>Rua Padre Ibiapina, 80 - Cidade Crato</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleContact}
                size="lg"
                className="bg-primary hover:bg-primary-glow text-white font-semibold px-8 py-3 rounded-lg transition-smooth shadow-hero"
              >
                <Mail className="mr-2" size={20} />
                Entre em Contato
              </Button>
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className="border-blue-light text-blue-light hover:bg-blue-light hover:text-navy font-semibold px-8 py-3 rounded-lg transition-smooth"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hero animate-float">
                <img
                  src={profilePhoto}
                  alt="José Itamar Pereira de Sousa Junior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-light/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;