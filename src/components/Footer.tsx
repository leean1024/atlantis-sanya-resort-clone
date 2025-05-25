import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+86 898 8898 6666</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@atlantissanya.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>WeChat</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">360 Interactive Map</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Marine and Waterpark</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Experiences</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Meetings and Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Weddings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Spa and Fitness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shopping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Attractions</a></li>
            </ul>
          </div>

          {/* Language and Social */}
          <div>
            <h3 className="text-xl font-medium mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <div>
                <span className="text-gray-300">Language: EN</span>
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-green-600 transition-colors">
                  W
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-lg font-bold text-blue-400 mr-4">
                ATLANTIS SANYA
              </div>
              <span className="text-gray-300 text-sm">
                © 2024 Atlantis Sanya. All rights reserved.
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;