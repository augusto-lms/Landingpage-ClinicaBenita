import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import userPhoto from "@/assets/user.png";

const doctors = [
  { name: "Doutor 1", specialty: "Pediatria", crm: "CRM 1234", photo: userPhoto, bio: "Dedicada à saúde infantil com mais de 10 anos de experiência." },
  { name: "Doutor 2", specialty: "Cardiologia", crm: "CRM 1234", photo: userPhoto, bio: "Especialista em diagnóstico e prevenção cardiovascular." },
  { name: "Doutor 3", specialty: "Ginecologia", crm: "CRM 1234", photo: userPhoto, bio: "Cuidando da saúde da mulher com empatia e excelência." },
  { name: "Doutor 4", specialty: "Saúde Mental", crm: "CRM 1234", photo: userPhoto, bio: "Psiquiatra com abordagem humanizada e integrativa." },
  { name: "Doutor 5", specialty: "Geriatria", crm: "CRM 1234", photo: userPhoto, bio: "Atenção especializada e carinhosa à saúde do idoso." },
  { name: "Doutor 6", specialty: "Medicina Esportiva", crm: "CRM 1234", photo: userPhoto, bio: "Performance e saúde para atletas de todas as modalidades." },
];

const Doctors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="medicos" className="section-padding bg-background" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            Nossos Médicos
          </h2>
          <p className="mt-3 font-body text-base font-light text-muted-foreground">
            Profissionais dedicados ao seu bem-estar
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-xl bg-card p-8 text-center shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]"
            >
              <img
                src={doc.photo}
                alt={`Foto de ${doc.name}`}
                className="mb-5 h-24 w-24 rounded-full object-cover ring-2 ring-primary/20"
                loading="lazy"
              />
              <h3 className="font-display text-xl font-normal text-foreground">{doc.name}</h3>
              <p className="mt-1 font-body text-sm font-medium text-primary">{doc.specialty}</p>
              <p className="mt-0.5 font-body text-xs font-light text-muted-foreground">{doc.crm}</p>
              <p className="mt-3 font-body text-sm font-light text-muted-foreground">{doc.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;