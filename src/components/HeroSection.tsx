import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Environmental research landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Research · Environment · Community
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gradient-hero mb-6">
              The Innovative Institute for Natural Resources, Environment & Community
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed mb-10">
              Promoting sustainable development, environmental stewardship, and community empowerment through innovative research, education, and outreach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("services")}
              className="bg-accent text-accent-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Our Solutions
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;