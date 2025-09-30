import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Your privacy is important to us. This policy explains how CEY Global Connect collects, uses, and protects your personal information.
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
            <button onClick={() => scrollToSection('information-collection')} className="text-left text-primary hover:underline">1. Information We Collect</button>
            <button onClick={() => scrollToSection('how-we-use')} className="text-left text-primary hover:underline">2. How We Use Your Information</button>
            <button onClick={() => scrollToSection('information-sharing')} className="text-left text-primary hover:underline">3. Information Sharing</button>
            <button onClick={() => scrollToSection('usdc-crypto')} className="text-left text-primary hover:underline">4. USDC & Cryptocurrency Data</button>
            <button onClick={() => scrollToSection('data-security')} className="text-left text-primary hover:underline">5. Data Security</button>
            <button onClick={() => scrollToSection('international-transfers')} className="text-left text-primary hover:underline">6. International Transfers</button>
            <button onClick={() => scrollToSection('your-rights')} className="text-left text-primary hover:underline">7. Your Rights</button>
            <button onClick={() => scrollToSection('cookies')} className="text-left text-primary hover:underline">8. Cookies & Tracking</button>
            <button onClick={() => scrollToSection('contact-us')} className="text-left text-primary hover:underline">9. Contact Us</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <section id="information-collection" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">1. Information We Collect</h2>
            
            <h3 className="font-semibold text-xl mb-4">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              When you use CEY Global Connect services, we collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Full name, date of birth, and government-issued ID information</li>
              <li>Contact information (email, phone number, address)</li>
              <li>Financial information (bank account details, payment methods)</li>
              <li>Employment information and source of funds</li>
              <li>Beneficiary information for money transfers</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Transaction Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Transfer amounts, currencies, and destination countries</li>
              <li>USDC wallet addresses and blockchain transaction data</li>
              <li>Agent and Super Agent transaction records</li>
              <li>Exchange rates and fees applied</li>
              <li>Transfer status and completion timestamps</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Technical Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Device information and IP addresses</li>
              <li>Browser type and operating system</li>
              <li>App usage analytics and performance data</li>
              <li>Location data (with your permission)</li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">2. How We Use Your Information</h2>
            
            <h3 className="font-semibold text-xl mb-4">Service Provision</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Process international money transfers to 200+ countries</li>
              <li>Generate unique USDC addresses via Circle Wallets API</li>
              <li>Facilitate deposits and withdrawals across multiple blockchain networks</li>
              <li>Provide real-time transfer tracking and status updates</li>
              <li>Manage User, Agent, and Super Agent account types</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Compliance & Security</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Comply with anti-money laundering (AML) regulations</li>
              <li>Conduct Know Your Customer (KYC) verification</li>
              <li>Monitor for fraudulent activities and suspicious transactions</li>
              <li>Report to regulatory authorities as required by law</li>
              <li>Maintain transaction records for compliance purposes</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Service Improvement</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Analyze usage patterns to improve our platform</li>
              <li>Develop new features and services</li>
              <li>Provide customer support and resolve issues</li>
              <li>Send service updates and important notifications</li>
            </ul>
          </section>

          <section id="information-sharing" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">3. Information Sharing</h2>
            
            <p className="text-muted-foreground mb-4">
              We share your information only in the following circumstances:
            </p>

            <h3 className="font-semibold text-xl mb-4">Service Partners</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Circle:</strong> For USDC wallet management and blockchain operations</li>
              <li><strong>Banking Partners:</strong> To facilitate traditional money transfers</li>
              <li><strong>Payment Processors:</strong> To process your payments securely</li>
              <li><strong>Identity Verification Providers:</strong> For KYC compliance</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Legal Requirements</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Regulatory authorities for compliance reporting</li>
              <li>Law enforcement when legally required</li>
              <li>Courts and legal proceedings</li>
              <li>Tax authorities as required by law</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Business Operations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Agents and Super Agents for transaction processing</li>
              <li>Customer support and technical service providers</li>
              <li>Business transfers or acquisitions (with notice)</li>
            </ul>
          </section>

          <section id="usdc-crypto" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">4. USDC & Cryptocurrency Data</h2>
            
            <h3 className="font-semibold text-xl mb-4">Blockchain Transparency</h3>
            <p className="text-muted-foreground mb-4">
              USDC transactions are recorded on public blockchains (Ethereum, Solana, Polygon, Avalanche). 
              While wallet addresses are pseudonymous, transaction amounts and timestamps are publicly visible.
            </p>

            <h3 className="font-semibold text-xl mb-4">Circle Integration</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>We use Circle Wallets API to generate unique USDC addresses</li>
              <li>Circle maintains custody of USDC funds with institutional-grade security</li>
              <li>Transaction data is shared with Circle for compliance and security</li>
              <li>Circle's privacy policy also applies to USDC-related data</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Multi-Network Support</h3>
            <p className="text-muted-foreground mb-4">
              When you choose different blockchain networks for USDC transfers, transaction data 
              is recorded on the respective blockchain and may be subject to different privacy characteristics.
            </p>
          </section>

          <section id="data-security" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">5. Data Security</h2>
            
            <h3 className="font-semibold text-xl mb-4">Technical Safeguards</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Bank-level encryption for all data transmission and storage</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure API integration with Circle and banking partners</li>
              <li>24/7 fraud monitoring and detection systems</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Operational Security</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Employee background checks and security training</li>
              <li>Limited access to customer data on need-to-know basis</li>
              <li>Secure data centers with physical access controls</li>
              <li>Regular backup and disaster recovery procedures</li>
            </ul>
          </section>

          <section id="international-transfers" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">6. International Transfers</h2>
            
            <p className="text-muted-foreground mb-4">
              As we operate in 200+ countries, your data may be transferred internationally:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Data is transferred to destination countries for money transfer completion</li>
              <li>We ensure adequate protection through contractual safeguards</li>
              <li>Some countries may have different privacy laws and regulations</li>
              <li>We comply with applicable data protection frameworks (GDPR, CCPA, etc.)</li>
              <li>Cross-border data transfers are secured with appropriate measures</li>
            </ul>
          </section>

          <section id="your-rights" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">7. Your Rights</h2>
            
            <p className="text-muted-foreground mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion (subject to legal retention requirements)</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where applicable</li>
            </ul>

            <p className="text-muted-foreground mb-4">
              <strong>Note:</strong> Some data must be retained for regulatory compliance, 
              including AML/KYC records and transaction history.
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">8. Cookies & Tracking</h2>
            
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Maintain your login session and preferences</li>
              <li>Analyze website usage and improve performance</li>
              <li>Provide personalized content and recommendations</li>
              <li>Ensure security and prevent fraud</li>
              <li>Deliver relevant marketing communications</li>
            </ul>

            <p className="text-muted-foreground mb-4">
              You can manage cookie preferences through your browser settings. 
              See our Cookie Policy for detailed information.
            </p>
          </section>

          <section id="contact-us" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">9. Contact Us</h2>
            
            <p className="text-muted-foreground mb-4">
              For privacy-related questions or to exercise your rights, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>Email:</strong> privacy@ceyglobalconnect.com</p>
              <p className="text-muted-foreground mb-2"><strong>Phone:</strong> +1-800-CEY-HELP</p>
              <p className="text-muted-foreground mb-2"><strong>Address:</strong> CEY Global Connect Privacy Office</p>
              <p className="text-muted-foreground mb-4">123 Financial District, New York, NY 10004</p>
              
              <p className="text-sm text-muted-foreground">
                We will respond to your privacy requests within 30 days. 
                For urgent security matters, please contact us immediately.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
