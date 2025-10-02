import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, DollarSign, Euro, PoundSterling } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient opacity-80 z-10"></div>
        {/* <img
          src={heroImage}
          alt="Global money transfer network"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Floating Currency Icons */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <DollarSign
          className="absolute top-1/4 left-1/4 text-white/20 animate-float"
          size={48}
          style={{ animationDelay: '0s' }}
        />
        <Euro
          className="absolute top-1/3 right-1/4 text-white/20 animate-float"
          size={40}
          style={{ animationDelay: '1s' }}
        />
        <PoundSterling
          className="absolute bottom-1/3 left-1/3 text-white/20 animate-float"
          size={44}
          style={{ animationDelay: '2s' }}
        />
        <Globe
          className="absolute bottom-1/4 right-1/3 text-white/20 animate-scale-bounce"
          size={52}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 lg:px-8 pt-28 md:pt-0 pb-10 md:pb-0 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            International Money Transfers, Anytime
            {/* <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Anytime – At Your Fingertips
            </span> */}
          </h2>

          <p className="text-lg md:text-xl lg:text-1xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fund your wallet with bank transfers or crypto deposits, send money instantly, and withdraw anywhere. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Button
              variant="outline"
              size="lg"
              className="btn-secondary text-lg px-8 py-4 font-bold uppercase tracking-wide border-white text-primary hover:bg-white hover:text-primary"
              onClick={() => scrollToSection('features')}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80 font-medium">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">$50B+</div>
              <div className="text-white/80 font-medium">Transferred Annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-white/80 font-medium">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;