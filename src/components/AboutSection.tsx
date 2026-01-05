import { GraduationCap, Code, Brain, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    { icon: Brain, label: 'AI & Machine Learning' },
    { icon: Code, label: 'Full-Stack Development' },
    { icon: Lightbulb, label: 'Problem Solving' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate technologist on a journey to create impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a B.Tech Computer Science Engineering student at Vellore Institute of Technology, 
              with a deep passion for leveraging technology to solve real-world problems. My academic 
              journey has been driven by curiosity and a constant desire to learn and innovate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building AI-driven solutions, scalable web applications, and data analytics 
              pipelines. My approach combines theoretical knowledge with hands-on project experience, 
              enabling me to deliver practical, production-ready solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I believe in continuous learning and staying updated with the latest 
              technological advancements. I'm always eager to collaborate on challenging projects 
              that push the boundaries of what's possible.
            </p>

            {/* Interest Tags */}
            <div className="flex flex-wrap gap-4 pt-4">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50"
                >
                  <interest.icon size={18} className="text-primary" />
                  <span className="text-sm text-foreground">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-card p-8 glow-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <p className="text-primary font-medium">Vellore Institute of Technology</p>
                    <p className="text-muted-foreground text-sm mt-1">Expected Graduation: 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <h4 className="font-medium text-foreground mb-4">Key Focus Areas</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Data Analytics', 'Web Development', 'Machine Learning', 'Deep Learning'].map((area) => (
                  <div
                    key={area}
                    className="px-3 py-2 rounded-md bg-secondary/50 text-sm text-muted-foreground text-center"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
