import React from 'react';
import { 
  Wrench, 
  Trophy, 
  BookOpen, 
  BarChart3, 
  Library, 
  Users,
  ArrowUpRight,
  Target,
  Zap,
  Shield,
  TrendingUp,
  MapPin,
  Sparkles
} from 'lucide-react';

const BentoGrid = () => {
  const features = [
    {
      id: 'tools',
      title: 'Professional Tools',
      description: 'Advanced pricing calculators, route optimizers, and management systems.',
      icon: Wrench,
      stats: '25+ Tools',
      highlight: 'Popular'
    },
    {
      id: 'competitive',
      title: 'Market Intelligence',
      description: 'Real-time competitor analysis and strategic positioning insights.',
      icon: BarChart3,
      stats: 'Live Data',
      highlight: 'Real-time'
    },
    {
      id: 'success',
      title: 'Success Stories',
      description: 'Case studies from owners who scaled to multi-city operations.',
      icon: Trophy,
      stats: '150+ Stories'
    },
    {
      id: 'insights',
      title: 'Weekly Reports',
      description: 'Market analysis and emerging opportunities in your region.',
      icon: Target,
      stats: 'Updated Weekly'
    },
    {
      id: 'community',
      title: 'Elite Network',
      description: 'Private community of successful removal company owners.',
      icon: Users,
      stats: '2,500+ Members',
      highlight: 'Exclusive'
    },
    {
      id: 'resources',
      title: 'Resource Hub',
      description: 'Templates, contracts, and operational guides from leaders.',
      icon: Library,
      stats: '500+ Resources'
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden transition-colors duration-300">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/30 dark:from-gray-800/80 dark:via-gray-900 dark:to-blue-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/20 via-transparent to-purple-50/20 dark:from-orange-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,87,34,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(255,87,34,0.12),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,69,19,0.04),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(139,69,19,0.08),transparent_40%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-gradient-to-br from-orange-400/8 to-orange-600/4 dark:from-orange-400/15 dark:to-orange-600/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-24 h-24 bg-gradient-to-br from-blue-400/8 to-blue-600/4 dark:from-blue-400/15 dark:to-blue-600/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-400/8 to-purple-600/4 dark:from-purple-400/15 dark:to-purple-600/8 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Accents */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 border border-orange-500/15 dark:border-orange-400/25 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500/15 dark:bg-blue-400/25 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50/80 dark:bg-orange-900/40 backdrop-blur-sm text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up border border-orange-100/50 dark:border-orange-800/50">
            <Sparkles className="w-4 h-4" />
            Complete Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up animation-delay-200">
            Everything You Need to
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Scale & Dominate
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Join elite removal company owners transforming their businesses with our comprehensive platform.
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={feature.id}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100/60 dark:border-gray-700/60 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient - Orange Only */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 dark:from-orange-500/10 dark:to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Highlight Badge */}
                {feature.highlight && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {feature.highlight}
                  </div>
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-100/80 dark:bg-gray-700/80 group-hover:bg-orange-500 rounded-xl shadow-lg transition-all duration-500 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                      <span>{feature.stats}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-800">
          <div className="text-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/60 dark:border-gray-700/60 hover:border-orange-200 dark:hover:border-orange-600 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">40%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Avg Revenue Increase</div>
          </div>
          <div className="text-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/60 dark:border-gray-700/60 hover:border-orange-200 dark:hover:border-orange-600 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">127</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">7-Figure Companies</div>
          </div>
          <div className="text-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/60 dark:border-gray-700/60 hover:border-orange-200 dark:hover:border-orange-600 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">£85M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Combined Revenue</div>
          </div>
          <div className="text-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/60 dark:border-gray-700/60 hover:border-orange-200 dark:hover:border-orange-600 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">89</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Market Leaders</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">Trusted by industry leaders worldwide</span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Everything you need to outperform competitors and scale your removal business to 7-figures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;