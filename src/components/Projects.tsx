import React from 'react';
import { useAnimate } from '../hooks/useAnimate';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/markveber/ecommerce-platform'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform for business metrics.',
    tags: ['Vue.js', 'D3.js', 'Firebase'],
    github: 'https://github.com/markveber/analytics-dashboard'
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social platform with real-time messaging.',
    tags: ['React Native', 'GraphQL', 'AWS'],
    github: 'https://github.com/markveber/social-media-app'
  }
];

export const Projects = () => {
  const { ref } = useAnimate({
    animation: 'fadeInUp',
    duration: 800,
    delay: 200,
    cascade: true,
    when: 'inView'
  });

  return (
    <section id="projects" className="py-20 px-[10%]">
      <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Featured Projects</h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        Explore some of my recent work and creative endeavors
      </p>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card hover-card flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-black/20 rounded-full text-sm border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 transition-colors px-4 py-2 rounded-lg w-full"
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}