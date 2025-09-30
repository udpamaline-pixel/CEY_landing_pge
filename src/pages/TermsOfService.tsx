import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="text-white hover:bg-white/10 mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </Button>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            These terms govern your use of CEY Global Connect services, including international money transfers and USDC operations.
          </p>
          <p className="text-sm text-white/80 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading font-bold text-xl mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <button onClick={() => scrollToSection('acceptance')} className="text-left text-primary hover:underline">1. Acceptance of Terms</button>
            <button onClick={() => scrollToSection('services')} className="text-left text-primary hover:underline">2. Our Services</button>
            <button onClick={() => scrollToSection('account-types')} className="text-left text-primary hover:underline">3. Account Types</button>
            <button onClick={() => scrollToSection('usdc-services')} className="text-left text-primary hover:underline">4. USDC & Crypto Services</button>
            <button onClick={() => scrollToSection('eligibility')} className="text-left text-primary hover:underline">5. Eligibility & Registration</button>
            <button onClick={() => scrollToSection('fees-rates')} className="text-left text-primary hover:underline">6. Fees & Exchange Rates</button>
            <button onClick={() => scrollToSection('compliance')} className="text-left text-primary hover:underline">7. Compliance & Verification</button>
            <button onClick={() => scrollToSection('prohibited-use')} className="text-left text-primary hover:underline">8. Prohibited Use</button>
            <button onClick={() => scrollToSection('liability')} className="text-left text-primary hover:underline">9. Liability & Disclaimers</button>
            <button onClick={() => scrollToSection('termination')} className="text-left text-primary hover:underline">10. Termination</button>
            <button onClick={() => scrollToSection('governing-law')} className="text-left text-primary hover:underline">11. Governing Law</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-primary hover:underline">12. Contact Information</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <section id="acceptance" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">1. Acceptance of Terms</h2>
            
            <p className="text-muted-foreground mb-4">
              By accessing or using CEY Global Connect services, including our website, mobile application, 
              and money transfer services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
            
            <p className="text-muted-foreground mb-4">
              If you do not agree with any of these terms, you are prohibited from using our services. 
              These terms may be updated from time to time, and continued use constitutes acceptance of any changes.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800 font-medium">
                Important: By using our USDC services, you acknowledge understanding of cryptocurrency risks 
                and blockchain technology limitations.
              </p>
            </div>
          </section>

          <section id="services" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">2. Our Services</h2>
            
            <h3 className="font-semibold text-xl mb-4">International Money Transfers</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Send money to 200+ countries worldwide</li>
              <li>Real-time transfer tracking and status updates</li>
              <li>Competitive exchange rates updated in real-time</li>
              <li>Multiple payout options for recipients</li>
              <li>24/7 customer support for transfer assistance</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">USDC Cryptocurrency Services</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Unique USDC addresses powered by Circle Wallets API</li>
              <li>Instant deposits reflected as USD balance</li>
              <li>Multi-network withdrawals (Ethereum, Solana, Polygon, Avalanche)</li>
              <li>Send USDC to external wallets (Binance, Coinbase, Metamask, etc.)</li>
              <li>Low-fee, transparent cryptocurrency operations</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Mobile Application</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>CEY mobile app for iOS and Android</li>
              <li>Secure login and account management</li>
              <li>Saved recipient details for faster transfers</li>
              <li>Real-time fee and exchange rate checking</li>
              <li>Transfer history and receipt management</li>
            </ul>
          </section>

          <section id="account-types" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">3. Account Types</h2>
            
            <h3 className="font-semibold text-xl mb-4">User Accounts</h3>
            <p className="text-muted-foreground mb-4">
              Standard personal accounts for individual money transfers with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Personal transfer limits and verification requirements</li>
              <li>Unique USDC address for deposits</li>
              <li>Access to all supported countries and currencies</li>
              <li>Standard customer support</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Agent Accounts</h3>
            <p className="text-muted-foreground mb-4">
              Business accounts for small to medium volume operations with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Higher transaction limits</li>
              <li>Business verification requirements</li>
              <li>Enhanced reporting and analytics</li>
              <li>Priority customer support</li>
              <li>Commission structure for agent services</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Super Agent Accounts</h3>
            <p className="text-muted-foreground mb-4">
              Enterprise-level accounts for high-volume operations with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Highest transaction limits</li>
              <li>Dedicated account management</li>
              <li>Custom integration options</li>
              <li>Preferential rates and fees</li>
              <li>Advanced compliance and reporting tools</li>
            </ul>
          </section>

          <section id="usdc-services" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">4. USDC & Cryptocurrency Services</h2>
            
            <h3 className="font-semibold text-xl mb-4">Circle Integration</h3>
            <p className="text-muted-foreground mb-4">
              Our USDC services are powered by Circle Wallets API. By using these services, you also agree to Circle's terms and conditions.
            </p>

            <h3 className="font-semibold text-xl mb-4">Blockchain Networks</h3>
            <p className="text-muted-foreground mb-4">
              We support USDC operations on multiple blockchain networks:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Ethereum:</strong> ERC-20 USDC tokens</li>
              <li><strong>Solana:</strong> SPL USDC tokens</li>
              <li><strong>Polygon:</strong> Polygon USDC tokens</li>
              <li><strong>Avalanche:</strong> Avalanche USDC tokens</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Cryptocurrency Risks</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-medium mb-2">Important Disclaimers:</p>
              <ul className="list-disc pl-6 text-yellow-800 text-sm">
                <li>Cryptocurrency transactions are irreversible</li>
                <li>Network fees may apply and vary by blockchain</li>
                <li>Transaction times depend on network congestion</li>
                <li>You are responsible for providing correct wallet addresses</li>
                <li>CEY is not liable for losses due to incorrect addresses or network issues</li>
              </ul>
            </div>
          </section>

          <section id="eligibility" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">5. Eligibility & Registration</h2>
            
            <h3 className="font-semibold text-xl mb-4">Age Requirements</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>You must be at least 18 years old to use our services</li>
              <li>Legal guardians may open accounts for minors where permitted by law</li>
              <li>Business accounts require authorized signatories</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Geographic Restrictions</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Services available in supported countries only</li>
              <li>Compliance with local laws and regulations required</li>
              <li>Some features may be restricted in certain jurisdictions</li>
              <li>USDC services subject to cryptocurrency regulations</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Account Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>You must provide accurate and complete information</li>
              <li>Keep your account information updated</li>
              <li>One account per person/entity</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section id="fees-rates" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">6. Fees & Exchange Rates</h2>
            
            <h3 className="font-semibold text-xl mb-4">Transfer Fees</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Transparent fee structure displayed before confirmation</li>
              <li>Fees vary by destination country and transfer amount</li>
              <li>USDC transfers have low, competitive fees</li>
              <li>Agent and Super Agent accounts may have preferential rates</li>
              <li>No hidden charges or surprise fees</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Exchange Rates</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Real-time exchange rates updated regularly</li>
              <li>Rates locked at time of transfer confirmation</li>
              <li>Competitive margins on currency conversion</li>
              <li>Rate guarantees for specified time periods</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Third-Party Fees</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Blockchain network fees for USDC transactions</li>
              <li>Correspondent bank charges may apply</li>
              <li>Recipient bank fees (where applicable)</li>
              <li>Payment method fees (credit card, etc.)</li>
            </ul>
          </section>

          <section id="compliance" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">7. Compliance & Verification</h2>
            
            <h3 className="font-semibold text-xl mb-4">Know Your Customer (KYC)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Identity verification required for all accounts</li>
              <li>Government-issued ID and proof of address needed</li>
              <li>Enhanced due diligence for high-value transactions</li>
              <li>Ongoing monitoring and periodic re-verification</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Anti-Money Laundering (AML)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Transaction monitoring for suspicious activities</li>
              <li>Reporting to relevant authorities as required</li>
              <li>Source of funds verification</li>
              <li>Sanctions screening for all parties</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Regulatory Compliance</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Compliance with local and international regulations</li>
              <li>Regular audits and regulatory examinations</li>
              <li>Record keeping as required by law</li>
              <li>Cooperation with regulatory investigations</li>
            </ul>
          </section>

          <section id="prohibited-use" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">8. Prohibited Use</h2>
            
            <p className="text-muted-foreground mb-4">
              You may not use our services for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Illegal activities or transactions</li>
              <li>Money laundering or terrorist financing</li>
              <li>Fraud, scams, or deceptive practices</li>
              <li>Transactions involving sanctioned parties or countries</li>
              <li>Gambling or adult entertainment (where prohibited)</li>
              <li>Purchasing illegal goods or services</li>
              <li>Tax evasion or avoidance schemes</li>
              <li>Circumventing currency controls or regulations</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-medium">
                Violation of these prohibitions may result in immediate account suspension, 
                transaction reversal, and reporting to authorities.
              </p>
            </div>
          </section>

          <section id="liability" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">9. Liability & Disclaimers</h2>
            
            <h3 className="font-semibold text-xl mb-4">Service Availability</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Services provided "as is" without warranties</li>
              <li>We strive for 99.9% uptime but cannot guarantee uninterrupted service</li>
              <li>Maintenance windows may temporarily affect availability</li>
              <li>Third-party service dependencies may cause disruptions</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Limitation of Liability</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Liability limited to the amount of the specific transaction</li>
              <li>No liability for consequential or indirect damages</li>
              <li>Force majeure events beyond our reasonable control</li>
              <li>Cryptocurrency network issues or delays</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">User Responsibilities</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Verify recipient information accuracy</li>
              <li>Secure your account credentials</li>
              <li>Report unauthorized transactions immediately</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section id="termination" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">10. Termination</h2>
            
            <h3 className="font-semibold text-xl mb-4">Account Closure</h3>
            <p className="text-muted-foreground mb-4">
              Either party may terminate the account relationship:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>You may close your account at any time</li>
              <li>We may suspend or close accounts for violations</li>
              <li>Regulatory requirements may necessitate closure</li>
              <li>30-day notice for non-breach terminations</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Effect of Termination</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Pending transactions will be completed or refunded</li>
              <li>Account balances returned (minus applicable fees)</li>
              <li>USDC balances transferred to specified wallet</li>
              <li>Records retained as required by law</li>
            </ul>
          </section>

          <section id="governing-law" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">11. Governing Law</h2>
            
            <p className="text-muted-foreground mb-4">
              These terms are governed by the laws of New York, United States, without regard to conflict of law principles.
            </p>
            
            <h3 className="font-semibold text-xl mb-4">Dispute Resolution</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Good faith negotiation for dispute resolution</li>
              <li>Binding arbitration for unresolved disputes</li>
              <li>New York courts have exclusive jurisdiction</li>
              <li>Class action waiver applies</li>
            </ul>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">12. Contact Information</h2>
            
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service or our services:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>Customer Support:</strong> support@ceyglobalconnect.com</p>
              <p className="text-muted-foreground mb-2"><strong>Legal Department:</strong> legal@ceyglobalconnect.com</p>
              <p className="text-muted-foreground mb-2"><strong>Phone:</strong> +1-800-CEY-HELP (24/7)</p>
              <p className="text-muted-foreground mb-2"><strong>Address:</strong> CEY Global Connect</p>
              <p className="text-muted-foreground mb-4">123 Financial District, New York, NY 10004</p>
              
              <p className="text-sm text-muted-foreground">
                These Terms of Service constitute the entire agreement between you and CEY Global Connect 
                regarding the use of our services.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
