import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

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

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation || "Not provided"}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:info@tiinec.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        label="Contact"
        title="Get in touch"
        description="Whether you are exploring a project, partnership, or technical collaboration, we would be glad to hear from you."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="md:col-span-2">
              <FadeIn>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Work with us</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  TIINEC works with communities, government agencies, academic institutions, non-profit organisations, and businesses. Share a few details and we can continue the conversation by email.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground text-sm">Email</p>
                      <a href="mailto:info@tiinec.com" className="font-body text-muted-foreground hover:text-accent transition-colors">
                        info@tiinec.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground text-sm">Location</p>
                      <p className="font-body text-muted-foreground">New Delhi, India</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-3">
              <FadeIn delay={0.1}>
                <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Organisation</label>
                    <input
                      type="text"
                      value={form.organisation}
                      onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="Your organisation (optional)"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <p className="font-body text-xs text-muted-foreground">
                    Submitting this form opens your default email client with the message pre-filled to <span className="font-semibold">info@tiinec.com</span>.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Continue in email <Send className="w-4 h-4" />
                  </button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
