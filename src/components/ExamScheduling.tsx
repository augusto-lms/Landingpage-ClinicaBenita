import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck } from "lucide-react";

const ExamScheduling = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-primary/10 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <CalendarCheck className="mx-auto mb-5 h-12 w-12 text-primary" strokeWidth={1.5} />
        <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
          Agendamento de Exames
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-base font-light leading-relaxed text-muted-foreground">
          Realize seus exames com comodidade e rapidez. Nossa equipe está pronta
          para orientar você em todo o processo.
        </p>
        <a
          href="#contato"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          Agendar meu exame
        </a>
      </motion.div>
    </section>
  );
};

export default ExamScheduling;
