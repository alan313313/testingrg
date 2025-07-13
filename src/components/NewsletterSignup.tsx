import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would integrate with your email service
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-6 py-4 rounded-2xl border border-green-200 dark:border-green-700 animate-fade-in">
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">Success! Check your email for exclusive insights.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your business email"
        className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg bg-white dark:bg-gray-800"
        required
      />
      <button
        type="submit"
        className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
      >
        Get Free Access
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  );
};

export default NewsletterSignup;