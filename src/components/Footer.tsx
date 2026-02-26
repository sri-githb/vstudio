import { Mail, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-blush/20 to-transparent">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-display font-bold text-foreground">Varsha</h3>
        <p className="text-muted-foreground font-body mt-2">Fashion Designer</p>

        <div className="flex items-center justify-center gap-6 mt-6">
          <a
            href="mailto:varsha@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-8 font-body">
          © {new Date().getFullYear()} Varsha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
