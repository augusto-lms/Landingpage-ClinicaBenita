import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Users, CalendarDays, Heart } from "lucide-react";

const items = [
  { icon: Stethoscope, text: "+10 Especialidades Médicas" },
  { icon: Users, text: "Equipe Altamente Qualificada" },
  { icon: CalendarDays, text: "Agendamento Fácil e Rápido" },
  { icon: Heart, text: "Atendimento Humanizado" },
];

const Differentials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-primary py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <item.icon className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
            <span className="font-body text-sm font-light text-primary-foreground/90">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Differentials;
