import React, { useState } from 'react';
import { featuredProducts } from '../data/mockData';
import { X, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CollectionPage = () => {
  const [viewType, setViewType] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    size: [],
    color: [],
    category: []
  });

  const products = [...featuredProducts, ...featuredProducts, ...featuredProducts]; // Duplicate for demo

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
            <a href="/collections" className="hover:text-[#4C1C5B] transition-colors">Collections</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Ready to Wear</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#4C1C5B] mb-4">
              Ready to Wear Collection
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A modern take on vintage couture, featuring luxury dresses and timeless pieces.
            </p>
            <p className="text-sm text-gray-500 mt-4">{products.length} Products</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button className="text-sm text-[#4C1C5B] hover:text-[#E1921D]">Clear All</button>
              </div>

              {/* Price Filter */}
              <div className="border-b pb-6 mb-6">
                <h4 className="font-semibold mb-4">Price Range</h4>
                <div className="space-y-3">
                  {['Under $50', '$50 - $100', '$100 - $200', '$200 - $500', '$500+'].map((range) => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
                      <span className="text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="border-b pb-6 mb-6">
                <h4 className="font-semibold mb-4">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="py-2 border-2 border-gray-200 rounded hover:border-[#4C1C5B] hover:text-[#4C1C5B] font-semibold text-sm transition-all"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="border-b pb-6 mb-6">
                <h4 className="font-semibold mb-4">Color</h4>
                <div className="grid grid-cols-6 gap-2">
                  {[
                    { name: 'Black', color: '#000' },
                    { name: 'White', color: '#fff' },
                    { name: 'Gray', color: '#d1d5db' },
                    { name: 'Blue', color: '#1e40af' },
                    { name: 'Red', color: '#dc2626' },
                    { name: 'Green', color: '#16a34a' },
                    { name: 'Purple', color: '#7c3aed' },
                    { name: 'Pink', color: '#ec4899' },
                  ].map((color) => (
                    <button
                      key={color.name}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 hover:scale-110 transition-transform"
                      style={{ background: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{products.length}</span> products
              </p>
              
              <div className="flex items-center gap-4">
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewType('grid')}
                    className={`p-2 rounded ${viewType === 'grid' ? 'bg-white shadow' : ''}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewType('list')}
                    className={`p-2 rounded ${viewType === 'list' ? 'bg-white shadow' : ''}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  </button>
                </div>

                {/* Sort */}
                <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewType === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product, index) => (
                <a
                  key={index}
                  href={`/products/${product.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-[#E1921D] text-white text-xs font-bold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Quick View */}
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-white text-[#4C1C5B] px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#4C1C5B] hover:text-white">
                      Quick View
                    </button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase text-gray-500 tracking-wider">{product.category}</p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#4C1C5B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">${product.price}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-[#4C1C5B]">Previous</button>
              <button className="px-4 py-2 bg-[#4C1C5B] text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-[#4C1C5B]">2</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-[#4C1C5B]">3</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-[#4C1C5B]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CollectionPage;