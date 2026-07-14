import { AnimatePresence, motion, useInView } from "framer-motion";
import { MapPin, MessageCircle, X } from "lucide-react";
import { useRef, useState } from "react";

import { buildWhatsAppUrl, getWhatsAppNumberBySpecialty, whatsappGroups } from "@/lib/whatsapp-routing";

const specialtiesOptions = [
  "Pediatria",
  "Saude da Familia",
  "Medicina Esportiva",
  "Cardiologia",
  "Psiquiatria",
  "Geriatria",
  "Angiologia",
  "Cirurgia Vascular",
  "Ginecologia",
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const specialty = String(formData.get("specialty") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const whatsappNumber = getWhatsAppNumberBySpecialty(specialty);

    const whatsappMessage = [
      `Ola, me chamo ${name}.`,
      `Gostaria de atendimento para ${specialty}.`,
      `Telefone: ${phone}.`,
      message ? `Mensagem: ${message}` : "Mensagem: Nao informada.",
    ].join("\n");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    window.open(buildWhatsAppUrl(whatsappNumber, whatsappMessage), "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <section id="contato" className="section-padding bg-secondary" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            Entre em Contato
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
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
            <select
              name="specialty"
              required
              defaultValue=""
              className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="" disabled>
                Selecione a especialidade
              </option>
              {specialtiesOptions.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Mensagem"
              rows={4}
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark"
            >
              {submitted ? "Mensagem enviada!" : "Enviar mensagem"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4279.6694371651865!2d-46.986738488646786!3d-18.95008000847095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94afbbc5583f80bb%3A0x8fd8675c4e7fc7e0!2zQmVuaXTDoSBDbMOtbmljYQ!5e1!3m2!1spt-BR!2sbr!4v1773353893443!5m2!1spt-BR!2sbr"
              style={{
                border: 0,
                borderRadius: "12px",
                width: "100%",
                height: "450px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <span className="font-body text-sm font-light text-foreground">
                  Av. Joao Alves do Nascimento, 685, Patrocinio-MG
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/benitaclinica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-primary transition-colors hover:text-primary-dark"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/benitaclinica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-light text-foreground hover:text-primary"
                >
                  @benitaclinica
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsWhatsAppOpen(true)}
                className="flex items-center gap-3 text-primary transition-colors hover:text-primary-dark"
                aria-label="Fale conosco via WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <span className="font-body text-sm font-light text-foreground">Fale conosco via WhatsApp</span>
              </button>
            </div>

            <AnimatePresence>
              {isWhatsAppOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-[2px]"
                  onClick={() => setIsWhatsAppOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="relative w-full max-w-xl rounded-[28px] bg-background p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="whatsapp-modal-title"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setIsWhatsAppOpen(false)}
                      aria-label="Fechar modal"
                      className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground/70 transition-colors hover:text-foreground"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <div className="pr-10">
                      <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-primary">
                        Atendimento via WhatsApp
                      </span>
                      <h2
                        id="whatsapp-modal-title"
                        className="mt-3 font-display text-2xl font-light text-foreground md:text-3xl"
                      >
                        Com qual especialidade deseja falar?
                      </h2>
                      <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted-foreground">
                        Escolha a area de atendimento para ser encaminhado ao numero correto da clinica.
                      </p>
                    </div>

                    <div className="mt-8 grid gap-3">
                      {whatsappGroups.map((group, index) => (
                        <motion.a
                          key={group.id}
                          href={buildWhatsAppUrl(group.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsWhatsAppOpen(false)}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.06 }}
                          className="group rounded-2xl border border-border bg-card px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:px-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-body text-sm font-medium leading-relaxed text-foreground md:text-base">
                                {group.label}
                              </h3>
                              <p className="mt-2 font-body text-xs font-light text-muted-foreground md:text-sm">
                                WhatsApp: {group.displayPhone}
                              </p>
                            </div>
                            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/12 text-[#25D366] transition-transform group-hover:scale-105">
                              <MessageCircle className="h-5 w-5" fill="currentColor" />
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
