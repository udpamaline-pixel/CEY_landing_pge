import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Learn how CEY Global Connect uses cookies and similar technologies to enhance your experience and improve our services.
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
            <button onClick={() => scrollToSection('what-are-cookies')} className="text-left text-primary hover:underline">1. What Are Cookies</button>
            <button onClick={() => scrollToSection('types-of-cookies')} className="text-left text-primary hover:underline">2. Types of Cookies We Use</button>
            <button onClick={() => scrollToSection('essential-cookies')} className="text-left text-primary hover:underline">3. Essential Cookies</button>
            <button onClick={() => scrollToSection('analytics-cookies')} className="text-left text-primary hover:underline">4. Analytics Cookies</button>
            <button onClick={() => scrollToSection('marketing-cookies')} className="text-left text-primary hover:underline">5. Marketing Cookies</button>
            <button onClick={() => scrollToSection('third-party-cookies')} className="text-left text-primary hover:underline">6. Third-Party Cookies</button>
            <button onClick={() => scrollToSection('managing-cookies')} className="text-left text-primary hover:underline">7. Managing Cookies</button>
            <button onClick={() => scrollToSection('mobile-tracking')} className="text-left text-primary hover:underline">8. Mobile App Tracking</button>
            <button onClick={() => scrollToSection('contact-us')} className="text-left text-primary hover:underline">9. Contact Us</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <section id="what-are-cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">1. What Are Cookies</h2>
            
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Similar technologies include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Web beacons:</strong> Small graphics that track user behavior</li>
              <li><strong>Local storage:</strong> Data stored in your browser</li>
              <li><strong>Session storage:</strong> Temporary data for your browsing session</li>
              <li><strong>Mobile identifiers:</strong> Device-specific tracking in our mobile app</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800 font-medium">
                By continuing to use our website and services, you consent to our use of cookies as described in this policy.
              </p>
            </div>
          </section>

          <section id="types-of-cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">2. Types of Cookies We Use</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Session Cookies</h3>
                <p className="text-muted-foreground text-sm">
                  Temporary cookies that expire when you close your browser. 
                  Used for essential functions like maintaining your login session.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Persistent Cookies</h3>
                <p className="text-muted-foreground text-sm">
                  Remain on your device for a set period or until you delete them. 
                  Used to remember your preferences and settings.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-foreground">First-Party Cookies</h3>
                <p className="text-muted-foreground text-sm">
                  Set directly by CEY Global Connect to provide core functionality 
                  and improve your user experience.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Third-Party Cookies</h3>
                <p className="text-muted-foreground text-sm">
                  Set by external services we use, such as analytics providers, 
                  customer support tools, and marketing platforms.
                </p>
              </div>
            </div>
          </section>

          <section id="essential-cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">3. Essential Cookies</h2>
            
            <p className="text-muted-foreground mb-4">
              These cookies are necessary for our website and services to function properly. 
              They cannot be disabled without affecting core functionality.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">cey_session</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Maintains your login session and authentication state</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">cey_csrf</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Protects against cross-site request forgery attacks</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">cey_preferences</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Stores your language and currency preferences</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">cey_security</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Fraud prevention and security monitoring</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="analytics-cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">4. Analytics Cookies</h2>
            
            <p className="text-muted-foreground mb-4">
              These cookies help us understand how visitors interact with our website and mobile app, 
              allowing us to improve our services and user experience.
            </p>

            <h3 className="font-semibold text-xl mb-4">Google Analytics</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Tracks page views, user sessions, and navigation patterns</li>
              <li>Measures website performance and loading times</li>
              <li>Identifies popular content and features</li>
              <li>Helps optimize user experience and interface design</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Internal Analytics</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Transfer completion rates and success metrics</li>
              <li>Feature usage statistics for continuous improvement</li>
              <li>Error tracking and performance monitoring</li>
              <li>User journey analysis for service optimization</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800 font-medium">
                Analytics data is anonymized and aggregated. We do not track individual financial transactions 
                or personal information through analytics cookies.
              </p>
            </div>
          </section>

          <section id="marketing-cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">5. Marketing Cookies</h2>
            
            <p className="text-muted-foreground mb-4">
              These cookies are used to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.
            </p>

            <h3 className="font-semibold text-xl mb-4">Advertising Partners</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Google Ads:</strong> Retargeting and conversion tracking</li>
              <li><strong>Facebook Pixel:</strong> Social media advertising optimization</li>
              <li><strong>LinkedIn Insight:</strong> Professional network advertising</li>
              <li><strong>Twitter Analytics:</strong> Social media engagement tracking</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Marketing Activities</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Display personalized advertisements based on your interests</li>
              <li>Measure ad performance and return on investment</li>
              <li>Prevent showing the same ad repeatedly</li>
              <li>Track conversion rates from marketing campaigns</li>
              <li>Create lookalike audiences for similar users</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-medium">
                You can opt out of marketing cookies without affecting essential website functionality. 
                However, you may see less relevant advertisements.
              </p>
            </div>
          </section>

          <section id="third-party-cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">6. Third-Party Cookies</h2>
            
            <p className="text-muted-foreground mb-4">
              We work with trusted third-party services that may set their own cookies:
            </p>

            <h3 className="font-semibold text-xl mb-4">Service Providers</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Circle:</strong> USDC wallet management and blockchain operations</li>
              <li><strong>Intercom:</strong> Customer support chat functionality</li>
              <li><strong>Stripe:</strong> Payment processing and fraud prevention</li>
              <li><strong>Cloudflare:</strong> Content delivery and security services</li>
              <li><strong>Zendesk:</strong> Customer support ticket management</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Social Media Integration</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Social media sharing buttons and widgets</li>
              <li>Login with social media accounts</li>
              <li>Social media feed integration</li>
              <li>Social proof and testimonial features</li>
            </ul>

            <p className="text-muted-foreground mb-4">
              Each third-party service has its own privacy policy and cookie practices. 
              We recommend reviewing their policies for complete information.
            </p>
          </section>

          <section id="managing-cookies" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">7. Managing Cookies</h2>
            
            <h3 className="font-semibold text-xl mb-4">Browser Settings</h3>
            <p className="text-muted-foreground mb-4">
              You can control cookies through your browser settings:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Cookie Preferences</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-muted-foreground mb-4">
                You can manage your cookie preferences for our website:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Essential Cookies</span>
                  <span className="text-xs text-gray-500">Always Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Analytics Cookies</span>
                  <button className="text-xs text-primary hover:underline">Manage</button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Marketing Cookies</span>
                  <button className="text-xs text-primary hover:underline">Manage</button>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-xl mb-4">Opt-Out Links</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://www.facebook.com/settings?tab=ads" className="text-primary hover:underline">Facebook Ad Preferences</a></li>
              <li><a href="http://optout.aboutads.info/" className="text-primary hover:underline">Digital Advertising Alliance Opt-out</a></li>
              <li><a href="http://www.youronlinechoices.eu/" className="text-primary hover:underline">European Interactive Digital Advertising Alliance</a></li>
            </ul>
          </section>

          <section id="mobile-tracking" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">8. Mobile App Tracking</h2>
            
            <p className="text-muted-foreground mb-4">
              Our CEY mobile app uses similar tracking technologies:
            </p>

            <h3 className="font-semibold text-xl mb-4">Mobile Identifiers</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>iOS:</strong> Identifier for Advertisers (IDFA)</li>
              <li><strong>Android:</strong> Google Advertising ID (GAID)</li>
              <li><strong>Device ID:</strong> Unique device identifiers for security</li>
              <li><strong>Push Tokens:</strong> For sending notifications</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">App Analytics</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>App usage patterns and feature adoption</li>
              <li>Crash reporting and performance monitoring</li>
              <li>User engagement and retention metrics</li>
              <li>Transfer completion rates and user flows</li>
            </ul>

            <h3 className="font-semibold text-xl mb-4">Managing Mobile Tracking</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li><strong>iOS:</strong> Settings → Privacy & Security → Tracking</li>
              <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
              <li><strong>App Settings:</strong> Manage preferences within the CEY app</li>
            </ul>
          </section>

          <section id="contact-us" className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">9. Contact Us</h2>
            
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies or this Cookie Policy:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>Privacy Team:</strong> privacy@ceyglobalconnect.com</p>
              <p className="text-muted-foreground mb-2"><strong>Customer Support:</strong> support@ceyglobalconnect.com</p>
              <p className="text-muted-foreground mb-2"><strong>Phone:</strong> +1-800-CEY-HELP</p>
              <p className="text-muted-foreground mb-4"><strong>Address:</strong> CEY Global Connect Privacy Office<br />123 Financial District, New York, NY 10004</p>
              
              <p className="text-sm text-muted-foreground">
                We will update this Cookie Policy as needed to reflect changes in our practices or applicable laws. 
                Please check back periodically for updates.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
