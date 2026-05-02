import React, { useState, useEffect } from 'react';
import { collections } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4C1C5B] mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated collections of timeless pieces, each designed with meticulous attention to detail and crafted from the finest materials.
          </p>
        </div>

        {/* Collections with alternating layout */}
        {collections.map((collection, index) => {
          const isEven = (index + 1) % 3;
          
          if (isEven === 1 || isEven === 2) {
            // Image sections
            return (
              <div key={collection.id} className="mb-16 lg:mb-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${isEven === 2 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`${isEven === 2 ? 'lg:order-2' : 'lg:order-1'} relative group overflow-hidden`}>
                    <a href={`/collections/${collection.slug}`} className="block aspect-[4/5] relative">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-8 left-8 bg-[#E1921D] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">
                        {collection.itemCount} Items
                      </div>
                    </a>
                  </div>

                  {/* Text Content */}
                  <div className={`${isEven === 2 ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'} py-12 lg:py-0`}>
                    <div className={`max-w-lg ${isEven === 2 ? 'lg:ml-auto' : ''}`}>
                      <span className="text-[#E1921D] font-medium text-sm uppercase tracking-wider mb-3 block">
                        Collection {index + 1}
                      </span>
                      
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                        <a href={`/collections/${collection.slug}`} className="hover:text-[#4C1C5B] transition-colors">
                          {collection.name}
                        </a>
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {collection.description}
                      </p>
                      
                      <a 
                        href={`/collections/${collection.slug}`}
                        className="inline-flex items-center bg-[#4C1C5B] hover:bg-[#E1921D] text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-lg group"
                      >
                        Explore Collection
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            // Text section every 3rd item
            return (
              <div key={collection.id} className="mb-16 lg:mb-24 py-16 bg-gray-50 rounded-2xl">
                <div className="max-w-3xl mx-auto text-center px-6 lg:px-12">
                  <span className="text-[#E1921D] font-medium text-sm uppercase tracking-wider mb-4 block">
                    Our Philosophy
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                    Timeless Elegance Meets Modern Sophistication
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    At Shauvre, we believe in creating beautiful luxury pieces that transcend seasons. 
                    Every collection tells a story of craftsmanship, quality, and timeless style. 
                    From hand-selected fabrics to meticulous tailoring, each piece is designed to be treasured for years to come.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                    <div>
                      <p className="text-3xl font-bold text-[#4C1C5B] mb-2">{collection.itemCount}+</p>
                      <p className="text-sm text-gray-600">Curated Pieces</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#4C1C5B] mb-2">100%</p>
                      <p className="text-sm text-gray-600">Premium Quality</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#4C1C5B] mb-2">30+</p>
                      <p className="text-sm text-gray-600">Years Craftsmanship</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default CollectionsSection;
