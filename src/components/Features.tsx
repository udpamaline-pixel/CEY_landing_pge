import { Zap, Shield, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Ease and convenience",
      description: "Experience international money transfer at your fingertips."
    },
    {
      icon: Shield,
      title: "Commitment to security",
      description: "Our encryption and fraud prevention efforts help protect your Western Union transfers."
    },
    {
      icon: DollarSign,
      title: "Speed and transparency",
      description: "Send money in minutes and easily track your money along the way."
    },
    {
      icon: Clock,
      title: "Worldwide reach",
      description: "We handle an average of 25 transfers per second and send money from India to over 70+ countries and territories."
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
          Our customers made <span className="text-gradient">millions of transfers</span>  last year
           
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Experience the future of international money transfers with our cutting-edge platform designed for speed, security, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>

                <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Features;