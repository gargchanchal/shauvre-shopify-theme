import React, { useState } from 'react';
import { featuredProducts } from '../data/mockData';
import { Check, Heart, Share2, Truck, RefreshCcw, Shield, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Silk Evening Gown",
    price: 495,
    comparePrice: 650,
    vendor: "SHAUVRE",
    rating: 4.8,
    reviews: 24,
    images: [
      "https://images.unsplash.com/photo-1559034750-cdab70a66b8e",
      "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac",
      "https://images.unsplash.com/photo-1601859574492-8658b6f7f990",
      "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b"
    ],
    description: "Experience luxury with our signature silk evening gown. Crafted from premium Italian silk with meticulous attention to detail, this elegant piece features a flattering bias-cut silhouette that drapes beautifully. Perfect for special occasions, weddings, and evening events.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000' },
      { name: 'Navy', hex: '#1e3a8a' },
      { name: 'Burgundy', hex: '#7f1d1d' },
      { name: 'Emerald', hex: '#064e3b' }
    ],
    features: [
      'Premium Italian silk',
      'Bias-cut for flattering fit',
      'Invisible zipper closure',
      'Fully lined',
      'Dry clean only'
    ]
  };

  const savings = ((product.comparePrice - product.price) / product.comparePrice * 100).toFixed(0);

  const handleAddToCart = () => {
    toast.success('Added to cart!', {
      description: `${product.name} - ${selectedSize} - ${selectedColor}`,
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-4">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-[#4C1C5B]">Home</a>
            <span className="mx-2">/</span>
            <a href="/collections" className="hover:text-[#4C1C5B]">Collections</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Gallery */}
          <div className="sticky top-24 h-fit">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  -{savings}% SALE
                </span>
                <span className="bg-[#E1921D] text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW ARRIVAL
                </span>
              </div>

              {/* Zoom button */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg aspect-square border-2 transition-all ${
                    selectedImage === index ? 'border-[#4C1C5B]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Vendor */}
            <p className="text-xs uppercase text-gray-500 tracking-wider mb-2">{product.vendor}</p>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Reviews */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[#E1921D]">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold text-red-600">${product.price}</span>
              <span className="text-xl text-gray-400 line-through">${product.comparePrice}</span>
              <span className="text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                Save {savings}%
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-6">Tax included. Shipping calculated at checkout.</p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8 pb-8 border-b">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold">Color</label>
                <span className="text-sm text-gray-600">{selectedColor}</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? 'border-[#4C1C5B] scale-110' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ background: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold">Size</label>
                <button className="text-sm text-[#4C1C5B] hover:underline">Size Guide</button>
              </div>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'border-[#4C1C5B] bg-[#4C1C5B] text-white'
                        : 'border-gray-200 hover:border-[#4C1C5B]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-4">
              <div className="flex items-center border-2 border-gray-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-6 py-3 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#4C1C5B] hover:bg-[#E1921D] text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                Add to Cart
              </button>
            </div>

            {/* Buy Now & Wishlist */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-white border-2 border-[#4C1C5B] text-[#4C1C5B] py-4 rounded-lg font-semibold hover:bg-[#4C1C5B] hover:text-white transition-all">
                Buy it Now
              </button>
              <button className="border-2 border-gray-200 p-4 rounded-lg hover:border-[#4C1C5B] hover:text-[#4C1C5B] transition-all">
                <Heart className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-200 p-4 rounded-lg hover:border-[#4C1C5B] hover:text-[#4C1C5B] transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-lg mb-8">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-[#4C1C5B]" />
                <div>
                  <p className="text-sm font-semibold">Free Shipping</p>
                  <p className="text-xs text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCcw className="w-6 h-6 text-[#4C1C5B]" />
                <div>
                  <p className="text-sm font-semibold">Easy Returns</p>
                  <p className="text-xs text-gray-600">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#4C1C5B]" />
                <div>
                  <p className="text-sm font-semibold">Premium Quality</p>
                  <p className="text-xs text-gray-600">Finest materials</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#4C1C5B]" />
                <div>
                  <p className="text-sm font-semibold">Secure Payment</p>
                  <p className="text-xs text-gray-600">SSL encrypted</p>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              <details className="group border-b pb-4">
                <summary className="flex items-center justify-between cursor-pointer font-semibold py-4">
                  <span>Product Details</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <ul className="space-y-2 text-gray-600 pl-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#4C1C5B] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex items-center justify-between cursor-pointer font-semibold py-4">
                  <span>Shipping & Returns</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Shipping:</strong> Free standard shipping on orders over $100. Express available.</p>
                  <p><strong>Returns:</strong> 30-day return policy. Items must be unworn and in original packaging.</p>
                </div>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex items-center justify-between cursor-pointer font-semibold py-4">
                  <span>Care Instructions</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <ul className="text-gray-600 space-y-1 list-disc pl-6">
                  <li>Dry clean only</li>
                  <li>Do not bleach</li>
                  <li>Store on padded hanger</li>
                  <li>Keep away from direct sunlight</li>
                </ul>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((item, i) => (
              <a key={i} href="#" className="group">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold group-hover:text-[#4C1C5B]">{item.name}</h3>
                <p className="font-bold">${item.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;