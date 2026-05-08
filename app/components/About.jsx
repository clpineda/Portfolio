import { portfolioConfig } from '../config/portfolio';

const stats = [
  { number: portfolioConfig.stats.experience, label: 'Status' },
  { number: portfolioConfig.stats.projects, label: 'Portfolio Work' },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-surface border-y border-border px-[5%] py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label">About me</p>
          <h2 className="section-title max-w-3xl mx-auto">
            Focused on backend systems,<br />APIs, and scalable solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 reveal">
            <div className="prose prose-muted max-w-none">
              <p className="text-[1.1rem] leading-[1.85] text-muted">
                I'm a Computer Engineering graduate with a strong foundation in backend development,
                along with experience in full stack development, AI/machine learning, and AI integration.
              </p>
              <p className="text-[1.1rem] leading-[1.85] text-muted">
                I previously worked as a backend developer intern, where I focused on building and
                maintaining server-side systems, APIs, and database-driven applications.
              </p>
              <p className="text-[1.1rem] leading-[1.85] text-muted">
                I also build personal projects that combine full stack development with AI integration,
                including API design, system deployment, and end-to-end application development.
              </p>
              <p className="text-[1.1rem] leading-[1.85] text-muted">
                I'm particularly interested in developing scalable systems and integrating AI into
                real-world applications.
              </p>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="reveal delay-100">
            <div className="bg-bg border border-border rounded-2xl p-8 space-y-6">
              <h3 className="font-semibold text-lg text-[#111] mb-6">Quick Stats</h3>
              {stats.map(({ number, label }, index) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-muted">{label}</span>
                  <span className="font-semibold text-[#111] text-lg">{number}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
