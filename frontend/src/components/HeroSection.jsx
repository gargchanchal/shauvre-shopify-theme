import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { heroContent } from '../data/mockData';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroContent.backgroundImage}
          alt="Featured collection"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {heroContent.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-[#E1921D] hover:bg-[#d08419] text-white px-8 py-6 text-base font-medium group transition-all duration-300 hover:shadow-lg"
          >
            {heroContent.ctaText}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
