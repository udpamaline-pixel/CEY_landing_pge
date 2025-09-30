import { UserPlus, FileText, Send, LogOut, Banknote, UserRoundPlusIcon, ArrowLeftRight, Landmark, Shell } from 'lucide-react';
import howItWorksImage from '@/assets/app.png';

const MoneyTransferApp = () => {
    const steps = [
        {
            icon: LogOut,
            title: "Log in to CEY App.",
            description: "Sign up in minutes with just your email and phone number. Complete identity verification for secure transfers."
        },
        {
            icon: Banknote,
            title: "Save your receiver’s details for faster repeat transfers.",
        },
        {
            icon: UserRoundPlusIcon,
            title: "Check our fees and exchange rates*.",
        },
        {
            icon: ArrowLeftRight,
            title: "Pay using your CEY Wallet or USDC crypto.",
        },
        {
            icon: Shell,
            title: "See the status of your transfer at a glance.",
        }
    ];

    return (
        <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                        Money transfer made easy with the CEY app.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Sending money internationally has never been easier. Follow these simple steps to get started.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4 items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <step.icon className="text-white" size={20} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg text-gray-900 leading-snug">
                                        {step.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image */}
                    <div className="relative lg:pl-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform rotate-2 opacity-50"></div>
                        <div className="relative  p-4 flex justify-center">
                            <img
                                src={howItWorksImage}
                                alt="Step by step money transfer process"
                                className="text-center rounded-2xl"
                         
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-400 rounded-full opacity-15"></div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h3 className="font-bold text-2xl lg:text-3xl text-white mb-4">
                            Ready to Send Money?
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto">
                            Join millions who trust CEY Money Transfer for their international transfers.
                        </p>
                        <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Start Transfer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoneyTransferApp;