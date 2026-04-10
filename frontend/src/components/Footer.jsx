import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#4C1C5B]">SHOUVRE</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Luxury fashion and timeless elegance. Discover our curated collection of premium clothing and accessories.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-[#4C1C5B] rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-[#4C1C5B] rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-gray-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:info@shouvre.com"
                className="w-10 h-10 bg-gray-100 hover:bg-[#4C1C5B] rounded-full flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail size={18} className="text-gray-700 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#new-arrivals" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#collections" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Collections
                </a>
              </li>
              <li>
                <a href="#sale" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Sale
                </a>
              </li>
              <li>
                <a href="#accessories" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#returns" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#press" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Shouvre. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-600 hover:text-[#4C1C5B] transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
