import { motion } from "framer-motion";
import heroImg from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Interior moderno da Clínica Benitá"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/20" />
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl font-light leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
        >
          Cuidado que transforma.
          <br />
          Saúde que inspira.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl font-body text-base font-light leading-relaxed text-primary-foreground/90 md:text-lg"
        >
          Na Clínica Benitá, cada paciente é atendido com atenção integral,
          tecnologia avançada e muito carinho.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contato"
            className="rounded-full bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Agendar Consulta
          </a>
          <a
            href="#especialidades"
            className="rounded-full border border-primary-foreground/60 px-8 py-3.5 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Conheça nossas especialidades
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
