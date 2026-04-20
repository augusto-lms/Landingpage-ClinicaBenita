import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const specialtiesOptions = [
  "Pediatria", "Saúde da Família", "Medicina Esportiva", "Cardiologia",
  "Ecocardiografia", "Saúde Mental", "Geriatria", "Angiologia",
  "Cirurgia Vascular", "Ginecologia",
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contato"
      className="section-padding bg-secondary"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            Entre em Contato
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Telefone"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <select
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue=""
            >
              <option value="" disabled>Selecione a especialidade</option>
              {specialtiesOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark"
            >
              {submitted ? "✓ Mensagem enviada!" : "Enviar mensagem"}
            </button>
          </motion.form>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Placeholder Map */}
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4279.6694371651865!2d-46.986738488646786!3d-18.95008000847095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afbbc5583f80bb%3A0x8fd8675c4e7fc7e0!2zQmVuaXTDoSBDbMOtbmljYQ!5e1!3m2!1spt-BR!2sbr!4v1773353893443!5m2!1spt-BR!2sbr"
  style={{ 
    border: 0, 
    borderRadius: '12px',
    width: '100%',
    height: '450px'
  }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span className="font-body text-sm font-light text-foreground">(34) 3099-4317</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span className="font-body text-sm font-light text-foreground">(34) 3099-4317</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span className="font-body text-sm font-light text-foreground">benita@gmail.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span className="font-body text-sm font-light text-foreground">Av. João Alves do Nascimento, 685, Patrocínio-MG</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
