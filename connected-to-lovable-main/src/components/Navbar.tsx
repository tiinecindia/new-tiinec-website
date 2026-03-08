import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const linkClasses = (isActive: boolean) =>
  `text-sm font-body font-medium transition-colors ${
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-card">
            <span className="text-primary-foreground font-display font-bold text-sm">T</span>
          </div>
          <div>
            <span className="font-display font-bold text-lg text-foreground tracking-tight block leading-none">TIINEC</span>
            <span className="hidden sm:block font-body text-xs text-muted-foreground leading-none mt-1">
              Natural Resources, Environment & Community
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={linkClasses(location.pathname === link.path)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={linkClasses(location.pathname === link.path)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
