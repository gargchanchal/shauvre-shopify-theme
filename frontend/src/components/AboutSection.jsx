import React from 'react';
import { aboutContent } from '../data/mockData';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <img
                src={aboutContent.image}
                alt="About Shouvre"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#4C1C5B]/10 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <p className="text-[#E1921D] font-medium text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4C1C5B] mb-4">
                {aboutContent.title}
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-6">
                {aboutContent.subtitle}
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              {aboutContent.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#4C1C5B]/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-semibold text-gray-900">Premium Quality</h4>
                <p className="text-sm text-gray-600">Finest materials, expertly crafted</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#4C1C5B]/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-900">Timeless Design</h4>
                <p className="text-sm text-gray-600">Elegant pieces that last</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#4C1C5B]/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-gray-900">Sustainable</h4>
                <p className="text-sm text-gray-600">Responsibly sourced materials</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#4C1C5B]/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-semibold text-gray-900">Exclusive</h4>
                <p className="text-sm text-gray-600">Limited edition collections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
