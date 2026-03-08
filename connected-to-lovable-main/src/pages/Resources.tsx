import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, MapIcon, Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Publications",
    desc: "Research papers, technical reports, and policy-facing outputs developed by TIINEC and collaborators.",
    status: "Planned",
  },
  {
    icon: MapIcon,
    title: "Maps & Visualisations",
    desc: "Selected maps, geospatial outputs, and visual products that communicate data clearly for different audiences.",
    status: "Planned",
  },
  {
    icon: Newspaper,
    title: "News & Updates",
    desc: "Project news, announcements, and updates on new activities, tools, and collaborations.",
    status: "Planned",
  },
];

const Resources = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      label="Resources"
      title="Knowledge products and updates"
      description="A growing space for publications, maps, visualisations, and selected outputs from TIINEC's work."
    />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resourceCategories.map((resource, i) => (
            <FadeIn key={resource.title} delay={0.1 * i}>
              <div className="bg-card rounded-xl p-8 shadow-card h-full flex flex-col">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <resource.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{resource.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-1">{resource.desc}</p>
                <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-md self-start">
                  {resource.status}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="max-w-2xl mx-auto text-center mt-20">
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            We are building this section progressively. For specific publications, maps, or background material, please contact us directly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:gap-3 transition-all"
          >
            Request information <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>

    <Footer />
  </div>
);

export default Resources;
