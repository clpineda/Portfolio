const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-[5%] py-8 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
      <p className="text-xs text-muted">
        © {year} Chester Lance R. Pineda. Designed &amp; built with care.
      </p>
      <nav className="flex gap-6">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-xs text-muted hover:text-[#111] transition-colors no-underline"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
