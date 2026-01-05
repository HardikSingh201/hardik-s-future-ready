import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-grid overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up delay-100">
              Hi, I'm{' '}
              <span className="text-gradient">Hardik K. Singh</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-up delay-200">
              B.Tech CSE Student |{' '}
              <span className="text-foreground">Data Analytics</span> •{' '}
              <span className="text-foreground">Web Development</span> •{' '}
              <span className="text-foreground">AI & ML</span> Enthusiast
            </p>
            
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              B.Tech CSE student at Vellore Institute of Technology, passionate about Data Analytics, 
              Web Development, Artificial Intelligence, and Machine Learning. Focused on building 
              scalable, real-world solutions using modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl animate-glow-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
                <img
                  src={profilePhoto}
                  alt="Hardik K. Singh - CSE Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Marquee */}
        <div className="mt-20 animate-fade-up delay-500">
          <p className="text-center text-muted-foreground text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code'].map((tech) => (
              <span key={tech} className="skill-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
