import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Globe } from "lucide-react";

const pillars = [
  { icon: Target, title: "Research Excellence", desc: "Cutting-edge methods in ecology, hydrology, social sciences, and geo-informatics." },
  { icon: Users, title: "Community Focus", desc: "Working closely with local communities, government agencies, and stakeholders." },
  { icon: Globe, title: "Sustainable Impact", desc: "Technology-driven solutions for environment-centric challenges worldwide." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Leading Research for a Sustainable Future
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            TIINEC is a leading research group focused on promoting sustainable development, environmental stewardship, and community empowerment. Our expert researchers address complex challenges with scientifically sound and socially just solutions spanning sustainable land use, climate change adaptation, and environmental policy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 max-w-3xl mx-auto text-center font-body text-muted-foreground leading-relaxed"
        >
          With a dedicated full-time staff and professional strength in natural resources management, environmental management, and geo-informatics, TIINEC has the intellectual and infrastructure capacity to develop methods, tools, and provide state-of-the-art solutions using GIS, GPS, remote sensing, and ICT.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;