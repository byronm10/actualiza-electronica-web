
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Muestra un toast de confirmación
    toast({
      title: "Formulario enviado",
      description: "Gracias por contactarnos, nos comunicaremos contigo pronto.",
    });
    
    // Resetea el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      details: "+34 123 456 789",
      description: "Lunes a Viernes, 9am-6pm"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@actualidadelectronica.com",
      description: "Respondemos en 24 horas"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      details: "Calle Ejemplo 123, Ciudad",
      description: "Código Postal 28000"
    }
  ];
  
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
            Contáctanos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas Nuestros Servicios?
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos aquí para ayudarte. Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo a la brevedad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-5 rounded-xl bg-secondary border border-border">
                <div className="p-3 rounded-lg bg-brand-100 text-brand-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-foreground font-medium">{item.details}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
            
            <div className="p-5 rounded-xl bg-brand-50 border border-brand-100">
              <h3 className="font-semibold text-lg mb-3 text-brand-700">Horario de Atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu número de teléfono"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    required
                    className="w-full resize-none"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 button-shadow">
                Enviar Mensaje
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
