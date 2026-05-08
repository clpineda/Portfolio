import { portfolioConfig } from '../config/portfolio';

const skillIcons = {
  'Frontend': '⚛',
  'Backend': '🔧',
  'Database': '🗄',
  'AI Dev Tools': '🤖',
  'Cloud Development': '☁',
};

export default function Skills() {
  const { frontend, backend, database, aiDevTools, cloudDevelopment } = portfolioConfig.tools;
  const skillGroups = [
    { icon: skillIcons['Frontend'], name: 'Frontend', tools: frontend },
    { icon: skillIcons['Backend'], name: 'Backend', tools: backend },
    { icon: skillIcons['Database'], name: 'Database', tools: database },
    { icon: skillIcons['AI Dev Tools'], name: 'AI Dev Tools', tools: aiDevTools },
    { icon: skillIcons['Cloud Development'], name: 'Cloud Development', tools: cloudDevelopment },
  ];

  return (
    <section id="skills" className="px-[5%] py-32 max-w-6xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-20 reveal">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Tools I work with</h2>
        <p className="text-muted text-[1.1rem] max-w-2xl mx-auto mt-4">
          A comprehensive toolkit spanning both frontend and backend development
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map(({ icon, name, tools }, i) => (
          <div
            key={name}
            className="reveal bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center text-2xl">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[#111]">{name}</h3>
                <p className="text-sm text-muted">
                  {tools.length} {tools.length === 1 ? 'technology' : 'technologies'}
                </p>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="bg-bg border border-border rounded-xl p-4 hover:border-accent transition-colors duration-200"
                  style={{ animationDelay: `${0.2 + i * 0.1 + index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-[#111]">{tool.name}</span>
                    <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-1 rounded-full">
                      {tool.years} {tool.years === '1' ? 'year' : 'years'}
                    </span>
                  </div>
                  {/* Experience Bar */}
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${Math.min(parseInt(tool.years) * 25, 100)}%`,
                        animationDelay: `${0.3 + i * 0.1 + index * 0.05}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
