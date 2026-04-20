import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppUrl, whatsappGroups } from "@/lib/whatsapp-routing";
import { useWhatsAppModal } from "@/hooks/use-whatsapp-modal";

const WhatsAppButton = () => {
  const { isOpen, setIsOpen } = useWhatsAppModal();

  return (
    <>
      <button
        type="button"
        aria-label="Fale conosco pelo WhatsApp"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" fill="currentColor" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                  Escolha a área de atendimento para ser encaminhado ao número correto da clínica.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {whatsappGroups.map((group, index) => (
                  <motion.a
                    key={group.id}
                    href={buildWhatsAppUrl(group.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
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
    </>
  );
};

export default WhatsAppButton;
