
import { Users, Shield, Headphones } from 'lucide-react';

const Trusted = () => {
    const trustFeatures = [
        {
            icon: Users,
            title: "Trusted by millions",
            description: "Millions of customers globally move around ₹1 trillion each month"
        },
        {
            icon: Shield,
            title: "Regulated",
            description: "Fee Preview Before Every Transaction (no hidden charges)."
        },
        {
            icon: Headphones,
            title: "24/7 customer support",
            description: "Get help from thousands of specialists any time over email, phone and chat"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustFeatures.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            {/* Icon */}
                            <div className="mb-4">
                                <feature.icon className="w-8 h-8 text-gray-600" />
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Trusted;
