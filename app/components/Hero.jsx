// Hero is server-rendered; CSS keyframe animations handle the entrance
import { portfolioConfig } from '../config/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-[5%] pt-32 pb-24 max-w-5xl mx-auto"
    >
      {/* Eyebrow */}
      <p
        className="text-xs font-semibold tracking-widest uppercase text-accent mb-6
          opacity-0 animate-[fadeUp_0.6s_ease_0.05s_forwards]"
      >
        {portfolioConfig.profile.title}
      </p>

      {/* Name Headline */}
      <h1
        className="font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[1.08] tracking-tight mb-6
          opacity-0 animate-[fadeUp_0.6s_ease_0.15s_forwards]"
      >
        {portfolioConfig.profile.name}
      </h1>

      {/* Tagline */}
      <p
        className="text-[clamp(1.1rem,2vw,1.3rem)] text-muted max-w-2xl leading-[1.85] mb-12
          opacity-0 animate-[fadeUp_0.6s_ease_0.25s_forwards]"
      >
        {portfolioConfig.profile.subtitle}
      </p>

      {/* Location and Availability */}
      <div className="flex flex-wrap gap-4 text-sm text-muted mb-12
        opacity-0 animate-[fadeUp_0.6s_ease_0.35s_forwards]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          Based in Pampanga, PH
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Available for full-time roles
        </span>
      </div>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap opacity-0 animate-[fadeUp_0.6s_ease_0.45s_forwards]">
        <a href="#projects" className="btn btn-primary">
          View my work ↓
        </a>
        <a href="#contact" className="btn btn-outline">
          Get in touch
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="mt-20 hidden md:flex items-center gap-3 text-xs text-muted
          opacity-0 animate-[fadeUp_0.6s_ease_0.65s_forwards]"
      >
        <span className="w-10 h-px bg-muted block" />
        Scroll to explore
      </div>
    </section>
  );
}
