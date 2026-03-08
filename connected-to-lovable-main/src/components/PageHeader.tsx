import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

const PageHeader = ({ label, title, description }: PageHeaderProps) => (
  <section className="bg-hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="text-accent font-body font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          {label}
        </p>
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-hero mb-4">
          {title}
        </h1>
        {description && (
          <p className="font-body text-lg text-primary-foreground/75 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
