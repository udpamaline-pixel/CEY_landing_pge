import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is CEY Global Connect?",
      answer: "CEY Global Connect is an international money transfer service that allows you to send money to over 200+ countries worldwide. We offer both traditional transfers and modern USDC cryptocurrency options through our secure platform."
    },
    {
      question: "How do USDC deposits work?",
      answer: "Each user, agent, and super agent receives a unique USDC address powered by Circle Wallets API. Simply send USDC to your unique address and it will automatically be reflected as USD balance in your CEY wallet instantly."
    },
    {
      question: "Can I withdraw USDC to external wallets?",
      answer: "Yes! You can send USDC from your CEY wallet to any external wallet including Binance, Coinbase, Metamask, and more. We support multiple networks: Ethereum, Solana, Polygon, and Avalanche."
    },
    {
      question: "What are the different user types?",
      answer: "CEY offers three user types: regular Users for personal transfers, Agents for small business operations, and Super Agents for larger volume transfers. Each type gets unique USDC addresses and different service levels."
    },
    {
      question: "How do I use the CEY mobile app?",
      answer: "Download the CEY app, log in with your credentials, save receiver details for faster transfers, check fees and exchange rates, pay using your CEY Wallet or USDC, and track your transfer status in real-time."
    },
    {
      question: "Is CEY secure and compliant?",
      answer: "Absolutely. We use Circle-powered infrastructure for USDC operations, ensuring security, compliance, and global accessibility. All transfers are protected with bank-level encryption and fraud prevention measures."
    },
    {
      question: "What are the fees for transfers?",
      answer: "We offer transparent, low fees for all transfers. USDC withdrawals have particularly low fees with full transparency. All fees are clearly displayed before you confirm your transfer with no hidden charges."
    },
    {
      question: "How can I track my transfer?",
      answer: "You can track your transfer status in real-time through the CEY app or website. We provide full transparency with live updates from initiation to completion, whether it's a traditional transfer or USDC transaction."
    },
    {
      question: "Which countries and networks do you support?",
      answer: "CEY serves 200+ countries worldwide with $50B+ transferred annually. For USDC, we support Ethereum, Solana, Polygon, and Avalanche networks, giving you flexibility in how you manage your crypto transfers."
    },
    {
      question: "How fast are CEY transfers?",
      answer: "USDC deposits are reflected instantly in your CEY wallet. Traditional international transfers are completed within minutes to hours. We handle an average of 25 transfers per second with our advanced infrastructure."
    }
  ];

  return (
    <section id="faqs" className="py-20 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl  text-foreground mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Find answers to common questions about our international money transfer services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HelpCircle className="text-primary" size={32} />
            <span className="font-heading font-bold text-xl text-foreground">
              Help Center
            </span>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-[var(--shadow-card)] bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          
        </div>
      </div>
    </section>
  );
};

export default FAQ;