import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-primary-foreground/20" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full border border-primary-foreground/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-hero mb-6">
            Let's Collaborate
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg leading-relaxed mb-10">
            Whether you're a researcher, government agency, or community organization — we'd love to explore how we can work together toward sustainable solutions.
          </p>
          <a
            href="mailto:info@tiinec.com"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;