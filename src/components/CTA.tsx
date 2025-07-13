import React from 'react';
import { ArrowRight, Shield, Clock, Crown } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const CTA = () => {
  const benefits = [
    {
      icon: Crown,
      text: "Exclusive member-only content"
    },
    {
      icon: Shield,
      text: "30-day money-back guarantee"
    },
    {
      icon: Clock,
      text: "Instant access to all resources"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Enhanced Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-orange-800/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,87,34,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-600/10 to-orange-800/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-600/10 to-blue-800/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-purple-800/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-orange-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-orange-500/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/5 left-1/5 w-8 h-8 border border-blue-500/20 rotate-12 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          Ready to
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Transform Your Business?
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Join the exclusive community of removal company owners who are scaling their businesses and dominating their markets.
        </p>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 animate-fade-in-up animation-delay-400">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <Icon className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="animate-fade-in-up animation-delay-600">
          <NewsletterSignup />
        </div>

        <p className="text-sm text-gray-400 mt-6 animate-fade-in-up animation-delay-800">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default CTA;