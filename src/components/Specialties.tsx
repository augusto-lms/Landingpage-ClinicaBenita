import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Baby, Home, Dumbbell, HeartPulse, Heart, Brain,
  PersonStanding, Droplets, Scissors, Flower2,
} from "lucide-react";

const specialties = [
  { icon: Baby, name: "Pediatria", desc: "Cuidado especializado para a saúde das crianças" },
  { icon: Home, name: "Saúde da Família", desc: "Acompanhamento integral para toda a família" },
  { icon: Dumbbell, name: "Medicina Esportiva", desc: "Desempenho e saúde para atletas e praticantes" },
  { icon: HeartPulse, name: "Cardiologia", desc: "Diagnóstico e tratamento das doenças do coração" },
  { icon: Heart, name: "Ecocardiografia", desc: "Exames de imagem cardiológica de precisão" },
  { icon: Brain, name: "Saúde Mental", desc: "Apoio emocional e psiquiátrico com acolhimento" },
  { icon: PersonStanding, name: "Geriatria", desc: "Atenção especializada à saúde do idoso" },
  { icon: Droplets, name: "Angiologia", desc: "Tratamento de doenças vasculares e circulatórias" },
  { icon: Scissors, name: "Cirurgia Vascular", desc: "Procedimentos cirúrgicos vasculares com segurança" },
  { icon: Flower2, name: "Ginecologia", desc: "Saúde da mulher em todas as fases da vida" },
];

const Specialties = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="especialidades" className="section-padding bg-secondary" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            Nossas Especialidades
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-primary hover:shadow-[0_4px_20px_-4px_rgba(138,158,138,0.2)]"
            >
              <s.icon className="mb-4 h-7 w-7 text-primary transition-colors group-hover:text-primary-dark" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-normal text-foreground">
                {s.name}
              </h3>
              <p className="mt-1 font-body text-sm font-light text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
