import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/ceylogowhite.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = "/"}>
              <img src={logo} alt="CEY Money Transfer" width={250} height={250} />
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Trusted by millions worldwide for fast, secure, and affordable international money transfers to over 200 countries.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg">Quick Links</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-white/80 hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block text-white/80 hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('faqs')}
                className="block text-white/80 hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <a href="#" className="block text-white/80 hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-white/80 hover:text-primary transition-colors">
                Security
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg">Services</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-primary transition-colors">
                Money Transfer
              </a>
              <a href="#" className="block text-white/80 hover:text-primary transition-colors">
                Currency Exchange
              </a>
              <a href="#" className="block text-white/80 hover:text-primary transition-colors">
                Business Payments
              </a>
              <a href="#" className="block text-white/80 hover:text-primary transition-colors">
                Mobile Wallet
              </a>
              <a href="#" className="block text-white/80 hover:text-primary transition-colors">
                API Integration
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white/80">support@ceymoneytransfer.com</div>
                  <div className="text-white/60 text-sm">24/7 Support</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white/80">+1 (555) 123-4567</div>
                  <div className="text-white/60 text-sm">Customer Service</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white/80">123 Financial District</div>
                  <div className="text-white/80">New York, NY 10004</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 CEY Money Transfer. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className="text-white/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-white/60 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;