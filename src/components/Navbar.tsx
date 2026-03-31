import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Início", href: "#inicio" },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-1">
          <span className="font-display text-2xl font-light tracking-[0.3em] text-foreground">
            BEN
          </span>
          <span className="relative font-display text-2xl font-light tracking-[0.3em] text-foreground">
            I
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-primary text-xs">🌿</span>
          </span>
          <span className="font-display text-2xl font-light tracking-[0.3em] text-foreground">
            TÁ
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-light tracking-wide text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-primary px-6 py-2.5 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
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
