import React from 'react';
import { Quote, Star, TrendingUp, DollarSign } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      company: "Elite Removals Ltd",
      location: "London",
      quote: "RemovalGuru transformed my single-truck operation into a 15-truck fleet generating £2M annually. The competitive insights alone are worth 10x the investment.",
      revenue: "£2M ARR",
      growth: "+400%"
    },
    {
      name: "Sarah Chen",
      company: "Metro Moving Solutions",
      location: "Manchester",
      quote: "The tools and community helped me optimize routes, increase pricing, and build systems that run without me. Now I have the freedom I always wanted.",
      revenue: "£1.2M ARR",
      growth: "+250%"
    },
    {
      name: "David Thompson",
      company: "Premier Relocations",
      location: "Birmingham",
      quote: "I went from struggling to pay bills to leading the market in my city. The strategies shared here are exactly what separates successful owners from the rest.",
      revenue: "£800K ARR",
      growth: "+180%"
    }
  ];

  const stats = [
    { label: "Average Revenue Increase", value: "40%", icon: TrendingUp },
    { label: "Companies Scaled to 7-Figures", value: "127", icon: DollarSign },
    { label: "Combined Member Revenue", value: "£85M+", icon: Star },
    { label: "Market Leaders Created", value: "89", icon: Quote }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-2xl mb-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/50 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success Stories From
            <span className="block text-orange-500">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-orange-500 mb-6" />
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-600">
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-orange-500">{testimonial.revenue}</div>
                  <div className="text-sm text-green-600 dark:text-green-400">{testimonial.growth}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;