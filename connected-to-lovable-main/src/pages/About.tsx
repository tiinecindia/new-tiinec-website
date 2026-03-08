import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Globe, Eye, Compass, GraduationCap, Network } from "lucide-react";

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

const partners = [
  "Indian Institute of Technology, Roorkee (IIT Roorkee)",
  "Jawaharlal Nehru University (JNU)",
  "Symbiosis Institute of Geoinformatics",
  "TERI School of Advanced Studies (TERI-SAS)",
  "The Energy and Resources Institute (TERI)",
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      label="About TIINEC"
      title="Research, technology, and community-centred practice"
      description="TIINEC is a research-led consultancy focused on natural resources, environmental systems, and decision-ready geospatial solutions."
    />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              TIINEC, The Innovative Institute for Natural Resources, Environment & Community, works with public institutions,
              researchers, practitioners, and communities on environmental challenges that require both scientific depth and practical delivery.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Our work brings together geospatial analysis, remote sensing, environmental data, and grounded field understanding to support
              planning, policy, monitoring, and implementation.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              We develop tailored approaches for each assignment, combining technical expertise with collaboration across academic,
              institutional, and community partners.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Vision & Mission</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Purpose-driven work</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-card rounded-xl p-8 shadow-card h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To support a future where environmental decision-making is informed, inclusive, and grounded in both science and lived realities.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-xl p-8 shadow-card h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To deliver credible analysis, geospatial tools, and collaborative solutions that help organisations address sustainability challenges with confidence.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Approach</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How we work</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "Research Excellence",
              desc: "Robust methods in geospatial analysis, environmental science, and applied research to support evidence-based outputs.",
            },
            {
              icon: Users,
              title: "Client Collaboration",
              desc: "Work shaped with clients, partners, and stakeholders to ensure relevance, usability, and practical value.",
            },
            {
              icon: Globe,
              title: "Sustainable Impact",
              desc: "Solutions designed to inform long-term planning, stewardship, and community-centred outcomes.",
            },
          ].map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * i}>
              <div className="bg-card rounded-xl p-8 shadow-card h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-14">
          <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
            <Network className="w-7 h-7 text-primary" />
          </div>
          <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">Expert Network</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Team and collaborators</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            TIINEC draws on a broader network of scientists, practitioners, and institutions to strengthen technical quality, peer exchange, and strategic advice.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-4">
          {partners.map((partner, i) => (
            <FadeIn key={partner} delay={0.08 * i}>
              <div className="flex items-center gap-4 bg-card rounded-xl px-6 py-5 shadow-card">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body font-medium text-foreground">{partner}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
