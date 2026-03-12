import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl tracking-wider"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-[#111111]">OCD</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#111111]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors text-left"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="text-[#111111] hover:text-[#3b2b22] transition-colors text-left"
            >
              Visit Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
