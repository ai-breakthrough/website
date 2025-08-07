import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import denmarkImage from '../assets/NnJayPQKKHbk.jpg';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={denmarkImage} 
          alt="Denmark landscape" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-purple-900/40"></div>
      
      {/* Additional Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-8 slide-in-up">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">Danish-Ukrainian AI Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight font-inter slide-in-up">
            AI Solutions That
            <br />
            <span className="coreai-text-gradient">
              Transform
            </span>
            <br />
            Danish Businesses
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-source-sans slide-in-up">
            Expert AI consultancy bridging Denmark and Ukraine with innovative B2B solutions. 
            Combining Nordic design thinking with Eastern European technical excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 slide-in-up">
            <Button 
              onClick={() => scrollToSection('#services')}
              className="orange-gradient hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center space-x-2 border-0"
            >
              <span>Discover Our Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => document.getElementById('chatbot-trigger')?.click()}
              variant="outline"
              className="border-purple-400/50 text-white hover:bg-purple-500/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Our AI Expert</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto slide-in-up">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70 font-medium">AI Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">2</div>
              <div className="text-white/70 font-medium">Countries United</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full floating-animation hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-yellow-400/10 rounded-full floating-animation hidden lg:block" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-400/10 rounded-full floating-animation hidden lg:block" style={{animationDelay: '4s'}}></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

