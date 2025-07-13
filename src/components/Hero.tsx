import React from 'react';
import { ArrowRight, Users, Star, TrendingUp } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import DashboardVisualization from './DashboardVisualization';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-blue-50/20 dark:from-orange-900/10 dark:via-gray-900 dark:to-blue-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-100/20 to-transparent dark:from-transparent dark:via-orange-900/20 dark:to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,87,34,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(255,87,34,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-orange-600/5 dark:from-orange-400/20 dark:to-orange-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-blue-600/5 dark:from-blue-400/15 dark:to-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-purple-600/5 dark:from-purple-400/15 dark:to-purple-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Small Particles */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-orange-500/20 dark:bg-orange-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-blue-500/20 dark:bg-blue-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-purple-500/20 dark:bg-purple-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-orange-500/20 dark:bg-orange-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '2.2s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/6 w-8 h-8 border border-orange-500/20 dark:border-orange-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/6 w-6 h-6 border border-blue-500/20 dark:border-blue-400/30 rotate-12 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/[0.02] to-transparent dark:via-orange-400/[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent dark:via-blue-400/[0.05]"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-gray-100/60 dark:border-gray-700/60 animate-fade-in-up">
          <Users className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by 2,500+ removal companies</span>
          <div className="flex items-center gap-1 ml-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
            ))}
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
          Dominate Your
          <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
            Removal Market
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Exclusive tools, insider insights, and competitive intelligence that successful removal company owners use to outperform their competition and scale to 7-figures.
        </p>

        {/* Newsletter Signup */}
        <div className="animate-fade-in-up animation-delay-600">
          <NewsletterSignup />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">Average 40% revenue increase</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">487 companies scaled this month</span>
          </div>
        </div>
      </div>

      {/* Dashboard Visualization */}
      <DashboardVisualization />
    </section>
  );
};

export default Hero;