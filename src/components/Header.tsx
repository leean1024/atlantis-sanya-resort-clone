'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-gray-600">EN</span>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">+86 898 8898 6666</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">info@atlantissanya.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">Location</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="bg-blue-600 text-white px-2 md:px-4 py-1 rounded text-xs md:text-sm hover:bg-blue-700 transition-colors">
              TICKETS
            </button>
            <button className="bg-orange-500 text-white px-2 md:px-4 py-1 rounded text-xs md:text-sm hover:bg-orange-600 transition-colors">
              BOOKING
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              ATLANTIS SANYA
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              360 INTERACTIVE MAP
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              ROOMS
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              MARINE AND WATERPARK
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              RESTAURANTS
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              EXPERIENCES
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              MEETINGS AND EVENTS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                360 INTERACTIVE MAP
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                ROOMS
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                MARINE AND WATERPARK
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                RESTAURANTS
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                EXPERIENCES
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                MEETINGS AND EVENTS
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;