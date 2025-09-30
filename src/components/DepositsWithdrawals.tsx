import { Wallet, Send, Shield, Network, DollarSign, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const depositFeatures = [
    {
        icon: Wallet,
        title: "Unique USDC Address",
        description: "Each User, Agent, and Super Agent gets a unique USDC address powered by Circle Wallets API."
    },
    {
        icon: Shield,
        title: "Secure & Compliant",
        description: "Circle-powered infrastructure ensures security, compliance, and global accessibility."
    },
    {
        icon: DollarSign,
        title: "Instant Reflection",
        description: "Deposits automatically reflected as USD balance in your CEY wallet instantly."
    }
];

const withdrawalFeatures = [
    {
        icon: ArrowUpRight,
        title: "Send Anywhere",
        description: "Send USDC to any external wallet - Binance, Coinbase, Metamask, and more."
    },
    {
        icon: Network,
        title: "Multi-Network Support",
        description: "Choose your preferred network: Ethereum, Solana, Polygon, or Avalanche."
    },
    {
        icon: Shield,
        title: "Transparent & Secure",
        description: "Low fees, full transparency, and real-time status tracking for all withdrawals."
    }
];

const DepositsWithdrawals = () => {
    return (
        <section id="features" className="py-20 lg:py-20 bg-gradient-to-br from-background to-accent/20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                        Seamless USDC Deposits & Withdrawals – Right Inside Your CEY App
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Fund your wallet in seconds with Circle-powered USDC addresses. Withdraw securely to any external wallet worldwide.                    </p>
                </div>

                {/* Main Cards Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Deposit Card */}
                    <Card className=" border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center mx-auto mb-4">
                                    <Wallet className="text-white" size={40} />
                                </div>
                                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                                    1. Deposit Instantly with USDC
                                </h3>
                            </div>
                            
                            <div className="space-y-6">
                                {depositFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                            <feature.icon className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                                                {feature.title}
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Withdrawal Card */}
                    <Card className=" border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center mx-auto mb-4">
                                    <Send className="text-white" size={40} />
                                </div>
                                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                                    2. Withdraw Anywhere
                                </h3>
                            </div>
                            
                            <div className="space-y-6">
                                {withdrawalFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                            <feature.icon className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                                                {feature.title}
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>


            </div>
        </section>
    );
};

export default DepositsWithdrawals;