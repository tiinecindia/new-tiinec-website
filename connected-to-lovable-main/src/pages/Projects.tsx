import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Leaf, Droplets, Wheat, Thermometer, MapPin, HandHeart, ArrowRight } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

const sectors = [
  {
    icon: Thermometer,
    title: "Climate Change",
    desc: "Vulnerability analysis, adaptation planning, and climate-related assessments using geospatial and statistical methods.",
    color: "bg-accent",
  },
  {
    icon: Leaf,
    title: "Natural Resources",
    desc: "Research and planning support for forests, ecosystems, biodiversity, and resource stewardship.",
    color: "bg-primary",
  },
  {
    icon: Droplets,
    title: "Water & Wetlands",
    desc: "Hydrological analysis, wetland-related studies, water resource assessments, and watershed planning.",
    color: "bg-accent",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    desc: "Land suitability analysis, crop monitoring, agricultural mapping, and spatial support for food systems work.",
    color: "bg-primary",
  },
  {
    icon: HandHeart,
    title: "Community-Based Planning",
    desc: "Participatory approaches, stakeholder engagement, local knowledge integration, and community-oriented planning processes.",
    color: "bg-accent",
  },
  {
    icon: MapPin,
    title: "Geospatial Technologies",
    desc: "Applied GIS, spatial modelling, and web-based mapping systems across environmental and development contexts.",
    color: "bg-primary",
  },
];

const Projects = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      label="Projects"
      title="Selected work and thematic areas"
      description="TIINEC supports a range of applied projects across environmental, geospatial, and community development contexts."
    />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Selected Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Built around real project needs</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            We work across consultancy assignments, research collaborations, and technical development tasks, adapting methods and outputs to each project's goals, scale, and users.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Sectors</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Sectors we work in</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sectors.map((sector, i) => (
            <FadeIn key={sector.title} delay={0.08 * i}>
              <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow h-full">
                <div className={`w-14 h-14 rounded-full ${sector.color} flex items-center justify-center mb-5`}>
                  <sector.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{sector.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{sector.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Discuss a project <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>

    <Footer />
  </div>
);

export default Projects;
