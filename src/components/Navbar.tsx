import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoClinica from "@/assets/logo-clinica.png";

const navLinks = [

  { label: "Início", href: "#inicio" }, 
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Médicos", href: "#medicos" },
  

  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Logo — colada à esquerda */}
        <a href="#inicio" className="flex items-center justify-self-start">
          <img src={logoClinica} alt="Benitá Clínica" className="h-10" />
        </a>

        {/* Desktop Links — centralizados */}
        <div className="hidden items-center gap-8 md:flex md:justify-self-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-light tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — à direita */}
        <a
          href="#contato"
          className="hidden rounded-full bg-primary px-6 py-2.5 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark md:inline-block md:justify-self-end"
        >
          Agendar Consulta
        </a>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base font-light text-foreground/80"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-primary px-8 py-3 font-body text-sm font-medium text-primary-foreground"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
