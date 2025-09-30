import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/ceylogo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background/95'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = "/"}>
          <img src={logo} alt=""width={300} height={300} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faqs')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="btn-primary font-bold uppercase tracking-wide">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faqs')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <Button className="btn-primary w-full font-bold uppercase tracking-wide">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;