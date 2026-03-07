import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Map, BarChart3, Satellite, Database } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Map Service System",
    desc: "Processing and analyzing wide-range spatial and non-spatial data for desktop systems and web applications.",
  },
  {
    icon: BarChart3,
    title: "Visual Data Representation",
    desc: "Custom map design solutions with clean representation, advanced visualization, and solution-oriented databases.",
  },
  {
    icon: Satellite,
    title: "Remote Sensing & Satellite",
    desc: "Interpretation and processing of satellite remote sensing data for environmental and resource analysis.",
  },
  {
    icon: Database,
    title: "Data Expertise",
    desc: "Data conversion, digital spatial database creation, analysis, map production, surveying, and web-service publishing.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Solutions</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Geospatial & Environmental Services
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            TIINEC has the capacity for applications of remote sensing using aerial and satellite imagery, environmental statistics, spatial data analysis, geostatistics, and web-based solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group relative bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all border border-transparent hover:border-primary/20"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;