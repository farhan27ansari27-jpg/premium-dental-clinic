import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-forest-100'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-forest-700 rounded-full flex items-center justify-center shadow-md group-hover:bg-forest-800 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 4 5 4 9c0 2.5 1.2 4.7 3 6.1L9 20h6l2-4.9C18.8 13.7 20 11.5 20 9c0-4-4-7-8-7z"/>
              </svg>
            </div>
            <div>
              <span className={`font-serif font-bold text-xl leading-none block transition-colors ${scrolled ? 'text-forest-900' : 'text-white text-shadow'}`}>
                Denticle
              </span>
              <span className={`text-xs font-medium tracking-wider transition-colors ${scrolled ? 'text-forest-600' : 'text-green-200'}`}>
                DENTAL CLINIC
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-forest-500 relative group ${scrolled ? 'text-forest-800' : 'text-white/90 hover:text-white'}`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917765868678"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-forest-700 hover:text-forest-900' : 'text-white/90 hover:text-white'}`}
            >
              <Phone size={16} />
              +91-77658-68678
            </a>
            <a href="#appointment" className="btn-primary text-sm py-2.5 px-6">
              Book Appointment
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-forest-800 hover:bg-forest-50' : 'text-white hover:bg-white/10'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-forest-100 px-4 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-forest-800 font-medium hover:bg-forest-50 hover:text-forest-700 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-forest-100 flex flex-col gap-2">
            <a href="tel:+917765868678" className="flex items-center gap-2 px-4 py-2 text-forest-700 font-medium">
              <Phone size={16} />
              +91-77658-68678
            </a>
            <a href="#appointment" onClick={() => setOpen(false)} className="btn-primary text-center text-sm">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
