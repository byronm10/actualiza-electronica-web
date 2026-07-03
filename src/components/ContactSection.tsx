
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const CONTACT_INFO = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: 'Teléfono',
    details: '+57 320 527 2330',
    sub: 'Lunes a viernes, 8:00 a 18:00',
    href: 'tel:+573205272330',
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: 'WhatsApp',
    details: '+57 320 527 2330',
    sub: 'Respuesta en menos de 1 hora',
    href: 'https://wa.me/573205272330',
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Correo',
    details: 'contabilidad@actualidadelectronica.com.co',
    sub: 'Respondemos en 24 horas',
    href: 'mailto:contabilidad@actualidadelectronica.com.co',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Sede técnica',
    details: 'Cr15 54-186, Soledad',
    sub: 'Atlántico, Colombia · 08001',
    href: 'https://maps.google.com/?q=Cr15+54-186+Soledad+Atlantico',
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    const serviceId = 'service_id';
    const templateId = 'template_id';
    const publicKey = 'public_key';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        toast({
          title: 'Mensaje enviado',
          description: 'Gracias por contactarnos, nos comunicaremos contigo pronto.',
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      })
      .catch(() => {
        toast({
          title: 'Error al enviar',
          description: 'Ha ocurrido un error. Escríbenos por WhatsApp mientras lo revisamos.',
          variant: 'destructive',
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contacto" className="relative py-24">
      <div className="absolute inset-0 hex-grid opacity-30" />
      <div className="absolute -top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-electric-500/10 blur-3xl" />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Hablemos</span>
          <h2 className="section-heading">
            Cuéntanos qué necesita tu <span className="gradient-text-cyan">flota</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Diagnóstico técnico sin costo. Nuestro equipo responde en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {CONTACT_INFO.map(item => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="glass-card glass-card-hover flex items-start gap-4 rounded-xl p-5 group"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/20 to-plasma-500/20 text-electric-300 ring-1 ring-white/10">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-white/50">{item.title}</div>
                  <div className="mt-0.5 text-sm font-semibold text-white truncate">{item.details}</div>
                  <div className="text-xs text-white/55">{item.sub}</div>
                </div>
              </a>
            ))}

            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 text-electric-300">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">Horario de atención</span>
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between text-white/80">
                  <span>Lunes – Viernes</span>
                  <span className="font-semibold text-white">8:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Sábado</span>
                  <span className="font-semibold text-white">9:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Domingo</span>
                  <span>Emergencias por WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-white/70">Nombre completo</label>
                  <Input
                    id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-electric-400/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-medium text-white/70">Empresa</label>
                  <Input
                    id="company" name="company"
                    value={formData.company} onChange={handleChange}
                    placeholder="Nombre de la empresa"
                    className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-electric-400/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-white/70">Correo</label>
                  <Input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="tu@empresa.com"
                    className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-electric-400/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-medium text-white/70">Teléfono</label>
                  <Input
                    id="phone" name="phone"
                    value={formData.phone} onChange={handleChange}
                    placeholder="+57 3XX XXX XXXX"
                    className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-electric-400/60"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-white/70">¿Cómo podemos ayudarte?</label>
                <Textarea
                  id="message" name="message" rows={5} required
                  value={formData.message} onChange={handleChange}
                  placeholder="Cuéntanos qué módulo, marca de vehículo o servicio necesitas."
                  className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-electric-400/60 resize-none"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-glow flex-1 bg-gradient-to-r from-electric-400 to-plasma-500 text-carbon-950 font-semibold hover:from-electric-300 hover:to-plasma-400"
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                  {!loading && <Send className="ml-2 h-4 w-4" />}
                </Button>
                <a
                  href="https://wa.me/573205272330"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white hover:bg-white/[0.06] transition-colors"
                >
                  <MessageCircle className="mr-2 h-4 w-4 text-electric-300" />
                  Escribir por WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
