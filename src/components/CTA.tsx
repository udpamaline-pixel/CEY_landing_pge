import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe, Apple, Play } from 'lucide-react';
import qr from '@/assets/Qr.png';
const CTA = () => {
  return (
    <section className="py-20 lg:py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Start Sending Money Today
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join millions of customers worldwide who trust CEY Money Transfer for fast, secure, and affordable international money transfers.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Shield size={24} />
              <span className="font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Zap size={24} />
              <span className="font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Globe size={24} />
              <span className="font-medium">200+ Countries</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-bold uppercase tracking-wide group shadow-xl"
            >
              Send Money Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary text-lg px-8 py-4 font-bold uppercase tracking-wide"
            >
              Create Account
            </Button>
          </div>

          {/* QR Code and App Download Section */}
          <div className="mt-16 max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
                {/* QR Code Section */}
                  <h3 className="text-gray-900 font-semibold mb-3">
                  Scan to get CEY App
                  </h3>
                <div className="text-center flex items-center justify-center  ">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                    {/* QR Code placeholder - you can replace this with actual QR code */}
                    <div className="w-25 h-25 bg-gradient-to-br from-gray-800 to-gray-600 rounded opacity-80 flex items-center justify-center">
                        <img src={qr} alt="" width={160} height={160} />
                    </div>
                  </div>
                </div>


            </div>
          </div>
          {/* App Store Buttons */}
          <div className="flex gap-3 justify-center mt-5">
            <button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors" onClick={() => window.open('https://apps.apple.com/us/app/cey-money-transfer/id6445355524', '_blank')}>
              <Apple />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>

            <button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors" onClick={() => window.open('https://ceyronpartners.com/mobileapp/', '_blank')}>
                <Play />
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default CTA;