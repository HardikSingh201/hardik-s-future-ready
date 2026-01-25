import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hardik201contact@gmail.com',
      href: 'mailto:hardik201contact@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7021779037',
      href: 'tel:+917021779037',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hardik-singh-in',
      href: 'https://linkedin.com/in/hardik-singh-in',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/HardikSingh201',
      href: 'https://github.com/HardikSingh201',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          <div className="glass-card p-6 glow-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-foreground font-medium">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 glow-border">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
