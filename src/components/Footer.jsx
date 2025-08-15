import React from "react";
import { Brain, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = () => {
    const element = document.querySelector("#booking-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Tagline + Copyright */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 orange-gradient rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-inter">
                Core<span className="coreai-text-gradient">AI</span>
              </span>
            </div>
            <p className="text-gray-400 font-source-sans">
              Transforming business operations with intelligent AI solutions
            </p>
            <p className="text-gray-500 text-sm font-source-sans">
              © 2024 CoreAI. All rights reserved.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-inter">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("#approach")}
                className="block text-gray-400 hover:text-orange-400 transition-colors duration-200 font-source-sans"
              >
                Approach
              </button>
              <button
                onClick={() => scrollToSection("#services")}
                className="block text-gray-400 hover:text-orange-400 transition-colors duration-200 font-source-sans"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("#use-cases")}
                className="block text-gray-400 hover:text-orange-400 transition-colors duration-200 font-source-sans"
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollToSection("#tools-platforms")}
                className="block text-gray-400 hover:text-orange-400 transition-colors duration-200 font-source-sans"
              >
                Tools & Platforms
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className="block text-gray-400 hover:text-orange-400 transition-colors duration-200 font-source-sans"
              >
                About
              </button>
              <button
                onClick={scrollToBooking}
                className="block text-gray-400 hover:text-orange-400 transition-colors duration-200 font-source-sans"
              >
                Book Session
              </button>
            </div>
          </div>

          {/* Right: Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-inter">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="font-source-sans">Copenhagen, Denmark</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-orange-400" />
                <a
                  href="mailto:hello@coreai.dk"
                  className="font-source-sans hover:text-orange-400 transition-colors duration-200"
                >
                  hello@coreai.dk
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="font-source-sans">+45 XX XX XX XX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm font-source-sans">
            Empowering businesses with intelligent automation and AI-driven
            insights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
