import React from 'react';
import { collections } from '../data/mockData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CollectionsListPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 py-4">
            <nav className="text-sm text-gray-500">
              <a href="/" className="hover:text-[#4C1C5B] transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Collections</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#4C1C5B] mb-4">
                Our Collections
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our curated collections of timeless elegance and modern sophistication
              </p>
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {collections.map((collection, index) => (
              <a
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-100"
                style={{ aspectRatio: '4/5' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                  {/* Item Count Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm text-[#4C1C5B] px-4 py-2 rounded-full text-sm font-semibold">
                      {collection.itemCount} Items
                    </span>
                  </div>

                  {/* Collection Info */}
                  <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
                      {collection.name}
                    </h2>
                    <p className="text-white/90 text-base lg:text-lg mb-6 leading-relaxed">
                      {collection.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 text-white font-semibold">
                      <span className="border-b-2 border-[#E1921D] pb-1">Shop Collection</span>
                      <svg 
                        className="w-5 h-5 transform transition-transform group-hover:translate-x-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-4 border-[#4C1C5B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </a>
            ))}
          </div>

          {/* Optional: Featured Text Below */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Crafted with Excellence</p>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">
              Each collection tells a story of timeless elegance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From ready-to-wear pieces to elegant evening gowns, discover curated selections 
              that blend vintage couture with modern sophistication.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollectionsListPage;
