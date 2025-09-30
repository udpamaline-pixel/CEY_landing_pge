import { UserPlus, FileText, Send, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up in minutes with just your email and phone number. Complete identity verification for secure transfers."
    },
    {
      icon: FileText,
      title: "Enter Recipient Details",
      description: "Add your recipient's information including name, address, and preferred payout method. Save for future use."
    },
    {
      icon: Send,
      title: "Send Money Instantly",
      description: "Review your transfer details, make payment, and track your money in real-time until it reaches your recipient."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Send money internationally in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full text-lg font-semibold mb-4">
                <step.icon className="w-8 h-8 text-white mx-auto" />
                </div>
                
               
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 bg-blue-600 rounded-full p-2 text-white">
                  <ArrowRight className="w-6 h-6  text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Get Started Now
          </button>
          <p className="text-sm text-gray-500 mt-2">
            No hidden fees • Secure transfers • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;