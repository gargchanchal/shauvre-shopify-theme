import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'AED', symbol: 'AED', name: 'UAE Dirham' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  ];

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
    // Store in localStorage for persistence
    localStorage.setItem('selectedCurrency', e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Announcement Bar */}
      <div className="bg-[#4C1C5B] text-white text-center py-2 px-4">
        <p className="text-sm font-medium">THE SUMMER COLLECTION HAS ARRIVED - SHOP NEW ARRIVALS NOW</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <a href="/" className="inline-block">
              <img 
                src="https://customer-assets.emergentagent.com/job_boutique-launch/artifacts/u4okpnuu_LOGO%20SR%20%282%29%281%29.png" 
                alt="Shauvre Logo" 
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <a href="#new-arrivals" className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors">
              NEW ARRIVALS
            </a>
            <a href="#collections" className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors">
              COLLECTIONS
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <div className="relative">
              <select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className="h-10 px-3 pr-8 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:border-[#4C1C5B] focus:border-[#4C1C5B] focus:outline-none focus:ring-2 focus:ring-[#4C1C5B]/20 transition-colors cursor-pointer appearance-none"
                aria-label="Select currency"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} {currency.symbol}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors relative" aria-label="Shopping bag">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-[#E1921D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#new-arrivals"
                className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                NEW ARRIVALS
              </a>
              <a
                href="#collections"
                className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                COLLECTIONS
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-[#4C1C5B] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
