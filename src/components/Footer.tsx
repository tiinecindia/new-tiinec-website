const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-display font-bold text-sm">T</span>
          </div>
          <span className="font-display font-bold text-lg text-background">TIINEC</span>
        </div>
        <p className="font-body text-sm text-background/50">
          © {new Date().getFullYear()} The Innovative Institute for Natural Resources, Environment and Community. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;