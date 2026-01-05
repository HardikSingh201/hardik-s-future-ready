import { ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Kidney Pathology Detection',
    description:
      'Deep learning system classifying kidney CT scans into 4 pathology categories. Achieved 99.6% accuracy with optimized architecture using ONNX deployment and reduced inference latency.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'ONNX'],
    highlights: ['99.6% Accuracy', 'ONNX Optimized', 'Real-time Detection'],
    featured: true,
  },
  {
    title: 'Solar-Powered Agricultural IoT',
    description:
      'Sensor-based monitoring system tracking 10+ environmental parameters with automated irrigation. Reduced manual intervention by 70% and improved water efficiency by 35%.',
    tech: ['Arduino', 'C++', 'IoT Sensors'],
    highlights: ['70% Less Manual Work', '35% Water Savings', '10+ Parameters'],
    featured: true,
  },
  {
    title: 'Sign Language Translation System',
    description:
      'Real-time Chrome extension for sign language translation. Processed 1000+ gestures with 88% accuracy and optimized database queries, improving speed by 50%.',
    tech: ['JavaScript', 'MySQL', 'Chrome Extension'],
    highlights: ['88% Accuracy', '50% Faster Queries', '1000+ Gestures'],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of projects showcasing my skills in AI, IoT, and web development
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card p-8 glow-border group ${
                project.featured ? 'md:p-10' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                        <Sparkles size={12} />
                        Featured
                      </span>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-secondary text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:items-end md:min-w-[200px]">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
