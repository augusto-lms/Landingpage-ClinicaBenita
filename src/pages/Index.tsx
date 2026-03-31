import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import ExamScheduling from "@/components/ExamScheduling";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Differentials />
      <About />
      <Specialties />
      <ExamScheduling />
      <Doctors />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
