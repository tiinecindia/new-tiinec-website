import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-sm">T</span>
            </div>
            <span className="font-display font-bold text-lg text-background">TIINEC</span>
          </div>
          <p className="font-body text-sm text-background/60 leading-relaxed max-w-xs">
            The Innovative Institute for Natural Resources, Environment & Community. Research-led consultancy for
            geospatial, environmental, and community-centred solutions.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background mb-4">Navigation</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-sm text-background/60 hover:text-background transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background mb-4">Focus Areas</h4>
          <div className="space-y-2 font-body text-sm text-background/60">
            <p>Geospatial analysis and GIS</p>
            <p>Remote sensing and Earth observation</p>
            <p>Environmental data and modelling</p>
            <p>Decision-support systems</p>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background mb-4">Contact</h4>
          <div className="space-y-2 font-body text-sm text-background/60">
            <a href="mailto:info@tiinec.com" className="block hover:text-background transition-colors">
              info@tiinec.com
            </a>
            <p>New Delhi, India</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-body text-xs text-background/40">
          © {new Date().getFullYear()} TIINEC. All rights reserved.
        </p>
        <p className="font-body text-xs text-background/40">
          Built for fast, maintainable hosting on Git-based deployment.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
