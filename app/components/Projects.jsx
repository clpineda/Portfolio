import { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';

const projectIcons = ['📦', '💬', '📊', '🚀', '⚡', '🔥'];

export default function Projects() {
  const projects = portfolioConfig.work.projects;
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const toggleProjectExpansion = (projectName) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectName)) {
        newSet.delete(projectName);
      } else {
        newSet.add(projectName);
      }
      return newSet;
    });
  };

  return (
    <section
      id="projects"
      className="bg-surface border-y border-border px-[5%] py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label">Work</p>
          <h2 className="section-title mb-4">Selected projects</h2>
          <p className="text-muted text-[1.1rem] max-w-2xl mx-auto">
            A collection of projects showcasing my skills in building scalable applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="reveal bg-bg border border-border rounded-2xl overflow-hidden
                transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group relative"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="h-32 bg-gradient-to-br from-accent-light to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-5xl z-10">{projectIcons[i % projectIcons.length]}</div>
                <div className="absolute inset-0 bg-accent/5 transform scale-150 group-hover:scale-100 transition-transform duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-serif text-[1.5rem] text-[#111] mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </h3>
                
                <div className="mb-4">
                  <p className="text-muted leading-[1.75] text-sm line-clamp-3">
                    {project.description}
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleProjectExpansion(project.name)}
                      className="text-accent text-sm font-semibold hover:text-accent/80 transition-colors duration-200 mt-1"
                    >
                      See more
                    </button>
                  )}
                  
                  {/* Expanded Description Modal */}
                  {expandedProjects.has(project.name) && (
                    <div 
                      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                      onClick={() => toggleProjectExpansion(project.name)}
                    >
                      <div 
                        className="bg-bg border border-border rounded-2xl p-6 max-w-2xl max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <h3 className="font-serif text-[1.5rem] text-[#111] mb-4">
                          {project.name}
                        </h3>
                        <p className="text-muted leading-[1.75] text-sm mb-4">
                          {project.description}
                        </p>
                        <button
                          onClick={() => toggleProjectExpansion(project.name)}
                          className="text-accent text-sm font-semibold hover:text-accent/80 transition-colors duration-200"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent-light text-accent rounded-full px-2.5 py-0.5 text-[0.72rem] font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent 
                          hover:text-accent/80 transition-colors duration-200"
                      >
                        <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center text-xs">🔗</span>
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent 
                          hover:text-accent/80 transition-colors duration-200"
                      >
                        <span className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center text-xs">⚡</span>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16 reveal delay-200">
          <a
            href={portfolioConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View all projects on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
