import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import drAryBrito from "@/assets/dr-ary-brito.jpeg";
import drFlavioSgarbi from "@/assets/dr-flavio-sgarbi.jpeg";
import drMarceloBorges from "@/assets/dr-marcelo-borges.jpeg";
import drMarcusFabianni from "@/assets/dr-marcus-fabianni.jpeg";
import drRogerioQueiroz from "@/assets/dr-rogerio-queiroz.jpeg";
import draCarolineMendes from "@/assets/dra-caroline-mendes.jpeg";
import draCassianaDuarte from "@/assets/dra-cassiana-duarte.jpeg";
import draTatianeChagas from "@/assets/dra-tatiane-chagas.jpeg";

const doctors = [
  { name: "Dr. Ary Brito", specialty: "Angiologia/Cirurgia Vascular", crm: "CRM 44112/MG", photo: drAryBrito, bio: "" },
  { name: "Dr. Flávio Sgarbi", specialty: "Cardiologia", crm: "CRM 49043/MG", photo: drFlavioSgarbi, bio: "" },
  { name: "Dr. Marcelo Borges", specialty: "Psiquiatria", crm: "CRM 62026/MG", photo: drMarceloBorges, bio: "" },
  { name: "Dr. Marcus Fabianni", specialty: "Geriatria", crm: "CRM 40480/MG", photo: drMarcusFabianni, bio: "" },
  { name: "Dr. Rogério Queiroz", specialty: "Cardiologia", crm: "CRM 41810/MG", photo: drRogerioQueiroz, bio: "" },
  { name: "Dra. Caroline Mendes", specialty: "Saúde da Família/Medicina Esportiva", crm: "CRM 64457/MG", photo: draCarolineMendes, bio: "" },
  { name: "Dra. Cassiana Duarte", specialty: "Pediatria", crm: "CRM 41998/MG", photo: draCassianaDuarte, bio: "" },
  { name: "Dra. Tatiane Chagas", specialty: "Ginecologia", crm: "CRM 56690/MG", photo: draTatianeChagas, bio: "" },
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
              {doc.bio && (
                <p className="mt-3 font-body text-sm font-light text-muted-foreground">{doc.bio}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;