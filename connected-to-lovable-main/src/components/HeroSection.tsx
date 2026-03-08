import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
              Research · Geospatial Analysis · Community Impact
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gradient-hero mb-6">
              Environmental consultancy grounded in science, data, and practical action.
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-2xl leading-relaxed mb-10">
              TIINEC supports governments, institutions, and communities with geospatial analysis, remote sensing,
              environmental data solutions, and decision-ready insights for sustainable development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="bg-accent text-accent-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Contact TIINEC
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
