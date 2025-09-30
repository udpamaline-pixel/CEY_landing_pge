import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import MoneyTransferApp from '@/components/MoneyTransferApp';
import Trusted from '@/components/Trusted ';
import DepositsWithdrawals from '@/components/DepositsWithdrawals';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <DepositsWithdrawals />
      <MoneyTransferApp />
      <Trusted />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
