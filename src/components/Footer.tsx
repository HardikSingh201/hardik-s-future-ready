import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/HardikSingh201', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hardik-singh-in', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hardik201contact@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground">
              Hardik K. Singh<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Building the future, one project at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(185_100%_50%_/_0.2)] transition-all"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hardik K. Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
