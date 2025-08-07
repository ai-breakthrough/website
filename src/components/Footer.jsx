import React from 'react';
import { Brain, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 orange-gradient rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-inter">
                Core<span className="coreai-text-gradient">AI</span>.dk
              </span>
            </div>
            <p className="text-gray-300 mb-6 font-source-sans">
              Danish-Ukrainian AI consultancy delivering innovative B2B solutions 
              that transform businesses while supporting Ukraine.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Supporting Ukraine 🇺🇦</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-inter">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-source-sans"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-source-sans"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-source-sans"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#faq')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-source-sans"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-source-sans"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-inter">Our Services</h3>
            <ul className="space-y-3 text-gray-300 font-source-sans">
              <li>Machine Learning Implementation</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision Solutions</li>
              <li>AI Strategy Consulting</li>
              <li>Custom AI Development</li>
              <li>Data Analytics & Insights</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-inter">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300 text-sm font-source-sans">
                  <p>Vesterbrogade 1A</p>
                  <p>1620 Copenhagen V</p>
                  <p>Denmark</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="text-gray-300 text-sm font-source-sans">
                  <p>+45 12 34 56 78</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div className="text-gray-300 text-sm font-source-sans">
                  <p>hello@coreai.dk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-source-sans">
              © 2024 CoreAI.dk. All rights reserved. Made with ❤️ in Denmark and Ukraine.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

