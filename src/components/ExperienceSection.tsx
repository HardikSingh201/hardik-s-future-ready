import { Rocket, BookOpen, Zap } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Experience & <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building a strong foundation through hands-on learning
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10 glow-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Rocket size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Fresher</h3>
                <p className="text-muted-foreground">Ready to Make an Impact</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              As a dedicated CSE student, I've focused on building a strong foundation through 
              rigorous academic work and hands-on project development. My journey has equipped 
              me with practical skills that bridge the gap between theoretical knowledge and 
              real-world application.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Academic Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Strong academic foundation in CS fundamentals, algorithms, and data structures
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Project-Based Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Hands-on experience building real-world applications and systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
