import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const partners = [
  "Indian Institute of Technology, Roorkee (IITR)",
  "Jawaharlal Nehru University (JNU)",
  "Symbiosis Institute of Geoinformatics",
  "TERI School of Advanced Studies (TERI-SAS)",
  "The Energy and Resources Institute (TERI)",
  "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
  "International Institute for Energy Conservation (IIEC) - INDIA",
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Partners</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Academic & Research Network
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            We collaborate with premier academic institutions, scientists, and practitioners working in esteemed organizations worldwide for timely advice, guidance, and feedback. 
            Works closely with a diverse group of partners to promote sustainable development, environmental stewardship, and community empowerment. 
            Our partners include government agencies, non-profit organizations, academic institutions, and businesses. 
            Our team of expert researchers and staff is dedicated to building strong partnerships that promote sustainability and environmental stewardship. 
            We regularly get benefited with our network with academicians, practitioners and professionals working with:
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-center gap-4 bg-card rounded-xl px-6 py-5 shadow-card"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body font-medium text-foreground">{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
