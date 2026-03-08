import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Map, Satellite, BarChart3, Leaf, Droplets, Wheat, GraduationCap } from "lucide-react";

const serviceSnapshots = [
  {
    icon: Map,
    title: "Geospatial Analysis & GIS",
    description: "Spatial analysis, cartography, geodatabases, and decision-ready mapping products.",
  },
  {
    icon: Satellite,
    title: "Remote Sensing & Earth Observation",
    description: "Satellite image processing, environmental monitoring, and land change analysis.",
  },
  {
    icon: BarChart3,
    title: "Environmental Data & Modelling",
    description: "Integrated data workflows, indicators, and analytical tools for planning and policy.",
  },
];

const sectorSnapshots = [
  { icon: Leaf, title: "Climate Change", color: "bg-accent" },
  { icon: Droplets, title: "Water & Wetlands", color: "bg-primary" },
  { icon: Wheat, title: "Natural Resources", color: "bg-accent" },
];

const partnerNames = ["IIT Roorkee", "JNU", "Symbiosis Institute of Geoinformatics", "TERI-SAS", "TERI"];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Section className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">About TIINEC</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Research-driven environmental consultancy
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              TIINEC works at the intersection of environmental science, geospatial technology, and community-centred
              practice. We help organisations translate complex data into practical strategies, tools, and decisions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </Section>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Core Services</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What we do</h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Consultancy support tailored to research institutions, governments, civil society, and development initiatives.
              </p>
            </div>
          </Section>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceSnapshots.map((s) => (
              <Section key={s.title} className="h-full">
                <div className="bg-card rounded-xl p-8 shadow-card h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </Section>
            ))}
          </div>
          <Section className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:gap-3 transition-all"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </Section>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Sectors</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Where we work</h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Our work supports planning, resource management, and evidence-based action across critical environmental sectors.
              </p>
            </div>
          </Section>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {sectorSnapshots.map((s) => (
              <Section key={s.title}>
                <div className="bg-card rounded-xl p-6 text-center shadow-card group h-full">
                  <div className={`w-14 h-14 mx-auto rounded-full ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">{s.title}</h3>
                </div>
              </Section>
            ))}
          </div>
          <Section className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:gap-3 transition-all"
            >
              Explore our projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Section>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Network</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our collaborators</h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                We work with academic institutions, scientists, and practitioners who strengthen the quality and relevance of our work.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {partnerNames.map((p) => (
                <div key={p} className="flex items-center gap-2 bg-card rounded-lg px-5 py-3 shadow-card">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-body text-sm font-medium text-foreground">{p}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:gap-3 transition-all"
              >
                See our full network <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Section>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <Section className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-hero mb-6">Ready to collaborate?</h2>
            <p className="font-body text-primary-foreground/75 text-lg leading-relaxed mb-8">
              Whether you need analytical support, a geospatial workflow, or a project partner, TIINEC can help shape the next step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              Get in touch <ArrowRight className="w-5 h-5" />
            </Link>
          </Section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
