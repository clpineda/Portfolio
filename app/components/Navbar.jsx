'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { portfolioConfig } from '../config/portfolio';

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5
        bg-bg/90 backdrop-blur-md transition-all duration-300
        ${scrolled ? 'border-b border-border' : 'border-b border-transparent'}`}
    >
      {/* Logo */}
      <Link href="#hero" className="font-serif text-xl text-[#111] no-underline tracking-tight">
        {portfolioConfig.profile.name}
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm font-medium text-muted hover:text-[#111] transition-colors duration-200 no-underline tracking-wide"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
