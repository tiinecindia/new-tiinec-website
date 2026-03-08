import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Map, Satellite, BarChart3, Database, Monitor, BookOpen, ArrowRight } from "lucide-react";

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

const services = [
  {
    icon: Map,
    title: "Geospatial Analysis & GIS",
    desc: "Spatial analysis, cartographic design, and geodatabase workflows for desktop and web-based use.",
    details: ["Spatial analysis and geostatistics", "Custom map design", "Digital spatial databases", "Land use and landscape mapping"],
  },
  {
    icon: Satellite,
    title: "Remote Sensing & Earth Observation",
    desc: "Interpretation and processing of aerial and satellite imagery for monitoring, assessment, and change analysis.",
    details: ["Satellite image processing", "Change detection", "Environmental monitoring", "Land cover classification"],
  },
  {
    icon: BarChart3,
    title: "Environmental Data & Modelling",
    desc: "Analytical support for environmental statistics, indicators, and modelling workflows that inform planning and policy.",
    details: ["Climate and environmental data analysis", "Hydrological and ecological assessment", "Indicator development", "Evidence synthesis"],
  },
  {
    icon: Database,
    title: "Decision Support Systems",
    desc: "Applied tools and structured data systems that support planning, prioritisation, and evidence-based decisions.",
    details: ["Spatial decision-support systems", "Data structuring and integration", "Planning support tools", "Quality control workflows"],
  },
  {
    icon: Monitor,
    title: "Web-Based Platforms & Dashboards",
    desc: "Interactive web products for publishing data, visualising findings, and supporting stakeholder access and engagement.",
    details: ["WebGIS applications", "Interactive dashboards", "Data publishing workflows", "Stakeholder-facing interfaces"],
  },
  {
    icon: BookOpen,
    title: "Training & Technical Support",
    desc: "Targeted capacity-building and advisory support in GIS, remote sensing, and environmental data workflows.",
    details: ["Hands-on training sessions", "Technical advisory support", "Methodology documentation", "Institutional capacity building"],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      label="Services"
      title="Consultancy services built for applied environmental work"
      description="From analysis to delivery, TIINEC provides technical support that connects robust methods with practical use cases."
    />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.05 * i}>
              <div className="bg-card rounded-xl p-8 md:p-10 shadow-card border border-transparent hover:border-primary/15 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-primary flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-16">
          <p className="font-body text-muted-foreground text-lg mb-6">Need a tailored scope of work or a focused technical input?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Discuss your project <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
