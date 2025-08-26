import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio de email
    const emailSubject = encodeURIComponent(formData.subject || "Contato do Portfólio");
    const emailBody = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    const mailtoLink = `mailto:jtamarjunior06@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email preparado!",
      description: "Seu cliente de email foi aberto com a mensagem pronta para envio.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jtamarjunior06@gmail.com",
      href: "mailto:jtamarjunior06@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(88) 994737825",
      href: "tel:+5588994737825"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Rua Padre Ibiapina, 80 - Cidade Crato, CE",
      href: "https://maps.google.com/?q=Rua+Padre+Ibiapina+80+Crato+CE"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/jtamarjunior",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/jose-itamar",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-professional max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades de desenvolvimento web e 
            como posso contribuir para seu próximo projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="gradient-card shadow-card hover:shadow-lg transition-smooth animate-fade-in">
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 text-gray-professional hover:text-primary transition-smooth"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-navy">{info.label}</p>
                          <p className="text-sm">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card rounded-lg flex items-center justify-center text-gray-professional transition-smooth shadow-card hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card shadow-card hover:shadow-lg transition-smooth animate-fade-in">
            <CardHeader>
              <CardTitle className="text-navy">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-32"
                    placeholder="Descreva sua proposta, dúvida ou oportunidade..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-glow text-white font-semibold py-3 rounded-lg transition-smooth"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;