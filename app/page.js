'use client';

import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

export default function Home() {
  // Attach IntersectionObserver to the whole page so every `.reveal` element animates in
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
