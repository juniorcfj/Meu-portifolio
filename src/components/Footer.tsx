import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-blue-light/90 mb-2">
            © {currentYear} José Itamar Pereira de Sousa Junior. Todos os direitos reservados.
          </p>
          <p className="text-blue-light/70 text-sm flex items-center justify-center gap-2">
            Desenvolvido com <Heart size={16} className="text-red-400" fill="currentColor" /> usando React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;