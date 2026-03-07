import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Thermometer, Droplets, MapPin, Wheat, HandHeart } from "lucide-react";

const offerings = [
  { icon: Leaf, title: "Environmental Issues", color: "bg-primary" },
  { icon: Thermometer, title: "Climate Change", color: "bg-accent" },
  { icon: Droplets, title: "Water Resources & Wetlands", color: "bg-primary" },
  { icon: MapPin, title: "Geospatial Technologies", color: "bg-accent" },
  { icon: Wheat, title: "Natural Resources & Agriculture", color: "bg-primary" },
  { icon: HandHeart, title: "Community Interactions", color: "bg-accent" },
];

const OfferingsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-24 md:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Domains of Expertise
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            We serve local communities, government agencies, non-profit organizations, and businesses with innovative solutions to complex challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-all group cursor-default"
            >
              <div className={`w-14 h-14 mx-auto rounded-full ${o.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <o.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground">{o.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 max-w-2xl mx-auto text-center font-body text-muted-foreground leading-relaxed"
        >
          Every client has unique needs. We work closely with you to develop customized solutions that meet your specific sustainability goals.
        </motion.p>
      </div>
    </section>
  );
};

export default OfferingsSection;