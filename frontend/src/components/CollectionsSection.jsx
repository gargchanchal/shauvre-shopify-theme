import React from 'react';
import { collections } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4C1C5B] mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of timeless pieces, each designed with meticulous attention to detail and crafted from the finest materials.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4]">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {collection.itemCount} Items
                  </p>
                </div>
              </div>

              {/* Collection Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 group-hover:text-[#4C1C5B] transition-colors">
                  {collection.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {collection.description}
                </p>
                <button className="inline-flex items-center text-[#E1921D] font-medium group-hover:gap-2 transition-all">
                  Shop now
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
