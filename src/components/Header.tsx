import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Minimalist text logo */}
            <a href="#" className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-white' : 'text-white'}`}>
                NSHAMBARE
              </span>
              <span className={`text-xs tracking-widest uppercase ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`}>
                Investments
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+263771331203"
              className="text-sm font-medium text-white bg-amber-700 hover:bg-amber-600 px-5 py-2.5 rounded-full transition-colors"
            >
              +263 77 133 1203
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-900 border-t border-stone-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-300 hover:text-white py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+263771331203"
                className="inline-flex justify-center items-center text-base font-medium text-stone-900 bg-amber-500 hover:bg-amber-400 px-5 py-3 rounded-xl transition-colors mt-4"
              >
                Call Us: +263 77 133 1203
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
