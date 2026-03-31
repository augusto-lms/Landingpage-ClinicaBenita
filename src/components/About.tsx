import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-clinic.jpg";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-background" ref={ref}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-1 rounded-full bg-primary" />
            <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
              Quem somos
            </h2>
          </div>
          <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
            A Clínica Benitá nasceu do desejo de oferecer saúde de qualidade com
            um atendimento próximo e humanizado. Reunimos especialistas em
            diversas áreas para cuidar de você e de toda a sua família, em todas
            as fases da vida.
          </p>
          <p className="mt-4 font-body text-base font-light leading-relaxed text-muted-foreground">
            Com infraestrutura moderna e uma equipe acolhedora, nossa missão é
            transformar a experiência de cuidar da saúde em algo leve, seguro e
            inspirador.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={aboutImg}
            alt="Médica atendendo pacientes na Clínica Benitá"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
