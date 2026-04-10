import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { newsletterContent } from '../data/mockData';
import { Mail, Check } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    } else {
      toast.error('Please enter a valid email address');
    }
  };

  return (
    <section className="py-20 bg-[#4C1C5B] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={32} className="text-[#E1921D]" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {newsletterContent.title}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {newsletterContent.subtitle}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-[#E1921D] transition-colors"
                  disabled={isSubscribed}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 bg-[#E1921D] hover:bg-[#d08419] text-white px-8 font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <Check size={20} className="mr-2" />
                    Subscribed
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </div>
          </form>

          {/* Privacy Note */}
          <p className="text-white/60 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
