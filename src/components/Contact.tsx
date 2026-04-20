import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { buildWhatsAppUrl, getWhatsAppNumberBySpecialty } from "@/lib/whatsapp-routing";

const specialtiesOptions = [
  "Pediatria", "Saúde da Família", "Medicina Esportiva", "Cardiologia",
  "Ecocardiografia", "Saúde Mental", "Geriatria", "Angiologia",
  "Cirurgia Vascular", "Ginecologia",
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const specialty = String(formData.get("specialty") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const whatsappNumber = getWhatsAppNumberBySpecialty(specialty);

    const whatsappMessage = [
      `Olá, me chamo ${name}.`,
      `Gostaria de atendimento para ${specialty}.`,
      `Telefone: ${phone}.`,
      `E-mail: ${email}.`,
      message ? `Mensagem: ${message}` : "Mensagem: Não informada.",
    ].join("\n");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    window.open(buildWhatsAppUrl(whatsappNumber, whatsappMessage), "_blank", "noopener,noreferrer");
    form.reset();
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
              name="name"
              placeholder="Nome"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <select
              name="specialty"
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
              name="message"
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
                <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span className="font-body text-sm font-light text-foreground">benitaparticipacoes@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span className="font-body text-sm font-light text-foreground">Av. João Alves do Nascimento, 685, Patrocínio-MG</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/benitaclinica/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary transition-colors hover:text-primary-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/benitaclinica/" target="_blank" rel="noopener noreferrer" className="font-body text-sm font-light text-foreground hover:text-primary">@benitaclinica</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
