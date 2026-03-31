import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Augusto de Lima",
    photo: "/src/assets/user.png",
    text: "Ótima clínica",
  },
  {
    name: "Augusto de Lima",
    photo: "/src/assets/user.png",
    text: "Esse site é íncrivel!",
  },
  {
    name: "Ary Brito",
    photo: "/src/assets/user.png",
    text: "otimo atendimento!",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            O que nossos pacientes dizem
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl bg-card p-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground italic">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="font-body text-sm font-medium text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
